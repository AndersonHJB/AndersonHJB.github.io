---
title: 06-Gemini 实现圣诞树🎄
icon: blog
date: 2025-12-21 21:31:34
author: AI悦创
isOriginal: true
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
comment: true

backToTop: true
toc: true
---

## 1. 初代提示词

- Gemini 聊天分享：[https://gemini.google.com/share/aa96289aa318](https://gemini.google.com/share/aa96289aa318)
- [https://gemini.google.com/share/013228923ddb](https://gemini.google.com/share/013228923ddb)

```txt
角色设定：你是一位精通Three.js、WebGL和计算机视觉的创意前端开发专家。
任务：编写一个包含HTML、CSS和JavaScript的单文件应用。该应用需要结合 Three.js 和 MediaPipe Hands 来创建一个基于手势控制的3D粒子特效系统。
要求：（此处大家根据想法扩展）
参考以下内容
#角色设定：
你是一位精通Three.js、WebGL和视觉设计前端开发。
##任务目标
编写一个包含HTML、CSS和JavaScript的单文件应用。该应用需要结合 Three.js 和 MediaPipe Hands 来创建一个基于手势控制的3D粒子+照片云构成的圣诞树。
##要求
1、<整体内容:>
-主色系:哑光绿 + 金属金+圣诞红色；
-有电影感的辉光与光晕效果，整体金碧辉煌有高级感
-圣诞树由 若干球、正方体、糖果棍和照片云等元素构成，照片通过上传获取。
2、<交互逻辑和状态:>
1、圣诞树状态
- 合拢态（初始状态）：所有元素收拢、聚合为一个圣诞树圆锥体。
- 散开态：所有元素在空间中无序漂浮、散落
- 照片放大态：在背景保持散开态的同时，放大单张照片
3、<手势动作:>
- 握拳表示回到合拢态
- 打开五指表示进入到散开态
- 手旋转表示在散开态的状态下，对画面进行旋转，根据手的移动调整相机角度
- 抓的动作表示抓住一张照片，进入照片放大态
4、<交互要求:>
需要根据手势，在几个状态之间平滑切换，带有过渡动画。
##包括但不限于使用以下技术栈 Three.js、WebGL、instanced Mesh、Shaders / GLSL、MediaPipe Hands
```



## 2. 代码迭代

::: tabs

@tab Code1

- 图片会倒着；
- 圣诞树太简陋；

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Gesture Controlled Christmas Tree</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            background-color: #111; /* 稍微提亮一点点背景，不是纯黑 */
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #fff;
        }

        #canvas-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        /* UI Overlay */
        #ui-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
            pointer-events: none; /* Let clicks pass through to canvas if needed */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 20px;
            box-sizing: border-box;
        }

        .header {
            text-align: left;
            text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
        }

        h1 {
            margin: 0;
            font-weight: 300;
            color: #FFD700; /* Gold */
            letter-spacing: 2px;
            font-size: 24px;
        }

        p.subtitle {
            margin: 5px 0 0 0;
            color: #aaa;
            font-size: 14px;
        }

        /* Status & Instructions */
        .status-panel {
            position: absolute;
            top: 20px;
            right: 20px;
            text-align: right;
        }

        .status-tag {
            display: inline-block;
            padding: 8px 16px;
            background: rgba(20, 30, 20, 0.8);
            border: 1px solid #FFD700;
            border-radius: 20px;
            color: #FFD700;
            font-weight: bold;
            font-size: 14px;
            margin-bottom: 10px;
            transition: all 0.3s ease;
        }

        .instructions {
            background: rgba(0, 0, 0, 0.5);
            padding: 15px;
            border-radius: 8px;
            font-size: 12px;
            color: #ddd;
            max-width: 250px;
            pointer-events: auto;
            backdrop-filter: blur(5px);
            border-left: 3px solid #C41E3A; /* Red */
        }

        .instruction-item {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
        }
        
        .icon { margin-right: 10px; font-size: 16px; width: 20px; text-align: center;}

        /* Upload Button */
        .upload-container {
            pointer-events: auto;
            margin-top: auto;
            align-self: center;
            margin-bottom: 20px;
        }

        #upload-btn {
            background: linear-gradient(135deg, #C41E3A 0%, #800000 100%);
            border: none;
            padding: 12px 30px;
            color: white;
            border-radius: 30px;
            cursor: pointer;
            font-size: 16px;
            box-shadow: 0 0 15px rgba(196, 30, 58, 0.6);
            transition: transform 0.2s;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        #upload-btn:hover {
            transform: scale(1.05);
        }

        #file-input {
            display: none;
        }

        /* Webcam feedback (hidden but processed) */
        #video-feed {
            position: absolute;
            bottom: 20px;
            left: 20px;
            width: 160px;
            height: 120px;
            border-radius: 10px;
            transform: scaleX(-1); /* Mirror */
            border: 2px solid #FFD700;
            opacity: 0.7;
            z-index: 20;
            object-fit: cover;
            display: block; /* Required for MediaPipe */
        }

        /* Loading Screen */
        #loading {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            z-index: 100;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #FFD700;
            transition: opacity 0.5s;
        }

        .loader {
            border: 4px solid #333;
            border-top: 4px solid #FFD700;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin-bottom: 15px;
        }

        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

    </style>
    <!-- MediaPipe Hands Global Script (Fix for Module Error) -->
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/hands.js" crossorigin="anonymous"></script>

    <!-- Import Maps for Three.js and Addons -->
    <script type="importmap">
        {
            "imports": {
                "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
                "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"
            }
        }
    </script>
</head>
<body>

    <!-- Loading Screen -->
    <div id="loading">
        <div class="loader"></div>
        <div id="loading-text">正在初始化视觉引擎与AI模型...</div>
    </div>

    <!-- Video Element for MediaPipe (Visible for user feedback) -->
    <video id="video-feed" playsinline></video>

    <!-- UI Layer -->
    <div id="ui-layer">
        <div class="header">
            <h1>CHRISTMAS GESTURE</h1>
            <p class="subtitle">MediaPipe & Three.js WebGL Experience</p>
        </div>

        <div class="status-panel">
            <div id="mode-display" class="status-tag">等待手势...</div>
            <div class="instructions">
                <div class="instruction-item"><span class="icon">✊</span> 握拳：聚合 (TREE)</div>
                <div class="instruction-item"><span class="icon">🖐</span> 张开：散开 (EXPLODE)</div>
                <div class="instruction-item"><span class="icon">🤏</span> 捏合：特写 (FOCUS)</div>
                <div class="instruction-item"><span class="icon">👋</span> 移动：旋转视角</div>
            </div>
        </div>

        <div class="upload-container">
            <button id="upload-btn" onclick="document.getElementById('file-input').click()">上传照片云 (+)</button>
            <input type="file" id="file-input" accept="image/*" multiple onchange="handlePhotoUpload(event)">
        </div>
    </div>

    <!-- 3D Canvas -->
    <div id="canvas-container"></div>

    <!-- Main Logic -->
    <script type="module">
        import * as THREE from 'three';

        // --- Configuration & Constants ---
        const CONFIG = {
            colors: {
                green: 0x228B22,   // Forest Green (Brighter)
                gold: 0xFFD700,    // Metallic Gold
                red: 0xFF0000,     // Bright Red
                white: 0xFFFFFF
            },
            particles: 400,        // Number of abstract shapes
            radius: 18,            // Base radius of tree bottom
            height: 35,            // Height of tree
        };

        // --- Global Variables ---
        let scene, camera, renderer;
        let particles = []; // Array to store { mesh, treePos, explodePos, currentPos, speed }
        let photoMeshes = []; // Array specifically for user photos
        let time = 0;
        
        // Interaction State
        const STATE = {
            TREE: 'TREE',
            EXPLODE: 'EXPLODE',
            FOCUS: 'FOCUS'
        };
        let currentState = STATE.TREE;
        let targetState = STATE.TREE;
        
        // Hand Data
        let handPos = { x: 0, y: 0 }; // Normalized -1 to 1
        let isHandDetected = false;

        // --- Initialization ---
        async function init() {
            // 1. Scene Setup
            const container = document.getElementById('canvas-container');
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0x111111); // Dark Gray instead of pure black

            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 0, 50);

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.outputColorSpace = THREE.SRGBColorSpace;
            container.appendChild(renderer.domElement);

            // 2. Lighting - 大幅增强光照
            // 2.1 强环境光，照亮所有阴影
            const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); 
            scene.add(ambientLight);

            // 2.2 主平行光（模拟阳光），提供清晰的明暗关系
            const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
            mainLight.position.set(10, 20, 20);
            scene.add(mainLight);

            // 2.3 补光灯（金色），增加华丽感
            const pointLight = new THREE.PointLight(CONFIG.colors.gold, 2, 100);
            pointLight.position.set(0, 20, 10);
            scene.add(pointLight);
            
            // 2.4 氛围灯（红绿），增加节日气氛，但调高亮度
            const redLight = new THREE.PointLight(CONFIG.colors.red, 2, 50);
            redLight.position.set(15, 10, 15);
            scene.add(redLight);
            
            const greenLight = new THREE.PointLight(CONFIG.colors.green, 2, 50);
            greenLight.position.set(-15, -10, 15);
            scene.add(greenLight);

            // 3. Post Processing Removed

            // 4. Content Generation
            createParticles();
            createStar();
            
            // 5. Setup MediaPipe
            await setupMediaPipe();

            // 6. Events
            window.addEventListener('resize', onWindowResize);

            // 7. Start Loop
            document.getElementById('loading').style.opacity = '0';
            setTimeout(() => document.getElementById('loading').style.display = 'none', 500);
            animate();
        }

        // --- Particle System Logic ---

        function getConePosition(t, total, yMin, yMax, maxR) {
            // Spiral distribution on a cone
            const y = yMin + (yMax - yMin) * t; // Linear height
            const r = maxR * (1 - t); // Radius gets smaller as we go up
            const angle = t * 25; // Winding number
            
            const x = r * Math.cos(angle);
            const z = r * Math.sin(angle);
            return new THREE.Vector3(x, y, z);
        }

        function createParticles() {
            const geometrySphere = new THREE.SphereGeometry(0.4, 32, 32); // Increased segments for smoothness
            const geometryCube = new THREE.BoxGeometry(0.6, 0.6, 0.6);
            
            // Materials - 更亮、更鲜艳的材质设置
            const matGold = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.gold, 
                roughness: 0.2, 
                metalness: 0.6, // 降低金属度，避免反射黑色看起来太暗
                emissive: 0x443300 // 轻微自发光
            });
            const matRed = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.red, 
                roughness: 0.3, 
                metalness: 0.3, // 更多漫反射颜色
                emissive: 0x330000
            });
            const matGreen = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.green, 
                roughness: 0.5, // 哑光
                metalness: 0.1 
            });

            for (let i = 0; i < CONFIG.particles; i++) {
                let mesh;
                const type = Math.random();
                
                if (type < 0.6) {
                    // Green filler (Box)
                    mesh = new THREE.Mesh(geometryCube, matGreen);
                } else if (type < 0.85) {
                    // Gold ornaments (Sphere)
                    mesh = new THREE.Mesh(geometrySphere, matGold);
                    mesh.scale.setScalar(1.5);
                } else {
                    // Red ornaments (Sphere)
                    mesh = new THREE.Mesh(geometrySphere, matRed);
                    mesh.scale.setScalar(1.2);
                }

                // Tree Position (Target)
                const t = i / CONFIG.particles;
                const treePos = getConePosition(t, CONFIG.particles, -CONFIG.height/2, CONFIG.height/2, CONFIG.radius);
                // Add some randomness to tree pos so it's not a perfect line
                treePos.x += (Math.random() - 0.5) * 2;
                treePos.z += (Math.random() - 0.5) * 2;
                treePos.y += (Math.random() - 0.5) * 2;

                // Explode Position (Target)
                const explodePos = new THREE.Vector3(
                    (Math.random() - 0.5) * 60,
                    (Math.random() - 0.5) * 60,
                    (Math.random() - 0.5) * 40
                );

                // Initial Pos
                mesh.position.copy(treePos);
                mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);

                scene.add(mesh);

                particles.push({
                    mesh: mesh,
                    treePos: treePos,
                    explodePos: explodePos,
                    velocity: new THREE.Vector3(),
                    wobbleOffset: Math.random() * 100
                });
            }
        }

        function createStar() {
            // Simple Star on top
            const geometry = new THREE.OctahedronGeometry(1.5, 0);
            const material = new THREE.MeshStandardMaterial({
                color: 0xFFFF00, // Bright Yellow
                emissive: 0xFFD700,
                emissiveIntensity: 1, // Reduced slightly as bloom is gone, but still bright
                roughness: 0.2,
                metalness: 0.8
            });
            const star = new THREE.Mesh(geometry, material);
            star.position.set(0, CONFIG.height/2 + 2, 0);
            
            // Star is just a special particle
            scene.add(star);
            particles.push({
                mesh: star,
                treePos: new THREE.Vector3(0, CONFIG.height/2 + 2, 0),
                explodePos: new THREE.Vector3(0, 10, 0),
                wobbleOffset: 0
            });
        }

        // --- Photo Upload Logic ---
        window.handlePhotoUpload = function(event) {
            const files = event.target.files;
            if (!files.length) return;

            Array.from(files).forEach((file, index) => {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = new Image();
                    img.src = e.target.result;
                    img.onload = () => {
                        createPhotoMesh(img);
                    }
                };
                reader.readAsDataURL(file);
            });
        };

        function createPhotoMesh(image) {
            const texture = new THREE.Texture(image);
            texture.needsUpdate = true;
            texture.colorSpace = THREE.SRGBColorSpace;

            // Maintain aspect ratio
            const aspect = image.width / image.height;
            const w = 4;
            const h = 4 / aspect;

            const geometry = new THREE.PlaneGeometry(w, h);
            // Use BasicMaterial for photos so they are always fully bright and not affected by shadows
            const material = new THREE.MeshBasicMaterial({ 
                map: texture, 
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 1.0 
            });

            const mesh = new THREE.Mesh(geometry, material);
            
            // Add a border (gold frame)
            const frameGeo = new THREE.BoxGeometry(w + 0.2, h + 0.2, 0.1);
            const frameMat = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.gold, 
                metalness: 0.8, 
                roughness: 0.2,
                emissive: 0x332200
            });
            const frame = new THREE.Mesh(frameGeo, frameMat);
            frame.position.z = -0.06;
            mesh.add(frame);

            // Random initial position in tree volume
            const t = Math.random();
            const treePos = getConePosition(t, 1, -CONFIG.height/2 + 5, CONFIG.height/2 - 5, CONFIG.radius - 2);
            // Push photos slightly out
            treePos.multiplyScalar(1.2);

            const explodePos = new THREE.Vector3(
                (Math.random() - 0.5) * 50,
                (Math.random() - 0.5) * 50,
                (Math.random() - 0.5) * 20 + 10 // Keep mostly in front
            );

            mesh.position.copy(explodePos); // Start exploded if added later, or logic will fix it
            scene.add(mesh);

            photoMeshes.push({
                mesh: mesh,
                treePos: treePos,
                explodePos: explodePos,
                wobbleOffset: Math.random() * 100,
                isPhoto: true
            });
            
            // Add to main particles array for movement management
            particles.push(photoMeshes[photoMeshes.length-1]);
        }


        // --- MediaPipe Logic ---
        async function setupMediaPipe() {
            const video = document.getElementById('video-feed');

            // Access Global Hands Class
            const hands = new window.Hands({locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
            }});

            hands.setOptions({
                maxNumHands: 1,
                modelComplexity: 1,
                minDetectionConfidence: 0.7,
                minTrackingConfidence: 0.6
            });

            hands.onResults(onHandsResults);

            // Access Webcam
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                video.srcObject = stream;
                await video.play();

                // Start processing loop specific to MediaPipe
                async function detectionLoop() {
                    if (video.currentTime > 0 && !video.paused && !video.ended) {
                        await hands.send({image: video});
                    }
                    requestAnimationFrame(detectionLoop);
                }
                detectionLoop();
            } catch (err) {
                console.error("Camera access denied or failed", err);
                document.getElementById('loading-text').innerText = "未检测到摄像头，请检查权限。应用将自动运行演示模式。";
                setTimeout(() => {
                    document.getElementById('loading').style.display = 'none';
                    // Auto demo mode logic could go here
                }, 2000);
            }
        }

        function onHandsResults(results) {
            const modeDisplay = document.getElementById('mode-display');
            
            if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                isHandDetected = true;
                const landmarks = results.multiHandLandmarks[0];

                // 1. Calculate Hand Center (for rotation)
                // Wrist is 0, Middle Finger MCP is 9
                const cx = landmarks[9].x;
                const cy = landmarks[9].y;
                handPos.x = (cx - 0.5) * 2; // -1 to 1
                handPos.y = (cy - 0.5) * 2;

                // 2. Gesture Recognition
                const state = detectGesture(landmarks);
                
                if (state) {
                    targetState = state;
                    
                    // UI Update
                    let text = "未知";
                    let bg = "#333";
                    if (state === STATE.TREE) { text = "🌲 聚合形态"; bg = CONFIG.colors.green; }
                    if (state === STATE.EXPLODE) { text = "✨ 散开形态"; bg = "#444"; }
                    if (state === STATE.FOCUS) { text = "📷 聚焦照片"; bg = CONFIG.colors.red; }
                    
                    modeDisplay.innerText = text;
                    modeDisplay.style.borderColor = (state === STATE.FOCUS) ? '#fff' : CONFIG.colors.gold;
                }

            } else {
                isHandDetected = false;
                // Optional: Slowly drift back to tree if no hand? Or stay in last state.
                // Keeping last state is better for UX.
            }
        }

        function detectGesture(lm) {
            // Helper to check if finger is open
            const isFingerOpen = (tipIdx, pipIdx) => lm[tipIdx].y < lm[pipIdx].y; // Note: Y is inverted in some contexts, but MediaPipe y=0 is top. So tip < pip means finger up.
            // Actually, MediaPipe coords: 0,0 is top-left.
            // This assumes hand is upright. Let's use distance from wrist (0).
            
            const dist = (i, j) => Math.sqrt(Math.pow(lm[i].x - lm[j].x, 2) + Math.pow(lm[i].y - lm[j].y, 2));
            
            const wrist = 0;
            const tips = [8, 12, 16, 20];
            const pips = [6, 10, 14, 18];
            
            // Check Fingers Extended
            let extendedCount = 0;
            // Thumb is special, check x distance relative to wrist/index for "openness"
            if (dist(4, 17) > 0.2) extendedCount++; // Rough thumb check

            for (let k=0; k<4; k++) {
                // If tip is further from wrist than PIP is from wrist
                if (dist(wrist, tips[k]) > dist(wrist, pips[k]) * 1.2) {
                    extendedCount++;
                }
            }

            // Pinch Detection (Thumb 4 and Index 8)
            const pinchDist = dist(4, 8);

            // LOGIC TREE
            // 稍微放宽捏合的判定距离 (0.05 -> 0.08)，让操作更灵敏
            if (pinchDist < 0.08) {
                return STATE.FOCUS;
            } else if (extendedCount >= 4) {
                return STATE.EXPLODE;
            } else if (extendedCount <= 1) {
                return STATE.TREE;
            }
            
            return null; // No change / Transition
        }


        // --- Animation Loop ---
        function animate() {
            requestAnimationFrame(animate);
            time += 0.01;

            // 1. Smooth State Transition
            if (currentState !== targetState) {
                currentState = targetState;
                
                // If entering focus mode, pick a random photo to bring forward if any exist
                if (currentState === STATE.FOCUS && photoMeshes.length > 0) {
                     // Reset all photos first
                     photoMeshes.forEach(p => p.focusOffset = null);
                     // Pick one
                     const luckyPhoto = photoMeshes[Math.floor(Math.random() * photoMeshes.length)];
                     luckyPhoto.focusOffset = true;
                }
            }

            // 2. Camera Controls
            // Default rotation
            let camX = Math.sin(time * 0.2) * 50;
            let camZ = Math.cos(time * 0.2) * 50;
            let camY = 0;

            // Hand Influence
            if (currentState === STATE.EXPLODE && isHandDetected) {
                // Map hand x (-1 to 1) to rotation angle
                const angle = handPos.x * Math.PI; 
                camX = Math.sin(angle) * 60;
                camZ = Math.cos(angle) * 60;
                camY = handPos.y * 30;
            } else if (currentState === STATE.FOCUS) {
                // Zoom in
                camX *= 0.3;
                camZ *= 0.3;
            }

            // Lerp Camera Position
            camera.position.x += (camX - camera.position.x) * 0.05;
            camera.position.y += (camY - camera.position.y) * 0.05;
            camera.position.z += (camZ - camera.position.z) * 0.05;
            camera.lookAt(0, 0, 0);


            // 3. Particle Animation
            particles.forEach(p => {
                let target;

                if (currentState === STATE.TREE) {
                    target = p.treePos;
                } else if (currentState === STATE.EXPLODE) {
                    target = p.explodePos;
                } else if (currentState === STATE.FOCUS) {
                    // In focus mode, keep background exploded but push back slightly
                    target = p.explodePos; 
                    
                    if (p.focusOffset) {
                        // This is the chosen photo
                        // 关键修改：动态计算目标位置，使其始终位于相机正前方
                        // 获取从原点指向相机的方向向量
                        const camDir = camera.position.clone().normalize();
                        // 将照片放置在距离原点 10 单位处（朝向相机方向）
                        // 这样无论相机转到哪里，照片都会在 View 的中心
                        const targetPos = camDir.multiplyScalar(10);

                        p.mesh.position.lerp(targetPos, 0.1);
                        p.mesh.lookAt(camera.position);
                        p.mesh.rotation.z = 0; // Fix rotation
                        return; // Skip standard update
                    }
                }

                // Add floating effect
                const wobble = Math.sin(time * 2 + p.wobbleOffset) * 0.5;
                const finalTarget = target.clone();
                if (currentState !== STATE.TREE) {
                    finalTarget.y += wobble;
                }

                // Move mesh
                p.mesh.position.lerp(finalTarget, 0.04);
                
                // Rotation
                if (!p.isPhoto) {
                    p.mesh.rotation.x += 0.01;
                    p.mesh.rotation.y += 0.01;
                } else if (currentState === STATE.TREE) {
                    // Photos in tree mode face out from center
                    p.mesh.lookAt(new THREE.Vector3(p.mesh.position.x * 2, p.mesh.position.y, p.mesh.position.z * 2));
                } else {
                    // Photos in explode mode slowly look at camera or drift
                    p.mesh.lookAt(camera.position);
                }
            });

            // 普通渲染
            renderer.render(scene, camera);
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        // Start
        init();

    </script>
</body>
</html>
```

@tab Code2

- Step 1：图片会倒着，需要调整为适配正的，有些会被动画旋转成倒着的；

    ```html
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        <title>Gesture Controlled Christmas Tree</title>
        <style>
            body {
                margin: 0;
                overflow: hidden;
                background-color: #111; /* 稍微提亮一点点背景，不是纯黑 */
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                color: #fff;
            }
    
            #canvas-container {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1;
            }
    
            /* UI Overlay */
            #ui-layer {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10;
                pointer-events: none; /* Let clicks pass through to canvas if needed */
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 20px;
                box-sizing: border-box;
            }
    
            .header {
                text-align: left;
                text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
            }
    
            h1 {
                margin: 0;
                font-weight: 300;
                color: #FFD700; /* Gold */
                letter-spacing: 2px;
                font-size: 24px;
            }
    
            p.subtitle {
                margin: 5px 0 0 0;
                color: #aaa;
                font-size: 14px;
            }
    
            /* Status & Instructions */
            .status-panel {
                position: absolute;
                top: 20px;
                right: 20px;
                text-align: right;
            }
    
            .status-tag {
                display: inline-block;
                padding: 8px 16px;
                background: rgba(20, 30, 20, 0.8);
                border: 1px solid #FFD700;
                border-radius: 20px;
                color: #FFD700;
                font-weight: bold;
                font-size: 14px;
                margin-bottom: 10px;
                transition: all 0.3s ease;
            }
    
            .instructions {
                background: rgba(0, 0, 0, 0.5);
                padding: 15px;
                border-radius: 8px;
                font-size: 12px;
                color: #ddd;
                max-width: 250px;
                pointer-events: auto;
                backdrop-filter: blur(5px);
                border-left: 3px solid #C41E3A; /* Red */
            }
    
            .instruction-item {
                display: flex;
                align-items: center;
                margin-bottom: 8px;
            }
            
            .icon { margin-right: 10px; font-size: 16px; width: 20px; text-align: center;}
    
            /* Upload Button */
            .upload-container {
                pointer-events: auto;
                margin-top: auto;
                align-self: center;
                margin-bottom: 20px;
            }
    
            #upload-btn {
                background: linear-gradient(135deg, #C41E3A 0%, #800000 100%);
                border: none;
                padding: 12px 30px;
                color: white;
                border-radius: 30px;
                cursor: pointer;
                font-size: 16px;
                box-shadow: 0 0 15px rgba(196, 30, 58, 0.6);
                transition: transform 0.2s;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
    
            #upload-btn:hover {
                transform: scale(1.05);
            }
    
            #file-input {
                display: none;
            }
    
            /* Webcam feedback (hidden but processed) */
            #video-feed {
                position: absolute;
                bottom: 20px;
                left: 20px;
                width: 160px;
                height: 120px;
                border-radius: 10px;
                transform: scaleX(-1); /* Mirror */
                border: 2px solid #FFD700;
                opacity: 0.7;
                z-index: 20;
                object-fit: cover;
                display: block; /* Required for MediaPipe */
            }
    
            /* Loading Screen */
            #loading {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #000;
                z-index: 100;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                color: #FFD700;
                transition: opacity 0.5s;
            }
    
            .loader {
                border: 4px solid #333;
                border-top: 4px solid #FFD700;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                animation: spin 1s linear infinite;
                margin-bottom: 15px;
            }
    
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    
        </style>
        <!-- MediaPipe Hands Global Script (Fix for Module Error) -->
        <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/hands.js" crossorigin="anonymous"></script>
    
        <!-- Import Maps for Three.js and Addons -->
        <script type="importmap">
            {
                "imports": {
                    "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
                    "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"
                }
            }
        </script>
    </head>
    <body>
    
        <!-- Loading Screen -->
        <div id="loading">
            <div class="loader"></div>
            <div id="loading-text">正在初始化视觉引擎与AI模型...</div>
        </div>
    
        <!-- Video Element for MediaPipe (Visible for user feedback) -->
        <video id="video-feed" playsinline></video>
    
        <!-- UI Layer -->
        <div id="ui-layer">
            <div class="header">
                <h1>CHRISTMAS GESTURE</h1>
                <p class="subtitle">MediaPipe & Three.js WebGL Experience</p>
            </div>
    
            <div class="status-panel">
                <div id="mode-display" class="status-tag">等待手势...</div>
                <div class="instructions">
                    <div class="instruction-item"><span class="icon">✊</span> 握拳：聚合 (TREE)</div>
                    <div class="instruction-item"><span class="icon">🖐</span> 张开：散开 (EXPLODE)</div>
                    <div class="instruction-item"><span class="icon">🤏</span> 捏合：特写 (FOCUS)</div>
                    <div class="instruction-item"><span class="icon">👋</span> 移动：旋转视角</div>
                </div>
            </div>
    
            <div class="upload-container">
                <button id="upload-btn" onclick="document.getElementById('file-input').click()">上传照片云 (+)</button>
                <input type="file" id="file-input" accept="image/*" multiple onchange="handlePhotoUpload(event)">
            </div>
        </div>
    
        <!-- 3D Canvas -->
        <div id="canvas-container"></div>
    
        <!-- Main Logic -->
        <script type="module">
            import * as THREE from 'three';
    
            // --- Configuration & Constants ---
            const CONFIG = {
                colors: {
                    green: 0x228B22,   // Forest Green (Brighter)
                    gold: 0xFFD700,    // Metallic Gold
                    red: 0xFF0000,     // Bright Red
                    white: 0xFFFFFF
                },
                particles: 400,        // Number of abstract shapes
                radius: 18,            // Base radius of tree bottom
                height: 35,            // Height of tree
            };
    
            // --- Global Variables ---
            let scene, camera, renderer;
            let particles = []; // Array to store { mesh, treePos, explodePos, currentPos, speed }
            let photoMeshes = []; // Array specifically for user photos
            let time = 0;
            
            // Interaction State
            const STATE = {
                TREE: 'TREE',
                EXPLODE: 'EXPLODE',
                FOCUS: 'FOCUS'
            };
            let currentState = STATE.TREE;
            let targetState = STATE.TREE;
            
            // Hand Data
            let handPos = { x: 0, y: 0 }; // Normalized -1 to 1
            let isHandDetected = false;
    
            // --- Initialization ---
            async function init() {
                // 1. Scene Setup
                const container = document.getElementById('canvas-container');
                scene = new THREE.Scene();
                scene.background = new THREE.Color(0x111111); // Dark Gray instead of pure black
    
                camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
                camera.position.set(0, 0, 50);
    
                renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.outputColorSpace = THREE.SRGBColorSpace;
                container.appendChild(renderer.domElement);
    
                // 2. Lighting - 大幅增强光照
                // 2.1 强环境光，照亮所有阴影
                const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); 
                scene.add(ambientLight);
    
                // 2.2 主平行光（模拟阳光），提供清晰的明暗关系
                const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
                mainLight.position.set(10, 20, 20);
                scene.add(mainLight);
    
                // 2.3 补光灯（金色），增加华丽感
                const pointLight = new THREE.PointLight(CONFIG.colors.gold, 2, 100);
                pointLight.position.set(0, 20, 10);
                scene.add(pointLight);
                
                // 2.4 氛围灯（红绿），增加节日气氛，但调高亮度
                const redLight = new THREE.PointLight(CONFIG.colors.red, 2, 50);
                redLight.position.set(15, 10, 15);
                scene.add(redLight);
                
                const greenLight = new THREE.PointLight(CONFIG.colors.green, 2, 50);
                greenLight.position.set(-15, -10, 15);
                scene.add(greenLight);
    
                // 3. Post Processing Removed
    
                // 4. Content Generation
                createParticles();
                createStar();
                
                // 5. Setup MediaPipe
                await setupMediaPipe();
    
                // 6. Events
                window.addEventListener('resize', onWindowResize);
    
                // 7. Start Loop
                document.getElementById('loading').style.opacity = '0';
                setTimeout(() => document.getElementById('loading').style.display = 'none', 500);
                animate();
            }
    
            // --- Particle System Logic ---
    
            function getConePosition(t, total, yMin, yMax, maxR) {
                // Spiral distribution on a cone
                const y = yMin + (yMax - yMin) * t; // Linear height
                const r = maxR * (1 - t); // Radius gets smaller as we go up
                const angle = t * 25; // Winding number
                
                const x = r * Math.cos(angle);
                const z = r * Math.sin(angle);
                return new THREE.Vector3(x, y, z);
            }
    
            function createParticles() {
                const geometrySphere = new THREE.SphereGeometry(0.4, 32, 32); // Increased segments for smoothness
                const geometryCube = new THREE.BoxGeometry(0.6, 0.6, 0.6);
                
                // Materials - 更亮、更鲜艳的材质设置
                const matGold = new THREE.MeshStandardMaterial({ 
                    color: CONFIG.colors.gold, 
                    roughness: 0.2, 
                    metalness: 0.6, // 降低金属度，避免反射黑色看起来太暗
                    emissive: 0x443300 // 轻微自发光
                });
                const matRed = new THREE.MeshStandardMaterial({ 
                    color: CONFIG.colors.red, 
                    roughness: 0.3, 
                    metalness: 0.3, // 更多漫反射颜色
                    emissive: 0x330000
                });
                const matGreen = new THREE.MeshStandardMaterial({ 
                    color: CONFIG.colors.green, 
                    roughness: 0.5, // 哑光
                    metalness: 0.1 
                });
    
                for (let i = 0; i < CONFIG.particles; i++) {
                    let mesh;
                    const type = Math.random();
                    
                    if (type < 0.6) {
                        // Green filler (Box)
                        mesh = new THREE.Mesh(geometryCube, matGreen);
                    } else if (type < 0.85) {
                        // Gold ornaments (Sphere)
                        mesh = new THREE.Mesh(geometrySphere, matGold);
                        mesh.scale.setScalar(1.5);
                    } else {
                        // Red ornaments (Sphere)
                        mesh = new THREE.Mesh(geometrySphere, matRed);
                        mesh.scale.setScalar(1.2);
                    }
    
                    // Tree Position (Target)
                    const t = i / CONFIG.particles;
                    const treePos = getConePosition(t, CONFIG.particles, -CONFIG.height/2, CONFIG.height/2, CONFIG.radius);
                    // Add some randomness to tree pos so it's not a perfect line
                    treePos.x += (Math.random() - 0.5) * 2;
                    treePos.z += (Math.random() - 0.5) * 2;
                    treePos.y += (Math.random() - 0.5) * 2;
    
                    // Explode Position (Target)
                    const explodePos = new THREE.Vector3(
                        (Math.random() - 0.5) * 60,
                        (Math.random() - 0.5) * 60,
                        (Math.random() - 0.5) * 40
                    );
    
                    // Initial Pos
                    mesh.position.copy(treePos);
                    mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
    
                    scene.add(mesh);
    
                    particles.push({
                        mesh: mesh,
                        treePos: treePos,
                        explodePos: explodePos,
                        velocity: new THREE.Vector3(),
                        wobbleOffset: Math.random() * 100
                    });
                }
            }
    
            function createStar() {
                // Simple Star on top
                const geometry = new THREE.OctahedronGeometry(1.5, 0);
                const material = new THREE.MeshStandardMaterial({
                    color: 0xFFFF00, // Bright Yellow
                    emissive: 0xFFD700,
                    emissiveIntensity: 1, // Reduced slightly as bloom is gone, but still bright
                    roughness: 0.2,
                    metalness: 0.8
                });
                const star = new THREE.Mesh(geometry, material);
                star.position.set(0, CONFIG.height/2 + 2, 0);
                
                // Star is just a special particle
                scene.add(star);
                particles.push({
                    mesh: star,
                    treePos: new THREE.Vector3(0, CONFIG.height/2 + 2, 0),
                    explodePos: new THREE.Vector3(0, 10, 0),
                    wobbleOffset: 0
                });
            }
    
            // --- Photo Upload Logic ---
            window.handlePhotoUpload = function(event) {
                const files = event.target.files;
                if (!files.length) return;
    
                Array.from(files).forEach((file, index) => {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const img = new Image();
                        img.src = e.target.result;
                        img.onload = () => {
                            createPhotoMesh(img);
                        }
                    };
                    reader.readAsDataURL(file);
                });
            };
    
            function createPhotoMesh(image) {
                const texture = new THREE.Texture(image);
                texture.needsUpdate = true;
                texture.colorSpace = THREE.SRGBColorSpace;
    
                // Maintain aspect ratio
                const aspect = image.width / image.height;
                const w = 4;
                const h = 4 / aspect;
    
                const geometry = new THREE.PlaneGeometry(w, h);
                // Use BasicMaterial for photos so they are always fully bright and not affected by shadows
                const material = new THREE.MeshBasicMaterial({ 
                    map: texture, 
                    side: THREE.DoubleSide,
                    transparent: true,
                    opacity: 1.0 
                });
    
                const mesh = new THREE.Mesh(geometry, material);
                
                // Add a border (gold frame)
                const frameGeo = new THREE.BoxGeometry(w + 0.2, h + 0.2, 0.1);
                const frameMat = new THREE.MeshStandardMaterial({ 
                    color: CONFIG.colors.gold, 
                    metalness: 0.8, 
                    roughness: 0.2,
                    emissive: 0x332200
                });
                const frame = new THREE.Mesh(frameGeo, frameMat);
                frame.position.z = -0.06;
                mesh.add(frame);
    
                // Random initial position in tree volume
                const t = Math.random();
                const treePos = getConePosition(t, 1, -CONFIG.height/2 + 5, CONFIG.height/2 - 5, CONFIG.radius - 2);
                // Push photos slightly out
                treePos.multiplyScalar(1.2);
    
                const explodePos = new THREE.Vector3(
                    (Math.random() - 0.5) * 50,
                    (Math.random() - 0.5) * 50,
                    (Math.random() - 0.5) * 20 + 10 // Keep mostly in front
                );
    
                mesh.position.copy(explodePos); // Start exploded if added later, or logic will fix it
                scene.add(mesh);
    
                photoMeshes.push({
                    mesh: mesh,
                    treePos: treePos,
                    explodePos: explodePos,
                    wobbleOffset: Math.random() * 100,
                    isPhoto: true
                });
                
                // Add to main particles array for movement management
                particles.push(photoMeshes[photoMeshes.length-1]);
            }
    
    
            // --- MediaPipe Logic ---
            async function setupMediaPipe() {
                const video = document.getElementById('video-feed');
    
                // Access Global Hands Class
                const hands = new window.Hands({locateFile: (file) => {
                    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
                }});
    
                hands.setOptions({
                    maxNumHands: 1,
                    modelComplexity: 1,
                    minDetectionConfidence: 0.7,
                    minTrackingConfidence: 0.6
                });
    
                hands.onResults(onHandsResults);
    
                // Access Webcam
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                    video.srcObject = stream;
                    await video.play();
    
                    // Start processing loop specific to MediaPipe
                    async function detectionLoop() {
                        if (video.currentTime > 0 && !video.paused && !video.ended) {
                            await hands.send({image: video});
                        }
                        requestAnimationFrame(detectionLoop);
                    }
                    detectionLoop();
                } catch (err) {
                    console.error("Camera access denied or failed", err);
                    document.getElementById('loading-text').innerText = "未检测到摄像头，请检查权限。应用将自动运行演示模式。";
                    setTimeout(() => {
                        document.getElementById('loading').style.display = 'none';
                        // Auto demo mode logic could go here
                    }, 2000);
                }
            }
    
            function onHandsResults(results) {
                const modeDisplay = document.getElementById('mode-display');
                
                if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                    isHandDetected = true;
                    const landmarks = results.multiHandLandmarks[0];
    
                    // 1. Calculate Hand Center (for rotation)
                    // Wrist is 0, Middle Finger MCP is 9
                    const cx = landmarks[9].x;
                    const cy = landmarks[9].y;
                    handPos.x = (cx - 0.5) * 2; // -1 to 1
                    handPos.y = (cy - 0.5) * 2;
    
                    // 2. Gesture Recognition
                    const state = detectGesture(landmarks);
                    
                    if (state) {
                        targetState = state;
                        
                        // UI Update
                        let text = "未知";
                        let bg = "#333";
                        if (state === STATE.TREE) { text = "🌲 聚合形态"; bg = CONFIG.colors.green; }
                        if (state === STATE.EXPLODE) { text = "✨ 散开形态"; bg = "#444"; }
                        if (state === STATE.FOCUS) { text = "📷 聚焦照片"; bg = CONFIG.colors.red; }
                        
                        modeDisplay.innerText = text;
                        modeDisplay.style.borderColor = (state === STATE.FOCUS) ? '#fff' : CONFIG.colors.gold;
                    }
    
                } else {
                    isHandDetected = false;
                    // Optional: Slowly drift back to tree if no hand? Or stay in last state.
                    // Keeping last state is better for UX.
                }
            }
    
            function detectGesture(lm) {
                // Helper to check if finger is open
                const isFingerOpen = (tipIdx, pipIdx) => lm[tipIdx].y < lm[pipIdx].y; // Note: Y is inverted in some contexts, but MediaPipe y=0 is top. So tip < pip means finger up.
                // Actually, MediaPipe coords: 0,0 is top-left.
                // This assumes hand is upright. Let's use distance from wrist (0).
                
                const dist = (i, j) => Math.sqrt(Math.pow(lm[i].x - lm[j].x, 2) + Math.pow(lm[i].y - lm[j].y, 2));
                
                const wrist = 0;
                const tips = [8, 12, 16, 20];
                const pips = [6, 10, 14, 18];
                
                // Check Fingers Extended
                let extendedCount = 0;
                // Thumb is special, check x distance relative to wrist/index for "openness"
                if (dist(4, 17) > 0.2) extendedCount++; // Rough thumb check
    
                for (let k=0; k<4; k++) {
                    // If tip is further from wrist than PIP is from wrist
                    if (dist(wrist, tips[k]) > dist(wrist, pips[k]) * 1.2) {
                        extendedCount++;
                    }
                }
    
                // Pinch Detection (Thumb 4 and Index 8)
                const pinchDist = dist(4, 8);
    
                // LOGIC TREE
                // 稍微放宽捏合的判定距离 (0.05 -> 0.08)，让操作更灵敏
                if (pinchDist < 0.08) {
                    return STATE.FOCUS;
                } else if (extendedCount >= 4) {
                    return STATE.EXPLODE;
                } else if (extendedCount <= 1) {
                    return STATE.TREE;
                }
                
                return null; // No change / Transition
            }
    
    
            // --- Animation Loop ---
            function animate() {
                requestAnimationFrame(animate);
                time += 0.01;
    
                // 1. Smooth State Transition
                if (currentState !== targetState) {
                    currentState = targetState;
                    
                    // If entering focus mode, pick a random photo to bring forward if any exist
                    if (currentState === STATE.FOCUS && photoMeshes.length > 0) {
                         // Reset all photos first
                         photoMeshes.forEach(p => p.focusOffset = null);
                         // Pick one
                         const luckyPhoto = photoMeshes[Math.floor(Math.random() * photoMeshes.length)];
                         luckyPhoto.focusOffset = true;
                    }
                }
    
                // 2. Camera Controls
                // Default rotation
                let camX = Math.sin(time * 0.2) * 50;
                let camZ = Math.cos(time * 0.2) * 50;
                let camY = 0;
    
                // Hand Influence
                if (currentState === STATE.EXPLODE && isHandDetected) {
                    // Map hand x (-1 to 1) to rotation angle
                    const angle = handPos.x * Math.PI; 
                    camX = Math.sin(angle) * 60;
                    camZ = Math.cos(angle) * 60;
                    camY = handPos.y * 30;
                } else if (currentState === STATE.FOCUS) {
                    // Zoom in
                    camX *= 0.3;
                    camZ *= 0.3;
                }
    
                // Lerp Camera Position
                camera.position.x += (camX - camera.position.x) * 0.05;
                camera.position.y += (camY - camera.position.y) * 0.05;
                camera.position.z += (camZ - camera.position.z) * 0.05;
                camera.lookAt(0, 0, 0);
    
    
                // 3. Particle Animation
                particles.forEach(p => {
                    let target;
    
                    if (currentState === STATE.TREE) {
                        target = p.treePos;
                    } else if (currentState === STATE.EXPLODE) {
                        target = p.explodePos;
                    } else if (currentState === STATE.FOCUS) {
                        // In focus mode, keep background exploded but push back slightly
                        target = p.explodePos; 
                        
                        if (p.focusOffset) {
                            // This is the chosen photo
                            // 关键修改：动态计算目标位置，使其始终位于相机正前方
                            // 获取从原点指向相机的方向向量
                            const camDir = camera.position.clone().normalize();
                            // 将照片放置在距离原点 10 单位处（朝向相机方向）
                            // 这样无论相机转到哪里，照片都会在 View 的中心
                            const targetPos = camDir.multiplyScalar(10);
    
                            p.mesh.position.lerp(targetPos, 0.1);
                            
                            // FIX: 使用 copy(camera.quaternion) 确保照片绝对正对屏幕，不歪不倒
                            p.mesh.quaternion.copy(camera.quaternion);
                            return; // Skip standard update
                        }
                    }
    
                    // Add floating effect
                    const wobble = Math.sin(time * 2 + p.wobbleOffset) * 0.5;
                    const finalTarget = target.clone();
                    if (currentState !== STATE.TREE) {
                        finalTarget.y += wobble;
                    }
    
                    // Move mesh
                    p.mesh.position.lerp(finalTarget, 0.04);
                    
                    // Rotation
                    if (!p.isPhoto) {
                        p.mesh.rotation.x += 0.01;
                        p.mesh.rotation.y += 0.01;
                    } else if (currentState === STATE.TREE) {
                        // Photos in tree mode face out from center
                        // 树形状态下，让照片背面朝向中心，正面朝外，保持直立
                        p.mesh.lookAt(new THREE.Vector3(p.mesh.position.x * 2, p.mesh.position.y, p.mesh.position.z * 2));
                    } else {
                        // FIX: Photos in explode/focus mode
                        // 散开状态下，也强制让照片正对屏幕，防止出现倒置或歪斜
                        p.mesh.quaternion.copy(camera.quaternion);
                    }
                });
    
                // 普通渲染
                renderer.render(scene, camera);
            }
    
            function onWindowResize() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            }
    
            // Start
            init();
    
        </script>
    </body>
    </html>
    ```

- Step 2：圣诞树太简陋了，现在有很多空白位置，看起来跟个蛇一样，要像圣诞树；

    ```html
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        <title>Gesture Controlled Christmas Tree</title>
        <style>
            body {
                margin: 0;
                overflow: hidden;
                background-color: #111; /* 稍微提亮一点点背景，不是纯黑 */
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                color: #fff;
            }
    
            #canvas-container {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1;
            }
    
            /* UI Overlay */
            #ui-layer {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10;
                pointer-events: none; /* Let clicks pass through to canvas if needed */
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 20px;
                box-sizing: border-box;
            }
    
            .header {
                text-align: left;
                text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
            }
    
            h1 {
                margin: 0;
                font-weight: 300;
                color: #FFD700; /* Gold */
                letter-spacing: 2px;
                font-size: 24px;
            }
    
            p.subtitle {
                margin: 5px 0 0 0;
                color: #aaa;
                font-size: 14px;
            }
    
            /* Status & Instructions */
            .status-panel {
                position: absolute;
                top: 20px;
                right: 20px;
                text-align: right;
            }
    
            .status-tag {
                display: inline-block;
                padding: 8px 16px;
                background: rgba(20, 30, 20, 0.8);
                border: 1px solid #FFD700;
                border-radius: 20px;
                color: #FFD700;
                font-weight: bold;
                font-size: 14px;
                margin-bottom: 10px;
                transition: all 0.3s ease;
            }
    
            .instructions {
                background: rgba(0, 0, 0, 0.5);
                padding: 15px;
                border-radius: 8px;
                font-size: 12px;
                color: #ddd;
                max-width: 250px;
                pointer-events: auto;
                backdrop-filter: blur(5px);
                border-left: 3px solid #C41E3A; /* Red */
            }
    
            .instruction-item {
                display: flex;
                align-items: center;
                margin-bottom: 8px;
            }
            
            .icon { margin-right: 10px; font-size: 16px; width: 20px; text-align: center;}
    
            /* Upload Button */
            .upload-container {
                pointer-events: auto;
                margin-top: auto;
                align-self: center;
                margin-bottom: 20px;
            }
    
            #upload-btn {
                background: linear-gradient(135deg, #C41E3A 0%, #800000 100%);
                border: none;
                padding: 12px 30px;
                color: white;
                border-radius: 30px;
                cursor: pointer;
                font-size: 16px;
                box-shadow: 0 0 15px rgba(196, 30, 58, 0.6);
                transition: transform 0.2s;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
    
            #upload-btn:hover {
                transform: scale(1.05);
            }
    
            #file-input {
                display: none;
            }
    
            /* Webcam feedback (hidden but processed) */
            #video-feed {
                position: absolute;
                bottom: 20px;
                left: 20px;
                width: 160px;
                height: 120px;
                border-radius: 10px;
                transform: scaleX(-1); /* Mirror */
                border: 2px solid #FFD700;
                opacity: 0.7;
                z-index: 20;
                object-fit: cover;
                display: block; /* Required for MediaPipe */
            }
    
            /* Loading Screen */
            #loading {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #000;
                z-index: 100;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                color: #FFD700;
                transition: opacity 0.5s;
            }
    
            .loader {
                border: 4px solid #333;
                border-top: 4px solid #FFD700;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                animation: spin 1s linear infinite;
                margin-bottom: 15px;
            }
    
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    
        </style>
        <!-- MediaPipe Hands Global Script (Fix for Module Error) -->
        <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/hands.js" crossorigin="anonymous"></script>
    
        <!-- Import Maps for Three.js and Addons -->
        <script type="importmap">
            {
                "imports": {
                    "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
                    "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"
                }
            }
        </script>
    </head>
    <body>
    
        <!-- Loading Screen -->
        <div id="loading">
            <div class="loader"></div>
            <div id="loading-text">正在初始化视觉引擎与AI模型...</div>
        </div>
    
        <!-- Video Element for MediaPipe (Visible for user feedback) -->
        <video id="video-feed" playsinline></video>
    
        <!-- UI Layer -->
        <div id="ui-layer">
            <div class="header">
                <h1>CHRISTMAS GESTURE</h1>
                <p class="subtitle">MediaPipe & Three.js WebGL Experience</p>
            </div>
    
            <div class="status-panel">
                <div id="mode-display" class="status-tag">等待手势...</div>
                <div class="instructions">
                    <div class="instruction-item"><span class="icon">✊</span> 握拳：聚合 (TREE)</div>
                    <div class="instruction-item"><span class="icon">🖐</span> 张开：散开 (EXPLODE)</div>
                    <div class="instruction-item"><span class="icon">🤏</span> 捏合：特写 (FOCUS)</div>
                    <div class="instruction-item"><span class="icon">👋</span> 移动：旋转视角</div>
                </div>
            </div>
    
            <div class="upload-container">
                <button id="upload-btn" onclick="document.getElementById('file-input').click()">上传照片云 (+)</button>
                <input type="file" id="file-input" accept="image/*" multiple onchange="handlePhotoUpload(event)">
            </div>
        </div>
    
        <!-- 3D Canvas -->
        <div id="canvas-container"></div>
    
        <!-- Main Logic -->
        <script type="module">
            import * as THREE from 'three';
    
            // --- Configuration & Constants ---
            const CONFIG = {
                colors: {
                    green: 0x228B22,   // Forest Green (Brighter)
                    gold: 0xFFD700,    // Metallic Gold
                    red: 0xFF0000,     // Bright Red
                    white: 0xFFFFFF
                },
                particles: 1500,       // 增加粒子数量到 1500，让树更茂密
                radius: 18,            // Base radius of tree bottom
                height: 35,            // Height of tree
            };
    
            // --- Global Variables ---
            let scene, camera, renderer;
            let particles = []; // Array to store { mesh, treePos, explodePos, currentPos, speed }
            let photoMeshes = []; // Array specifically for user photos
            let time = 0;
            
            // Interaction State
            const STATE = {
                TREE: 'TREE',
                EXPLODE: 'EXPLODE',
                FOCUS: 'FOCUS'
            };
            let currentState = STATE.TREE;
            let targetState = STATE.TREE;
            
            // Hand Data
            let handPos = { x: 0, y: 0 }; // Normalized -1 to 1
            let isHandDetected = false;
    
            // --- Initialization ---
            async function init() {
                // 1. Scene Setup
                const container = document.getElementById('canvas-container');
                scene = new THREE.Scene();
                scene.background = new THREE.Color(0x111111); // Dark Gray instead of pure black
    
                camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
                camera.position.set(0, 0, 50);
    
                renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.outputColorSpace = THREE.SRGBColorSpace;
                container.appendChild(renderer.domElement);
    
                // 2. Lighting - 大幅增强光照
                // 2.1 强环境光，照亮所有阴影
                const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); 
                scene.add(ambientLight);
    
                // 2.2 主平行光（模拟阳光），提供清晰的明暗关系
                const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
                mainLight.position.set(10, 20, 20);
                scene.add(mainLight);
    
                // 2.3 补光灯（金色），增加华丽感
                const pointLight = new THREE.PointLight(CONFIG.colors.gold, 2, 100);
                pointLight.position.set(0, 20, 10);
                scene.add(pointLight);
                
                // 2.4 氛围灯（红绿），增加节日气氛，但调高亮度
                const redLight = new THREE.PointLight(CONFIG.colors.red, 2, 50);
                redLight.position.set(15, 10, 15);
                scene.add(redLight);
                
                const greenLight = new THREE.PointLight(CONFIG.colors.green, 2, 50);
                greenLight.position.set(-15, -10, 15);
                scene.add(greenLight);
    
                // 3. Post Processing Removed
    
                // 4. Content Generation
                createParticles();
                createStar();
                
                // 5. Setup MediaPipe
                await setupMediaPipe();
    
                // 6. Events
                window.addEventListener('resize', onWindowResize);
    
                // 7. Start Loop
                document.getElementById('loading').style.opacity = '0';
                setTimeout(() => document.getElementById('loading').style.display = 'none', 500);
                animate();
            }
    
            // --- Particle System Logic ---
    
            // 移除旧的螺旋线逻辑，改用体积计算
            function getConeVolumePosition(h, maxR) {
                // h is 0 (bottom) to 1 (top)
                
                // 当前高度的圆锥截面半径
                const rAtHeight = maxR * (1 - h);
                
                // 随机分布在圆截面内，但更倾向于外表面以保持树的形状
                // 使用 Math.pow 调整分布：指数越小越均匀，指数越大越集中在边缘
                const r = rAtHeight * Math.pow(Math.random(), 0.4); 
                
                const angle = Math.random() * Math.PI * 2;
                
                const x = r * Math.cos(angle);
                const z = r * Math.sin(angle);
                
                // 将高度映射到实际坐标 y
                const y = -CONFIG.height/2 + h * CONFIG.height;
                
                return new THREE.Vector3(x, y, z);
            }
    
            function createParticles() {
                const geometrySphere = new THREE.SphereGeometry(0.4, 32, 32); 
                const geometryCube = new THREE.BoxGeometry(0.8, 0.8, 0.8); // 稍微加大方块，充当树叶
                const geometryTetra = new THREE.TetrahedronGeometry(0.6); // 增加四面体作为另一种树叶
                
                // Materials - 更亮、更鲜艳的材质设置
                const matGold = new THREE.MeshStandardMaterial({ 
                    color: CONFIG.colors.gold, 
                    roughness: 0.2, 
                    metalness: 0.6, 
                    emissive: 0x443300 
                });
                const matRed = new THREE.MeshStandardMaterial({ 
                    color: CONFIG.colors.red, 
                    roughness: 0.3, 
                    metalness: 0.3, 
                    emissive: 0x330000
                });
                const matGreen = new THREE.MeshStandardMaterial({ 
                    color: CONFIG.colors.green, 
                    roughness: 0.8, // 哑光，像叶子
                    metalness: 0.0 
                });
    
                for (let i = 0; i < CONFIG.particles; i++) {
                    let mesh;
                    const type = Math.random();
                    
                    // 调整比例：80% 是绿色枝叶，20% 是装饰品
                    if (type < 0.6) {
                        // Green filler (Box - 树叶)
                        mesh = new THREE.Mesh(geometryCube, matGreen);
                        mesh.rotation.set(Math.random(), Math.random(), Math.random());
                    } else if (type < 0.8) {
                         // Green filler 2 (Tetrahedron - 针叶质感)
                        mesh = new THREE.Mesh(geometryTetra, matGreen);
                        mesh.rotation.set(Math.random(), Math.random(), Math.random());
                    } else if (type < 0.9) {
                        // Gold ornaments (Sphere)
                        mesh = new THREE.Mesh(geometrySphere, matGold);
                        mesh.scale.setScalar(1.5);
                    } else {
                        // Red ornaments (Sphere)
                        mesh = new THREE.Mesh(geometrySphere, matRed);
                        mesh.scale.setScalar(1.2);
                    }
    
                    // Tree Position (Target) - 使用新的体积填充算法
                    const h = Math.random(); // 0 到 1 的随机高度
                    const treePos = getConeVolumePosition(h, CONFIG.radius);
    
                    // Explode Position (Target)
                    const explodePos = new THREE.Vector3(
                        (Math.random() - 0.5) * 60,
                        (Math.random() - 0.5) * 60,
                        (Math.random() - 0.5) * 40
                    );
    
                    // Initial Pos
                    mesh.position.copy(treePos);
                    
                    scene.add(mesh);
    
                    particles.push({
                        mesh: mesh,
                        treePos: treePos,
                        explodePos: explodePos,
                        velocity: new THREE.Vector3(),
                        wobbleOffset: Math.random() * 100
                    });
                }
            }
    
            function createStar() {
                // Simple Star on top
                const geometry = new THREE.OctahedronGeometry(1.5, 0);
                const material = new THREE.MeshStandardMaterial({
                    color: 0xFFFF00, // Bright Yellow
                    emissive: 0xFFD700,
                    emissiveIntensity: 1, // Reduced slightly as bloom is gone, but still bright
                    roughness: 0.2,
                    metalness: 0.8
                });
                const star = new THREE.Mesh(geometry, material);
                star.position.set(0, CONFIG.height/2 + 2, 0);
                
                // Star is just a special particle
                scene.add(star);
                particles.push({
                    mesh: star,
                    treePos: new THREE.Vector3(0, CONFIG.height/2 + 2, 0),
                    explodePos: new THREE.Vector3(0, 10, 0),
                    wobbleOffset: 0
                });
            }
    
            // --- Photo Upload Logic ---
            window.handlePhotoUpload = function(event) {
                const files = event.target.files;
                if (!files.length) return;
    
                Array.from(files).forEach((file, index) => {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const img = new Image();
                        img.src = e.target.result;
                        img.onload = () => {
                            createPhotoMesh(img);
                        }
                    };
                    reader.readAsDataURL(file);
                });
            };
    
            function createPhotoMesh(image) {
                const texture = new THREE.Texture(image);
                texture.needsUpdate = true;
                texture.colorSpace = THREE.SRGBColorSpace;
    
                // Maintain aspect ratio
                const aspect = image.width / image.height;
                const w = 4;
                const h = 4 / aspect;
    
                const geometry = new THREE.PlaneGeometry(w, h);
                // Use BasicMaterial for photos so they are always fully bright and not affected by shadows
                const material = new THREE.MeshBasicMaterial({ 
                    map: texture, 
                    side: THREE.DoubleSide,
                    transparent: true,
                    opacity: 1.0 
                });
    
                const mesh = new THREE.Mesh(geometry, material);
                
                // Add a border (gold frame)
                const frameGeo = new THREE.BoxGeometry(w + 0.2, h + 0.2, 0.1);
                const frameMat = new THREE.MeshStandardMaterial({ 
                    color: CONFIG.colors.gold, 
                    metalness: 0.8, 
                    roughness: 0.2,
                    emissive: 0x332200
                });
                const frame = new THREE.Mesh(frameGeo, frameMat);
                frame.position.z = -0.06;
                mesh.add(frame);
    
                // Random initial position in tree volume - 修改为新的体积算法
                const hPos = Math.random();
                const treePos = getConeVolumePosition(hPos, CONFIG.radius - 2); // 稍微往里收一点
                treePos.multiplyScalar(1.2); // 再稍微往外推一点，保持在表面
    
                const explodePos = new THREE.Vector3(
                    (Math.random() - 0.5) * 50,
                    (Math.random() - 0.5) * 50,
                    (Math.random() - 0.5) * 20 + 10 // Keep mostly in front
                );
    
                mesh.position.copy(explodePos); // Start exploded if added later, or logic will fix it
                scene.add(mesh);
    
                photoMeshes.push({
                    mesh: mesh,
                    treePos: treePos,
                    explodePos: explodePos,
                    wobbleOffset: Math.random() * 100,
                    isPhoto: true
                });
                
                // Add to main particles array for movement management
                particles.push(photoMeshes[photoMeshes.length-1]);
            }
    
    
            // --- MediaPipe Logic ---
            async function setupMediaPipe() {
                const video = document.getElementById('video-feed');
    
                // Access Global Hands Class
                const hands = new window.Hands({locateFile: (file) => {
                    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
                }});
    
                hands.setOptions({
                    maxNumHands: 1,
                    modelComplexity: 1,
                    minDetectionConfidence: 0.7,
                    minTrackingConfidence: 0.6
                });
    
                hands.onResults(onHandsResults);
    
                // Access Webcam
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                    video.srcObject = stream;
                    await video.play();
    
                    // Start processing loop specific to MediaPipe
                    async function detectionLoop() {
                        if (video.currentTime > 0 && !video.paused && !video.ended) {
                            await hands.send({image: video});
                        }
                        requestAnimationFrame(detectionLoop);
                    }
                    detectionLoop();
                } catch (err) {
                    console.error("Camera access denied or failed", err);
                    document.getElementById('loading-text').innerText = "未检测到摄像头，请检查权限。应用将自动运行演示模式。";
                    setTimeout(() => {
                        document.getElementById('loading').style.display = 'none';
                        // Auto demo mode logic could go here
                    }, 2000);
                }
            }
    
            function onHandsResults(results) {
                const modeDisplay = document.getElementById('mode-display');
                
                if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                    isHandDetected = true;
                    const landmarks = results.multiHandLandmarks[0];
    
                    // 1. Calculate Hand Center (for rotation)
                    // Wrist is 0, Middle Finger MCP is 9
                    const cx = landmarks[9].x;
                    const cy = landmarks[9].y;
                    handPos.x = (cx - 0.5) * 2; // -1 to 1
                    handPos.y = (cy - 0.5) * 2;
    
                    // 2. Gesture Recognition
                    const state = detectGesture(landmarks);
                    
                    if (state) {
                        targetState = state;
                        
                        // UI Update
                        let text = "未知";
                        let bg = "#333";
                        if (state === STATE.TREE) { text = "🌲 聚合形态"; bg = CONFIG.colors.green; }
                        if (state === STATE.EXPLODE) { text = "✨ 散开形态"; bg = "#444"; }
                        if (state === STATE.FOCUS) { text = "📷 聚焦照片"; bg = CONFIG.colors.red; }
                        
                        modeDisplay.innerText = text;
                        modeDisplay.style.borderColor = (state === STATE.FOCUS) ? '#fff' : CONFIG.colors.gold;
                    }
    
                } else {
                    isHandDetected = false;
                    // Optional: Slowly drift back to tree if no hand? Or stay in last state.
                    // Keeping last state is better for UX.
                }
            }
    
            function detectGesture(lm) {
                // Helper to check if finger is open
                const isFingerOpen = (tipIdx, pipIdx) => lm[tipIdx].y < lm[pipIdx].y; // Note: Y is inverted in some contexts, but MediaPipe y=0 is top. So tip < pip means finger up.
                // Actually, MediaPipe coords: 0,0 is top-left.
                // This assumes hand is upright. Let's use distance from wrist (0).
                
                const dist = (i, j) => Math.sqrt(Math.pow(lm[i].x - lm[j].x, 2) + Math.pow(lm[i].y - lm[j].y, 2));
                
                const wrist = 0;
                const tips = [8, 12, 16, 20];
                const pips = [6, 10, 14, 18];
                
                // Check Fingers Extended
                let extendedCount = 0;
                // Thumb is special, check x distance relative to wrist/index for "openness"
                if (dist(4, 17) > 0.2) extendedCount++; // Rough thumb check
    
                for (let k=0; k<4; k++) {
                    // If tip is further from wrist than PIP is from wrist
                    if (dist(wrist, tips[k]) > dist(wrist, pips[k]) * 1.2) {
                        extendedCount++;
                    }
                }
    
                // Pinch Detection (Thumb 4 and Index 8)
                const pinchDist = dist(4, 8);
    
                // LOGIC TREE
                // 稍微放宽捏合的判定距离 (0.05 -> 0.08)，让操作更灵敏
                if (pinchDist < 0.08) {
                    return STATE.FOCUS;
                } else if (extendedCount >= 4) {
                    return STATE.EXPLODE;
                } else if (extendedCount <= 1) {
                    return STATE.TREE;
                }
                
                return null; // No change / Transition
            }
    
    
            // --- Animation Loop ---
            function animate() {
                requestAnimationFrame(animate);
                time += 0.01;
    
                // 1. Smooth State Transition
                if (currentState !== targetState) {
                    currentState = targetState;
                    
                    // If entering focus mode, pick a random photo to bring forward if any exist
                    if (currentState === STATE.FOCUS && photoMeshes.length > 0) {
                         // Reset all photos first
                         photoMeshes.forEach(p => p.focusOffset = null);
                         // Pick one
                         const luckyPhoto = photoMeshes[Math.floor(Math.random() * photoMeshes.length)];
                         luckyPhoto.focusOffset = true;
                    }
                }
    
                // 2. Camera Controls
                // Default rotation
                let camX = Math.sin(time * 0.2) * 50;
                let camZ = Math.cos(time * 0.2) * 50;
                let camY = 0;
    
                // Hand Influence
                if (currentState === STATE.EXPLODE && isHandDetected) {
                    // Map hand x (-1 to 1) to rotation angle
                    const angle = handPos.x * Math.PI; 
                    camX = Math.sin(angle) * 60;
                    camZ = Math.cos(angle) * 60;
                    camY = handPos.y * 30;
                } else if (currentState === STATE.FOCUS) {
                    // Zoom in
                    camX *= 0.3;
                    camZ *= 0.3;
                }
    
                // Lerp Camera Position
                camera.position.x += (camX - camera.position.x) * 0.05;
                camera.position.y += (camY - camera.position.y) * 0.05;
                camera.position.z += (camZ - camera.position.z) * 0.05;
                camera.lookAt(0, 0, 0);
    
    
                // 3. Particle Animation
                particles.forEach(p => {
                    let target;
    
                    if (currentState === STATE.TREE) {
                        target = p.treePos;
                    } else if (currentState === STATE.EXPLODE) {
                        target = p.explodePos;
                    } else if (currentState === STATE.FOCUS) {
                        // In focus mode, keep background exploded but push back slightly
                        target = p.explodePos; 
                        
                        if (p.focusOffset) {
                            // This is the chosen photo
                            // 关键修改：动态计算目标位置，使其始终位于相机正前方
                            // 获取从原点指向相机的方向向量
                            const camDir = camera.position.clone().normalize();
                            // 将照片放置在距离原点 10 单位处（朝向相机方向）
                            // 这样无论相机转到哪里，照片都会在 View 的中心
                            const targetPos = camDir.multiplyScalar(10);
    
                            p.mesh.position.lerp(targetPos, 0.1);
                            
                            // FIX: 使用 copy(camera.quaternion) 确保照片绝对正对屏幕，不歪不倒
                            p.mesh.quaternion.copy(camera.quaternion);
                            return; // Skip standard update
                        }
                    }
    
                    // Add floating effect
                    const wobble = Math.sin(time * 2 + p.wobbleOffset) * 0.5;
                    const finalTarget = target.clone();
                    if (currentState !== STATE.TREE) {
                        finalTarget.y += wobble;
                    }
    
                    // Move mesh
                    p.mesh.position.lerp(finalTarget, 0.04);
                    
                    // Rotation
                    if (!p.isPhoto) {
                        p.mesh.rotation.x += 0.01;
                        p.mesh.rotation.y += 0.01;
                    } else if (currentState === STATE.TREE) {
                        // Photos in tree mode face out from center
                        // 树形状态下，让照片背面朝向中心，正面朝外，保持直立
                        p.mesh.lookAt(new THREE.Vector3(p.mesh.position.x * 2, p.mesh.position.y, p.mesh.position.z * 2));
                    } else {
                        // FIX: Photos in explode/focus mode
                        // 散开状态下，也强制让照片正对屏幕，防止出现倒置或歪斜
                        p.mesh.quaternion.copy(camera.quaternion);
                    }
                });
    
                // 普通渲染
                renderer.render(scene, camera);
            }
    
            function onWindowResize() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            }
    
            // Start
            init();
    
        </script>
    </body>
    </html>
    ```

- 现在的缺点：

    - 照片位置不均匀，需要改进；

        - 在用户上传照片后，照片在圣诞树的位置不均匀，需要改进；

            ::: details

            ```html
            <!DOCTYPE html>
            <html lang="zh-CN">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
                <title>Gesture Controlled Christmas Tree</title>
                <style>
                    body {
                        margin: 0;
                        overflow: hidden;
                        background-color: #111; /* 稍微提亮一点点背景，不是纯黑 */
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        color: #fff;
                    }
            
                    #canvas-container {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: 1;
                    }
            
                    /* UI Overlay */
                    #ui-layer {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: 10;
                        pointer-events: none; /* Let clicks pass through to canvas if needed */
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        padding: 20px;
                        box-sizing: border-box;
                    }
            
                    .header {
                        text-align: left;
                        text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
                    }
            
                    h1 {
                        margin: 0;
                        font-weight: 300;
                        color: #FFD700; /* Gold */
                        letter-spacing: 2px;
                        font-size: 24px;
                    }
            
                    p.subtitle {
                        margin: 5px 0 0 0;
                        color: #aaa;
                        font-size: 14px;
                    }
            
                    /* Status & Instructions */
                    .status-panel {
                        position: absolute;
                        top: 20px;
                        right: 20px;
                        text-align: right;
                    }
            
                    .status-tag {
                        display: inline-block;
                        padding: 8px 16px;
                        background: rgba(20, 30, 20, 0.8);
                        border: 1px solid #FFD700;
                        border-radius: 20px;
                        color: #FFD700;
                        font-weight: bold;
                        font-size: 14px;
                        margin-bottom: 10px;
                        transition: all 0.3s ease;
                    }
            
                    .instructions {
                        background: rgba(0, 0, 0, 0.5);
                        padding: 15px;
                        border-radius: 8px;
                        font-size: 12px;
                        color: #ddd;
                        max-width: 250px;
                        pointer-events: auto;
                        backdrop-filter: blur(5px);
                        border-left: 3px solid #C41E3A; /* Red */
                    }
            
                    .instruction-item {
                        display: flex;
                        align-items: center;
                        margin-bottom: 8px;
                    }
                    
                    .icon { margin-right: 10px; font-size: 16px; width: 20px; text-align: center;}
            
                    /* Upload Button */
                    .upload-container {
                        pointer-events: auto;
                        margin-top: auto;
                        align-self: center;
                        margin-bottom: 20px;
                    }
            
                    #upload-btn {
                        background: linear-gradient(135deg, #C41E3A 0%, #800000 100%);
                        border: none;
                        padding: 12px 30px;
                        color: white;
                        border-radius: 30px;
                        cursor: pointer;
                        font-size: 16px;
                        box-shadow: 0 0 15px rgba(196, 30, 58, 0.6);
                        transition: transform 0.2s;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                    }
            
                    #upload-btn:hover {
                        transform: scale(1.05);
                    }
            
                    #file-input {
                        display: none;
                    }
            
                    /* Webcam feedback (hidden but processed) */
                    #video-feed {
                        position: absolute;
                        bottom: 20px;
                        left: 20px;
                        width: 160px;
                        height: 120px;
                        border-radius: 10px;
                        transform: scaleX(-1); /* Mirror */
                        border: 2px solid #FFD700;
                        opacity: 0.7;
                        z-index: 20;
                        object-fit: cover;
                        display: block; /* Required for MediaPipe */
                    }
            
                    /* Loading Screen */
                    #loading {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: #000;
                        z-index: 100;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        color: #FFD700;
                        transition: opacity 0.5s;
                    }
            
                    .loader {
                        border: 4px solid #333;
                        border-top: 4px solid #FFD700;
                        border-radius: 50%;
                        width: 40px;
                        height: 40px;
                        animation: spin 1s linear infinite;
                        margin-bottom: 15px;
                    }
            
                    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            
                </style>
                <!-- MediaPipe Hands Global Script (Fix for Module Error) -->
                <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/hands.js" crossorigin="anonymous"></script>
            
                <!-- Import Maps for Three.js and Addons -->
                <script type="importmap">
                    {
                        "imports": {
                            "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
                            "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"
                        }
                    }
                </script>
            </head>
            <body>
            
                <!-- Loading Screen -->
                <div id="loading">
                    <div class="loader"></div>
                    <div id="loading-text">正在初始化视觉引擎与AI模型...</div>
                </div>
            
                <!-- Video Element for MediaPipe (Visible for user feedback) -->
                <video id="video-feed" playsinline></video>
            
                <!-- UI Layer -->
                <div id="ui-layer">
                    <div class="header">
                        <h1>CHRISTMAS GESTURE</h1>
                        <p class="subtitle">MediaPipe & Three.js WebGL Experience</p>
                    </div>
            
                    <div class="status-panel">
                        <div id="mode-display" class="status-tag">等待手势...</div>
                        <div class="instructions">
                            <div class="instruction-item"><span class="icon">✊</span> 握拳：聚合 (TREE)</div>
                            <div class="instruction-item"><span class="icon">🖐</span> 张开：散开 (EXPLODE)</div>
                            <div class="instruction-item"><span class="icon">🤏</span> 捏合：特写 (FOCUS)</div>
                            <div class="instruction-item"><span class="icon">👋</span> 移动：旋转视角</div>
                        </div>
                    </div>
            
                    <div class="upload-container">
                        <button id="upload-btn" onclick="document.getElementById('file-input').click()">上传照片云 (+)</button>
                        <input type="file" id="file-input" accept="image/*" multiple onchange="handlePhotoUpload(event)">
                    </div>
                </div>
            
                <!-- 3D Canvas -->
                <div id="canvas-container"></div>
            
                <!-- Main Logic -->
                <script type="module">
                    import * as THREE from 'three';
            
                    // --- Configuration & Constants ---
                    const CONFIG = {
                        colors: {
                            green: 0x228B22,   // Forest Green (Brighter)
                            gold: 0xFFD700,    // Metallic Gold
                            red: 0xFF0000,     // Bright Red
                            white: 0xFFFFFF
                        },
                        particles: 1500,       // 增加粒子数量到 1500，让树更茂密
                        radius: 18,            // Base radius of tree bottom
                        height: 35,            // Height of tree
                    };
            
                    // --- Global Variables ---
                    let scene, camera, renderer;
                    let particles = []; // Array to store { mesh, treePos, explodePos, currentPos, speed }
                    let photoMeshes = []; // Array specifically for user photos
                    let time = 0;
                    
                    // Interaction State
                    const STATE = {
                        TREE: 'TREE',
                        EXPLODE: 'EXPLODE',
                        FOCUS: 'FOCUS'
                    };
                    let currentState = STATE.TREE;
                    let targetState = STATE.TREE;
                    
                    // Hand Data
                    let handPos = { x: 0, y: 0 }; // Normalized -1 to 1
                    let isHandDetected = false;
            
                    // --- Initialization ---
                    async function init() {
                        // 1. Scene Setup
                        const container = document.getElementById('canvas-container');
                        scene = new THREE.Scene();
                        scene.background = new THREE.Color(0x111111); // Dark Gray instead of pure black
            
                        camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
                        camera.position.set(0, 0, 50);
            
                        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
                        renderer.setSize(window.innerWidth, window.innerHeight);
                        renderer.setPixelRatio(window.devicePixelRatio);
                        renderer.outputColorSpace = THREE.SRGBColorSpace;
                        container.appendChild(renderer.domElement);
            
                        // 2. Lighting - 大幅增强光照
                        // 2.1 强环境光，照亮所有阴影
                        const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); 
                        scene.add(ambientLight);
            
                        // 2.2 主平行光（模拟阳光），提供清晰的明暗关系
                        const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
                        mainLight.position.set(10, 20, 20);
                        scene.add(mainLight);
            
                        // 2.3 补光灯（金色），增加华丽感
                        const pointLight = new THREE.PointLight(CONFIG.colors.gold, 2, 100);
                        pointLight.position.set(0, 20, 10);
                        scene.add(pointLight);
                        
                        // 2.4 氛围灯（红绿），增加节日气氛，但调高亮度
                        const redLight = new THREE.PointLight(CONFIG.colors.red, 2, 50);
                        redLight.position.set(15, 10, 15);
                        scene.add(redLight);
                        
                        const greenLight = new THREE.PointLight(CONFIG.colors.green, 2, 50);
                        greenLight.position.set(-15, -10, 15);
                        scene.add(greenLight);
            
                        // 3. Post Processing Removed
            
                        // 4. Content Generation
                        createParticles();
                        createStar();
                        
                        // 5. Setup MediaPipe
                        await setupMediaPipe();
            
                        // 6. Events
                        window.addEventListener('resize', onWindowResize);
            
                        // 7. Start Loop
                        document.getElementById('loading').style.opacity = '0';
                        setTimeout(() => document.getElementById('loading').style.display = 'none', 500);
                        animate();
                    }
            
                    // --- Particle System Logic ---
            
                    // 移除旧的螺旋线逻辑，改用体积计算
                    function getConeVolumePosition(h, maxR) {
                        // h is 0 (bottom) to 1 (top)
                        
                        // 当前高度的圆锥截面半径
                        const rAtHeight = maxR * (1 - h);
                        
                        // 随机分布在圆截面内，但更倾向于外表面以保持树的形状
                        // 使用 Math.pow 调整分布：指数越小越均匀，指数越大越集中在边缘
                        const r = rAtHeight * Math.pow(Math.random(), 0.4); 
                        
                        const angle = Math.random() * Math.PI * 2;
                        
                        const x = r * Math.cos(angle);
                        const z = r * Math.sin(angle);
                        
                        // 将高度映射到实际坐标 y
                        const y = -CONFIG.height/2 + h * CONFIG.height;
                        
                        return new THREE.Vector3(x, y, z);
                    }
            
                    // 新增：专门用于照片的均匀分布算法 (基于黄金角度螺旋)
                    // 这能确保无论上传多少张照片，它们都能均匀地分布在树的表面，不会扎堆
                    function getPhotoSurfacePosition(index) {
                        // 黄金分割比，用于打散高度和角度
                        const goldenRatio = 0.61803398875;
                        
                        // 高度分布算法：
                        // 使用 index * goldenRatio 取模，得到一个在 0-1 之间均匀跳跃的伪随机序列
                        // 我们限制范围在 0.15 ~ 0.85 之间，避免照片出现在树尖太高或树底太低的位置
                        const h = ((index * goldenRatio) % 0.7) + 0.15; 
                        
                        // 角度分布：黄金角度 (约 137.5 度)
                        // 保证任意相邻或相近的照片在水平方向上都相隔甚远，360度无死角覆盖
                        const angle = index * Math.PI * 2 * goldenRatio;
                        
                        // 半径计算：基于圆锥表面
                        // CONFIG.radius 是底部半径
                        const rBase = CONFIG.radius * (1 - h);
                        const r = rBase + 2.5; // +2.5 让照片明显悬浮在树叶表面之外，作为装饰重点
                        
                        const x = r * Math.cos(angle);
                        const z = r * Math.sin(angle);
                        const y = -CONFIG.height/2 + h * CONFIG.height;
                        
                        return new THREE.Vector3(x, y, z);
                    }
            
                    function createParticles() {
                        const geometrySphere = new THREE.SphereGeometry(0.4, 32, 32); 
                        const geometryCube = new THREE.BoxGeometry(0.8, 0.8, 0.8); // 稍微加大方块，充当树叶
                        const geometryTetra = new THREE.TetrahedronGeometry(0.6); // 增加四面体作为另一种树叶
                        
                        // Materials - 更亮、更鲜艳的材质设置
                        const matGold = new THREE.MeshStandardMaterial({ 
                            color: CONFIG.colors.gold, 
                            roughness: 0.2, 
                            metalness: 0.6, 
                            emissive: 0x443300 
                        });
                        const matRed = new THREE.MeshStandardMaterial({ 
                            color: CONFIG.colors.red, 
                            roughness: 0.3, 
                            metalness: 0.3, 
                            emissive: 0x330000
                        });
                        const matGreen = new THREE.MeshStandardMaterial({ 
                            color: CONFIG.colors.green, 
                            roughness: 0.8, // 哑光，像叶子
                            metalness: 0.0 
                        });
            
                        for (let i = 0; i < CONFIG.particles; i++) {
                            let mesh;
                            const type = Math.random();
                            
                            // 调整比例：80% 是绿色枝叶，20% 是装饰品
                            if (type < 0.6) {
                                // Green filler (Box - 树叶)
                                mesh = new THREE.Mesh(geometryCube, matGreen);
                                mesh.rotation.set(Math.random(), Math.random(), Math.random());
                            } else if (type < 0.8) {
                                 // Green filler 2 (Tetrahedron - 针叶质感)
                                mesh = new THREE.Mesh(geometryTetra, matGreen);
                                mesh.rotation.set(Math.random(), Math.random(), Math.random());
                            } else if (type < 0.9) {
                                // Gold ornaments (Sphere)
                                mesh = new THREE.Mesh(geometrySphere, matGold);
                                mesh.scale.setScalar(1.5);
                            } else {
                                // Red ornaments (Sphere)
                                mesh = new THREE.Mesh(geometrySphere, matRed);
                                mesh.scale.setScalar(1.2);
                            }
            
                            // Tree Position (Target) - 使用新的体积填充算法
                            const h = Math.random(); // 0 到 1 的随机高度
                            const treePos = getConeVolumePosition(h, CONFIG.radius);
            
                            // Explode Position (Target)
                            const explodePos = new THREE.Vector3(
                                (Math.random() - 0.5) * 60,
                                (Math.random() - 0.5) * 60,
                                (Math.random() - 0.5) * 40
                            );
            
                            // Initial Pos
                            mesh.position.copy(treePos);
                            
                            scene.add(mesh);
            
                            particles.push({
                                mesh: mesh,
                                treePos: treePos,
                                explodePos: explodePos,
                                velocity: new THREE.Vector3(),
                                wobbleOffset: Math.random() * 100
                            });
                        }
                    }
            
                    function createStar() {
                        // Simple Star on top
                        const geometry = new THREE.OctahedronGeometry(1.5, 0);
                        const material = new THREE.MeshStandardMaterial({
                            color: 0xFFFF00, // Bright Yellow
                            emissive: 0xFFD700,
                            emissiveIntensity: 1, // Reduced slightly as bloom is gone, but still bright
                            roughness: 0.2,
                            metalness: 0.8
                        });
                        const star = new THREE.Mesh(geometry, material);
                        star.position.set(0, CONFIG.height/2 + 2, 0);
                        
                        // Star is just a special particle
                        scene.add(star);
                        particles.push({
                            mesh: star,
                            treePos: new THREE.Vector3(0, CONFIG.height/2 + 2, 0),
                            explodePos: new THREE.Vector3(0, 10, 0),
                            wobbleOffset: 0
                        });
                    }
            
                    // --- Photo Upload Logic ---
                    window.handlePhotoUpload = function(event) {
                        const files = event.target.files;
                        if (!files.length) return;
            
                        Array.from(files).forEach((file, index) => {
                            const reader = new FileReader();
                            reader.onload = function(e) {
                                const img = new Image();
                                img.src = e.target.result;
                                img.onload = () => {
                                    createPhotoMesh(img);
                                }
                            };
                            reader.readAsDataURL(file);
                        });
                    };
            
                    function createPhotoMesh(image) {
                        const texture = new THREE.Texture(image);
                        texture.needsUpdate = true;
                        texture.colorSpace = THREE.SRGBColorSpace;
            
                        // Maintain aspect ratio
                        const aspect = image.width / image.height;
                        const w = 4;
                        const h = 4 / aspect;
            
                        const geometry = new THREE.PlaneGeometry(w, h);
                        // Use BasicMaterial for photos so they are always fully bright and not affected by shadows
                        const material = new THREE.MeshBasicMaterial({ 
                            map: texture, 
                            side: THREE.DoubleSide,
                            transparent: true,
                            opacity: 1.0 
                        });
            
                        const mesh = new THREE.Mesh(geometry, material);
                        
                        // Add a border (gold frame)
                        const frameGeo = new THREE.BoxGeometry(w + 0.2, h + 0.2, 0.1);
                        const frameMat = new THREE.MeshStandardMaterial({ 
                            color: CONFIG.colors.gold, 
                            metalness: 0.8, 
                            roughness: 0.2,
                            emissive: 0x332200
                        });
                        const frame = new THREE.Mesh(frameGeo, frameMat);
                        frame.position.z = -0.06;
                        mesh.add(frame);
            
                        // 修改位置计算逻辑：使用确定性的黄金螺旋算法
                        // 传入当前照片的总数作为 index，确保每张新照片都有唯一且均匀的位置
                        const index = photoMeshes.length;
                        const treePos = getPhotoSurfacePosition(index);
            
                        const explodePos = new THREE.Vector3(
                            (Math.random() - 0.5) * 50,
                            (Math.random() - 0.5) * 50,
                            (Math.random() - 0.5) * 20 + 10 // Keep mostly in front
                        );
            
                        mesh.position.copy(explodePos); // Start exploded if added later, or logic will fix it
                        scene.add(mesh);
            
                        photoMeshes.push({
                            mesh: mesh,
                            treePos: treePos,
                            explodePos: explodePos,
                            wobbleOffset: Math.random() * 100,
                            isPhoto: true
                        });
                        
                        // Add to main particles array for movement management
                        particles.push(photoMeshes[photoMeshes.length-1]);
                    }
            
            
                    // --- MediaPipe Logic ---
                    async function setupMediaPipe() {
                        const video = document.getElementById('video-feed');
            
                        // Access Global Hands Class
                        const hands = new window.Hands({locateFile: (file) => {
                            return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
                        }});
            
                        hands.setOptions({
                            maxNumHands: 1,
                            modelComplexity: 1,
                            minDetectionConfidence: 0.7,
                            minTrackingConfidence: 0.6
                        });
            
                        hands.onResults(onHandsResults);
            
                        // Access Webcam
                        try {
                            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                            video.srcObject = stream;
                            await video.play();
            
                            // Start processing loop specific to MediaPipe
                            async function detectionLoop() {
                                if (video.currentTime > 0 && !video.paused && !video.ended) {
                                    await hands.send({image: video});
                                }
                                requestAnimationFrame(detectionLoop);
                            }
                            detectionLoop();
                        } catch (err) {
                            console.error("Camera access denied or failed", err);
                            document.getElementById('loading-text').innerText = "未检测到摄像头，请检查权限。应用将自动运行演示模式。";
                            setTimeout(() => {
                                document.getElementById('loading').style.display = 'none';
                                // Auto demo mode logic could go here
                            }, 2000);
                        }
                    }
            
                    function onHandsResults(results) {
                        const modeDisplay = document.getElementById('mode-display');
                        
                        if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                            isHandDetected = true;
                            const landmarks = results.multiHandLandmarks[0];
            
                            // 1. Calculate Hand Center (for rotation)
                            // Wrist is 0, Middle Finger MCP is 9
                            const cx = landmarks[9].x;
                            const cy = landmarks[9].y;
                            handPos.x = (cx - 0.5) * 2; // -1 to 1
                            handPos.y = (cy - 0.5) * 2;
            
                            // 2. Gesture Recognition
                            const state = detectGesture(landmarks);
                            
                            if (state) {
                                targetState = state;
                                
                                // UI Update
                                let text = "未知";
                                let bg = "#333";
                                if (state === STATE.TREE) { text = "🌲 聚合形态"; bg = CONFIG.colors.green; }
                                if (state === STATE.EXPLODE) { text = "✨ 散开形态"; bg = "#444"; }
                                if (state === STATE.FOCUS) { text = "📷 聚焦照片"; bg = CONFIG.colors.red; }
                                
                                modeDisplay.innerText = text;
                                modeDisplay.style.borderColor = (state === STATE.FOCUS) ? '#fff' : CONFIG.colors.gold;
                            }
            
                        } else {
                            isHandDetected = false;
                            // Optional: Slowly drift back to tree if no hand? Or stay in last state.
                            // Keeping last state is better for UX.
                        }
                    }
            
                    function detectGesture(lm) {
                        // Helper to check if finger is open
                        const isFingerOpen = (tipIdx, pipIdx) => lm[tipIdx].y < lm[pipIdx].y; // Note: Y is inverted in some contexts, but MediaPipe y=0 is top. So tip < pip means finger up.
                        // Actually, MediaPipe coords: 0,0 is top-left.
                        // This assumes hand is upright. Let's use distance from wrist (0).
                        
                        const dist = (i, j) => Math.sqrt(Math.pow(lm[i].x - lm[j].x, 2) + Math.pow(lm[i].y - lm[j].y, 2));
                        
                        const wrist = 0;
                        const tips = [8, 12, 16, 20];
                        const pips = [6, 10, 14, 18];
                        
                        // Check Fingers Extended
                        let extendedCount = 0;
                        // Thumb is special, check x distance relative to wrist/index for "openness"
                        if (dist(4, 17) > 0.2) extendedCount++; // Rough thumb check
            
                        for (let k=0; k<4; k++) {
                            // If tip is further from wrist than PIP is from wrist
                            if (dist(wrist, tips[k]) > dist(wrist, pips[k]) * 1.2) {
                                extendedCount++;
                            }
                        }
            
                        // Pinch Detection (Thumb 4 and Index 8)
                        const pinchDist = dist(4, 8);
            
                        // LOGIC TREE
                        // 稍微放宽捏合的判定距离 (0.05 -> 0.08)，让操作更灵敏
                        if (pinchDist < 0.08) {
                            return STATE.FOCUS;
                        } else if (extendedCount >= 4) {
                            return STATE.EXPLODE;
                        } else if (extendedCount <= 1) {
                            return STATE.TREE;
                        }
                        
                        return null; // No change / Transition
                    }
            
            
                    // --- Animation Loop ---
                    function animate() {
                        requestAnimationFrame(animate);
                        time += 0.01;
            
                        // 1. Smooth State Transition
                        if (currentState !== targetState) {
                            currentState = targetState;
                            
                            // If entering focus mode, pick a random photo to bring forward if any exist
                            if (currentState === STATE.FOCUS && photoMeshes.length > 0) {
                                 // Reset all photos first
                                 photoMeshes.forEach(p => p.focusOffset = null);
                                 // Pick one
                                 const luckyPhoto = photoMeshes[Math.floor(Math.random() * photoMeshes.length)];
                                 luckyPhoto.focusOffset = true;
                            }
                        }
            
                        // 2. Camera Controls
                        // Default rotation
                        let camX = Math.sin(time * 0.2) * 50;
                        let camZ = Math.cos(time * 0.2) * 50;
                        let camY = 0;
            
                        // Hand Influence
                        if (currentState === STATE.EXPLODE && isHandDetected) {
                            // Map hand x (-1 to 1) to rotation angle
                            const angle = handPos.x * Math.PI; 
                            camX = Math.sin(angle) * 60;
                            camZ = Math.cos(angle) * 60;
                            camY = handPos.y * 30;
                        } else if (currentState === STATE.FOCUS) {
                            // Zoom in
                            camX *= 0.3;
                            camZ *= 0.3;
                        }
            
                        // Lerp Camera Position
                        camera.position.x += (camX - camera.position.x) * 0.05;
                        camera.position.y += (camY - camera.position.y) * 0.05;
                        camera.position.z += (camZ - camera.position.z) * 0.05;
                        camera.lookAt(0, 0, 0);
            
            
                        // 3. Particle Animation
                        particles.forEach(p => {
                            let target;
            
                            if (currentState === STATE.TREE) {
                                target = p.treePos;
                            } else if (currentState === STATE.EXPLODE) {
                                target = p.explodePos;
                            } else if (currentState === STATE.FOCUS) {
                                // In focus mode, keep background exploded but push back slightly
                                target = p.explodePos; 
                                
                                if (p.focusOffset) {
                                    // This is the chosen photo
                                    // 关键修改：动态计算目标位置，使其始终位于相机正前方
                                    // 获取从原点指向相机的方向向量
                                    const camDir = camera.position.clone().normalize();
                                    // 将照片放置在距离原点 10 单位处（朝向相机方向）
                                    // 这样无论相机转到哪里，照片都会在 View 的中心
                                    const targetPos = camDir.multiplyScalar(10);
            
                                    p.mesh.position.lerp(targetPos, 0.1);
                                    
                                    // FIX: 使用 copy(camera.quaternion) 确保照片绝对正对屏幕，不歪不倒
                                    p.mesh.quaternion.copy(camera.quaternion);
                                    return; // Skip standard update
                                }
                            }
            
                            // Add floating effect
                            const wobble = Math.sin(time * 2 + p.wobbleOffset) * 0.5;
                            const finalTarget = target.clone();
                            if (currentState !== STATE.TREE) {
                                finalTarget.y += wobble;
                            }
            
                            // Move mesh
                            p.mesh.position.lerp(finalTarget, 0.04);
                            
                            // Rotation
                            if (!p.isPhoto) {
                                p.mesh.rotation.x += 0.01;
                                p.mesh.rotation.y += 0.01;
                            } else if (currentState === STATE.TREE) {
                                // Photos in tree mode face out from center
                                // 树形状态下，让照片背面朝向中心，正面朝外，保持直立
                                p.mesh.lookAt(new THREE.Vector3(p.mesh.position.x * 2, p.mesh.position.y, p.mesh.position.z * 2));
                            } else {
                                // FIX: Photos in explode/focus mode
                                // 散开状态下，也强制让照片正对屏幕，防止出现倒置或歪斜
                                p.mesh.quaternion.copy(camera.quaternion);
                            }
                        });
            
                        // 普通渲染
                        renderer.render(scene, camera);
                    }
            
                    function onWindowResize() {
                        camera.aspect = window.innerWidth / window.innerHeight;
                        camera.updateProjectionMatrix();
                        renderer.setSize(window.innerWidth, window.innerHeight);
                    }
            
                    // Start
                    init();
            
                </script>
            </body>
            </html>
            ```

            :::

    - 圣诞树散开形态时，不是成圆形，有点矩形！需要在散开形态时，成圆形。

        ::: details

        ```html
        <!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
            <title>Gesture Controlled Christmas Tree</title>
            <style>
                body {
                    margin: 0;
                    overflow: hidden;
                    background-color: #111; /* 稍微提亮一点点背景，不是纯黑 */
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    color: #fff;
                }
        
                #canvas-container {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                }
        
                /* UI Overlay */
                #ui-layer {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 10;
                    pointer-events: none; /* Let clicks pass through to canvas if needed */
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 20px;
                    box-sizing: border-box;
                }
        
                .header {
                    text-align: left;
                    text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
                }
        
                h1 {
                    margin: 0;
                    font-weight: 300;
                    color: #FFD700; /* Gold */
                    letter-spacing: 2px;
                    font-size: 24px;
                }
        
                p.subtitle {
                    margin: 5px 0 0 0;
                    color: #aaa;
                    font-size: 14px;
                }
        
                /* Status & Instructions */
                .status-panel {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    text-align: right;
                }
        
                .status-tag {
                    display: inline-block;
                    padding: 8px 16px;
                    background: rgba(20, 30, 20, 0.8);
                    border: 1px solid #FFD700;
                    border-radius: 20px;
                    color: #FFD700;
                    font-weight: bold;
                    font-size: 14px;
                    margin-bottom: 10px;
                    transition: all 0.3s ease;
                }
        
                .instructions {
                    background: rgba(0, 0, 0, 0.5);
                    padding: 15px;
                    border-radius: 8px;
                    font-size: 12px;
                    color: #ddd;
                    max-width: 250px;
                    pointer-events: auto;
                    backdrop-filter: blur(5px);
                    border-left: 3px solid #C41E3A; /* Red */
                }
        
                .instruction-item {
                    display: flex;
                    align-items: center;
                    margin-bottom: 8px;
                }
                
                .icon { margin-right: 10px; font-size: 16px; width: 20px; text-align: center;}
        
                /* Upload Button */
                .upload-container {
                    pointer-events: auto;
                    margin-top: auto;
                    align-self: center;
                    margin-bottom: 20px;
                }
        
                #upload-btn {
                    background: linear-gradient(135deg, #C41E3A 0%, #800000 100%);
                    border: none;
                    padding: 12px 30px;
                    color: white;
                    border-radius: 30px;
                    cursor: pointer;
                    font-size: 16px;
                    box-shadow: 0 0 15px rgba(196, 30, 58, 0.6);
                    transition: transform 0.2s;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
        
                #upload-btn:hover {
                    transform: scale(1.05);
                }
        
                #file-input {
                    display: none;
                }
        
                /* Webcam feedback (hidden but processed) */
                #video-feed {
                    position: absolute;
                    bottom: 20px;
                    left: 20px;
                    width: 160px;
                    height: 120px;
                    border-radius: 10px;
                    transform: scaleX(-1); /* Mirror */
                    border: 2px solid #FFD700;
                    opacity: 0.7;
                    z-index: 20;
                    object-fit: cover;
                    display: block; /* Required for MediaPipe */
                }
        
                /* Loading Screen */
                #loading {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: #000;
                    z-index: 100;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    color: #FFD700;
                    transition: opacity 0.5s;
                }
        
                .loader {
                    border: 4px solid #333;
                    border-top: 4px solid #FFD700;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    animation: spin 1s linear infinite;
                    margin-bottom: 15px;
                }
        
                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        
            </style>
            <!-- MediaPipe Hands Global Script (Fix for Module Error) -->
            <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/hands.js" crossorigin="anonymous"></script>
        
            <!-- Import Maps for Three.js and Addons -->
            <script type="importmap">
                {
                    "imports": {
                        "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
                        "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"
                    }
                }
            </script>
        </head>
        <body>
        
            <!-- Loading Screen -->
            <div id="loading">
                <div class="loader"></div>
                <div id="loading-text">正在初始化视觉引擎与AI模型...</div>
            </div>
        
            <!-- Video Element for MediaPipe (Visible for user feedback) -->
            <video id="video-feed" playsinline></video>
        
            <!-- UI Layer -->
            <div id="ui-layer">
                <div class="header">
                    <h1>CHRISTMAS GESTURE</h1>
                    <p class="subtitle">MediaPipe & Three.js WebGL Experience</p>
                </div>
        
                <div class="status-panel">
                    <div id="mode-display" class="status-tag">等待手势...</div>
                    <div class="instructions">
                        <div class="instruction-item"><span class="icon">✊</span> 握拳：聚合 (TREE)</div>
                        <div class="instruction-item"><span class="icon">🖐</span> 张开：散开 (EXPLODE)</div>
                        <div class="instruction-item"><span class="icon">🤏</span> 捏合：特写 (FOCUS)</div>
                        <div class="instruction-item"><span class="icon">👋</span> 移动：旋转视角</div>
                    </div>
                </div>
        
                <div class="upload-container">
                    <button id="upload-btn" onclick="document.getElementById('file-input').click()">上传照片云 (+)</button>
                    <input type="file" id="file-input" accept="image/*" multiple onchange="handlePhotoUpload(event)">
                </div>
            </div>
        
            <!-- 3D Canvas -->
            <div id="canvas-container"></div>
        
            <!-- Main Logic -->
            <script type="module">
                import * as THREE from 'three';
        
                // --- Configuration & Constants ---
                const CONFIG = {
                    colors: {
                        green: 0x228B22,   // Forest Green (Brighter)
                        gold: 0xFFD700,    // Metallic Gold
                        red: 0xFF0000,     // Bright Red
                        white: 0xFFFFFF
                    },
                    particles: 1500,       // 增加粒子数量到 1500，让树更茂密
                    radius: 18,            // Base radius of tree bottom
                    height: 35,            // Height of tree
                };
        
                // --- Global Variables ---
                let scene, camera, renderer;
                let particles = []; // Array to store { mesh, treePos, explodePos, currentPos, speed }
                let photoMeshes = []; // Array specifically for user photos
                let time = 0;
                
                // Interaction State
                const STATE = {
                    TREE: 'TREE',
                    EXPLODE: 'EXPLODE',
                    FOCUS: 'FOCUS'
                };
                let currentState = STATE.TREE;
                let targetState = STATE.TREE;
                
                // Hand Data
                let handPos = { x: 0, y: 0 }; // Normalized -1 to 1
                let isHandDetected = false;
        
                // --- Initialization ---
                async function init() {
                    // 1. Scene Setup
                    const container = document.getElementById('canvas-container');
                    scene = new THREE.Scene();
                    scene.background = new THREE.Color(0x111111); // Dark Gray instead of pure black
        
                    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
                    camera.position.set(0, 0, 50);
        
                    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
                    renderer.setSize(window.innerWidth, window.innerHeight);
                    renderer.setPixelRatio(window.devicePixelRatio);
                    renderer.outputColorSpace = THREE.SRGBColorSpace;
                    container.appendChild(renderer.domElement);
        
                    // 2. Lighting - 大幅增强光照
                    // 2.1 强环境光，照亮所有阴影
                    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); 
                    scene.add(ambientLight);
        
                    // 2.2 主平行光（模拟阳光），提供清晰的明暗关系
                    const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
                    mainLight.position.set(10, 20, 20);
                    scene.add(mainLight);
        
                    // 2.3 补光灯（金色），增加华丽感
                    const pointLight = new THREE.PointLight(CONFIG.colors.gold, 2, 100);
                    pointLight.position.set(0, 20, 10);
                    scene.add(pointLight);
                    
                    // 2.4 氛围灯（红绿），增加节日气氛，但调高亮度
                    const redLight = new THREE.PointLight(CONFIG.colors.red, 2, 50);
                    redLight.position.set(15, 10, 15);
                    scene.add(redLight);
                    
                    const greenLight = new THREE.PointLight(CONFIG.colors.green, 2, 50);
                    greenLight.position.set(-15, -10, 15);
                    scene.add(greenLight);
        
                    // 3. Post Processing Removed
        
                    // 4. Content Generation
                    createParticles();
                    createStar();
                    
                    // 5. Setup MediaPipe
                    await setupMediaPipe();
        
                    // 6. Events
                    window.addEventListener('resize', onWindowResize);
        
                    // 7. Start Loop
                    document.getElementById('loading').style.opacity = '0';
                    setTimeout(() => document.getElementById('loading').style.display = 'none', 500);
                    animate();
                }
        
                // --- Particle System Logic ---
        
                // 移除旧的螺旋线逻辑，改用体积计算
                function getConeVolumePosition(h, maxR) {
                    // h is 0 (bottom) to 1 (top)
                    
                    // 当前高度的圆锥截面半径
                    const rAtHeight = maxR * (1 - h);
                    
                    // 随机分布在圆截面内，但更倾向于外表面以保持树的形状
                    // 使用 Math.pow 调整分布：指数越小越均匀，指数越大越集中在边缘
                    const r = rAtHeight * Math.pow(Math.random(), 0.4); 
                    
                    const angle = Math.random() * Math.PI * 2;
                    
                    const x = r * Math.cos(angle);
                    const z = r * Math.sin(angle);
                    
                    // 将高度映射到实际坐标 y
                    const y = -CONFIG.height/2 + h * CONFIG.height;
                    
                    return new THREE.Vector3(x, y, z);
                }
        
                // 新增：专门用于散开形态的球体分布算法 (圆形)
                function getExplodeSpherePosition(maxRadius) {
                    // 球坐标随机分布
                    const u = Math.random();
                    const v = Math.random();
                    const theta = 2 * Math.PI * u;
                    const phi = Math.acos(2 * v - 1);
                    
                    // 使用立方根确保在体积内均匀分布（不仅仅是表面，也不仅仅是核心）
                    const r = maxRadius * Math.cbrt(Math.random()); 
                    
                    const x = r * Math.sin(phi) * Math.cos(theta);
                    const y = r * Math.sin(phi) * Math.sin(theta);
                    const z = r * Math.cos(phi);
                    
                    return new THREE.Vector3(x, y, z);
                }
        
                // 新增：专门用于照片的均匀分布算法 (基于黄金角度螺旋)
                // 这能确保无论上传多少张照片，它们都能均匀地分布在树的表面，不会扎堆
                function getPhotoSurfacePosition(index) {
                    // 黄金分割比，用于打散高度和角度
                    const goldenRatio = 0.61803398875;
                    
                    // 高度分布算法：
                    // 使用 index * goldenRatio 取模，得到一个在 0-1 之间均匀跳跃的伪随机序列
                    // 我们限制范围在 0.15 ~ 0.85 之间，避免照片出现在树尖太高或树底太低的位置
                    const h = ((index * goldenRatio) % 0.7) + 0.15; 
                    
                    // 角度分布：黄金角度 (约 137.5 度)
                    // 保证任意相邻或相近的照片在水平方向上都相隔甚远，360度无死角覆盖
                    const angle = index * Math.PI * 2 * goldenRatio;
                    
                    // 半径计算：基于圆锥表面
                    // CONFIG.radius 是底部半径
                    const rBase = CONFIG.radius * (1 - h);
                    const r = rBase + 2.5; // +2.5 让照片明显悬浮在树叶表面之外，作为装饰重点
                    
                    const x = r * Math.cos(angle);
                    const z = r * Math.sin(angle);
                    const y = -CONFIG.height/2 + h * CONFIG.height;
                    
                    return new THREE.Vector3(x, y, z);
                }
        
                function createParticles() {
                    const geometrySphere = new THREE.SphereGeometry(0.4, 32, 32); 
                    const geometryCube = new THREE.BoxGeometry(0.8, 0.8, 0.8); // 稍微加大方块，充当树叶
                    const geometryTetra = new THREE.TetrahedronGeometry(0.6); // 增加四面体作为另一种树叶
                    
                    // Materials - 更亮、更鲜艳的材质设置
                    const matGold = new THREE.MeshStandardMaterial({ 
                        color: CONFIG.colors.gold, 
                        roughness: 0.2, 
                        metalness: 0.6, 
                        emissive: 0x443300 
                    });
                    const matRed = new THREE.MeshStandardMaterial({ 
                        color: CONFIG.colors.red, 
                        roughness: 0.3, 
                        metalness: 0.3, 
                        emissive: 0x330000
                    });
                    const matGreen = new THREE.MeshStandardMaterial({ 
                        color: CONFIG.colors.green, 
                        roughness: 0.8, // 哑光，像叶子
                        metalness: 0.0 
                    });
        
                    for (let i = 0; i < CONFIG.particles; i++) {
                        let mesh;
                        const type = Math.random();
                        
                        // 调整比例：80% 是绿色枝叶，20% 是装饰品
                        if (type < 0.6) {
                            // Green filler (Box - 树叶)
                            mesh = new THREE.Mesh(geometryCube, matGreen);
                            mesh.rotation.set(Math.random(), Math.random(), Math.random());
                        } else if (type < 0.8) {
                             // Green filler 2 (Tetrahedron - 针叶质感)
                            mesh = new THREE.Mesh(geometryTetra, matGreen);
                            mesh.rotation.set(Math.random(), Math.random(), Math.random());
                        } else if (type < 0.9) {
                            // Gold ornaments (Sphere)
                            mesh = new THREE.Mesh(geometrySphere, matGold);
                            mesh.scale.setScalar(1.5);
                        } else {
                            // Red ornaments (Sphere)
                            mesh = new THREE.Mesh(geometrySphere, matRed);
                            mesh.scale.setScalar(1.2);
                        }
        
                        // Tree Position (Target) - 使用新的体积填充算法
                        const h = Math.random(); // 0 到 1 的随机高度
                        const treePos = getConeVolumePosition(h, CONFIG.radius);
        
                        // Explode Position (Target) - 修改为球体分布
                        const explodePos = getExplodeSpherePosition(35);
        
                        // Initial Pos
                        mesh.position.copy(treePos);
                        
                        scene.add(mesh);
        
                        particles.push({
                            mesh: mesh,
                            treePos: treePos,
                            explodePos: explodePos,
                            velocity: new THREE.Vector3(),
                            wobbleOffset: Math.random() * 100
                        });
                    }
                }
        
                function createStar() {
                    // Simple Star on top
                    const geometry = new THREE.OctahedronGeometry(1.5, 0);
                    const material = new THREE.MeshStandardMaterial({
                        color: 0xFFFF00, // Bright Yellow
                        emissive: 0xFFD700,
                        emissiveIntensity: 1, // Reduced slightly as bloom is gone, but still bright
                        roughness: 0.2,
                        metalness: 0.8
                    });
                    const star = new THREE.Mesh(geometry, material);
                    star.position.set(0, CONFIG.height/2 + 2, 0);
                    
                    // Star is just a special particle
                    scene.add(star);
                    particles.push({
                        mesh: star,
                        treePos: new THREE.Vector3(0, CONFIG.height/2 + 2, 0),
                        explodePos: new THREE.Vector3(0, 10, 0),
                        wobbleOffset: 0
                    });
                }
        
                // --- Photo Upload Logic ---
                window.handlePhotoUpload = function(event) {
                    const files = event.target.files;
                    if (!files.length) return;
        
                    Array.from(files).forEach((file, index) => {
                        const reader = new FileReader();
                        reader.onload = function(e) {
                            const img = new Image();
                            img.src = e.target.result;
                            img.onload = () => {
                                createPhotoMesh(img);
                            }
                        };
                        reader.readAsDataURL(file);
                    });
                };
        
                function createPhotoMesh(image) {
                    const texture = new THREE.Texture(image);
                    texture.needsUpdate = true;
                    texture.colorSpace = THREE.SRGBColorSpace;
        
                    // Maintain aspect ratio
                    const aspect = image.width / image.height;
                    const w = 4;
                    const h = 4 / aspect;
        
                    const geometry = new THREE.PlaneGeometry(w, h);
                    // Use BasicMaterial for photos so they are always fully bright and not affected by shadows
                    const material = new THREE.MeshBasicMaterial({ 
                        map: texture, 
                        side: THREE.DoubleSide,
                        transparent: true,
                        opacity: 1.0 
                    });
        
                    const mesh = new THREE.Mesh(geometry, material);
                    
                    // Add a border (gold frame)
                    const frameGeo = new THREE.BoxGeometry(w + 0.2, h + 0.2, 0.1);
                    const frameMat = new THREE.MeshStandardMaterial({ 
                        color: CONFIG.colors.gold, 
                        metalness: 0.8, 
                        roughness: 0.2,
                        emissive: 0x332200
                    });
                    const frame = new THREE.Mesh(frameGeo, frameMat);
                    frame.position.z = -0.06;
                    mesh.add(frame);
        
                    // 修改位置计算逻辑：使用确定性的黄金螺旋算法
                    // 传入当前照片的总数作为 index，确保每张新照片都有唯一且均匀的位置
                    const index = photoMeshes.length;
                    const treePos = getPhotoSurfacePosition(index);
        
                    // Explode Position (Target) - 修改为球体分布
                    const explodePos = getExplodeSpherePosition(35);
        
                    mesh.position.copy(explodePos); // Start exploded if added later, or logic will fix it
                    scene.add(mesh);
        
                    photoMeshes.push({
                        mesh: mesh,
                        treePos: treePos,
                        explodePos: explodePos,
                        wobbleOffset: Math.random() * 100,
                        isPhoto: true
                    });
                    
                    // Add to main particles array for movement management
                    particles.push(photoMeshes[photoMeshes.length-1]);
                }
        
        
                // --- MediaPipe Logic ---
                async function setupMediaPipe() {
                    const video = document.getElementById('video-feed');
        
                    // Access Global Hands Class
                    const hands = new window.Hands({locateFile: (file) => {
                        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
                    }});
        
                    hands.setOptions({
                        maxNumHands: 1,
                        modelComplexity: 1,
                        minDetectionConfidence: 0.7,
                        minTrackingConfidence: 0.6
                    });
        
                    hands.onResults(onHandsResults);
        
                    // Access Webcam
                    try {
                        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                        video.srcObject = stream;
                        await video.play();
        
                        // Start processing loop specific to MediaPipe
                        async function detectionLoop() {
                            if (video.currentTime > 0 && !video.paused && !video.ended) {
                                await hands.send({image: video});
                            }
                            requestAnimationFrame(detectionLoop);
                        }
                        detectionLoop();
                    } catch (err) {
                        console.error("Camera access denied or failed", err);
                        document.getElementById('loading-text').innerText = "未检测到摄像头，请检查权限。应用将自动运行演示模式。";
                        setTimeout(() => {
                            document.getElementById('loading').style.display = 'none';
                            // Auto demo mode logic could go here
                        }, 2000);
                    }
                }
        
                function onHandsResults(results) {
                    const modeDisplay = document.getElementById('mode-display');
                    
                    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                        isHandDetected = true;
                        const landmarks = results.multiHandLandmarks[0];
        
                        // 1. Calculate Hand Center (for rotation)
                        // Wrist is 0, Middle Finger MCP is 9
                        const cx = landmarks[9].x;
                        const cy = landmarks[9].y;
                        handPos.x = (cx - 0.5) * 2; // -1 to 1
                        handPos.y = (cy - 0.5) * 2;
        
                        // 2. Gesture Recognition
                        const state = detectGesture(landmarks);
                        
                        if (state) {
                            targetState = state;
                            
                            // UI Update
                            let text = "未知";
                            let bg = "#333";
                            if (state === STATE.TREE) { text = "🌲 聚合形态"; bg = CONFIG.colors.green; }
                            if (state === STATE.EXPLODE) { text = "✨ 散开形态"; bg = "#444"; }
                            if (state === STATE.FOCUS) { text = "📷 聚焦照片"; bg = CONFIG.colors.red; }
                            
                            modeDisplay.innerText = text;
                            modeDisplay.style.borderColor = (state === STATE.FOCUS) ? '#fff' : CONFIG.colors.gold;
                        }
        
                    } else {
                        isHandDetected = false;
                        // Optional: Slowly drift back to tree if no hand? Or stay in last state.
                        // Keeping last state is better for UX.
                    }
                }
        
                function detectGesture(lm) {
                    // Helper to check if finger is open
                    const isFingerOpen = (tipIdx, pipIdx) => lm[tipIdx].y < lm[pipIdx].y; // Note: Y is inverted in some contexts, but MediaPipe y=0 is top. So tip < pip means finger up.
                    // Actually, MediaPipe coords: 0,0 is top-left.
                    // This assumes hand is upright. Let's use distance from wrist (0).
                    
                    const dist = (i, j) => Math.sqrt(Math.pow(lm[i].x - lm[j].x, 2) + Math.pow(lm[i].y - lm[j].y, 2));
                    
                    const wrist = 0;
                    const tips = [8, 12, 16, 20];
                    const pips = [6, 10, 14, 18];
                    
                    // Check Fingers Extended
                    let extendedCount = 0;
                    // Thumb is special, check x distance relative to wrist/index for "openness"
                    if (dist(4, 17) > 0.2) extendedCount++; // Rough thumb check
        
                    for (let k=0; k<4; k++) {
                        // If tip is further from wrist than PIP is from wrist
                        if (dist(wrist, tips[k]) > dist(wrist, pips[k]) * 1.2) {
                            extendedCount++;
                        }
                    }
        
                    // Pinch Detection (Thumb 4 and Index 8)
                    const pinchDist = dist(4, 8);
        
                    // LOGIC TREE
                    // 稍微放宽捏合的判定距离 (0.05 -> 0.08)，让操作更灵敏
                    if (pinchDist < 0.08) {
                        return STATE.FOCUS;
                    } else if (extendedCount >= 4) {
                        return STATE.EXPLODE;
                    } else if (extendedCount <= 1) {
                        return STATE.TREE;
                    }
                    
                    return null; // No change / Transition
                }
        
        
                // --- Animation Loop ---
                function animate() {
                    requestAnimationFrame(animate);
                    time += 0.01;
        
                    // 1. Smooth State Transition
                    if (currentState !== targetState) {
                        currentState = targetState;
                        
                        // If entering focus mode, pick a random photo to bring forward if any exist
                        if (currentState === STATE.FOCUS && photoMeshes.length > 0) {
                             // Reset all photos first
                             photoMeshes.forEach(p => p.focusOffset = null);
                             // Pick one
                             const luckyPhoto = photoMeshes[Math.floor(Math.random() * photoMeshes.length)];
                             luckyPhoto.focusOffset = true;
                        }
                    }
        
                    // 2. Camera Controls
                    // Default rotation
                    let camX = Math.sin(time * 0.2) * 50;
                    let camZ = Math.cos(time * 0.2) * 50;
                    let camY = 0;
        
                    // Hand Influence
                    if (currentState === STATE.EXPLODE && isHandDetected) {
                        // Map hand x (-1 to 1) to rotation angle
                        const angle = handPos.x * Math.PI; 
                        camX = Math.sin(angle) * 60;
                        camZ = Math.cos(angle) * 60;
                        camY = handPos.y * 30;
                    } else if (currentState === STATE.FOCUS) {
                        // Zoom in
                        camX *= 0.3;
                        camZ *= 0.3;
                    }
        
                    // Lerp Camera Position
                    camera.position.x += (camX - camera.position.x) * 0.05;
                    camera.position.y += (camY - camera.position.y) * 0.05;
                    camera.position.z += (camZ - camera.position.z) * 0.05;
                    camera.lookAt(0, 0, 0);
        
        
                    // 3. Particle Animation
                    particles.forEach(p => {
                        let target;
        
                        if (currentState === STATE.TREE) {
                            target = p.treePos;
                        } else if (currentState === STATE.EXPLODE) {
                            target = p.explodePos;
                        } else if (currentState === STATE.FOCUS) {
                            // In focus mode, keep background exploded but push back slightly
                            target = p.explodePos; 
                            
                            if (p.focusOffset) {
                                // This is the chosen photo
                                // 关键修改：动态计算目标位置，使其始终位于相机正前方
                                // 获取从原点指向相机的方向向量
                                const camDir = camera.position.clone().normalize();
                                // 将照片放置在距离原点 10 单位处（朝向相机方向）
                                // 这样无论相机转到哪里，照片都会在 View 的中心
                                const targetPos = camDir.multiplyScalar(10);
        
                                p.mesh.position.lerp(targetPos, 0.1);
                                
                                // FIX: 使用 copy(camera.quaternion) 确保照片绝对正对屏幕，不歪不倒
                                p.mesh.quaternion.copy(camera.quaternion);
                                return; // Skip standard update
                            }
                        }
        
                        // Add floating effect
                        const wobble = Math.sin(time * 2 + p.wobbleOffset) * 0.5;
                        const finalTarget = target.clone();
                        if (currentState !== STATE.TREE) {
                            finalTarget.y += wobble;
                        }
        
                        // Move mesh
                        p.mesh.position.lerp(finalTarget, 0.04);
                        
                        // Rotation
                        if (!p.isPhoto) {
                            p.mesh.rotation.x += 0.01;
                            p.mesh.rotation.y += 0.01;
                        } else if (currentState === STATE.TREE) {
                            // Photos in tree mode face out from center
                            // 树形状态下，让照片背面朝向中心，正面朝外，保持直立
                            p.mesh.lookAt(new THREE.Vector3(p.mesh.position.x * 2, p.mesh.position.y, p.mesh.position.z * 2));
                        } else {
                            // FIX: Photos in explode/focus mode
                            // 散开状态下，也强制让照片正对屏幕，防止出现倒置或歪斜
                            p.mesh.quaternion.copy(camera.quaternion);
                        }
                    });
        
                    // 普通渲染
                    renderer.render(scene, camera);
                }
        
                function onWindowResize() {
                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(window.innerWidth, window.innerHeight);
                }
        
                // Start
                init();
        
            </script>
        </body>
        </html>
        ```

        :::



@tab 未来计划：

- 上传的图片支持浏览器缓存 7 天；

    ::: details

    ```html
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        <title>Gesture Controlled Christmas Tree</title>
        <style>
            body {
                margin: 0;
                overflow: hidden;
                background-color: #111; /* 稍微提亮一点点背景，不是纯黑 */
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                color: #fff;
            }
    
            #canvas-container {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1;
            }
    
            /* UI Overlay */
            #ui-layer {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10;
                pointer-events: none; /* Let clicks pass through to canvas if needed */
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 20px;
                box-sizing: border-box;
            }
    
            .header {
                text-align: left;
                text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
            }
    
            h1 {
                margin: 0;
                font-weight: 300;
                color: #FFD700; /* Gold */
                letter-spacing: 2px;
                font-size: 24px;
            }
    
            p.subtitle {
                margin: 5px 0 0 0;
                color: #aaa;
                font-size: 14px;
            }
    
            /* Status & Instructions */
            .status-panel {
                position: absolute;
                top: 20px;
                right: 20px;
                text-align: right;
            }
    
            .status-tag {
                display: inline-block;
                padding: 8px 16px;
                background: rgba(20, 30, 20, 0.8);
                border: 1px solid #FFD700;
                border-radius: 20px;
                color: #FFD700;
                font-weight: bold;
                font-size: 14px;
                margin-bottom: 10px;
                transition: all 0.3s ease;
            }
    
            .instructions {
                background: rgba(0, 0, 0, 0.5);
                padding: 15px;
                border-radius: 8px;
                font-size: 12px;
                color: #ddd;
                max-width: 250px;
                pointer-events: auto;
                backdrop-filter: blur(5px);
                border-left: 3px solid #C41E3A; /* Red */
            }
    
            .instruction-item {
                display: flex;
                align-items: center;
                margin-bottom: 8px;
            }
            
            .icon { margin-right: 10px; font-size: 16px; width: 20px; text-align: center;}
    
            /* Upload Button */
            .upload-container {
                pointer-events: auto;
                margin-top: auto;
                align-self: center;
                margin-bottom: 20px;
                display: flex;
                gap: 10px;
            }
    
            .btn {
                border: none;
                padding: 12px 20px;
                color: white;
                border-radius: 30px;
                cursor: pointer;
                font-size: 14px;
                transition: transform 0.2s, background 0.2s;
                text-transform: uppercase;
                letter-spacing: 1px;
                pointer-events: auto;
                display: flex;
                align-items: center;
                justify-content: center;
            }
    
            .btn:hover {
                transform: scale(1.05);
            }
    
            #upload-btn {
                background: linear-gradient(135deg, #C41E3A 0%, #800000 100%);
                box-shadow: 0 0 15px rgba(196, 30, 58, 0.6);
            }
    
            #clear-btn {
                background: rgba(50, 50, 50, 0.8);
                border: 1px solid #666;
            }
            
            #clear-btn:hover {
                background: rgba(80, 80, 80, 0.9);
            }
    
            #file-input {
                display: none;
            }
    
            /* Webcam feedback (hidden but processed) */
            #video-feed {
                position: absolute;
                bottom: 20px;
                left: 20px;
                width: 160px;
                height: 120px;
                border-radius: 10px;
                transform: scaleX(-1); /* Mirror */
                border: 2px solid #FFD700;
                opacity: 0.7;
                z-index: 20;
                object-fit: cover;
                display: block; /* Required for MediaPipe */
            }
    
            /* Loading Screen */
            #loading {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #000;
                z-index: 100;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                color: #FFD700;
                transition: opacity 0.5s;
            }
    
            .loader {
                border: 4px solid #333;
                border-top: 4px solid #FFD700;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                animation: spin 1s linear infinite;
                margin-bottom: 15px;
            }
    
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    
        </style>
        <!-- MediaPipe Hands Global Script (Fix for Module Error) -->
        <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/hands.js" crossorigin="anonymous"></script>
    
        <!-- Import Maps for Three.js and Addons -->
        <script type="importmap">
            {
                "imports": {
                    "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
                    "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"
                }
            }
        </script>
    </head>
    <body>
    
        <!-- Loading Screen -->
        <div id="loading">
            <div class="loader"></div>
            <div id="loading-text">正在初始化视觉引擎与AI模型...</div>
        </div>
    
        <!-- Video Element for MediaPipe (Visible for user feedback) -->
        <video id="video-feed" playsinline></video>
    
        <!-- UI Layer -->
        <div id="ui-layer">
            <div class="header">
                <h1>CHRISTMAS GESTURE</h1>
                <p class="subtitle">MediaPipe & Three.js WebGL Experience</p>
            </div>
    
            <div class="status-panel">
                <div id="mode-display" class="status-tag">等待手势...</div>
                <div class="instructions">
                    <div class="instruction-item"><span class="icon">✊</span> 握拳：聚合 (TREE)</div>
                    <div class="instruction-item"><span class="icon">🖐</span> 张开：散开 (EXPLODE)</div>
                    <div class="instruction-item"><span class="icon">🤏</span> 捏合：特写 (FOCUS)</div>
                    <div class="instruction-item"><span class="icon">👋</span> 移动：旋转视角</div>
                </div>
            </div>
    
            <div class="upload-container">
                <button id="upload-btn" class="btn" onclick="document.getElementById('file-input').click()">上传照片 (+)</button>
                <button id="clear-btn" class="btn" onclick="clearCachedPhotos()">清除照片</button>
                <input type="file" id="file-input" accept="image/*" multiple onchange="handlePhotoUpload(event)">
            </div>
        </div>
    
        <!-- 3D Canvas -->
        <div id="canvas-container"></div>
    
        <!-- Main Logic -->
        <script type="module">
            import * as THREE from 'three';
    
            // --- Configuration & Constants ---
            const CONFIG = {
                colors: {
                    green: 0x228B22,   // Forest Green (Brighter)
                    gold: 0xFFD700,    // Metallic Gold
                    red: 0xFF0000,     // Bright Red
                    white: 0xFFFFFF
                },
                particles: 1500,       // 增加粒子数量到 1500，让树更茂密
                radius: 18,            // Base radius of tree bottom
                height: 35,            // Height of tree
                cacheKey: 'xmas_tree_photos_v1',
                cacheDuration: 7 * 24 * 60 * 60 * 1000 // 7 Days in ms
            };
    
            // --- Global Variables ---
            let scene, camera, renderer;
            let particles = []; // Array to store { mesh, treePos, explodePos, currentPos, speed }
            let photoMeshes = []; // Array specifically for user photos
            let time = 0;
            
            // Interaction State
            const STATE = {
                TREE: 'TREE',
                EXPLODE: 'EXPLODE',
                FOCUS: 'FOCUS'
            };
            let currentState = STATE.TREE;
            let targetState = STATE.TREE;
            
            // Hand Data
            let handPos = { x: 0, y: 0 }; // Normalized -1 to 1
            let isHandDetected = false;
    
            // --- Initialization ---
            async function init() {
                // 1. Scene Setup
                const container = document.getElementById('canvas-container');
                scene = new THREE.Scene();
                scene.background = new THREE.Color(0x111111); // Dark Gray instead of pure black
    
                camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
                camera.position.set(0, 0, 50);
    
                renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.outputColorSpace = THREE.SRGBColorSpace;
                container.appendChild(renderer.domElement);
    
                // 2. Lighting - 大幅增强光照
                // 2.1 强环境光，照亮所有阴影
                const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); 
                scene.add(ambientLight);
    
                // 2.2 主平行光（模拟阳光），提供清晰的明暗关系
                const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
                mainLight.position.set(10, 20, 20);
                scene.add(mainLight);
    
                // 2.3 补光灯（金色），增加华丽感
                const pointLight = new THREE.PointLight(CONFIG.colors.gold, 2, 100);
                pointLight.position.set(0, 20, 10);
                scene.add(pointLight);
                
                // 2.4 氛围灯（红绿），增加节日气氛，但调高亮度
                const redLight = new THREE.PointLight(CONFIG.colors.red, 2, 50);
                redLight.position.set(15, 10, 15);
                scene.add(redLight);
                
                const greenLight = new THREE.PointLight(CONFIG.colors.green, 2, 50);
                greenLight.position.set(-15, -10, 15);
                scene.add(greenLight);
    
                // 3. Post Processing Removed
    
                // 4. Content Generation
                createParticles();
                createStar();
                
                // 5. Load Cached Photos
                loadCachedPhotos();
    
                // 6. Setup MediaPipe
                await setupMediaPipe();
    
                // 7. Events
                window.addEventListener('resize', onWindowResize);
    
                // 8. Start Loop
                document.getElementById('loading').style.opacity = '0';
                setTimeout(() => document.getElementById('loading').style.display = 'none', 500);
                animate();
            }
    
            // --- Particle System Logic ---
    
            // 移除旧的螺旋线逻辑，改用体积计算
            function getConeVolumePosition(h, maxR) {
                // h is 0 (bottom) to 1 (top)
                
                // 当前高度的圆锥截面半径
                const rAtHeight = maxR * (1 - h);
                
                // 随机分布在圆截面内，但更倾向于外表面以保持树的形状
                // 使用 Math.pow 调整分布：指数越小越均匀，指数越大越集中在边缘
                const r = rAtHeight * Math.pow(Math.random(), 0.4); 
                
                const angle = Math.random() * Math.PI * 2;
                
                const x = r * Math.cos(angle);
                const z = r * Math.sin(angle);
                
                // 将高度映射到实际坐标 y
                const y = -CONFIG.height/2 + h * CONFIG.height;
                
                return new THREE.Vector3(x, y, z);
            }
    
            // 新增：专门用于散开形态的球体分布算法 (圆形)
            function getExplodeSpherePosition(maxRadius) {
                // 球坐标随机分布
                const u = Math.random();
                const v = Math.random();
                const theta = 2 * Math.PI * u;
                const phi = Math.acos(2 * v - 1);
                
                // 使用立方根确保在体积内均匀分布（不仅仅是表面，也不仅仅是核心）
                const r = maxRadius * Math.cbrt(Math.random()); 
                
                const x = r * Math.sin(phi) * Math.cos(theta);
                const y = r * Math.sin(phi) * Math.sin(theta);
                const z = r * Math.cos(phi);
                
                return new THREE.Vector3(x, y, z);
            }
    
            // 新增：专门用于照片的均匀分布算法 (基于黄金角度螺旋)
            // 这能确保无论上传多少张照片，它们都能均匀地分布在树的表面，不会扎堆
            function getPhotoSurfacePosition(index) {
                // 黄金分割比，用于打散高度和角度
                const goldenRatio = 0.61803398875;
                
                // 高度分布算法：
                // 使用 index * goldenRatio 取模，得到一个在 0-1 之间均匀跳跃的伪随机序列
                // 我们限制范围在 0.15 ~ 0.85 之间，避免照片出现在树尖太高或树底太低的位置
                const h = ((index * goldenRatio) % 0.7) + 0.15; 
                
                // 角度分布：黄金角度 (约 137.5 度)
                // 保证任意相邻或相近的照片在水平方向上都相隔甚远，360度无死角覆盖
                const angle = index * Math.PI * 2 * goldenRatio;
                
                // 半径计算：基于圆锥表面
                // CONFIG.radius 是底部半径
                const rBase = CONFIG.radius * (1 - h);
                const r = rBase + 2.5; // +2.5 让照片明显悬浮在树叶表面之外，作为装饰重点
                
                const x = r * Math.cos(angle);
                const z = r * Math.sin(angle);
                const y = -CONFIG.height/2 + h * CONFIG.height;
                
                return new THREE.Vector3(x, y, z);
            }
    
            function createParticles() {
                const geometrySphere = new THREE.SphereGeometry(0.4, 32, 32); 
                const geometryCube = new THREE.BoxGeometry(0.8, 0.8, 0.8); // 稍微加大方块，充当树叶
                const geometryTetra = new THREE.TetrahedronGeometry(0.6); // 增加四面体作为另一种树叶
                
                // Materials - 更亮、更鲜艳的材质设置
                const matGold = new THREE.MeshStandardMaterial({ 
                    color: CONFIG.colors.gold, 
                    roughness: 0.2, 
                    metalness: 0.6, 
                    emissive: 0x443300 
                });
                const matRed = new THREE.MeshStandardMaterial({ 
                    color: CONFIG.colors.red, 
                    roughness: 0.3, 
                    metalness: 0.3, 
                    emissive: 0x330000
                });
                const matGreen = new THREE.MeshStandardMaterial({ 
                    color: CONFIG.colors.green, 
                    roughness: 0.8, // 哑光，像叶子
                    metalness: 0.0 
                });
    
                for (let i = 0; i < CONFIG.particles; i++) {
                    let mesh;
                    const type = Math.random();
                    
                    // 调整比例：80% 是绿色枝叶，20% 是装饰品
                    if (type < 0.6) {
                        // Green filler (Box - 树叶)
                        mesh = new THREE.Mesh(geometryCube, matGreen);
                        mesh.rotation.set(Math.random(), Math.random(), Math.random());
                    } else if (type < 0.8) {
                         // Green filler 2 (Tetrahedron - 针叶质感)
                        mesh = new THREE.Mesh(geometryTetra, matGreen);
                        mesh.rotation.set(Math.random(), Math.random(), Math.random());
                    } else if (type < 0.9) {
                        // Gold ornaments (Sphere)
                        mesh = new THREE.Mesh(geometrySphere, matGold);
                        mesh.scale.setScalar(1.5);
                    } else {
                        // Red ornaments (Sphere)
                        mesh = new THREE.Mesh(geometrySphere, matRed);
                        mesh.scale.setScalar(1.2);
                    }
    
                    // Tree Position (Target) - 使用新的体积填充算法
                    const h = Math.random(); // 0 到 1 的随机高度
                    const treePos = getConeVolumePosition(h, CONFIG.radius);
    
                    // Explode Position (Target) - 修改为球体分布
                    const explodePos = getExplodeSpherePosition(35);
    
                    // Initial Pos
                    mesh.position.copy(treePos);
                    
                    scene.add(mesh);
    
                    particles.push({
                        mesh: mesh,
                        treePos: treePos,
                        explodePos: explodePos,
                        velocity: new THREE.Vector3(),
                        wobbleOffset: Math.random() * 100
                    });
                }
            }
    
            function createStar() {
                // Simple Star on top
                const geometry = new THREE.OctahedronGeometry(1.5, 0);
                const material = new THREE.MeshStandardMaterial({
                    color: 0xFFFF00, // Bright Yellow
                    emissive: 0xFFD700,
                    emissiveIntensity: 1, // Reduced slightly as bloom is gone, but still bright
                    roughness: 0.2,
                    metalness: 0.8
                });
                const star = new THREE.Mesh(geometry, material);
                star.position.set(0, CONFIG.height/2 + 2, 0);
                
                // Star is just a special particle
                scene.add(star);
                particles.push({
                    mesh: star,
                    treePos: new THREE.Vector3(0, CONFIG.height/2 + 2, 0),
                    explodePos: new THREE.Vector3(0, 10, 0),
                    wobbleOffset: 0
                });
            }
    
            // --- Photo Upload & Cache Logic ---
    
            // 清除现有的照片（从场景和内存中）
            window.clearCachedPhotos = function() {
                // 1. Remove from scene and memory
                // We iterate backwards to remove safely
                for (let i = particles.length - 1; i >= 0; i--) {
                    if (particles[i].isPhoto) {
                        scene.remove(particles[i].mesh);
                        if (particles[i].mesh.material.map) {
                            particles[i].mesh.material.map.dispose();
                        }
                        particles[i].mesh.material.dispose();
                        particles[i].mesh.geometry.dispose();
                        particles.splice(i, 1);
                    }
                }
                photoMeshes = [];
    
                // 2. Clear LocalStorage
                try {
                    localStorage.removeItem(CONFIG.cacheKey);
                    console.log("Cache cleared");
                } catch (e) {
                    console.error("Failed to clear cache", e);
                }
            };
    
            // 处理用户上传
            window.handlePhotoUpload = async function(event) {
                const files = event.target.files;
                if (!files.length) return;
    
                // 覆盖模式：上传新照片前清除旧的
                window.clearCachedPhotos();
    
                const imagePromises = Array.from(files).map(processFileToDataURL);
                
                try {
                    // 等待所有图片处理完成（压缩 + 转Base64）
                    const base64Images = await Promise.all(imagePromises);
                    
                    // 创建 Mesh
                    base64Images.forEach(imgData => {
                        const img = new Image();
                        img.src = imgData;
                        img.onload = () => createPhotoMesh(img);
                    });
    
                    // 保存到缓存
                    saveToCache(base64Images);
    
                } catch (err) {
                    console.error("Error processing images:", err);
                    alert("图片处理失败，请重试");
                }
    
                // 重置 input 以便允许重复上传相同文件
                event.target.value = '';
            };
    
            // 将文件读取并压缩为 Base64
            function processFileToDataURL(file) {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const img = new Image();
                        img.src = e.target.result;
                        img.onload = () => {
                            // 创建 Canvas 进行压缩
                            const canvas = document.createElement('canvas');
                            const ctx = canvas.getContext('2d');
                            
                            // 最大尺寸限制 (避免 localStorage 爆满)
                            const MAX_SIZE = 800; 
                            let width = img.width;
                            let height = img.height;
    
                            if (width > height) {
                                if (width > MAX_SIZE) {
                                    height *= MAX_SIZE / width;
                                    width = MAX_SIZE;
                                }
                            } else {
                                if (height > MAX_SIZE) {
                                    width *= MAX_SIZE / height;
                                    height = MAX_SIZE;
                                }
                            }
    
                            canvas.width = width;
                            canvas.height = height;
                            ctx.drawImage(img, 0, 0, width, height);
    
                            // 转换为 JPEG Base64 (0.8 质量)
                            const dataURL = canvas.toDataURL('image/jpeg', 0.8);
                            resolve(dataURL);
                        };
                        img.onerror = reject;
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                });
            }
    
            // 保存到 LocalStorage
            function saveToCache(imagesData) {
                const cacheData = {
                    timestamp: Date.now(),
                    images: imagesData
                };
                try {
                    localStorage.setItem(CONFIG.cacheKey, JSON.stringify(cacheData));
                } catch (e) {
                    console.warn("Storage quota exceeded or error", e);
                    alert("照片过多或过大，部分缓存可能失败");
                }
            }
    
            // 加载缓存
            function loadCachedPhotos() {
                try {
                    const raw = localStorage.getItem(CONFIG.cacheKey);
                    if (!raw) return;
    
                    const cache = JSON.parse(raw);
                    const now = Date.now();
    
                    // 检查有效期 (7天)
                    if (now - cache.timestamp > CONFIG.cacheDuration) {
                        console.log("Cache expired, clearing...");
                        localStorage.removeItem(CONFIG.cacheKey);
                        return;
                    }
    
                    if (cache.images && Array.isArray(cache.images)) {
                        console.log(`Loading ${cache.images.length} photos from cache...`);
                        cache.images.forEach(imgData => {
                            const img = new Image();
                            img.src = imgData;
                            img.onload = () => createPhotoMesh(img);
                        });
                    }
                } catch (e) {
                    console.error("Failed to load cache", e);
                }
            }
    
            function createPhotoMesh(image) {
                const texture = new THREE.Texture(image);
                texture.needsUpdate = true;
                texture.colorSpace = THREE.SRGBColorSpace;
    
                // Maintain aspect ratio
                const aspect = image.width / image.height;
                const w = 4;
                const h = 4 / aspect;
    
                const geometry = new THREE.PlaneGeometry(w, h);
                // Use BasicMaterial for photos so they are always fully bright and not affected by shadows
                const material = new THREE.MeshBasicMaterial({ 
                    map: texture, 
                    side: THREE.DoubleSide,
                    transparent: true,
                    opacity: 1.0 
                });
    
                const mesh = new THREE.Mesh(geometry, material);
                
                // Add a border (gold frame)
                const frameGeo = new THREE.BoxGeometry(w + 0.2, h + 0.2, 0.1);
                const frameMat = new THREE.MeshStandardMaterial({ 
                    color: CONFIG.colors.gold, 
                    metalness: 0.8, 
                    roughness: 0.2,
                    emissive: 0x332200
                });
                const frame = new THREE.Mesh(frameGeo, frameMat);
                frame.position.z = -0.06;
                mesh.add(frame);
    
                // 修改位置计算逻辑：使用确定性的黄金螺旋算法
                // 传入当前照片的总数作为 index，确保每张新照片都有唯一且均匀的位置
                const index = photoMeshes.length;
                const treePos = getPhotoSurfacePosition(index);
    
                // Explode Position (Target) - 修改为球体分布
                const explodePos = getExplodeSpherePosition(35);
    
                mesh.position.copy(explodePos); // Start exploded if added later, or logic will fix it
                scene.add(mesh);
    
                photoMeshes.push({
                    mesh: mesh,
                    treePos: treePos,
                    explodePos: explodePos,
                    wobbleOffset: Math.random() * 100,
                    isPhoto: true
                });
                
                // Add to main particles array for movement management
                particles.push(photoMeshes[photoMeshes.length-1]);
            }
    
    
            // --- MediaPipe Logic ---
            async function setupMediaPipe() {
                const video = document.getElementById('video-feed');
    
                // Access Global Hands Class
                const hands = new window.Hands({locateFile: (file) => {
                    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
                }});
    
                hands.setOptions({
                    maxNumHands: 1,
                    modelComplexity: 1,
                    minDetectionConfidence: 0.7,
                    minTrackingConfidence: 0.6
                });
    
                hands.onResults(onHandsResults);
    
                // Access Webcam
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                    video.srcObject = stream;
                    await video.play();
    
                    // Start processing loop specific to MediaPipe
                    async function detectionLoop() {
                        if (video.currentTime > 0 && !video.paused && !video.ended) {
                            await hands.send({image: video});
                        }
                        requestAnimationFrame(detectionLoop);
                    }
                    detectionLoop();
                } catch (err) {
                    console.error("Camera access denied or failed", err);
                    document.getElementById('loading-text').innerText = "未检测到摄像头，请检查权限。应用将自动运行演示模式。";
                    setTimeout(() => {
                        document.getElementById('loading').style.display = 'none';
                        // Auto demo mode logic could go here
                    }, 2000);
                }
            }
    
            function onHandsResults(results) {
                const modeDisplay = document.getElementById('mode-display');
                
                if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                    isHandDetected = true;
                    const landmarks = results.multiHandLandmarks[0];
    
                    // 1. Calculate Hand Center (for rotation)
                    // Wrist is 0, Middle Finger MCP is 9
                    const cx = landmarks[9].x;
                    const cy = landmarks[9].y;
                    handPos.x = (cx - 0.5) * 2; // -1 to 1
                    handPos.y = (cy - 0.5) * 2;
    
                    // 2. Gesture Recognition
                    const state = detectGesture(landmarks);
                    
                    if (state) {
                        targetState = state;
                        
                        // UI Update
                        let text = "未知";
                        let bg = "#333";
                        if (state === STATE.TREE) { text = "🌲 聚合形态"; bg = CONFIG.colors.green; }
                        if (state === STATE.EXPLODE) { text = "✨ 散开形态"; bg = "#444"; }
                        if (state === STATE.FOCUS) { text = "📷 聚焦照片"; bg = CONFIG.colors.red; }
                        
                        modeDisplay.innerText = text;
                        modeDisplay.style.borderColor = (state === STATE.FOCUS) ? '#fff' : CONFIG.colors.gold;
                    }
    
                } else {
                    isHandDetected = false;
                    // Optional: Slowly drift back to tree if no hand? Or stay in last state.
                    // Keeping last state is better for UX.
                }
            }
    
            function detectGesture(lm) {
                // Helper to check if finger is open
                const isFingerOpen = (tipIdx, pipIdx) => lm[tipIdx].y < lm[pipIdx].y; // Note: Y is inverted in some contexts, but MediaPipe y=0 is top. So tip < pip means finger up.
                // Actually, MediaPipe coords: 0,0 is top-left.
                // This assumes hand is upright. Let's use distance from wrist (0).
                
                const dist = (i, j) => Math.sqrt(Math.pow(lm[i].x - lm[j].x, 2) + Math.pow(lm[i].y - lm[j].y, 2));
                
                const wrist = 0;
                const tips = [8, 12, 16, 20];
                const pips = [6, 10, 14, 18];
                
                // Check Fingers Extended
                let extendedCount = 0;
                // Thumb is special, check x distance relative to wrist/index for "openness"
                if (dist(4, 17) > 0.2) extendedCount++; // Rough thumb check
    
                for (let k=0; k<4; k++) {
                    // If tip is further from wrist than PIP is from wrist
                    if (dist(wrist, tips[k]) > dist(wrist, pips[k]) * 1.2) {
                        extendedCount++;
                    }
                }
    
                // Pinch Detection (Thumb 4 and Index 8)
                const pinchDist = dist(4, 8);
    
                // LOGIC TREE
                // 稍微放宽捏合的判定距离 (0.05 -> 0.08)，让操作更灵敏
                if (pinchDist < 0.08) {
                    return STATE.FOCUS;
                } else if (extendedCount >= 4) {
                    return STATE.EXPLODE;
                } else if (extendedCount <= 1) {
                    return STATE.TREE;
                }
                
                return null; // No change / Transition
            }
    
    
            // --- Animation Loop ---
            function animate() {
                requestAnimationFrame(animate);
                time += 0.01;
    
                // 1. Smooth State Transition
                if (currentState !== targetState) {
                    currentState = targetState;
                    
                    // If entering focus mode, pick a random photo to bring forward if any exist
                    if (currentState === STATE.FOCUS && photoMeshes.length > 0) {
                         // Reset all photos first
                         photoMeshes.forEach(p => p.focusOffset = null);
                         // Pick one
                         const luckyPhoto = photoMeshes[Math.floor(Math.random() * photoMeshes.length)];
                         luckyPhoto.focusOffset = true;
                    }
                }
    
                // 2. Camera Controls
                // Default rotation
                let camX = Math.sin(time * 0.2) * 50;
                let camZ = Math.cos(time * 0.2) * 50;
                let camY = 0;
    
                // Hand Influence
                if (currentState === STATE.EXPLODE && isHandDetected) {
                    // Map hand x (-1 to 1) to rotation angle
                    const angle = handPos.x * Math.PI; 
                    camX = Math.sin(angle) * 60;
                    camZ = Math.cos(angle) * 60;
                    camY = handPos.y * 30;
                } else if (currentState === STATE.FOCUS) {
                    // Zoom in
                    camX *= 0.3;
                    camZ *= 0.3;
                }
    
                // Lerp Camera Position
                camera.position.x += (camX - camera.position.x) * 0.05;
                camera.position.y += (camY - camera.position.y) * 0.05;
                camera.position.z += (camZ - camera.position.z) * 0.05;
                camera.lookAt(0, 0, 0);
    
    
                // 3. Particle Animation
                particles.forEach(p => {
                    let target;
    
                    if (currentState === STATE.TREE) {
                        target = p.treePos;
                    } else if (currentState === STATE.EXPLODE) {
                        target = p.explodePos;
                    } else if (currentState === STATE.FOCUS) {
                        // In focus mode, keep background exploded but push back slightly
                        target = p.explodePos; 
                        
                        if (p.focusOffset) {
                            // This is the chosen photo
                            // 关键修改：动态计算目标位置，使其始终位于相机正前方
                            // 获取从原点指向相机的方向向量
                            const camDir = camera.position.clone().normalize();
                            // 将照片放置在距离原点 10 单位处（朝向相机方向）
                            // 这样无论相机转到哪里，照片都会在 View 的中心
                            const targetPos = camDir.multiplyScalar(10);
    
                            p.mesh.position.lerp(targetPos, 0.1);
                            
                            // FIX: 使用 copy(camera.quaternion) 确保照片绝对正对屏幕，不歪不倒
                            p.mesh.quaternion.copy(camera.quaternion);
                            return; // Skip standard update
                        }
                    }
    
                    // Add floating effect
                    const wobble = Math.sin(time * 2 + p.wobbleOffset) * 0.5;
                    const finalTarget = target.clone();
                    if (currentState !== STATE.TREE) {
                        finalTarget.y += wobble;
                    }
    
                    // Move mesh
                    p.mesh.position.lerp(finalTarget, 0.04);
                    
                    // Rotation
                    if (!p.isPhoto) {
                        p.mesh.rotation.x += 0.01;
                        p.mesh.rotation.y += 0.01;
                    } else if (currentState === STATE.TREE) {
                        // Photos in tree mode face out from center
                        // 树形状态下，让照片背面朝向中心，正面朝外，保持直立
                        p.mesh.lookAt(new THREE.Vector3(p.mesh.position.x * 2, p.mesh.position.y, p.mesh.position.z * 2));
                    } else {
                        // FIX: Photos in explode/focus mode
                        // 散开状态下，也强制让照片正对屏幕，防止出现倒置或歪斜
                        p.mesh.quaternion.copy(camera.quaternion);
                    }
                });
    
                // 普通渲染
                renderer.render(scene, camera);
            }
    
            function onWindowResize() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            }
    
            // Start
            init();
    
        </script>
    </body>
    </html>
    ```

    :::

- 支持是否开启背景音乐；

    ::: details

    ```html
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        <title>Gesture Controlled Christmas Tree</title>
        <style>
            body {
                margin: 0;
                overflow: hidden;
                background-color: #111; /* 稍微提亮一点点背景，不是纯黑 */
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                color: #fff;
            }
    
            #canvas-container {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1;
            }
    
            /* UI Overlay */
            #ui-layer {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10;
                pointer-events: none; /* Let clicks pass through to canvas if needed */
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 20px;
                box-sizing: border-box;
            }
    
            .header {
                text-align: left;
                text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
            }
    
            h1 {
                margin: 0;
                font-weight: 300;
                color: #FFD700; /* Gold */
                letter-spacing: 2px;
                font-size: 24px;
            }
    
            p.subtitle {
                margin: 5px 0 0 0;
                color: #aaa;
                font-size: 14px;
            }
    
            /* Status & Instructions & Buttons Container */
            .status-panel {
                position: absolute;
                top: 20px;
                right: 20px;
                text-align: right;
                display: flex;
                flex-direction: column;
                align-items: flex-end; /* Right align everything */
                gap: 12px;
            }
    
            .status-tag {
                display: inline-block;
                padding: 8px 16px;
                background: rgba(20, 30, 20, 0.8);
                border: 1px solid #FFD700;
                border-radius: 20px;
                color: #FFD700;
                font-weight: bold;
                font-size: 14px;
                transition: all 0.3s ease;
                box-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
            }
    
            .instructions {
                background: rgba(0, 0, 0, 0.6);
                padding: 15px;
                border-radius: 8px; /* Slightly squarer for tech feel */
                font-size: 12px;
                color: #ddd;
                width: 200px; /* Fixed width for alignment */
                pointer-events: auto;
                backdrop-filter: blur(10px);
                border-left: 2px solid #C41E3A; /* Red accent */
                border-right: 1px solid rgba(255, 255, 255, 0.1);
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }
    
            .instruction-item {
                display: flex;
                align-items: center;
                margin-bottom: 8px;
                justify-content: space-between; /* Space out icon and text */
            }
            
            .icon { font-size: 16px; width: 20px; text-align: center;}
    
            /* Upload Buttons - New Elegant Style */
            .upload-container {
                pointer-events: auto;
                display: flex;
                flex-direction: column;
                gap: 8px;
                align-items: flex-end;
                margin-top: 5px;
            }
    
            .btn {
                background: rgba(0, 0, 0, 0.5);
                border: 1px solid rgba(255, 215, 0, 0.5); /* Subtle Gold Border */
                color: #FFD700;
                padding: 8px 20px;
                border-radius: 4px; /* Minimalist radius */
                cursor: pointer;
                font-size: 12px;
                transition: all 0.3s ease;
                text-transform: uppercase;
                letter-spacing: 1px;
                backdrop-filter: blur(5px);
                width: 100%; /* Match width */
                text-align: center;
                box-shadow: 0 2px 5px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
            }
    
            .btn:hover {
                background: rgba(255, 215, 0, 0.15);
                border-color: #FFD700;
                box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
                transform: translateX(-5px); /* Subtle slide left */
            }
    
            .btn.active {
                background: rgba(255, 215, 0, 0.2);
                box-shadow: 0 0 10px rgba(255, 215, 0, 0.4);
                border-color: #FFD700;
            }
    
            /* Differentiate clear button slightly */
            #clear-btn {
                border-color: rgba(255, 255, 255, 0.3);
                color: #aaa;
            }
            
            #clear-btn:hover {
                border-color: #fff;
                color: #fff;
                background: rgba(255, 255, 255, 0.1);
                box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
            }
    
            #file-input {
                display: none;
            }
    
            /* Webcam feedback (hidden but processed) */
            #video-feed {
                position: absolute;
                bottom: 20px;
                left: 20px;
                width: 160px;
                height: 120px;
                border-radius: 10px;
                transform: scaleX(-1); /* Mirror */
                border: 2px solid #FFD700;
                opacity: 0.7;
                z-index: 20;
                object-fit: cover;
                display: block; /* Required for MediaPipe */
            }
    
            /* Loading Screen */
            #loading {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #000;
                z-index: 100;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                color: #FFD700;
                transition: opacity 0.5s;
            }
    
            .loader {
                border: 4px solid #333;
                border-top: 4px solid #FFD700;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                animation: spin 1s linear infinite;
                margin-bottom: 15px;
            }
    
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    
        </style>
        <!-- MediaPipe Hands Global Script (Fix for Module Error) -->
        <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/hands.js" crossorigin="anonymous"></script>
    
        <!-- Import Maps for Three.js and Addons -->
        <script type="importmap">
            {
                "imports": {
                    "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
                    "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"
                }
            }
        </script>
    </head>
    <body>
    
        <!-- Audio Element -->
        <audio id="bg-music" loop>
            <source src="https://cdn.bornforthis.cn/mp3/LastChristmas(Single%20Version).m4a" type="audio/mp4">
            您的浏览器不支持音频元素。
        </audio>
    
        <!-- Loading Screen -->
        <div id="loading">
            <div class="loader"></div>
            <div id="loading-text">正在初始化视觉引擎与AI模型...</div>
        </div>
    
        <!-- Video Element for MediaPipe (Visible for user feedback) -->
        <video id="video-feed" playsinline></video>
    
        <!-- UI Layer -->
        <div id="ui-layer">
            <div class="header">
                <h1>CHRISTMAS GESTURE</h1>
                <p class="subtitle">MediaPipe & Three.js WebGL Experience</p>
            </div>
    
            <div class="status-panel">
                <div id="mode-display" class="status-tag">等待手势...</div>
                
                <div class="instructions">
                    <div class="instruction-item"><span>✊ 握拳</span> <span>聚合形态</span></div>
                    <div class="instruction-item"><span>🖐 张开</span> <span>散开形态</span></div>
                    <div class="instruction-item"><span>🤏 捏合</span> <span>特写照片</span></div>
                    <div class="instruction-item"><span>👋 移动</span> <span>旋转视角</span></div>
                </div>
    
                <div class="upload-container">
                    <button id="upload-btn" class="btn" onclick="document.getElementById('file-input').click()">
                        <span>📷</span> 上传照片
                    </button>
                    <button id="music-btn" class="btn" onclick="toggleMusic()">
                        <span>🔇</span> 音乐: 关
                    </button>
                    <button id="clear-btn" class="btn" onclick="clearCachedPhotos()">
                        <span>🗑️</span> 清除照片
                    </button>
                    <input type="file" id="file-input" accept="image/*" multiple onchange="handlePhotoUpload(event)">
                </div>
            </div>
        </div>
    
        <!-- 3D Canvas -->
        <div id="canvas-container"></div>
    
        <!-- Main Logic -->
        <script type="module">
            import * as THREE from 'three';
    
            // --- Configuration & Constants ---
            const CONFIG = {
                colors: {
                    green: 0x228B22,   // Forest Green (Brighter)
                    gold: 0xFFD700,    // Metallic Gold
                    red: 0xFF0000,     // Bright Red
                    white: 0xFFFFFF
                },
                particles: 1500,       // 增加粒子数量到 1500，让树更茂密
                radius: 18,            // Base radius of tree bottom
                height: 35,            // Height of tree
                cacheKey: 'xmas_tree_photos_v1',
                cacheDuration: 7 * 24 * 60 * 60 * 1000, // 7 Days in ms
                musicCacheKey: 'xmas_music_pref_v1' // 新增音乐缓存Key
            };
    
            // --- Global Variables ---
            let scene, camera, renderer;
            let particles = []; // Array to store { mesh, treePos, explodePos, currentPos, speed }
            let photoMeshes = []; // Array specifically for user photos
            let time = 0;
            
            // Interaction State
            const STATE = {
                TREE: 'TREE',
                EXPLODE: 'EXPLODE',
                FOCUS: 'FOCUS'
            };
            let currentState = STATE.TREE;
            let targetState = STATE.TREE;
            
            // Hand Data
            let handPos = { x: 0, y: 0 }; // Normalized -1 to 1
            let isHandDetected = false;
    
            // Music State
            let isMusicPlaying = false;
    
            // --- Initialization ---
            async function init() {
                // 1. Scene Setup
                const container = document.getElementById('canvas-container');
                scene = new THREE.Scene();
                scene.background = new THREE.Color(0x111111); // Dark Gray instead of pure black
    
                camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
                camera.position.set(0, 0, 50);
    
                renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.outputColorSpace = THREE.SRGBColorSpace;
                container.appendChild(renderer.domElement);
    
                // 2. Lighting - 大幅增强光照
                // 2.1 强环境光，照亮所有阴影
                const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); 
                scene.add(ambientLight);
    
                // 2.2 主平行光（模拟阳光），提供清晰的明暗关系
                const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
                mainLight.position.set(10, 20, 20);
                scene.add(mainLight);
    
                // 2.3 补光灯（金色），增加华丽感
                const pointLight = new THREE.PointLight(CONFIG.colors.gold, 2, 100);
                pointLight.position.set(0, 20, 10);
                scene.add(pointLight);
                
                // 2.4 氛围灯（红绿），增加节日气氛，但调高亮度
                const redLight = new THREE.PointLight(CONFIG.colors.red, 2, 50);
                redLight.position.set(15, 10, 15);
                scene.add(redLight);
                
                const greenLight = new THREE.PointLight(CONFIG.colors.green, 2, 50);
                greenLight.position.set(-15, -10, 15);
                scene.add(greenLight);
    
                // 3. Post Processing Removed
    
                // 4. Content Generation
                createParticles();
                createStar();
                
                // 5. Load Cached Photos & Music Preference
                loadCachedPhotos();
                initAudio();
    
                // 6. Setup MediaPipe
                await setupMediaPipe();
    
                // 7. Events
                window.addEventListener('resize', onWindowResize);
    
                // 8. Start Loop
                document.getElementById('loading').style.opacity = '0';
                setTimeout(() => document.getElementById('loading').style.display = 'none', 500);
                animate();
            }
    
            // --- Audio Logic ---
            function initAudio() {
                // 默认不播放，但检查缓存
                const musicBtn = document.getElementById('music-btn');
                
                try {
                    const raw = localStorage.getItem(CONFIG.musicCacheKey);
                    if (raw) {
                        const cache = JSON.parse(raw);
                        const now = Date.now();
                        // 检查 7 天有效期
                        if (now - cache.timestamp <= CONFIG.cacheDuration) {
                            if (cache.enabled) {
                                // 用户之前开启了音乐
                                isMusicPlaying = true;
                                updateMusicUI(true);
                                // 尝试播放（可能被浏览器阻止，需要交互）
                                const audio = document.getElementById('bg-music');
                                const playPromise = audio.play();
                                
                                if (playPromise !== undefined) {
                                    playPromise.catch(error => {
                                        console.log("Auto-play blocked by browser. Waiting for interaction.");
                                        // 添加一次性点击监听来启动音乐
                                        const startAudio = () => {
                                            audio.play();
                                            document.removeEventListener('click', startAudio);
                                        };
                                        document.addEventListener('click', startAudio);
                                    });
                                }
                            }
                        }
                    }
                } catch (e) {
                    console.error("Error loading music preference", e);
                }
            }
    
            window.toggleMusic = function() {
                const audio = document.getElementById('bg-music');
                isMusicPlaying = !isMusicPlaying;
                
                if (isMusicPlaying) {
                    audio.play();
                } else {
                    audio.pause();
                }
                
                updateMusicUI(isMusicPlaying);
                saveMusicPreference(isMusicPlaying);
            };
    
            function updateMusicUI(isPlaying) {
                const btn = document.getElementById('music-btn');
                if (isPlaying) {
                    btn.innerHTML = '<span>🔊</span> 音乐: 开';
                    btn.classList.add('active');
                } else {
                    btn.innerHTML = '<span>🔇</span> 音乐: 关';
                    btn.classList.remove('active');
                }
            }
    
            function saveMusicPreference(isEnabled) {
                const data = {
                    timestamp: Date.now(),
                    enabled: isEnabled
                };
                try {
                    localStorage.setItem(CONFIG.musicCacheKey, JSON.stringify(data));
                } catch (e) {
                    console.error("Failed to save music preference", e);
                }
            }
    
            // --- Particle System Logic ---
    
            // 移除旧的螺旋线逻辑，改用体积计算
            function getConeVolumePosition(h, maxR) {
                // h is 0 (bottom) to 1 (top)
                
                // 当前高度的圆锥截面半径
                const rAtHeight = maxR * (1 - h);
                
                // 随机分布在圆截面内，但更倾向于外表面以保持树的形状
                // 使用 Math.pow 调整分布：指数越小越均匀，指数越大越集中在边缘
                const r = rAtHeight * Math.pow(Math.random(), 0.4); 
                
                const angle = Math.random() * Math.PI * 2;
                
                const x = r * Math.cos(angle);
                const z = r * Math.sin(angle);
                
                // 将高度映射到实际坐标 y
                const y = -CONFIG.height/2 + h * CONFIG.height;
                
                return new THREE.Vector3(x, y, z);
            }
    
            // 新增：专门用于散开形态的球体分布算法 (圆形)
            function getExplodeSpherePosition(maxRadius) {
                // 球坐标随机分布
                const u = Math.random();
                const v = Math.random();
                const theta = 2 * Math.PI * u;
                const phi = Math.acos(2 * v - 1);
                
                // 使用立方根确保在体积内均匀分布（不仅仅是表面，也不仅仅是核心）
                const r = maxRadius * Math.cbrt(Math.random()); 
                
                const x = r * Math.sin(phi) * Math.cos(theta);
                const y = r * Math.sin(phi) * Math.sin(theta);
                const z = r * Math.cos(phi);
                
                return new THREE.Vector3(x, y, z);
            }
    
            // 新增：专门用于照片的均匀分布算法 (基于黄金角度螺旋)
            // 这能确保无论上传多少张照片，它们都能均匀地分布在树的表面，不会扎堆
            function getPhotoSurfacePosition(index) {
                // 黄金分割比，用于打散高度和角度
                const goldenRatio = 0.61803398875;
                
                // 高度分布算法：
                // 使用 index * goldenRatio 取模，得到一个在 0-1 之间均匀跳跃的伪随机序列
                // 我们限制范围在 0.15 ~ 0.85 之间，避免照片出现在树尖太高或树底太低的位置
                const h = ((index * goldenRatio) % 0.7) + 0.15; 
                
                // 角度分布：黄金角度 (约 137.5 度)
                // 保证任意相邻或相近的照片在水平方向上都相隔甚远，360度无死角覆盖
                const angle = index * Math.PI * 2 * goldenRatio;
                
                // 半径计算：基于圆锥表面
                // CONFIG.radius 是底部半径
                const rBase = CONFIG.radius * (1 - h);
                const r = rBase + 2.5; // +2.5 让照片明显悬浮在树叶表面之外，作为装饰重点
                
                const x = r * Math.cos(angle);
                const z = r * Math.sin(angle);
                const y = -CONFIG.height/2 + h * CONFIG.height;
                
                return new THREE.Vector3(x, y, z);
            }
    
            function createParticles() {
                const geometrySphere = new THREE.SphereGeometry(0.4, 32, 32); 
                const geometryCube = new THREE.BoxGeometry(0.8, 0.8, 0.8); // 稍微加大方块，充当树叶
                const geometryTetra = new THREE.TetrahedronGeometry(0.6); // 增加四面体作为另一种树叶
                
                // Materials - 更亮、更鲜艳的材质设置
                const matGold = new THREE.MeshStandardMaterial({ 
                    color: CONFIG.colors.gold, 
                    roughness: 0.2, 
                    metalness: 0.6, 
                    emissive: 0x443300 
                });
                const matRed = new THREE.MeshStandardMaterial({ 
                    color: CONFIG.colors.red, 
                    roughness: 0.3, 
                    metalness: 0.3, 
                    emissive: 0x330000
                });
                const matGreen = new THREE.MeshStandardMaterial({ 
                    color: CONFIG.colors.green, 
                    roughness: 0.8, // 哑光，像叶子
                    metalness: 0.0 
                });
    
                for (let i = 0; i < CONFIG.particles; i++) {
                    let mesh;
                    const type = Math.random();
                    
                    // 调整比例：80% 是绿色枝叶，20% 是装饰品
                    if (type < 0.6) {
                        // Green filler (Box - 树叶)
                        mesh = new THREE.Mesh(geometryCube, matGreen);
                        mesh.rotation.set(Math.random(), Math.random(), Math.random());
                    } else if (type < 0.8) {
                         // Green filler 2 (Tetrahedron - 针叶质感)
                        mesh = new THREE.Mesh(geometryTetra, matGreen);
                        mesh.rotation.set(Math.random(), Math.random(), Math.random());
                    } else if (type < 0.9) {
                        // Gold ornaments (Sphere)
                        mesh = new THREE.Mesh(geometrySphere, matGold);
                        mesh.scale.setScalar(1.5);
                    } else {
                        // Red ornaments (Sphere)
                        mesh = new THREE.Mesh(geometrySphere, matRed);
                        mesh.scale.setScalar(1.2);
                    }
    
                    // Tree Position (Target) - 使用新的体积填充算法
                    const h = Math.random(); // 0 到 1 的随机高度
                    const treePos = getConeVolumePosition(h, CONFIG.radius);
    
                    // Explode Position (Target) - 修改为球体分布
                    const explodePos = getExplodeSpherePosition(35);
    
                    // Initial Pos
                    mesh.position.copy(treePos);
                    
                    scene.add(mesh);
    
                    particles.push({
                        mesh: mesh,
                        treePos: treePos,
                        explodePos: explodePos,
                        velocity: new THREE.Vector3(),
                        wobbleOffset: Math.random() * 100
                    });
                }
            }
    
            function createStar() {
                // Simple Star on top
                const geometry = new THREE.OctahedronGeometry(1.5, 0);
                const material = new THREE.MeshStandardMaterial({
                    color: 0xFFFF00, // Bright Yellow
                    emissive: 0xFFD700,
                    emissiveIntensity: 1, // Reduced slightly as bloom is gone, but still bright
                    roughness: 0.2,
                    metalness: 0.8
                });
                const star = new THREE.Mesh(geometry, material);
                star.position.set(0, CONFIG.height/2 + 2, 0);
                
                // Star is just a special particle
                scene.add(star);
                particles.push({
                    mesh: star,
                    treePos: new THREE.Vector3(0, CONFIG.height/2 + 2, 0),
                    explodePos: new THREE.Vector3(0, 10, 0),
                    wobbleOffset: 0
                });
            }
    
            // --- Photo Upload & Cache Logic ---
    
            // 清除现有的照片（从场景和内存中）
            window.clearCachedPhotos = function() {
                // 1. Remove from scene and memory
                // We iterate backwards to remove safely
                for (let i = particles.length - 1; i >= 0; i--) {
                    if (particles[i].isPhoto) {
                        scene.remove(particles[i].mesh);
                        if (particles[i].mesh.material.map) {
                            particles[i].mesh.material.map.dispose();
                        }
                        particles[i].mesh.material.dispose();
                        particles[i].mesh.geometry.dispose();
                        particles.splice(i, 1);
                    }
                }
                photoMeshes = [];
    
                // 2. Clear LocalStorage
                try {
                    localStorage.removeItem(CONFIG.cacheKey);
                    console.log("Cache cleared");
                } catch (e) {
                    console.error("Failed to clear cache", e);
                }
            };
    
            // 处理用户上传
            window.handlePhotoUpload = async function(event) {
                const files = event.target.files;
                if (!files.length) return;
    
                // 覆盖模式：上传新照片前清除旧的
                window.clearCachedPhotos();
    
                const imagePromises = Array.from(files).map(processFileToDataURL);
                
                try {
                    // 等待所有图片处理完成（压缩 + 转Base64）
                    const base64Images = await Promise.all(imagePromises);
                    
                    // 创建 Mesh
                    base64Images.forEach(imgData => {
                        const img = new Image();
                        img.src = imgData;
                        img.onload = () => createPhotoMesh(img);
                    });
    
                    // 保存到缓存
                    saveToCache(base64Images);
    
                } catch (err) {
                    console.error("Error processing images:", err);
                    alert("图片处理失败，请重试");
                }
    
                // 重置 input 以便允许重复上传相同文件
                event.target.value = '';
            };
    
            // 将文件读取并压缩为 Base64
            function processFileToDataURL(file) {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const img = new Image();
                        img.src = e.target.result;
                        img.onload = () => {
                            // 创建 Canvas 进行压缩
                            const canvas = document.createElement('canvas');
                            const ctx = canvas.getContext('2d');
                            
                            // 最大尺寸限制 (避免 localStorage 爆满)
                            const MAX_SIZE = 800; 
                            let width = img.width;
                            let height = img.height;
    
                            if (width > height) {
                                if (width > MAX_SIZE) {
                                    height *= MAX_SIZE / width;
                                    width = MAX_SIZE;
                                }
                            } else {
                                if (height > MAX_SIZE) {
                                    width *= MAX_SIZE / height;
                                    height = MAX_SIZE;
                                }
                            }
    
                            canvas.width = width;
                            canvas.height = height;
                            ctx.drawImage(img, 0, 0, width, height);
    
                            // 转换为 JPEG Base64 (0.8 质量)
                            const dataURL = canvas.toDataURL('image/jpeg', 0.8);
                            resolve(dataURL);
                        };
                        img.onerror = reject;
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                });
            }
    
            // 保存到 LocalStorage
            function saveToCache(imagesData) {
                const cacheData = {
                    timestamp: Date.now(),
                    images: imagesData
                };
                try {
                    localStorage.setItem(CONFIG.cacheKey, JSON.stringify(cacheData));
                } catch (e) {
                    console.warn("Storage quota exceeded or error", e);
                    alert("照片过多或过大，部分缓存可能失败");
                }
            }
    
            // 加载缓存
            function loadCachedPhotos() {
                try {
                    const raw = localStorage.getItem(CONFIG.cacheKey);
                    if (!raw) return;
    
                    const cache = JSON.parse(raw);
                    const now = Date.now();
    
                    // 检查有效期 (7天)
                    if (now - cache.timestamp > CONFIG.cacheDuration) {
                        console.log("Cache expired, clearing...");
                        localStorage.removeItem(CONFIG.cacheKey);
                        return;
                    }
    
                    if (cache.images && Array.isArray(cache.images)) {
                        console.log(`Loading ${cache.images.length} photos from cache...`);
                        cache.images.forEach(imgData => {
                            const img = new Image();
                            img.src = imgData;
                            img.onload = () => createPhotoMesh(img);
                        });
                    }
                } catch (e) {
                    console.error("Failed to load cache", e);
                }
            }
    
            function createPhotoMesh(image) {
                const texture = new THREE.Texture(image);
                texture.needsUpdate = true;
                texture.colorSpace = THREE.SRGBColorSpace;
    
                // Maintain aspect ratio
                const aspect = image.width / image.height;
                const w = 4;
                const h = 4 / aspect;
    
                const geometry = new THREE.PlaneGeometry(w, h);
                // Use BasicMaterial for photos so they are always fully bright and not affected by shadows
                const material = new THREE.MeshBasicMaterial({ 
                    map: texture, 
                    side: THREE.DoubleSide,
                    transparent: true,
                    opacity: 1.0 
                });
    
                const mesh = new THREE.Mesh(geometry, material);
                
                // Add a border (gold frame)
                const frameGeo = new THREE.BoxGeometry(w + 0.2, h + 0.2, 0.1);
                const frameMat = new THREE.MeshStandardMaterial({ 
                    color: CONFIG.colors.gold, 
                    metalness: 0.8, 
                    roughness: 0.2,
                    emissive: 0x332200
                });
                const frame = new THREE.Mesh(frameGeo, frameMat);
                frame.position.z = -0.06;
                mesh.add(frame);
    
                // 修改位置计算逻辑：使用确定性的黄金螺旋算法
                // 传入当前照片的总数作为 index，确保每张新照片都有唯一且均匀的位置
                const index = photoMeshes.length;
                const treePos = getPhotoSurfacePosition(index);
    
                // Explode Position (Target) - 修改为球体分布
                const explodePos = getExplodeSpherePosition(35);
    
                mesh.position.copy(explodePos); // Start exploded if added later, or logic will fix it
                scene.add(mesh);
    
                photoMeshes.push({
                    mesh: mesh,
                    treePos: treePos,
                    explodePos: explodePos,
                    wobbleOffset: Math.random() * 100,
                    isPhoto: true
                });
                
                // Add to main particles array for movement management
                particles.push(photoMeshes[photoMeshes.length-1]);
            }
    
    
            // --- MediaPipe Logic ---
            async function setupMediaPipe() {
                const video = document.getElementById('video-feed');
    
                // Access Global Hands Class
                const hands = new window.Hands({locateFile: (file) => {
                    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
                }});
    
                hands.setOptions({
                    maxNumHands: 1,
                    modelComplexity: 1,
                    minDetectionConfidence: 0.7,
                    minTrackingConfidence: 0.6
                });
    
                hands.onResults(onHandsResults);
    
                // Access Webcam
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                    video.srcObject = stream;
                    await video.play();
    
                    // Start processing loop specific to MediaPipe
                    async function detectionLoop() {
                        if (video.currentTime > 0 && !video.paused && !video.ended) {
                            await hands.send({image: video});
                        }
                        requestAnimationFrame(detectionLoop);
                    }
                    detectionLoop();
                } catch (err) {
                    console.error("Camera access denied or failed", err);
                    document.getElementById('loading-text').innerText = "未检测到摄像头，请检查权限。应用将自动运行演示模式。";
                    setTimeout(() => {
                        document.getElementById('loading').style.display = 'none';
                        // Auto demo mode logic could go here
                    }, 2000);
                }
            }
    
            function onHandsResults(results) {
                const modeDisplay = document.getElementById('mode-display');
                
                if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                    isHandDetected = true;
                    const landmarks = results.multiHandLandmarks[0];
    
                    // 1. Calculate Hand Center (for rotation)
                    // Wrist is 0, Middle Finger MCP is 9
                    const cx = landmarks[9].x;
                    const cy = landmarks[9].y;
                    handPos.x = (cx - 0.5) * 2; // -1 to 1
                    handPos.y = (cy - 0.5) * 2;
    
                    // 2. Gesture Recognition
                    const state = detectGesture(landmarks);
                    
                    if (state) {
                        targetState = state;
                        
                        // UI Update
                        let text = "未知";
                        let bg = "#333";
                        if (state === STATE.TREE) { text = "🌲 聚合形态"; bg = CONFIG.colors.green; }
                        if (state === STATE.EXPLODE) { text = "✨ 散开形态"; bg = "#444"; }
                        if (state === STATE.FOCUS) { text = "📷 聚焦照片"; bg = CONFIG.colors.red; }
                        
                        modeDisplay.innerText = text;
                        modeDisplay.style.borderColor = (state === STATE.FOCUS) ? '#fff' : CONFIG.colors.gold;
                    }
    
                } else {
                    isHandDetected = false;
                    // Optional: Slowly drift back to tree if no hand? Or stay in last state.
                    // Keeping last state is better for UX.
                }
            }
    
            function detectGesture(lm) {
                // Helper to check if finger is open
                const isFingerOpen = (tipIdx, pipIdx) => lm[tipIdx].y < lm[pipIdx].y; // Note: Y is inverted in some contexts, but MediaPipe y=0 is top. So tip < pip means finger up.
                // Actually, MediaPipe coords: 0,0 is top-left.
                // This assumes hand is upright. Let's use distance from wrist (0).
                
                const dist = (i, j) => Math.sqrt(Math.pow(lm[i].x - lm[j].x, 2) + Math.pow(lm[i].y - lm[j].y, 2));
                
                const wrist = 0;
                const tips = [8, 12, 16, 20];
                const pips = [6, 10, 14, 18];
                
                // Check Fingers Extended
                let extendedCount = 0;
                // Thumb is special, check x distance relative to wrist/index for "openness"
                if (dist(4, 17) > 0.2) extendedCount++; // Rough thumb check
    
                for (let k=0; k<4; k++) {
                    // If tip is further from wrist than PIP is from wrist
                    if (dist(wrist, tips[k]) > dist(wrist, pips[k]) * 1.2) {
                        extendedCount++;
                    }
                }
    
                // Pinch Detection (Thumb 4 and Index 8)
                const pinchDist = dist(4, 8);
    
                // LOGIC TREE
                // 稍微放宽捏合的判定距离 (0.05 -> 0.08)，让操作更灵敏
                if (pinchDist < 0.08) {
                    return STATE.FOCUS;
                } else if (extendedCount >= 4) {
                    return STATE.EXPLODE;
                } else if (extendedCount <= 1) {
                    return STATE.TREE;
                }
                
                return null; // No change / Transition
            }
    
    
            // --- Animation Loop ---
            function animate() {
                requestAnimationFrame(animate);
                time += 0.01;
    
                // 1. Smooth State Transition
                if (currentState !== targetState) {
                    currentState = targetState;
                    
                    // If entering focus mode, pick a random photo to bring forward if any exist
                    if (currentState === STATE.FOCUS && photoMeshes.length > 0) {
                         // Reset all photos first
                         photoMeshes.forEach(p => p.focusOffset = null);
                         // Pick one
                         const luckyPhoto = photoMeshes[Math.floor(Math.random() * photoMeshes.length)];
                         luckyPhoto.focusOffset = true;
                    }
                }
    
                // 2. Camera Controls
                // Default rotation
                let camX = Math.sin(time * 0.2) * 50;
                let camZ = Math.cos(time * 0.2) * 50;
                let camY = 0;
    
                // Hand Influence
                if (currentState === STATE.EXPLODE && isHandDetected) {
                    // Map hand x (-1 to 1) to rotation angle
                    const angle = handPos.x * Math.PI; 
                    camX = Math.sin(angle) * 60;
                    camZ = Math.cos(angle) * 60;
                    camY = handPos.y * 30;
                } else if (currentState === STATE.FOCUS) {
                    // Zoom in
                    camX *= 0.3;
                    camZ *= 0.3;
                }
    
                // Lerp Camera Position
                camera.position.x += (camX - camera.position.x) * 0.05;
                camera.position.y += (camY - camera.position.y) * 0.05;
                camera.position.z += (camZ - camera.position.z) * 0.05;
                camera.lookAt(0, 0, 0);
    
    
                // 3. Particle Animation
                particles.forEach(p => {
                    let target;
    
                    if (currentState === STATE.TREE) {
                        target = p.treePos;
                    } else if (currentState === STATE.EXPLODE) {
                        target = p.explodePos;
                    } else if (currentState === STATE.FOCUS) {
                        // In focus mode, keep background exploded but push back slightly
                        target = p.explodePos; 
                        
                        if (p.focusOffset) {
                            // This is the chosen photo
                            // 关键修改：动态计算目标位置，使其始终位于相机正前方
                            // 获取从原点指向相机的方向向量
                            const camDir = camera.position.clone().normalize();
                            // 将照片放置在距离原点 10 单位处（朝向相机方向）
                            // 这样无论相机转到哪里，照片都会在 View 的中心
                            const targetPos = camDir.multiplyScalar(10);
    
                            p.mesh.position.lerp(targetPos, 0.1);
                            
                            // FIX: 使用 copy(camera.quaternion) 确保照片绝对正对屏幕，不歪不倒
                            p.mesh.quaternion.copy(camera.quaternion);
                            return; // Skip standard update
                        }
                    }
    
                    // Add floating effect
                    const wobble = Math.sin(time * 2 + p.wobbleOffset) * 0.5;
                    const finalTarget = target.clone();
                    if (currentState !== STATE.TREE) {
                        finalTarget.y += wobble;
                    }
    
                    // Move mesh
                    p.mesh.position.lerp(finalTarget, 0.04);
                    
                    // Rotation
                    if (!p.isPhoto) {
                        p.mesh.rotation.x += 0.01;
                        p.mesh.rotation.y += 0.01;
                    } else if (currentState === STATE.TREE) {
                        // Photos in tree mode face out from center
                        // 树形状态下，让照片背面朝向中心，正面朝外，保持直立
                        p.mesh.lookAt(new THREE.Vector3(p.mesh.position.x * 2, p.mesh.position.y, p.mesh.position.z * 2));
                    } else {
                        // FIX: Photos in explode/focus mode
                        // 散开状态下，也强制让照片正对屏幕，防止出现倒置或歪斜
                        p.mesh.quaternion.copy(camera.quaternion);
                    }
                });
    
                // 普通渲染
                renderer.render(scene, camera);
            }
    
            function onWindowResize() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            }
    
            // Start
            init();
    
        </script>
    </body>
    </html>
    ```

    :::

- 支持用户自己选择喜欢的背景音乐：

    ::: details

    ```html
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        <title>Gesture Controlled Christmas Tree</title>
        <style>
            body {
                margin: 0;
                overflow: hidden;
                background-color: #111; /* 稍微提亮一点点背景，不是纯黑 */
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                color: #fff;
            }
    
            #canvas-container {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1;
            }
    
            /* UI Overlay */
            #ui-layer {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10;
                pointer-events: none; /* Let clicks pass through to canvas if needed */
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 20px;
                box-sizing: border-box;
            }
    
            .header {
                text-align: left;
                text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
            }
    
            h1 {
                margin: 0;
                font-weight: 300;
                color: #FFD700; /* Gold */
                letter-spacing: 2px;
                font-size: 24px;
            }
    
            p.subtitle {
                margin: 5px 0 0 0;
                color: #aaa;
                font-size: 14px;
            }
    
            /* Status & Instructions & Buttons Container */
            .status-panel {
                position: absolute;
                top: 20px;
                right: 20px;
                text-align: right;
                display: flex;
                flex-direction: column;
                align-items: flex-end; /* Right align everything */
                gap: 12px;
            }
    
            .status-tag {
                display: inline-block;
                padding: 8px 16px;
                background: rgba(20, 30, 20, 0.8);
                border: 1px solid #FFD700;
                border-radius: 20px;
                color: #FFD700;
                font-weight: bold;
                font-size: 14px;
                transition: all 0.3s ease;
                box-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
            }
    
            .instructions {
                background: rgba(0, 0, 0, 0.6);
                padding: 15px;
                border-radius: 8px; /* Slightly squarer for tech feel */
                font-size: 12px;
                color: #ddd;
                width: 200px; /* Fixed width for alignment */
                pointer-events: auto;
                backdrop-filter: blur(10px);
                border-left: 2px solid #C41E3A; /* Red accent */
                border-right: 1px solid rgba(255, 255, 255, 0.1);
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }
    
            .instruction-item {
                display: flex;
                align-items: center;
                margin-bottom: 8px;
                justify-content: space-between; /* Space out icon and text */
            }
            
            .icon { font-size: 16px; width: 20px; text-align: center;}
    
            /* Upload Buttons - New Elegant Style */
            .upload-container {
                pointer-events: auto;
                display: flex;
                flex-direction: column;
                gap: 8px;
                align-items: flex-end;
                margin-top: 5px;
                width: 220px; /* Give it a bit more width for the dropdown */
            }
    
            .btn {
                background: rgba(0, 0, 0, 0.5);
                border: 1px solid rgba(255, 215, 0, 0.5); /* Subtle Gold Border */
                color: #FFD700;
                padding: 8px 20px;
                border-radius: 4px; /* Minimalist radius */
                cursor: pointer;
                font-size: 12px;
                transition: all 0.3s ease;
                text-transform: uppercase;
                letter-spacing: 1px;
                backdrop-filter: blur(5px);
                width: 100%; /* Match width */
                text-align: center;
                box-shadow: 0 2px 5px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                box-sizing: border-box; /* Ensure padding doesn't increase width */
            }
    
            .btn:hover {
                background: rgba(255, 215, 0, 0.15);
                border-color: #FFD700;
                box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
                transform: translateX(-5px); /* Subtle slide left */
            }
    
            .btn.active {
                background: rgba(255, 215, 0, 0.2);
                box-shadow: 0 0 10px rgba(255, 215, 0, 0.4);
                border-color: #FFD700;
            }
    
            /* Group music buttons slightly */
            .music-group {
                display: flex;
                gap: 5px;
                width: 100%;
            }
            
            .music-group .btn {
                flex: 1; /* Split space */
                padding: 8px 5px; /* Smaller padding */
            }
            
            #music-btn {
                flex: 0 0 40%; /* Play button takes less space */
            }
            
            #playlist-select {
                flex: 1;
                appearance: none; /* Remove default arrow */
                -webkit-appearance: none;
                text-align: left;
                text-align-last: center;
                background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FFD700' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
                background-repeat: no-repeat;
                background-position: right 8px center;
                background-size: 12px;
                padding-right: 25px; /* Space for arrow */
                padding-left: 10px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                color: #FFD700;
            }
            
            #playlist-select option {
                background: #222;
                color: #FFD700;
                padding: 5px;
            }
    
            /* Differentiate clear button slightly */
            #clear-btn {
                border-color: rgba(255, 255, 255, 0.3);
                color: #aaa;
            }
            
            #clear-btn:hover {
                border-color: #fff;
                color: #fff;
                background: rgba(255, 255, 255, 0.1);
                box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
            }
    
            #file-input { display: none; }
            #music-input { display: none; }
    
            /* Webcam feedback (hidden but processed) */
            #video-feed {
                position: absolute;
                bottom: 20px;
                left: 20px;
                width: 160px;
                height: 120px;
                border-radius: 10px;
                transform: scaleX(-1); /* Mirror */
                border: 2px solid #FFD700;
                opacity: 0.7;
                z-index: 20;
                object-fit: cover;
                display: block; /* Required for MediaPipe */
            }
    
            /* Loading Screen */
            #loading {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #000;
                z-index: 100;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                color: #FFD700;
                transition: opacity 0.5s;
            }
    
            .loader {
                border: 4px solid #333;
                border-top: 4px solid #FFD700;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                animation: spin 1s linear infinite;
                margin-bottom: 15px;
            }
    
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    
        </style>
        <!-- MediaPipe Hands Global Script (Fix for Module Error) -->
        <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/hands.js" crossorigin="anonymous"></script>
    
        <!-- Import Maps for Three.js and Addons -->
        <script type="importmap">
            {
                "imports": {
                    "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
                    "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"
                }
            }
        </script>
    </head>
    <body>
    
        <!-- Audio Element -->
        <audio id="bg-music" loop>
            <source src="https://cdn.bornforthis.cn/mp3/LastChristmas(Single%20Version).m4a" type="audio/mp4">
            您的浏览器不支持音频元素。
        </audio>
    
        <!-- Loading Screen -->
        <div id="loading">
            <div class="loader"></div>
            <div id="loading-text">正在初始化视觉引擎与AI模型...</div>
        </div>
    
        <!-- Video Element for MediaPipe (Visible for user feedback) -->
        <video id="video-feed" playsinline></video>
    
        <!-- UI Layer -->
        <div id="ui-layer">
            <div class="header">
                <h1>CHRISTMAS GESTURE</h1>
                <p class="subtitle">MediaPipe & Three.js WebGL Experience</p>
            </div>
    
            <div class="status-panel">
                <div id="mode-display" class="status-tag">等待手势...</div>
                
                <div class="instructions">
                    <div class="instruction-item"><span>✊ 握拳</span> <span>聚合形态</span></div>
                    <div class="instruction-item"><span>🖐 张开</span> <span>散开形态</span></div>
                    <div class="instruction-item"><span>🤏 捏合</span> <span>特写照片</span></div>
                    <div class="instruction-item"><span>👋 移动</span> <span>旋转视角</span></div>
                </div>
    
                <div class="upload-container">
                    <button id="upload-btn" class="btn" onclick="document.getElementById('file-input').click()">
                        <span>📷</span> 上传照片
                    </button>
                    
                    <div class="music-group">
                        <button id="music-btn" class="btn" onclick="toggleMusic()">
                            <span>🔇</span>
                        </button>
                        <!-- 下拉选择框替代原来的“换音乐”按钮 -->
                        <select id="playlist-select" class="btn" onchange="handlePlaylistChange(this)">
                            <option disabled>-- 选择背景音乐 --</option>
                            <!-- Options will be populated by JS -->
                            <option value="custom">📂 自定义...</option>
                        </select>
                    </div>
    
                    <button id="clear-btn" class="btn" onclick="clearCachedPhotos()">
                        <span>🗑️</span> 清除照片
                    </button>
                    
                    <input type="file" id="file-input" accept="image/*" multiple onchange="handlePhotoUpload(event)">
                    <!-- 新增音乐文件输入框 -->
                    <input type="file" id="music-input" accept="audio/*, .mp3, .m4a" onchange="handleMusicFileUpload(event)">
                </div>
            </div>
        </div>
    
        <!-- 3D Canvas -->
        <div id="canvas-container"></div>
    
        <!-- Main Logic -->
        <script type="module">
            import * as THREE from 'three';
    
            // --- Configuration & Constants ---
            const CONFIG = {
                colors: {
                    green: 0x228B22,   // Forest Green (Brighter)
                    gold: 0xFFD700,    // Metallic Gold
                    red: 0xFF0000,     // Bright Red
                    white: 0xFFFFFF
                },
                particles: 1500,       // 增加粒子数量到 1500，让树更茂密
                radius: 18,            // Base radius of tree bottom
                height: 35,            // Height of tree
                cacheKey: 'xmas_tree_photos_v1',
                cacheDuration: 7 * 24 * 60 * 60 * 1000, // 7 Days in ms
                musicCacheKey: 'xmas_music_pref_v3', // 更新版本号以适应新逻辑
                
                // 内置歌单
                playlist: [
                    { name: "Last Christmas", url: "https://cdn.bornforthis.cn/mp3/LastChristmas(Single%20Version).m4a" },
                    { name: "Jingle Bell Rock", url: "https://cdn.bornforthis.cn/mp3/JingleBellRock.m4a" },
                    { name: "Santa Tell Me", url: "https://cdn.bornforthis.cn/mp3/SantaTellMe.m4a" },
                    { name: "Feliz Navidad", url: "https://cdn.bornforthis.cn/mp3/FelizNavidad.m4a" },
                    { name: "Santa Claus is Coming", url: "https://cdn.bornforthis.cn/mp3/SantaClausisComingtoTown.m4a" },
                    { name: "Here Comes Santa Claus", url: "https://cdn.bornforthis.cn/mp3/HereComesSantaClaus.m4a" },
                    { name: "Merry Christmas Mr Lawrence", url: "https://cdn.bornforthis.cn/mp3/MerryChristmasMrLawrence.m4a" },
                    { name: "Christmas Time in My Town", url: "https://cdn.bornforthis.cn/mp3/ChristmasTimeinMyHomeTown.mp3" },
                ]
            };
    
            // --- Global Variables ---
            let scene, camera, renderer;
            let particles = []; // Array to store { mesh, treePos, explodePos, currentPos, speed }
            let photoMeshes = []; // Array specifically for user photos
            let time = 0;
            
            // Interaction State
            const STATE = {
                TREE: 'TREE',
                EXPLODE: 'EXPLODE',
                FOCUS: 'FOCUS'
            };
            let currentState = STATE.TREE;
            let targetState = STATE.TREE;
            
            // Hand Data
            let handPos = { x: 0, y: 0 }; // Normalized -1 to 1
            let isHandDetected = false;
    
            // Music State
            let isMusicPlaying = false;
            let currentMusicSource = CONFIG.playlist[0].url; // Default to first song
    
            // --- Initialization ---
            async function init() {
                // 1. Scene Setup
                const container = document.getElementById('canvas-container');
                scene = new THREE.Scene();
                scene.background = new THREE.Color(0x111111); // Dark Gray instead of pure black
    
                camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
                camera.position.set(0, 0, 50);
    
                renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.outputColorSpace = THREE.SRGBColorSpace;
                container.appendChild(renderer.domElement);
    
                // 2. Lighting - 大幅增强光照
                // 2.1 强环境光，照亮所有阴影
                const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); 
                scene.add(ambientLight);
    
                // 2.2 主平行光（模拟阳光），提供清晰的明暗关系
                const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
                mainLight.position.set(10, 20, 20);
                scene.add(mainLight);
    
                // 2.3 补光灯（金色），增加华丽感
                const pointLight = new THREE.PointLight(CONFIG.colors.gold, 2, 100);
                pointLight.position.set(0, 20, 10);
                scene.add(pointLight);
                
                // 2.4 氛围灯（红绿），增加节日气氛，但调高亮度
                const redLight = new THREE.PointLight(CONFIG.colors.red, 2, 50);
                redLight.position.set(15, 10, 15);
                scene.add(redLight);
                
                const greenLight = new THREE.PointLight(CONFIG.colors.green, 2, 50);
                greenLight.position.set(-15, -10, 15);
                scene.add(greenLight);
    
                // 3. Post Processing Removed
    
                // 4. Content Generation
                createParticles();
                createStar();
                
                // 5. Load Cached Photos & Music Preference
                loadCachedPhotos();
                initAudio(); // 初始化音频和下拉菜单
    
                // 6. Setup MediaPipe
                await setupMediaPipe();
    
                // 7. Events
                window.addEventListener('resize', onWindowResize);
    
                // 8. Start Loop
                document.getElementById('loading').style.opacity = '0';
                setTimeout(() => document.getElementById('loading').style.display = 'none', 500);
                animate();
            }
    
            // --- Audio Logic ---
            
            function initAudio() {
                // 1. Populate Dropdown
                const select = document.getElementById('playlist-select');
                
                // Insert Built-in options BEFORE the "Custom" option
                CONFIG.playlist.forEach(song => {
                    const option = document.createElement('option');
                    option.value = song.url;
                    option.innerText = `🎵 ${song.name}`;
                    // Insert before the last option (which is Custom)
                    select.insertBefore(option, select.lastElementChild);
                });
    
                // 2. Load Preferences
                const audio = document.getElementById('bg-music');
                
                try {
                    const raw = localStorage.getItem(CONFIG.musicCacheKey);
                    if (raw) {
                        const cache = JSON.parse(raw);
                        const now = Date.now();
                        
                        if (now - cache.timestamp <= CONFIG.cacheDuration) {
                            // 恢复音乐源
                            if (cache.customSrc) {
                                currentMusicSource = cache.customSrc;
                            }
    
                            // 恢复播放状态
                            if (cache.enabled) {
                                isMusicPlaying = true;
                                // Play will be called below
                            }
                        }
                    }
                } catch (e) {
                    console.error("Error loading music preference", e);
                }
    
                // 3. Apply Source
                audio.src = currentMusicSource;
                
                // 4. Sync Dropdown Value
                // Check if current source is in playlist
                const inPlaylist = CONFIG.playlist.find(p => p.url === currentMusicSource);
                if (inPlaylist) {
                    select.value = currentMusicSource;
                } else {
                    // It's a custom source (or stale default), strictly we don't have a value for it in select unless we add one
                    // For UI consistency, if it's custom data (blob/base64), we might just show "Custom" selected, but value='custom' triggers logic.
                    // We'll leave it as is, or maybe add a hidden option for "Current Custom"
                    // Simple hack: if it's not in playlist, assume custom logic handled by "Custom..." click
                    // But let's verify if we can set it visually.
                    // For now, if custom, we won't force select value, it might show "Select Music"
                }
    
                // 5. Play if needed
                updateMusicUI(isMusicPlaying);
                if (isMusicPlaying) {
                    const playPromise = audio.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(error => {
                            console.log("Auto-play blocked.");
                            // Update UI to show paused since block
                            isMusicPlaying = false;
                            updateMusicUI(false);
                        });
                    }
                }
            }
    
            // 处理下拉菜单变化
            window.handlePlaylistChange = function(selectElem) {
                const value = selectElem.value;
                
                if (value === 'custom') {
                    // 用户选择“自定义”
                    handleCustomMusicClick();
                    // 暂时把选中的值重置回之前的（或者保持 Custom），等待用户完成上传
                    // 实际上 handleCustomMusicClick 会更新源
                } else {
                    // 用户选择了内置歌曲
                    changeMusicSource(value, 'builtin');
                }
            };
    
            window.handleCustomMusicClick = function() {
                const url = prompt("请输入背景音乐链接 (MP3/M4A)\n或者点击 [取消] 上传本地文件:");
                
                if (url) {
                    changeMusicSource(url.trim(), 'link');
                } else if (url === "") {
                    // Cancelled or empty
                    // Revert selection if possible?
                } else {
                    // Clicked Cancel -> File Upload
                    document.getElementById('music-input').click();
                }
            };
    
            window.handleMusicFileUpload = function(event) {
                const file = event.target.files[0];
                if (!file) return;
    
                const reader = new FileReader();
                reader.onload = function(e) {
                    const result = e.target.result;
                    const canCache = result.length < 4 * 1024 * 1024; 
                    changeMusicSource(result, 'file', canCache);
                    if (!canCache) {
                        alert("音乐文件较大，仅在本次访问播放，不会缓存到本地。");
                    }
                };
                reader.readAsDataURL(file);
                event.target.value = ''; 
            };
    
            function changeMusicSource(src, type, shouldCache = true) {
                const audio = document.getElementById('bg-music');
                currentMusicSource = src;
                audio.src = src;
                
                // Auto play
                isMusicPlaying = true;
                audio.play().catch(e => console.log("Play interrupted", e));
                updateMusicUI(true);
                
                // Update Dropdown UI to reflect change
                const select = document.getElementById('playlist-select');
                // If it's a built-in type, select matches src
                if (type === 'builtin') {
                     select.value = src;
                } else {
                    // If custom, we want the dropdown to show something indicating custom?
                    // The 'custom' option value is "custom", but that triggers the prompt.
                    // We'll just leave it; the user hears the music.
                }
                
                // Save
                saveMusicPreference(true, shouldCache ? src : null);
            }
    
            window.toggleMusic = function() {
                const audio = document.getElementById('bg-music');
                isMusicPlaying = !isMusicPlaying;
                
                if (isMusicPlaying) {
                    audio.play();
                } else {
                    audio.pause();
                }
                
                updateMusicUI(isMusicPlaying);
                // Save state (keep existing src)
                saveMusicPreference(isMusicPlaying, null, true); 
            };
    
            function updateMusicUI(isPlaying) {
                const btn = document.getElementById('music-btn');
                if (isPlaying) {
                    btn.innerHTML = '<span>🔊</span>';
                    btn.classList.add('active');
                } else {
                    btn.innerHTML = '<span>🔇</span>';
                    btn.classList.remove('active');
                }
            }
    
            // srcData: 如果不为 null，则更新 customSrc；如果为 null 且 updateOnlyState=false，则清除 customSrc
            // updateOnlyState: 如果为 true，只更新开关状态，不碰 source
            function saveMusicPreference(isEnabled, srcData = null, updateOnlyState = false) {
                try {
                    let dataToSave = {
                        timestamp: Date.now(),
                        enabled: isEnabled,
                        customSrc: null
                    };
    
                    if (updateOnlyState) {
                        const oldRaw = localStorage.getItem(CONFIG.musicCacheKey);
                        if (oldRaw) {
                            const old = JSON.parse(oldRaw);
                            dataToSave.customSrc = old.customSrc;
                        }
                    } else {
                        dataToSave.customSrc = srcData;
                    }
    
                    localStorage.setItem(CONFIG.musicCacheKey, JSON.stringify(dataToSave));
                } catch (e) {
                    console.warn("Failed to save music preference", e);
                    // Fallback: save disabled state without source
                    try {
                         const fallbackData = {
                            timestamp: Date.now(),
                            enabled: isEnabled,
                            customSrc: null 
                        };
                        localStorage.setItem(CONFIG.musicCacheKey, JSON.stringify(fallbackData));
                    } catch(e2) {}
                }
            }
    
            // --- Particle System Logic ---
    
            // 移除旧的螺旋线逻辑，改用体积计算
            function getConeVolumePosition(h, maxR) {
                // h is 0 (bottom) to 1 (top)
                
                // 当前高度的圆锥截面半径
                const rAtHeight = maxR * (1 - h);
                
                // 随机分布在圆截面内，但更倾向于外表面以保持树的形状
                // 使用 Math.pow 调整分布：指数越小越均匀，指数越大越集中在边缘
                const r = rAtHeight * Math.pow(Math.random(), 0.4); 
                
                const angle = Math.random() * Math.PI * 2;
                
                const x = r * Math.cos(angle);
                const z = r * Math.sin(angle);
                
                // 将高度映射到实际坐标 y
                const y = -CONFIG.height/2 + h * CONFIG.height;
                
                return new THREE.Vector3(x, y, z);
            }
    
            // 新增：专门用于散开形态的球体分布算法 (圆形)
            function getExplodeSpherePosition(maxRadius) {
                // 球坐标随机分布
                const u = Math.random();
                const v = Math.random();
                const theta = 2 * Math.PI * u;
                const phi = Math.acos(2 * v - 1);
                
                // 使用立方根确保在体积内均匀分布（不仅仅是表面，也不仅仅是核心）
                const r = maxRadius * Math.cbrt(Math.random()); 
                
                const x = r * Math.sin(phi) * Math.cos(theta);
                const y = r * Math.sin(phi) * Math.sin(theta);
                const z = r * Math.cos(phi);
                
                return new THREE.Vector3(x, y, z);
            }
    
            // 新增：专门用于照片的均匀分布算法 (基于黄金角度螺旋)
            // 这能确保无论上传多少张照片，它们都能均匀地分布在树的表面，不会扎堆
            function getPhotoSurfacePosition(index) {
                // 黄金分割比，用于打散高度和角度
                const goldenRatio = 0.61803398875;
                
                // 高度分布算法：
                // 使用 index * goldenRatio 取模，得到一个在 0-1 之间均匀跳跃的伪随机序列
                // 我们限制范围在 0.15 ~ 0.85 之间，避免照片出现在树尖太高或树底太低的位置
                const h = ((index * goldenRatio) % 0.7) + 0.15; 
                
                // 角度分布：黄金角度 (约 137.5 度)
                // 保证任意相邻或相近的照片在水平方向上都相隔甚远，360度无死角覆盖
                const angle = index * Math.PI * 2 * goldenRatio;
                
                // 半径计算：基于圆锥表面
                // CONFIG.radius 是底部半径
                const rBase = CONFIG.radius * (1 - h);
                const r = rBase + 2.5; // +2.5 让照片明显悬浮在树叶表面之外，作为装饰重点
                
                const x = r * Math.cos(angle);
                const z = r * Math.sin(angle);
                const y = -CONFIG.height/2 + h * CONFIG.height;
                
                return new THREE.Vector3(x, y, z);
            }
    
            function createParticles() {
                const geometrySphere = new THREE.SphereGeometry(0.4, 32, 32); 
                const geometryCube = new THREE.BoxGeometry(0.8, 0.8, 0.8); // 稍微加大方块，充当树叶
                const geometryTetra = new THREE.TetrahedronGeometry(0.6); // 增加四面体作为另一种树叶
                
                // Materials - 更亮、更鲜艳的材质设置
                const matGold = new THREE.MeshStandardMaterial({ 
                    color: CONFIG.colors.gold, 
                    roughness: 0.2, 
                    metalness: 0.6, 
                    emissive: 0x443300 
                });
                const matRed = new THREE.MeshStandardMaterial({ 
                    color: CONFIG.colors.red, 
                    roughness: 0.3, 
                    metalness: 0.3, 
                    emissive: 0x330000
                });
                const matGreen = new THREE.MeshStandardMaterial({ 
                    color: CONFIG.colors.green, 
                    roughness: 0.8, // 哑光，像叶子
                    metalness: 0.0 
                });
    
                for (let i = 0; i < CONFIG.particles; i++) {
                    let mesh;
                    const type = Math.random();
                    
                    // 调整比例：80% 是绿色枝叶，20% 是装饰品
                    if (type < 0.6) {
                        // Green filler (Box - 树叶)
                        mesh = new THREE.Mesh(geometryCube, matGreen);
                        mesh.rotation.set(Math.random(), Math.random(), Math.random());
                    } else if (type < 0.8) {
                         // Green filler 2 (Tetrahedron - 针叶质感)
                        mesh = new THREE.Mesh(geometryTetra, matGreen);
                        mesh.rotation.set(Math.random(), Math.random(), Math.random());
                    } else if (type < 0.9) {
                        // Gold ornaments (Sphere)
                        mesh = new THREE.Mesh(geometrySphere, matGold);
                        mesh.scale.setScalar(1.5);
                    } else {
                        // Red ornaments (Sphere)
                        mesh = new THREE.Mesh(geometrySphere, matRed);
                        mesh.scale.setScalar(1.2);
                    }
    
                    // Tree Position (Target) - 使用新的体积填充算法
                    const h = Math.random(); // 0 到 1 的随机高度
                    const treePos = getConeVolumePosition(h, CONFIG.radius);
    
                    // Explode Position (Target) - 修改为球体分布
                    const explodePos = getExplodeSpherePosition(35);
    
                    // Initial Pos
                    mesh.position.copy(treePos);
                    
                    scene.add(mesh);
    
                    particles.push({
                        mesh: mesh,
                        treePos: treePos,
                        explodePos: explodePos,
                        velocity: new THREE.Vector3(),
                        wobbleOffset: Math.random() * 100
                    });
                }
            }
    
            function createStar() {
                // Simple Star on top
                const geometry = new THREE.OctahedronGeometry(1.5, 0);
                const material = new THREE.MeshStandardMaterial({
                    color: 0xFFFF00, // Bright Yellow
                    emissive: 0xFFD700,
                    emissiveIntensity: 1, // Reduced slightly as bloom is gone, but still bright
                    roughness: 0.2,
                    metalness: 0.8
                });
                const star = new THREE.Mesh(geometry, material);
                star.position.set(0, CONFIG.height/2 + 2, 0);
                
                // Star is just a special particle
                scene.add(star);
                particles.push({
                    mesh: star,
                    treePos: new THREE.Vector3(0, CONFIG.height/2 + 2, 0),
                    explodePos: new THREE.Vector3(0, 10, 0),
                    wobbleOffset: 0
                });
            }
    
            // --- Photo Upload & Cache Logic ---
    
            // 清除现有的照片（从场景和内存中）
            window.clearCachedPhotos = function() {
                // 1. Remove from scene and memory
                // We iterate backwards to remove safely
                for (let i = particles.length - 1; i >= 0; i--) {
                    if (particles[i].isPhoto) {
                        scene.remove(particles[i].mesh);
                        if (particles[i].mesh.material.map) {
                            particles[i].mesh.material.map.dispose();
                        }
                        particles[i].mesh.material.dispose();
                        particles[i].mesh.geometry.dispose();
                        particles.splice(i, 1);
                    }
                }
                photoMeshes = [];
    
                // 2. Clear LocalStorage
                try {
                    localStorage.removeItem(CONFIG.cacheKey);
                    console.log("Cache cleared");
                } catch (e) {
                    console.error("Failed to clear cache", e);
                }
            };
    
            // 处理用户上传
            window.handlePhotoUpload = async function(event) {
                const files = event.target.files;
                if (!files.length) return;
    
                // 覆盖模式：上传新照片前清除旧的
                window.clearCachedPhotos();
    
                const imagePromises = Array.from(files).map(processFileToDataURL);
                
                try {
                    // 等待所有图片处理完成（压缩 + 转Base64）
                    const base64Images = await Promise.all(imagePromises);
                    
                    // 创建 Mesh
                    base64Images.forEach(imgData => {
                        const img = new Image();
                        img.src = imgData;
                        img.onload = () => createPhotoMesh(img);
                    });
    
                    // 保存到缓存
                    saveToCache(base64Images);
    
                } catch (err) {
                    console.error("Error processing images:", err);
                    alert("图片处理失败，请重试");
                }
    
                // 重置 input 以便允许重复上传相同文件
                event.target.value = '';
            };
    
            // 将文件读取并压缩为 Base64
            function processFileToDataURL(file) {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const img = new Image();
                        img.src = e.target.result;
                        img.onload = () => {
                            // 创建 Canvas 进行压缩
                            const canvas = document.createElement('canvas');
                            const ctx = canvas.getContext('2d');
                            
                            // 最大尺寸限制 (避免 localStorage 爆满)
                            const MAX_SIZE = 800; 
                            let width = img.width;
                            let height = img.height;
    
                            if (width > height) {
                                if (width > MAX_SIZE) {
                                    height *= MAX_SIZE / width;
                                    width = MAX_SIZE;
                                }
                            } else {
                                if (height > MAX_SIZE) {
                                    width *= MAX_SIZE / height;
                                    height = MAX_SIZE;
                                }
                            }
    
                            canvas.width = width;
                            canvas.height = height;
                            ctx.drawImage(img, 0, 0, width, height);
    
                            // 转换为 JPEG Base64 (0.8 质量)
                            const dataURL = canvas.toDataURL('image/jpeg', 0.8);
                            resolve(dataURL);
                        };
                        img.onerror = reject;
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                });
            }
    
            // 保存到 LocalStorage
            function saveToCache(imagesData) {
                const cacheData = {
                    timestamp: Date.now(),
                    images: imagesData
                };
                try {
                    localStorage.setItem(CONFIG.cacheKey, JSON.stringify(cacheData));
                } catch (e) {
                    console.warn("Storage quota exceeded or error", e);
                    alert("照片过多或过大，部分缓存可能失败");
                }
            }
    
            // 加载缓存
            function loadCachedPhotos() {
                try {
                    const raw = localStorage.getItem(CONFIG.cacheKey);
                    if (!raw) return;
    
                    const cache = JSON.parse(raw);
                    const now = Date.now();
    
                    // 检查有效期 (7天)
                    if (now - cache.timestamp > CONFIG.cacheDuration) {
                        console.log("Cache expired, clearing...");
                        localStorage.removeItem(CONFIG.cacheKey);
                        return;
                    }
    
                    if (cache.images && Array.isArray(cache.images)) {
                        console.log(`Loading ${cache.images.length} photos from cache...`);
                        cache.images.forEach(imgData => {
                            const img = new Image();
                            img.src = imgData;
                            img.onload = () => createPhotoMesh(img);
                        });
                    }
                } catch (e) {
                    console.error("Failed to load cache", e);
                }
            }
    
            function createPhotoMesh(image) {
                const texture = new THREE.Texture(image);
                texture.needsUpdate = true;
                texture.colorSpace = THREE.SRGBColorSpace;
    
                // Maintain aspect ratio
                const aspect = image.width / image.height;
                const w = 4;
                const h = 4 / aspect;
    
                const geometry = new THREE.PlaneGeometry(w, h);
                // Use BasicMaterial for photos so they are always fully bright and not affected by shadows
                const material = new THREE.MeshBasicMaterial({ 
                    map: texture, 
                    side: THREE.DoubleSide,
                    transparent: true,
                    opacity: 1.0 
                });
    
                const mesh = new THREE.Mesh(geometry, material);
                
                // Add a border (gold frame)
                const frameGeo = new THREE.BoxGeometry(w + 0.2, h + 0.2, 0.1);
                const frameMat = new THREE.MeshStandardMaterial({ 
                    color: CONFIG.colors.gold, 
                    metalness: 0.8, 
                    roughness: 0.2,
                    emissive: 0x332200
                });
                const frame = new THREE.Mesh(frameGeo, frameMat);
                frame.position.z = -0.06;
                mesh.add(frame);
    
                // 修改位置计算逻辑：使用确定性的黄金螺旋算法
                // 传入当前照片的总数作为 index，确保每张新照片都有唯一且均匀的位置
                const index = photoMeshes.length;
                const treePos = getPhotoSurfacePosition(index);
    
                // Explode Position (Target) - 修改为球体分布
                const explodePos = getExplodeSpherePosition(35);
    
                mesh.position.copy(explodePos); // Start exploded if added later, or logic will fix it
                scene.add(mesh);
    
                photoMeshes.push({
                    mesh: mesh,
                    treePos: treePos,
                    explodePos: explodePos,
                    wobbleOffset: Math.random() * 100,
                    isPhoto: true
                });
                
                // Add to main particles array for movement management
                particles.push(photoMeshes[photoMeshes.length-1]);
            }
    
    
            // --- MediaPipe Logic ---
            async function setupMediaPipe() {
                const video = document.getElementById('video-feed');
    
                // Access Global Hands Class
                const hands = new window.Hands({locateFile: (file) => {
                    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
                }});
    
                hands.setOptions({
                    maxNumHands: 1,
                    modelComplexity: 1,
                    minDetectionConfidence: 0.7,
                    minTrackingConfidence: 0.6
                });
    
                hands.onResults(onHandsResults);
    
                // Access Webcam
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                    video.srcObject = stream;
                    await video.play();
    
                    // Start processing loop specific to MediaPipe
                    async function detectionLoop() {
                        if (video.currentTime > 0 && !video.paused && !video.ended) {
                            await hands.send({image: video});
                        }
                        requestAnimationFrame(detectionLoop);
                    }
                    detectionLoop();
                } catch (err) {
                    console.error("Camera access denied or failed", err);
                    document.getElementById('loading-text').innerText = "未检测到摄像头，请检查权限。应用将自动运行演示模式。";
                    setTimeout(() => {
                        document.getElementById('loading').style.display = 'none';
                        // Auto demo mode logic could go here
                    }, 2000);
                }
            }
    
            function onHandsResults(results) {
                const modeDisplay = document.getElementById('mode-display');
                
                if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                    isHandDetected = true;
                    const landmarks = results.multiHandLandmarks[0];
    
                    // 1. Calculate Hand Center (for rotation)
                    // Wrist is 0, Middle Finger MCP is 9
                    const cx = landmarks[9].x;
                    const cy = landmarks[9].y;
                    handPos.x = (cx - 0.5) * 2; // -1 to 1
                    handPos.y = (cy - 0.5) * 2;
    
                    // 2. Gesture Recognition
                    const state = detectGesture(landmarks);
                    
                    if (state) {
                        targetState = state;
                        
                        // UI Update
                        let text = "未知";
                        let bg = "#333";
                        if (state === STATE.TREE) { text = "🌲 聚合形态"; bg = CONFIG.colors.green; }
                        if (state === STATE.EXPLODE) { text = "✨ 散开形态"; bg = "#444"; }
                        if (state === STATE.FOCUS) { text = "📷 聚焦照片"; bg = CONFIG.colors.red; }
                        
                        modeDisplay.innerText = text;
                        modeDisplay.style.borderColor = (state === STATE.FOCUS) ? '#fff' : CONFIG.colors.gold;
                    }
    
                } else {
                    isHandDetected = false;
                    // Optional: Slowly drift back to tree if no hand? Or stay in last state.
                    // Keeping last state is better for UX.
                }
            }
    
            function detectGesture(lm) {
                // Helper to check if finger is open
                const isFingerOpen = (tipIdx, pipIdx) => lm[tipIdx].y < lm[pipIdx].y; // Note: Y is inverted in some contexts, but MediaPipe y=0 is top. So tip < pip means finger up.
                // Actually, MediaPipe coords: 0,0 is top-left.
                // This assumes hand is upright. Let's use distance from wrist (0).
                
                const dist = (i, j) => Math.sqrt(Math.pow(lm[i].x - lm[j].x, 2) + Math.pow(lm[i].y - lm[j].y, 2));
                
                const wrist = 0;
                const tips = [8, 12, 16, 20];
                const pips = [6, 10, 14, 18];
                
                // Check Fingers Extended
                let extendedCount = 0;
                // Thumb is special, check x distance relative to wrist/index for "openness"
                if (dist(4, 17) > 0.2) extendedCount++; // Rough thumb check
    
                for (let k=0; k<4; k++) {
                    // If tip is further from wrist than PIP is from wrist
                    if (dist(wrist, tips[k]) > dist(wrist, pips[k]) * 1.2) {
                        extendedCount++;
                    }
                }
    
                // Pinch Detection (Thumb 4 and Index 8)
                const pinchDist = dist(4, 8);
    
                // LOGIC TREE
                // 稍微放宽捏合的判定距离 (0.05 -> 0.08)，让操作更灵敏
                if (pinchDist < 0.08) {
                    return STATE.FOCUS;
                } else if (extendedCount >= 4) {
                    return STATE.EXPLODE;
                } else if (extendedCount <= 1) {
                    return STATE.TREE;
                }
                
                return null; // No change / Transition
            }
    
    
            // --- Animation Loop ---
            function animate() {
                requestAnimationFrame(animate);
                time += 0.01;
    
                // 1. Smooth State Transition
                if (currentState !== targetState) {
                    currentState = targetState;
                    
                    // If entering focus mode, pick a random photo to bring forward if any exist
                    if (currentState === STATE.FOCUS && photoMeshes.length > 0) {
                         // Reset all photos first
                         photoMeshes.forEach(p => p.focusOffset = null);
                         // Pick one
                         const luckyPhoto = photoMeshes[Math.floor(Math.random() * photoMeshes.length)];
                         luckyPhoto.focusOffset = true;
                    }
                }
    
                // 2. Camera Controls
                // Default rotation
                let camX = Math.sin(time * 0.2) * 50;
                let camZ = Math.cos(time * 0.2) * 50;
                let camY = 0;
    
                // Hand Influence
                if (currentState === STATE.EXPLODE && isHandDetected) {
                    // Map hand x (-1 to 1) to rotation angle
                    const angle = handPos.x * Math.PI; 
                    camX = Math.sin(angle) * 60;
                    camZ = Math.cos(angle) * 60;
                    camY = handPos.y * 30;
                } else if (currentState === STATE.FOCUS) {
                    // Zoom in
                    camX *= 0.3;
                    camZ *= 0.3;
                }
    
                // Lerp Camera Position
                camera.position.x += (camX - camera.position.x) * 0.05;
                camera.position.y += (camY - camera.position.y) * 0.05;
                camera.position.z += (camZ - camera.position.z) * 0.05;
                camera.lookAt(0, 0, 0);
    
    
                // 3. Particle Animation
                particles.forEach(p => {
                    let target;
    
                    if (currentState === STATE.TREE) {
                        target = p.treePos;
                    } else if (currentState === STATE.EXPLODE) {
                        target = p.explodePos;
                    } else if (currentState === STATE.FOCUS) {
                        // In focus mode, keep background exploded but push back slightly
                        target = p.explodePos; 
                        
                        if (p.focusOffset) {
                            // This is the chosen photo
                            // 关键修改：动态计算目标位置，使其始终位于相机正前方
                            // 获取从原点指向相机的方向向量
                            const camDir = camera.position.clone().normalize();
                            // 将照片放置在距离原点 10 单位处（朝向相机方向）
                            // 这样无论相机转到哪里，照片都会在 View 的中心
                            const targetPos = camDir.multiplyScalar(10);
    
                            p.mesh.position.lerp(targetPos, 0.1);
                            
                            // FIX: 使用 copy(camera.quaternion) 确保照片绝对正对屏幕，不歪不倒
                            p.mesh.quaternion.copy(camera.quaternion);
                            return; // Skip standard update
                        }
                    }
    
                    // Add floating effect
                    const wobble = Math.sin(time * 2 + p.wobbleOffset) * 0.5;
                    const finalTarget = target.clone();
                    if (currentState !== STATE.TREE) {
                        finalTarget.y += wobble;
                    }
    
                    // Move mesh
                    p.mesh.position.lerp(finalTarget, 0.04);
                    
                    // Rotation
                    if (!p.isPhoto) {
                        p.mesh.rotation.x += 0.01;
                        p.mesh.rotation.y += 0.01;
                    } else if (currentState === STATE.TREE) {
                        // Photos in tree mode face out from center
                        // 树形状态下，让照片背面朝向中心，正面朝外，保持直立
                        p.mesh.lookAt(new THREE.Vector3(p.mesh.position.x * 2, p.mesh.position.y, p.mesh.position.z * 2));
                    } else {
                        // FIX: Photos in explode/focus mode
                        // 散开状态下，也强制让照片正对屏幕，防止出现倒置或歪斜
                        p.mesh.quaternion.copy(camera.quaternion);
                    }
                });
    
                // 普通渲染
                renderer.render(scene, camera);
            }
    
            function onWindowResize() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            }
    
            // Start
            init();
    
        </script>
    </body>
    </html>
    ```

    :::

- 软件自带录屏，用户操作完成后可以得到一段视频；

- 把图片上传按钮移动到右上角菜单栏；

- 实现可以分享的独立链接（需要有服务器，暂不考虑）

- 实现本地指定图片链接（本地也可）；




:::

## 3. 发布版本

::: code-tabs

@tab 正常版本

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Gesture Controlled Christmas Tree</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            background-color: #111; /* 稍微提亮一点点背景，不是纯黑 */
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #fff;
        }

        #canvas-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        /* UI Overlay */
        #ui-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
            pointer-events: none; /* Let clicks pass through to canvas if needed */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 20px;
            box-sizing: border-box;
        }

        .header {
            text-align: left;
            text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
        }

        h1 {
            margin: 0;
            font-weight: 300;
            color: #FFD700; /* Gold */
            letter-spacing: 2px;
            font-size: 24px;
        }

        p.subtitle {
            margin: 5px 0 0 0;
            color: #aaa;
            font-size: 14px;
        }

        /* Status & Instructions & Buttons Container */
        .status-panel {
            position: absolute;
            top: 20px;
            right: 20px;
            text-align: right;
            display: flex;
            flex-direction: column;
            align-items: flex-end; /* Right align everything */
            gap: 12px;
        }

        .status-tag {
            display: inline-block;
            padding: 8px 16px;
            background: rgba(20, 30, 20, 0.8);
            border: 1px solid #FFD700;
            border-radius: 20px;
            color: #FFD700;
            font-weight: bold;
            font-size: 14px;
            transition: all 0.3s ease;
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
        }

        .instructions {
            background: rgba(0, 0, 0, 0.6);
            padding: 15px;
            border-radius: 8px; /* Slightly squarer for tech feel */
            font-size: 12px;
            color: #ddd;
            width: 200px; /* Fixed width for alignment */
            pointer-events: auto;
            backdrop-filter: blur(10px);
            border-left: 2px solid #C41E3A; /* Red accent */
            border-right: 1px solid rgba(255, 255, 255, 0.1);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .instruction-item {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            justify-content: space-between; /* Space out icon and text */
        }
        
        .icon { font-size: 16px; width: 20px; text-align: center;}

        /* Upload Buttons - New Elegant Style */
        .upload-container {
            pointer-events: auto;
            display: flex;
            flex-direction: column;
            gap: 8px;
            align-items: flex-end;
            margin-top: 5px;
            width: 220px; /* Give it a bit more width for the dropdown */
        }

        .btn {
            background: rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(255, 215, 0, 0.5); /* Subtle Gold Border */
            color: #FFD700;
            padding: 8px 20px;
            border-radius: 4px; /* Minimalist radius */
            cursor: pointer;
            font-size: 12px;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            backdrop-filter: blur(5px);
            width: 100%; /* Match width */
            text-align: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            box-sizing: border-box; /* Ensure padding doesn't increase width */
        }

        .btn:hover {
            background: rgba(255, 215, 0, 0.15);
            border-color: #FFD700;
            box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
            transform: translateX(-5px); /* Subtle slide left */
        }

        .btn.active {
            background: rgba(255, 215, 0, 0.2);
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.4);
            border-color: #FFD700;
        }

        /* Group music buttons slightly */
        .music-group {
            display: flex;
            gap: 5px;
            width: 100%;
        }
        
        .music-group .btn {
            flex: 1; /* Split space */
            padding: 8px 5px; /* Smaller padding */
        }
        
        #music-btn {
            flex: 0 0 40%; /* Play button takes less space */
        }
        
        #playlist-select {
            flex: 1;
            appearance: none; /* Remove default arrow */
            -webkit-appearance: none;
            text-align: left;
            text-align-last: center;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FFD700' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 8px center;
            background-size: 12px;
            padding-right: 25px; /* Space for arrow */
            padding-left: 10px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #FFD700;
        }
        
        #playlist-select option {
            background: #222;
            color: #FFD700;
            padding: 5px;
        }

        /* Differentiate clear button slightly */
        #clear-btn {
            border-color: rgba(255, 255, 255, 0.3);
            color: #aaa;
        }
        
        #clear-btn:hover {
            border-color: #fff;
            color: #fff;
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }

        #file-input { display: none; }
        #music-input { display: none; }

        /* Webcam feedback (hidden but processed) */
        #video-feed {
            position: absolute;
            bottom: 20px;
            left: 20px;
            width: 160px;
            height: 120px;
            border-radius: 10px;
            transform: scaleX(-1); /* Mirror */
            border: 2px solid #FFD700;
            opacity: 0.7;
            z-index: 20;
            object-fit: cover;
            display: block; /* Required for MediaPipe */
        }

        /* Loading Screen */
        #loading {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            z-index: 100;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #FFD700;
            transition: opacity 0.5s;
        }

        .loader {
            border: 4px solid #333;
            border-top: 4px solid #FFD700;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin-bottom: 15px;
        }

        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

    </style>
    <!-- MediaPipe Hands Global Script (Fix for Module Error) -->
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/hands.js" crossorigin="anonymous"></script>

    <!-- Import Maps for Three.js and Addons -->
    <script type="importmap">
        {
            "imports": {
                "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
                "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"
            }
        }
    </script>
</head>
<body>

    <!-- Audio Element -->
    <audio id="bg-music" loop>
        <source src="https://cdn.bornforthis.cn/mp3/LastChristmas(Single%20Version).m4a" type="audio/mp4">
        您的浏览器不支持音频元素。
    </audio>

    <!-- Loading Screen -->
    <div id="loading">
        <div class="loader"></div>
        <div id="loading-text">正在初始化视觉引擎与AI模型...</div>
    </div>

    <!-- Video Element for MediaPipe (Visible for user feedback) -->
    <video id="video-feed" playsinline></video>

    <!-- UI Layer -->
    <div id="ui-layer">
        <div class="header">
            <h1>CHRISTMAS GESTURE</h1>
            <p class="subtitle">MediaPipe & Three.js WebGL Experience</p>
        </div>

        <div class="status-panel">
            <div id="mode-display" class="status-tag">等待手势...</div>
            
            <div class="instructions">
                <div class="instruction-item"><span>✊ 握拳</span> <span>聚合形态</span></div>
                <div class="instruction-item"><span>🖐 张开</span> <span>散开形态</span></div>
                <div class="instruction-item"><span>🤏 捏合</span> <span>特写照片</span></div>
                <div class="instruction-item"><span>👋 移动</span> <span>旋转视角</span></div>
            </div>

            <div class="upload-container">
                <button id="upload-btn" class="btn" onclick="document.getElementById('file-input').click()">
                    <span>📷</span> 上传照片
                </button>
                
                <div class="music-group">
                    <button id="music-btn" class="btn" onclick="toggleMusic()">
                        <span>🔇</span>
                    </button>
                    <!-- 下拉选择框替代原来的“换音乐”按钮 -->
                    <select id="playlist-select" class="btn" onchange="handlePlaylistChange(this)">
                        <option disabled>-- 选择背景音乐 --</option>
                        <!-- Options will be populated by JS -->
                        <option value="custom">📂 自定义...</option>
                    </select>
                </div>

                <button id="clear-btn" class="btn" onclick="clearCachedPhotos()">
                    <span>🗑️</span> 清除照片
                </button>
                
                <input type="file" id="file-input" accept="image/*" multiple onchange="handlePhotoUpload(event)">
                <!-- 新增音乐文件输入框 -->
                <input type="file" id="music-input" accept="audio/*, .mp3, .m4a" onchange="handleMusicFileUpload(event)">
            </div>
        </div>
    </div>

    <!-- 3D Canvas -->
    <div id="canvas-container"></div>

    <!-- Main Logic -->
    <script type="module">
        import * as THREE from 'three';

        // --- Configuration & Constants ---
        const CONFIG = {
            colors: {
                green: 0x228B22,   // Forest Green (Brighter)
                gold: 0xFFD700,    // Metallic Gold
                red: 0xFF0000,     // Bright Red
                white: 0xFFFFFF
            },
            particles: 1500,       // 增加粒子数量到 1500，让树更茂密
            radius: 18,            // Base radius of tree bottom
            height: 35,            // Height of tree
            cacheKey: 'xmas_tree_photos_v1',
            cacheDuration: 7 * 24 * 60 * 60 * 1000, // 7 Days in ms
            musicCacheKey: 'xmas_music_pref_v3', // 更新版本号以适应新逻辑
            
            // 内置歌单
            playlist: [
                { name: "Last Christmas", url: "https://cdn.bornforthis.cn/mp3/LastChristmas(Single%20Version).m4a" },
                { name: "Jingle Bell Rock", url: "https://cdn.bornforthis.cn/mp3/JingleBellRock.m4a" },
                { name: "Santa Tell Me", url: "https://cdn.bornforthis.cn/mp3/SantaTellMe.m4a" },
                { name: "Feliz Navidad", url: "https://cdn.bornforthis.cn/mp3/FelizNavidad.m4a" },
                { name: "Santa Claus is Coming", url: "https://cdn.bornforthis.cn/mp3/SantaClausisComingtoTown.m4a" },
                { name: "Here Comes Santa Claus", url: "https://cdn.bornforthis.cn/mp3/HereComesSantaClaus.m4a" },
                { name: "Merry Christmas Mr Lawrence", url: "https://cdn.bornforthis.cn/mp3/MerryChristmasMrLawrence.m4a" },
                { name: "Christmas Time in My Town", url: "https://cdn.bornforthis.cn/mp3/ChristmasTimeinMyHomeTown.mp3" },
            ]
        };

        // --- Global Variables ---
        let scene, camera, renderer;
        let particles = []; // Array to store { mesh, treePos, explodePos, currentPos, speed }
        let photoMeshes = []; // Array specifically for user photos
        let time = 0;
        
        // Interaction State
        const STATE = {
            TREE: 'TREE',
            EXPLODE: 'EXPLODE',
            FOCUS: 'FOCUS'
        };
        let currentState = STATE.TREE;
        let targetState = STATE.TREE;
        
        // Hand Data
        let handPos = { x: 0, y: 0 }; // Normalized -1 to 1
        let isHandDetected = false;

        // Music State
        let isMusicPlaying = false;
        let currentMusicSource = CONFIG.playlist[0].url; // Default to first song

        // --- Initialization ---
        async function init() {
            // 1. Scene Setup
            const container = document.getElementById('canvas-container');
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0x111111); // Dark Gray instead of pure black

            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 0, 50);

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.outputColorSpace = THREE.SRGBColorSpace;
            container.appendChild(renderer.domElement);

            // 2. Lighting - 大幅增强光照
            // 2.1 强环境光，照亮所有阴影
            const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); 
            scene.add(ambientLight);

            // 2.2 主平行光（模拟阳光），提供清晰的明暗关系
            const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
            mainLight.position.set(10, 20, 20);
            scene.add(mainLight);

            // 2.3 补光灯（金色），增加华丽感
            const pointLight = new THREE.PointLight(CONFIG.colors.gold, 2, 100);
            pointLight.position.set(0, 20, 10);
            scene.add(pointLight);
            
            // 2.4 氛围灯（红绿），增加节日气氛，但调高亮度
            const redLight = new THREE.PointLight(CONFIG.colors.red, 2, 50);
            redLight.position.set(15, 10, 15);
            scene.add(redLight);
            
            const greenLight = new THREE.PointLight(CONFIG.colors.green, 2, 50);
            greenLight.position.set(-15, -10, 15);
            scene.add(greenLight);

            // 3. Post Processing Removed

            // 4. Content Generation
            createParticles();
            createStar();
            
            // 5. Load Cached Photos & Music Preference
            loadCachedPhotos();
            initAudio(); // 初始化音频和下拉菜单

            // 6. Setup MediaPipe
            await setupMediaPipe();

            // 7. Events
            window.addEventListener('resize', onWindowResize);

            // 8. Start Loop
            document.getElementById('loading').style.opacity = '0';
            setTimeout(() => document.getElementById('loading').style.display = 'none', 500);
            animate();
        }

        // --- Audio Logic ---
        
        function initAudio() {
            // 1. Populate Dropdown
            const select = document.getElementById('playlist-select');
            
            // Insert Built-in options BEFORE the "Custom" option
            CONFIG.playlist.forEach(song => {
                const option = document.createElement('option');
                option.value = song.url;
                option.innerText = `🎵 ${song.name}`;
                // Insert before the last option (which is Custom)
                select.insertBefore(option, select.lastElementChild);
            });

            // 2. Load Preferences
            const audio = document.getElementById('bg-music');
            
            try {
                const raw = localStorage.getItem(CONFIG.musicCacheKey);
                if (raw) {
                    const cache = JSON.parse(raw);
                    const now = Date.now();
                    
                    if (now - cache.timestamp <= CONFIG.cacheDuration) {
                        // 恢复音乐源
                        if (cache.customSrc) {
                            currentMusicSource = cache.customSrc;
                        }

                        // 恢复播放状态
                        if (cache.enabled) {
                            isMusicPlaying = true;
                            // Play will be called below
                        }
                    }
                }
            } catch (e) {
                console.error("Error loading music preference", e);
            }

            // 3. Apply Source
            audio.src = currentMusicSource;
            
            // 4. Sync Dropdown Value
            // Check if current source is in playlist
            const inPlaylist = CONFIG.playlist.find(p => p.url === currentMusicSource);
            if (inPlaylist) {
                select.value = currentMusicSource;
            } else {
                // It's a custom source (or stale default), strictly we don't have a value for it in select unless we add one
                // For UI consistency, if it's custom data (blob/base64), we might just show "Custom" selected, but value='custom' triggers logic.
                // We'll leave it as is, or maybe add a hidden option for "Current Custom"
                // Simple hack: if it's not in playlist, assume custom logic handled by "Custom..." click
                // But let's verify if we can set it visually.
                // For now, if custom, we won't force select value, it might show "Select Music"
            }

            // 5. Play if needed
            updateMusicUI(isMusicPlaying);
            if (isMusicPlaying) {
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log("Auto-play blocked.");
                        // Update UI to show paused since block
                        isMusicPlaying = false;
                        updateMusicUI(false);
                    });
                }
            }
        }

        // 处理下拉菜单变化
        window.handlePlaylistChange = function(selectElem) {
            const value = selectElem.value;
            
            if (value === 'custom') {
                // 用户选择“自定义”
                handleCustomMusicClick();
                // 暂时把选中的值重置回之前的（或者保持 Custom），等待用户完成上传
                // 实际上 handleCustomMusicClick 会更新源
            } else {
                // 用户选择了内置歌曲
                changeMusicSource(value, 'builtin');
            }
        };

        window.handleCustomMusicClick = function() {
            const url = prompt("请输入背景音乐链接 (MP3/M4A)\n或者点击 [取消] 上传本地文件:");
            
            if (url) {
                changeMusicSource(url.trim(), 'link');
            } else if (url === "") {
                // Cancelled or empty
                // Revert selection if possible?
            } else {
                // Clicked Cancel -> File Upload
                document.getElementById('music-input').click();
            }
        };

        window.handleMusicFileUpload = function(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(e) {
                const result = e.target.result;
                const canCache = result.length < 4 * 1024 * 1024; 
                changeMusicSource(result, 'file', canCache);
                if (!canCache) {
                    alert("音乐文件较大，仅在本次访问播放，不会缓存到本地。");
                }
            };
            reader.readAsDataURL(file);
            event.target.value = ''; 
        };

        function changeMusicSource(src, type, shouldCache = true) {
            const audio = document.getElementById('bg-music');
            currentMusicSource = src;
            audio.src = src;
            
            // Auto play
            isMusicPlaying = true;
            audio.play().catch(e => console.log("Play interrupted", e));
            updateMusicUI(true);
            
            // Update Dropdown UI to reflect change
            const select = document.getElementById('playlist-select');
            // If it's a built-in type, select matches src
            if (type === 'builtin') {
                 select.value = src;
            } else {
                // If custom, we want the dropdown to show something indicating custom?
                // The 'custom' option value is "custom", but that triggers the prompt.
                // We'll just leave it; the user hears the music.
            }
            
            // Save
            saveMusicPreference(true, shouldCache ? src : null);
        }

        window.toggleMusic = function() {
            const audio = document.getElementById('bg-music');
            isMusicPlaying = !isMusicPlaying;
            
            if (isMusicPlaying) {
                audio.play();
            } else {
                audio.pause();
            }
            
            updateMusicUI(isMusicPlaying);
            // Save state (keep existing src)
            saveMusicPreference(isMusicPlaying, null, true); 
        };

        function updateMusicUI(isPlaying) {
            const btn = document.getElementById('music-btn');
            if (isPlaying) {
                btn.innerHTML = '<span>🔊</span>';
                btn.classList.add('active');
            } else {
                btn.innerHTML = '<span>🔇</span>';
                btn.classList.remove('active');
            }
        }

        // srcData: 如果不为 null，则更新 customSrc；如果为 null 且 updateOnlyState=false，则清除 customSrc
        // updateOnlyState: 如果为 true，只更新开关状态，不碰 source
        function saveMusicPreference(isEnabled, srcData = null, updateOnlyState = false) {
            try {
                let dataToSave = {
                    timestamp: Date.now(),
                    enabled: isEnabled,
                    customSrc: null
                };

                if (updateOnlyState) {
                    const oldRaw = localStorage.getItem(CONFIG.musicCacheKey);
                    if (oldRaw) {
                        const old = JSON.parse(oldRaw);
                        dataToSave.customSrc = old.customSrc;
                    }
                } else {
                    dataToSave.customSrc = srcData;
                }

                localStorage.setItem(CONFIG.musicCacheKey, JSON.stringify(dataToSave));
            } catch (e) {
                console.warn("Failed to save music preference", e);
                // Fallback: save disabled state without source
                try {
                     const fallbackData = {
                        timestamp: Date.now(),
                        enabled: isEnabled,
                        customSrc: null 
                    };
                    localStorage.setItem(CONFIG.musicCacheKey, JSON.stringify(fallbackData));
                } catch(e2) {}
            }
        }

        // --- Particle System Logic ---

        // 移除旧的螺旋线逻辑，改用体积计算
        function getConeVolumePosition(h, maxR) {
            // h is 0 (bottom) to 1 (top)
            
            // 当前高度的圆锥截面半径
            const rAtHeight = maxR * (1 - h);
            
            // 随机分布在圆截面内，但更倾向于外表面以保持树的形状
            // 使用 Math.pow 调整分布：指数越小越均匀，指数越大越集中在边缘
            const r = rAtHeight * Math.pow(Math.random(), 0.4); 
            
            const angle = Math.random() * Math.PI * 2;
            
            const x = r * Math.cos(angle);
            const z = r * Math.sin(angle);
            
            // 将高度映射到实际坐标 y
            const y = -CONFIG.height/2 + h * CONFIG.height;
            
            return new THREE.Vector3(x, y, z);
        }

        // 新增：专门用于散开形态的球体分布算法 (圆形)
        function getExplodeSpherePosition(maxRadius) {
            // 球坐标随机分布
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            
            // 使用立方根确保在体积内均匀分布（不仅仅是表面，也不仅仅是核心）
            const r = maxRadius * Math.cbrt(Math.random()); 
            
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);
            
            return new THREE.Vector3(x, y, z);
        }

        // 新增：专门用于照片的均匀分布算法 (基于黄金角度螺旋)
        // 这能确保无论上传多少张照片，它们都能均匀地分布在树的表面，不会扎堆
        function getPhotoSurfacePosition(index) {
            // 黄金分割比，用于打散高度和角度
            const goldenRatio = 0.61803398875;
            
            // 高度分布算法：
            // 使用 index * goldenRatio 取模，得到一个在 0-1 之间均匀跳跃的伪随机序列
            // 我们限制范围在 0.15 ~ 0.85 之间，避免照片出现在树尖太高或树底太低的位置
            const h = ((index * goldenRatio) % 0.7) + 0.15; 
            
            // 角度分布：黄金角度 (约 137.5 度)
            // 保证任意相邻或相近的照片在水平方向上都相隔甚远，360度无死角覆盖
            const angle = index * Math.PI * 2 * goldenRatio;
            
            // 半径计算：基于圆锥表面
            // CONFIG.radius 是底部半径
            const rBase = CONFIG.radius * (1 - h);
            const r = rBase + 2.5; // +2.5 让照片明显悬浮在树叶表面之外，作为装饰重点
            
            const x = r * Math.cos(angle);
            const z = r * Math.sin(angle);
            const y = -CONFIG.height/2 + h * CONFIG.height;
            
            return new THREE.Vector3(x, y, z);
        }

        function createParticles() {
            const geometrySphere = new THREE.SphereGeometry(0.4, 32, 32); 
            const geometryCube = new THREE.BoxGeometry(0.8, 0.8, 0.8); // 稍微加大方块，充当树叶
            const geometryTetra = new THREE.TetrahedronGeometry(0.6); // 增加四面体作为另一种树叶
            
            // Materials - 更亮、更鲜艳的材质设置
            const matGold = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.gold, 
                roughness: 0.2, 
                metalness: 0.6, 
                emissive: 0x443300 
            });
            const matRed = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.red, 
                roughness: 0.3, 
                metalness: 0.3, 
                emissive: 0x330000
            });
            const matGreen = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.green, 
                roughness: 0.8, // 哑光，像叶子
                metalness: 0.0 
            });

            for (let i = 0; i < CONFIG.particles; i++) {
                let mesh;
                const type = Math.random();
                
                // 调整比例：80% 是绿色枝叶，20% 是装饰品
                if (type < 0.6) {
                    // Green filler (Box - 树叶)
                    mesh = new THREE.Mesh(geometryCube, matGreen);
                    mesh.rotation.set(Math.random(), Math.random(), Math.random());
                } else if (type < 0.8) {
                     // Green filler 2 (Tetrahedron - 针叶质感)
                    mesh = new THREE.Mesh(geometryTetra, matGreen);
                    mesh.rotation.set(Math.random(), Math.random(), Math.random());
                } else if (type < 0.9) {
                    // Gold ornaments (Sphere)
                    mesh = new THREE.Mesh(geometrySphere, matGold);
                    mesh.scale.setScalar(1.5);
                } else {
                    // Red ornaments (Sphere)
                    mesh = new THREE.Mesh(geometrySphere, matRed);
                    mesh.scale.setScalar(1.2);
                }

                // Tree Position (Target) - 使用新的体积填充算法
                const h = Math.random(); // 0 到 1 的随机高度
                const treePos = getConeVolumePosition(h, CONFIG.radius);

                // Explode Position (Target) - 修改为球体分布
                const explodePos = getExplodeSpherePosition(35);

                // Initial Pos
                mesh.position.copy(treePos);
                
                scene.add(mesh);

                particles.push({
                    mesh: mesh,
                    treePos: treePos,
                    explodePos: explodePos,
                    velocity: new THREE.Vector3(),
                    wobbleOffset: Math.random() * 100
                });
            }
        }

        function createStar() {
            // Simple Star on top
            const geometry = new THREE.OctahedronGeometry(1.5, 0);
            const material = new THREE.MeshStandardMaterial({
                color: 0xFFFF00, // Bright Yellow
                emissive: 0xFFD700,
                emissiveIntensity: 1, // Reduced slightly as bloom is gone, but still bright
                roughness: 0.2,
                metalness: 0.8
            });
            const star = new THREE.Mesh(geometry, material);
            star.position.set(0, CONFIG.height/2 + 2, 0);
            
            // Star is just a special particle
            scene.add(star);
            particles.push({
                mesh: star,
                treePos: new THREE.Vector3(0, CONFIG.height/2 + 2, 0),
                explodePos: new THREE.Vector3(0, 10, 0),
                wobbleOffset: 0
            });
        }

        // --- Photo Upload & Cache Logic ---

        // 清除现有的照片（从场景和内存中）
        window.clearCachedPhotos = function() {
            // 1. Remove from scene and memory
            // We iterate backwards to remove safely
            for (let i = particles.length - 1; i >= 0; i--) {
                if (particles[i].isPhoto) {
                    scene.remove(particles[i].mesh);
                    if (particles[i].mesh.material.map) {
                        particles[i].mesh.material.map.dispose();
                    }
                    particles[i].mesh.material.dispose();
                    particles[i].mesh.geometry.dispose();
                    particles.splice(i, 1);
                }
            }
            photoMeshes = [];

            // 2. Clear LocalStorage
            try {
                localStorage.removeItem(CONFIG.cacheKey);
                console.log("Cache cleared");
            } catch (e) {
                console.error("Failed to clear cache", e);
            }
        };

        // 处理用户上传
        window.handlePhotoUpload = async function(event) {
            const files = event.target.files;
            if (!files.length) return;

            // 覆盖模式：上传新照片前清除旧的
            window.clearCachedPhotos();

            const imagePromises = Array.from(files).map(processFileToDataURL);
            
            try {
                // 等待所有图片处理完成（压缩 + 转Base64）
                const base64Images = await Promise.all(imagePromises);
                
                // 创建 Mesh
                base64Images.forEach(imgData => {
                    const img = new Image();
                    img.src = imgData;
                    img.onload = () => createPhotoMesh(img);
                });

                // 保存到缓存
                saveToCache(base64Images);

            } catch (err) {
                console.error("Error processing images:", err);
                alert("图片处理失败，请重试");
            }

            // 重置 input 以便允许重复上传相同文件
            event.target.value = '';
        };

        // 将文件读取并压缩为 Base64
        function processFileToDataURL(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const img = new Image();
                    img.src = e.target.result;
                    img.onload = () => {
                        // 创建 Canvas 进行压缩
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        
                        // 最大尺寸限制 (避免 localStorage 爆满)
                        const MAX_SIZE = 800; 
                        let width = img.width;
                        let height = img.height;

                        if (width > height) {
                            if (width > MAX_SIZE) {
                                height *= MAX_SIZE / width;
                                width = MAX_SIZE;
                            }
                        } else {
                            if (height > MAX_SIZE) {
                                width *= MAX_SIZE / height;
                                height = MAX_SIZE;
                            }
                        }

                        canvas.width = width;
                        canvas.height = height;
                        ctx.drawImage(img, 0, 0, width, height);

                        // 转换为 JPEG Base64 (0.8 质量)
                        const dataURL = canvas.toDataURL('image/jpeg', 0.8);
                        resolve(dataURL);
                    };
                    img.onerror = reject;
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        }

        // 保存到 LocalStorage
        function saveToCache(imagesData) {
            const cacheData = {
                timestamp: Date.now(),
                images: imagesData
            };
            try {
                localStorage.setItem(CONFIG.cacheKey, JSON.stringify(cacheData));
            } catch (e) {
                console.warn("Storage quota exceeded or error", e);
                alert("照片过多或过大，部分缓存可能失败");
            }
        }

        // 加载缓存
        function loadCachedPhotos() {
            try {
                const raw = localStorage.getItem(CONFIG.cacheKey);
                if (!raw) return;

                const cache = JSON.parse(raw);
                const now = Date.now();

                // 检查有效期 (7天)
                if (now - cache.timestamp > CONFIG.cacheDuration) {
                    console.log("Cache expired, clearing...");
                    localStorage.removeItem(CONFIG.cacheKey);
                    return;
                }

                if (cache.images && Array.isArray(cache.images)) {
                    console.log(`Loading ${cache.images.length} photos from cache...`);
                    cache.images.forEach(imgData => {
                        const img = new Image();
                        img.src = imgData;
                        img.onload = () => createPhotoMesh(img);
                    });
                }
            } catch (e) {
                console.error("Failed to load cache", e);
            }
        }

        function createPhotoMesh(image) {
            const texture = new THREE.Texture(image);
            texture.needsUpdate = true;
            texture.colorSpace = THREE.SRGBColorSpace;

            // Maintain aspect ratio
            const aspect = image.width / image.height;
            const w = 4;
            const h = 4 / aspect;

            const geometry = new THREE.PlaneGeometry(w, h);
            // Use BasicMaterial for photos so they are always fully bright and not affected by shadows
            const material = new THREE.MeshBasicMaterial({ 
                map: texture, 
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 1.0 
            });

            const mesh = new THREE.Mesh(geometry, material);
            
            // Add a border (gold frame)
            const frameGeo = new THREE.BoxGeometry(w + 0.2, h + 0.2, 0.1);
            const frameMat = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.gold, 
                metalness: 0.8, 
                roughness: 0.2,
                emissive: 0x332200
            });
            const frame = new THREE.Mesh(frameGeo, frameMat);
            frame.position.z = -0.06;
            mesh.add(frame);

            // 修改位置计算逻辑：使用确定性的黄金螺旋算法
            // 传入当前照片的总数作为 index，确保每张新照片都有唯一且均匀的位置
            const index = photoMeshes.length;
            const treePos = getPhotoSurfacePosition(index);

            // Explode Position (Target) - 修改为球体分布
            const explodePos = getExplodeSpherePosition(35);

            mesh.position.copy(explodePos); // Start exploded if added later, or logic will fix it
            scene.add(mesh);

            photoMeshes.push({
                mesh: mesh,
                treePos: treePos,
                explodePos: explodePos,
                wobbleOffset: Math.random() * 100,
                isPhoto: true
            });
            
            // Add to main particles array for movement management
            particles.push(photoMeshes[photoMeshes.length-1]);
        }


        // --- MediaPipe Logic ---
        async function setupMediaPipe() {
            const video = document.getElementById('video-feed');

            // Access Global Hands Class
            const hands = new window.Hands({locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
            }});

            hands.setOptions({
                maxNumHands: 1,
                modelComplexity: 1,
                minDetectionConfidence: 0.7,
                minTrackingConfidence: 0.6
            });

            hands.onResults(onHandsResults);

            // Access Webcam
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                video.srcObject = stream;
                await video.play();

                // Start processing loop specific to MediaPipe
                async function detectionLoop() {
                    if (video.currentTime > 0 && !video.paused && !video.ended) {
                        await hands.send({image: video});
                    }
                    requestAnimationFrame(detectionLoop);
                }
                detectionLoop();
            } catch (err) {
                console.error("Camera access denied or failed", err);
                document.getElementById('loading-text').innerText = "未检测到摄像头，请检查权限。应用将自动运行演示模式。";
                setTimeout(() => {
                    document.getElementById('loading').style.display = 'none';
                    // Auto demo mode logic could go here
                }, 2000);
            }
        }

        function onHandsResults(results) {
            const modeDisplay = document.getElementById('mode-display');
            
            if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                isHandDetected = true;
                const landmarks = results.multiHandLandmarks[0];

                // 1. Calculate Hand Center (for rotation)
                // Wrist is 0, Middle Finger MCP is 9
                const cx = landmarks[9].x;
                const cy = landmarks[9].y;
                handPos.x = (cx - 0.5) * 2; // -1 to 1
                handPos.y = (cy - 0.5) * 2;

                // 2. Gesture Recognition
                const state = detectGesture(landmarks);
                
                if (state) {
                    targetState = state;
                    
                    // UI Update
                    let text = "未知";
                    let bg = "#333";
                    if (state === STATE.TREE) { text = "🌲 聚合形态"; bg = CONFIG.colors.green; }
                    if (state === STATE.EXPLODE) { text = "✨ 散开形态"; bg = "#444"; }
                    if (state === STATE.FOCUS) { text = "📷 聚焦照片"; bg = CONFIG.colors.red; }
                    
                    modeDisplay.innerText = text;
                    modeDisplay.style.borderColor = (state === STATE.FOCUS) ? '#fff' : CONFIG.colors.gold;
                }

            } else {
                isHandDetected = false;
                // Optional: Slowly drift back to tree if no hand? Or stay in last state.
                // Keeping last state is better for UX.
            }
        }

        function detectGesture(lm) {
            // Helper to check if finger is open
            const isFingerOpen = (tipIdx, pipIdx) => lm[tipIdx].y < lm[pipIdx].y; // Note: Y is inverted in some contexts, but MediaPipe y=0 is top. So tip < pip means finger up.
            // Actually, MediaPipe coords: 0,0 is top-left.
            // This assumes hand is upright. Let's use distance from wrist (0).
            
            const dist = (i, j) => Math.sqrt(Math.pow(lm[i].x - lm[j].x, 2) + Math.pow(lm[i].y - lm[j].y, 2));
            
            const wrist = 0;
            const tips = [8, 12, 16, 20];
            const pips = [6, 10, 14, 18];
            
            // Check Fingers Extended
            let extendedCount = 0;
            // Thumb is special, check x distance relative to wrist/index for "openness"
            if (dist(4, 17) > 0.2) extendedCount++; // Rough thumb check

            for (let k=0; k<4; k++) {
                // If tip is further from wrist than PIP is from wrist
                if (dist(wrist, tips[k]) > dist(wrist, pips[k]) * 1.2) {
                    extendedCount++;
                }
            }

            // Pinch Detection (Thumb 4 and Index 8)
            const pinchDist = dist(4, 8);

            // LOGIC TREE
            // 稍微放宽捏合的判定距离 (0.05 -> 0.08)，让操作更灵敏
            if (pinchDist < 0.08) {
                return STATE.FOCUS;
            } else if (extendedCount >= 4) {
                return STATE.EXPLODE;
            } else if (extendedCount <= 1) {
                return STATE.TREE;
            }
            
            return null; // No change / Transition
        }


        // --- Animation Loop ---
        function animate() {
            requestAnimationFrame(animate);
            time += 0.01;

            // 1. Smooth State Transition
            if (currentState !== targetState) {
                currentState = targetState;
                
                // If entering focus mode, pick a random photo to bring forward if any exist
                if (currentState === STATE.FOCUS && photoMeshes.length > 0) {
                     // Reset all photos first
                     photoMeshes.forEach(p => p.focusOffset = null);
                     // Pick one
                     const luckyPhoto = photoMeshes[Math.floor(Math.random() * photoMeshes.length)];
                     luckyPhoto.focusOffset = true;
                }
            }

            // 2. Camera Controls
            // Default rotation
            let camX = Math.sin(time * 0.2) * 50;
            let camZ = Math.cos(time * 0.2) * 50;
            let camY = 0;

            // Hand Influence
            if (currentState === STATE.EXPLODE && isHandDetected) {
                // Map hand x (-1 to 1) to rotation angle
                const angle = handPos.x * Math.PI; 
                camX = Math.sin(angle) * 60;
                camZ = Math.cos(angle) * 60;
                camY = handPos.y * 30;
            } else if (currentState === STATE.FOCUS) {
                // Zoom in
                camX *= 0.3;
                camZ *= 0.3;
            }

            // Lerp Camera Position
            camera.position.x += (camX - camera.position.x) * 0.05;
            camera.position.y += (camY - camera.position.y) * 0.05;
            camera.position.z += (camZ - camera.position.z) * 0.05;
            camera.lookAt(0, 0, 0);


            // 3. Particle Animation
            particles.forEach(p => {
                let target;

                if (currentState === STATE.TREE) {
                    target = p.treePos;
                } else if (currentState === STATE.EXPLODE) {
                    target = p.explodePos;
                } else if (currentState === STATE.FOCUS) {
                    // In focus mode, keep background exploded but push back slightly
                    target = p.explodePos; 
                    
                    if (p.focusOffset) {
                        // This is the chosen photo
                        // 关键修改：动态计算目标位置，使其始终位于相机正前方
                        // 获取从原点指向相机的方向向量
                        const camDir = camera.position.clone().normalize();
                        // 将照片放置在距离原点 10 单位处（朝向相机方向）
                        // 这样无论相机转到哪里，照片都会在 View 的中心
                        const targetPos = camDir.multiplyScalar(10);

                        p.mesh.position.lerp(targetPos, 0.1);
                        
                        // FIX: 使用 copy(camera.quaternion) 确保照片绝对正对屏幕，不歪不倒
                        p.mesh.quaternion.copy(camera.quaternion);
                        return; // Skip standard update
                    }
                }

                // Add floating effect
                const wobble = Math.sin(time * 2 + p.wobbleOffset) * 0.5;
                const finalTarget = target.clone();
                if (currentState !== STATE.TREE) {
                    finalTarget.y += wobble;
                }

                // Move mesh
                p.mesh.position.lerp(finalTarget, 0.04);
                
                // Rotation
                if (!p.isPhoto) {
                    p.mesh.rotation.x += 0.01;
                    p.mesh.rotation.y += 0.01;
                } else if (currentState === STATE.TREE) {
                    // Photos in tree mode face out from center
                    // 树形状态下，让照片背面朝向中心，正面朝外，保持直立
                    p.mesh.lookAt(new THREE.Vector3(p.mesh.position.x * 2, p.mesh.position.y, p.mesh.position.z * 2));
                } else {
                    // FIX: Photos in explode/focus mode
                    // 散开状态下，也强制让照片正对屏幕，防止出现倒置或歪斜
                    p.mesh.quaternion.copy(camera.quaternion);
                }
            });

            // 普通渲染
            renderer.render(scene, camera);
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        // Start
        init();

    </script>
</body>
</html>
```

@tab 雪花版本

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Gesture Controlled Christmas Tree</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            background-color: #050510; /* 深蓝夜空色 */
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #fff;
        }

        #canvas-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background: radial-gradient(circle at center, #1a1a2e 0%, #000000 100%); /* 渐变背景 */
        }

        /* UI Overlay */
        #ui-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
            pointer-events: none; /* Let clicks pass through to canvas if needed */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 20px;
            box-sizing: border-box;
        }

        .header {
            text-align: left;
            text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
        }

        h1 {
            margin: 0;
            font-weight: 300;
            color: #FFD700; /* Gold */
            letter-spacing: 2px;
            font-size: 24px;
        }

        p.subtitle {
            margin: 5px 0 0 0;
            color: #aaa;
            font-size: 14px;
        }

        /* Status & Instructions & Buttons Container */
        .status-panel {
            position: absolute;
            top: 20px;
            right: 20px;
            text-align: right;
            display: flex;
            flex-direction: column;
            align-items: flex-end; /* Right align everything */
            gap: 12px;
        }

        .status-tag {
            display: inline-block;
            padding: 8px 16px;
            background: rgba(20, 30, 20, 0.8);
            border: 1px solid #FFD700;
            border-radius: 20px;
            color: #FFD700;
            font-weight: bold;
            font-size: 14px;
            transition: all 0.3s ease;
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
        }

        .instructions {
            background: rgba(0, 0, 0, 0.6);
            padding: 15px;
            border-radius: 8px; /* Slightly squarer for tech feel */
            font-size: 12px;
            color: #ddd;
            width: 200px; /* Fixed width for alignment */
            pointer-events: auto;
            backdrop-filter: blur(10px);
            border-left: 2px solid #C41E3A; /* Red accent */
            border-right: 1px solid rgba(255, 255, 255, 0.1);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .instruction-item {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            justify-content: space-between; /* Space out icon and text */
        }
        
        .icon { font-size: 16px; width: 20px; text-align: center;}

        /* Upload Buttons - New Elegant Style */
        .upload-container {
            pointer-events: auto;
            display: flex;
            flex-direction: column;
            gap: 8px;
            align-items: flex-end;
            margin-top: 5px;
            width: 220px; /* Give it a bit more width for the dropdown */
        }

        .btn {
            background: rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(255, 215, 0, 0.5); /* Subtle Gold Border */
            color: #FFD700;
            padding: 8px 20px;
            border-radius: 4px; /* Minimalist radius */
            cursor: pointer;
            font-size: 12px;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            backdrop-filter: blur(5px);
            width: 100%; /* Match width */
            text-align: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            box-sizing: border-box; /* Ensure padding doesn't increase width */
        }

        .btn:hover {
            background: rgba(255, 215, 0, 0.15);
            border-color: #FFD700;
            box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
            transform: translateX(-5px); /* Subtle slide left */
        }

        .btn.active {
            background: rgba(255, 215, 0, 0.2);
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.4);
            border-color: #FFD700;
        }

        /* Group music buttons slightly */
        .music-group {
            display: flex;
            gap: 5px;
            width: 100%;
        }
        
        .music-group .btn {
            flex: 1; /* Split space */
            padding: 8px 5px; /* Smaller padding */
        }
        
        #music-btn {
            flex: 0 0 40%; /* Play button takes less space */
        }
        
        #playlist-select {
            flex: 1;
            appearance: none; /* Remove default arrow */
            -webkit-appearance: none;
            text-align: left;
            text-align-last: center;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FFD700' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 8px center;
            background-size: 12px;
            padding-right: 25px; /* Space for arrow */
            padding-left: 10px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #FFD700;
        }
        
        #playlist-select option {
            background: #222;
            color: #FFD700;
            padding: 5px;
        }

        /* Differentiate clear button slightly */
        #clear-btn {
            border-color: rgba(255, 255, 255, 0.3);
            color: #aaa;
        }
        
        #clear-btn:hover {
            border-color: #fff;
            color: #fff;
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }

        #file-input { display: none; }
        #music-input { display: none; }

        /* Webcam feedback (hidden but processed) */
        #video-feed {
            position: absolute;
            bottom: 20px;
            left: 20px;
            width: 160px;
            height: 120px;
            border-radius: 10px;
            transform: scaleX(-1); /* Mirror */
            border: 2px solid #FFD700;
            opacity: 0.7;
            z-index: 20;
            object-fit: cover;
            display: block; /* Required for MediaPipe */
        }

        /* Loading Screen */
        #loading {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            z-index: 100;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #FFD700;
            transition: opacity 0.5s;
        }

        .loader {
            border: 4px solid #333;
            border-top: 4px solid #FFD700;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin-bottom: 15px;
        }

        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

    </style>
    <!-- MediaPipe Hands Global Script (Fix for Module Error) -->
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/hands.js" crossorigin="anonymous"></script>

    <!-- Import Maps for Three.js and Addons -->
    <script type="importmap">
        {
            "imports": {
                "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
                "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"
            }
        }
    </script>
</head>
<body>

    <!-- Audio Element -->
    <audio id="bg-music" loop>
        <source src="https://cdn.bornforthis.cn/mp3/LastChristmas(Single%20Version).m4a" type="audio/mp4">
        您的浏览器不支持音频元素。
    </audio>

    <!-- Loading Screen -->
    <div id="loading">
        <div class="loader"></div>
        <div id="loading-text">正在初始化视觉引擎与AI模型...</div>
    </div>

    <!-- Video Element for MediaPipe (Visible for user feedback) -->
    <video id="video-feed" playsinline></video>

    <!-- UI Layer -->
    <div id="ui-layer">
        <div class="header">
            <h1>CHRISTMAS GESTURE</h1>
            <p class="subtitle">MediaPipe & Three.js WebGL Experience</p>
        </div>

        <div class="status-panel">
            <div id="mode-display" class="status-tag">等待手势...</div>
            
            <div class="instructions">
                <div class="instruction-item"><span>✊ 握拳</span> <span>聚合形态</span></div>
                <div class="instruction-item"><span>🖐 张开</span> <span>散开形态</span></div>
                <div class="instruction-item"><span>🤏 捏合</span> <span>特写照片</span></div>
                <div class="instruction-item"><span>👋 移动</span> <span>旋转视角</span></div>
            </div>

            <div class="upload-container">
                <button id="upload-btn" class="btn" onclick="document.getElementById('file-input').click()">
                    <span>📷</span> 上传照片
                </button>
                
                <!-- Music Controls -->
                <div class="music-group">
                    <button id="music-btn" class="btn" onclick="toggleMusic()">
                        <span>🔇</span>
                    </button>
                    <!-- 下拉选择框替代原来的“换音乐”按钮 -->
                    <select id="playlist-select" class="btn" onchange="handlePlaylistChange(this)">
                        <option disabled>-- 选择背景音乐 --</option>
                        <!-- Options will be populated by JS -->
                        <option value="custom">📂 自定义...</option>
                    </select>
                </div>

                <button id="clear-btn" class="btn" onclick="clearCachedPhotos()">
                    <span>🗑️</span> 清除照片
                </button>
                
                <input type="file" id="file-input" accept="image/*" multiple onchange="handlePhotoUpload(event)">
                <!-- 新增音乐文件输入框 -->
                <input type="file" id="music-input" accept="audio/*, .mp3, .m4a" onchange="handleMusicFileUpload(event)">
            </div>
        </div>
    </div>

    <!-- 3D Canvas -->
    <div id="canvas-container"></div>

    <!-- Main Logic -->
    <script type="module">
        import * as THREE from 'three';

        // --- Configuration & Constants ---
        const CONFIG = {
            colors: {
                green: 0x228B22,   // Forest Green (Brighter)
                gold: 0xFFD700,    // Metallic Gold
                red: 0xFF0000,     // Bright Red
                white: 0xFFFFFF,
                // 新增灯光颜色池
                lights: [0xFF0000, 0xFFFF00, 0x00BFFF, 0xFF69B4, 0xFFA500] 
            },
            particles: 1800,       // 稍微增加粒子数量到 1800，容纳更多装饰
            radius: 18,            // Base radius of tree bottom
            height: 35,            // Height of tree
            cacheKey: 'xmas_tree_photos_v1',
            cacheDuration: 7 * 24 * 60 * 60 * 1000, // 7 Days in ms
            musicCacheKey: 'xmas_music_pref_v3', // 更新版本号以适应新逻辑
            
            // 内置歌单
            playlist: [
                { name: "Last Christmas", url: "https://cdn.bornforthis.cn/mp3/LastChristmas(Single%20Version).m4a" },
                { name: "Jingle Bell Rock", url: "https://cdn.bornforthis.cn/mp3/JingleBellRock.m4a" },
                { name: "Santa Tell Me", url: "https://cdn.bornforthis.cn/mp3/SantaTellMe.m4a" },
                { name: "Feliz Navidad", url: "https://cdn.bornforthis.cn/mp3/FelizNavidad.m4a" },
                { name: "Santa Claus is Coming", url: "https://cdn.bornforthis.cn/mp3/SantaClausisComingtoTown.m4a" },
                { name: "Here Comes Santa Claus", url: "https://cdn.bornforthis.cn/mp3/HereComesSantaClaus.m4a" },
                { name: "Merry Christmas Mr Lawrence", url: "https://cdn.bornforthis.cn/mp3/MerryChristmasMrLawrence.m4a" },
                { name: "Christmas Time in My Town", url: "https://cdn.bornforthis.cn/mp3/ChristmasTimeinMyHomeTown.mp3" },
            ]
        };

        // --- Global Variables ---
        let scene, camera, renderer;
        let particles = []; // Array to store { mesh, treePos, explodePos, currentPos, speed }
        let photoMeshes = []; // Array specifically for user photos
        let twinkleLights = []; // 专门存储需要闪烁的灯光粒子
        
        // 新增的特效系统
        let snowParticles, magicDust;
        
        let time = 0;
        
        // Interaction State
        const STATE = {
            TREE: 'TREE',
            EXPLODE: 'EXPLODE',
            FOCUS: 'FOCUS'
        };
        let currentState = STATE.TREE;
        let targetState = STATE.TREE;
        
        // Hand Data
        let handPos = { x: 0, y: 0 }; // Normalized -1 to 1
        let isHandDetected = false;

        // Music State
        let isMusicPlaying = false;
        let currentMusicSource = CONFIG.playlist[0].url; // Default to first song

        // --- Initialization ---
        async function init() {
            // 1. Scene Setup
            const container = document.getElementById('canvas-container');
            scene = new THREE.Scene();
            // 移除纯色背景，因为我们在 CSS 里用了渐变，这里设为透明或保留雾效果
            scene.background = null; 
            // 增加一点雾气增加深邃感
            scene.fog = new THREE.FogExp2(0x050510, 0.01);

            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 0, 50);

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.outputColorSpace = THREE.SRGBColorSpace;
            container.appendChild(renderer.domElement);

            // 2. Lighting - 大幅增强光照
            // 2.1 强环境光，照亮所有阴影
            const ambientLight = new THREE.AmbientLight(0xffffff, 1.0); 
            scene.add(ambientLight);

            // 2.2 主平行光（模拟阳光），提供清晰的明暗关系
            const mainLight = new THREE.DirectionalLight(0xffffff, 2.0);
            mainLight.position.set(10, 20, 20);
            scene.add(mainLight);

            // 2.3 补光灯（金色），增加华丽感
            const pointLight = new THREE.PointLight(CONFIG.colors.gold, 1.5, 100);
            pointLight.position.set(0, 20, 10);
            scene.add(pointLight);
            
            // 2.4 氛围灯（红绿），增加节日气氛，但调高亮度
            const redLight = new THREE.PointLight(CONFIG.colors.red, 1.5, 50);
            redLight.position.set(15, 10, 15);
            scene.add(redLight);
            
            const greenLight = new THREE.PointLight(CONFIG.colors.green, 1.5, 50);
            greenLight.position.set(-15, -10, 15);
            scene.add(greenLight);

            // 3. Post Processing Removed

            // 4. Content Generation
            createParticles();
            createStar();
            createEnvironment(); // 新增：星空
            createSnow();        // 新增：雪花
            createMagicDust();   // 新增：魔法金粉
            
            // 5. Load Cached Photos & Music Preference
            loadCachedPhotos();
            initAudio(); // 初始化音频和下拉菜单

            // 6. Setup MediaPipe
            await setupMediaPipe();

            // 7. Events
            window.addEventListener('resize', onWindowResize);

            // 8. Start Loop
            document.getElementById('loading').style.opacity = '0';
            setTimeout(() => document.getElementById('loading').style.display = 'none', 500);
            animate();
        }

        // --- MediaPipe Logic ---
        async function setupMediaPipe() {
            const video = document.getElementById('video-feed');

            // Access Global Hands Class
            const hands = new window.Hands({locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
            }});

            hands.setOptions({
                maxNumHands: 1,
                modelComplexity: 1,
                minDetectionConfidence: 0.7,
                minTrackingConfidence: 0.6
            });

            hands.onResults(onHandsResults);

            // Access Webcam
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                video.srcObject = stream;
                await video.play();

                // Start processing loop specific to MediaPipe
                async function detectionLoop() {
                    if (video.currentTime > 0 && !video.paused && !video.ended) {
                        await hands.send({image: video});
                    }
                    requestAnimationFrame(detectionLoop);
                }
                detectionLoop();
            } catch (err) {
                console.error("Camera access denied or failed", err);
                document.getElementById('loading-text').innerText = "未检测到摄像头，请检查权限。应用将自动运行演示模式。";
                setTimeout(() => {
                    document.getElementById('loading').style.display = 'none';
                    // Auto demo mode logic could go here
                }, 2000);
            }
        }

        function onHandsResults(results) {
            const modeDisplay = document.getElementById('mode-display');
            
            if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                isHandDetected = true;
                const landmarks = results.multiHandLandmarks[0];

                // 1. Calculate Hand Center (for rotation)
                // Wrist is 0, Middle Finger MCP is 9
                const cx = landmarks[9].x;
                const cy = landmarks[9].y;
                handPos.x = (cx - 0.5) * 2; // -1 to 1
                handPos.y = (cy - 0.5) * 2;

                // 2. Gesture Recognition
                const state = detectGesture(landmarks);
                
                if (state) {
                    targetState = state;
                    
                    // UI Update
                    let text = "未知";
                    let bg = "#333";
                    if (state === STATE.TREE) { text = "🌲 聚合形态"; bg = CONFIG.colors.green; }
                    if (state === STATE.EXPLODE) { text = "✨ 散开形态"; bg = "#444"; }
                    if (state === STATE.FOCUS) { text = "📷 聚焦照片"; bg = CONFIG.colors.red; }
                    
                    modeDisplay.innerText = text;
                    modeDisplay.style.borderColor = (state === STATE.FOCUS) ? '#fff' : CONFIG.colors.gold;
                }

            } else {
                isHandDetected = false;
            }
        }

        function detectGesture(lm) {
            const dist = (i, j) => Math.sqrt(Math.pow(lm[i].x - lm[j].x, 2) + Math.pow(lm[i].y - lm[j].y, 2));
            const wrist = 0;
            const tips = [8, 12, 16, 20];
            const pips = [6, 10, 14, 18];
            
            // Check Fingers Extended
            let extendedCount = 0;
            if (dist(4, 17) > 0.2) extendedCount++; // Rough thumb check

            for (let k=0; k<4; k++) {
                if (dist(wrist, tips[k]) > dist(wrist, pips[k]) * 1.2) {
                    extendedCount++;
                }
            }

            // Pinch Detection (Thumb 4 and Index 8)
            const pinchDist = dist(4, 8);

            if (pinchDist < 0.08) {
                return STATE.FOCUS;
            } else if (extendedCount >= 4) {
                return STATE.EXPLODE;
            } else if (extendedCount <= 1) {
                return STATE.TREE;
            }
            
            return null; 
        }

        // --- Audio Logic ---
        
        function initAudio() {
            // 1. Populate Dropdown
            const select = document.getElementById('playlist-select');
            
            // Insert Built-in options BEFORE the "Custom" option
            CONFIG.playlist.forEach(song => {
                const option = document.createElement('option');
                option.value = song.url;
                option.innerText = `🎵 ${song.name}`;
                // Insert before the last option (which is Custom)
                select.insertBefore(option, select.lastElementChild);
            });

            // 2. Error Handling & Fallback
            const audio = document.getElementById('bg-music');
            
            // Critical fix for "The element has no supported sources"
            audio.addEventListener('error', function(e) {
                console.warn("Audio load error:", e);
                const src = audio.src;
                // If it failed and we had crossorigin set, try removing it (fallback mode)
                // This means audio won't be recordable via WebAudio, but at least it plays.
                if (audio.crossOrigin === 'anonymous') {
                    console.log("Attempting fallback: Removing crossorigin attribute...");
                    audio.removeAttribute('crossorigin');
                    audio.src = src; // Retry
                    audio.load();
                    if (isMusicPlaying) audio.play().catch(err => console.log("Fallback play error:", err));
                }
            }, true); // Capture phase

            // 3. Load Preferences
            try {
                const raw = localStorage.getItem(CONFIG.musicCacheKey);
                if (raw) {
                    const cache = JSON.parse(raw);
                    const now = Date.now();
                    
                    if (now - cache.timestamp <= CONFIG.cacheDuration) {
                        // 恢复音乐源
                        if (cache.customSrc) {
                            currentMusicSource = cache.customSrc;
                        }

                        // 恢复播放状态
                        if (cache.enabled) {
                            isMusicPlaying = true;
                            // Play will be called below
                        }
                    }
                }
            } catch (e) {
                console.error("Error loading music preference", e);
            }

            // 4. Apply Source
            audio.src = currentMusicSource;
            
            // 5. Sync Dropdown Value
            // Check if current source is in playlist
            const inPlaylist = CONFIG.playlist.find(p => p.url === currentMusicSource);
            if (inPlaylist) {
                select.value = currentMusicSource;
            } else {
                // If not in playlist, it stays default or handled by custom
            }

            // 6. Play if needed
            updateMusicUI(isMusicPlaying);
            if (isMusicPlaying) {
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log("Auto-play blocked or source invalid:", error);
                        // Don't turn off isMusicPlaying immediately if it's just blocking;
                        // But if it's a source error, the 'error' listener handles it.
                        // If it's policy block, we update UI
                        if (error.name === 'NotAllowedError') {
                             isMusicPlaying = false;
                             updateMusicUI(false);
                        }
                    });
                }
            }
        }

        // 处理下拉菜单变化
        window.handlePlaylistChange = function(selectElem) {
            const value = selectElem.value;
            
            if (value === 'custom') {
                // 用户选择“自定义”
                handleCustomMusicClick();
                // 暂时把选中的值重置回之前的（或者保持 Custom），等待用户完成上传
                // 实际上 handleCustomMusicClick 会更新源
            } else {
                // 用户选择了内置歌曲
                changeMusicSource(value, 'builtin');
            }
        };

        window.handleCustomMusicClick = function() {
            const url = prompt("请输入背景音乐链接 (MP3/M4A)\n或者点击 [取消] 上传本地文件:");
            
            if (url) {
                changeMusicSource(url.trim(), 'link');
            } else if (url === "") {
                // Cancelled or empty
                // Revert selection if possible?
            } else {
                // Clicked Cancel -> File Upload
                document.getElementById('music-input').click();
            }
        };

        window.handleMusicFileUpload = function(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(e) {
                const result = e.target.result;
                const canCache = result.length < 4 * 1024 * 1024; 
                changeMusicSource(result, 'file', canCache);
                if (!canCache) {
                    alert("音乐文件较大，仅在本次访问播放，不会缓存到本地。");
                }
            };
            reader.readAsDataURL(file);
            event.target.value = ''; 
        };

        function changeMusicSource(src, type, shouldCache = true) {
            const audio = document.getElementById('bg-music');
            currentMusicSource = src;
            
            // Reset crossorigin if it was removed by fallback previously, to try recording again if possible
            if (!audio.hasAttribute('crossorigin') && type !== 'file') { // Local files don't need CORS
                 audio.setAttribute('crossorigin', 'anonymous');
            }
            
            audio.src = src;
            
            // Auto play
            isMusicPlaying = true;
            audio.play().catch(e => console.log("Play interrupted or failed:", e));
            updateMusicUI(true);
            
            // Update Dropdown UI to reflect change
            const select = document.getElementById('playlist-select');
            // If it's a built-in type, select matches src
            if (type === 'builtin') {
                 select.value = src;
            }
            
            // Save
            saveMusicPreference(true, shouldCache ? src : null);
        }

        window.toggleMusic = function() {
            const audio = document.getElementById('bg-music');
            isMusicPlaying = !isMusicPlaying;
            
            if (isMusicPlaying) {
                audio.play().catch(e => {
                    console.log("Play failed in toggle:", e);
                    // Revert UI if play fails hard
                    isMusicPlaying = false;
                    updateMusicUI(false);
                });
            } else {
                audio.pause();
            }
            
            updateMusicUI(isMusicPlaying);
            // Save state (keep existing src)
            saveMusicPreference(isMusicPlaying, null, true); 
        };

        function updateMusicUI(isPlaying) {
            const btn = document.getElementById('music-btn');
            if (isPlaying) {
                btn.innerHTML = '<span>🔊</span>';
                btn.classList.add('active');
            } else {
                btn.innerHTML = '<span>🔇</span>';
                btn.classList.remove('active');
            }
        }

        // srcData: 如果不为 null，则更新 customSrc；如果为 null 且 updateOnlyState=false，则清除 customSrc
        // updateOnlyState: 如果为 true，只更新开关状态，不碰 source
        function saveMusicPreference(isEnabled, srcData = null, updateOnlyState = false) {
            try {
                let dataToSave = {
                    timestamp: Date.now(),
                    enabled: isEnabled,
                    customSrc: null
                };

                if (updateOnlyState) {
                    const oldRaw = localStorage.getItem(CONFIG.musicCacheKey);
                    if (oldRaw) {
                        const old = JSON.parse(oldRaw);
                        dataToSave.customSrc = old.customSrc;
                    }
                } else {
                    dataToSave.customSrc = srcData;
                }

                localStorage.setItem(CONFIG.musicCacheKey, JSON.stringify(dataToSave));
            } catch (e) {
                console.warn("Failed to save music preference", e);
                // Fallback: save disabled state without source
                try {
                     const fallbackData = {
                        timestamp: Date.now(),
                        enabled: isEnabled,
                        customSrc: null 
                    };
                    localStorage.setItem(CONFIG.musicCacheKey, JSON.stringify(fallbackData));
                } catch(e2) {}
            }
        }

        // --- Visual Effects Creation ---

        function createEnvironment() {
            // Stars
            const starsGeo = new THREE.BufferGeometry();
            const starsCount = 2000;
            const posArray = new Float32Array(starsCount * 3);
            
            for(let i=0; i<starsCount*3; i++) {
                // Distant stars
                posArray[i] = (Math.random() - 0.5) * 400; 
            }
            
            starsGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            
            const starsMat = new THREE.PointsMaterial({
                size: 0.5,
                color: 0xffffff,
                transparent: true,
                opacity: 0.8
            });
            
            const starField = new THREE.Points(starsGeo, starsMat);
            scene.add(starField);
        }

        function createSnow() {
            const snowGeo = new THREE.BufferGeometry();
            const snowCount = 500;
            const posArray = new Float32Array(snowCount * 3);
            const velArray = new Float32Array(snowCount); // Falling speed
            
            for(let i=0; i<snowCount; i++) {
                const i3 = i * 3;
                posArray[i3] = (Math.random() - 0.5) * 80; // x
                posArray[i3+1] = (Math.random() - 0.5) * 80 + 20; // y (start high)
                posArray[i3+2] = (Math.random() - 0.5) * 80; // z
                
                velArray[i] = 0.1 + Math.random() * 0.1; // speed
            }
            
            snowGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            
            // Simple circular texture drawing for snow would be better, but simple points work for clarity
            const snowMat = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 0.6,
                transparent: true,
                opacity: 0.8
            });
            
            snowParticles = new THREE.Points(snowGeo, snowMat);
            snowParticles.userData = { velocities: velArray };
            scene.add(snowParticles);
        }

        function createMagicDust() {
            const dustGeo = new THREE.BufferGeometry();
            const count = 300;
            const posArray = new Float32Array(count * 3);
            
            for(let i=0; i<count*3; i++) {
                posArray[i] = (Math.random() - 0.5) * 40; 
            }
            
            dustGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            
            const dustMat = new THREE.PointsMaterial({
                color: 0xFFD700, // Gold
                size: 0.3,
                transparent: true,
                opacity: 0.6,
                blending: THREE.AdditiveBlending
            });
            
            magicDust = new THREE.Points(dustGeo, dustMat);
            scene.add(magicDust);
        }

        // --- Particle System Logic ---

        // 移除旧的螺旋线逻辑，改用体积计算
        function getConeVolumePosition(h, maxR) {
            // h is 0 (bottom) to 1 (top)
            
            // 当前高度的圆锥截面半径
            const rAtHeight = maxR * (1 - h);
            
            // 随机分布在圆截面内，但更倾向于外表面以保持树的形状
            // 使用 Math.pow 调整分布：指数越小越均匀，指数越大越集中在边缘
            const r = rAtHeight * Math.pow(Math.random(), 0.4); 
            
            const angle = Math.random() * Math.PI * 2;
            
            const x = r * Math.cos(angle);
            const z = r * Math.sin(angle);
            
            // 将高度映射到实际坐标 y
            const y = -CONFIG.height/2 + h * CONFIG.height;
            
            return new THREE.Vector3(x, y, z);
        }

        // 新增：专门用于散开形态的球体分布算法 (圆形)
        function getExplodeSpherePosition(maxRadius) {
            // 球坐标随机分布
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            
            // 使用立方根确保在体积内均匀分布（不仅仅是表面，也不仅仅是核心）
            const r = maxRadius * Math.cbrt(Math.random()); 
            
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);
            
            return new THREE.Vector3(x, y, z);
        }

        // 新增：专门用于照片的均匀分布算法 (基于黄金角度螺旋)
        function getPhotoSurfacePosition(index) {
            const goldenRatio = 0.61803398875;
            const h = ((index * goldenRatio) % 0.7) + 0.15; 
            const angle = index * Math.PI * 2 * goldenRatio;
            const rBase = CONFIG.radius * (1 - h);
            const r = rBase + 2.5; 
            
            const x = r * Math.cos(angle);
            const z = r * Math.sin(angle);
            const y = -CONFIG.height/2 + h * CONFIG.height;
            
            return new THREE.Vector3(x, y, z);
        }

        function createParticles() {
            // 1. 基础几何体
            const geometrySphere = new THREE.SphereGeometry(0.4, 16, 16); 
            const geometryCube = new THREE.BoxGeometry(0.8, 0.8, 0.8); // 树叶
            const geometryTetra = new THREE.TetrahedronGeometry(0.6); // 树叶
            const geometrySmallBox = new THREE.BoxGeometry(0.5, 0.5, 0.5); // 礼物盒
            const geometryCylinder = new THREE.CylinderGeometry(0.1, 0.1, 1.5, 8); // 糖果棒
            const geometryLight = new THREE.SphereGeometry(0.25, 16, 16); // 灯泡

            // 2. 基础材质
            const matGold = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.gold, roughness: 0.2, metalness: 0.8, emissive: 0x443300 
            });
            const matRed = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.red, roughness: 0.3, metalness: 0.3, emissive: 0x220000
            });
            const matGreen = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.green, roughness: 0.8, metalness: 0.0 
            });
            const matWhite = new THREE.MeshStandardMaterial({
                color: 0xFFFFFF, roughness: 0.2, metalness: 0.1
            });

            for (let i = 0; i < CONFIG.particles; i++) {
                let mesh;
                let isLight = false;
                let blinkSpeed = 0;
                let blinkOffset = 0;

                const type = Math.random();
                
                // --- 粒子类型分布 ---
                // 60% 树叶 (Cube/Tetrahedron)
                // 15% 装饰球 (Sphere)
                // 10% 特殊挂件 (糖果/礼物)
                // 15% 闪烁灯光 (Light)

                if (type < 0.6) {
                    // 树叶
                    const isCube = Math.random() > 0.5;
                    mesh = new THREE.Mesh(isCube ? geometryCube : geometryTetra, matGreen);
                    mesh.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, Math.random()*Math.PI);
                
                } else if (type < 0.75) {
                    // 装饰球 (金/红)
                    mesh = new THREE.Mesh(geometrySphere, Math.random() > 0.5 ? matGold : matRed);
                    mesh.scale.setScalar(1.2 + Math.random() * 0.5);
                
                } else if (type < 0.85) {
                    // 特殊挂件
                    if (Math.random() > 0.5) {
                        // 糖果棒 (红白长条)
                        mesh = new THREE.Mesh(geometryCylinder, matRed);
                        mesh.rotation.z = Math.PI / 4; // 斜着放
                    } else {
                        // 礼物盒 (金色/白色)
                        mesh = new THREE.Mesh(geometrySmallBox, Math.random() > 0.5 ? matGold : matWhite);
                        mesh.rotation.y = Math.random();
                    }
                
                } else {
                    // 💡 闪烁灯光 💡
                    isLight = true;
                    // 随机选一个颜色
                    const colorHex = CONFIG.colors.lights[Math.floor(Math.random() * CONFIG.colors.lights.length)];
                    const lightMat = new THREE.MeshStandardMaterial({
                        color: colorHex,
                        emissive: colorHex,
                        emissiveIntensity: 2.0, // 初始亮度高一点
                        roughness: 0.1,
                        metalness: 0.0,
                        toneMapped: false // 让它看起来更亮，不被压暗
                    });
                    
                    mesh = new THREE.Mesh(geometryLight, lightMat);
                    blinkSpeed = 2 + Math.random() * 3; // 闪烁速度
                    blinkOffset = Math.random() * Math.PI * 2; // 随机相位，避免同时闪
                }

                // Tree Position (Target) - 使用体积算法
                // 灯光和挂件稍微往外放一点 (pow 0.3 而不是 0.4)
                const h = Math.random(); 
                const treePos = getConeVolumePosition(h, CONFIG.radius);
                
                if (isLight || type >= 0.6) {
                    // 把装饰物稍微往外推，防止被树叶埋没
                    const center = new THREE.Vector3(0, treePos.y, 0);
                    const dir = new THREE.Vector3().subVectors(treePos, center).normalize();
                    treePos.add(dir.multiplyScalar(0.8));
                }

                // Explode Position (Target)
                const explodePos = getExplodeSpherePosition(35);

                // Initial Pos
                mesh.position.copy(treePos);
                
                scene.add(mesh);

                const pData = {
                    mesh: mesh,
                    treePos: treePos,
                    explodePos: explodePos,
                    velocity: new THREE.Vector3(),
                    wobbleOffset: Math.random() * 100,
                    isLight: isLight,
                    blinkSpeed: blinkSpeed,
                    blinkOffset: blinkOffset
                };

                particles.push(pData);
                if (isLight) twinkleLights.push(pData);
            }
        }

        function createStar() {
            // Simple Star on top
            const geometry = new THREE.OctahedronGeometry(1.5, 0);
            const material = new THREE.MeshStandardMaterial({
                color: 0xFFFF00, // Bright Yellow
                emissive: 0xFFD700,
                emissiveIntensity: 2, // 提高星星亮度
                roughness: 0.2,
                metalness: 0.8,
                toneMapped: false
            });
            const star = new THREE.Mesh(geometry, material);
            star.position.set(0, CONFIG.height/2 + 2, 0);
            
            // Star is just a special particle
            scene.add(star);
            particles.push({
                mesh: star,
                treePos: new THREE.Vector3(0, CONFIG.height/2 + 2, 0),
                explodePos: new THREE.Vector3(0, 10, 0),
                wobbleOffset: 0
            });
        }

        // --- Photo Upload & Cache Logic ---

        // 清除现有的照片（从场景和内存中）
        window.clearCachedPhotos = function() {
            // 1. Remove from scene and memory
            // We iterate backwards to remove safely
            for (let i = particles.length - 1; i >= 0; i--) {
                if (particles[i].isPhoto) {
                    scene.remove(particles[i].mesh);
                    if (particles[i].mesh.material.map) {
                        particles[i].mesh.material.map.dispose();
                    }
                    particles[i].mesh.material.dispose();
                    particles[i].mesh.geometry.dispose();
                    particles.splice(i, 1);
                }
            }
            photoMeshes = [];

            // 2. Clear LocalStorage
            try {
                localStorage.removeItem(CONFIG.cacheKey);
                console.log("Cache cleared");
            } catch (e) {
                console.error("Failed to clear cache", e);
            }
        };

        // 处理用户上传
        window.handlePhotoUpload = async function(event) {
            const files = event.target.files;
            if (!files.length) return;

            // 覆盖模式：上传新照片前清除旧的
            window.clearCachedPhotos();

            const imagePromises = Array.from(files).map(processFileToDataURL);
            
            try {
                // 等待所有图片处理完成（压缩 + 转Base64）
                const base64Images = await Promise.all(imagePromises);
                
                // 创建 Mesh
                base64Images.forEach(imgData => {
                    const img = new Image();
                    img.src = imgData;
                    img.onload = () => createPhotoMesh(img);
                });

                // 保存到缓存
                saveToCache(base64Images);

            } catch (err) {
                console.error("Error processing images:", err);
                alert("图片处理失败，请重试");
            }

            // 重置 input 以便允许重复上传相同文件
            event.target.value = '';
        };

        // 将文件读取并压缩为 Base64
        function processFileToDataURL(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const img = new Image();
                    img.src = e.target.result;
                    img.onload = () => {
                        // 创建 Canvas 进行压缩
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        
                        // 最大尺寸限制 (避免 localStorage 爆满)
                        const MAX_SIZE = 800; 
                        let width = img.width;
                        let height = img.height;

                        if (width > height) {
                            if (width > MAX_SIZE) {
                                height *= MAX_SIZE / width;
                                width = MAX_SIZE;
                            }
                        } else {
                            if (height > MAX_SIZE) {
                                width *= MAX_SIZE / height;
                                height = MAX_SIZE;
                            }
                        }

                        canvas.width = width;
                        canvas.height = height;
                        ctx.drawImage(img, 0, 0, width, height);

                        // 转换为 JPEG Base64 (0.8 质量)
                        const dataURL = canvas.toDataURL('image/jpeg', 0.8);
                        resolve(dataURL);
                    };
                    img.onerror = reject;
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        }

        // 保存到 LocalStorage
        function saveToCache(imagesData) {
            const cacheData = {
                timestamp: Date.now(),
                images: imagesData
            };
            try {
                localStorage.setItem(CONFIG.cacheKey, JSON.stringify(cacheData));
            } catch (e) {
                console.warn("Storage quota exceeded or error", e);
                alert("照片过多或过大，部分缓存可能失败");
            }
        }

        // 加载缓存
        function loadCachedPhotos() {
            try {
                const raw = localStorage.getItem(CONFIG.cacheKey);
                if (!raw) return;

                const cache = JSON.parse(raw);
                const now = Date.now();

                // 检查有效期 (7天)
                if (now - cache.timestamp > CONFIG.cacheDuration) {
                    console.log("Cache expired, clearing...");
                    localStorage.removeItem(CONFIG.cacheKey);
                    return;
                }

                if (cache.images && Array.isArray(cache.images)) {
                    console.log(`Loading ${cache.images.length} photos from cache...`);
                    cache.images.forEach(imgData => {
                        const img = new Image();
                        img.src = imgData;
                        img.onload = () => createPhotoMesh(img);
                    });
                }
            } catch (e) {
                console.error("Failed to load cache", e);
            }
        }

        function createPhotoMesh(image) {
            const texture = new THREE.Texture(image);
            texture.needsUpdate = true;
            texture.colorSpace = THREE.SRGBColorSpace;

            // Maintain aspect ratio
            const aspect = image.width / image.height;
            const w = 4;
            const h = 4 / aspect;

            const geometry = new THREE.PlaneGeometry(w, h);
            // Use BasicMaterial for photos so they are always fully bright and not affected by shadows
            const material = new THREE.MeshBasicMaterial({ 
                map: texture, 
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 1.0 
            });

            const mesh = new THREE.Mesh(geometry, material);
            
            // Add a border (gold frame)
            const frameGeo = new THREE.BoxGeometry(w + 0.2, h + 0.2, 0.1);
            const frameMat = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.gold, 
                metalness: 0.8, 
                roughness: 0.2,
                emissive: 0x332200
            });
            const frame = new THREE.Mesh(frameGeo, frameMat);
            frame.position.z = -0.06;
            mesh.add(frame);

            // 修改位置计算逻辑：使用确定性的黄金螺旋算法
            // 传入当前照片的总数作为 index，确保每张新照片都有唯一且均匀的位置
            const index = photoMeshes.length;
            const treePos = getPhotoSurfacePosition(index);

            // Explode Position (Target) - 修改为球体分布
            const explodePos = getExplodeSpherePosition(35);

            mesh.position.copy(explodePos); // Start exploded if added later, or logic will fix it
            scene.add(mesh);

            photoMeshes.push({
                mesh: mesh,
                treePos: treePos,
                explodePos: explodePos,
                wobbleOffset: Math.random() * 100,
                isPhoto: true
            });
            
            // Add to main particles array for movement management
            particles.push(photoMeshes[photoMeshes.length-1]);
        }

        // --- Animation Loop ---
        function animate() {
            requestAnimationFrame(animate);
            time += 0.01;

            // 1. Smooth State Transition
            if (currentState !== targetState) {
                currentState = targetState;
                
                // If entering focus mode, pick a random photo to bring forward if any exist
                if (currentState === STATE.FOCUS && photoMeshes.length > 0) {
                     // Reset all photos first
                     photoMeshes.forEach(p => p.focusOffset = null);
                     // Pick one
                     const luckyPhoto = photoMeshes[Math.floor(Math.random() * photoMeshes.length)];
                     luckyPhoto.focusOffset = true;
                }
            }

            // 2. Camera Controls
            let camX = Math.sin(time * 0.2) * 50;
            let camZ = Math.cos(time * 0.2) * 50;
            let camY = 0;

            // Hand Influence
            if (currentState === STATE.EXPLODE && isHandDetected) {
                const angle = handPos.x * Math.PI; 
                camX = Math.sin(angle) * 60;
                camZ = Math.cos(angle) * 60;
                camY = handPos.y * 30;
            } else if (currentState === STATE.FOCUS) {
                camX *= 0.3;
                camZ *= 0.3;
            }

            camera.position.x += (camX - camera.position.x) * 0.05;
            camera.position.y += (camY - camera.position.y) * 0.05;
            camera.position.z += (camZ - camera.position.z) * 0.05;
            camera.lookAt(0, 0, 0);

            // 3. Update Visual Effects (Snow, Dust)
            
            // Snow
            if (snowParticles) {
                const positions = snowParticles.geometry.attributes.position.array;
                const vels = snowParticles.userData.velocities;
                for (let i=0; i<vels.length; i++) {
                    const i3 = i*3;
                    positions[i3+1] -= vels[i]; // Fall down
                    // Reset if too low
                    if (positions[i3+1] < -20) {
                        positions[i3+1] = 40;
                        positions[i3] = (Math.random() - 0.5) * 80;
                        positions[i3+2] = (Math.random() - 0.5) * 80;
                    }
                }
                snowParticles.geometry.attributes.position.needsUpdate = true;
            }
            
            // Magic Dust (Rotate)
            if (magicDust) {
                magicDust.rotation.y = time * 0.05;
            }

            // 4. Particle Animation & Twinkle
            
            // A. Update Lights (Twinkle Effect)
            // 无论是合拢还是散开，灯光都会闪烁
            twinkleLights.forEach(p => {
                // 使用正弦波控制发光强度：基准 1.0 + 波动 1.0 = 范围 [0, 2.0]
                const intensity = 1.0 + Math.sin(time * p.blinkSpeed + p.blinkOffset) * 1.0;
                // 保证最低亮度不为0，避免完全黑掉
                p.mesh.material.emissiveIntensity = Math.max(0.2, intensity);
            });

            // B. Move Particles
            particles.forEach(p => {
                let target;

                if (currentState === STATE.TREE) {
                    target = p.treePos;
                } else if (currentState === STATE.EXPLODE) {
                    target = p.explodePos;
                } else if (currentState === STATE.FOCUS) {
                    target = p.explodePos; 
                    
                    if (p.focusOffset) {
                        const camDir = camera.position.clone().normalize();
                        const targetPos = camDir.multiplyScalar(10);
                        p.mesh.position.lerp(targetPos, 0.1);
                        p.mesh.quaternion.copy(camera.quaternion);
                        return; // Skip standard update
                    }
                }

                const wobble = Math.sin(time * 2 + p.wobbleOffset) * 0.5;
                const finalTarget = target.clone();
                if (currentState !== STATE.TREE) {
                    finalTarget.y += wobble;
                }

                // Move mesh
                p.mesh.position.lerp(finalTarget, 0.04);
                
                // Rotation
                if (!p.isPhoto) {
                    // 装饰物缓慢自转
                    p.mesh.rotation.x += 0.01;
                    p.mesh.rotation.y += 0.01;
                } else if (currentState === STATE.TREE) {
                    p.mesh.lookAt(new THREE.Vector3(p.mesh.position.x * 2, p.mesh.position.y, p.mesh.position.z * 2));
                } else {
                    p.mesh.quaternion.copy(camera.quaternion);
                }
            });

            // 普通渲染
            renderer.render(scene, camera);
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        // Start
        init();

    </script>
</body>
</html>
```

@tab 改进雪花

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Gesture Controlled Christmas Tree</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            background-color: #050510; /* 深蓝夜空色 */
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #fff;
        }

        #canvas-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background: radial-gradient(circle at center, #1a1a2e 0%, #000000 100%); /* 渐变背景 */
        }

        /* UI Overlay */
        #ui-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
            pointer-events: none; /* Let clicks pass through to canvas if needed */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 20px;
            box-sizing: border-box;
        }

        .header {
            text-align: left;
            text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
        }

        h1 {
            margin: 0;
            font-weight: 300;
            color: #FFD700; /* Gold */
            letter-spacing: 2px;
            font-size: 24px;
        }

        p.subtitle {
            margin: 5px 0 0 0;
            color: #aaa;
            font-size: 14px;
        }

        /* Status & Instructions & Buttons Container */
        .status-panel {
            position: absolute;
            top: 20px;
            right: 20px;
            text-align: right;
            display: flex;
            flex-direction: column;
            align-items: flex-end; /* Right align everything */
            gap: 12px;
        }

        .status-tag {
            display: inline-block;
            padding: 8px 16px;
            background: rgba(20, 30, 20, 0.8);
            border: 1px solid #FFD700;
            border-radius: 20px;
            color: #FFD700;
            font-weight: bold;
            font-size: 14px;
            transition: all 0.3s ease;
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
        }

        .instructions {
            background: rgba(0, 0, 0, 0.6);
            padding: 15px;
            border-radius: 8px; /* Slightly squarer for tech feel */
            font-size: 12px;
            color: #ddd;
            width: 200px; /* Fixed width for alignment */
            pointer-events: auto;
            backdrop-filter: blur(10px);
            border-left: 2px solid #C41E3A; /* Red accent */
            border-right: 1px solid rgba(255, 255, 255, 0.1);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .instruction-item {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            justify-content: space-between; /* Space out icon and text */
        }
        
        .icon { font-size: 16px; width: 20px; text-align: center;}

        /* Upload Buttons - New Elegant Style */
        .upload-container {
            pointer-events: auto;
            display: flex;
            flex-direction: column;
            gap: 8px;
            align-items: flex-end;
            margin-top: 5px;
            width: 220px; /* Give it a bit more width for the dropdown */
        }

        .btn {
            background: rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(255, 215, 0, 0.5); /* Subtle Gold Border */
            color: #FFD700;
            padding: 8px 20px;
            border-radius: 4px; /* Minimalist radius */
            cursor: pointer;
            font-size: 12px;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            backdrop-filter: blur(5px);
            width: 100%; /* Match width */
            text-align: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            box-sizing: border-box; /* Ensure padding doesn't increase width */
        }

        .btn:hover {
            background: rgba(255, 215, 0, 0.15);
            border-color: #FFD700;
            box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
            transform: translateX(-5px); /* Subtle slide left */
        }

        .btn.active {
            background: rgba(255, 215, 0, 0.2);
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.4);
            border-color: #FFD700;
        }

        /* Group music buttons slightly */
        .music-group {
            display: flex;
            gap: 5px;
            width: 100%;
        }
        
        .music-group .btn {
            flex: 1; /* Split space */
            padding: 8px 5px; /* Smaller padding */
        }
        
        #music-btn {
            flex: 0 0 40%; /* Play button takes less space */
        }
        
        #playlist-select {
            flex: 1;
            appearance: none; /* Remove default arrow */
            -webkit-appearance: none;
            text-align: left;
            text-align-last: center;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FFD700' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 8px center;
            background-size: 12px;
            padding-right: 25px; /* Space for arrow */
            padding-left: 10px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #FFD700;
        }
        
        #playlist-select option {
            background: #222;
            color: #FFD700;
            padding: 5px;
        }

        /* Differentiate clear button slightly */
        #clear-btn {
            border-color: rgba(255, 255, 255, 0.3);
            color: #aaa;
        }
        
        #clear-btn:hover {
            border-color: #fff;
            color: #fff;
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }

        #file-input { display: none; }
        #music-input { display: none; }

        /* Webcam feedback (hidden but processed) */
        #video-feed {
            position: absolute;
            bottom: 20px;
            left: 20px;
            width: 160px;
            height: 120px;
            border-radius: 10px;
            transform: scaleX(-1); /* Mirror */
            border: 2px solid #FFD700;
            opacity: 0.7;
            z-index: 20;
            object-fit: cover;
            display: block; /* Required for MediaPipe */
        }

        /* Loading Screen */
        #loading {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            z-index: 100;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #FFD700;
            transition: opacity 0.5s;
        }

        .loader {
            border: 4px solid #333;
            border-top: 4px solid #FFD700;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin-bottom: 15px;
        }

        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

    </style>
    <!-- MediaPipe Hands Global Script (Fix for Module Error) -->
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/hands.js" crossorigin="anonymous"></script>

    <!-- Import Maps for Three.js and Addons -->
    <script type="importmap">
        {
            "imports": {
                "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
                "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"
            }
        }
    </script>
</head>
<body>

    <!-- Audio Element -->
    <audio id="bg-music" loop>
        <source src="https://cdn.bornforthis.cn/mp3/LastChristmas(Single%20Version).m4a" type="audio/mp4">
        您的浏览器不支持音频元素。
    </audio>

    <!-- Loading Screen -->
    <div id="loading">
        <div class="loader"></div>
        <div id="loading-text">正在初始化视觉引擎与AI模型...</div>
    </div>

    <!-- Video Element for MediaPipe (Visible for user feedback) -->
    <video id="video-feed" playsinline></video>

    <!-- UI Layer -->
    <div id="ui-layer">
        <div class="header">
            <h1>CHRISTMAS GESTURE</h1>
            <p class="subtitle">MediaPipe & Three.js WebGL Experience</p>
        </div>

        <div class="status-panel">
            <div id="mode-display" class="status-tag">等待手势...</div>
            
            <div class="instructions">
                <div class="instruction-item"><span>✊ 握拳</span> <span>聚合形态</span></div>
                <div class="instruction-item"><span>🖐 张开</span> <span>散开形态</span></div>
                <div class="instruction-item"><span>🤏 捏合</span> <span>特写照片</span></div>
                <div class="instruction-item"><span>👋 移动</span> <span>旋转视角</span></div>
            </div>

            <div class="upload-container">
                <button id="upload-btn" class="btn" onclick="document.getElementById('file-input').click()">
                    <span>📷</span> 上传照片
                </button>
                
                <!-- Music Controls -->
                <div class="music-group">
                    <button id="music-btn" class="btn" onclick="toggleMusic()">
                        <span>🔇</span>
                    </button>
                    <!-- 下拉选择框替代原来的“换音乐”按钮 -->
                    <select id="playlist-select" class="btn" onchange="handlePlaylistChange(this)">
                        <option disabled>-- 选择背景音乐 --</option>
                        <!-- Options will be populated by JS -->
                        <option value="custom">📂 自定义...</option>
                    </select>
                </div>

                <button id="clear-btn" class="btn" onclick="clearCachedPhotos()">
                    <span>🗑️</span> 清除照片
                </button>
                
                <input type="file" id="file-input" accept="image/*" multiple onchange="handlePhotoUpload(event)">
                <!-- 新增音乐文件输入框 -->
                <input type="file" id="music-input" accept="audio/*, .mp3, .m4a" onchange="handleMusicFileUpload(event)">
            </div>
        </div>
    </div>

    <!-- 3D Canvas -->
    <div id="canvas-container"></div>

    <!-- Main Logic -->
    <script type="module">
        import * as THREE from 'three';

        // --- Configuration & Constants ---
        const CONFIG = {
            colors: {
                green: 0x228B22,   // Forest Green (Brighter)
                gold: 0xFFD700,    // Metallic Gold
                red: 0xFF0000,     // Bright Red
                white: 0xFFFFFF,
                // 新增灯光颜色池
                lights: [0xFF0000, 0xFFFF00, 0x00BFFF, 0xFF69B4, 0xFFA500] 
            },
            particles: 1800,       // 稍微增加粒子数量到 1800，容纳更多装饰
            radius: 18,            // Base radius of tree bottom
            height: 35,            // Height of tree
            cacheKey: 'xmas_tree_photos_v1',
            cacheDuration: 7 * 24 * 60 * 60 * 1000, // 7 Days in ms
            musicCacheKey: 'xmas_music_pref_v3', // 更新版本号以适应新逻辑
            
            // 内置歌单
            playlist: [
                { name: "Last Christmas", url: "https://cdn.bornforthis.cn/mp3/LastChristmas(Single%20Version).m4a" },
                { name: "Jingle Bell Rock", url: "https://cdn.bornforthis.cn/mp3/JingleBellRock.m4a" },
                { name: "Santa Tell Me", url: "https://cdn.bornforthis.cn/mp3/SantaTellMe.m4a" },
                { name: "Feliz Navidad", url: "https://cdn.bornforthis.cn/mp3/FelizNavidad.m4a" },
                { name: "Santa Claus is Coming", url: "https://cdn.bornforthis.cn/mp3/SantaClausisComingtoTown.m4a" },
                { name: "Here Comes Santa Claus", url: "https://cdn.bornforthis.cn/mp3/HereComesSantaClaus.m4a" },
                { name: "Merry Christmas Mr Lawrence", url: "https://cdn.bornforthis.cn/mp3/MerryChristmasMrLawrence.m4a" },
                { name: "Christmas Time in My Town", url: "https://cdn.bornforthis.cn/mp3/ChristmasTimeinMyHomeTown.mp3" },
            ]
        };

        // --- Global Variables ---
        let scene, camera, renderer;
        let particles = []; // Array to store { mesh, treePos, explodePos, currentPos, speed }
        let photoMeshes = []; // Array specifically for user photos
        let twinkleLights = []; // 专门存储需要闪烁的灯光粒子
        
        // 新增的特效系统
        let snowParticles, magicDust;
        
        let time = 0;
        
        // Interaction State
        const STATE = {
            TREE: 'TREE',
            EXPLODE: 'EXPLODE',
            FOCUS: 'FOCUS'
        };
        let currentState = STATE.TREE;
        let targetState = STATE.TREE;
        
        // Hand Data
        let handPos = { x: 0, y: 0 }; // Normalized -1 to 1
        let isHandDetected = false;

        // Music State
        let isMusicPlaying = false;
        let currentMusicSource = CONFIG.playlist[0].url; // Default to first song

        // --- Initialization ---
        async function init() {
            // 1. Scene Setup
            const container = document.getElementById('canvas-container');
            scene = new THREE.Scene();
            // 移除纯色背景，因为我们在 CSS 里用了渐变，这里设为透明或保留雾效果
            scene.background = null; 
            // 增加一点雾气增加深邃感
            scene.fog = new THREE.FogExp2(0x050510, 0.01);

            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 0, 50);

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.outputColorSpace = THREE.SRGBColorSpace;
            container.appendChild(renderer.domElement);

            // 2. Lighting - 大幅增强光照
            // 2.1 强环境光，照亮所有阴影
            const ambientLight = new THREE.AmbientLight(0xffffff, 1.0); 
            scene.add(ambientLight);

            // 2.2 主平行光（模拟阳光），提供清晰的明暗关系
            const mainLight = new THREE.DirectionalLight(0xffffff, 2.0);
            mainLight.position.set(10, 20, 20);
            scene.add(mainLight);

            // 2.3 补光灯（金色），增加华丽感
            const pointLight = new THREE.PointLight(CONFIG.colors.gold, 1.5, 100);
            pointLight.position.set(0, 20, 10);
            scene.add(pointLight);
            
            // 2.4 氛围灯（红绿），增加节日气氛，但调高亮度
            const redLight = new THREE.PointLight(CONFIG.colors.red, 1.5, 50);
            redLight.position.set(15, 10, 15);
            scene.add(redLight);
            
            const greenLight = new THREE.PointLight(CONFIG.colors.green, 1.5, 50);
            greenLight.position.set(-15, -10, 15);
            scene.add(greenLight);

            // 3. Post Processing Removed

            // 4. Content Generation
            createParticles();
            createStar();
            createEnvironment(); // 新增：星空
            createSnow();        // 新增：雪花
            createMagicDust();   // 新增：魔法金粉
            
            // 5. Load Cached Photos & Music Preference
            loadCachedPhotos();
            initAudio(); // 初始化音频和下拉菜单

            // 6. Setup MediaPipe
            await setupMediaPipe();

            // 7. Events
            window.addEventListener('resize', onWindowResize);

            // 8. Start Loop
            document.getElementById('loading').style.opacity = '0';
            setTimeout(() => document.getElementById('loading').style.display = 'none', 500);
            animate();
        }

        // --- MediaPipe Logic ---
        async function setupMediaPipe() {
            const video = document.getElementById('video-feed');

            // Access Global Hands Class
            const hands = new window.Hands({locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
            }});

            hands.setOptions({
                maxNumHands: 1,
                modelComplexity: 1,
                minDetectionConfidence: 0.7,
                minTrackingConfidence: 0.6
            });

            hands.onResults(onHandsResults);

            // Access Webcam
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                video.srcObject = stream;
                await video.play();

                // Start processing loop specific to MediaPipe
                async function detectionLoop() {
                    if (video.currentTime > 0 && !video.paused && !video.ended) {
                        await hands.send({image: video});
                    }
                    requestAnimationFrame(detectionLoop);
                }
                detectionLoop();
            } catch (err) {
                console.error("Camera access denied or failed", err);
                document.getElementById('loading-text').innerText = "未检测到摄像头，请检查权限。应用将自动运行演示模式。";
                setTimeout(() => {
                    document.getElementById('loading').style.display = 'none';
                    // Auto demo mode logic could go here
                }, 2000);
            }
        }

        function onHandsResults(results) {
            const modeDisplay = document.getElementById('mode-display');
            
            if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                isHandDetected = true;
                const landmarks = results.multiHandLandmarks[0];

                // 1. Calculate Hand Center (for rotation)
                // Wrist is 0, Middle Finger MCP is 9
                const cx = landmarks[9].x;
                const cy = landmarks[9].y;
                handPos.x = (cx - 0.5) * 2; // -1 to 1
                handPos.y = (cy - 0.5) * 2;

                // 2. Gesture Recognition
                const state = detectGesture(landmarks);
                
                if (state) {
                    targetState = state;
                    
                    // UI Update
                    let text = "未知";
                    let bg = "#333";
                    if (state === STATE.TREE) { text = "🌲 聚合形态"; bg = CONFIG.colors.green; }
                    if (state === STATE.EXPLODE) { text = "✨ 散开形态"; bg = "#444"; }
                    if (state === STATE.FOCUS) { text = "📷 聚焦照片"; bg = CONFIG.colors.red; }
                    
                    modeDisplay.innerText = text;
                    modeDisplay.style.borderColor = (state === STATE.FOCUS) ? '#fff' : CONFIG.colors.gold;
                }

            } else {
                isHandDetected = false;
            }
        }

        function detectGesture(lm) {
            const dist = (i, j) => Math.sqrt(Math.pow(lm[i].x - lm[j].x, 2) + Math.pow(lm[i].y - lm[j].y, 2));
            const wrist = 0;
            const tips = [8, 12, 16, 20];
            const pips = [6, 10, 14, 18];
            
            // Check Fingers Extended
            let extendedCount = 0;
            if (dist(4, 17) > 0.2) extendedCount++; // Rough thumb check

            for (let k=0; k<4; k++) {
                if (dist(wrist, tips[k]) > dist(wrist, pips[k]) * 1.2) {
                    extendedCount++;
                }
            }

            // Pinch Detection (Thumb 4 and Index 8)
            const pinchDist = dist(4, 8);

            if (pinchDist < 0.08) {
                return STATE.FOCUS;
            } else if (extendedCount >= 4) {
                return STATE.EXPLODE;
            } else if (extendedCount <= 1) {
                return STATE.TREE;
            }
            
            return null; 
        }

        // --- Audio Logic ---
        
        function initAudio() {
            // 1. Populate Dropdown
            const select = document.getElementById('playlist-select');
            
            // Insert Built-in options BEFORE the "Custom" option
            CONFIG.playlist.forEach(song => {
                const option = document.createElement('option');
                option.value = song.url;
                option.innerText = `🎵 ${song.name}`;
                // Insert before the last option (which is Custom)
                select.insertBefore(option, select.lastElementChild);
            });

            // 2. Error Handling & Fallback
            const audio = document.getElementById('bg-music');
            
            // Critical fix for "The element has no supported sources"
            audio.addEventListener('error', function(e) {
                console.warn("Audio load error:", e);
                const src = audio.src;
                // If it failed and we had crossorigin set, try removing it (fallback mode)
                // This means audio won't be recordable via WebAudio, but at least it plays.
                if (audio.crossOrigin === 'anonymous') {
                    console.log("Attempting fallback: Removing crossorigin attribute...");
                    audio.removeAttribute('crossorigin');
                    audio.src = src; // Retry
                    audio.load();
                    if (isMusicPlaying) audio.play().catch(err => console.log("Fallback play error:", err));
                }
            }, true); // Capture phase

            // 3. Load Preferences
            try {
                const raw = localStorage.getItem(CONFIG.musicCacheKey);
                if (raw) {
                    const cache = JSON.parse(raw);
                    const now = Date.now();
                    
                    if (now - cache.timestamp <= CONFIG.cacheDuration) {
                        // 恢复音乐源
                        if (cache.customSrc) {
                            currentMusicSource = cache.customSrc;
                        }

                        // 恢复播放状态
                        if (cache.enabled) {
                            isMusicPlaying = true;
                            // Play will be called below
                        }
                    }
                }
            } catch (e) {
                console.error("Error loading music preference", e);
            }

            // 4. Apply Source
            audio.src = currentMusicSource;
            
            // 5. Sync Dropdown Value
            // Check if current source is in playlist
            const inPlaylist = CONFIG.playlist.find(p => p.url === currentMusicSource);
            if (inPlaylist) {
                select.value = currentMusicSource;
            } else {
                // If not in playlist, it stays default or handled by custom
            }

            // 6. Play if needed
            updateMusicUI(isMusicPlaying);
            if (isMusicPlaying) {
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log("Auto-play blocked or source invalid:", error);
                        // Don't turn off isMusicPlaying immediately if it's just blocking;
                        // But if it's a source error, the 'error' listener handles it.
                        // If it's policy block, we update UI
                        if (error.name === 'NotAllowedError') {
                             isMusicPlaying = false;
                             updateMusicUI(false);
                        }
                    });
                }
            }
        }

        // 处理下拉菜单变化
        window.handlePlaylistChange = function(selectElem) {
            const value = selectElem.value;
            
            if (value === 'custom') {
                // 用户选择“自定义”
                handleCustomMusicClick();
                // 暂时把选中的值重置回之前的（或者保持 Custom），等待用户完成上传
                // 实际上 handleCustomMusicClick 会更新源
            } else {
                // 用户选择了内置歌曲
                changeMusicSource(value, 'builtin');
            }
        };

        window.handleCustomMusicClick = function() {
            const url = prompt("请输入背景音乐链接 (MP3/M4A)\n或者点击 [取消] 上传本地文件:");
            
            if (url) {
                changeMusicSource(url.trim(), 'link');
            } else if (url === "") {
                // Cancelled or empty
                // Revert selection if possible?
            } else {
                // Clicked Cancel -> File Upload
                document.getElementById('music-input').click();
            }
        };

        window.handleMusicFileUpload = function(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(e) {
                const result = e.target.result;
                const canCache = result.length < 4 * 1024 * 1024; 
                changeMusicSource(result, 'file', canCache);
                if (!canCache) {
                    alert("音乐文件较大，仅在本次访问播放，不会缓存到本地。");
                }
            };
            reader.readAsDataURL(file);
            event.target.value = ''; 
        };

        function changeMusicSource(src, type, shouldCache = true) {
            const audio = document.getElementById('bg-music');
            currentMusicSource = src;
            
            // Reset crossorigin if it was removed by fallback previously, to try recording again if possible
            if (!audio.hasAttribute('crossorigin') && type !== 'file') { // Local files don't need CORS
                 audio.setAttribute('crossorigin', 'anonymous');
            }
            
            audio.src = src;
            
            // Auto play
            isMusicPlaying = true;
            audio.play().catch(e => console.log("Play interrupted or failed:", e));
            updateMusicUI(true);
            
            // Update Dropdown UI to reflect change
            const select = document.getElementById('playlist-select');
            // If it's a built-in type, select matches src
            if (type === 'builtin') {
                 select.value = src;
            }
            
            // Save
            saveMusicPreference(true, shouldCache ? src : null);
        }

        window.toggleMusic = function() {
            const audio = document.getElementById('bg-music');
            isMusicPlaying = !isMusicPlaying;
            
            if (isMusicPlaying) {
                audio.play().catch(e => {
                    console.log("Play failed in toggle:", e);
                    // Revert UI if play fails hard
                    isMusicPlaying = false;
                    updateMusicUI(false);
                });
            } else {
                audio.pause();
            }
            
            updateMusicUI(isMusicPlaying);
            // Save state (keep existing src)
            saveMusicPreference(isMusicPlaying, null, true); 
        };

        function updateMusicUI(isPlaying) {
            const btn = document.getElementById('music-btn');
            if (isPlaying) {
                btn.innerHTML = '<span>🔊</span>';
                btn.classList.add('active');
            } else {
                btn.innerHTML = '<span>🔇</span>';
                btn.classList.remove('active');
            }
        }

        // srcData: 如果不为 null，则更新 customSrc；如果为 null 且 updateOnlyState=false，则清除 customSrc
        // updateOnlyState: 如果为 true，只更新开关状态，不碰 source
        function saveMusicPreference(isEnabled, srcData = null, updateOnlyState = false) {
            try {
                let dataToSave = {
                    timestamp: Date.now(),
                    enabled: isEnabled,
                    customSrc: null
                };

                if (updateOnlyState) {
                    const oldRaw = localStorage.getItem(CONFIG.musicCacheKey);
                    if (oldRaw) {
                        const old = JSON.parse(oldRaw);
                        dataToSave.customSrc = old.customSrc;
                    }
                } else {
                    dataToSave.customSrc = srcData;
                }

                localStorage.setItem(CONFIG.musicCacheKey, JSON.stringify(dataToSave));
            } catch (e) {
                console.warn("Failed to save music preference", e);
                // Fallback: save disabled state without source
                try {
                     const fallbackData = {
                        timestamp: Date.now(),
                        enabled: isEnabled,
                        customSrc: null 
                    };
                    localStorage.setItem(CONFIG.musicCacheKey, JSON.stringify(fallbackData));
                } catch(e2) {}
            }
        }

        // --- Visual Effects Creation ---

        function createEnvironment() {
            // Stars
            const starsGeo = new THREE.BufferGeometry();
            const starsCount = 2000;
            const posArray = new Float32Array(starsCount * 3);
            
            for(let i=0; i<starsCount*3; i++) {
                // Distant stars
                posArray[i] = (Math.random() - 0.5) * 400; 
            }
            
            starsGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            
            const starsMat = new THREE.PointsMaterial({
                size: 0.5,
                color: 0xffffff,
                transparent: true,
                opacity: 0.8
            });
            
            const starField = new THREE.Points(starsGeo, starsMat);
            scene.add(starField);
        }

        // --- 动态生成雪花纹理 ---
        function createSnowflakeTexture() {
            const canvas = document.createElement('canvas');
            canvas.width = 32;
            canvas.height = 32;
            const context = canvas.getContext('2d');

            // 绘制雪花形状 (六角星)
            context.strokeStyle = '#FFFFFF';
            context.lineWidth = 2;
            context.lineCap = 'round';
            
            context.translate(16, 16);
            for(let i = 0; i < 6; i++) {
                context.beginPath();
                context.moveTo(0, 0);
                context.lineTo(0, 14);
                context.stroke();
                
                // 小分叉
                context.beginPath();
                context.moveTo(0, 8);
                context.lineTo(4, 10);
                context.stroke();
                
                context.beginPath();
                context.moveTo(0, 8);
                context.lineTo(-4, 10);
                context.stroke();
                
                context.rotate(Math.PI / 3);
            }

            return new THREE.CanvasTexture(canvas);
        }

        function createSnow() {
            const snowGeo = new THREE.BufferGeometry();
            const snowCount = 500;
            const posArray = new Float32Array(snowCount * 3);
            const velArray = new Float32Array(snowCount); // Falling speed
            
            for(let i=0; i<snowCount; i++) {
                const i3 = i * 3;
                posArray[i3] = (Math.random() - 0.5) * 80; // x
                posArray[i3+1] = (Math.random() - 0.5) * 80 + 20; // y (start high)
                posArray[i3+2] = (Math.random() - 0.5) * 80; // z
                
                velArray[i] = 0.1 + Math.random() * 0.1; // speed
            }
            
            snowGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            
            // 使用生成的雪花纹理
            const snowTexture = createSnowflakeTexture();

            const snowMat = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 2.0, // 调大尺寸以显示图案
                map: snowTexture,
                transparent: true,
                opacity: 0.8,
                depthWrite: false, // 避免透明遮挡问题
                blending: THREE.AdditiveBlending 
            });
            
            snowParticles = new THREE.Points(snowGeo, snowMat);
            snowParticles.userData = { velocities: velArray };
            scene.add(snowParticles);
        }

        function createMagicDust() {
            const dustGeo = new THREE.BufferGeometry();
            const count = 300;
            const posArray = new Float32Array(count * 3);
            
            for(let i=0; i<count*3; i++) {
                posArray[i] = (Math.random() - 0.5) * 40; 
            }
            
            dustGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            
            const dustMat = new THREE.PointsMaterial({
                color: 0xFFD700, // Gold
                size: 0.3,
                transparent: true,
                opacity: 0.6,
                blending: THREE.AdditiveBlending
            });
            
            magicDust = new THREE.Points(dustGeo, dustMat);
            scene.add(magicDust);
        }

        // --- Particle System Logic ---

        // 移除旧的螺旋线逻辑，改用体积计算
        function getConeVolumePosition(h, maxR) {
            // h is 0 (bottom) to 1 (top)
            
            // 当前高度的圆锥截面半径
            const rAtHeight = maxR * (1 - h);
            
            // 随机分布在圆截面内，但更倾向于外表面以保持树的形状
            // 使用 Math.pow 调整分布：指数越小越均匀，指数越大越集中在边缘
            const r = rAtHeight * Math.pow(Math.random(), 0.4); 
            
            const angle = Math.random() * Math.PI * 2;
            
            const x = r * Math.cos(angle);
            const z = r * Math.sin(angle);
            
            // 将高度映射到实际坐标 y
            const y = -CONFIG.height/2 + h * CONFIG.height;
            
            return new THREE.Vector3(x, y, z);
        }

        // 新增：专门用于散开形态的球体分布算法 (圆形)
        function getExplodeSpherePosition(maxRadius) {
            // 球坐标随机分布
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            
            // 使用立方根确保在体积内均匀分布（不仅仅是表面，也不仅仅是核心）
            const r = maxRadius * Math.cbrt(Math.random()); 
            
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);
            
            return new THREE.Vector3(x, y, z);
        }

        // 新增：专门用于照片的均匀分布算法 (基于黄金角度螺旋)
        function getPhotoSurfacePosition(index) {
            const goldenRatio = 0.61803398875;
            const h = ((index * goldenRatio) % 0.7) + 0.15; 
            const angle = index * Math.PI * 2 * goldenRatio;
            const rBase = CONFIG.radius * (1 - h);
            const r = rBase + 2.5; 
            
            const x = r * Math.cos(angle);
            const z = r * Math.sin(angle);
            const y = -CONFIG.height/2 + h * CONFIG.height;
            
            return new THREE.Vector3(x, y, z);
        }

        function createParticles() {
            // 1. 基础几何体
            const geometrySphere = new THREE.SphereGeometry(0.4, 16, 16); 
            const geometryCube = new THREE.BoxGeometry(0.8, 0.8, 0.8); // 树叶
            const geometryTetra = new THREE.TetrahedronGeometry(0.6); // 树叶
            const geometrySmallBox = new THREE.BoxGeometry(0.5, 0.5, 0.5); // 礼物盒
            const geometryCylinder = new THREE.CylinderGeometry(0.1, 0.1, 1.5, 8); // 糖果棒
            const geometryLight = new THREE.SphereGeometry(0.25, 16, 16); // 灯泡

            // 2. 基础材质
            const matGold = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.gold, roughness: 0.2, metalness: 0.8, emissive: 0x443300 
            });
            const matRed = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.red, roughness: 0.3, metalness: 0.3, emissive: 0x220000
            });
            const matGreen = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.green, roughness: 0.8, metalness: 0.0 
            });
            const matWhite = new THREE.MeshStandardMaterial({
                color: 0xFFFFFF, roughness: 0.2, metalness: 0.1
            });

            for (let i = 0; i < CONFIG.particles; i++) {
                let mesh;
                let isLight = false;
                let blinkSpeed = 0;
                let blinkOffset = 0;

                const type = Math.random();
                
                // --- 粒子类型分布 ---
                // 60% 树叶 (Cube/Tetrahedron)
                // 15% 装饰球 (Sphere)
                // 10% 特殊挂件 (糖果/礼物)
                // 15% 闪烁灯光 (Light)

                if (type < 0.6) {
                    // 树叶
                    const isCube = Math.random() > 0.5;
                    mesh = new THREE.Mesh(isCube ? geometryCube : geometryTetra, matGreen);
                    mesh.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, Math.random()*Math.PI);
                
                } else if (type < 0.75) {
                    // 装饰球 (金/红)
                    mesh = new THREE.Mesh(geometrySphere, Math.random() > 0.5 ? matGold : matRed);
                    mesh.scale.setScalar(1.2 + Math.random() * 0.5);
                
                } else if (type < 0.85) {
                    // 特殊挂件
                    if (Math.random() > 0.5) {
                        // 糖果棒 (红白长条)
                        mesh = new THREE.Mesh(geometryCylinder, matRed);
                        mesh.rotation.z = Math.PI / 4; // 斜着放
                    } else {
                        // 礼物盒 (金色/白色)
                        mesh = new THREE.Mesh(geometrySmallBox, Math.random() > 0.5 ? matGold : matWhite);
                        mesh.rotation.y = Math.random();
                    }
                
                } else {
                    // 💡 闪烁灯光 💡
                    isLight = true;
                    // 随机选一个颜色
                    const colorHex = CONFIG.colors.lights[Math.floor(Math.random() * CONFIG.colors.lights.length)];
                    const lightMat = new THREE.MeshStandardMaterial({
                        color: colorHex,
                        emissive: colorHex,
                        emissiveIntensity: 2.0, // 初始亮度高一点
                        roughness: 0.1,
                        metalness: 0.0,
                        toneMapped: false // 让它看起来更亮，不被压暗
                    });
                    
                    mesh = new THREE.Mesh(geometryLight, lightMat);
                    blinkSpeed = 2 + Math.random() * 3; // 闪烁速度
                    blinkOffset = Math.random() * Math.PI * 2; // 随机相位，避免同时闪
                }

                // Tree Position (Target) - 使用体积算法
                // 灯光和挂件稍微往外放一点 (pow 0.3 而不是 0.4)
                const h = Math.random(); 
                const treePos = getConeVolumePosition(h, CONFIG.radius);
                
                if (isLight || type >= 0.6) {
                    // 把装饰物稍微往外推，防止被树叶埋没
                    const center = new THREE.Vector3(0, treePos.y, 0);
                    const dir = new THREE.Vector3().subVectors(treePos, center).normalize();
                    treePos.add(dir.multiplyScalar(0.8));
                }

                // Explode Position (Target)
                const explodePos = getExplodeSpherePosition(35);

                // Initial Pos
                mesh.position.copy(treePos);
                
                scene.add(mesh);

                const pData = {
                    mesh: mesh,
                    treePos: treePos,
                    explodePos: explodePos,
                    velocity: new THREE.Vector3(),
                    wobbleOffset: Math.random() * 100,
                    isLight: isLight,
                    blinkSpeed: blinkSpeed,
                    blinkOffset: blinkOffset
                };

                particles.push(pData);
                if (isLight) twinkleLights.push(pData);
            }
        }

        function createStar() {
            // Simple Star on top
            const geometry = new THREE.OctahedronGeometry(1.5, 0);
            const material = new THREE.MeshStandardMaterial({
                color: 0xFFFF00, // Bright Yellow
                emissive: 0xFFD700,
                emissiveIntensity: 2, // 提高星星亮度
                roughness: 0.2,
                metalness: 0.8,
                toneMapped: false
            });
            const star = new THREE.Mesh(geometry, material);
            star.position.set(0, CONFIG.height/2 + 2, 0);
            
            // Star is just a special particle
            scene.add(star);
            particles.push({
                mesh: star,
                treePos: new THREE.Vector3(0, CONFIG.height/2 + 2, 0),
                explodePos: new THREE.Vector3(0, 10, 0),
                wobbleOffset: 0
            });
        }

        // --- Photo Upload & Cache Logic ---

        // 清除现有的照片（从场景和内存中）
        window.clearCachedPhotos = function() {
            // 1. Remove from scene and memory
            // We iterate backwards to remove safely
            for (let i = particles.length - 1; i >= 0; i--) {
                if (particles[i].isPhoto) {
                    scene.remove(particles[i].mesh);
                    if (particles[i].mesh.material.map) {
                        particles[i].mesh.material.map.dispose();
                    }
                    particles[i].mesh.material.dispose();
                    particles[i].mesh.geometry.dispose();
                    particles.splice(i, 1);
                }
            }
            photoMeshes = [];

            // 2. Clear LocalStorage
            try {
                localStorage.removeItem(CONFIG.cacheKey);
                console.log("Cache cleared");
            } catch (e) {
                console.error("Failed to clear cache", e);
            }
        };

        // 处理用户上传
        window.handlePhotoUpload = async function(event) {
            const files = event.target.files;
            if (!files.length) return;

            // 覆盖模式：上传新照片前清除旧的
            window.clearCachedPhotos();

            const imagePromises = Array.from(files).map(processFileToDataURL);
            
            try {
                // 等待所有图片处理完成（压缩 + 转Base64）
                const base64Images = await Promise.all(imagePromises);
                
                // 创建 Mesh
                base64Images.forEach(imgData => {
                    const img = new Image();
                    img.src = imgData;
                    img.onload = () => createPhotoMesh(img);
                });

                // 保存到缓存
                saveToCache(base64Images);

            } catch (err) {
                console.error("Error processing images:", err);
                alert("图片处理失败，请重试");
            }

            // 重置 input 以便允许重复上传相同文件
            event.target.value = '';
        };

        // 将文件读取并压缩为 Base64
        function processFileToDataURL(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const img = new Image();
                    img.src = e.target.result;
                    img.onload = () => {
                        // 创建 Canvas 进行压缩
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        
                        // 最大尺寸限制 (避免 localStorage 爆满)
                        const MAX_SIZE = 800; 
                        let width = img.width;
                        let height = img.height;

                        if (width > height) {
                            if (width > MAX_SIZE) {
                                height *= MAX_SIZE / width;
                                width = MAX_SIZE;
                            }
                        } else {
                            if (height > MAX_SIZE) {
                                width *= MAX_SIZE / height;
                                height = MAX_SIZE;
                            }
                        }

                        canvas.width = width;
                        canvas.height = height;
                        ctx.drawImage(img, 0, 0, width, height);

                        // 转换为 JPEG Base64 (0.8 质量)
                        const dataURL = canvas.toDataURL('image/jpeg', 0.8);
                        resolve(dataURL);
                    };
                    img.onerror = reject;
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        }

        // 保存到 LocalStorage
        function saveToCache(imagesData) {
            const cacheData = {
                timestamp: Date.now(),
                images: imagesData
            };
            try {
                localStorage.setItem(CONFIG.cacheKey, JSON.stringify(cacheData));
            } catch (e) {
                console.warn("Storage quota exceeded or error", e);
                alert("照片过多或过大，部分缓存可能失败");
            }
        }

        // 加载缓存
        function loadCachedPhotos() {
            try {
                const raw = localStorage.getItem(CONFIG.cacheKey);
                if (!raw) return;

                const cache = JSON.parse(raw);
                const now = Date.now();

                // 检查有效期 (7天)
                if (now - cache.timestamp > CONFIG.cacheDuration) {
                    console.log("Cache expired, clearing...");
                    localStorage.removeItem(CONFIG.cacheKey);
                    return;
                }

                if (cache.images && Array.isArray(cache.images)) {
                    console.log(`Loading ${cache.images.length} photos from cache...`);
                    cache.images.forEach(imgData => {
                        const img = new Image();
                        img.src = imgData;
                        img.onload = () => createPhotoMesh(img);
                    });
                }
            } catch (e) {
                console.error("Failed to load cache", e);
            }
        }

        function createPhotoMesh(image) {
            const texture = new THREE.Texture(image);
            texture.needsUpdate = true;
            texture.colorSpace = THREE.SRGBColorSpace;

            // Maintain aspect ratio
            const aspect = image.width / image.height;
            const w = 4;
            const h = 4 / aspect;

            const geometry = new THREE.PlaneGeometry(w, h);
            // Use BasicMaterial for photos so they are always fully bright and not affected by shadows
            const material = new THREE.MeshBasicMaterial({ 
                map: texture, 
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 1.0 
            });

            const mesh = new THREE.Mesh(geometry, material);
            
            // Add a border (gold frame)
            const frameGeo = new THREE.BoxGeometry(w + 0.2, h + 0.2, 0.1);
            const frameMat = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.gold, 
                metalness: 0.8, 
                roughness: 0.2,
                emissive: 0x332200
            });
            const frame = new THREE.Mesh(frameGeo, frameMat);
            frame.position.z = -0.06;
            mesh.add(frame);

            // 修改位置计算逻辑：使用确定性的黄金螺旋算法
            // 传入当前照片的总数作为 index，确保每张新照片都有唯一且均匀的位置
            const index = photoMeshes.length;
            const treePos = getPhotoSurfacePosition(index);

            // Explode Position (Target) - 修改为球体分布
            const explodePos = getExplodeSpherePosition(35);

            mesh.position.copy(explodePos); // Start exploded if added later, or logic will fix it
            scene.add(mesh);

            photoMeshes.push({
                mesh: mesh,
                treePos: treePos,
                explodePos: explodePos,
                wobbleOffset: Math.random() * 100,
                isPhoto: true
            });
            
            // Add to main particles array for movement management
            particles.push(photoMeshes[photoMeshes.length-1]);
        }

        // --- Animation Loop ---
        function animate() {
            requestAnimationFrame(animate);
            time += 0.01;

            // 1. Smooth State Transition
            if (currentState !== targetState) {
                currentState = targetState;
                
                // If entering focus mode, pick a random photo to bring forward if any exist
                if (currentState === STATE.FOCUS && photoMeshes.length > 0) {
                     // Reset all photos first
                     photoMeshes.forEach(p => p.focusOffset = null);
                     // Pick one
                     const luckyPhoto = photoMeshes[Math.floor(Math.random() * photoMeshes.length)];
                     luckyPhoto.focusOffset = true;
                }
            }

            // 2. Camera Controls
            let camX = Math.sin(time * 0.2) * 50;
            let camZ = Math.cos(time * 0.2) * 50;
            let camY = 0;

            // Hand Influence
            if (currentState === STATE.EXPLODE && isHandDetected) {
                const angle = handPos.x * Math.PI; 
                camX = Math.sin(angle) * 60;
                camZ = Math.cos(angle) * 60;
                camY = handPos.y * 30;
            } else if (currentState === STATE.FOCUS) {
                camX *= 0.3;
                camZ *= 0.3;
            }

            camera.position.x += (camX - camera.position.x) * 0.05;
            camera.position.y += (camY - camera.position.y) * 0.05;
            camera.position.z += (camZ - camera.position.z) * 0.05;
            camera.lookAt(0, 0, 0);

            // 3. Update Visual Effects (Snow, Dust)
            
            // Snow
            if (snowParticles) {
                const positions = snowParticles.geometry.attributes.position.array;
                const vels = snowParticles.userData.velocities;
                for (let i=0; i<vels.length; i++) {
                    const i3 = i*3;
                    positions[i3+1] -= vels[i]; // Fall down
                    // Reset if too low
                    if (positions[i3+1] < -20) {
                        positions[i3+1] = 40;
                        positions[i3] = (Math.random() - 0.5) * 80;
                        positions[i3+2] = (Math.random() - 0.5) * 80;
                    }
                }
                snowParticles.geometry.attributes.position.needsUpdate = true;
            }
            
            // Magic Dust (Rotate)
            if (magicDust) {
                magicDust.rotation.y = time * 0.05;
            }

            // 4. Particle Animation & Twinkle
            
            // A. Update Lights (Twinkle Effect)
            // 无论是合拢还是散开，灯光都会闪烁
            twinkleLights.forEach(p => {
                // 使用正弦波控制发光强度：基准 1.0 + 波动 1.0 = 范围 [0, 2.0]
                const intensity = 1.0 + Math.sin(time * p.blinkSpeed + p.blinkOffset) * 1.0;
                // 保证最低亮度不为0，避免完全黑掉
                p.mesh.material.emissiveIntensity = Math.max(0.2, intensity);
            });

            // B. Move Particles
            particles.forEach(p => {
                let target;

                if (currentState === STATE.TREE) {
                    target = p.treePos;
                } else if (currentState === STATE.EXPLODE) {
                    target = p.explodePos;
                } else if (currentState === STATE.FOCUS) {
                    target = p.explodePos; 
                    
                    if (p.focusOffset) {
                        const camDir = camera.position.clone().normalize();
                        const targetPos = camDir.multiplyScalar(10);
                        p.mesh.position.lerp(targetPos, 0.1);
                        p.mesh.quaternion.copy(camera.quaternion);
                        return; // Skip standard update
                    }
                }

                const wobble = Math.sin(time * 2 + p.wobbleOffset) * 0.5;
                const finalTarget = target.clone();
                if (currentState !== STATE.TREE) {
                    finalTarget.y += wobble;
                }

                // Move mesh
                p.mesh.position.lerp(finalTarget, 0.04);
                
                // Rotation
                if (!p.isPhoto) {
                    // 装饰物缓慢自转
                    p.mesh.rotation.x += 0.01;
                    p.mesh.rotation.y += 0.01;
                } else if (currentState === STATE.TREE) {
                    p.mesh.lookAt(new THREE.Vector3(p.mesh.position.x * 2, p.mesh.position.y, p.mesh.position.z * 2));
                } else {
                    p.mesh.quaternion.copy(camera.quaternion);
                }
            });

            // 普通渲染
            renderer.render(scene, camera);
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        // Start
        init();

    </script>
</body>
</html>
```

@tab 改进圣诞树

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Gesture Controlled Christmas Tree</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            background-color: #050510; /* 深蓝夜空色 */
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #fff;
        }

        #canvas-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background: radial-gradient(circle at center, #1a1a2e 0%, #000000 100%); /* 渐变背景 */
        }

        /* UI Overlay */
        #ui-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
            pointer-events: none; /* Let clicks pass through to canvas if needed */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 20px;
            box-sizing: border-box;
        }

        .header {
            text-align: left;
            text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
        }

        h1 {
            margin: 0;
            font-weight: 300;
            color: #FFD700; /* Gold */
            letter-spacing: 2px;
            font-size: 24px;
        }

        p.subtitle {
            margin: 5px 0 0 0;
            color: #aaa;
            font-size: 14px;
        }

        /* Status & Instructions & Buttons Container */
        .status-panel {
            position: absolute;
            top: 20px;
            right: 20px;
            text-align: right;
            display: flex;
            flex-direction: column;
            align-items: flex-end; /* Right align everything */
            gap: 12px;
        }

        .status-tag {
            display: inline-block;
            padding: 8px 16px;
            background: rgba(20, 30, 20, 0.8);
            border: 1px solid #FFD700;
            border-radius: 20px;
            color: #FFD700;
            font-weight: bold;
            font-size: 14px;
            transition: all 0.3s ease;
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
        }

        .instructions {
            background: rgba(0, 0, 0, 0.6);
            padding: 15px;
            border-radius: 8px; /* Slightly squarer for tech feel */
            font-size: 12px;
            color: #ddd;
            width: 200px; /* Fixed width for alignment */
            pointer-events: auto;
            backdrop-filter: blur(10px);
            border-left: 2px solid #C41E3A; /* Red accent */
            border-right: 1px solid rgba(255, 255, 255, 0.1);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .instruction-item {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            justify-content: space-between; /* Space out icon and text */
        }
        
        .icon { font-size: 16px; width: 20px; text-align: center;}

        /* Upload Buttons - New Elegant Style */
        .upload-container {
            pointer-events: auto;
            display: flex;
            flex-direction: column;
            gap: 8px;
            align-items: flex-end;
            margin-top: 5px;
            width: 220px; /* Give it a bit more width for the dropdown */
        }

        .btn {
            background: rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(255, 215, 0, 0.5); /* Subtle Gold Border */
            color: #FFD700;
            padding: 8px 20px;
            border-radius: 4px; /* Minimalist radius */
            cursor: pointer;
            font-size: 12px;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            backdrop-filter: blur(5px);
            width: 100%; /* Match width */
            text-align: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            box-sizing: border-box; /* Ensure padding doesn't increase width */
        }

        .btn:hover {
            background: rgba(255, 215, 0, 0.15);
            border-color: #FFD700;
            box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
            transform: translateX(-5px); /* Subtle slide left */
        }

        .btn.active {
            background: rgba(255, 215, 0, 0.2);
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.4);
            border-color: #FFD700;
        }

        /* Group music buttons slightly */
        .music-group {
            display: flex;
            gap: 5px;
            width: 100%;
        }
        
        .music-group .btn {
            flex: 1; /* Split space */
            padding: 8px 5px; /* Smaller padding */
        }
        
        #music-btn {
            flex: 0 0 40%; /* Play button takes less space */
        }
        
        #playlist-select {
            flex: 1;
            appearance: none; /* Remove default arrow */
            -webkit-appearance: none;
            text-align: left;
            text-align-last: center;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FFD700' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 8px center;
            background-size: 12px;
            padding-right: 25px; /* Space for arrow */
            padding-left: 10px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #FFD700;
        }
        
        #playlist-select option {
            background: #222;
            color: #FFD700;
            padding: 5px;
        }

        /* Differentiate clear button slightly */
        #clear-btn {
            border-color: rgba(255, 255, 255, 0.3);
            color: #aaa;
        }
        
        #clear-btn:hover {
            border-color: #fff;
            color: #fff;
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }

        #file-input { display: none; }
        #music-input { display: none; }

        /* Webcam feedback (hidden but processed) */
        #video-feed {
            position: absolute;
            bottom: 20px;
            left: 20px;
            width: 160px;
            height: 120px;
            border-radius: 10px;
            transform: scaleX(-1); /* Mirror */
            border: 2px solid #FFD700;
            opacity: 0.7;
            z-index: 20;
            object-fit: cover;
            display: block; /* Required for MediaPipe */
        }

        /* Loading Screen */
        #loading {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            z-index: 100;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #FFD700;
            transition: opacity 0.5s;
        }

        .loader {
            border: 4px solid #333;
            border-top: 4px solid #FFD700;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin-bottom: 15px;
        }

        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

    </style>
    <!-- MediaPipe Hands Global Script (Fix for Module Error) -->
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/hands.js" crossorigin="anonymous"></script>

    <!-- Import Maps for Three.js and Addons -->
    <script type="importmap">
        {
            "imports": {
                "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
                "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"
            }
        }
    </script>
</head>
<body>

    <!-- Audio Element (Added crossorigin for recording) -->
    <audio id="bg-music" loop crossorigin="anonymous"></audio>

    <!-- Loading Screen -->
    <div id="loading">
        <div class="loader"></div>
        <div id="loading-text">正在初始化视觉引擎与AI模型...</div>
    </div>

    <!-- Video Element for MediaPipe (Visible for user feedback) -->
    <video id="video-feed" playsinline></video>

    <!-- UI Layer -->
    <div id="ui-layer">
        <div class="header">
            <h1>CHRISTMAS GESTURE</h1>
            <p class="subtitle">MediaPipe & Three.js WebGL Experience</p>
        </div>

        <div class="status-panel">
            <div id="mode-display" class="status-tag">等待手势...</div>
            
            <div class="instructions">
                <div class="instruction-item"><span>✊ 握拳</span> <span>聚合形态</span></div>
                <div class="instruction-item"><span>🖐 张开</span> <span>散开形态</span></div>
                <div class="instruction-item"><span>🤏 捏合</span> <span>特写照片</span></div>
                <div class="instruction-item"><span>👋 移动</span> <span>旋转视角</span></div>
            </div>

            <div class="upload-container">
                <button id="upload-btn" class="btn" onclick="document.getElementById('file-input').click()">
                    <span>📷</span> 上传照片
                </button>
                
                <!-- Music Controls -->
                <div class="music-group">
                    <button id="music-btn" class="btn" onclick="toggleMusic()">
                        <span>🔇</span>
                    </button>
                    <!-- 下拉选择框替代原来的“换音乐”按钮 -->
                    <select id="playlist-select" class="btn" onchange="handlePlaylistChange(this)">
                        <option disabled>-- 选择背景音乐 --</option>
                        <!-- Options will be populated by JS -->
                        <option value="custom">📂 自定义...</option>
                    </select>
                </div>

                <button id="clear-btn" class="btn" onclick="clearCachedPhotos()">
                    <span>🗑️</span> 清除照片
                </button>
                
                <input type="file" id="file-input" accept="image/*" multiple onchange="handlePhotoUpload(event)">
                <!-- 新增音乐文件输入框 -->
                <input type="file" id="music-input" accept="audio/*, .mp3, .m4a" onchange="handleMusicFileUpload(event)">
            </div>
        </div>
    </div>

    <!-- 3D Canvas -->
    <div id="canvas-container"></div>

    <!-- Main Logic -->
    <script type="module">
        import * as THREE from 'three';

        // --- Configuration & Constants ---
        const CONFIG = {
            colors: {
                green: 0x228B22,   // Forest Green (Brighter)
                gold: 0xFFD700,    // Metallic Gold
                red: 0xFF0000,     // Bright Red
                white: 0xFFFFFF,
                // 新增灯光颜色池
                lights: [0xFF0000, 0xFFFF00, 0x00BFFF, 0xFF69B4, 0xFFA500] 
            },
            particles: 1800,       // 稍微增加粒子数量到 1800，容纳更多装饰
            radius: 18,            // Base radius of tree bottom
            height: 35,            // Height of tree
            cacheKey: 'xmas_tree_photos_v1',
            cacheDuration: 7 * 24 * 60 * 60 * 1000, // 7 Days in ms
            musicCacheKey: 'xmas_music_pref_v3', // 更新版本号以适应新逻辑
            
            // 内置歌单
            playlist: [
                { name: "Last Christmas", url: "https://cdn.bornforthis.cn/mp3/LastChristmas(Single%20Version).m4a" },
                { name: "Jingle Bell Rock", url: "https://cdn.bornforthis.cn/mp3/JingleBellRock.m4a" },
                { name: "Santa Tell Me", url: "https://cdn.bornforthis.cn/mp3/SantaTellMe.m4a" },
                { name: "Feliz Navidad", url: "https://cdn.bornforthis.cn/mp3/FelizNavidad.m4a" },
                { name: "Santa Claus is Coming", url: "https://cdn.bornforthis.cn/mp3/SantaClausisComingtoTown.m4a" },
                { name: "Here Comes Santa Claus", url: "https://cdn.bornforthis.cn/mp3/HereComesSantaClaus.m4a" },
                { name: "Merry Christmas Mr Lawrence", url: "https://cdn.bornforthis.cn/mp3/MerryChristmasMrLawrence.m4a" },
                { name: "Christmas Time in My Town", url: "https://cdn.bornforthis.cn/mp3/ChristmasTimeinMyHomeTown.mp3" },
            ]
        };

        // --- Global Variables ---
        let scene, camera, renderer;
        let particles = []; // Array to store { mesh, treePos, explodePos, currentPos, speed }
        let photoMeshes = []; // Array specifically for user photos
        let twinkleLights = []; // 专门存储需要闪烁的灯光粒子
        
        // 新增的特效系统
        let snowParticles, magicDust;
        
        let time = 0;
        
        // Interaction State
        const STATE = {
            TREE: 'TREE',
            EXPLODE: 'EXPLODE',
            FOCUS: 'FOCUS'
        };
        let currentState = STATE.TREE;
        let targetState = STATE.TREE;
        
        // Hand Data
        let handPos = { x: 0, y: 0 }; // Normalized -1 to 1
        let isHandDetected = false;

        // Music State
        let isMusicPlaying = false;
        let currentMusicSource = CONFIG.playlist[0].url; // Default to first song

        // --- Initialization ---
        async function init() {
            // 1. Scene Setup
            const container = document.getElementById('canvas-container');
            scene = new THREE.Scene();
            // 移除纯色背景，因为我们在 CSS 里用了渐变，这里设为透明或保留雾效果
            scene.background = null; 
            // 增加一点雾气增加深邃感
            scene.fog = new THREE.FogExp2(0x050510, 0.01);

            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 0, 50);

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.outputColorSpace = THREE.SRGBColorSpace;
            container.appendChild(renderer.domElement);

            // 2. Lighting - 大幅增强光照
            // 2.1 强环境光，照亮所有阴影
            const ambientLight = new THREE.AmbientLight(0xffffff, 1.0); 
            scene.add(ambientLight);

            // 2.2 主平行光（模拟阳光），提供清晰的明暗关系
            const mainLight = new THREE.DirectionalLight(0xffffff, 2.0);
            mainLight.position.set(10, 20, 20);
            scene.add(mainLight);

            // 2.3 补光灯（金色），增加华丽感
            const pointLight = new THREE.PointLight(CONFIG.colors.gold, 1.5, 100);
            pointLight.position.set(0, 20, 10);
            scene.add(pointLight);
            
            // 2.4 氛围灯（红绿），增加节日气氛，但调高亮度
            const redLight = new THREE.PointLight(CONFIG.colors.red, 1.5, 50);
            redLight.position.set(15, 10, 15);
            scene.add(redLight);
            
            const greenLight = new THREE.PointLight(CONFIG.colors.green, 1.5, 50);
            greenLight.position.set(-15, -10, 15);
            scene.add(greenLight);

            // 3. Post Processing Removed

            // 4. Content Generation
            createParticles();
            createLightStrip(); // 新增：螺旋灯带
            createStar();
            createEnvironment(); // 新增：星空
            createSnow();        // 新增：雪花
            createMagicDust();   // 新增：魔法金粉
            
            // 5. Load Cached Photos & Music Preference
            loadCachedPhotos();
            initAudio(); // 初始化音频和下拉菜单

            // 6. Setup MediaPipe
            await setupMediaPipe();

            // 7. Events
            window.addEventListener('resize', onWindowResize);

            // 8. Start Loop
            document.getElementById('loading').style.opacity = '0';
            setTimeout(() => document.getElementById('loading').style.display = 'none', 500);
            animate();
        }

        // --- MediaPipe Logic ---
        async function setupMediaPipe() {
            const video = document.getElementById('video-feed');

            // Access Global Hands Class
            const hands = new window.Hands({locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
            }});

            hands.setOptions({
                maxNumHands: 1,
                modelComplexity: 1,
                minDetectionConfidence: 0.7,
                minTrackingConfidence: 0.6
            });

            hands.onResults(onHandsResults);

            // Access Webcam
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                video.srcObject = stream;
                await video.play();

                // Start processing loop specific to MediaPipe
                async function detectionLoop() {
                    if (video.currentTime > 0 && !video.paused && !video.ended) {
                        await hands.send({image: video});
                    }
                    requestAnimationFrame(detectionLoop);
                }
                detectionLoop();
            } catch (err) {
                console.error("Camera access denied or failed", err);
                document.getElementById('loading-text').innerText = "未检测到摄像头，请检查权限。应用将自动运行演示模式。";
                setTimeout(() => {
                    document.getElementById('loading').style.display = 'none';
                    // Auto demo mode logic could go here
                }, 2000);
            }
        }

        function onHandsResults(results) {
            const modeDisplay = document.getElementById('mode-display');
            
            if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                isHandDetected = true;
                const landmarks = results.multiHandLandmarks[0];

                // 1. Calculate Hand Center (for rotation)
                // Wrist is 0, Middle Finger MCP is 9
                const cx = landmarks[9].x;
                const cy = landmarks[9].y;
                handPos.x = (cx - 0.5) * 2; // -1 to 1
                handPos.y = (cy - 0.5) * 2;

                // 2. Gesture Recognition
                const state = detectGesture(landmarks);
                
                if (state) {
                    targetState = state;
                    
                    // UI Update
                    let text = "未知";
                    let bg = "#333";
                    if (state === STATE.TREE) { text = "🌲 聚合形态"; bg = CONFIG.colors.green; }
                    if (state === STATE.EXPLODE) { text = "✨ 散开形态"; bg = "#444"; }
                    if (state === STATE.FOCUS) { text = "📷 聚焦照片"; bg = CONFIG.colors.red; }
                    
                    modeDisplay.innerText = text;
                    modeDisplay.style.borderColor = (state === STATE.FOCUS) ? '#fff' : CONFIG.colors.gold;
                }

            } else {
                isHandDetected = false;
            }
        }

        function detectGesture(lm) {
            const dist = (i, j) => Math.sqrt(Math.pow(lm[i].x - lm[j].x, 2) + Math.pow(lm[i].y - lm[j].y, 2));
            const wrist = 0;
            const tips = [8, 12, 16, 20];
            const pips = [6, 10, 14, 18];
            
            // Check Fingers Extended
            let extendedCount = 0;
            if (dist(4, 17) > 0.2) extendedCount++; // Rough thumb check

            for (let k=0; k<4; k++) {
                if (dist(wrist, tips[k]) > dist(wrist, pips[k]) * 1.2) {
                    extendedCount++;
                }
            }

            // Pinch Detection (Thumb 4 and Index 8)
            const pinchDist = dist(4, 8);

            if (pinchDist < 0.08) {
                return STATE.FOCUS;
            } else if (extendedCount >= 4) {
                return STATE.EXPLODE;
            } else if (extendedCount <= 1) {
                return STATE.TREE;
            }
            
            return null; 
        }

        // --- Audio Logic ---
        
        function initAudio() {
            // 1. Populate Dropdown
            const select = document.getElementById('playlist-select');
            
            // Insert Built-in options BEFORE the "Custom" option
            CONFIG.playlist.forEach(song => {
                const option = document.createElement('option');
                option.value = song.url;
                option.innerText = `🎵 ${song.name}`;
                // Insert before the last option (which is Custom)
                select.insertBefore(option, select.lastElementChild);
            });

            // 2. Error Handling & Fallback
            const audio = document.getElementById('bg-music');
            
            // Critical fix for "The element has no supported sources"
            audio.addEventListener('error', function(e) {
                console.warn("Audio load error:", e);
                const src = audio.src;
                // If it failed and we had crossorigin set, try removing it (fallback mode)
                // This means audio won't be recordable via WebAudio, but at least it plays.
                if (audio.crossOrigin === 'anonymous') {
                    console.log("Attempting fallback: Removing crossorigin attribute...");
                    audio.removeAttribute('crossorigin');
                    audio.src = src; // Retry
                    audio.load();
                    if (isMusicPlaying) audio.play().catch(err => console.log("Fallback play error:", err));
                }
            }, true); // Capture phase

            // 3. Load Preferences
            try {
                const raw = localStorage.getItem(CONFIG.musicCacheKey);
                if (raw) {
                    const cache = JSON.parse(raw);
                    const now = Date.now();
                    
                    if (now - cache.timestamp <= CONFIG.cacheDuration) {
                        // 恢复音乐源
                        if (cache.customSrc) {
                            currentMusicSource = cache.customSrc;
                        }

                        // 恢复播放状态
                        if (cache.enabled) {
                            isMusicPlaying = true;
                            // Play will be called below
                        }
                    }
                }
            } catch (e) {
                console.error("Error loading music preference", e);
            }

            // 4. Apply Source
            audio.src = currentMusicSource;
            
            // 5. Sync Dropdown Value
            // Check if current source is in playlist
            const inPlaylist = CONFIG.playlist.find(p => p.url === currentMusicSource);
            if (inPlaylist) {
                select.value = currentMusicSource;
            } else {
                // If not in playlist, it stays default or handled by custom
            }

            // 6. Play if needed
            updateMusicUI(isMusicPlaying);
            if (isMusicPlaying) {
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log("Auto-play blocked or source invalid:", error);
                        // Don't turn off isMusicPlaying immediately if it's just blocking;
                        // But if it's a source error, the 'error' listener handles it.
                        // If it's policy block, we update UI
                        if (error.name === 'NotAllowedError') {
                             isMusicPlaying = false;
                             updateMusicUI(false);
                        }
                    });
                }
            }
        }

        // 处理下拉菜单变化
        window.handlePlaylistChange = function(selectElem) {
            const value = selectElem.value;
            
            if (value === 'custom') {
                // 用户选择“自定义”
                handleCustomMusicClick();
                // 暂时把选中的值重置回之前的（或者保持 Custom），等待用户完成上传
                // 实际上 handleCustomMusicClick 会更新源
            } else {
                // 用户选择了内置歌曲
                changeMusicSource(value, 'builtin');
            }
        };

        window.handleCustomMusicClick = function() {
            const url = prompt("请输入背景音乐链接 (MP3/M4A)\n或者点击 [取消] 上传本地文件:");
            
            if (url) {
                changeMusicSource(url.trim(), 'link');
            } else if (url === "") {
                // Cancelled or empty
                // Revert selection if possible?
            } else {
                // Clicked Cancel -> File Upload
                document.getElementById('music-input').click();
            }
        };

        window.handleMusicFileUpload = function(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(e) {
                const result = e.target.result;
                const canCache = result.length < 4 * 1024 * 1024; 
                changeMusicSource(result, 'file', canCache);
                if (!canCache) {
                    alert("音乐文件较大，仅在本次访问播放，不会缓存到本地。");
                }
            };
            reader.readAsDataURL(file);
            event.target.value = ''; 
        };

        function changeMusicSource(src, type, shouldCache = true) {
            const audio = document.getElementById('bg-music');
            currentMusicSource = src;
            
            // Reset crossorigin if it was removed by fallback previously, to try recording again if possible
            if (!audio.hasAttribute('crossorigin') && type !== 'file') { // Local files don't need CORS
                 audio.setAttribute('crossorigin', 'anonymous');
            }
            
            audio.src = src;
            
            // Auto play
            isMusicPlaying = true;
            audio.play().catch(e => console.log("Play interrupted or failed:", e));
            updateMusicUI(true);
            
            // Update Dropdown UI to reflect change
            const select = document.getElementById('playlist-select');
            // If it's a built-in type, select matches src
            if (type === 'builtin') {
                 select.value = src;
            }
            
            // Save
            saveMusicPreference(true, shouldCache ? src : null);
        }

        window.toggleMusic = function() {
            const audio = document.getElementById('bg-music');
            isMusicPlaying = !isMusicPlaying;
            
            if (isMusicPlaying) {
                audio.play().catch(e => {
                    console.log("Play failed in toggle:", e);
                    // Revert UI if play fails hard
                    isMusicPlaying = false;
                    updateMusicUI(false);
                });
            } else {
                audio.pause();
            }
            
            updateMusicUI(isMusicPlaying);
            // Save state (keep existing src)
            saveMusicPreference(isMusicPlaying, null, true); 
        };

        function updateMusicUI(isPlaying) {
            const btn = document.getElementById('music-btn');
            if (isPlaying) {
                btn.innerHTML = '<span>🔊</span>';
                btn.classList.add('active');
            } else {
                btn.innerHTML = '<span>🔇</span>';
                btn.classList.remove('active');
            }
        }

        // srcData: 如果不为 null，则更新 customSrc；如果为 null 且 updateOnlyState=false，则清除 customSrc
        // updateOnlyState: 如果为 true，只更新开关状态，不碰 source
        function saveMusicPreference(isEnabled, srcData = null, updateOnlyState = false) {
            try {
                let dataToSave = {
                    timestamp: Date.now(),
                    enabled: isEnabled,
                    customSrc: null
                };

                if (updateOnlyState) {
                    const oldRaw = localStorage.getItem(CONFIG.musicCacheKey);
                    if (oldRaw) {
                        const old = JSON.parse(oldRaw);
                        dataToSave.customSrc = old.customSrc;
                    }
                } else {
                    dataToSave.customSrc = srcData;
                }

                localStorage.setItem(CONFIG.musicCacheKey, JSON.stringify(dataToSave));
            } catch (e) {
                console.warn("Failed to save music preference", e);
                // Fallback: save disabled state without source
                try {
                     const fallbackData = {
                        timestamp: Date.now(),
                        enabled: isEnabled,
                        customSrc: null 
                    };
                    localStorage.setItem(CONFIG.musicCacheKey, JSON.stringify(fallbackData));
                } catch(e2) {}
            }
        }

        // --- Visual Effects Creation ---

        function createEnvironment() {
            // Stars
            const starsGeo = new THREE.BufferGeometry();
            const starsCount = 2000;
            const posArray = new Float32Array(starsCount * 3);
            
            for(let i=0; i<starsCount*3; i++) {
                // Distant stars
                posArray[i] = (Math.random() - 0.5) * 400; 
            }
            
            starsGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            
            const starsMat = new THREE.PointsMaterial({
                size: 0.5,
                color: 0xffffff,
                transparent: true,
                opacity: 0.8
            });
            
            const starField = new THREE.Points(starsGeo, starsMat);
            scene.add(starField);
        }

        // --- 动态生成雪花纹理 ---
        function createSnowflakeTexture() {
            const canvas = document.createElement('canvas');
            canvas.width = 32;
            canvas.height = 32;
            const context = canvas.getContext('2d');

            // 绘制雪花形状 (六角星)
            context.strokeStyle = '#FFFFFF';
            context.lineWidth = 2;
            context.lineCap = 'round';
            
            context.translate(16, 16);
            for(let i = 0; i < 6; i++) {
                context.beginPath();
                context.moveTo(0, 0);
                context.lineTo(0, 14);
                context.stroke();
                
                // 小分叉
                context.beginPath();
                context.moveTo(0, 8);
                context.lineTo(4, 10);
                context.stroke();
                
                context.beginPath();
                context.moveTo(0, 8);
                context.lineTo(-4, 10);
                context.stroke();
                
                context.rotate(Math.PI / 3);
            }

            return new THREE.CanvasTexture(canvas);
        }

        function createSnow() {
            const snowGeo = new THREE.BufferGeometry();
            const snowCount = 500;
            const posArray = new Float32Array(snowCount * 3);
            const velArray = new Float32Array(snowCount); // Falling speed
            
            for(let i=0; i<snowCount; i++) {
                const i3 = i * 3;
                posArray[i3] = (Math.random() - 0.5) * 80; // x
                posArray[i3+1] = (Math.random() - 0.5) * 80 + 20; // y (start high)
                posArray[i3+2] = (Math.random() - 0.5) * 80; // z
                
                velArray[i] = 0.1 + Math.random() * 0.1; // speed
            }
            
            snowGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            
            // 使用生成的雪花纹理
            const snowTexture = createSnowflakeTexture();

            const snowMat = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 2.0, // 调大尺寸以显示图案
                map: snowTexture,
                transparent: true,
                opacity: 0.8,
                depthWrite: false, // 避免透明遮挡问题
                blending: THREE.AdditiveBlending 
            });
            
            snowParticles = new THREE.Points(snowGeo, snowMat);
            snowParticles.userData = { velocities: velArray };
            scene.add(snowParticles);
        }

        function createMagicDust() {
            const dustGeo = new THREE.BufferGeometry();
            const count = 300;
            const posArray = new Float32Array(count * 3);
            
            for(let i=0; i<count*3; i++) {
                posArray[i] = (Math.random() - 0.5) * 40; 
            }
            
            dustGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            
            const dustMat = new THREE.PointsMaterial({
                color: 0xFFD700, // Gold
                size: 0.3,
                transparent: true,
                opacity: 0.6,
                blending: THREE.AdditiveBlending
            });
            
            magicDust = new THREE.Points(dustGeo, dustMat);
            scene.add(magicDust);
        }

        // --- Particle System Logic ---

        // 移除旧的螺旋线逻辑，改用体积计算
        function getConeVolumePosition(h, maxR) {
            // h is 0 (bottom) to 1 (top)
            
            // 当前高度的圆锥截面半径
            const rAtHeight = maxR * (1 - h);
            
            // 随机分布在圆截面内，但更倾向于外表面以保持树的形状
            // 使用 Math.pow 调整分布：指数越小越均匀，指数越大越集中在边缘
            const r = rAtHeight * Math.pow(Math.random(), 0.4); 
            
            const angle = Math.random() * Math.PI * 2;
            
            const x = r * Math.cos(angle);
            const z = r * Math.sin(angle);
            
            // 将高度映射到实际坐标 y
            const y = -CONFIG.height/2 + h * CONFIG.height;
            
            return new THREE.Vector3(x, y, z);
        }

        // 新增：专门用于散开形态的球体分布算法 (圆形)
        function getExplodeSpherePosition(maxRadius) {
            // 球坐标随机分布
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            
            // 使用立方根确保在体积内均匀分布（不仅仅是表面，也不仅仅是核心）
            const r = maxRadius * Math.cbrt(Math.random()); 
            
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);
            
            return new THREE.Vector3(x, y, z);
        }

        // 新增：专门用于照片的均匀分布算法 (基于黄金角度螺旋)
        function getPhotoSurfacePosition(index) {
            const goldenRatio = 0.61803398875;
            const h = ((index * goldenRatio) % 0.7) + 0.15; 
            const angle = index * Math.PI * 2 * goldenRatio;
            const rBase = CONFIG.radius * (1 - h);
            const r = rBase + 2.5; 
            
            const x = r * Math.cos(angle);
            const z = r * Math.sin(angle);
            const y = -CONFIG.height/2 + h * CONFIG.height;
            
            return new THREE.Vector3(x, y, z);
        }

        // 新增：螺旋灯带生成函数
        function createLightStrip() {
            // 密度调整：增加数量，减小尺寸，使其看起来像连续的灯带
            const stripLightsCount = 800; // 从 160 增加到 800，极大提升密度
            const turns = 10; // 稍微增加圈数，让缠绕感更强
            const geometry = new THREE.SphereGeometry(0.12, 8, 8); // 尺寸减小到 0.12，更像精致的小灯珠
            
            const material = new THREE.MeshStandardMaterial({
                color: 0xFFFFE0, // Light Yellow
                emissive: 0xFFD700,
                emissiveIntensity: 1.5,
                roughness: 0.2,
                metalness: 0.5,
                toneMapped: false
            });

            for (let i = 0; i < stripLightsCount; i++) {
                // 0 (top) -> 1 (bottom)
                const t = i / stripLightsCount;
                
                // Spiral logic
                const angle = t * turns * Math.PI * 2;
                const heightRange = CONFIG.height;
                const y = (heightRange / 2) - (t * heightRange); // Top down
                
                // Radius expands as we go down
                // 稍微往里收一点点 (+1.0)，贴合树叶表面更紧密
                const r = (t * CONFIG.radius) + 1.0; 
                
                const x = r * Math.cos(angle);
                const z = r * Math.sin(angle);
                
                const treePos = new THREE.Vector3(x, y, z);
                const explodePos = getExplodeSpherePosition(35);
                
                const mesh = new THREE.Mesh(geometry, material.clone()); 
                
                mesh.position.copy(treePos);
                scene.add(mesh);
                
                const pData = {
                    mesh: mesh,
                    treePos: treePos,
                    explodePos: explodePos,
                    velocity: new THREE.Vector3(),
                    wobbleOffset: Math.random() * 100,
                    isLight: true,
                    // 灯带特有的跑马灯闪烁效果
                    blinkSpeed: 2.0, // 稍微加快流动速度
                    blinkOffset: i * 0.05 // 调整相位偏移，因为粒子变多了，间隔要变小才能保持流动感
                };
                
                particles.push(pData);
                twinkleLights.push(pData);
            }
        }

        function createParticles() {
            // 1. 基础几何体
            const geometrySphere = new THREE.SphereGeometry(0.4, 16, 16); 
            const geometryCube = new THREE.BoxGeometry(0.8, 0.8, 0.8); // 树叶
            const geometryTetra = new THREE.TetrahedronGeometry(0.6); // 树叶
            const geometrySmallBox = new THREE.BoxGeometry(0.5, 0.5, 0.5); // 礼物盒
            const geometryCylinder = new THREE.CylinderGeometry(0.1, 0.1, 1.5, 8); // 糖果棒
            const geometryLight = new THREE.SphereGeometry(0.25, 16, 16); // 灯泡

            // 2. 基础材质
            const matGold = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.gold, roughness: 0.2, metalness: 0.8, emissive: 0x443300 
            });
            const matRed = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.red, roughness: 0.3, metalness: 0.3, emissive: 0x220000
            });
            const matGreen = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.green, roughness: 0.8, metalness: 0.0 
            });
            const matWhite = new THREE.MeshStandardMaterial({
                color: 0xFFFFFF, roughness: 0.2, metalness: 0.1
            });

            for (let i = 0; i < CONFIG.particles; i++) {
                let mesh;
                let isLight = false;
                let blinkSpeed = 0;
                let blinkOffset = 0;

                const type = Math.random();
                
                // --- 粒子类型分布 ---
                // 60% 树叶 (Cube/Tetrahedron)
                // 15% 装饰球 (Sphere)
                // 10% 特殊挂件 (糖果/礼物)
                // 15% 闪烁灯光 (Light)

                if (type < 0.6) {
                    // 树叶
                    const isCube = Math.random() > 0.5;
                    mesh = new THREE.Mesh(isCube ? geometryCube : geometryTetra, matGreen);
                    mesh.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, Math.random()*Math.PI);
                
                } else if (type < 0.75) {
                    // 装饰球 (金/红)
                    mesh = new THREE.Mesh(geometrySphere, Math.random() > 0.5 ? matGold : matRed);
                    mesh.scale.setScalar(1.2 + Math.random() * 0.5);
                
                } else if (type < 0.85) {
                    // 特殊挂件
                    if (Math.random() > 0.5) {
                        // 糖果棒 (红白长条)
                        mesh = new THREE.Mesh(geometryCylinder, matRed);
                        mesh.rotation.z = Math.PI / 4; // 斜着放
                    } else {
                        // 礼物盒 (金色/白色)
                        mesh = new THREE.Mesh(geometrySmallBox, Math.random() > 0.5 ? matGold : matWhite);
                        mesh.rotation.y = Math.random();
                    }
                
                } else {
                    // 💡 闪烁灯光 💡
                    isLight = true;
                    // 随机选一个颜色
                    const colorHex = CONFIG.colors.lights[Math.floor(Math.random() * CONFIG.colors.lights.length)];
                    const lightMat = new THREE.MeshStandardMaterial({
                        color: colorHex,
                        emissive: colorHex,
                        emissiveIntensity: 2.0, // 初始亮度高一点
                        roughness: 0.1,
                        metalness: 0.0,
                        toneMapped: false // 让它看起来更亮，不被压暗
                    });
                    
                    mesh = new THREE.Mesh(geometryLight, lightMat);
                    blinkSpeed = 2 + Math.random() * 3; // 闪烁速度
                    blinkOffset = Math.random() * Math.PI * 2; // 随机相位，避免同时闪
                }

                // Tree Position (Target) - 使用体积算法
                // 灯光和挂件稍微往外放一点 (pow 0.3 而不是 0.4)
                const h = Math.random(); 
                const treePos = getConeVolumePosition(h, CONFIG.radius);
                
                if (isLight || type >= 0.6) {
                    // 把装饰物稍微往外推，防止被树叶埋没
                    const center = new THREE.Vector3(0, treePos.y, 0);
                    const dir = new THREE.Vector3().subVectors(treePos, center).normalize();
                    treePos.add(dir.multiplyScalar(0.8));
                }

                // Explode Position (Target)
                const explodePos = getExplodeSpherePosition(35);

                // Initial Pos
                mesh.position.copy(treePos);
                
                scene.add(mesh);

                const pData = {
                    mesh: mesh,
                    treePos: treePos,
                    explodePos: explodePos,
                    velocity: new THREE.Vector3(),
                    wobbleOffset: Math.random() * 100,
                    isLight: isLight,
                    blinkSpeed: blinkSpeed,
                    blinkOffset: blinkOffset
                };

                particles.push(pData);
                if (isLight) twinkleLights.push(pData);
            }
        }

        function createStar() {
            // Simple Star on top
            const geometry = new THREE.OctahedronGeometry(1.5, 0);
            const material = new THREE.MeshStandardMaterial({
                color: 0xFFFF00, // Bright Yellow
                emissive: 0xFFD700,
                emissiveIntensity: 2, // 提高星星亮度
                roughness: 0.2,
                metalness: 0.8,
                toneMapped: false
            });
            const star = new THREE.Mesh(geometry, material);
            star.position.set(0, CONFIG.height/2 + 2, 0);
            
            // Star is just a special particle
            scene.add(star);
            particles.push({
                mesh: star,
                treePos: new THREE.Vector3(0, CONFIG.height/2 + 2, 0),
                explodePos: new THREE.Vector3(0, 10, 0),
                wobbleOffset: 0
            });
        }

        // --- Photo Upload & Cache Logic ---

        // 清除现有的照片（从场景和内存中）
        window.clearCachedPhotos = function() {
            // 1. Remove from scene and memory
            // We iterate backwards to remove safely
            for (let i = particles.length - 1; i >= 0; i--) {
                if (particles[i].isPhoto) {
                    scene.remove(particles[i].mesh);
                    if (particles[i].mesh.material.map) {
                        particles[i].mesh.material.map.dispose();
                    }
                    particles[i].mesh.material.dispose();
                    particles[i].mesh.geometry.dispose();
                    particles.splice(i, 1);
                }
            }
            photoMeshes = [];

            // 2. Clear LocalStorage
            try {
                localStorage.removeItem(CONFIG.cacheKey);
                console.log("Cache cleared");
            } catch (e) {
                console.error("Failed to clear cache", e);
            }
        };

        // 处理用户上传
        window.handlePhotoUpload = async function(event) {
            const files = event.target.files;
            if (!files.length) return;

            // 覆盖模式：上传新照片前清除旧的
            window.clearCachedPhotos();

            const imagePromises = Array.from(files).map(processFileToDataURL);
            
            try {
                // 等待所有图片处理完成（压缩 + 转Base64）
                const base64Images = await Promise.all(imagePromises);
                
                // 创建 Mesh
                base64Images.forEach(imgData => {
                    const img = new Image();
                    img.src = imgData;
                    img.onload = () => createPhotoMesh(img);
                });

                // 保存到缓存
                saveToCache(base64Images);

            } catch (err) {
                console.error("Error processing images:", err);
                alert("图片处理失败，请重试");
            }

            // 重置 input 以便允许重复上传相同文件
            event.target.value = '';
        };

        // 将文件读取并压缩为 Base64
        function processFileToDataURL(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const img = new Image();
                    img.src = e.target.result;
                    img.onload = () => {
                        // 创建 Canvas 进行压缩
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        
                        // 最大尺寸限制 (避免 localStorage 爆满)
                        const MAX_SIZE = 800; 
                        let width = img.width;
                        let height = img.height;

                        if (width > height) {
                            if (width > MAX_SIZE) {
                                height *= MAX_SIZE / width;
                                width = MAX_SIZE;
                            }
                        } else {
                            if (height > MAX_SIZE) {
                                width *= MAX_SIZE / height;
                                height = MAX_SIZE;
                            }
                        }

                        canvas.width = width;
                        canvas.height = height;
                        ctx.drawImage(img, 0, 0, width, height);

                        // 转换为 JPEG Base64 (0.8 质量)
                        const dataURL = canvas.toDataURL('image/jpeg', 0.8);
                        resolve(dataURL);
                    };
                    img.onerror = reject;
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        }

        // 保存到 LocalStorage
        function saveToCache(imagesData) {
            const cacheData = {
                timestamp: Date.now(),
                images: imagesData
            };
            try {
                localStorage.setItem(CONFIG.cacheKey, JSON.stringify(cacheData));
            } catch (e) {
                console.warn("Storage quota exceeded or error", e);
                alert("照片过多或过大，部分缓存可能失败");
            }
        }

        // 加载缓存
        function loadCachedPhotos() {
            try {
                const raw = localStorage.getItem(CONFIG.cacheKey);
                if (!raw) return;

                const cache = JSON.parse(raw);
                const now = Date.now();

                // 检查有效期 (7天)
                if (now - cache.timestamp > CONFIG.cacheDuration) {
                    console.log("Cache expired, clearing...");
                    localStorage.removeItem(CONFIG.cacheKey);
                    return;
                }

                if (cache.images && Array.isArray(cache.images)) {
                    console.log(`Loading ${cache.images.length} photos from cache...`);
                    cache.images.forEach(imgData => {
                        const img = new Image();
                        img.src = imgData;
                        img.onload = () => createPhotoMesh(img);
                    });
                }
            } catch (e) {
                console.error("Failed to load cache", e);
            }
        }

        function createPhotoMesh(image) {
            const texture = new THREE.Texture(image);
            texture.needsUpdate = true;
            texture.colorSpace = THREE.SRGBColorSpace;

            // Maintain aspect ratio
            const aspect = image.width / image.height;
            const w = 4;
            const h = 4 / aspect;

            const geometry = new THREE.PlaneGeometry(w, h);
            // Use BasicMaterial for photos so they are always fully bright and not affected by shadows
            const material = new THREE.MeshBasicMaterial({ 
                map: texture, 
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 1.0 
            });

            const mesh = new THREE.Mesh(geometry, material);
            
            // Add a border (gold frame)
            const frameGeo = new THREE.BoxGeometry(w + 0.2, h + 0.2, 0.1);
            const frameMat = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.gold, 
                metalness: 0.8, 
                roughness: 0.2,
                emissive: 0x332200
            });
            const frame = new THREE.Mesh(frameGeo, frameMat);
            frame.position.z = -0.06;
            mesh.add(frame);

            // 修改位置计算逻辑：使用确定性的黄金螺旋算法
            // 传入当前照片的总数作为 index，确保每张新照片都有唯一且均匀的位置
            const index = photoMeshes.length;
            const treePos = getPhotoSurfacePosition(index);

            // Explode Position (Target) - 修改为球体分布
            const explodePos = getExplodeSpherePosition(35);

            mesh.position.copy(explodePos); // Start exploded if added later, or logic will fix it
            scene.add(mesh);

            photoMeshes.push({
                mesh: mesh,
                treePos: treePos,
                explodePos: explodePos,
                wobbleOffset: Math.random() * 100,
                isPhoto: true
            });
            
            // Add to main particles array for movement management
            particles.push(photoMeshes[photoMeshes.length-1]);
        }

        // --- Animation Loop ---
        function animate() {
            requestAnimationFrame(animate);
            time += 0.01;

            // 1. Smooth State Transition
            if (currentState !== targetState) {
                currentState = targetState;
                
                // If entering focus mode, pick a random photo to bring forward if any exist
                if (currentState === STATE.FOCUS && photoMeshes.length > 0) {
                     // Reset all photos first
                     photoMeshes.forEach(p => p.focusOffset = null);
                     // Pick one
                     const luckyPhoto = photoMeshes[Math.floor(Math.random() * photoMeshes.length)];
                     luckyPhoto.focusOffset = true;
                }
            }

            // 2. Camera Controls
            let camX = Math.sin(time * 0.2) * 50;
            let camZ = Math.cos(time * 0.2) * 50;
            let camY = 0;

            // Hand Influence
            if (currentState === STATE.EXPLODE && isHandDetected) {
                const angle = handPos.x * Math.PI; 
                camX = Math.sin(angle) * 60;
                camZ = Math.cos(angle) * 60;
                camY = handPos.y * 30;
            } else if (currentState === STATE.FOCUS) {
                camX *= 0.3;
                camZ *= 0.3;
            }

            camera.position.x += (camX - camera.position.x) * 0.05;
            camera.position.y += (camY - camera.position.y) * 0.05;
            camera.position.z += (camZ - camera.position.z) * 0.05;
            camera.lookAt(0, 0, 0);

            // 3. Update Visual Effects (Snow, Dust)
            
            // Snow
            if (snowParticles) {
                const positions = snowParticles.geometry.attributes.position.array;
                const vels = snowParticles.userData.velocities;
                for (let i=0; i<vels.length; i++) {
                    const i3 = i*3;
                    positions[i3+1] -= vels[i]; // Fall down
                    // Reset if too low
                    if (positions[i3+1] < -20) {
                        positions[i3+1] = 40;
                        positions[i3] = (Math.random() - 0.5) * 80;
                        positions[i3+2] = (Math.random() - 0.5) * 80;
                    }
                }
                snowParticles.geometry.attributes.position.needsUpdate = true;
            }
            
            // Magic Dust (Rotate)
            if (magicDust) {
                magicDust.rotation.y = time * 0.05;
            }

            // 4. Particle Animation & Twinkle
            
            // A. Update Lights (Twinkle Effect)
            // 无论是合拢还是散开，灯光都会闪烁
            twinkleLights.forEach(p => {
                // 使用正弦波控制发光强度：基准 1.0 + 波动 1.0 = 范围 [0, 2.0]
                const intensity = 1.0 + Math.sin(time * p.blinkSpeed + p.blinkOffset) * 1.0;
                // 保证最低亮度不为0，避免完全黑掉
                p.mesh.material.emissiveIntensity = Math.max(0.2, intensity);
            });

            // B. Move Particles
            particles.forEach(p => {
                let target;

                if (currentState === STATE.TREE) {
                    target = p.treePos;
                } else if (currentState === STATE.EXPLODE) {
                    target = p.explodePos;
                } else if (currentState === STATE.FOCUS) {
                    target = p.explodePos; 
                    
                    if (p.focusOffset) {
                        const camDir = camera.position.clone().normalize();
                        const targetPos = camDir.multiplyScalar(10);
                        p.mesh.position.lerp(targetPos, 0.1);
                        p.mesh.quaternion.copy(camera.quaternion);
                        return; // Skip standard update
                    }
                }

                const wobble = Math.sin(time * 2 + p.wobbleOffset) * 0.5;
                const finalTarget = target.clone();
                if (currentState !== STATE.TREE) {
                    finalTarget.y += wobble;
                }

                // Move mesh
                p.mesh.position.lerp(finalTarget, 0.04);
                
                // Rotation
                if (!p.isPhoto) {
                    // 装饰物缓慢自转
                    p.mesh.rotation.x += 0.01;
                    p.mesh.rotation.y += 0.01;
                } else if (currentState === STATE.TREE) {
                    p.mesh.lookAt(new THREE.Vector3(p.mesh.position.x * 2, p.mesh.position.y, p.mesh.position.z * 2));
                } else {
                    p.mesh.quaternion.copy(camera.quaternion);
                }
            });

            // 普通渲染
            renderer.render(scene, camera);
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        // Start
        init();

    </script>
</body>
</html>
```



@tab 把照片内置，变成真正的礼物（类似默认照片）

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Gesture Controlled Christmas Tree</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            background-color: #050510; /* 深蓝夜空色 */
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #fff;
        }

        #canvas-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background: radial-gradient(circle at center, #1a1a2e 0%, #000000 100%); /* 渐变背景 */
        }

        /* UI Overlay */
        #ui-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
            pointer-events: none; /* Let clicks pass through to canvas if needed */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 20px;
            box-sizing: border-box;
        }

        .header {
            text-align: left;
            text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
        }

        h1 {
            margin: 0;
            font-weight: 300;
            color: #FFD700; /* Gold */
            letter-spacing: 2px;
            font-size: 24px;
        }

        p.subtitle {
            margin: 5px 0 0 0;
            color: #aaa;
            font-size: 14px;
        }

        /* Status & Instructions & Buttons Container */
        .status-panel {
            position: absolute;
            top: 20px;
            right: 20px;
            text-align: right;
            display: flex;
            flex-direction: column;
            align-items: flex-end; /* Right align everything */
            gap: 12px;
        }

        .status-tag {
            display: inline-block;
            padding: 8px 16px;
            background: rgba(20, 30, 20, 0.8);
            border: 1px solid #FFD700;
            border-radius: 20px;
            color: #FFD700;
            font-weight: bold;
            font-size: 14px;
            transition: all 0.3s ease;
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
        }

        .instructions {
            background: rgba(0, 0, 0, 0.6);
            padding: 15px;
            border-radius: 8px; /* Slightly squarer for tech feel */
            font-size: 12px;
            color: #ddd;
            width: 200px; /* Fixed width for alignment */
            pointer-events: auto;
            backdrop-filter: blur(10px);
            border-left: 2px solid #C41E3A; /* Red accent */
            border-right: 1px solid rgba(255, 255, 255, 0.1);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .instruction-item {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            justify-content: space-between; /* Space out icon and text */
        }
        
        .icon { font-size: 16px; width: 20px; text-align: center;}

        /* Upload Buttons - New Elegant Style */
        .upload-container {
            pointer-events: auto;
            display: flex;
            flex-direction: column;
            gap: 8px;
            align-items: flex-end;
            margin-top: 5px;
            width: 220px; /* Give it a bit more width for the dropdown */
        }

        .btn {
            background: rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(255, 215, 0, 0.5); /* Subtle Gold Border */
            color: #FFD700;
            padding: 8px 20px;
            border-radius: 4px; /* Minimalist radius */
            cursor: pointer;
            font-size: 12px;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            backdrop-filter: blur(5px);
            width: 100%; /* Match width */
            text-align: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            box-sizing: border-box; /* Ensure padding doesn't increase width */
        }

        .btn:hover {
            background: rgba(255, 215, 0, 0.15);
            border-color: #FFD700;
            box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
            transform: translateX(-5px); /* Subtle slide left */
        }

        .btn.active {
            background: rgba(255, 215, 0, 0.2);
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.4);
            border-color: #FFD700;
        }

        /* Group music buttons slightly */
        .music-group {
            display: flex;
            gap: 5px;
            width: 100%;
        }
        
        .music-group .btn {
            flex: 1; /* Split space */
            padding: 8px 5px; /* Smaller padding */
        }
        
        #music-btn {
            flex: 0 0 40%; /* Play button takes less space */
        }
        
        #playlist-select {
            flex: 1;
            appearance: none; /* Remove default arrow */
            -webkit-appearance: none;
            text-align: left;
            text-align-last: center;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FFD700' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 8px center;
            background-size: 12px;
            padding-right: 25px; /* Space for arrow */
            padding-left: 10px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #FFD700;
        }
        
        #playlist-select option {
            background: #222;
            color: #FFD700;
            padding: 5px;
        }

        /* Differentiate clear button slightly */
        #clear-btn {
            border-color: rgba(255, 255, 255, 0.3);
            color: #aaa;
        }
        
        #clear-btn:hover {
            border-color: #fff;
            color: #fff;
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }

        #file-input { display: none; }
        #music-input { display: none; }

        /* Webcam feedback (hidden but processed) */
        #video-feed {
            position: absolute;
            bottom: 20px;
            left: 20px;
            width: 160px;
            height: 120px;
            border-radius: 10px;
            transform: scaleX(-1); /* Mirror */
            border: 2px solid #FFD700;
            opacity: 0.7;
            z-index: 20;
            object-fit: cover;
            display: block; /* Required for MediaPipe */
        }

        /* Loading Screen */
        #loading {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            z-index: 100;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #FFD700;
            transition: opacity 0.5s;
        }

        .loader {
            border: 4px solid #333;
            border-top: 4px solid #FFD700;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin-bottom: 15px;
        }

        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

    </style>
    <!-- MediaPipe Hands Global Script (Fix for Module Error) -->
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/hands.js" crossorigin="anonymous"></script>

    <!-- Import Maps for Three.js and Addons -->
    <script type="importmap">
        {
            "imports": {
                "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
                "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"
            }
        }
    </script>
</head>
<body>

    <!-- Audio Element (Added crossorigin for recording) -->
    <audio id="bg-music" loop crossorigin="anonymous"></audio>

    <!-- Loading Screen -->
    <div id="loading">
        <div class="loader"></div>
        <div id="loading-text">正在初始化视觉引擎与AI模型...</div>
    </div>

    <!-- Video Element for MediaPipe (Visible for user feedback) -->
    <video id="video-feed" playsinline></video>

    <!-- UI Layer -->
    <div id="ui-layer">
        <div class="header">
            <h1>CHRISTMAS GESTURE</h1>
            <p class="subtitle">MediaPipe & Three.js WebGL Experience</p>
        </div>

        <div class="status-panel">
            <div id="mode-display" class="status-tag">等待手势...</div>
            
            <div class="instructions">
                <div class="instruction-item"><span>✊ 握拳</span> <span>聚合形态</span></div>
                <div class="instruction-item"><span>🖐 张开</span> <span>散开形态</span></div>
                <div class="instruction-item"><span>🤏 捏合</span> <span>特写照片</span></div>
                <div class="instruction-item"><span>👋 移动</span> <span>旋转视角</span></div>
            </div>

            <div class="upload-container">
                <button id="upload-btn" class="btn" onclick="document.getElementById('file-input').click()">
                    <span>📷</span> 上传照片
                </button>
                
                <!-- Music Controls -->
                <div class="music-group">
                    <button id="music-btn" class="btn" onclick="toggleMusic()">
                        <span>🔇</span>
                    </button>
                    <!-- 下拉选择框替代原来的“换音乐”按钮 -->
                    <select id="playlist-select" class="btn" onchange="handlePlaylistChange(this)">
                        <option disabled>-- 选择背景音乐 --</option>
                        <!-- Options will be populated by JS -->
                        <option value="custom">📂 自定义...</option>
                    </select>
                </div>

                <button id="clear-btn" class="btn" onclick="clearCachedPhotos()">
                    <span>🗑️</span> 清除照片
                </button>
                
                <input type="file" id="file-input" accept="image/*" multiple onchange="handlePhotoUpload(event)">
                <!-- 新增音乐文件输入框 -->
                <input type="file" id="music-input" accept="audio/*, .mp3, .m4a" onchange="handleMusicFileUpload(event)">
            </div>
        </div>
    </div>

    <!-- 3D Canvas -->
    <div id="canvas-container"></div>

    <!-- Main Logic -->
    <script type="module">
        import * as THREE from 'three';

        // --- Configuration & Constants ---
        const CONFIG = {
            colors: {
                green: 0x228B22,   // Forest Green (Brighter)
                gold: 0xFFD700,    // Metallic Gold
                red: 0xFF0000,     // Bright Red
                white: 0xFFFFFF,
                // 新增灯光颜色池
                lights: [0xFF0000, 0xFFFF00, 0x00BFFF, 0xFF69B4, 0xFFA500] 
            },
            particles: 1800,       // 稍微增加粒子数量到 1800，容纳更多装饰
            radius: 18,            // Base radius of tree bottom
            height: 35,            // Height of tree
            cacheKey: 'xmas_tree_photos_v1',
            cacheDuration: 7 * 24 * 60 * 60 * 1000, // 7 Days in ms
            musicCacheKey: 'xmas_music_pref_v3', // 更新版本号以适应新逻辑
            
            // 新增：预设照片路径列表
            // 在这里填写图片的 URL 或者相对路径 (例如 './images/photo1.jpg')
            // 这些图片会在启动时自动加载到圣诞树上
            defaultPhotos: [
                "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=500&q=80", // 示例图1 (圣诞主题)
                "https://images.unsplash.com/photo-1511268559489-34b624fbfcf5?w=500&q=80", // 示例图2 (雪景)
                "https://images.unsplash.com/photo-1512474932049-782abb8be2e9?w=500&q=80"  // 示例图3 (装饰)
            ],

            // 内置歌单
            playlist: [
                { name: "Last Christmas", url: "https://cdn.bornforthis.cn/mp3/LastChristmas(Single%20Version).m4a" },
                { name: "Jingle Bell Rock", url: "https://cdn.bornforthis.cn/mp3/JingleBellRock.m4a" },
                { name: "Santa Tell Me", url: "https://cdn.bornforthis.cn/mp3/SantaTellMe.m4a" },
                { name: "Feliz Navidad", url: "https://cdn.bornforthis.cn/mp3/FelizNavidad.m4a" },
                { name: "Santa Claus is Coming", url: "https://cdn.bornforthis.cn/mp3/SantaClausisComingtoTown.m4a" },
                { name: "Here Comes Santa Claus", url: "https://cdn.bornforthis.cn/mp3/HereComesSantaClaus.m4a" },
                { name: "Merry Christmas Mr Lawrence", url: "https://cdn.bornforthis.cn/mp3/MerryChristmasMrLawrence.m4a" },
                { name: "Christmas Time in My Town", url: "https://cdn.bornforthis.cn/mp3/ChristmasTimeinMyHomeTown.mp3" },
            ]
        };

        // --- Global Variables ---
        let scene, camera, renderer;
        let particles = []; // Array to store { mesh, treePos, explodePos, currentPos, speed }
        let photoMeshes = []; // Array specifically for user photos
        let twinkleLights = []; // 专门存储需要闪烁的灯光粒子
        
        // 新增的特效系统
        let snowParticles, magicDust;
        
        let time = 0;
        
        // Interaction State
        const STATE = {
            TREE: 'TREE',
            EXPLODE: 'EXPLODE',
            FOCUS: 'FOCUS'
        };
        let currentState = STATE.TREE;
        let targetState = STATE.TREE;
        
        // Hand Data
        let handPos = { x: 0, y: 0 }; // Normalized -1 to 1
        let isHandDetected = false;

        // Music State
        let isMusicPlaying = false;
        let currentMusicSource = CONFIG.playlist[0].url; // Default to first song

        // --- Initialization ---
        async function init() {
            // 1. Scene Setup
            const container = document.getElementById('canvas-container');
            scene = new THREE.Scene();
            // 移除纯色背景，因为我们在 CSS 里用了渐变，这里设为透明或保留雾效果
            scene.background = null; 
            // 增加一点雾气增加深邃感
            scene.fog = new THREE.FogExp2(0x050510, 0.01);

            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 0, 50);

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.outputColorSpace = THREE.SRGBColorSpace;
            container.appendChild(renderer.domElement);

            // 2. Lighting - 大幅增强光照
            // 2.1 强环境光，照亮所有阴影
            const ambientLight = new THREE.AmbientLight(0xffffff, 1.0); 
            scene.add(ambientLight);

            // 2.2 主平行光（模拟阳光），提供清晰的明暗关系
            const mainLight = new THREE.DirectionalLight(0xffffff, 2.0);
            mainLight.position.set(10, 20, 20);
            scene.add(mainLight);

            // 2.3 补光灯（金色），增加华丽感
            const pointLight = new THREE.PointLight(CONFIG.colors.gold, 1.5, 100);
            pointLight.position.set(0, 20, 10);
            scene.add(pointLight);
            
            // 2.4 氛围灯（红绿），增加节日气氛，但调高亮度
            const redLight = new THREE.PointLight(CONFIG.colors.red, 1.5, 50);
            redLight.position.set(15, 10, 15);
            scene.add(redLight);
            
            const greenLight = new THREE.PointLight(CONFIG.colors.green, 1.5, 50);
            greenLight.position.set(-15, -10, 15);
            scene.add(greenLight);

            // 3. Post Processing Removed

            // 4. Content Generation
            createParticles();
            createLightStrip(); // 新增：螺旋灯带
            createStar();
            createEnvironment(); // 新增：星空
            createSnow();        // 新增：雪花
            createMagicDust();   // 新增：魔法金粉
            
            // 5. Load Photos & Music Preference
            loadCachedPhotos(); // 加载用户上传的缓存
            loadDefaultPhotos(); // 加载配置文件中的预设图片
            initAudio(); // 初始化音频和下拉菜单

            // 6. Setup MediaPipe
            await setupMediaPipe();

            // 7. Events
            window.addEventListener('resize', onWindowResize);

            // 8. Start Loop
            document.getElementById('loading').style.opacity = '0';
            setTimeout(() => document.getElementById('loading').style.display = 'none', 500);
            animate();
        }

        // --- MediaPipe Logic ---
        async function setupMediaPipe() {
            const video = document.getElementById('video-feed');

            // Access Global Hands Class
            const hands = new window.Hands({locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
            }});

            hands.setOptions({
                maxNumHands: 1,
                modelComplexity: 1,
                minDetectionConfidence: 0.7,
                minTrackingConfidence: 0.6
            });

            hands.onResults(onHandsResults);

            // Access Webcam
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                video.srcObject = stream;
                await video.play();

                // Start processing loop specific to MediaPipe
                async function detectionLoop() {
                    if (video.currentTime > 0 && !video.paused && !video.ended) {
                        await hands.send({image: video});
                    }
                    requestAnimationFrame(detectionLoop);
                }
                detectionLoop();
            } catch (err) {
                console.error("Camera access denied or failed", err);
                document.getElementById('loading-text').innerText = "未检测到摄像头，请检查权限。应用将自动运行演示模式。";
                setTimeout(() => {
                    document.getElementById('loading').style.display = 'none';
                    // Auto demo mode logic could go here
                }, 2000);
            }
        }

        function onHandsResults(results) {
            const modeDisplay = document.getElementById('mode-display');
            
            if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                isHandDetected = true;
                const landmarks = results.multiHandLandmarks[0];

                // 1. Calculate Hand Center (for rotation)
                // Wrist is 0, Middle Finger MCP is 9
                const cx = landmarks[9].x;
                const cy = landmarks[9].y;
                handPos.x = (cx - 0.5) * 2; // -1 to 1
                handPos.y = (cy - 0.5) * 2;

                // 2. Gesture Recognition
                const state = detectGesture(landmarks);
                
                if (state) {
                    targetState = state;
                    
                    // UI Update
                    let text = "未知";
                    let bg = "#333";
                    if (state === STATE.TREE) { text = "🌲 聚合形态"; bg = CONFIG.colors.green; }
                    if (state === STATE.EXPLODE) { text = "✨ 散开形态"; bg = "#444"; }
                    if (state === STATE.FOCUS) { text = "📷 聚焦照片"; bg = CONFIG.colors.red; }
                    
                    modeDisplay.innerText = text;
                    modeDisplay.style.borderColor = (state === STATE.FOCUS) ? '#fff' : CONFIG.colors.gold;
                }

            } else {
                isHandDetected = false;
            }
        }

        function detectGesture(lm) {
            const dist = (i, j) => Math.sqrt(Math.pow(lm[i].x - lm[j].x, 2) + Math.pow(lm[i].y - lm[j].y, 2));
            const wrist = 0;
            const tips = [8, 12, 16, 20];
            const pips = [6, 10, 14, 18];
            
            // Check Fingers Extended
            let extendedCount = 0;
            if (dist(4, 17) > 0.2) extendedCount++; // Rough thumb check

            for (let k=0; k<4; k++) {
                if (dist(wrist, tips[k]) > dist(wrist, pips[k]) * 1.2) {
                    extendedCount++;
                }
            }

            // Pinch Detection (Thumb 4 and Index 8)
            const pinchDist = dist(4, 8);

            if (pinchDist < 0.08) {
                return STATE.FOCUS;
            } else if (extendedCount >= 4) {
                return STATE.EXPLODE;
            } else if (extendedCount <= 1) {
                return STATE.TREE;
            }
            
            return null; 
        }

        // --- Audio Logic ---
        
        function initAudio() {
            // 1. Populate Dropdown
            const select = document.getElementById('playlist-select');
            
            // Insert Built-in options BEFORE the "Custom" option
            CONFIG.playlist.forEach(song => {
                const option = document.createElement('option');
                option.value = song.url;
                option.innerText = `🎵 ${song.name}`;
                // Insert before the last option (which is Custom)
                select.insertBefore(option, select.lastElementChild);
            });

            // 2. Error Handling & Fallback
            const audio = document.getElementById('bg-music');
            
            // Critical fix for "The element has no supported sources"
            audio.addEventListener('error', function(e) {
                console.warn("Audio load error:", e);
                const src = audio.src;
                // If it failed and we had crossorigin set, try removing it (fallback mode)
                // This means audio won't be recordable via WebAudio, but at least it plays.
                if (audio.crossOrigin === 'anonymous') {
                    console.log("Attempting fallback: Removing crossorigin attribute...");
                    audio.removeAttribute('crossorigin');
                    audio.src = src; // Retry
                    audio.load();
                    if (isMusicPlaying) audio.play().catch(err => console.log("Fallback play error:", err));
                }
            }, true); // Capture phase

            // 3. Load Preferences
            try {
                const raw = localStorage.getItem(CONFIG.musicCacheKey);
                if (raw) {
                    const cache = JSON.parse(raw);
                    const now = Date.now();
                    
                    if (now - cache.timestamp <= CONFIG.cacheDuration) {
                        // 恢复音乐源
                        if (cache.customSrc) {
                            currentMusicSource = cache.customSrc;
                        }

                        // 恢复播放状态
                        if (cache.enabled) {
                            isMusicPlaying = true;
                            // Play will be called below
                        }
                    }
                }
            } catch (e) {
                console.error("Error loading music preference", e);
            }

            // 4. Apply Source
            audio.src = currentMusicSource;
            
            // 5. Sync Dropdown Value
            // Check if current source is in playlist
            const inPlaylist = CONFIG.playlist.find(p => p.url === currentMusicSource);
            if (inPlaylist) {
                select.value = currentMusicSource;
            } else {
                // If not in playlist, it stays default or handled by custom
            }

            // 6. Play if needed
            updateMusicUI(isMusicPlaying);
            if (isMusicPlaying) {
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log("Auto-play blocked or source invalid:", error);
                        // Don't turn off isMusicPlaying immediately if it's just blocking;
                        // But if it's a source error, the 'error' listener handles it.
                        // If it's policy block, we update UI
                        if (error.name === 'NotAllowedError') {
                             isMusicPlaying = false;
                             updateMusicUI(false);
                        }
                    });
                }
            }
        }

        // 处理下拉菜单变化
        window.handlePlaylistChange = function(selectElem) {
            const value = selectElem.value;
            
            if (value === 'custom') {
                // 用户选择“自定义”
                handleCustomMusicClick();
                // 暂时把选中的值重置回之前的（或者保持 Custom），等待用户完成上传
                // 实际上 handleCustomMusicClick 会更新源
            } else {
                // 用户选择了内置歌曲
                changeMusicSource(value, 'builtin');
            }
        };

        window.handleCustomMusicClick = function() {
            const url = prompt("请输入背景音乐链接 (MP3/M4A)\n或者点击 [取消] 上传本地文件:");
            
            if (url) {
                changeMusicSource(url.trim(), 'link');
            } else if (url === "") {
                // Cancelled or empty
                // Revert selection if possible?
            } else {
                // Clicked Cancel -> File Upload
                document.getElementById('music-input').click();
            }
        };

        window.handleMusicFileUpload = function(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(e) {
                const result = e.target.result;
                const canCache = result.length < 4 * 1024 * 1024; 
                changeMusicSource(result, 'file', canCache);
                if (!canCache) {
                    alert("音乐文件较大，仅在本次访问播放，不会缓存到本地。");
                }
            };
            reader.readAsDataURL(file);
            event.target.value = ''; 
        };

        function changeMusicSource(src, type, shouldCache = true) {
            const audio = document.getElementById('bg-music');
            currentMusicSource = src;
            
            // Reset crossorigin if it was removed by fallback previously, to try recording again if possible
            if (!audio.hasAttribute('crossorigin') && type !== 'file') { // Local files don't need CORS
                 audio.setAttribute('crossorigin', 'anonymous');
            }
            
            audio.src = src;
            
            // Auto play
            isMusicPlaying = true;
            audio.play().catch(e => console.log("Play interrupted or failed:", e));
            updateMusicUI(true);
            
            // Update Dropdown UI to reflect change
            const select = document.getElementById('playlist-select');
            // If it's a built-in type, select matches src
            if (type === 'builtin') {
                 select.value = src;
            }
            
            // Save
            saveMusicPreference(true, shouldCache ? src : null);
        }

        window.toggleMusic = function() {
            const audio = document.getElementById('bg-music');
            isMusicPlaying = !isMusicPlaying;
            
            if (isMusicPlaying) {
                audio.play().catch(e => {
                    console.log("Play failed in toggle:", e);
                    // Revert UI if play fails hard
                    isMusicPlaying = false;
                    updateMusicUI(false);
                });
            } else {
                audio.pause();
            }
            
            updateMusicUI(isMusicPlaying);
            // Save state (keep existing src)
            saveMusicPreference(isMusicPlaying, null, true); 
        };

        function updateMusicUI(isPlaying) {
            const btn = document.getElementById('music-btn');
            if (isPlaying) {
                btn.innerHTML = '<span>🔊</span>';
                btn.classList.add('active');
            } else {
                btn.innerHTML = '<span>🔇</span>';
                btn.classList.remove('active');
            }
        }

        // srcData: 如果不为 null，则更新 customSrc；如果为 null 且 updateOnlyState=false，则清除 customSrc
        // updateOnlyState: 如果为 true，只更新开关状态，不碰 source
        function saveMusicPreference(isEnabled, srcData = null, updateOnlyState = false) {
            try {
                let dataToSave = {
                    timestamp: Date.now(),
                    enabled: isEnabled,
                    customSrc: null
                };

                if (updateOnlyState) {
                    const oldRaw = localStorage.getItem(CONFIG.musicCacheKey);
                    if (oldRaw) {
                        const old = JSON.parse(oldRaw);
                        dataToSave.customSrc = old.customSrc;
                    }
                } else {
                    dataToSave.customSrc = srcData;
                }

                localStorage.setItem(CONFIG.musicCacheKey, JSON.stringify(dataToSave));
            } catch (e) {
                console.warn("Failed to save music preference", e);
                // Fallback: save disabled state without source
                try {
                     const fallbackData = {
                        timestamp: Date.now(),
                        enabled: isEnabled,
                        customSrc: null 
                    };
                    localStorage.setItem(CONFIG.musicCacheKey, JSON.stringify(fallbackData));
                } catch(e2) {}
            }
        }

        // --- Visual Effects Creation ---

        function createEnvironment() {
            // Stars
            const starsGeo = new THREE.BufferGeometry();
            const starsCount = 2000;
            const posArray = new Float32Array(starsCount * 3);
            
            for(let i=0; i<starsCount*3; i++) {
                // Distant stars
                posArray[i] = (Math.random() - 0.5) * 400; 
            }
            
            starsGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            
            const starsMat = new THREE.PointsMaterial({
                size: 0.5,
                color: 0xffffff,
                transparent: true,
                opacity: 0.8
            });
            
            const starField = new THREE.Points(starsGeo, starsMat);
            scene.add(starField);
        }

        // --- 动态生成雪花纹理 ---
        function createSnowflakeTexture() {
            const canvas = document.createElement('canvas');
            canvas.width = 32;
            canvas.height = 32;
            const context = canvas.getContext('2d');

            // 绘制雪花形状 (六角星)
            context.strokeStyle = '#FFFFFF';
            context.lineWidth = 2;
            context.lineCap = 'round';
            
            context.translate(16, 16);
            for(let i = 0; i < 6; i++) {
                context.beginPath();
                context.moveTo(0, 0);
                context.lineTo(0, 14);
                context.stroke();
                
                // 小分叉
                context.beginPath();
                context.moveTo(0, 8);
                context.lineTo(4, 10);
                context.stroke();
                
                context.beginPath();
                context.moveTo(0, 8);
                context.lineTo(-4, 10);
                context.stroke();
                
                context.rotate(Math.PI / 3);
            }

            return new THREE.CanvasTexture(canvas);
        }

        function createSnow() {
            const snowGeo = new THREE.BufferGeometry();
            const snowCount = 500;
            const posArray = new Float32Array(snowCount * 3);
            const velArray = new Float32Array(snowCount); // Falling speed
            
            for(let i=0; i<snowCount; i++) {
                const i3 = i * 3;
                posArray[i3] = (Math.random() - 0.5) * 80; // x
                posArray[i3+1] = (Math.random() - 0.5) * 80 + 20; // y (start high)
                posArray[i3+2] = (Math.random() - 0.5) * 80; // z
                
                velArray[i] = 0.1 + Math.random() * 0.1; // speed
            }
            
            snowGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            
            // 使用生成的雪花纹理
            const snowTexture = createSnowflakeTexture();

            const snowMat = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 2.0, // 调大尺寸以显示图案
                map: snowTexture,
                transparent: true,
                opacity: 0.8,
                depthWrite: false, // 避免透明遮挡问题
                blending: THREE.AdditiveBlending 
            });
            
            snowParticles = new THREE.Points(snowGeo, snowMat);
            snowParticles.userData = { velocities: velArray };
            scene.add(snowParticles);
        }

        function createMagicDust() {
            const dustGeo = new THREE.BufferGeometry();
            const count = 300;
            const posArray = new Float32Array(count * 3);
            
            for(let i=0; i<count*3; i++) {
                posArray[i] = (Math.random() - 0.5) * 40; 
            }
            
            dustGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            
            const dustMat = new THREE.PointsMaterial({
                color: 0xFFD700, // Gold
                size: 0.3,
                transparent: true,
                opacity: 0.6,
                blending: THREE.AdditiveBlending
            });
            
            magicDust = new THREE.Points(dustGeo, dustMat);
            scene.add(magicDust);
        }

        // --- Particle System Logic ---

        // 移除旧的螺旋线逻辑，改用体积计算
        function getConeVolumePosition(h, maxR) {
            // h is 0 (bottom) to 1 (top)
            
            // 当前高度的圆锥截面半径
            const rAtHeight = maxR * (1 - h);
            
            // 随机分布在圆截面内，但更倾向于外表面以保持树的形状
            // 使用 Math.pow 调整分布：指数越小越均匀，指数越大越集中在边缘
            const r = rAtHeight * Math.pow(Math.random(), 0.4); 
            
            const angle = Math.random() * Math.PI * 2;
            
            const x = r * Math.cos(angle);
            const z = r * Math.sin(angle);
            
            // 将高度映射到实际坐标 y
            const y = -CONFIG.height/2 + h * CONFIG.height;
            
            return new THREE.Vector3(x, y, z);
        }

        // 新增：专门用于散开形态的球体分布算法 (圆形)
        function getExplodeSpherePosition(maxRadius) {
            // 球坐标随机分布
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            
            // 使用立方根确保在体积内均匀分布（不仅仅是表面，也不仅仅是核心）
            const r = maxRadius * Math.cbrt(Math.random()); 
            
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);
            
            return new THREE.Vector3(x, y, z);
        }

        // 新增：专门用于照片的均匀分布算法 (基于黄金角度螺旋)
        function getPhotoSurfacePosition(index) {
            const goldenRatio = 0.61803398875;
            const h = ((index * goldenRatio) % 0.7) + 0.15; 
            const angle = index * Math.PI * 2 * goldenRatio;
            const rBase = CONFIG.radius * (1 - h);
            const r = rBase + 2.5; 
            
            const x = r * Math.cos(angle);
            const z = r * Math.sin(angle);
            const y = -CONFIG.height/2 + h * CONFIG.height;
            
            return new THREE.Vector3(x, y, z);
        }

        // 新增：螺旋灯带生成函数
        function createLightStrip() {
            // 密度调整：增加数量，减小尺寸，使其看起来像连续的灯带
            const stripLightsCount = 800; // 从 160 增加到 800，极大提升密度
            const turns = 10; // 稍微增加圈数，让缠绕感更强
            const geometry = new THREE.SphereGeometry(0.12, 8, 8); // 尺寸减小到 0.12，更像精致的小灯珠
            
            const material = new THREE.MeshStandardMaterial({
                color: 0xFFFFE0, // Light Yellow
                emissive: 0xFFD700,
                emissiveIntensity: 1.5,
                roughness: 0.2,
                metalness: 0.5,
                toneMapped: false
            });

            for (let i = 0; i < stripLightsCount; i++) {
                // 0 (top) -> 1 (bottom)
                const t = i / stripLightsCount;
                
                // Spiral logic
                const angle = t * turns * Math.PI * 2;
                const heightRange = CONFIG.height;
                const y = (heightRange / 2) - (t * heightRange); // Top down
                
                // Radius expands as we go down
                // 稍微往里收一点点 (+1.0)，贴合树叶表面更紧密
                const r = (t * CONFIG.radius) + 1.0; 
                
                const x = r * Math.cos(angle);
                const z = r * Math.sin(angle);
                
                const treePos = new THREE.Vector3(x, y, z);
                const explodePos = getExplodeSpherePosition(35);
                
                const mesh = new THREE.Mesh(geometry, material.clone()); 
                
                mesh.position.copy(treePos);
                scene.add(mesh);
                
                const pData = {
                    mesh: mesh,
                    treePos: treePos,
                    explodePos: explodePos,
                    velocity: new THREE.Vector3(),
                    wobbleOffset: Math.random() * 100,
                    isLight: true,
                    // 灯带特有的跑马灯闪烁效果
                    blinkSpeed: 2.0, // 稍微加快流动速度
                    blinkOffset: i * 0.05 // 调整相位偏移，因为粒子变多了，间隔要变小才能保持流动感
                };
                
                particles.push(pData);
                twinkleLights.push(pData);
            }
        }

        function createParticles() {
            // 1. 基础几何体
            const geometrySphere = new THREE.SphereGeometry(0.4, 16, 16); 
            const geometryCube = new THREE.BoxGeometry(0.8, 0.8, 0.8); // 树叶
            const geometryTetra = new THREE.TetrahedronGeometry(0.6); // 树叶
            const geometrySmallBox = new THREE.BoxGeometry(0.5, 0.5, 0.5); // 礼物盒
            const geometryCylinder = new THREE.CylinderGeometry(0.1, 0.1, 1.5, 8); // 糖果棒
            const geometryLight = new THREE.SphereGeometry(0.25, 16, 16); // 灯泡

            // 2. 基础材质
            const matGold = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.gold, roughness: 0.2, metalness: 0.8, emissive: 0x443300 
            });
            const matRed = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.red, roughness: 0.3, metalness: 0.3, emissive: 0x220000
            });
            const matGreen = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.green, roughness: 0.8, metalness: 0.0 
            });
            const matWhite = new THREE.MeshStandardMaterial({
                color: 0xFFFFFF, roughness: 0.2, metalness: 0.1
            });

            for (let i = 0; i < CONFIG.particles; i++) {
                let mesh;
                let isLight = false;
                let blinkSpeed = 0;
                let blinkOffset = 0;

                const type = Math.random();
                
                // --- 粒子类型分布 ---
                // 60% 树叶 (Cube/Tetrahedron)
                // 15% 装饰球 (Sphere)
                // 10% 特殊挂件 (糖果/礼物)
                // 15% 闪烁灯光 (Light)

                if (type < 0.6) {
                    // 树叶
                    const isCube = Math.random() > 0.5;
                    mesh = new THREE.Mesh(isCube ? geometryCube : geometryTetra, matGreen);
                    mesh.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, Math.random()*Math.PI);
                
                } else if (type < 0.75) {
                    // 装饰球 (金/红)
                    mesh = new THREE.Mesh(geometrySphere, Math.random() > 0.5 ? matGold : matRed);
                    mesh.scale.setScalar(1.2 + Math.random() * 0.5);
                
                } else if (type < 0.85) {
                    // 特殊挂件
                    if (Math.random() > 0.5) {
                        // 糖果棒 (红白长条)
                        mesh = new THREE.Mesh(geometryCylinder, matRed);
                        mesh.rotation.z = Math.PI / 4; // 斜着放
                    } else {
                        // 礼物盒 (金色/白色)
                        mesh = new THREE.Mesh(geometrySmallBox, Math.random() > 0.5 ? matGold : matWhite);
                        mesh.rotation.y = Math.random();
                    }
                
                } else {
                    // 💡 闪烁灯光 💡
                    isLight = true;
                    // 随机选一个颜色
                    const colorHex = CONFIG.colors.lights[Math.floor(Math.random() * CONFIG.colors.lights.length)];
                    const lightMat = new THREE.MeshStandardMaterial({
                        color: colorHex,
                        emissive: colorHex,
                        emissiveIntensity: 2.0, // 初始亮度高一点
                        roughness: 0.1,
                        metalness: 0.0,
                        toneMapped: false // 让它看起来更亮，不被压暗
                    });
                    
                    mesh = new THREE.Mesh(geometryLight, lightMat);
                    blinkSpeed = 2 + Math.random() * 3; // 闪烁速度
                    blinkOffset = Math.random() * Math.PI * 2; // 随机相位，避免同时闪
                }

                // Tree Position (Target) - 使用体积算法
                // 灯光和挂件稍微往外放一点 (pow 0.3 而不是 0.4)
                const h = Math.random(); 
                const treePos = getConeVolumePosition(h, CONFIG.radius);
                
                if (isLight || type >= 0.6) {
                    // 把装饰物稍微往外推，防止被树叶埋没
                    const center = new THREE.Vector3(0, treePos.y, 0);
                    const dir = new THREE.Vector3().subVectors(treePos, center).normalize();
                    treePos.add(dir.multiplyScalar(0.8));
                }

                // Explode Position (Target)
                const explodePos = getExplodeSpherePosition(35);

                // Initial Pos
                mesh.position.copy(treePos);
                
                scene.add(mesh);

                const pData = {
                    mesh: mesh,
                    treePos: treePos,
                    explodePos: explodePos,
                    velocity: new THREE.Vector3(),
                    wobbleOffset: Math.random() * 100,
                    isLight: isLight,
                    blinkSpeed: blinkSpeed,
                    blinkOffset: blinkOffset
                };

                particles.push(pData);
                if (isLight) twinkleLights.push(pData);
            }
        }

        function createStar() {
            // Simple Star on top
            const geometry = new THREE.OctahedronGeometry(1.5, 0);
            const material = new THREE.MeshStandardMaterial({
                color: 0xFFFF00, // Bright Yellow
                emissive: 0xFFD700,
                emissiveIntensity: 2, // 提高星星亮度
                roughness: 0.2,
                metalness: 0.8,
                toneMapped: false
            });
            const star = new THREE.Mesh(geometry, material);
            star.position.set(0, CONFIG.height/2 + 2, 0);
            
            // Star is just a special particle
            scene.add(star);
            particles.push({
                mesh: star,
                treePos: new THREE.Vector3(0, CONFIG.height/2 + 2, 0),
                explodePos: new THREE.Vector3(0, 10, 0),
                wobbleOffset: 0
            });
        }

        // --- Photo Upload & Cache Logic ---

        // 加载预设照片
        function loadDefaultPhotos() {
            if (!CONFIG.defaultPhotos || !Array.isArray(CONFIG.defaultPhotos)) return;
            
            CONFIG.defaultPhotos.forEach(url => {
                const img = new Image();
                img.crossOrigin = "Anonymous";
                img.src = url;
                img.onload = () => {
                    createPhotoMesh(img);
                };
                img.onerror = () => {
                    console.warn(`无法加载预设图片: ${url}`);
                };
            });
        }

        // 清除现有的照片（从场景和内存中）
        window.clearCachedPhotos = function() {
            // 1. Remove from scene and memory
            // We iterate backwards to remove safely
            for (let i = particles.length - 1; i >= 0; i--) {
                if (particles[i].isPhoto) {
                    scene.remove(particles[i].mesh);
                    if (particles[i].mesh.material.map) {
                        particles[i].mesh.material.map.dispose();
                    }
                    particles[i].mesh.material.dispose();
                    particles[i].mesh.geometry.dispose();
                    particles.splice(i, 1);
                }
            }
            photoMeshes = [];

            // 2. Clear LocalStorage
            try {
                localStorage.removeItem(CONFIG.cacheKey);
                console.log("Cache cleared");
            } catch (e) {
                console.error("Failed to clear cache", e);
            }
        };

        // 处理用户上传
        window.handlePhotoUpload = async function(event) {
            const files = event.target.files;
            if (!files.length) return;

            // 覆盖模式：上传新照片前清除旧的
            window.clearCachedPhotos();

            const imagePromises = Array.from(files).map(processFileToDataURL);
            
            try {
                // 等待所有图片处理完成（压缩 + 转Base64）
                const base64Images = await Promise.all(imagePromises);
                
                // 创建 Mesh
                base64Images.forEach(imgData => {
                    const img = new Image();
                    img.src = imgData;
                    img.onload = () => createPhotoMesh(img);
                });

                // 保存到缓存
                saveToCache(base64Images);

            } catch (err) {
                console.error("Error processing images:", err);
                alert("图片处理失败，请重试");
            }

            // 重置 input 以便允许重复上传相同文件
            event.target.value = '';
        };

        // 将文件读取并压缩为 Base64
        function processFileToDataURL(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const img = new Image();
                    img.src = e.target.result;
                    img.onload = () => {
                        // 创建 Canvas 进行压缩
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        
                        // 最大尺寸限制 (避免 localStorage 爆满)
                        const MAX_SIZE = 800; 
                        let width = img.width;
                        let height = img.height;

                        if (width > height) {
                            if (width > MAX_SIZE) {
                                height *= MAX_SIZE / width;
                                width = MAX_SIZE;
                            }
                        } else {
                            if (height > MAX_SIZE) {
                                width *= MAX_SIZE / height;
                                height = MAX_SIZE;
                            }
                        }

                        canvas.width = width;
                        canvas.height = height;
                        ctx.drawImage(img, 0, 0, width, height);

                        // 转换为 JPEG Base64 (0.8 质量)
                        const dataURL = canvas.toDataURL('image/jpeg', 0.8);
                        resolve(dataURL);
                    };
                    img.onerror = reject;
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        }

        // 保存到 LocalStorage
        function saveToCache(imagesData) {
            const cacheData = {
                timestamp: Date.now(),
                images: imagesData
            };
            try {
                localStorage.setItem(CONFIG.cacheKey, JSON.stringify(cacheData));
            } catch (e) {
                console.warn("Storage quota exceeded or error", e);
                alert("照片过多或过大，部分缓存可能失败");
            }
        }

        // 加载缓存
        function loadCachedPhotos() {
            try {
                const raw = localStorage.getItem(CONFIG.cacheKey);
                if (!raw) return;

                const cache = JSON.parse(raw);
                const now = Date.now();

                // 检查有效期 (7天)
                if (now - cache.timestamp > CONFIG.cacheDuration) {
                    console.log("Cache expired, clearing...");
                    localStorage.removeItem(CONFIG.cacheKey);
                    return;
                }

                if (cache.images && Array.isArray(cache.images)) {
                    console.log(`Loading ${cache.images.length} photos from cache...`);
                    cache.images.forEach(imgData => {
                        const img = new Image();
                        img.src = imgData;
                        img.onload = () => createPhotoMesh(img);
                    });
                }
            } catch (e) {
                console.error("Failed to load cache", e);
            }
        }

        function createPhotoMesh(image) {
            const texture = new THREE.Texture(image);
            texture.needsUpdate = true;
            texture.colorSpace = THREE.SRGBColorSpace;

            // Maintain aspect ratio
            const aspect = image.width / image.height;
            const w = 4;
            const h = 4 / aspect;

            const geometry = new THREE.PlaneGeometry(w, h);
            // Use BasicMaterial for photos so they are always fully bright and not affected by shadows
            const material = new THREE.MeshBasicMaterial({ 
                map: texture, 
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 1.0 
            });

            const mesh = new THREE.Mesh(geometry, material);
            
            // Add a border (gold frame)
            const frameGeo = new THREE.BoxGeometry(w + 0.2, h + 0.2, 0.1);
            const frameMat = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.gold, 
                metalness: 0.8, 
                roughness: 0.2,
                emissive: 0x332200
            });
            const frame = new THREE.Mesh(frameGeo, frameMat);
            frame.position.z = -0.06;
            mesh.add(frame);

            // 修改位置计算逻辑：使用确定性的黄金螺旋算法
            // 传入当前照片的总数作为 index，确保每张新照片都有唯一且均匀的位置
            const index = photoMeshes.length;
            const treePos = getPhotoSurfacePosition(index);

            // Explode Position (Target) - 修改为球体分布
            const explodePos = getExplodeSpherePosition(35);

            mesh.position.copy(explodePos); // Start exploded if added later, or logic will fix it
            scene.add(mesh);

            photoMeshes.push({
                mesh: mesh,
                treePos: treePos,
                explodePos: explodePos,
                wobbleOffset: Math.random() * 100,
                isPhoto: true
            });
            
            // Add to main particles array for movement management
            particles.push(photoMeshes[photoMeshes.length-1]);
        }

        // --- Animation Loop ---
        function animate() {
            requestAnimationFrame(animate);
            time += 0.01;

            // 1. Smooth State Transition
            if (currentState !== targetState) {
                currentState = targetState;
                
                // If entering focus mode, pick a random photo to bring forward if any exist
                if (currentState === STATE.FOCUS && photoMeshes.length > 0) {
                     // Reset all photos first
                     photoMeshes.forEach(p => p.focusOffset = null);
                     // Pick one
                     const luckyPhoto = photoMeshes[Math.floor(Math.random() * photoMeshes.length)];
                     luckyPhoto.focusOffset = true;
                }
            }

            // 2. Camera Controls
            let camX = Math.sin(time * 0.2) * 50;
            let camZ = Math.cos(time * 0.2) * 50;
            let camY = 0;

            // Hand Influence
            if (currentState === STATE.EXPLODE && isHandDetected) {
                const angle = handPos.x * Math.PI; 
                camX = Math.sin(angle) * 60;
                camZ = Math.cos(angle) * 60;
                camY = handPos.y * 30;
            } else if (currentState === STATE.FOCUS) {
                camX *= 0.3;
                camZ *= 0.3;
            }

            camera.position.x += (camX - camera.position.x) * 0.05;
            camera.position.y += (camY - camera.position.y) * 0.05;
            camera.position.z += (camZ - camera.position.z) * 0.05;
            camera.lookAt(0, 0, 0);

            // 3. Update Visual Effects (Snow, Dust)
            
            // Snow
            if (snowParticles) {
                const positions = snowParticles.geometry.attributes.position.array;
                const vels = snowParticles.userData.velocities;
                for (let i=0; i<vels.length; i++) {
                    const i3 = i*3;
                    positions[i3+1] -= vels[i]; // Fall down
                    // Reset if too low
                    if (positions[i3+1] < -20) {
                        positions[i3+1] = 40;
                        positions[i3] = (Math.random() - 0.5) * 80;
                        positions[i3+2] = (Math.random() - 0.5) * 80;
                    }
                }
                snowParticles.geometry.attributes.position.needsUpdate = true;
            }
            
            // Magic Dust (Rotate)
            if (magicDust) {
                magicDust.rotation.y = time * 0.05;
            }

            // 4. Particle Animation & Twinkle
            
            // A. Update Lights (Twinkle Effect)
            // 无论是合拢还是散开，灯光都会闪烁
            twinkleLights.forEach(p => {
                // 使用正弦波控制发光强度：基准 1.0 + 波动 1.0 = 范围 [0, 2.0]
                const intensity = 1.0 + Math.sin(time * p.blinkSpeed + p.blinkOffset) * 1.0;
                // 保证最低亮度不为0，避免完全黑掉
                p.mesh.material.emissiveIntensity = Math.max(0.2, intensity);
            });

            // B. Move Particles
            particles.forEach(p => {
                let target;

                if (currentState === STATE.TREE) {
                    target = p.treePos;
                } else if (currentState === STATE.EXPLODE) {
                    target = p.explodePos;
                } else if (currentState === STATE.FOCUS) {
                    target = p.explodePos; 
                    
                    if (p.focusOffset) {
                        const camDir = camera.position.clone().normalize();
                        const targetPos = camDir.multiplyScalar(10);
                        p.mesh.position.lerp(targetPos, 0.1);
                        p.mesh.quaternion.copy(camera.quaternion);
                        return; // Skip standard update
                    }
                }

                const wobble = Math.sin(time * 2 + p.wobbleOffset) * 0.5;
                const finalTarget = target.clone();
                if (currentState !== STATE.TREE) {
                    finalTarget.y += wobble;
                }

                // Move mesh
                p.mesh.position.lerp(finalTarget, 0.04);
                
                // Rotation
                if (!p.isPhoto) {
                    // 装饰物缓慢自转
                    p.mesh.rotation.x += 0.01;
                    p.mesh.rotation.y += 0.01;
                } else if (currentState === STATE.TREE) {
                    p.mesh.lookAt(new THREE.Vector3(p.mesh.position.x * 2, p.mesh.position.y, p.mesh.position.z * 2));
                } else {
                    p.mesh.quaternion.copy(camera.quaternion);
                }
            });

            // 普通渲染
            renderer.render(scene, camera);
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        // Start
        init();

    </script>
</body>
</html>
```

@tab 手机端

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Gesture Controlled Christmas Tree</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            background-color: #050510; /* 深蓝夜空色 */
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #fff;
        }

        #canvas-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background: radial-gradient(circle at center, #1a1a2e 0%, #000000 100%); /* 渐变背景 */
        }

        /* UI Overlay */
        #ui-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
            pointer-events: none; /* Let clicks pass through to canvas if needed */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 20px;
            box-sizing: border-box;
        }

        .header {
            text-align: left;
            text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
            pointer-events: none;
        }

        h1 {
            margin: 0;
            font-weight: 300;
            color: #FFD700; /* Gold */
            letter-spacing: 2px;
            font-size: 24px;
        }

        p.subtitle {
            margin: 5px 0 0 0;
            color: #aaa;
            font-size: 14px;
        }

        /* Mobile Menu Button (Hidden on Desktop) */
        #mobile-menu-btn {
            display: none; /* Default hidden */
            pointer-events: auto;
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.6);
            border: 1px solid #FFD700;
            color: #FFD700;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 20px;
            cursor: pointer;
            backdrop-filter: blur(5px);
            z-index: 100;
        }

        /* Status & Instructions & Buttons Container */
        .status-panel {
            position: absolute;
            top: 20px;
            right: 20px;
            text-align: right;
            display: flex;
            flex-direction: column;
            align-items: flex-end; /* Right align everything */
            gap: 12px;
            transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .status-tag {
            display: inline-block;
            padding: 8px 16px;
            background: rgba(20, 30, 20, 0.8);
            border: 1px solid #FFD700;
            border-radius: 20px;
            color: #FFD700;
            font-weight: bold;
            font-size: 14px;
            transition: all 0.3s ease;
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
        }

        .instructions {
            background: rgba(0, 0, 0, 0.6);
            padding: 15px;
            border-radius: 8px; /* Slightly squarer for tech feel */
            font-size: 12px;
            color: #ddd;
            width: 200px; /* Fixed width for alignment */
            pointer-events: auto;
            backdrop-filter: blur(10px);
            border-left: 2px solid #C41E3A; /* Red accent */
            border-right: 1px solid rgba(255, 255, 255, 0.1);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .instruction-item {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            justify-content: space-between; /* Space out icon and text */
        }
        
        .icon { font-size: 16px; width: 20px; text-align: center;}

        /* Upload Buttons - New Elegant Style */
        .upload-container {
            pointer-events: auto;
            display: flex;
            flex-direction: column;
            gap: 8px;
            align-items: flex-end;
            margin-top: 5px;
            width: 220px; /* Give it a bit more width for the dropdown */
        }

        .btn {
            background: rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(255, 215, 0, 0.5); /* Subtle Gold Border */
            color: #FFD700;
            padding: 8px 20px;
            border-radius: 4px; /* Minimalist radius */
            cursor: pointer;
            font-size: 12px;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            backdrop-filter: blur(5px);
            width: 100%; /* Match width */
            text-align: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            box-sizing: border-box; /* Ensure padding doesn't increase width */
        }

        .btn:hover {
            background: rgba(255, 215, 0, 0.15);
            border-color: #FFD700;
            box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
            transform: translateX(-5px); /* Subtle slide left */
        }

        .btn.active {
            background: rgba(255, 215, 0, 0.2);
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.4);
            border-color: #FFD700;
        }

        /* Group music buttons slightly */
        .music-group {
            display: flex;
            gap: 5px;
            width: 100%;
        }
        
        .music-group .btn {
            flex: 1; /* Split space */
            padding: 8px 5px; /* Smaller padding */
        }
        
        #music-btn {
            flex: 0 0 40%; /* Play button takes less space */
        }
        
        #playlist-select {
            flex: 1;
            appearance: none; /* Remove default arrow */
            -webkit-appearance: none;
            text-align: left;
            text-align-last: center;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FFD700' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 8px center;
            background-size: 12px;
            padding-right: 25px; /* Space for arrow */
            padding-left: 10px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #FFD700;
        }
        
        #playlist-select option {
            background: #222;
            color: #FFD700;
            padding: 5px;
        }

        /* Differentiate clear button slightly */
        #clear-btn {
            border-color: rgba(255, 255, 255, 0.3);
            color: #aaa;
        }
        
        #clear-btn:hover {
            border-color: #fff;
            color: #fff;
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }

        #file-input { display: none; }
        #music-input { display: none; }

        /* Webcam feedback (hidden but processed) */
        #video-feed {
            position: absolute;
            bottom: 20px;
            left: 20px;
            width: 160px;
            height: 120px;
            border-radius: 10px;
            transform: scaleX(-1); /* Mirror */
            border: 2px solid #FFD700;
            opacity: 0.7;
            z-index: 20;
            object-fit: cover;
            display: block; /* Required for MediaPipe */
        }

        /* Loading Screen */
        #loading {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            z-index: 100;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #FFD700;
            transition: opacity 0.5s;
        }

        .loader {
            border: 4px solid #333;
            border-top: 4px solid #FFD700;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin-bottom: 15px;
        }

        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

        /* --- MOBILE OPTIMIZATION --- */
        @media (max-width: 768px) {
            /* Show Hamburger Button */
            #mobile-menu-btn {
                display: block;
            }

            /* Modify Status Panel to act as a drawer */
            .status-panel {
                top: 70px; /* Below the menu button */
                right: 0;
                transform: translateX(120%); /* Hide off-screen by default */
                background: rgba(0, 0, 0, 0.9); /* Darker background for readability */
                padding: 20px;
                border-radius: 10px 0 0 10px;
                border: 1px solid rgba(255, 215, 0, 0.3);
                border-right: none;
                max-height: 80vh;
                overflow-y: auto;
                box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.5);
            }

            /* Class to show the menu */
            .status-panel.open {
                transform: translateX(0);
            }

            /* Adjust video feed position slightly */
            #video-feed {
                width: 120px;
                height: 90px;
                bottom: 10px;
                left: 10px;
            }
            
            h1 { font-size: 20px; }
            .header { margin-top: 10px; margin-left: 10px; }
        }

    </style>
    <!-- MediaPipe Hands Global Script (Fix for Module Error) -->
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/hands.js" crossorigin="anonymous"></script>

    <!-- Import Maps for Three.js and Addons -->
    <script type="importmap">
        {
            "imports": {
                "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
                "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"
            }
        }
    </script>
</head>
<body>

    <!-- Audio Element (Added crossorigin for recording) -->
    <audio id="bg-music" loop crossorigin="anonymous"></audio>

    <!-- Loading Screen -->
    <div id="loading">
        <div class="loader"></div>
        <div id="loading-text">正在初始化视觉引擎与AI模型...</div>
    </div>

    <!-- Video Element for MediaPipe (Visible for user feedback) -->
    <video id="video-feed" playsinline></video>

    <!-- UI Layer -->
    <div id="ui-layer">
        <div class="header">
            <h1>CHRISTMAS GESTURE</h1>
            <p class="subtitle">MediaPipe & Three.js WebGL Experience</p>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <button id="mobile-menu-btn" onclick="toggleMobileMenu()">☰</button>

        <div class="status-panel" id="status-panel">
            <div id="mode-display" class="status-tag">等待手势...</div>
            
            <div class="instructions">
                <div class="instruction-item"><span>✊ 握拳</span> <span>聚合形态</span></div>
                <div class="instruction-item"><span>🖐 张开</span> <span>散开形态</span></div>
                <div class="instruction-item"><span>🤏 捏合</span> <span>特写照片</span></div>
                <div class="instruction-item"><span>👋 移动</span> <span>旋转视角</span></div>
            </div>

            <div class="upload-container">
                <button id="upload-btn" class="btn" onclick="document.getElementById('file-input').click()">
                    <span>📷</span> 上传照片
                </button>
                
                <!-- Music Controls -->
                <div class="music-group">
                    <button id="music-btn" class="btn" onclick="toggleMusic()">
                        <span>🔇</span>
                    </button>
                    <!-- 下拉选择框替代原来的“换音乐”按钮 -->
                    <select id="playlist-select" class="btn" onchange="handlePlaylistChange(this)">
                        <option disabled>-- 选择背景音乐 --</option>
                        <!-- Options will be populated by JS -->
                        <option value="custom">📂 自定义...</option>
                    </select>
                </div>

                <button id="clear-btn" class="btn" onclick="clearCachedPhotos()">
                    <span>🗑️</span> 清除照片
                </button>
                
                <input type="file" id="file-input" accept="image/*" multiple onchange="handlePhotoUpload(event)">
                <!-- 新增音乐文件输入框 -->
                <input type="file" id="music-input" accept="audio/*, .mp3, .m4a" onchange="handleMusicFileUpload(event)">
            </div>
        </div>
    </div>

    <!-- 3D Canvas -->
    <div id="canvas-container"></div>

    <!-- Main Logic -->
    <script type="module">
        import * as THREE from 'three';

        // --- Configuration & Constants ---
        const CONFIG = {
            colors: {
                green: 0x228B22,   // Forest Green (Brighter)
                gold: 0xFFD700,    // Metallic Gold
                red: 0xFF0000,     // Bright Red
                white: 0xFFFFFF,
                // 新增灯光颜色池
                lights: [0xFF0000, 0xFFFF00, 0x00BFFF, 0xFF69B4, 0xFFA500] 
            },
            particles: 1800,       // 稍微增加粒子数量到 1800，容纳更多装饰
            radius: 18,            // Base radius of tree bottom
            height: 35,            // Height of tree
            cacheKey: 'xmas_tree_photos_v1',
            cacheDuration: 7 * 24 * 60 * 60 * 1000, // 7 Days in ms
            musicCacheKey: 'xmas_music_pref_v3', // 更新版本号以适应新逻辑
            
            // 内置歌单
            playlist: [
                { name: "Last Christmas", url: "https://cdn.bornforthis.cn/mp3/LastChristmas(Single%20Version).m4a" },
                { name: "Jingle Bell Rock", url: "https://cdn.bornforthis.cn/mp3/JingleBellRock.m4a" },
                { name: "Santa Tell Me", url: "https://cdn.bornforthis.cn/mp3/SantaTellMe.m4a" },
                { name: "Feliz Navidad", url: "https://cdn.bornforthis.cn/mp3/FelizNavidad.m4a" },
                { name: "Santa Claus is Coming", url: "https://cdn.bornforthis.cn/mp3/SantaClausisComingtoTown.m4a" },
                { name: "Here Comes Santa Claus", url: "https://cdn.bornforthis.cn/mp3/HereComesSantaClaus.m4a" },
                { name: "Merry Christmas Mr Lawrence", url: "https://cdn.bornforthis.cn/mp3/MerryChristmasMrLawrence.m4a" },
                { name: "Christmas Time in My Town", url: "https://cdn.bornforthis.cn/mp3/ChristmasTimeinMyHomeTown.mp3" },
            ]
        };

        // --- Global Variables ---
        let scene, camera, renderer;
        let particles = []; // Array to store { mesh, treePos, explodePos, currentPos, speed }
        let photoMeshes = []; // Array specifically for user photos
        let twinkleLights = []; // 专门存储需要闪烁的灯光粒子
        
        // 新增的特效系统
        let snowParticles, magicDust;
        
        let time = 0;
        
        // Interaction State
        const STATE = {
            TREE: 'TREE',
            EXPLODE: 'EXPLODE',
            FOCUS: 'FOCUS'
        };
        let currentState = STATE.TREE;
        let targetState = STATE.TREE;
        
        // Hand Data
        let handPos = { x: 0, y: 0 }; // Normalized -1 to 1
        let isHandDetected = false;

        // Music State
        let isMusicPlaying = false;
        let currentMusicSource = CONFIG.playlist[0].url; // Default to first song

        // --- Initialization ---
        async function init() {
            // 1. Scene Setup
            const container = document.getElementById('canvas-container');
            scene = new THREE.Scene();
            // 移除纯色背景，因为我们在 CSS 里用了渐变，这里设为透明或保留雾效果
            scene.background = null; 
            // 增加一点雾气增加深邃感
            scene.fog = new THREE.FogExp2(0x050510, 0.01);

            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 0, 50);

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.outputColorSpace = THREE.SRGBColorSpace;
            container.appendChild(renderer.domElement);

            // 2. Lighting - 大幅增强光照
            // 2.1 强环境光，照亮所有阴影
            const ambientLight = new THREE.AmbientLight(0xffffff, 1.0); 
            scene.add(ambientLight);

            // 2.2 主平行光（模拟阳光），提供清晰的明暗关系
            const mainLight = new THREE.DirectionalLight(0xffffff, 2.0);
            mainLight.position.set(10, 20, 20);
            scene.add(mainLight);

            // 2.3 补光灯（金色），增加华丽感
            const pointLight = new THREE.PointLight(CONFIG.colors.gold, 1.5, 100);
            pointLight.position.set(0, 20, 10);
            scene.add(pointLight);
            
            // 2.4 氛围灯（红绿），增加节日气氛，但调高亮度
            const redLight = new THREE.PointLight(CONFIG.colors.red, 1.5, 50);
            redLight.position.set(15, 10, 15);
            scene.add(redLight);
            
            const greenLight = new THREE.PointLight(CONFIG.colors.green, 1.5, 50);
            greenLight.position.set(-15, -10, 15);
            scene.add(greenLight);

            // 3. Post Processing Removed

            // 4. Content Generation
            createParticles();
            createLightStrip(); // 新增：螺旋灯带
            createStar();
            createEnvironment(); // 新增：星空
            createSnow();        // 新增：雪花
            createMagicDust();   // 新增：魔法金粉
            
            // 5. Load Cached Photos & Music Preference
            loadCachedPhotos();
            initAudio(); // 初始化音频和下拉菜单

            // 6. Setup MediaPipe
            await setupMediaPipe();

            // 7. Events
            window.addEventListener('resize', onWindowResize);

            // 8. Start Loop
            document.getElementById('loading').style.opacity = '0';
            setTimeout(() => document.getElementById('loading').style.display = 'none', 500);
            animate();
        }

        // --- Mobile Menu Toggle ---
        window.toggleMobileMenu = function() {
            const panel = document.getElementById('status-panel');
            const btn = document.getElementById('mobile-menu-btn');
            panel.classList.toggle('open');
            // Change icon based on state
            if (panel.classList.contains('open')) {
                btn.innerHTML = '✕';
            } else {
                btn.innerHTML = '☰';
            }
        };

        // --- MediaPipe Logic ---
        async function setupMediaPipe() {
            const video = document.getElementById('video-feed');

            // Access Global Hands Class
            const hands = new window.Hands({locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
            }});

            hands.setOptions({
                maxNumHands: 1,
                modelComplexity: 1,
                minDetectionConfidence: 0.7,
                minTrackingConfidence: 0.6
            });

            hands.onResults(onHandsResults);

            // Access Webcam
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                video.srcObject = stream;
                await video.play();

                // Start processing loop specific to MediaPipe
                async function detectionLoop() {
                    if (video.currentTime > 0 && !video.paused && !video.ended) {
                        await hands.send({image: video});
                    }
                    requestAnimationFrame(detectionLoop);
                }
                detectionLoop();
            } catch (err) {
                console.error("Camera access denied or failed", err);
                document.getElementById('loading-text').innerText = "未检测到摄像头，请检查权限。应用将自动运行演示模式。";
                setTimeout(() => {
                    document.getElementById('loading').style.display = 'none';
                    // Auto demo mode logic could go here
                }, 2000);
            }
        }

        function onHandsResults(results) {
            const modeDisplay = document.getElementById('mode-display');
            
            if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                isHandDetected = true;
                const landmarks = results.multiHandLandmarks[0];

                // 1. Calculate Hand Center (for rotation)
                // Wrist is 0, Middle Finger MCP is 9
                const cx = landmarks[9].x;
                const cy = landmarks[9].y;
                handPos.x = (cx - 0.5) * 2; // -1 to 1
                handPos.y = (cy - 0.5) * 2;

                // 2. Gesture Recognition
                const state = detectGesture(landmarks);
                
                if (state) {
                    targetState = state;
                    
                    // UI Update
                    let text = "未知";
                    let bg = "#333";
                    if (state === STATE.TREE) { text = "🌲 聚合形态"; bg = CONFIG.colors.green; }
                    if (state === STATE.EXPLODE) { text = "✨ 散开形态"; bg = "#444"; }
                    if (state === STATE.FOCUS) { text = "📷 聚焦照片"; bg = CONFIG.colors.red; }
                    
                    modeDisplay.innerText = text;
                    modeDisplay.style.borderColor = (state === STATE.FOCUS) ? '#fff' : CONFIG.colors.gold;
                }

            } else {
                isHandDetected = false;
            }
        }

        function detectGesture(lm) {
            const dist = (i, j) => Math.sqrt(Math.pow(lm[i].x - lm[j].x, 2) + Math.pow(lm[i].y - lm[j].y, 2));
            const wrist = 0;
            const tips = [8, 12, 16, 20];
            const pips = [6, 10, 14, 18];
            
            // Check Fingers Extended
            let extendedCount = 0;
            if (dist(4, 17) > 0.2) extendedCount++; // Rough thumb check

            for (let k=0; k<4; k++) {
                if (dist(wrist, tips[k]) > dist(wrist, pips[k]) * 1.2) {
                    extendedCount++;
                }
            }

            // Pinch Detection (Thumb 4 and Index 8)
            const pinchDist = dist(4, 8);

            if (pinchDist < 0.08) {
                return STATE.FOCUS;
            } else if (extendedCount >= 4) {
                return STATE.EXPLODE;
            } else if (extendedCount <= 1) {
                return STATE.TREE;
            }
            
            return null; 
        }

        // --- Audio Logic ---
        
        function initAudio() {
            // 1. Populate Dropdown
            const select = document.getElementById('playlist-select');
            
            // Insert Built-in options BEFORE the "Custom" option
            CONFIG.playlist.forEach(song => {
                const option = document.createElement('option');
                option.value = song.url;
                option.innerText = `🎵 ${song.name}`;
                // Insert before the last option (which is Custom)
                select.insertBefore(option, select.lastElementChild);
            });

            // 2. Error Handling & Fallback
            const audio = document.getElementById('bg-music');
            
            // Critical fix for "The element has no supported sources"
            audio.addEventListener('error', function(e) {
                console.warn("Audio load error:", e);
                const src = audio.src;
                // If it failed and we had crossorigin set, try removing it (fallback mode)
                // This means audio won't be recordable via WebAudio, but at least it plays.
                if (audio.crossOrigin === 'anonymous') {
                    console.log("Attempting fallback: Removing crossorigin attribute...");
                    audio.removeAttribute('crossorigin');
                    audio.src = src; // Retry
                    audio.load();
                    if (isMusicPlaying) audio.play().catch(err => console.log("Fallback play error:", err));
                }
            }, true); // Capture phase

            // 3. Load Preferences
            try {
                const raw = localStorage.getItem(CONFIG.musicCacheKey);
                if (raw) {
                    const cache = JSON.parse(raw);
                    const now = Date.now();
                    
                    if (now - cache.timestamp <= CONFIG.cacheDuration) {
                        // 恢复音乐源
                        if (cache.customSrc) {
                            currentMusicSource = cache.customSrc;
                        }

                        // 恢复播放状态
                        if (cache.enabled) {
                            isMusicPlaying = true;
                            // Play will be called below
                        }
                    }
                }
            } catch (e) {
                console.error("Error loading music preference", e);
            }

            // 4. Apply Source
            audio.src = currentMusicSource;
            
            // 5. Sync Dropdown Value
            // Check if current source is in playlist
            const inPlaylist = CONFIG.playlist.find(p => p.url === currentMusicSource);
            if (inPlaylist) {
                select.value = currentMusicSource;
            } else {
                // If not in playlist, it stays default or handled by custom
            }

            // 6. Play if needed
            updateMusicUI(isMusicPlaying);
            if (isMusicPlaying) {
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log("Auto-play blocked or source invalid:", error);
                        // Don't turn off isMusicPlaying immediately if it's just blocking;
                        // But if it's a source error, the 'error' listener handles it.
                        // If it's policy block, we update UI
                        if (error.name === 'NotAllowedError') {
                             isMusicPlaying = false;
                             updateMusicUI(false);
                        }
                    });
                }
            }
        }

        // 处理下拉菜单变化
        window.handlePlaylistChange = function(selectElem) {
            const value = selectElem.value;
            
            if (value === 'custom') {
                // 用户选择“自定义”
                handleCustomMusicClick();
                // 暂时把选中的值重置回之前的（或者保持 Custom），等待用户完成上传
                // 实际上 handleCustomMusicClick 会更新源
            } else {
                // 用户选择了内置歌曲
                changeMusicSource(value, 'builtin');
            }
        };

        window.handleCustomMusicClick = function() {
            const url = prompt("请输入背景音乐链接 (MP3/M4A)\n或者点击 [取消] 上传本地文件:");
            
            if (url) {
                changeMusicSource(url.trim(), 'link');
            } else if (url === "") {
                // Cancelled or empty
                // Revert selection if possible?
            } else {
                // Clicked Cancel -> File Upload
                document.getElementById('music-input').click();
            }
        };

        window.handleMusicFileUpload = function(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(e) {
                const result = e.target.result;
                const canCache = result.length < 4 * 1024 * 1024; 
                changeMusicSource(result, 'file', canCache);
                if (!canCache) {
                    alert("音乐文件较大，仅在本次访问播放，不会缓存到本地。");
                }
            };
            reader.readAsDataURL(file);
            event.target.value = ''; 
        };

        function changeMusicSource(src, type, shouldCache = true) {
            const audio = document.getElementById('bg-music');
            currentMusicSource = src;
            
            // Reset crossorigin if it was removed by fallback previously, to try recording again if possible
            if (!audio.hasAttribute('crossorigin') && type !== 'file') { // Local files don't need CORS
                 audio.setAttribute('crossorigin', 'anonymous');
            }
            
            audio.src = src;
            
            // Auto play
            isMusicPlaying = true;
            audio.play().catch(e => console.log("Play interrupted or failed:", e));
            updateMusicUI(true);
            
            // Update Dropdown UI to reflect change
            const select = document.getElementById('playlist-select');
            // If it's a built-in type, select matches src
            if (type === 'builtin') {
                 select.value = src;
            }
            
            // Save
            saveMusicPreference(true, shouldCache ? src : null);
        }

        window.toggleMusic = function() {
            const audio = document.getElementById('bg-music');
            isMusicPlaying = !isMusicPlaying;
            
            if (isMusicPlaying) {
                audio.play().catch(e => {
                    console.log("Play failed in toggle:", e);
                    // Revert UI if play fails hard
                    isMusicPlaying = false;
                    updateMusicUI(false);
                });
            } else {
                audio.pause();
            }
            
            updateMusicUI(isMusicPlaying);
            // Save state (keep existing src)
            saveMusicPreference(isMusicPlaying, null, true); 
        };

        function updateMusicUI(isPlaying) {
            const btn = document.getElementById('music-btn');
            if (isPlaying) {
                btn.innerHTML = '<span>🔊</span>';
                btn.classList.add('active');
            } else {
                btn.innerHTML = '<span>🔇</span>';
                btn.classList.remove('active');
            }
        }

        // srcData: 如果不为 null，则更新 customSrc；如果为 null 且 updateOnlyState=false，则清除 customSrc
        // updateOnlyState: 如果为 true，只更新开关状态，不碰 source
        function saveMusicPreference(isEnabled, srcData = null, updateOnlyState = false) {
            try {
                let dataToSave = {
                    timestamp: Date.now(),
                    enabled: isEnabled,
                    customSrc: null
                };

                if (updateOnlyState) {
                    const oldRaw = localStorage.getItem(CONFIG.musicCacheKey);
                    if (oldRaw) {
                        const old = JSON.parse(oldRaw);
                        dataToSave.customSrc = old.customSrc;
                    }
                } else {
                    dataToSave.customSrc = srcData;
                }

                localStorage.setItem(CONFIG.musicCacheKey, JSON.stringify(dataToSave));
            } catch (e) {
                console.warn("Failed to save music preference", e);
                // Fallback: save disabled state without source
                try {
                     const fallbackData = {
                        timestamp: Date.now(),
                        enabled: isEnabled,
                        customSrc: null 
                    };
                    localStorage.setItem(CONFIG.musicCacheKey, JSON.stringify(fallbackData));
                } catch(e2) {}
            }
        }

        // --- Visual Effects Creation ---

        function createEnvironment() {
            // Stars
            const starsGeo = new THREE.BufferGeometry();
            const starsCount = 2000;
            const posArray = new Float32Array(starsCount * 3);
            
            for(let i=0; i<starsCount*3; i++) {
                // Distant stars
                posArray[i] = (Math.random() - 0.5) * 400; 
            }
            
            starsGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            
            const starsMat = new THREE.PointsMaterial({
                size: 0.5,
                color: 0xffffff,
                transparent: true,
                opacity: 0.8
            });
            
            const starField = new THREE.Points(starsGeo, starsMat);
            scene.add(starField);
        }

        // --- 动态生成雪花纹理 ---
        function createSnowflakeTexture() {
            const canvas = document.createElement('canvas');
            canvas.width = 32;
            canvas.height = 32;
            const context = canvas.getContext('2d');

            // 绘制雪花形状 (六角星)
            context.strokeStyle = '#FFFFFF';
            context.lineWidth = 2;
            context.lineCap = 'round';
            
            context.translate(16, 16);
            for(let i = 0; i < 6; i++) {
                context.beginPath();
                context.moveTo(0, 0);
                context.lineTo(0, 14);
                context.stroke();
                
                // 小分叉
                context.beginPath();
                context.moveTo(0, 8);
                context.lineTo(4, 10);
                context.stroke();
                
                context.beginPath();
                context.moveTo(0, 8);
                context.lineTo(-4, 10);
                context.stroke();
                
                context.rotate(Math.PI / 3);
            }

            return new THREE.CanvasTexture(canvas);
        }

        function createSnow() {
            const snowGeo = new THREE.BufferGeometry();
            const snowCount = 500;
            const posArray = new Float32Array(snowCount * 3);
            const velArray = new Float32Array(snowCount); // Falling speed
            
            for(let i=0; i<snowCount; i++) {
                const i3 = i * 3;
                posArray[i3] = (Math.random() - 0.5) * 80; // x
                posArray[i3+1] = (Math.random() - 0.5) * 80 + 20; // y (start high)
                posArray[i3+2] = (Math.random() - 0.5) * 80; // z
                
                velArray[i] = 0.1 + Math.random() * 0.1; // speed
            }
            
            snowGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            
            // 使用生成的雪花纹理
            const snowTexture = createSnowflakeTexture();

            const snowMat = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 2.0, // 调大尺寸以显示图案
                map: snowTexture,
                transparent: true,
                opacity: 0.8,
                depthWrite: false, // 避免透明遮挡问题
                blending: THREE.AdditiveBlending 
            });
            
            snowParticles = new THREE.Points(snowGeo, snowMat);
            snowParticles.userData = { velocities: velArray };
            scene.add(snowParticles);
        }

        function createMagicDust() {
            const dustGeo = new THREE.BufferGeometry();
            const count = 300;
            const posArray = new Float32Array(count * 3);
            
            for(let i=0; i<count*3; i++) {
                posArray[i] = (Math.random() - 0.5) * 40; 
            }
            
            dustGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            
            const dustMat = new THREE.PointsMaterial({
                color: 0xFFD700, // Gold
                size: 0.3,
                transparent: true,
                opacity: 0.6,
                blending: THREE.AdditiveBlending
            });
            
            magicDust = new THREE.Points(dustGeo, dustMat);
            scene.add(magicDust);
        }

        // --- Particle System Logic ---

        // 移除旧的螺旋线逻辑，改用体积计算
        function getConeVolumePosition(h, maxR) {
            // h is 0 (bottom) to 1 (top)
            
            // 当前高度的圆锥截面半径
            const rAtHeight = maxR * (1 - h);
            
            // 随机分布在圆截面内，但更倾向于外表面以保持树的形状
            // 使用 Math.pow 调整分布：指数越小越均匀，指数越大越集中在边缘
            const r = rAtHeight * Math.pow(Math.random(), 0.4); 
            
            const angle = Math.random() * Math.PI * 2;
            
            const x = r * Math.cos(angle);
            const z = r * Math.sin(angle);
            
            // 将高度映射到实际坐标 y
            const y = -CONFIG.height/2 + h * CONFIG.height;
            
            return new THREE.Vector3(x, y, z);
        }

        // 新增：专门用于散开形态的球体分布算法 (圆形)
        function getExplodeSpherePosition(maxRadius) {
            // 球坐标随机分布
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            
            // 使用立方根确保在体积内均匀分布（不仅仅是表面，也不仅仅是核心）
            const r = maxRadius * Math.cbrt(Math.random()); 
            
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);
            
            return new THREE.Vector3(x, y, z);
        }

        // 新增：专门用于照片的均匀分布算法 (基于黄金角度螺旋)
        function getPhotoSurfacePosition(index) {
            const goldenRatio = 0.61803398875;
            const h = ((index * goldenRatio) % 0.7) + 0.15; 
            const angle = index * Math.PI * 2 * goldenRatio;
            const rBase = CONFIG.radius * (1 - h);
            const r = rBase + 2.5; 
            
            const x = r * Math.cos(angle);
            const z = r * Math.sin(angle);
            const y = -CONFIG.height/2 + h * CONFIG.height;
            
            return new THREE.Vector3(x, y, z);
        }

        // 新增：螺旋灯带生成函数
        function createLightStrip() {
            // 密度调整：增加数量，减小尺寸，使其看起来像连续的灯带
            const stripLightsCount = 800; // 从 160 增加到 800，极大提升密度
            const turns = 10; // 稍微增加圈数，让缠绕感更强
            const geometry = new THREE.SphereGeometry(0.12, 8, 8); // 尺寸减小到 0.12，更像精致的小灯珠
            
            const material = new THREE.MeshStandardMaterial({
                color: 0xFFFFE0, // Light Yellow
                emissive: 0xFFD700,
                emissiveIntensity: 1.5,
                roughness: 0.2,
                metalness: 0.5,
                toneMapped: false
            });

            for (let i = 0; i < stripLightsCount; i++) {
                // 0 (top) -> 1 (bottom)
                const t = i / stripLightsCount;
                
                // Spiral logic
                const angle = t * turns * Math.PI * 2;
                const heightRange = CONFIG.height;
                const y = (heightRange / 2) - (t * heightRange); // Top down
                
                // Radius expands as we go down
                // 稍微往里收一点点 (+1.0)，贴合树叶表面更紧密
                const r = (t * CONFIG.radius) + 1.0; 
                
                const x = r * Math.cos(angle);
                const z = r * Math.sin(angle);
                
                const treePos = new THREE.Vector3(x, y, z);
                const explodePos = getExplodeSpherePosition(35);
                
                const mesh = new THREE.Mesh(geometry, material.clone()); 
                
                mesh.position.copy(treePos);
                scene.add(mesh);
                
                const pData = {
                    mesh: mesh,
                    treePos: treePos,
                    explodePos: explodePos,
                    velocity: new THREE.Vector3(),
                    wobbleOffset: Math.random() * 100,
                    isLight: true,
                    // 灯带特有的跑马灯闪烁效果
                    blinkSpeed: 2.0, // 稍微加快流动速度
                    blinkOffset: i * 0.05 // 调整相位偏移，因为粒子变多了，间隔要变小才能保持流动感
                };
                
                particles.push(pData);
                twinkleLights.push(pData);
            }
        }

        function createParticles() {
            // 1. 基础几何体
            const geometrySphere = new THREE.SphereGeometry(0.4, 16, 16); 
            const geometryCube = new THREE.BoxGeometry(0.8, 0.8, 0.8); // 树叶
            const geometryTetra = new THREE.TetrahedronGeometry(0.6); // 树叶
            const geometrySmallBox = new THREE.BoxGeometry(0.5, 0.5, 0.5); // 礼物盒
            const geometryCylinder = new THREE.CylinderGeometry(0.1, 0.1, 1.5, 8); // 糖果棒
            const geometryLight = new THREE.SphereGeometry(0.25, 16, 16); // 灯泡

            // 2. 基础材质
            const matGold = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.gold, roughness: 0.2, metalness: 0.8, emissive: 0x443300 
            });
            const matRed = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.red, roughness: 0.3, metalness: 0.3, emissive: 0x220000
            });
            const matGreen = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.green, roughness: 0.8, metalness: 0.0 
            });
            const matWhite = new THREE.MeshStandardMaterial({
                color: 0xFFFFFF, roughness: 0.2, metalness: 0.1
            });

            for (let i = 0; i < CONFIG.particles; i++) {
                let mesh;
                let isLight = false;
                let blinkSpeed = 0;
                let blinkOffset = 0;

                const type = Math.random();
                
                // --- 粒子类型分布 ---
                // 60% 树叶 (Cube/Tetrahedron)
                // 15% 装饰球 (Sphere)
                // 10% 特殊挂件 (糖果/礼物)
                // 15% 闪烁灯光 (Light)

                if (type < 0.6) {
                    // 树叶
                    const isCube = Math.random() > 0.5;
                    mesh = new THREE.Mesh(isCube ? geometryCube : geometryTetra, matGreen);
                    mesh.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, Math.random()*Math.PI);
                
                } else if (type < 0.75) {
                    // 装饰球 (金/红)
                    mesh = new THREE.Mesh(geometrySphere, Math.random() > 0.5 ? matGold : matRed);
                    mesh.scale.setScalar(1.2 + Math.random() * 0.5);
                
                } else if (type < 0.85) {
                    // 特殊挂件
                    if (Math.random() > 0.5) {
                        // 糖果棒 (红白长条)
                        mesh = new THREE.Mesh(geometryCylinder, matRed);
                        mesh.rotation.z = Math.PI / 4; // 斜着放
                    } else {
                        // 礼物盒 (金色/白色)
                        mesh = new THREE.Mesh(geometrySmallBox, Math.random() > 0.5 ? matGold : matWhite);
                        mesh.rotation.y = Math.random();
                    }
                
                } else {
                    // 💡 闪烁灯光 💡
                    isLight = true;
                    // 随机选一个颜色
                    const colorHex = CONFIG.colors.lights[Math.floor(Math.random() * CONFIG.colors.lights.length)];
                    const lightMat = new THREE.MeshStandardMaterial({
                        color: colorHex,
                        emissive: colorHex,
                        emissiveIntensity: 2.0, // 初始亮度高一点
                        roughness: 0.1,
                        metalness: 0.0,
                        toneMapped: false // 让它看起来更亮，不被压暗
                    });
                    
                    mesh = new THREE.Mesh(geometryLight, lightMat);
                    blinkSpeed = 2 + Math.random() * 3; // 闪烁速度
                    blinkOffset = Math.random() * Math.PI * 2; // 随机相位，避免同时闪
                }

                // Tree Position (Target) - 使用体积算法
                // 灯光和挂件稍微往外放一点 (pow 0.3 而不是 0.4)
                const h = Math.random(); 
                const treePos = getConeVolumePosition(h, CONFIG.radius);
                
                if (isLight || type >= 0.6) {
                    // 把装饰物稍微往外推，防止被树叶埋没
                    const center = new THREE.Vector3(0, treePos.y, 0);
                    const dir = new THREE.Vector3().subVectors(treePos, center).normalize();
                    treePos.add(dir.multiplyScalar(0.8));
                }

                // Explode Position (Target)
                const explodePos = getExplodeSpherePosition(35);

                // Initial Pos
                mesh.position.copy(treePos);
                
                scene.add(mesh);

                const pData = {
                    mesh: mesh,
                    treePos: treePos,
                    explodePos: explodePos,
                    velocity: new THREE.Vector3(),
                    wobbleOffset: Math.random() * 100,
                    isLight: isLight,
                    blinkSpeed: blinkSpeed,
                    blinkOffset: blinkOffset
                };

                particles.push(pData);
                if (isLight) twinkleLights.push(pData);
            }
        }

        function createStar() {
            // Simple Star on top
            const geometry = new THREE.OctahedronGeometry(1.5, 0);
            const material = new THREE.MeshStandardMaterial({
                color: 0xFFFF00, // Bright Yellow
                emissive: 0xFFD700,
                emissiveIntensity: 2, // 提高星星亮度
                roughness: 0.2,
                metalness: 0.8,
                toneMapped: false
            });
            const star = new THREE.Mesh(geometry, material);
            star.position.set(0, CONFIG.height/2 + 2, 0);
            
            // Star is just a special particle
            scene.add(star);
            particles.push({
                mesh: star,
                treePos: new THREE.Vector3(0, CONFIG.height/2 + 2, 0),
                explodePos: new THREE.Vector3(0, 10, 0),
                wobbleOffset: 0
            });
        }

        // --- Photo Upload & Cache Logic ---

        // 清除现有的照片（从场景和内存中）
        window.clearCachedPhotos = function() {
            // 1. Remove from scene and memory
            // We iterate backwards to remove safely
            for (let i = particles.length - 1; i >= 0; i--) {
                if (particles[i].isPhoto) {
                    scene.remove(particles[i].mesh);
                    if (particles[i].mesh.material.map) {
                        particles[i].mesh.material.map.dispose();
                    }
                    particles[i].mesh.material.dispose();
                    particles[i].mesh.geometry.dispose();
                    particles.splice(i, 1);
                }
            }
            photoMeshes = [];

            // 2. Clear LocalStorage
            try {
                localStorage.removeItem(CONFIG.cacheKey);
                console.log("Cache cleared");
            } catch (e) {
                console.error("Failed to clear cache", e);
            }
        };

        // 处理用户上传
        window.handlePhotoUpload = async function(event) {
            const files = event.target.files;
            if (!files.length) return;

            // 覆盖模式：上传新照片前清除旧的
            window.clearCachedPhotos();

            const imagePromises = Array.from(files).map(processFileToDataURL);
            
            try {
                // 等待所有图片处理完成（压缩 + 转Base64）
                const base64Images = await Promise.all(imagePromises);
                
                // 创建 Mesh
                base64Images.forEach(imgData => {
                    const img = new Image();
                    img.src = imgData;
                    img.onload = () => createPhotoMesh(img);
                });

                // 保存到缓存
                saveToCache(base64Images);

            } catch (err) {
                console.error("Error processing images:", err);
                alert("图片处理失败，请重试");
            }

            // 重置 input 以便允许重复上传相同文件
            event.target.value = '';
        };

        // 将文件读取并压缩为 Base64
        function processFileToDataURL(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const img = new Image();
                    img.src = e.target.result;
                    img.onload = () => {
                        // 创建 Canvas 进行压缩
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        
                        // 最大尺寸限制 (避免 localStorage 爆满)
                        const MAX_SIZE = 800; 
                        let width = img.width;
                        let height = img.height;

                        if (width > height) {
                            if (width > MAX_SIZE) {
                                height *= MAX_SIZE / width;
                                width = MAX_SIZE;
                            }
                        } else {
                            if (height > MAX_SIZE) {
                                width *= MAX_SIZE / height;
                                height = MAX_SIZE;
                            }
                        }

                        canvas.width = width;
                        canvas.height = height;
                        ctx.drawImage(img, 0, 0, width, height);

                        // 转换为 JPEG Base64 (0.8 质量)
                        const dataURL = canvas.toDataURL('image/jpeg', 0.8);
                        resolve(dataURL);
                    };
                    img.onerror = reject;
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        }

        // 保存到 LocalStorage
        function saveToCache(imagesData) {
            const cacheData = {
                timestamp: Date.now(),
                images: imagesData
            };
            try {
                localStorage.setItem(CONFIG.cacheKey, JSON.stringify(cacheData));
            } catch (e) {
                console.warn("Storage quota exceeded or error", e);
                alert("照片过多或过大，部分缓存可能失败");
            }
        }

        // 加载缓存
        function loadCachedPhotos() {
            try {
                const raw = localStorage.getItem(CONFIG.cacheKey);
                if (!raw) return;

                const cache = JSON.parse(raw);
                const now = Date.now();

                // 检查有效期 (7天)
                if (now - cache.timestamp > CONFIG.cacheDuration) {
                    console.log("Cache expired, clearing...");
                    localStorage.removeItem(CONFIG.cacheKey);
                    return;
                }

                if (cache.images && Array.isArray(cache.images)) {
                    console.log(`Loading ${cache.images.length} photos from cache...`);
                    cache.images.forEach(imgData => {
                        const img = new Image();
                        img.src = imgData;
                        img.onload = () => createPhotoMesh(img);
                    });
                }
            } catch (e) {
                console.error("Failed to load cache", e);
            }
        }

        function createPhotoMesh(image) {
            const texture = new THREE.Texture(image);
            texture.needsUpdate = true;
            texture.colorSpace = THREE.SRGBColorSpace;

            // Maintain aspect ratio
            const aspect = image.width / image.height;
            const w = 4;
            const h = 4 / aspect;

            const geometry = new THREE.PlaneGeometry(w, h);
            // Use BasicMaterial for photos so they are always fully bright and not affected by shadows
            const material = new THREE.MeshBasicMaterial({ 
                map: texture, 
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 1.0 
            });

            const mesh = new THREE.Mesh(geometry, material);
            
            // Add a border (gold frame)
            const frameGeo = new THREE.BoxGeometry(w + 0.2, h + 0.2, 0.1);
            const frameMat = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.gold, 
                metalness: 0.8, 
                roughness: 0.2,
                emissive: 0x332200
            });
            const frame = new THREE.Mesh(frameGeo, frameMat);
            frame.position.z = -0.06;
            mesh.add(frame);

            // 修改位置计算逻辑：使用确定性的黄金螺旋算法
            // 传入当前照片的总数作为 index，确保每张新照片都有唯一且均匀的位置
            const index = photoMeshes.length;
            const treePos = getPhotoSurfacePosition(index);

            // Explode Position (Target) - 修改为球体分布
            const explodePos = getExplodeSpherePosition(35);

            mesh.position.copy(explodePos); // Start exploded if added later, or logic will fix it
            scene.add(mesh);

            photoMeshes.push({
                mesh: mesh,
                treePos: treePos,
                explodePos: explodePos,
                wobbleOffset: Math.random() * 100,
                isPhoto: true
            });
            
            // Add to main particles array for movement management
            particles.push(photoMeshes[photoMeshes.length-1]);
        }

        // --- Animation Loop ---
        function animate() {
            requestAnimationFrame(animate);
            time += 0.01;

            // 1. Smooth State Transition
            if (currentState !== targetState) {
                currentState = targetState;
                
                // If entering focus mode, pick a random photo to bring forward if any exist
                if (currentState === STATE.FOCUS && photoMeshes.length > 0) {
                     // Reset all photos first
                     photoMeshes.forEach(p => p.focusOffset = null);
                     // Pick one
                     const luckyPhoto = photoMeshes[Math.floor(Math.random() * photoMeshes.length)];
                     luckyPhoto.focusOffset = true;
                }
            }

            // 2. Camera Controls
            let camX = Math.sin(time * 0.2) * 50;
            let camZ = Math.cos(time * 0.2) * 50;
            let camY = 0;

            // Hand Influence
            if (currentState === STATE.EXPLODE && isHandDetected) {
                const angle = handPos.x * Math.PI; 
                camX = Math.sin(angle) * 60;
                camZ = Math.cos(angle) * 60;
                camY = handPos.y * 30;
            } else if (currentState === STATE.FOCUS) {
                camX *= 0.3;
                camZ *= 0.3;
            }

            camera.position.x += (camX - camera.position.x) * 0.05;
            camera.position.y += (camY - camera.position.y) * 0.05;
            camera.position.z += (camZ - camera.position.z) * 0.05;
            camera.lookAt(0, 0, 0);

            // 3. Update Visual Effects (Snow, Dust)
            
            // Snow
            if (snowParticles) {
                const positions = snowParticles.geometry.attributes.position.array;
                const vels = snowParticles.userData.velocities;
                for (let i=0; i<vels.length; i++) {
                    const i3 = i*3;
                    positions[i3+1] -= vels[i]; // Fall down
                    // Reset if too low
                    if (positions[i3+1] < -20) {
                        positions[i3+1] = 40;
                        positions[i3] = (Math.random() - 0.5) * 80;
                        positions[i3+2] = (Math.random() - 0.5) * 80;
                    }
                }
                snowParticles.geometry.attributes.position.needsUpdate = true;
            }
            
            // Magic Dust (Rotate)
            if (magicDust) {
                magicDust.rotation.y = time * 0.05;
            }

            // 4. Particle Animation & Twinkle
            
            // A. Update Lights (Twinkle Effect)
            // 无论是合拢还是散开，灯光都会闪烁
            twinkleLights.forEach(p => {
                // 使用正弦波控制发光强度：基准 1.0 + 波动 1.0 = 范围 [0, 2.0]
                const intensity = 1.0 + Math.sin(time * p.blinkSpeed + p.blinkOffset) * 1.0;
                // 保证最低亮度不为0，避免完全黑掉
                p.mesh.material.emissiveIntensity = Math.max(0.2, intensity);
            });

            // B. Move Particles
            particles.forEach(p => {
                let target;

                if (currentState === STATE.TREE) {
                    target = p.treePos;
                } else if (currentState === STATE.EXPLODE) {
                    target = p.explodePos;
                } else if (currentState === STATE.FOCUS) {
                    target = p.explodePos; 
                    
                    if (p.focusOffset) {
                        const camDir = camera.position.clone().normalize();
                        const targetPos = camDir.multiplyScalar(10);
                        p.mesh.position.lerp(targetPos, 0.1);
                        p.mesh.quaternion.copy(camera.quaternion);
                        return; // Skip standard update
                    }
                }

                const wobble = Math.sin(time * 2 + p.wobbleOffset) * 0.5;
                const finalTarget = target.clone();
                if (currentState !== STATE.TREE) {
                    finalTarget.y += wobble;
                }

                // Move mesh
                p.mesh.position.lerp(finalTarget, 0.04);
                
                // Rotation
                if (!p.isPhoto) {
                    // 装饰物缓慢自转
                    p.mesh.rotation.x += 0.01;
                    p.mesh.rotation.y += 0.01;
                } else if (currentState === STATE.TREE) {
                    p.mesh.lookAt(new THREE.Vector3(p.mesh.position.x * 2, p.mesh.position.y, p.mesh.position.z * 2));
                } else {
                    p.mesh.quaternion.copy(camera.quaternion);
                }
            });

            // 普通渲染
            renderer.render(scene, camera);
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        // Start
        init();

    </script>
</body>
</html>
```

@tab 适配手机端（双端兼顾）

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>MemorySpark PProMax｜ai.bornforthis.cn AI实验室</title>
    <link rel="icon" href="https://bornforthis.cn/favicon.ico">
    <style>
        body {
            margin: 0;
            overflow: hidden;
            background-color: #050510; /* 深蓝夜空色 */
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #fff;
            -webkit-tap-highlight-color: transparent; /* 移除移动端点击高亮 */
        }

        #canvas-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background: radial-gradient(circle at center, #1a1a2e 0%, #000000 100%); /* 渐变背景 */
        }

        /* UI Overlay */
        #ui-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
            pointer-events: none; /* Let clicks pass through to canvas if needed */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 20px;
            box-sizing: border-box;
        }

        .header {
            text-align: left;
            text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
            pointer-events: none;
            z-index: 12;
        }

        h1 {
            margin: 0;
            font-weight: 300;
            color: #FFD700; /* Gold */
            letter-spacing: 2px;
            font-size: 24px;
        }

        p.subtitle {
            margin: 5px 0 0 0;
            color: #aaa;
            font-size: 14px;
        }

        /* Status & Instructions & Buttons Container */
        .status-panel {
            position: absolute;
            top: 20px;
            right: 20px;
            text-align: right;
            display: flex;
            flex-direction: column;
            align-items: flex-end; /* Right align everything */
            gap: 12px;
            z-index: 20;
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
        }

        .status-tag {
            display: inline-block;
            padding: 8px 16px;
            background: rgba(20, 30, 20, 0.8);
            border: 1px solid #FFD700;
            border-radius: 20px;
            color: #FFD700;
            font-weight: bold;
            font-size: 14px;
            transition: all 0.3s ease;
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
        }

        .instructions {
            background: rgba(0, 0, 0, 0.6);
            padding: 15px;
            border-radius: 8px; /* Slightly squarer for tech feel */
            font-size: 12px;
            color: #ddd;
            width: 200px; /* Fixed width for alignment */
            pointer-events: auto;
            backdrop-filter: blur(10px);
            border-left: 2px solid #C41E3A; /* Red accent */
            border-right: 1px solid rgba(255, 255, 255, 0.1);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .instruction-item {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            justify-content: space-between; /* Space out icon and text */
        }
        
        .icon { font-size: 16px; width: 20px; text-align: center;}

        /* Upload Buttons - New Elegant Style */
        .upload-container {
            pointer-events: auto;
            display: flex;
            flex-direction: column;
            gap: 8px;
            align-items: flex-end;
            margin-top: 5px;
            width: 220px; /* Give it a bit more width for the dropdown */
        }

        .btn {
            background: rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(255, 215, 0, 0.5); /* Subtle Gold Border */
            color: #FFD700;
            padding: 8px 20px;
            border-radius: 4px; /* Minimalist radius */
            cursor: pointer;
            font-size: 12px;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            backdrop-filter: blur(5px);
            width: 100%; /* Match width */
            text-align: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            box-sizing: border-box; /* Ensure padding doesn't increase width */
        }

        .btn:hover {
            background: rgba(255, 215, 0, 0.15);
            border-color: #FFD700;
            box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
            transform: translateX(-5px); /* Subtle slide left */
        }

        .btn.active {
            background: rgba(255, 215, 0, 0.2);
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.4);
            border-color: #FFD700;
        }

        /* Group music buttons slightly */
        .music-group {
            display: flex;
            gap: 5px;
            width: 100%;
        }
        
        .music-group .btn {
            flex: 1; /* Split space */
            padding: 8px 5px; /* Smaller padding */
        }
        
        #music-btn {
            flex: 0 0 40%; /* Play button takes less space */
        }
        
        #playlist-select {
            flex: 1;
            appearance: none; /* Remove default arrow */
            -webkit-appearance: none;
            text-align: left;
            text-align-last: center;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FFD700' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 8px center;
            background-size: 12px;
            padding-right: 25px; /* Space for arrow */
            padding-left: 10px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #FFD700;
        }
        
        #playlist-select option {
            background: #222;
            color: #FFD700;
            padding: 5px;
        }

        /* Differentiate clear button slightly */
        #clear-btn {
            border-color: rgba(255, 255, 255, 0.3);
            color: #aaa;
        }
        
        #clear-btn:hover {
            border-color: #fff;
            color: #fff;
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }

        #file-input { display: none; }
        #music-input { display: none; }

        /* Webcam feedback (hidden but processed) */
        #video-feed {
            position: absolute;
            bottom: 20px;
            left: 20px;
            width: 160px;
            height: 120px;
            border-radius: 10px;
            transform: scaleX(-1); /* Mirror */
            border: 2px solid #FFD700;
            opacity: 0.7;
            z-index: 20;
            object-fit: cover;
            display: block; /* Required for MediaPipe */
            pointer-events: none; /* 让视频不阻挡点击 */
        }

        /* Loading Screen */
        #loading {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            z-index: 100;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #FFD700;
            transition: opacity 0.5s;
        }

        .loader {
            border: 4px solid #333;
            border-top: 4px solid #FFD700;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin-bottom: 15px;
        }

        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

        /* --- 移动端适配逻辑 --- */

        /* 移动端菜单切换按钮 (默认隐藏，仅在移动端显示) */
        #mobile-menu-toggle {
            display: none;
            position: absolute;
            top: 20px;
            right: 20px;
            width: 44px;
            height: 44px;
            background: rgba(0, 0, 0, 0.6);
            border: 1px solid #FFD700;
            border-radius: 50%;
            z-index: 30;
            cursor: pointer;
            pointer-events: auto;
            justify-content: center;
            align-items: center;
            color: #FFD700;
            font-size: 20px;
            backdrop-filter: blur(5px);
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
        }

        /* 移动端样式 (手机竖屏) */
        @media (max-width: 768px) {
            /* 调整标题位置，避免被按钮遮挡 */
            .header {
                max-width: 70%;
            }
            .header h1 {
                font-size: 18px;
            }
            .header p.subtitle {
                font-size: 12px;
            }

            /* 显示汉堡菜单按钮 */
            #mobile-menu-toggle {
                display: flex;
            }

            /* 隐藏/折叠菜单栏 */
            .status-panel {
                /* 默认移出屏幕 */
                transform: translateX(120%);
                top: 0;
                right: 0;
                height: 100%; /* 全高背景 */
                background: rgba(0, 0, 0, 0.85); /* 深色背景便于阅读 */
                padding: 80px 20px 20px 20px; /* 顶部留出按钮空间 */
                box-shadow: -5px 0 20px rgba(0,0,0,0.5);
                border-left: 1px solid rgba(255, 215, 0, 0.2);
            }

            /* 当添加 .active 类时，滑入屏幕 */
            .status-panel.active {
                transform: translateX(0);
            }

            /* 调整视频预览位置，防止被全屏菜单遮挡 */
            #video-feed {
                width: 120px;
                height: 90px;
                bottom: 10px;
                left: 10px;
            }
        }

    </style>
    <!-- MediaPipe Hands Global Script (Fix for Module Error) -->
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/hands.js" crossorigin="anonymous"></script>

    <!-- Import Maps for Three.js and Addons -->
    <script type="importmap">
        {
            "imports": {
                "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
                "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"
            }
        }
    </script>
</head>
<body>

    <!-- Audio Element (Added crossorigin for recording) -->
    <audio id="bg-music" loop crossorigin="anonymous"></audio>

    <!-- Loading Screen -->
    <div id="loading">
        <div class="loader"></div>
        <div id="loading-text">正在初始化视觉引擎与AI模型...</div>
    </div>

    <!-- Video Element for MediaPipe (Visible for user feedback) -->
    <video id="video-feed" playsinline></video>

    <!-- UI Layer -->
    <div id="ui-layer">
        <div class="header">
            <h1>圣诞节🎄快乐！PPro Max｜Bornforthis AI实验室</h1>
            <p class="subtitle">https://ai.bornforthis.cn/</p>
        </div>

        <!-- 移动端菜单切换按钮 -->
        <div id="mobile-menu-toggle">
            ☰
        </div>

        <div class="status-panel" id="main-menu">
            <div id="mode-display" class="status-tag">等待手势...</div>
            
            <div class="instructions">
                <div class="instruction-item"><span>✊ 握拳</span> <span>聚合形态</span></div>
                <div class="instruction-item"><span>🖐 张开</span> <span>散开形态</span></div>
                <div class="instruction-item"><span>🤏 捏合</span> <span>特写照片</span></div>
                <div class="instruction-item"><span>👋 移动</span> <span>旋转视角</span></div>
            </div>

            <div class="upload-container">
                <button id="upload-btn" class="btn" onclick="document.getElementById('file-input').click()">
                    <span>📷</span> 上传照片
                </button>
                
                <!-- Music Controls -->
                <div class="music-group">
                    <button id="music-btn" class="btn" onclick="toggleMusic()">
                        <span>🔇</span>
                    </button>
                    <!-- 下拉选择框替代原来的“换音乐”按钮 -->
                    <select id="playlist-select" class="btn" onchange="handlePlaylistChange(this)">
                        <option disabled>-- 选择背景音乐 --</option>
                        <!-- Options will be populated by JS -->
                        <option value="custom">📂 自定义...</option>
                    </select>
                </div>

                <button id="clear-btn" class="btn" onclick="clearCachedPhotos()">
                    <span>🗑️</span> 清除照片
                </button>
                
                <input type="file" id="file-input" accept="image/*" multiple onchange="handlePhotoUpload(event)">
                <!-- 新增音乐文件输入框 -->
                <input type="file" id="music-input" accept="audio/*, .mp3, .m4a" onchange="handleMusicFileUpload(event)">
            </div>
        </div>
    </div>

    <!-- 3D Canvas -->
    <div id="canvas-container"></div>

    <!-- Main Logic -->
    <script type="module">
        import * as THREE from 'three';

        // --- Configuration & Constants ---
        const CONFIG = {
            colors: {
                green: 0x228B22,   // Forest Green (Brighter)
                gold: 0xFFD700,    // Metallic Gold
                red: 0xFF0000,     // Bright Red
                white: 0xFFFFFF,
                // 新增灯光颜色池
                lights: [0xFF0000, 0xFFFF00, 0x00BFFF, 0xFF69B4, 0xFFA500] 
            },
            particles: 1800,       // 稍微增加粒子数量到 1800，容纳更多装饰
            radius: 18,            // Base radius of tree bottom
            height: 35,            // Height of tree
            cacheKey: 'xmas_tree_photos_v1',
            cacheDuration: 7 * 24 * 60 * 60 * 1000, // 7 Days in ms
            musicCacheKey: 'xmas_music_pref_v3', // 更新版本号以适应新逻辑
            
            // 内置歌单
            playlist: [
                { name: "Last Christmas", url: "https://cdn.bornforthis.cn/mp3/LastChristmas(Single%20Version).m4a" },
                { name: "Jingle Bell Rock", url: "https://cdn.bornforthis.cn/mp3/JingleBellRock.m4a" },
                { name: "Santa Tell Me", url: "https://cdn.bornforthis.cn/mp3/SantaTellMe.m4a" },
                { name: "Feliz Navidad", url: "https://cdn.bornforthis.cn/mp3/FelizNavidad.m4a" },
                { name: "Santa Claus is Coming", url: "https://cdn.bornforthis.cn/mp3/SantaClausisComingtoTown.m4a" },
                { name: "Here Comes Santa Claus", url: "https://cdn.bornforthis.cn/mp3/HereComesSantaClaus.m4a" },
                { name: "Merry Christmas Mr Lawrence", url: "https://cdn.bornforthis.cn/mp3/MerryChristmasMrLawrence.m4a" },
                { name: "Christmas Time in My Town", url: "https://cdn.bornforthis.cn/mp3/ChristmasTimeinMyHomeTown.mp3" },
            ]
        };

        // --- Global Variables ---
        let scene, camera, renderer;
        let particles = []; // Array to store { mesh, treePos, explodePos, currentPos, speed }
        let photoMeshes = []; // Array specifically for user photos
        let twinkleLights = []; // 专门存储需要闪烁的灯光粒子
        
        // 新增的特效系统
        let snowParticles, magicDust;
        
        let time = 0;
        
        // Interaction State
        const STATE = {
            TREE: 'TREE',
            EXPLODE: 'EXPLODE',
            FOCUS: 'FOCUS'
        };
        let currentState = STATE.TREE;
        let targetState = STATE.TREE;
        
        // Hand Data
        let handPos = { x: 0, y: 0 }; // Normalized -1 to 1
        let isHandDetected = false;

        // Music State
        let isMusicPlaying = false;
        let currentMusicSource = CONFIG.playlist[0].url; // Default to first song

        // --- Initialization ---
        async function init() {
            // 1. Scene Setup
            const container = document.getElementById('canvas-container');
            scene = new THREE.Scene();
            // 移除纯色背景，因为我们在 CSS 里用了渐变，这里设为透明或保留雾效果
            scene.background = null; 
            // 增加一点雾气增加深邃感
            scene.fog = new THREE.FogExp2(0x050510, 0.01);

            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 0, 50);

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.outputColorSpace = THREE.SRGBColorSpace;
            container.appendChild(renderer.domElement);

            // 2. Lighting - 大幅增强光照
            // 2.1 强环境光，照亮所有阴影
            const ambientLight = new THREE.AmbientLight(0xffffff, 1.0); 
            scene.add(ambientLight);

            // 2.2 主平行光（模拟阳光），提供清晰的明暗关系
            const mainLight = new THREE.DirectionalLight(0xffffff, 2.0);
            mainLight.position.set(10, 20, 20);
            scene.add(mainLight);

            // 2.3 补光灯（金色），增加华丽感
            const pointLight = new THREE.PointLight(CONFIG.colors.gold, 1.5, 100);
            pointLight.position.set(0, 20, 10);
            scene.add(pointLight);
            
            // 2.4 氛围灯（红绿），增加节日气氛，但调高亮度
            const redLight = new THREE.PointLight(CONFIG.colors.red, 1.5, 50);
            redLight.position.set(15, 10, 15);
            scene.add(redLight);
            
            const greenLight = new THREE.PointLight(CONFIG.colors.green, 1.5, 50);
            greenLight.position.set(-15, -10, 15);
            scene.add(greenLight);

            // 3. Post Processing Removed

            // 4. Content Generation
            createParticles();
            createLightStrip(); // 新增：螺旋灯带
            createStar();
            createEnvironment(); // 新增：星空
            createSnow();        // 新增：雪花
            createMagicDust();   // 新增：魔法金粉
            
            // 5. Load Cached Photos & Music Preference
            loadCachedPhotos();
            initAudio(); // 初始化音频和下拉菜单

            // 6. Setup MediaPipe
            await setupMediaPipe();

            // 7. Events
            window.addEventListener('resize', onWindowResize);
            
            // --- Mobile Menu Event Logic ---
            setupMobileMenuInteractions();

            // 8. Start Loop
            document.getElementById('loading').style.opacity = '0';
            setTimeout(() => document.getElementById('loading').style.display = 'none', 500);
            animate();
        }

        // --- Mobile Menu Interaction Logic ---
        function setupMobileMenuInteractions() {
            const toggleBtn = document.getElementById('mobile-menu-toggle');
            const mainMenu = document.getElementById('main-menu');

            // 1. Toggle Button Click
            toggleBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // 阻止事件冒泡，防止触发 document 点击
                mainMenu.classList.toggle('active');
                
                // 更新图标
                if (mainMenu.classList.contains('active')) {
                    toggleBtn.innerHTML = '✕'; // 关闭图标
                } else {
                    toggleBtn.innerHTML = '☰'; // 菜单图标
                }
            });

            // 2. Click Inside Menu (Prevent closing)
            mainMenu.addEventListener('click', (e) => {
                // 点击菜单内部时不冒泡，防止触发 document 的关闭逻辑
                e.stopPropagation();
            });

            // 3. Click Outside (Document)
            document.addEventListener('click', () => {
                // 如果是移动端且菜单已打开
                if (window.innerWidth <= 768 && mainMenu.classList.contains('active')) {
                    mainMenu.classList.remove('active');
                    toggleBtn.innerHTML = '☰';
                }
            });
            
            // 4. Touch Start on Canvas (Better UX for mobile 3D interaction)
            // 当用户在 canvas 上开始滑动操作时，也应该关闭菜单
            const canvasContainer = document.getElementById('canvas-container');
            canvasContainer.addEventListener('touchstart', () => {
                if (window.innerWidth <= 768 && mainMenu.classList.contains('active')) {
                    mainMenu.classList.remove('active');
                    toggleBtn.innerHTML = '☰';
                }
            }, { passive: true });
        }

        // --- MediaPipe Logic ---
        async function setupMediaPipe() {
            const video = document.getElementById('video-feed');

            // Access Global Hands Class
            const hands = new window.Hands({locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
            }});

            hands.setOptions({
                maxNumHands: 1,
                modelComplexity: 1,
                minDetectionConfidence: 0.7,
                minTrackingConfidence: 0.6
            });

            hands.onResults(onHandsResults);

            // Access Webcam
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                video.srcObject = stream;
                await video.play();

                // Start processing loop specific to MediaPipe
                async function detectionLoop() {
                    if (video.currentTime > 0 && !video.paused && !video.ended) {
                        await hands.send({image: video});
                    }
                    requestAnimationFrame(detectionLoop);
                }
                detectionLoop();
            } catch (err) {
                console.error("Camera access denied or failed", err);
                document.getElementById('loading-text').innerText = "未检测到摄像头，请检查权限。应用将自动运行演示模式。";
                setTimeout(() => {
                    document.getElementById('loading').style.display = 'none';
                    // Auto demo mode logic could go here
                }, 2000);
            }
        }

        function onHandsResults(results) {
            const modeDisplay = document.getElementById('mode-display');
            
            if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                isHandDetected = true;
                const landmarks = results.multiHandLandmarks[0];

                // 1. Calculate Hand Center (for rotation)
                // Wrist is 0, Middle Finger MCP is 9
                const cx = landmarks[9].x;
                const cy = landmarks[9].y;
                handPos.x = (cx - 0.5) * 2; // -1 to 1
                handPos.y = (cy - 0.5) * 2;

                // 2. Gesture Recognition
                const state = detectGesture(landmarks);
                
                if (state) {
                    targetState = state;
                    
                    // UI Update
                    let text = "未知";
                    let bg = "#333";
                    if (state === STATE.TREE) { text = "🌲 聚合形态"; bg = CONFIG.colors.green; }
                    if (state === STATE.EXPLODE) { text = "✨ 散开形态"; bg = "#444"; }
                    if (state === STATE.FOCUS) { text = "📷 聚焦照片"; bg = CONFIG.colors.red; }
                    
                    modeDisplay.innerText = text;
                    modeDisplay.style.borderColor = (state === STATE.FOCUS) ? '#fff' : CONFIG.colors.gold;
                }

            } else {
                isHandDetected = false;
            }
        }

        function detectGesture(lm) {
            const dist = (i, j) => Math.sqrt(Math.pow(lm[i].x - lm[j].x, 2) + Math.pow(lm[i].y - lm[j].y, 2));
            const wrist = 0;
            const tips = [8, 12, 16, 20];
            const pips = [6, 10, 14, 18];
            
            // Check Fingers Extended
            let extendedCount = 0;
            if (dist(4, 17) > 0.2) extendedCount++; // Rough thumb check

            for (let k=0; k<4; k++) {
                if (dist(wrist, tips[k]) > dist(wrist, pips[k]) * 1.2) {
                    extendedCount++;
                }
            }

            // Pinch Detection (Thumb 4 and Index 8)
            const pinchDist = dist(4, 8);

            if (pinchDist < 0.08) {
                return STATE.FOCUS;
            } else if (extendedCount >= 4) {
                return STATE.EXPLODE;
            } else if (extendedCount <= 1) {
                return STATE.TREE;
            }
            
            return null; 
        }

        // --- Audio Logic ---
        
        function initAudio() {
            // 1. Populate Dropdown
            const select = document.getElementById('playlist-select');
            
            // Insert Built-in options BEFORE the "Custom" option
            CONFIG.playlist.forEach(song => {
                const option = document.createElement('option');
                option.value = song.url;
                option.innerText = `🎵 ${song.name}`;
                // Insert before the last option (which is Custom)
                select.insertBefore(option, select.lastElementChild);
            });

            // 2. Error Handling & Fallback
            const audio = document.getElementById('bg-music');
            
            // Critical fix for "The element has no supported sources"
            audio.addEventListener('error', function(e) {
                console.warn("Audio load error:", e);
                const src = audio.src;
                // If it failed and we had crossorigin set, try removing it (fallback mode)
                // This means audio won't be recordable via WebAudio, but at least it plays.
                if (audio.crossOrigin === 'anonymous') {
                    console.log("Attempting fallback: Removing crossorigin attribute...");
                    audio.removeAttribute('crossorigin');
                    audio.src = src; // Retry
                    audio.load();
                    if (isMusicPlaying) audio.play().catch(err => console.log("Fallback play error:", err));
                }
            }, true); // Capture phase

            // 3. Load Preferences
            try {
                const raw = localStorage.getItem(CONFIG.musicCacheKey);
                if (raw) {
                    const cache = JSON.parse(raw);
                    const now = Date.now();
                    
                    if (now - cache.timestamp <= CONFIG.cacheDuration) {
                        // 恢复音乐源
                        if (cache.customSrc) {
                            currentMusicSource = cache.customSrc;
                        }

                        // 恢复播放状态
                        if (cache.enabled) {
                            isMusicPlaying = true;
                            // Play will be called below
                        }
                    }
                }
            } catch (e) {
                console.error("Error loading music preference", e);
            }

            // 4. Apply Source
            audio.src = currentMusicSource;
            
            // 5. Sync Dropdown Value
            // Check if current source is in playlist
            const inPlaylist = CONFIG.playlist.find(p => p.url === currentMusicSource);
            if (inPlaylist) {
                select.value = currentMusicSource;
            } else {
                // If not in playlist, it stays default or handled by custom
            }

            // 6. Play if needed
            updateMusicUI(isMusicPlaying);
            if (isMusicPlaying) {
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log("Auto-play blocked or source invalid:", error);
                        // Don't turn off isMusicPlaying immediately if it's just blocking;
                        // But if it's a source error, the 'error' listener handles it.
                        // If it's policy block, we update UI
                        if (error.name === 'NotAllowedError') {
                             isMusicPlaying = false;
                             updateMusicUI(false);
                        }
                    });
                }
            }
        }

        // 处理下拉菜单变化
        window.handlePlaylistChange = function(selectElem) {
            const value = selectElem.value;
            
            if (value === 'custom') {
                // 用户选择“自定义”
                handleCustomMusicClick();
                // 暂时把选中的值重置回之前的（或者保持 Custom），等待用户完成上传
                // 实际上 handleCustomMusicClick 会更新源
            } else {
                // 用户选择了内置歌曲
                changeMusicSource(value, 'builtin');
            }
        };

        window.handleCustomMusicClick = function() {
            const url = prompt("请输入背景音乐链接 (MP3/M4A)\n或者点击 [取消] 上传本地文件:");
            
            if (url) {
                changeMusicSource(url.trim(), 'link');
            } else if (url === "") {
                // Cancelled or empty
                // Revert selection if possible?
            } else {
                // Clicked Cancel -> File Upload
                document.getElementById('music-input').click();
            }
        };

        window.handleMusicFileUpload = function(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(e) {
                const result = e.target.result;
                const canCache = result.length < 4 * 1024 * 1024; 
                changeMusicSource(result, 'file', canCache);
                if (!canCache) {
                    alert("音乐文件较大，仅在本次访问播放，不会缓存到本地。");
                }
            };
            reader.readAsDataURL(file);
            event.target.value = ''; 
        };

        function changeMusicSource(src, type, shouldCache = true) {
            const audio = document.getElementById('bg-music');
            currentMusicSource = src;
            
            // Reset crossorigin if it was removed by fallback previously, to try recording again if possible
            if (!audio.hasAttribute('crossorigin') && type !== 'file') { // Local files don't need CORS
                 audio.setAttribute('crossorigin', 'anonymous');
            }
            
            audio.src = src;
            
            // Auto play
            isMusicPlaying = true;
            audio.play().catch(e => console.log("Play interrupted or failed:", e));
            updateMusicUI(true);
            
            // Update Dropdown UI to reflect change
            const select = document.getElementById('playlist-select');
            // If it's a built-in type, select matches src
            if (type === 'builtin') {
                 select.value = src;
            }
            
            // Save
            saveMusicPreference(true, shouldCache ? src : null);
        }

        window.toggleMusic = function() {
            const audio = document.getElementById('bg-music');
            isMusicPlaying = !isMusicPlaying;
            
            if (isMusicPlaying) {
                audio.play().catch(e => {
                    console.log("Play failed in toggle:", e);
                    // Revert UI if play fails hard
                    isMusicPlaying = false;
                    updateMusicUI(false);
                });
            } else {
                audio.pause();
            }
            
            updateMusicUI(isMusicPlaying);
            // Save state (keep existing src)
            saveMusicPreference(isMusicPlaying, null, true); 
        };

        function updateMusicUI(isPlaying) {
            const btn = document.getElementById('music-btn');
            if (isPlaying) {
                btn.innerHTML = '<span>🔊</span>';
                btn.classList.add('active');
            } else {
                btn.innerHTML = '<span>🔇</span>';
                btn.classList.remove('active');
            }
        }

        // srcData: 如果不为 null，则更新 customSrc；如果为 null 且 updateOnlyState=false，则清除 customSrc
        // updateOnlyState: 如果为 true，只更新开关状态，不碰 source
        function saveMusicPreference(isEnabled, srcData = null, updateOnlyState = false) {
            try {
                let dataToSave = {
                    timestamp: Date.now(),
                    enabled: isEnabled,
                    customSrc: null
                };

                if (updateOnlyState) {
                    const oldRaw = localStorage.getItem(CONFIG.musicCacheKey);
                    if (oldRaw) {
                        const old = JSON.parse(oldRaw);
                        dataToSave.customSrc = old.customSrc;
                    }
                } else {
                    dataToSave.customSrc = srcData;
                }

                localStorage.setItem(CONFIG.musicCacheKey, JSON.stringify(dataToSave));
            } catch (e) {
                console.warn("Failed to save music preference", e);
                // Fallback: save disabled state without source
                try {
                     const fallbackData = {
                        timestamp: Date.now(),
                        enabled: isEnabled,
                        customSrc: null 
                    };
                    localStorage.setItem(CONFIG.musicCacheKey, JSON.stringify(fallbackData));
                } catch(e2) {}
            }
        }

        // --- Visual Effects Creation ---

        function createEnvironment() {
            // Stars
            const starsGeo = new THREE.BufferGeometry();
            const starsCount = 2000;
            const posArray = new Float32Array(starsCount * 3);
            
            for(let i=0; i<starsCount*3; i++) {
                // Distant stars
                posArray[i] = (Math.random() - 0.5) * 400; 
            }
            
            starsGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            
            const starsMat = new THREE.PointsMaterial({
                size: 0.5,
                color: 0xffffff,
                transparent: true,
                opacity: 0.8
            });
            
            const starField = new THREE.Points(starsGeo, starsMat);
            scene.add(starField);
        }

        // --- 动态生成雪花纹理 ---
        function createSnowflakeTexture() {
            const canvas = document.createElement('canvas');
            canvas.width = 32;
            canvas.height = 32;
            const context = canvas.getContext('2d');

            // 绘制雪花形状 (六角星)
            context.strokeStyle = '#FFFFFF';
            context.lineWidth = 2;
            context.lineCap = 'round';
            
            context.translate(16, 16);
            for(let i = 0; i < 6; i++) {
                context.beginPath();
                context.moveTo(0, 0);
                context.lineTo(0, 14);
                context.stroke();
                
                // 小分叉
                context.beginPath();
                context.moveTo(0, 8);
                context.lineTo(4, 10);
                context.stroke();
                
                context.beginPath();
                context.moveTo(0, 8);
                context.lineTo(-4, 10);
                context.stroke();
                
                context.rotate(Math.PI / 3);
            }

            return new THREE.CanvasTexture(canvas);
        }

        function createSnow() {
            const snowGeo = new THREE.BufferGeometry();
            const snowCount = 500;
            const posArray = new Float32Array(snowCount * 3);
            const velArray = new Float32Array(snowCount); // Falling speed
            
            for(let i=0; i<snowCount; i++) {
                const i3 = i * 3;
                posArray[i3] = (Math.random() - 0.5) * 80; // x
                posArray[i3+1] = (Math.random() - 0.5) * 80 + 20; // y (start high)
                posArray[i3+2] = (Math.random() - 0.5) * 80; // z
                
                velArray[i] = 0.1 + Math.random() * 0.1; // speed
            }
            
            snowGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            
            // 使用生成的雪花纹理
            const snowTexture = createSnowflakeTexture();

            const snowMat = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 2.0, // 调大尺寸以显示图案
                map: snowTexture,
                transparent: true,
                opacity: 0.8,
                depthWrite: false, // 避免透明遮挡问题
                blending: THREE.AdditiveBlending 
            });
            
            snowParticles = new THREE.Points(snowGeo, snowMat);
            snowParticles.userData = { velocities: velArray };
            scene.add(snowParticles);
        }

        function createMagicDust() {
            const dustGeo = new THREE.BufferGeometry();
            const count = 300;
            const posArray = new Float32Array(count * 3);
            
            for(let i=0; i<count*3; i++) {
                posArray[i] = (Math.random() - 0.5) * 40; 
            }
            
            dustGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            
            const dustMat = new THREE.PointsMaterial({
                color: 0xFFD700, // Gold
                size: 0.3,
                transparent: true,
                opacity: 0.6,
                blending: THREE.AdditiveBlending
            });
            
            magicDust = new THREE.Points(dustGeo, dustMat);
            scene.add(magicDust);
        }

        // --- Particle System Logic ---

        // 移除旧的螺旋线逻辑，改用体积计算
        function getConeVolumePosition(h, maxR) {
            // h is 0 (bottom) to 1 (top)
            
            // 当前高度的圆锥截面半径
            const rAtHeight = maxR * (1 - h);
            
            // 随机分布在圆截面内，但更倾向于外表面以保持树的形状
            // 使用 Math.pow 调整分布：指数越小越均匀，指数越大越集中在边缘
            const r = rAtHeight * Math.pow(Math.random(), 0.4); 
            
            const angle = Math.random() * Math.PI * 2;
            
            const x = r * Math.cos(angle);
            const z = r * Math.sin(angle);
            
            // 将高度映射到实际坐标 y
            const y = -CONFIG.height/2 + h * CONFIG.height;
            
            return new THREE.Vector3(x, y, z);
        }

        // 新增：专门用于散开形态的球体分布算法 (圆形)
        function getExplodeSpherePosition(maxRadius) {
            // 球坐标随机分布
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            
            // 使用立方根确保在体积内均匀分布（不仅仅是表面，也不仅仅是核心）
            const r = maxRadius * Math.cbrt(Math.random()); 
            
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);
            
            return new THREE.Vector3(x, y, z);
        }

        // 新增：专门用于照片的均匀分布算法 (基于黄金角度螺旋)
        function getPhotoSurfacePosition(index) {
            const goldenRatio = 0.61803398875;
            const h = ((index * goldenRatio) % 0.7) + 0.15; 
            const angle = index * Math.PI * 2 * goldenRatio;
            const rBase = CONFIG.radius * (1 - h);
            const r = rBase + 2.5; 
            
            const x = r * Math.cos(angle);
            const z = r * Math.sin(angle);
            const y = -CONFIG.height/2 + h * CONFIG.height;
            
            return new THREE.Vector3(x, y, z);
        }

        // 新增：螺旋灯带生成函数
        function createLightStrip() {
            // 密度调整：增加数量，减小尺寸，使其看起来像连续的灯带
            const stripLightsCount = 800; // 从 160 增加到 800，极大提升密度
            const turns = 10; // 稍微增加圈数，让缠绕感更强
            const geometry = new THREE.SphereGeometry(0.12, 8, 8); // 尺寸减小到 0.12，更像精致的小灯珠
            
            const material = new THREE.MeshStandardMaterial({
                color: 0xFFFFE0, // Light Yellow
                emissive: 0xFFD700,
                emissiveIntensity: 1.5,
                roughness: 0.2,
                metalness: 0.5,
                toneMapped: false
            });

            for (let i = 0; i < stripLightsCount; i++) {
                // 0 (top) -> 1 (bottom)
                const t = i / stripLightsCount;
                
                // Spiral logic
                const angle = t * turns * Math.PI * 2;
                const heightRange = CONFIG.height;
                const y = (heightRange / 2) - (t * heightRange); // Top down
                
                // Radius expands as we go down
                // 稍微往里收一点点 (+1.0)，贴合树叶表面更紧密
                const r = (t * CONFIG.radius) + 1.0; 
                
                const x = r * Math.cos(angle);
                const z = r * Math.sin(angle);
                
                const treePos = new THREE.Vector3(x, y, z);
                const explodePos = getExplodeSpherePosition(35);
                
                const mesh = new THREE.Mesh(geometry, material.clone()); 
                
                mesh.position.copy(treePos);
                scene.add(mesh);
                
                const pData = {
                    mesh: mesh,
                    treePos: treePos,
                    explodePos: explodePos,
                    velocity: new THREE.Vector3(),
                    wobbleOffset: Math.random() * 100,
                    isLight: true,
                    // 灯带特有的跑马灯闪烁效果
                    blinkSpeed: 2.0, // 稍微加快流动速度
                    blinkOffset: i * 0.05 // 调整相位偏移，因为粒子变多了，间隔要变小才能保持流动感
                };
                
                particles.push(pData);
                twinkleLights.push(pData);
            }
        }

        function createParticles() {
            // 1. 基础几何体
            const geometrySphere = new THREE.SphereGeometry(0.4, 16, 16); 
            const geometryCube = new THREE.BoxGeometry(0.8, 0.8, 0.8); // 树叶
            const geometryTetra = new THREE.TetrahedronGeometry(0.6); // 树叶
            const geometrySmallBox = new THREE.BoxGeometry(0.5, 0.5, 0.5); // 礼物盒
            const geometryCylinder = new THREE.CylinderGeometry(0.1, 0.1, 1.5, 8); // 糖果棒
            const geometryLight = new THREE.SphereGeometry(0.25, 16, 16); // 灯泡

            // 2. 基础材质
            const matGold = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.gold, roughness: 0.2, metalness: 0.8, emissive: 0x443300 
            });
            const matRed = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.red, roughness: 0.3, metalness: 0.3, emissive: 0x220000
            });
            const matGreen = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.green, roughness: 0.8, metalness: 0.0 
            });
            const matWhite = new THREE.MeshStandardMaterial({
                color: 0xFFFFFF, roughness: 0.2, metalness: 0.1
            });

            for (let i = 0; i < CONFIG.particles; i++) {
                let mesh;
                let isLight = false;
                let blinkSpeed = 0;
                let blinkOffset = 0;

                const type = Math.random();
                
                // --- 粒子类型分布 ---
                // 60% 树叶 (Cube/Tetrahedron)
                // 15% 装饰球 (Sphere)
                // 10% 特殊挂件 (糖果/礼物)
                // 15% 闪烁灯光 (Light)

                if (type < 0.6) {
                    // 树叶
                    const isCube = Math.random() > 0.5;
                    mesh = new THREE.Mesh(isCube ? geometryCube : geometryTetra, matGreen);
                    mesh.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, Math.random()*Math.PI);
                
                } else if (type < 0.75) {
                    // 装饰球 (金/红)
                    mesh = new THREE.Mesh(geometrySphere, Math.random() > 0.5 ? matGold : matRed);
                    mesh.scale.setScalar(1.2 + Math.random() * 0.5);
                
                } else if (type < 0.85) {
                    // 特殊挂件
                    if (Math.random() > 0.5) {
                        // 糖果棒 (红白长条)
                        mesh = new THREE.Mesh(geometryCylinder, matRed);
                        mesh.rotation.z = Math.PI / 4; // 斜着放
                    } else {
                        // 礼物盒 (金色/白色)
                        mesh = new THREE.Mesh(geometrySmallBox, Math.random() > 0.5 ? matGold : matWhite);
                        mesh.rotation.y = Math.random();
                    }
                
                } else {
                    // 💡 闪烁灯光 💡
                    isLight = true;
                    // 随机选一个颜色
                    const colorHex = CONFIG.colors.lights[Math.floor(Math.random() * CONFIG.colors.lights.length)];
                    const lightMat = new THREE.MeshStandardMaterial({
                        color: colorHex,
                        emissive: colorHex,
                        emissiveIntensity: 2.0, // 初始亮度高一点
                        roughness: 0.1,
                        metalness: 0.0,
                        toneMapped: false // 让它看起来更亮，不被压暗
                    });
                    
                    mesh = new THREE.Mesh(geometryLight, lightMat);
                    blinkSpeed = 2 + Math.random() * 3; // 闪烁速度
                    blinkOffset = Math.random() * Math.PI * 2; // 随机相位，避免同时闪
                }

                // Tree Position (Target) - 使用体积算法
                // 灯光和挂件稍微往外放一点 (pow 0.3 而不是 0.4)
                const h = Math.random(); 
                const treePos = getConeVolumePosition(h, CONFIG.radius);
                
                if (isLight || type >= 0.6) {
                    // 把装饰物稍微往外推，防止被树叶埋没
                    const center = new THREE.Vector3(0, treePos.y, 0);
                    const dir = new THREE.Vector3().subVectors(treePos, center).normalize();
                    treePos.add(dir.multiplyScalar(0.8));
                }

                // Explode Position (Target)
                const explodePos = getExplodeSpherePosition(35);

                // Initial Pos
                mesh.position.copy(treePos);
                
                scene.add(mesh);

                const pData = {
                    mesh: mesh,
                    treePos: treePos,
                    explodePos: explodePos,
                    velocity: new THREE.Vector3(),
                    wobbleOffset: Math.random() * 100,
                    isLight: isLight,
                    blinkSpeed: blinkSpeed,
                    blinkOffset: blinkOffset
                };

                particles.push(pData);
                if (isLight) twinkleLights.push(pData);
            }
        }

        function createStar() {
            // Simple Star on top
            const geometry = new THREE.OctahedronGeometry(1.5, 0);
            const material = new THREE.MeshStandardMaterial({
                color: 0xFFFF00, // Bright Yellow
                emissive: 0xFFD700,
                emissiveIntensity: 2, // 提高星星亮度
                roughness: 0.2,
                metalness: 0.8,
                toneMapped: false
            });
            const star = new THREE.Mesh(geometry, material);
            star.position.set(0, CONFIG.height/2 + 2, 0);
            
            // Star is just a special particle
            scene.add(star);
            particles.push({
                mesh: star,
                treePos: new THREE.Vector3(0, CONFIG.height/2 + 2, 0),
                explodePos: new THREE.Vector3(0, 10, 0),
                wobbleOffset: 0
            });
        }

        // --- Photo Upload & Cache Logic ---

        // 清除现有的照片（从场景和内存中）
        window.clearCachedPhotos = function() {
            // 1. Remove from scene and memory
            // We iterate backwards to remove safely
            for (let i = particles.length - 1; i >= 0; i--) {
                if (particles[i].isPhoto) {
                    scene.remove(particles[i].mesh);
                    if (particles[i].mesh.material.map) {
                        particles[i].mesh.material.map.dispose();
                    }
                    particles[i].mesh.material.dispose();
                    particles[i].mesh.geometry.dispose();
                    particles.splice(i, 1);
                }
            }
            photoMeshes = [];

            // 2. Clear LocalStorage
            try {
                localStorage.removeItem(CONFIG.cacheKey);
                console.log("Cache cleared");
            } catch (e) {
                console.error("Failed to clear cache", e);
            }
        };

        // 处理用户上传
        window.handlePhotoUpload = async function(event) {
            const files = event.target.files;
            if (!files.length) return;

            // 覆盖模式：上传新照片前清除旧的
            window.clearCachedPhotos();

            const imagePromises = Array.from(files).map(processFileToDataURL);
            
            try {
                // 等待所有图片处理完成（压缩 + 转Base64）
                const base64Images = await Promise.all(imagePromises);
                
                // 创建 Mesh
                base64Images.forEach(imgData => {
                    const img = new Image();
                    img.src = imgData;
                    img.onload = () => createPhotoMesh(img);
                });

                // 保存到缓存
                saveToCache(base64Images);

            } catch (err) {
                console.error("Error processing images:", err);
                alert("图片处理失败，请重试");
            }

            // 重置 input 以便允许重复上传相同文件
            event.target.value = '';
        };

        // 将文件读取并压缩为 Base64
        function processFileToDataURL(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const img = new Image();
                    img.src = e.target.result;
                    img.onload = () => {
                        // 创建 Canvas 进行压缩
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        
                        // 最大尺寸限制 (避免 localStorage 爆满)
                        const MAX_SIZE = 800; 
                        let width = img.width;
                        let height = img.height;

                        if (width > height) {
                            if (width > MAX_SIZE) {
                                height *= MAX_SIZE / width;
                                width = MAX_SIZE;
                            }
                        } else {
                            if (height > MAX_SIZE) {
                                width *= MAX_SIZE / height;
                                height = MAX_SIZE;
                            }
                        }

                        canvas.width = width;
                        canvas.height = height;
                        ctx.drawImage(img, 0, 0, width, height);

                        // 转换为 JPEG Base64 (0.8 质量)
                        const dataURL = canvas.toDataURL('image/jpeg', 0.8);
                        resolve(dataURL);
                    };
                    img.onerror = reject;
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        }

        // 保存到 LocalStorage
        function saveToCache(imagesData) {
            const cacheData = {
                timestamp: Date.now(),
                images: imagesData
            };
            try {
                localStorage.setItem(CONFIG.cacheKey, JSON.stringify(cacheData));
            } catch (e) {
                console.warn("Storage quota exceeded or error", e);
                alert("照片过多或过大，部分缓存可能失败");
            }
        }

        // 加载缓存
        function loadCachedPhotos() {
            try {
                const raw = localStorage.getItem(CONFIG.cacheKey);
                if (!raw) return;

                const cache = JSON.parse(raw);
                const now = Date.now();

                // 检查有效期 (7天)
                if (now - cache.timestamp > CONFIG.cacheDuration) {
                    console.log("Cache expired, clearing...");
                    localStorage.removeItem(CONFIG.cacheKey);
                    return;
                }

                if (cache.images && Array.isArray(cache.images)) {
                    console.log(`Loading ${cache.images.length} photos from cache...`);
                    cache.images.forEach(imgData => {
                        const img = new Image();
                        img.src = imgData;
                        img.onload = () => createPhotoMesh(img);
                    });
                }
            } catch (e) {
                console.error("Failed to load cache", e);
            }
        }

        function createPhotoMesh(image) {
            const texture = new THREE.Texture(image);
            texture.needsUpdate = true;
            texture.colorSpace = THREE.SRGBColorSpace;

            // Maintain aspect ratio
            const aspect = image.width / image.height;
            const w = 4;
            const h = 4 / aspect;

            const geometry = new THREE.PlaneGeometry(w, h);
            // Use BasicMaterial for photos so they are always fully bright and not affected by shadows
            const material = new THREE.MeshBasicMaterial({ 
                map: texture, 
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 1.0 
            });

            const mesh = new THREE.Mesh(geometry, material);
            
            // Add a border (gold frame)
            const frameGeo = new THREE.BoxGeometry(w + 0.2, h + 0.2, 0.1);
            const frameMat = new THREE.MeshStandardMaterial({ 
                color: CONFIG.colors.gold, 
                metalness: 0.8, 
                roughness: 0.2,
                emissive: 0x332200
            });
            const frame = new THREE.Mesh(frameGeo, frameMat);
            frame.position.z = -0.06;
            mesh.add(frame);

            // 修改位置计算逻辑：使用确定性的黄金螺旋算法
            // 传入当前照片的总数作为 index，确保每张新照片都有唯一且均匀的位置
            const index = photoMeshes.length;
            const treePos = getPhotoSurfacePosition(index);

            // Explode Position (Target) - 修改为球体分布
            const explodePos = getExplodeSpherePosition(35);

            mesh.position.copy(explodePos); // Start exploded if added later, or logic will fix it
            scene.add(mesh);

            photoMeshes.push({
                mesh: mesh,
                treePos: treePos,
                explodePos: explodePos,
                wobbleOffset: Math.random() * 100,
                isPhoto: true
            });
            
            // Add to main particles array for movement management
            particles.push(photoMeshes[photoMeshes.length-1]);
        }

        // --- Animation Loop ---
        function animate() {
            requestAnimationFrame(animate);
            time += 0.01;

            // 1. Smooth State Transition
            if (currentState !== targetState) {
                currentState = targetState;
                
                // If entering focus mode, pick a random photo to bring forward if any exist
                if (currentState === STATE.FOCUS && photoMeshes.length > 0) {
                     // Reset all photos first
                     photoMeshes.forEach(p => p.focusOffset = null);
                     // Pick one
                     const luckyPhoto = photoMeshes[Math.floor(Math.random() * photoMeshes.length)];
                     luckyPhoto.focusOffset = true;
                }
            }

            // 2. Camera Controls
            let camX = Math.sin(time * 0.2) * 50;
            let camZ = Math.cos(time * 0.2) * 50;
            let camY = 0;

            // Hand Influence
            if (currentState === STATE.EXPLODE && isHandDetected) {
                const angle = handPos.x * Math.PI; 
                camX = Math.sin(angle) * 60;
                camZ = Math.cos(angle) * 60;
                camY = handPos.y * 30;
            } else if (currentState === STATE.FOCUS) {
                camX *= 0.3;
                camZ *= 0.3;
            }

            camera.position.x += (camX - camera.position.x) * 0.05;
            camera.position.y += (camY - camera.position.y) * 0.05;
            camera.position.z += (camZ - camera.position.z) * 0.05;
            camera.lookAt(0, 0, 0);

            // 3. Update Visual Effects (Snow, Dust)
            
            // Snow
            if (snowParticles) {
                const positions = snowParticles.geometry.attributes.position.array;
                const vels = snowParticles.userData.velocities;
                for (let i=0; i<vels.length; i++) {
                    const i3 = i*3;
                    positions[i3+1] -= vels[i]; // Fall down
                    // Reset if too low
                    if (positions[i3+1] < -20) {
                        positions[i3+1] = 40;
                        positions[i3] = (Math.random() - 0.5) * 80;
                        positions[i3+2] = (Math.random() - 0.5) * 80;
                    }
                }
                snowParticles.geometry.attributes.position.needsUpdate = true;
            }
            
            // Magic Dust (Rotate)
            if (magicDust) {
                magicDust.rotation.y = time * 0.05;
            }

            // 4. Particle Animation & Twinkle
            
            // A. Update Lights (Twinkle Effect)
            // 无论是合拢还是散开，灯光都会闪烁
            twinkleLights.forEach(p => {
                // 使用正弦波控制发光强度：基准 1.0 + 波动 1.0 = 范围 [0, 2.0]
                const intensity = 1.0 + Math.sin(time * p.blinkSpeed + p.blinkOffset) * 1.0;
                // 保证最低亮度不为0，避免完全黑掉
                p.mesh.material.emissiveIntensity = Math.max(0.2, intensity);
            });

            // B. Move Particles
            particles.forEach(p => {
                let target;

                if (currentState === STATE.TREE) {
                    target = p.treePos;
                } else if (currentState === STATE.EXPLODE) {
                    target = p.explodePos;
                } else if (currentState === STATE.FOCUS) {
                    target = p.explodePos; 
                    
                    if (p.focusOffset) {
                        const camDir = camera.position.clone().normalize();
                        const targetPos = camDir.multiplyScalar(10);
                        p.mesh.position.lerp(targetPos, 0.1);
                        p.mesh.quaternion.copy(camera.quaternion);
                        return; // Skip standard update
                    }
                }

                const wobble = Math.sin(time * 2 + p.wobbleOffset) * 0.5;
                const finalTarget = target.clone();
                if (currentState !== STATE.TREE) {
                    finalTarget.y += wobble;
                }

                // Move mesh
                p.mesh.position.lerp(finalTarget, 0.04);
                
                // Rotation
                if (!p.isPhoto) {
                    // 装饰物缓慢自转
                    p.mesh.rotation.x += 0.01;
                    p.mesh.rotation.y += 0.01;
                } else if (currentState === STATE.TREE) {
                    p.mesh.lookAt(new THREE.Vector3(p.mesh.position.x * 2, p.mesh.position.y, p.mesh.position.z * 2));
                } else {
                    p.mesh.quaternion.copy(camera.quaternion);
                }
            });

            // 普通渲染
            renderer.render(scene, camera);
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        // Start
        init();

    </script>
</body>
</html>
```



:::

- [https://gemini.google.com/share/7518f4f9a6ac](https://gemini.google.com/share/7518f4f9a6ac)

















::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，招收学员面向国内外，国外占 80%。全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)

::: details .

[.](https://www.bilibili.com/video/BV1tE2rB5EWB/?share_source=copy_web&vd_source=13dbd886c44de9b1509d07863f93bff2)

:::