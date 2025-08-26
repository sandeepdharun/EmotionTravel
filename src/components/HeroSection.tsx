<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emotional Travel Intelligence</title>
    <script src="https://cdn.jsdelivr.net/npm/three@0.132.2/build/three.min.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        body {
            background-color: #000;
            color: white;
            overflow-x: hidden;
        }

        .hero-section {
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background-color: black;
        }

        .space-gradient {
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, #1e293b, #000, #0f172a);
            z-index: -10;
        }

        .earth-glow {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 400px;
            height: 400px;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(52, 211, 153, 0.3));
            filter: blur(48px);
            animation: pulse 4s ease-in-out infinite;
        }

        .main-content {
            position: relative;
            z-index: 10;
            text-align: center;
            padding: 0 1.5rem;
            max-width: 80rem;
            margin: 0 auto;
        }

        .tagline {
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 3rem;
            padding: 0.75rem 1.5rem;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border-radius: 9999px;
            border: 1px solid rgba(96, 165, 250, 0.5);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s;
            cursor: pointer;
        }

        .tagline:hover {
            transform: scale(1.05);
        }

        .heart-icon {
            width: 1.25rem;
            height: 1.25rem;
            color: #60a5fa;
        }

        .tagline-text {
            color: white;
            font-size: 0.875rem;
            font-weight: 500;
            letter-spacing: 0.025em;
        }

        .compass-icon {
            width: 1rem;
            height: 1rem;
            color: #2dd4bf;
            animation: pulse 2s ease-in-out infinite;
        }

        .heading {
            font-size: 4.5rem;
            font-weight: 900;
            color: white;
            line-height: 0.9;
            letter-spacing: -0.025em;
            margin-bottom: 2rem;
        }

        @media (min-width: 768px) {
            .heading {
                font-size: 7rem;
            }
        }

        .gradient-text {
            background: linear-gradient(to right, #3b82f6, #2dd4bf, #10b981);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: pulse 3s ease-in-out infinite;
        }

        .description {
            max-width: 42rem;
            margin: 0 auto;
            font-size: 1.125rem;
            color: #d1d5db;
            line-height: 1.75;
            margin-bottom: 3rem;
        }

        .blue-text {
            color: #60a5fa;
            font-weight: 600;
        }

        .teal-text {
            color: #2dd4bf;
            font-weight: 600;
        }

        .emerald-text {
            color: #34d399;
            font-weight: 600;
        }

        .buttons {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            justify-content: center;
            margin-bottom: 4rem;
        }

        @media (min-width: 640px) {
            .buttons {
                flex-direction: row;
            }
        }

        .btn-primary {
            background: linear-gradient(to right, #2563eb, #0d9488);
            color: white;
            padding: 1.5rem 2.5rem;
            border-radius: 9999px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s;
            border: none;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
        }

        .btn-primary:hover {
            transform: scale(1.05);
        }

        .btn-outline {
            border: 2px solid rgba(96, 165, 250, 0.6);
            background: rgba(255, 255, 255, 0.1);
            color: white;
            padding: 1.5rem 2.5rem;
            border-radius: 9999px;
            transition: transform 0.3s;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
        }

        .btn-outline:hover {
            transform: scale(1.05);
        }

        #earth-container {
            position: absolute;
            right: 5%;
            top: 50%;
            transform: translateY(-50%);
            width: 500px;
            height: 500px;
            z-index: 1;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }

        @media (max-width: 1024px) {
            #earth-container {
                display: none;
            }
            
            .heading {
                font-size: 3.5rem;
            }
        }

        .stars {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }

        .star {
            position: absolute;
            background-color: white;
            border-radius: 50%;
        }
    </style>
