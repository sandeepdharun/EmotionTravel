
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, CameraOff, AlertCircle, Mic, MicOff, Square, Edit2, Globe } from "lucide-react";
import * as faceapi from "face-api.js";

// Type definition for Web Speech API
interface IWindow extends Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
}

// Supported text-to-speech languages
const SUPPORTED_LANGUAGES = [
    { code: 'en-US', name: 'English (US)' },
    { code: 'en-GB', name: 'English (UK)' },
    { code: 'ta-IN', name: 'Tamil' },
    { code: 'hi-IN', name: 'Hindi' },
    { code: 'ml-IN', name: 'Malayalam' },
];

export function EmotionCameraSection() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [detectedEmotion, setDetectedEmotion] = useState<string | null>(null);
    const detectionIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const [modelsLoaded, setModelsLoaded] = useState(false);
    const [emotionCaptured, setEmotionCaptured] = useState(false);

    // Speech Recognition State
    const [isListening, setIsListening] = useState(false);
    const [speechText, setSpeechText] = useState("");
    const [speechError, setSpeechError] = useState<string | null>(null);

    // Initialize language with navigator language if supported, else en-US
    const [speechLanguage, setSpeechLanguage] = useState<string>(() => {
        const browserLang = navigator.language;
        // Check if browserLang matches exactly or is a prefix of a supported language
        const supported = SUPPORTED_LANGUAGES.find(l => l.code === browserLang || l.code.startsWith(browserLang));
        return supported ? supported.code : "en-US";
    });
    const recognitionRef = useRef<any>(null);

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        // Load models on mount
        const loadModels = async () => {
            try {
                await Promise.all([
                    faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
                    faceapi.nets.faceExpressionNet.loadFromUri("/models"),
                ]);
                setModelsLoaded(true);
                console.log("Face API models loaded");
            } catch (err) {
                console.error("Error loading face-api models:", err);
                setError("Failed to load emotion detection models.");
            }
        };
        loadModels();

        // Cleanup stream on unmount
        return () => {
            stopCameraAndDetection();
        };
    }, []);

    const startDetection = () => {
        if (detectionIntervalRef.current) clearInterval(detectionIntervalRef.current);

        detectionIntervalRef.current = setInterval(async () => {
            if (videoRef.current && videoRef.current.readyState === 4) {
                try {
                    const detections = await faceapi
                        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
                        .withFaceExpressions();

                    if (detections && detections.length > 0) {
                        // Get the first face detected
                        const expressions = detections[0].expressions;

                        // Find the dominant emotion
                        const sorted = Object.entries(expressions).sort((a, b) => b[1] - a[1]);
                        const dominant = sorted[0];

                        if (dominant && dominant[1] > 0.5) { // Threshold
                            setDetectedEmotion(dominant[0]);

                            // 🛑 FREEZE EMOTION & STOP DETECTION 🛑
                            if (detectionIntervalRef.current) {
                                clearInterval(detectionIntervalRef.current);
                                detectionIntervalRef.current = null;
                            }
                            setEmotionCaptured(true);
                        } else {
                            // Only reset if we haven't captured yet
                            if (!emotionCaptured) {
                                setDetectedEmotion(null);
                            }
                        }
                    } else if (!emotionCaptured) {
                        setDetectedEmotion(null);
                    }
                } catch (err) {
                    // Silent catch to prevent console spam
                }
            }
        }, 400); // Check every 400ms
    };

    const stopCameraAndDetection = () => {
        if (detectionIntervalRef.current) {
            clearInterval(detectionIntervalRef.current);
            detectionIntervalRef.current = null;
        }

        if (stream) {
            stream.getTracks().forEach((track) => track.stop());
            setStream(null);
        }

        if (videoRef.current) {
            videoRef.current.srcObject = null;
        }
        setDetectedEmotion(null);
        setEmotionCaptured(false);
        stopListening();
    };

    const startCamera = async () => {
        if (!modelsLoaded) {
            setError("Models not loaded yet, please wait...");
            return;
        }

        setLoading(true);
        setError(null);
        setEmotionCaptured(false);
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: "user" },
            });
            setStream(mediaStream);
            if (videoRef.current) {
                videoRef.current.srcObject = mediaStream;
                // Wait for video to play before starting detection
                videoRef.current.onplay = () => {
                    startDetection();
                };
            }
        } catch (err) {
            console.error("Error accessing camera:", err);
            setError(
                "Unable to access camera. Please check your browser permissions."
            );
        } finally {
            setLoading(false);
        }
    };

    const handleStopCamera = () => {
        stopCameraAndDetection();
    };

    const handleRecapture = () => {
        setDetectedEmotion(null);
        setEmotionCaptured(false);
        setSpeechText("");
        setSpeechError(null);
        startDetection();
    };

    // --- Speech Recognition Logic ---

    const startListening = (retryLang?: string) => {
        if (isListening) return;

        setSpeechError(null);
        const windowObj = window as unknown as IWindow;
        const SpeechRecognition = windowObj.SpeechRecognition || windowObj.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            setSpeechError("Voice recognition is not supported in this browser.");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = true; // Enable continuous recording
        recognition.interimResults = false;

        // Determine language: explicit retry > navigator > default
        // Ensure retryLang is actually a string (not an event object from onClick)
        const targetLang = (typeof retryLang === 'string' && retryLang)
            ? retryLang
            : speechLanguage;

        recognition.lang = targetLang;
        if (retryLang && retryLang !== speechLanguage) setSpeechLanguage(retryLang);

        console.log(`Starting speech recognition in: ${targetLang}`);

        recognition.onstart = () => {
            setIsListening(true);
        };

        recognition.onresult = (event: any) => {
            const currentIndex = event.resultIndex;
            const transcript = event.results[currentIndex][0].transcript;
            setSpeechText(prev => prev ? `${prev} ${transcript}` : transcript);
        };

        recognition.onerror = (event: any) => {
            console.error("Speech recognition error", event.error);

            // Automatic Language Fallback
            if (event.error === 'language-not-supported' && targetLang !== 'en-US') {
                console.warn("Language not supported, retrying with en-US...");
                setIsListening(false);
                setTimeout(() => startListening('en-US'), 100);
                return;
            }

            if (event.error === 'not-allowed') {
                setSpeechError("Microphone blocked. Check permissions.");
            } else if (event.error === 'no-speech') {
                // Ignore no-speech in continuous mode, just keep listening
                return;
            } else if (event.error === 'network') {
                if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                    setSpeechError("Chrome blocks local speech. Check console for fix.");
                    console.warn("----------------------------------------------------------------");
                    console.warn("SPEECH RECOGNITION FIX FOR LOCALHOST (CHROME):");
                    console.warn("1. Go to: chrome://flags/#unsafely-treat-insecure-origin-as-secure");
                    console.warn("2. Enable it.");
                    console.warn(`3. Add "http://${window.location.host}" to the text box.`);
                    console.warn("4. Relaunch Chrome.");
                    console.warn("Alternatively, try using Microsoft Edge or Firefox.");
                    console.warn("----------------------------------------------------------------");
                } else {
                    setSpeechError("Network error. Please check your connection.");
                }
            } else {
                setSpeechError("Voice unavailable. Please type.");
            }

            // Only stop on fatal errors
            if (event.error !== 'no-speech') {
                setIsListening(false);
                if (textareaRef.current) {
                    textareaRef.current.focus();
                }
            }
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognitionRef.current = recognition;
        recognition.start();
    };

    const stopListening = () => {
        if (recognitionRef.current) {
            recognitionRef.current.stop();
            recognitionRef.current = null;
        }
        setIsListening(false);
    };

    const toggleListening = () => {
        if (isListening) {
            stopListening();
        } else {
            startListening();
        }
    };

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display italic text-5xl md:text-6xl text-white mb-6"
                    >
                        Live Emotion <span className="text-indigo-400">Camera</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/60 text-lg max-w-2xl mx-auto"
                    >
                        Turn on your camera to preview your emotion in real time.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative bg-gradient-to-br from-indigo-900/20 via-black/40 to-black/60 backdrop-blur-xl rounded-3xl border border-white/10 p-6 md:p-8 shadow-2xl"
                >
                    {/* Video Container */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/80 border border-white/5 mb-8 shadow-inner ring-1 ring-white/5">
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            className={`w-full h-full object-cover transition-opacity duration-500 ${stream ? "opacity-100" : "opacity-0"
                                }`}
                        />

                        {/* Emotion Text Overlay */}
                        <AnimatePresence>
                            {stream && detectedEmotion && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
                                >
                                    <h3 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-widest drop-shadow-lg bg-black/20 backdrop-blur-sm px-6 py-2 rounded-xl border border-white/10">
                                        {detectedEmotion}
                                    </h3>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Placeholder Overlay */}
                        {!stream && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white/40 bg-white/5 backdrop-blur-sm">
                                {error ? (
                                    <div className="flex flex-col items-center gap-3 text-red-400 px-4 text-center">
                                        <AlertCircle className="w-10 h-10" />
                                        <p>{error}</p>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center gap-3">
                                        <Camera className="w-10 h-10 opacity-50" />
                                        <p className="font-light tracking-wide text-sm md:text-base">
                                            Turn on your camera to see the live preview.
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Loading functional indicator */}
                        {loading && !stream && !error && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-20">
                                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
                            </div>
                        )}
                    </div>

                    {/* Controls */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        {!stream ? (
                            <button
                                onClick={startCamera}
                                disabled={loading || !modelsLoaded}
                                className="group relative px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden w-full sm:w-auto"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] skew-x-12 transition-transform duration-1000 ease-in-out group-hover:translate-x-[200%]" />
                                <span className="relative flex items-center justify-center gap-2">
                                    <Camera className="w-4 h-4" />
                                    {loading ? "Accessing Camera..." : (!modelsLoaded ? "Loading Models..." : "Turn On Camera")}
                                </span>
                            </button>
                        ) : emotionCaptured ? (
                            <div className="flex gap-4">
                                <button
                                    onClick={handleRecapture}
                                    className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium border border-white/10 transition-all duration-300 hover:border-white/30 backdrop-blur-md flex items-center gap-2"
                                >
                                    <Camera className="w-4 h-4" />
                                    Recapture
                                </button>
                                <button
                                    onClick={handleStopCamera}
                                    className="px-8 py-3 bg-red-500/20 hover:bg-red-500/30 text-red-200 rounded-full font-medium border border-red-500/30 transition-all duration-300 backdrop-blur-md flex items-center gap-2"
                                >
                                    <CameraOff className="w-4 h-4" />
                                    Close
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={handleStopCamera}
                                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium border border-white/10 transition-all duration-300 hover:border-white/30 w-full sm:w-auto flex items-center justify-center gap-2 backdrop-blur-md"
                            >
                                <CameraOff className="w-4 h-4" />
                                Turn Off
                            </button>
                        )}
                    </div>

                    {/* Speech Recognition Section - Only after emotion is detected */}
                    {stream && emotionCaptured && (
                        <div className="mt-8 border-t border-white/10 pt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
                                <p className="text-white/60 text-sm">
                                    Describe your situation to personalize your recommendation
                                </p>

                                <div className="flex flex-col items-center gap-4 w-full">


                                    {/* Language Selector */}
                                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 transition-colors mb-4">
                                        <Globe className="w-4 h-4 text-indigo-400" />
                                        <select
                                            value={speechLanguage}
                                            onChange={(e) => setSpeechLanguage(e.target.value)}
                                            className="bg-transparent text-white text-sm focus:outline-none cursor-pointer [&>option]:bg-black [&>option]:text-white"
                                            disabled={isListening}
                                        >
                                            {SUPPORTED_LANGUAGES.map((lang) => (
                                                <option key={lang.code} value={lang.code}>
                                                    {lang.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Mic Button */}
                                    <button
                                        onClick={toggleListening}
                                        className={`group relative p-4 rounded-full transition-all duration-300 ${isListening
                                            ? "bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)] animate-pulse"
                                            : "bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-white/30"
                                            }`}
                                    >
                                        {isListening ? (
                                            <Square className="w-6 h-6 fill-current" />
                                        ) : (
                                            <Mic className="w-6 h-6" />
                                        )}
                                    </button>

                                    {/* Status Text */}
                                    <div className="h-6 text-sm font-medium tracking-wide">
                                        {isListening ? (
                                            <span className="text-red-400 font-semibold animate-pulse">Recording... Click stop to save</span>
                                        ) : speechError ? (
                                            <span className="text-amber-400">{speechError}</span>
                                        ) : (
                                            <span className="text-white/40">
                                                {speechText ? "Edit your story below" : "Click mic to start recording"}
                                            </span>
                                        )}
                                    </div>

                                    {/* Editable Text Area */}
                                    <div className="w-full relative group">
                                        <div className="absolute top-3 left-3 text-white/20 pointer-events-none">
                                            <Edit2 className="w-4 h-4" />
                                        </div>
                                        <textarea
                                            ref={textareaRef}
                                            value={speechText}
                                            onChange={(e) => setSpeechText(e.target.value)}
                                            placeholder="Your story will appear here..."
                                            className="w-full bg-black/40 hover:bg-black/60 focus:bg-black/80 border border-white/10 focus:border-indigo-500/50 rounded-xl py-4 pl-10 pr-4 text-white placeholder:text-white/20 outline-none transition-all duration-300 min-h-[100px] resize-none leading-relaxed"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
