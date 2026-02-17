
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, CameraOff, AlertCircle } from "lucide-react";
import * as faceapi from "face-api.js";

export function EmotionCameraSection() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [detectedEmotion, setDetectedEmotion] = useState<string | null>(null);
    const detectionIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const [modelsLoaded, setModelsLoaded] = useState(false);

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
                        } else {
                            setDetectedEmotion(null);
                        }
                    } else {
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
    };

    const startCamera = async () => {
        if (!modelsLoaded) {
            setError("Models not loaded yet, please wait...");
            return;
        }

        setLoading(true);
        setError(null);
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
                </motion.div>
            </div>
        </section>
    );
}