</head>
<body>
    <section class="hero-section">
        <!-- Background Space Gradient -->
        <div class="space-gradient"></div>

        <!-- Stars -->
        <div class="stars" id="stars"></div>

        <!-- Earth Glow in Center -->
        <div class="earth-glow"></div>

        <!-- 3D Earth Container -->
        <div id="earth-container"></div>

        <!-- Main Content -->
        <div class="main-content">
            <!-- Tagline -->
            <div class="tagline" onmouseenter="setIsHovering(true)" onmouseleave="setIsHovering(false)">
                <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <span class="tagline-text">Emotional Travel Intelligence • Feel-First Journey</span>
                <svg class="compass-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>
            </div>

            <!-- Heading -->
            <h1 class="heading">
                Journey <br> Beyond <br>
                <span class="gradient-text">Emotions</span>
            </h1>

            <!-- Description -->
            <p class="description">
                <span class="blue-text">Discover your emotional compass</span> and let your feelings
                guide you to <span class="teal-text">extraordinary destinations</span>. <br>
                Travel that <span class="emerald-text">heals, inspires & transforms</span> your soul.
            </p>

            <!-- Buttons -->
            <div class="buttons">
                <button class="btn-primary">Start Your Journey</button>
                <button class="btn-outline">Discover Emotions</button>
            </div>
        </div>
    </section>

    <script>
        // Create stars
        function createStars() {
            const starsContainer = document.getElementById('stars');
            const starsCount = 200;
            
            for (let i = 0; i < starsCount; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                
                const size = Math.random() * 3;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                
                star.style.opacity = Math.random();
                star.style.animation = `twinkle ${5 + Math.random() * 5}s infinite alternate`;
                
                starsContainer.appendChild(star);
            }
        }

        // Create 3D Earth
        function initEarth() {
            const container = document.getElementById('earth-container');
            
            // Create scene
            const scene = new THREE.Scene();
            
            // Create camera
            const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
            camera.position.z = 7;
            
            // Create renderer
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(500, 500);
            renderer.setPixelRatio(window.devicePixelRatio);
            container.appendChild(renderer.domElement);
            
            // Create Earth
            const geometry = new THREE.SphereGeometry(2, 32, 32);
            
            // Load Earth texture
            const textureLoader = new THREE.TextureLoader();
            const earthTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg');
            const bumpMap = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg');
            const specularMap = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg');
            
            const material = new THREE.MeshPhongMaterial({
                map: earthTexture,
                bumpMap: bumpMap,
                bumpScale: 0.05,
                specularMap: specularMap,
                specular: new THREE.Color(0x333333),
                shininess: 5
            });
            
            const earth = new THREE.Mesh(geometry, material);
            scene.add(earth);
            
            // Add clouds
            const cloudGeometry = new THREE.SphereGeometry(2.05, 32, 32);
            const cloudTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png');
            const cloudMaterial = new THREE.MeshPhongMaterial({
                map: cloudTexture,
                transparent: true,
                opacity: 0.4
            });
            
            const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
            scene.add(clouds);
            
            // Add ambient light
            const ambientLight = new THREE.AmbientLight(0x333333);
            scene.add(ambientLight);
            
            // Add directional light (sun)
            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(5, 3, 5);
            scene.add(directionalLight);
            
            // Add Earth glow
            const glowGeometry = new THREE.SphereGeometry(2.2, 32, 32);
            const glowMaterial = new THREE.ShaderMaterial({
                uniforms: {
                    glowColor: { value: new THREE.Color(0x00aaff) },
                    viewVector: { value: camera.position }
                },
                vertexShader: `
                    uniform vec3 viewVector;
                    varying float intensity;
                    void main() {
                        vec3 vNormal = normalize(normalMatrix * normal);
                        vec3 vNormel = normalize(normalMatrix * viewVector);
                        intensity = pow(0.4 - dot(vNormal, vNormel), 2.0);
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `,
                fragmentShader: `
                    uniform vec3 glowColor;
                    varying float intensity;
                    void main() {
                        vec3 glow = glowColor * intensity;
                        gl_FragColor = vec4(glow, 0.8);
                    }
                `,
                side: THREE.BackSide,
                blending: THREE.AdditiveBlending,
                transparent: true
            });
            
            const glow = new THREE.Mesh(glowGeometry, glowMaterial);
            scene.add(glow);
            
            // Animation
            function animate() {
                requestAnimationFrame(animate);
                
                earth.rotation.y += 0.0015;
                clouds.rotation.y += 0.0018;
                glow.rotation.y += 0.0015;
                
                renderer.render(scene, camera);
            }
            
            animate();
            
            // Handle window resize
            window.addEventListener('resize', () => {
                renderer.setSize(500, 500);
                camera.aspect = 1;
                camera.updateProjectionMatrix();
            });
        }

        // Initialize
        function init() {
            createStars();
            initEarth();
        }

        // Hover state for tagline
        function setIsHovering(state) {
            const tagline = document.querySelector('.tagline');
            if (state) {
                tagline.style.transform = 'scale(1.05)';
            } else {
                tagline.style.transform = 'scale(1)';
            }
        }

        // Start when page is loaded
        window.addEventListener('DOMContentLoaded', init);
    </script>
</body>
</html>