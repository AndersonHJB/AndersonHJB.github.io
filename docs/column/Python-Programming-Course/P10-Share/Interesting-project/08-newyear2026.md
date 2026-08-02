---
title: 08-2026 跨年烟花
icon: blog
date: 2025-12-31 15:00:07
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

## 版本 1

::: tabs

@tab base code

![2026](https://blog.images.bornforthis.cn/docs-images/sha256/df/df6df2822a01228a5d3a235ff38b3e80693a1c92ef5a5a3300284601170933f1.png)

```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2026 新年盛典|Bornforthis AI实验室</title>
    <!-- MediaPipe 库 -->
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/control_utils/control_utils.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js" crossorigin="anonymous"></script>

    <style>
        body { margin: 0; overflow: hidden; background-color: #020205; font-family: 'Segoe UI', sans-serif; }
        #canvas-container { width: 100vw; height: 100vh; }
        
        #ui-container {
            position: absolute; top: 20px; left: 20px; z-index: 10;
            color: white; background: rgba(10, 10, 15, 0.9);
            padding: 18px; border-radius: 12px; border-left: 4px solid #D4AF37;
            box-shadow: 0 10px 30px rgba(0,0,0,0.8);
            width: 260px; transition: opacity 0.5s ease; backdrop-filter: blur(8px);
        }

        h1 { margin: 0 0 12px 0; font-size: 1rem; color: #D4AF37; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; text-shadow: 0 0 10px rgba(212, 175, 55, 0.3); }
        
        .custom-file-upload {
            background: #1a1a1a; border: 1px solid #444; color: #D4AF37;
            display: block; text-align: center; padding: 12px;
            cursor: pointer; font-size: 0.85rem; font-weight: bold; border-radius: 6px;
            margin-bottom: 12px; transition: all 0.2s;
        }
        .custom-file-upload:hover { background: #D4AF37; color: #000; border-color: #D4AF37; box-shadow: 0 0 15px rgba(212, 175, 55, 0.4); }
        
        input[type="file"] { display: none; }

        #fullscreen-btn {
            position: absolute; top: 20px; right: 20px; z-index: 100;
            background: rgba(255, 255, 255, 0.1); color: white;
            border: 1px solid rgba(255, 255, 255, 0.2);
            width: 44px; height: 44px; border-radius: 8px;
            font-size: 1.2rem; cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            transition: all 0.2s;
        }
        #fullscreen-btn:hover { background: rgba(212, 175, 55, 0.2); border-color: #D4AF37; color: #D4AF37; }

        #camera-preview {
            position: absolute; bottom: 20px; left: 20px;
            width: 140px; height: 105px;
            border: 2px solid #333; border-radius: 6px;
            transform: scaleX(-1);
            z-index: 20; display: none;
            background: #000; box-shadow: 0 5px 15px rgba(0,0,0,0.5);
        }

        #status { margin-top: 10px; font-size: 0.75rem; color: #aaa; border-top: 1px solid #444; padding-top: 10px; }
        #gesture-icon { font-size: 2rem; position: absolute; top: 15px; right: 15px; filter: drop-shadow(0 0 5px rgba(255,255,255,0.3)); }
        
        .highlight { color: #D4AF37; font-weight: bold; }
    </style>
</head>
<body>

    <button id="fullscreen-btn" title="全屏模式">⛶</button>

    <div id="ui-container">
        <h1>2026 LUXURY GALA｜Bornforthis AI实验室</h1>
        <label for="file-upload" class="custom-file-upload">📂 上传照片 / Upload</label>
        <input id="file-upload" type="file" accept="image/*"/>
        
        <div style="font-size: 0.75rem; color: #ccc; line-height: 1.6;">
            1. 开启摄像头<br>
            2. 伸出 <span class="highlight">1-5</span> 指变数字<br>
            3. <span class="highlight">✊ 握拳</span> 触发新年祝福<br>
            <span style="color: #bbb; font-size: 0.7rem;">* 手势互动时将燃放烟花</span>
        </div>

        <div id="status">Waiting for image...</div>
        <div id="gesture-icon">✋</div>
    </div>

    <video id="input-video" style="display:none"></video>
    <canvas id="camera-preview"></canvas>
    <div id="canvas-container"></div>

    <script type="importmap">
        {
            "imports": {
                "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
                "three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
            }
        }
    </script>

    <script type="module">
        import * as THREE from 'three';
        import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

        // --- 主配置 ---
        const CONFIG = {
            sampleResolution: 220, 
            particleSize: 3.8,     
            imageGap: 3.5,         
            depthMultiplier: 80.0,
            morphSpeed: 0.07,
            
            // 3D 文字厚度配置 (解决平面感问题)
            textThickness: 50.0,  // 文字的厚度，数值越大越厚
            
            numberDepth: 220,      
            numberScale: 2.2,
            
            // --- 烟花配置 ---
            FW_SCALE: 9.0, 
            FW_SPEED_MULT: 0.9375 
        };

        // --- 高级烟花色板 (Luxury Palette) ---
        // 去除了荧光色，只保留金、银、红、深蓝
        const FIREWORK_PALETTE = [
            0xFFD700, // 纯金 Gold
            0xC0C0C0, // 银白 Silver
            0xB8860B, // 暗金 DarkGoldenRod
            0xCD5C5C, // 印度红 IndianRed (不刺眼)
            0x8B0000, // 深红 DarkRed
            0x4682B4, // 钢蓝 SteelBlue
            0x191970, // 午夜蓝 MidnightBlue
            0xF0E68C  // 卡其金 Khaki
        ];

        function getRandomFireworkColor() {
            return FIREWORK_PALETTE[Math.floor(Math.random() * FIREWORK_PALETTE.length)];
        }

        let scene, camera, renderer, controls, particles;
        let particleAttributes = { positions: null, targets: null, photoPositions: null, colors: null, newYearTargets: null };
        const numberCache = {}; 
        let isInitialized = false;
        let currentMode = 'PHOTO'; 
        let targetContent = 'PHOTO'; 
        
        const fireworks = [];
        let starSystem;

        // --- 全屏逻辑 ---
        const fsBtn = document.getElementById('fullscreen-btn');
        const uiContainer = document.getElementById('ui-container');
        const camPreview = document.getElementById('camera-preview');

        fsBtn.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(e => alert(e.message));
            } else {
                document.exitFullscreen();
            }
        });

        document.addEventListener('fullscreenchange', () => {
            if (document.fullscreenElement) {
                uiContainer.style.opacity = '0';
                uiContainer.style.pointerEvents = 'none';
                camPreview.style.opacity = '0';
                fsBtn.innerHTML = '❌';
            } else {
                uiContainer.style.opacity = '1';
                uiContainer.style.pointerEvents = 'auto';
                camPreview.style.opacity = '1';
                fsBtn.innerHTML = '⛶';
            }
        });

        // ==========================================
        // 1. 烟花与背景系统
        // ==========================================

        function getParticleTexture() {
            const canvas = document.createElement('canvas');
            canvas.width = 32; canvas.height = 32;
            const ctx = canvas.getContext('2d');
            const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
            gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
            gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 32, 32);
            const texture = new THREE.Texture(canvas);
            texture.needsUpdate = true;
            return texture;
        }
        const fireworkTexture = getParticleTexture();

        function createSharpCircleTexture() {
            const canvas = document.createElement('canvas');
            const size = 128; 
            canvas.width = size; canvas.height = size;
            const ctx = canvas.getContext('2d');
            const center = size / 2;
            const radius = size / 2 - 2; 
            ctx.beginPath();
            ctx.arc(center, center, radius, 0, Math.PI * 2);
            ctx.fillStyle = '#FFFFFF';
            ctx.fill();
            const texture = new THREE.Texture(canvas);
            texture.needsUpdate = true;
            return texture;
        }

        // --- 星空背景 ---
        function createStars() {
            const geometry = new THREE.BufferGeometry();
            const count = 3000;
            const positions = new Float32Array(count * 3);
            const sizes = new Float32Array(count);
            const starSpread = 4000; 

            for(let i=0; i<count; i++) {
                positions[i*3] = (Math.random()-0.5)*starSpread;
                positions[i*3+1] = (Math.random()-0.5)*starSpread;
                positions[i*3+2] = -1000 + (Math.random()-0.5)*1000; 
                sizes[i] = Math.random() * 4.0; 
            }
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
            const material = new THREE.PointsMaterial({
                color: 0xE0E0E0, // 稍微降低星空饱和度
                size: 2.0, 
                map: fireworkTexture, 
                transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false
            });
            const stars = new THREE.Points(geometry, material);
            scene.add(stars);
            return stars;
        }

        // --- 烟花类定义 ---
        class LinearFirework {
            constructor() {
                this.type = 'Linear';
                this.isExploded = false;
                this.isDead = false;
                
                const scale = CONFIG.FW_SCALE;
                const speedMult = CONFIG.FW_SPEED_MULT;
                
                this.x = (Math.random() - 0.5) * 1200; 
                this.y = -700; 
                this.z = -500 + (Math.random() - 0.5) * 200; 
                this.targetY = 400 + Math.random() * 500; 
                
                this.speed = (2.2 + Math.random() * 0.8) * scale * speedMult;
                
                this.launchGeo = new THREE.BufferGeometry();
                this.launchGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([this.x, this.y, this.z]), 3));
                this.launchMat = new THREE.PointsMaterial({
                    color: 0xD4AF37, // 发射时使用金色
                    size: 3.0 * scale, 
                    map: fireworkTexture, 
                    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false
                });
                this.launchMesh = new THREE.Points(this.launchGeo, this.launchMat);
                scene.add(this.launchMesh);

                this.trailParticles = [];
                
                // 颜色处理：从高级色板选色
                const baseColorHex = getRandomFireworkColor();
                this.color1 = new THREE.Color(baseColorHex);
                this.color2 = new THREE.Color(baseColorHex).offsetHSL(0.02, 0, -0.1); 
            }

            update() {
                if (!this.isExploded) {
                    this.y += this.speed;
                    this.speed *= 0.99; 
                    
                    const positions = this.launchGeo.attributes.position.array;
                    positions[1] = this.y;
                    this.launchGeo.attributes.position.needsUpdate = true;

                    if(Math.random() > 0.4) this.createTrailSpark();

                    if (this.speed < (0.1 * CONFIG.FW_SCALE * CONFIG.FW_SPEED_MULT) || this.y >= this.targetY) {
                        this.explode();
                    }
                } else {
                    this.updateExplosion();
                }

                for (let i = this.trailParticles.length - 1; i >= 0; i--) {
                    const p = this.trailParticles[i];
                    p.life -= 0.04;
                    p.mesh.position.y -= (0.1 * CONFIG.FW_SCALE);
                    p.material.opacity = p.life;
                    if (p.life <= 0) {
                        scene.remove(p.mesh);
                        p.geometry.dispose();
                        p.material.dispose();
                        this.trailParticles.splice(i, 1);
                    }
                }
            }

            createTrailSpark() {
                const geo = new THREE.BufferGeometry();
                geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([this.x, this.y, this.z]), 3));
                const mat = new THREE.PointsMaterial({
                    color: 0xcc9966, // 拖尾用淡古铜色
                    size: 2.0 * CONFIG.FW_SCALE, 
                    map: fireworkTexture,
                    transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false
                });
                const mesh = new THREE.Points(geo, mat);
                scene.add(mesh);
                this.trailParticles.push({ mesh, geometry: geo, material: mat, life: 1.0 });
            }

            explode() {
                this.isExploded = true;
                scene.remove(this.launchMesh);
                this.launchGeo.dispose();
                this.launchMat.dispose();

                const rayCount = 80 + Math.floor(Math.random() * 40);
                const particlesPerRay = 30;
                const totalParticles = rayCount * particlesPerRay;

                const positions = new Float32Array(totalParticles * 3);
                const colors = new Float32Array(totalParticles * 3);
                const velocities = new Float32Array(totalParticles * 3);
                this.frictions = new Float32Array(totalParticles);

                let idx = 0;
                const scale = CONFIG.FW_SCALE;
                const speedMult = CONFIG.FW_SPEED_MULT;

                for (let i = 0; i < rayCount; i++) {
                    const theta = Math.random() * Math.PI * 2;
                    const phi = Math.acos((Math.random() * 2) - 1);
                    const dirX = Math.sin(phi) * Math.cos(theta);
                    const dirY = Math.sin(phi) * Math.sin(theta);
                    const dirZ = Math.cos(phi);
                    
                    const power = (0.8 + Math.random() * 0.5) * 1.5 * scale * speedMult;

                    for (let j = 0; j < particlesPerRay; j++) {
                        positions[idx * 3] = this.x;
                        positions[idx * 3 + 1] = this.y;
                        positions[idx * 3 + 2] = this.z;

                        const colorMix = j / particlesPerRay;
                        const finalColor = this.color1.clone().lerp(this.color2, colorMix);
                        // 核心部分更亮白
                        if(j < 5) finalColor.lerp(new THREE.Color(0xffffff), 0.7);

                        colors[idx * 3] = finalColor.r;
                        colors[idx * 3 + 1] = finalColor.g;
                        colors[idx * 3 + 2] = finalColor.b;

                        const speedRatio = 1.0 - (j / particlesPerRay) * 0.6;
                        const jitter = 0.05;
                        velocities[idx * 3] = (dirX + (Math.random()-0.5)*jitter) * power * speedRatio;
                        velocities[idx * 3 + 1] = (dirY + (Math.random()-0.5)*jitter) * power * speedRatio;
                        velocities[idx * 3 + 2] = (dirZ + (Math.random()-0.5)*jitter) * power * speedRatio;

                        this.frictions[idx] = 0.95 + (1 - j/particlesPerRay) * 0.03; 
                        idx++;
                    }
                }

                const geometry = new THREE.BufferGeometry();
                geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
                this.explodeVelocities = velocities;
                
                const material = new THREE.PointsMaterial({
                    size: 1.5 * scale, 
                    map: fireworkTexture, vertexColors: true,
                    transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false
                });
                this.explodeMesh = new THREE.Points(geometry, material);
                scene.add(this.explodeMesh);
            }

            updateExplosion() {
                if (!this.explodeMesh) return;
                const positions = this.explodeMesh.geometry.attributes.position.array;
                const count = this.explodeVelocities.length / 3;
                const scale = CONFIG.FW_SCALE;
                const speedMult = CONFIG.FW_SPEED_MULT;

                for (let i = 0; i < count; i++) {
                    const ix = i * 3;
                    positions[ix] += this.explodeVelocities[ix];
                    positions[ix+1] += this.explodeVelocities[ix+1];
                    positions[ix+2] += this.explodeVelocities[ix+2];

                    this.explodeVelocities[ix] *= this.frictions[i];
                    this.explodeVelocities[ix+1] *= this.frictions[i];
                    this.explodeVelocities[ix+2] *= this.frictions[i];
                    this.explodeVelocities[ix+1] -= (0.005 * scale * speedMult); 
                }
                this.explodeMesh.geometry.attributes.position.needsUpdate = true;
                
                if (this.explodeMesh.material.opacity > 0.8) this.explodeMesh.material.opacity -= 0.005;
                else this.explodeMesh.material.opacity -= 0.015;

                if (this.explodeMesh.material.opacity <= 0) {
                    this.isDead = true;
                    this.dispose();
                }
            }

            dispose() {
                if(this.explodeMesh) {
                    scene.remove(this.explodeMesh);
                    this.explodeMesh.geometry.dispose();
                    this.explodeMesh.material.dispose();
                }
                this.trailParticles.forEach(p => {
                    scene.remove(p.mesh);
                    p.geometry.dispose();
                    p.material.dispose();
                });
            }
        }

        class Spark {
            constructor(position) {
                this.geometry = new THREE.BufferGeometry();
                this.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([position.x, position.y, position.z]), 3));
                this.material = new THREE.PointsMaterial({
                    color: 0xD4AF37, 
                    size: 3.0 * CONFIG.FW_SCALE, 
                    map: fireworkTexture,
                    transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false
                });
                this.mesh = new THREE.Points(this.geometry, this.material);
                scene.add(this.mesh);
                this.life = 1.0;
                this.decay = 0.08; 
            }
            update() {
                this.life -= this.decay;
                this.material.opacity = this.life;
                return this.life > 0;
            }
            dispose() {
                scene.remove(this.mesh);
                this.geometry.dispose();
                this.material.dispose();
            }
        }

        class RealisticFirework {
            constructor() {
                this.type = 'Realistic';
                this.isExploded = false;
                this.isDead = false;
                
                const scale = CONFIG.FW_SCALE;
                const speedMult = CONFIG.FW_SPEED_MULT;

                this.x = (Math.random() - 0.5) * 1200;
                this.y = -700;
                this.z = -500 + (Math.random() - 0.5) * 200;
                this.targetY = 400 + Math.random() * 500;

                this.speed = (0.8 + Math.random() * 0.4) * scale * speedMult;

                this.rocketGeo = new THREE.BufferGeometry();
                this.rocketGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([this.x, this.y, this.z]), 3));
                this.rocketMat = new THREE.PointsMaterial({
                    color: 0xffffff, 
                    size: 4.5 * scale, 
                    map: fireworkTexture,
                    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false
                });
                this.rocket = new THREE.Points(this.rocketGeo, this.rocketMat);
                scene.add(this.rocket);

                this.sparks = [];
                this.explosionSystem = null;
                this.particleVelocities = null;
                
                this.color = new THREE.Color(getRandomFireworkColor());
            }

            update() {
                if (!this.isExploded) {
                    this.y += this.speed;
                    this.speed *= 0.99; // 减小阻力
                    
                    const positions = this.rocket.geometry.attributes.position.array;
                    positions[1] = this.y;
                    this.rocket.geometry.attributes.position.needsUpdate = true;

                    if (Math.random() > 0.2) {
                        this.sparks.push(new Spark({x: this.x, y: this.y - 0.5, z: this.z}));
                    }

                    if (this.y >= this.targetY || this.speed < 0.1) {
                        this.explode();
                    }
                } else {
                    if (this.explosionSystem) {
                        const positions = this.explosionSystem.geometry.attributes.position.array;
                        const count = this.particleVelocities.length / 3;
                        const scale = CONFIG.FW_SCALE;
                        const speedMult = CONFIG.FW_SPEED_MULT;
                        
                        for (let i = 0; i < count; i++) {
                            const idx = i * 3;
                            positions[idx] += this.particleVelocities[idx];
                            positions[idx + 1] += this.particleVelocities[idx + 1];
                            positions[idx + 2] += this.particleVelocities[idx + 2];

                            this.particleVelocities[idx] *= 0.97; 
                            this.particleVelocities[idx + 1] *= 0.97;
                            this.particleVelocities[idx + 2] *= 0.97;
                            this.particleVelocities[idx + 1] -= (0.008 * scale * speedMult); 
                        }
                        this.explosionSystem.geometry.attributes.position.needsUpdate = true;
                        this.explosionSystem.material.opacity -= 0.008;

                        if (this.explosionSystem.material.opacity <= 0) {
                            this.isDead = true;
                        }
                    }
                }

                for (let i = this.sparks.length - 1; i >= 0; i--) {
                    if (!this.sparks[i].update()) {
                        this.sparks[i].dispose();
                        this.sparks.splice(i, 1);
                    }
                }
                
                if (this.isDead && this.sparks.length === 0) {
                    this.dispose();
                }
            }

            explode() {
                this.isExploded = true;
                scene.remove(this.rocket);
                this.rocketGeo.dispose();
                this.rocketMat.dispose();

                const count = 3000;
                const positions = new Float32Array(count * 3);
                const velocities = [];
                const scale = CONFIG.FW_SCALE;
                const speedMult = CONFIG.FW_SPEED_MULT;

                for (let i = 0; i < count; i++) {
                    positions[i * 3] = this.x;
                    positions[i * 3 + 1] = this.y;
                    positions[i * 3 + 2] = this.z;

                    const theta = Math.random() * Math.PI * 2;
                    const phi = Math.acos((Math.random() * 2) - 1);
                    const r = 1;
                    const xDir = r * Math.sin(phi) * Math.cos(theta);
                    const yDir = r * Math.sin(phi) * Math.sin(theta);
                    const zDir = r * Math.cos(phi);

                    const power = (Math.random() * 1.5 + 0.2) * 1.5 * scale * speedMult; 
                    velocities.push(xDir * power, yDir * power, zDir * power);
                }

                const geometry = new THREE.BufferGeometry();
                geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                this.particleVelocities = new Float32Array(velocities);

                const material = new THREE.PointsMaterial({
                    color: this.color, 
                    size: 1.8 * scale, 
                    map: fireworkTexture,
                    transparent: true, opacity: 1.0, blending: THREE.AdditiveBlending, depthWrite: false
                });

                this.explosionSystem = new THREE.Points(geometry, material);
                scene.add(this.explosionSystem);
            }

            dispose() {
                if (this.explosionSystem) {
                    scene.remove(this.explosionSystem);
                    this.explosionSystem.geometry.dispose();
                    this.explosionSystem.material.dispose();
                }
                this.sparks.forEach(s => s.dispose());
            }
        }

        // ==========================================
        // 2. 主逻辑初始化
        // ==========================================

        function initThree() {
            scene = new THREE.Scene();
            // 深邃夜空 (略带蓝调)
            scene.background = new THREE.Color(0x020205); 
            scene.fog = new THREE.FogExp2(0x020205, 0.0003);

            camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 10000);
            camera.position.set(0, 0, 1000);

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.outputColorSpace = THREE.SRGBColorSpace; 
            document.getElementById('canvas-container').appendChild(renderer.domElement);

            controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.rotateSpeed = 0.5;
            controls.enablePan = true;

            // 初始化背景
            starSystem = createStars();

            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });

            animate();
        }

        function createParticlesFromImage(image) {
            const maxDim = CONFIG.sampleResolution;
            let w, h;
            if (image.width > image.height) {
                w = maxDim; h = Math.round(maxDim * (image.height / image.width));
            } else {
                h = maxDim; w = Math.round(maxDim * (image.width / image.height));
            }

            const canvas = document.createElement('canvas');
            canvas.width = w; canvas.height = h;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, w, h);
            const imgData = ctx.getImageData(0, 0, w, h).data;

            const count = w * h;
            const posArray = new Float32Array(count * 3);
            const colArray = new Float32Array(count * 3);
            const targetArray = new Float32Array(count * 3);

            let validParticleIndex = 0;
            const circleTexture = createSharpCircleTexture();

            for (let i = 0; i < count; i++) {
                const i4 = i * 4;
                const r = imgData[i4] / 255;
                const g = imgData[i4 + 1] / 255;
                const b = imgData[i4 + 2] / 255;
                const a = imgData[i4 + 3];

                if (a < 20) continue;

                const boost = 1.05; 
                const brightness = (r + g + b) / 3;
                
                const col = i % w;
                const row = Math.floor(i / w);
                const x = (col - w / 2) * CONFIG.imageGap;
                const y = -(row - h / 2) * CONFIG.imageGap;
                
                // 负片浮雕逻辑：黑色凸起
                const z = (1.0 - brightness) * CONFIG.depthMultiplier;

                const idx = validParticleIndex * 3;
                posArray[idx] = x; posArray[idx+1] = y; posArray[idx+2] = z;
                targetArray[idx] = x; targetArray[idx+1] = y; targetArray[idx+2] = z;

                colArray[idx] = Math.min(r * boost, 1);
                colArray[idx+1] = Math.min(g * boost, 1);
                colArray[idx+2] = Math.min(b * boost, 1);

                validParticleIndex++;
            }

            const finalPos = posArray.slice(0, validParticleIndex * 3);
            const finalCol = colArray.slice(0, validParticleIndex * 3);
            const finalTarget = targetArray.slice(0, validParticleIndex * 3);

            particleAttributes.positions = finalPos; 
            particleAttributes.photoPositions = new Float32Array(finalTarget);
            particleAttributes.targets = finalTarget; 
            particleAttributes.colors = finalCol;

            if (particles) {
                scene.remove(particles);
                particles.geometry.dispose();
                particles.material.dispose();
            }

            const geometry = new THREE.BufferGeometry();
            geometry.setAttribute('position', new THREE.BufferAttribute(particleAttributes.positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(particleAttributes.colors, 3));
            geometry.computeBoundingSphere();

            const material = new THREE.PointsMaterial({
                size: CONFIG.particleSize,
                map: circleTexture,
                vertexColors: true,
                sizeAttenuation: true,
                transparent: true,
                opacity: 1.0, 
                alphaTest: 0.1, 
                blending: THREE.NormalBlending, 
                depthWrite: true 
            });

            particles = new THREE.Points(geometry, material);
            scene.add(particles);

            const fitDistance = Math.max(w * CONFIG.imageGap, h * CONFIG.imageGap);
            controls.reset();
            camera.position.set(0, 0, fitDistance * 0.95); 
            controls.target.set(0, 0, 0);

            isInitialized = true;
            document.getElementById('status').innerText = "System Ready. Show Hand.";
            document.getElementById('camera-preview').style.display = 'block';

            // 生成数字和文字形态
            generateAllNumbers(validParticleIndex);
            particleAttributes.newYearTargets = createNewYearPoints(validParticleIndex);
        }

        function generateAllNumbers(totalParticles) {
            for (let i = 1; i <= 5; i++) {
                numberCache[i] = createNumberPoints(i, totalParticles);
            }
        }

        function createNumberPoints(num, totalCount) {
            const size = 200;
            const canvas = document.createElement('canvas');
            canvas.width = size; canvas.height = size;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = '#000'; ctx.fillRect(0, 0, size, size);
            ctx.fillStyle = '#fff'; ctx.font = 'bold 180px Arial'; 
            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText(num.toString(), size/2, size/2);
            // 数字是“厚实”的
            return scanCanvasToPoints(canvas, totalCount, size, CONFIG.numberScale, size, true);
        }

        function createNewYearPoints(totalCount) {
            const width = 400; 
            const height = 300;
            const canvas = document.createElement('canvas');
            canvas.width = width; canvas.height = height;
            const ctx = canvas.getContext('2d');
            
            ctx.fillStyle = '#000'; ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = '#fff'; 
            ctx.textAlign = 'center'; 
            ctx.textBaseline = 'middle';

            // 第一行：2026
            ctx.font = 'bold 100px Arial';
            ctx.fillText("2026", width/2, height/2 - 50);

            // 第二行：新年快乐
            ctx.font = 'bold 70px "Microsoft YaHei", sans-serif'; 
            ctx.fillText("新年快乐", width/2, height/2 + 60);

            // 关键修复：让文字有厚度 (useThickness = true)
            return scanCanvasToPoints(canvas, totalCount, width, 1.5, height, true);
        }

        // 修复核心：useThickness 控制立体感
        function scanCanvasToPoints(canvas, totalCount, width, scale, height, useThickness) {
            height = height || width;
            const ctx = canvas.getContext('2d');
            const imgData = ctx.getImageData(0, 0, width, height).data;
            const textPixels = [];

            for (let i = 0; i < width * height; i++) {
                if (imgData[i * 4] > 128) {
                    const x = (i % width) - width / 2;
                    const y = -(Math.floor(i / width) - height / 2);
                    textPixels.push({x, y});
                }
            }

            const targetPos = new Float32Array(totalCount * 3);
            
            for (let i = 0; i < totalCount; i++) {
                const idx = i * 3;
                if (i < textPixels.length * 8) { 
                    const pixel = textPixels[i % textPixels.length];
                    targetPos[idx] = pixel.x * scale + (Math.random() - 0.5) * 2;
                    targetPos[idx+1] = pixel.y * scale + (Math.random() - 0.5) * 2;
                    
                    // 【立体感修复】
                    if (useThickness) {
                        // 给予一个固定的厚度范围 (例如 -25 到 +25)，而不是0，也不是随机乱飞
                        // 这样从侧面看是有厚度的板子，正面看也很清晰
                        targetPos[idx+2] = (Math.random() - 0.5) * CONFIG.textThickness; 
                    } else {
                        targetPos[idx+2] = (Math.random() - 0.5) * CONFIG.numberDepth; 
                    }

                } else {
                    targetPos[idx] = 0; targetPos[idx+1] = 0; targetPos[idx+2] = -8000;
                }
            }
            return targetPos;
        }

        // --- 手势识别逻辑 ---
        const videoElement = document.getElementById('input-video');
        const previewCanvas = document.getElementById('camera-preview');
        const previewCtx = previewCanvas.getContext('2d');
        const statusDiv = document.getElementById('status');
        const gestureIcon = document.getElementById('gesture-icon');

        function onResults(results) {
            if (!document.fullscreenElement) {
                previewCtx.save();
                previewCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
                previewCtx.drawImage(results.image, 0, 0, previewCanvas.width, previewCanvas.height);
                if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                    drawConnectors(previewCtx, results.multiHandLandmarks[0], HAND_CONNECTIONS, {color: '#D4AF37', lineWidth: 2});
                }
                previewCtx.restore();
            }
            
            let fingerCount = 0;
            let handDetected = false;

            if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                handDetected = true;
                const landmarks = results.multiHandLandmarks[0];
                const tips = [8, 12, 16, 20];
                const pips = [6, 10, 14, 18];
                tips.forEach((tipIdx, i) => { if (landmarks[tipIdx].y < landmarks[pips[i]].y) fingerCount++; });
                if (Math.abs(landmarks[4].x - landmarks[17].x) > Math.abs(landmarks[3].x - landmarks[17].x)) fingerCount++;
                if (fingerCount > 5) fingerCount = 5;
            }

            updateSystemState(handDetected, fingerCount);
        }

        function updateSystemState(hasHand, count) {
            if (!isInitialized) return;

            if (hasHand) {
                if (count === 0) {
                    statusDiv.innerText = "HAPPY NEW YEAR!";
                    statusDiv.style.color = '#D4AF37'; 
                    gestureIcon.innerText = "✊";
                    
                    if (currentMode !== 'NEWYEAR') {
                        currentMode = 'NEWYEAR';
                        particleAttributes.targets = particleAttributes.newYearTargets;
                    }

                } else if (count >= 1 && count <= 5) {
                    statusDiv.innerText = `Detected: ${count}`;
                    statusDiv.style.color = '#00E5FF';
                    gestureIcon.innerText = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣"][count];
                    
                    if (currentMode !== 'NUMBER' || targetContent !== count) {
                        currentMode = 'NUMBER';
                        targetContent = count;
                        particleAttributes.targets = numberCache[count];
                    }
                }
            } else {
                 if (currentMode !== 'PHOTO') {
                     currentMode = 'PHOTO';
                     particleAttributes.targets = particleAttributes.photoPositions;
                     statusDiv.innerText = "Displaying Photo";
                     statusDiv.style.color = '#888';
                     gestureIcon.innerText = "🖼️";
                 }
            }
        }

        const hands = new Hands({locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`});
        hands.setOptions({ maxNumHands: 1, modelComplexity: 1, minDetectionConfidence: 0.6, minTrackingConfidence: 0.5 });
        hands.onResults(onResults);

        // ==========================================
        // 3. 动画主循环
        // ==========================================
        function animate() {
            requestAnimationFrame(animate);

            // --- 烟花生成控制 ---
            const shouldSpawnFirework = !isInitialized || currentMode === 'NEWYEAR' || currentMode === 'NUMBER';
            
            if (shouldSpawnFirework && Math.random() < 0.03) { 
                if (Math.random() < 0.5) fireworks.push(new LinearFirework());
                else fireworks.push(new RealisticFirework());
            }

            // 星空旋转
            if(starSystem) {
                starSystem.rotation.y += 0.0002;
            }

            // 更新所有烟花
            for (let i = fireworks.length - 1; i >= 0; i--) {
                fireworks[i].update();
                if (fireworks[i].isDead) {
                    if (fireworks[i].type === 'Linear' && fireworks[i].trailParticles.length === 0) {
                        fireworks.splice(i, 1);
                    } 
                    else if (fireworks[i].type === 'Realistic' && fireworks[i].sparks.length === 0) {
                        fireworks.splice(i, 1);
                    }
                }
            }

            // --- 主粒子(照片/文字)逻辑更新 ---
            if (particles && particleAttributes.targets) {
                const positions = particles.geometry.attributes.position.array;
                const targets = particleAttributes.targets;
                const speed = CONFIG.morphSpeed;
                let hasUpdated = false;

                for (let i = 0; i < positions.length; i++) {
                    const current = positions[i];
                    const target = targets[i];
                    if (Math.abs(target - current) > 0.1) {
                        positions[i] += (target - current) * speed;
                        hasUpdated = true;
                    } else {
                        positions[i] = target;
                    }
                }
                if (hasUpdated) particles.geometry.attributes.position.needsUpdate = true;
                
                const time = Date.now() * 0.0015;
                
                // 旋转控制逻辑
                if (currentMode === 'NEWYEAR') {
                    // 新年模式：加入轻微的“呼吸式”旋转，让用户感知到文字的厚度/立体感
                    // 缓慢左右摆动
                    particles.rotation.y = Math.sin(time * 0.5) * 0.15; 
                } else if (currentMode === 'NUMBER') {
                    // 数字模式：摆动稍微大一点
                    particles.rotation.y = Math.sin(time) * 0.35; 
                } else {
                    // 照片模式：归零
                    particles.rotation.y += (0 - particles.rotation.y) * 0.1;
                }
            }

            controls.update();
            renderer.render(scene, camera);
        }

        initThree();
        const cameraUtils = new Camera(videoElement, { onFrame: async () => { await hands.send({image: videoElement}); }, width: 320, height: 240 });

        document.getElementById('file-upload').addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => { createParticlesFromImage(img); cameraUtils.start(); };
                img.src = event.target.result;
            };
            reader.readAsDataURL(file);
        });

    </script>
</body>
</html>
```

@tab V0.1

```html
```

@tab V0.2

```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2026 新年盛典|Bornforthis AI实验室</title>
    <!-- MediaPipe 库 -->
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/control_utils/control_utils.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js" crossorigin="anonymous"></script>

    <style>
        body { margin: 0; overflow: hidden; background-color: #020205; font-family: 'Segoe UI', sans-serif; }
        #canvas-container { width: 100vw; height: 100vh; }
        
        #ui-container {
            position: absolute; top: 20px; left: 20px; z-index: 10;
            color: white; background: rgba(10, 10, 15, 0.9);
            padding: 18px; border-radius: 12px; border-left: 4px solid #D4AF37;
            box-shadow: 0 10px 30px rgba(0,0,0,0.8);
            width: 260px; transition: opacity 0.5s ease; backdrop-filter: blur(8px);
        }

        h1 { margin: 0 0 12px 0; font-size: 1rem; color: #D4AF37; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; text-shadow: 0 0 10px rgba(212, 175, 55, 0.3); }
        
        .custom-file-upload {
            background: #1a1a1a; border: 1px solid #444; color: #D4AF37;
            display: block; text-align: center; padding: 12px;
            cursor: pointer; font-size: 0.85rem; font-weight: bold; border-radius: 6px;
            margin-bottom: 12px; transition: all 0.2s;
        }
        .custom-file-upload:hover { background: #D4AF37; color: #000; border-color: #D4AF37; box-shadow: 0 0 15px rgba(212, 175, 55, 0.4); }
        
        input[type="file"] { display: none; }

        /* 全屏按钮样式 */
        #fullscreen-btn {
            position: absolute; top: 20px; right: 20px; z-index: 100;
            background: rgba(255, 255, 255, 0.1); color: white;
            border: 1px solid rgba(255, 255, 255, 0.2);
            width: 44px; height: 44px; border-radius: 8px;
            font-size: 1.2rem; cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            transition: all 0.2s;
        }
        #fullscreen-btn:hover { background: rgba(212, 175, 55, 0.2); border-color: #D4AF37; color: #D4AF37; }

        /* 静音按钮样式 (新增) */
        #mute-btn {
            position: absolute; top: 20px; right: 74px; z-index: 100; /* 放在全屏按钮左边 */
            background: rgba(255, 255, 255, 0.1); color: white;
            border: 1px solid rgba(255, 255, 255, 0.2);
            width: 44px; height: 44px; border-radius: 8px;
            font-size: 1.2rem; cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            transition: all 0.2s;
        }
        #mute-btn:hover { background: rgba(212, 175, 55, 0.2); border-color: #D4AF37; color: #D4AF37; }

        #camera-preview {
            position: absolute; bottom: 20px; left: 20px;
            width: 140px; height: 105px;
            border: 2px solid #333; border-radius: 6px;
            transform: scaleX(-1);
            z-index: 20; display: none;
            background: #000; box-shadow: 0 5px 15px rgba(0,0,0,0.5);
        }

        #status { margin-top: 10px; font-size: 0.75rem; color: #aaa; border-top: 1px solid #444; padding-top: 10px; }
        #gesture-icon { font-size: 2rem; position: absolute; top: 15px; right: 15px; filter: drop-shadow(0 0 5px rgba(255,255,255,0.3)); }
        
        .highlight { color: #D4AF37; font-weight: bold; }
    </style>
</head>
<body>

    <button id="fullscreen-btn" title="全屏模式">⛶</button>
    <button id="mute-btn" title="开启/关闭音效">🔊</button> <!-- 新增静音按钮 -->

    <div id="ui-container">
        <h1>2026 LUXURY GALA｜Bornforthis AI实验室</h1>
        <label for="file-upload" class="custom-file-upload">📂 上传照片 / Upload</label>
        <input id="file-upload" type="file" accept="image/*"/>
        
        <div style="font-size: 0.75rem; color: #ccc; line-height: 1.6;">
            1. 开启摄像头<br>
            2. 伸出 <span class="highlight">1-5</span> 指变数字<br>
            3. <span class="highlight">✊ 握拳</span> 触发新年祝福<br>
            <span style="color: #bbb; font-size: 0.7rem;">* 手势互动时将燃放烟花</span>
        </div>

        <div id="status">Waiting for image...</div>
        <div id="gesture-icon">✋</div>
    </div>

    <video id="input-video" style="display:none"></video>
    <canvas id="camera-preview"></canvas>
    <div id="canvas-container"></div>

    <script type="importmap">
        {
            "imports": {
                "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
                "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"
            }
        }
    </script>

    <script type="module">
        import * as THREE from 'three';
        import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

        // --- 主配置 ---
        const CONFIG = {
            sampleResolution: 220, 
            particleSize: 3.8,      
            imageGap: 3.5,          
            depthMultiplier: 80.0,
            morphSpeed: 0.07,
            
            // 3D 文字厚度配置 (解决平面感问题)
            textThickness: 50.0,  // 文字的厚度，数值越大越厚
            
            numberDepth: 220,       
            numberScale: 2.2,
            
            // --- 烟花配置 ---
            FW_SCALE: 9.0, 
            FW_SPEED_MULT: 0.9375 
        };

        // --- 音效配置 (NEW) ---
        const SOUND_LAUNCH = 'https://ai.bornforthis.cn/HappyNewYear/mp3/shotfire.mp3';
        const SOUND_BOOM = 'https://ai.bornforthis.cn/HappyNewYear/mp3/boom.mp3';
        
        let isMuted = false; // 默认音效开启

        // 简单的音效播放函数
        function playSound(url, volume = 1.0) {
            if (isMuted) return; // 如果静音，直接返回

            try {
                const audio = new Audio(url);
                audio.volume = volume;
                // 稍微随机化播放速度，让声音听起来更自然，不重复
                audio.playbackRate = 0.9 + Math.random() * 0.2;
                // 某些浏览器需要用户交互后才能播放声音
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        // 静默失败，通常是因为用户还没点击页面
                        // console.log("Audio waiting for interaction");
                    });
                }
            } catch (e) {
                console.warn("Audio play failed", e);
            }
        }

        // --- 高级烟花色板 (Luxury Palette) ---
        // 去除了荧光色，只保留金、银、红、深蓝
        const FIREWORK_PALETTE = [
            0xFFD700, // 纯金 Gold
            0xC0C0C0, // 银白 Silver
            0xB8860B, // 暗金 DarkGoldenRod
            0xCD5C5C, // 印度红 IndianRed (不刺眼)
            0x8B0000, // 深红 DarkRed
            0x4682B4, // 钢蓝 SteelBlue
            0x191970, // 午夜蓝 MidnightBlue
            0xF0E68C  // 卡其金 Khaki
        ];

        function getRandomFireworkColor() {
            return FIREWORK_PALETTE[Math.floor(Math.random() * FIREWORK_PALETTE.length)];
        }

        let scene, camera, renderer, controls, particles;
        let particleAttributes = { positions: null, targets: null, photoPositions: null, colors: null, newYearTargets: null };
        const numberCache = {}; 
        let isInitialized = false;
        let currentMode = 'PHOTO'; 
        let targetContent = 'PHOTO'; 
        
        const fireworks = [];
        let starSystem;

        // --- 按钮逻辑 (全屏 & 静音) ---
        const fsBtn = document.getElementById('fullscreen-btn');
        const muteBtn = document.getElementById('mute-btn'); // 获取静音按钮
        const uiContainer = document.getElementById('ui-container');
        const camPreview = document.getElementById('camera-preview');

        // 全屏切换
        fsBtn.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(e => alert(e.message));
            } else {
                document.exitFullscreen();
            }
        });

        // 静音切换
        muteBtn.addEventListener('click', () => {
            isMuted = !isMuted;
            if (isMuted) {
                muteBtn.innerText = '🔇';
                muteBtn.title = '点击开启音效';
            } else {
                muteBtn.innerText = '🔊';
                muteBtn.title = '点击静音';
            }
        });

        document.addEventListener('fullscreenchange', () => {
            if (document.fullscreenElement) {
                uiContainer.style.opacity = '0';
                uiContainer.style.pointerEvents = 'none';
                camPreview.style.opacity = '0';
                fsBtn.innerHTML = '❌';
            } else {
                uiContainer.style.opacity = '1';
                uiContainer.style.pointerEvents = 'auto';
                camPreview.style.opacity = '1';
                fsBtn.innerHTML = '⛶';
            }
        });

        // ==========================================
        // 1. 烟花与背景系统
        // ==========================================

        function getParticleTexture() {
            const canvas = document.createElement('canvas');
            canvas.width = 32; canvas.height = 32;
            const ctx = canvas.getContext('2d');
            const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
            gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
            gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 32, 32);
            const texture = new THREE.Texture(canvas);
            texture.needsUpdate = true;
            return texture;
        }
        const fireworkTexture = getParticleTexture();

        function createSharpCircleTexture() {
            const canvas = document.createElement('canvas');
            const size = 128; 
            canvas.width = size; canvas.height = size;
            const ctx = canvas.getContext('2d');
            const center = size / 2;
            const radius = size / 2 - 2; 
            ctx.beginPath();
            ctx.arc(center, center, radius, 0, Math.PI * 2);
            ctx.fillStyle = '#FFFFFF';
            ctx.fill();
            const texture = new THREE.Texture(canvas);
            texture.needsUpdate = true;
            return texture;
        }

        // --- 星空背景 ---
        function createStars() {
            const geometry = new THREE.BufferGeometry();
            const count = 3000;
            const positions = new Float32Array(count * 3);
            const sizes = new Float32Array(count);
            const starSpread = 4000; 

            for(let i=0; i<count; i++) {
                positions[i*3] = (Math.random()-0.5)*starSpread;
                positions[i*3+1] = (Math.random()-0.5)*starSpread;
                positions[i*3+2] = -1000 + (Math.random()-0.5)*1000; 
                sizes[i] = Math.random() * 4.0; 
            }
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
            const material = new THREE.PointsMaterial({
                color: 0xE0E0E0, // 稍微降低星空饱和度
                size: 2.0, 
                map: fireworkTexture, 
                transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false
            });
            const stars = new THREE.Points(geometry, material);
            scene.add(stars);
            return stars;
        }

        // --- 烟花类定义 ---
        class LinearFirework {
            constructor() {
                this.type = 'Linear';
                this.isExploded = false;
                this.isDead = false;
                
                const scale = CONFIG.FW_SCALE;
                const speedMult = CONFIG.FW_SPEED_MULT;
                
                this.x = (Math.random() - 0.5) * 1200; 
                this.y = -700; 
                this.z = -500 + (Math.random() - 0.5) * 200; 
                this.targetY = 400 + Math.random() * 500; 
                
                this.speed = (2.2 + Math.random() * 0.8) * scale * speedMult;
                
                this.launchGeo = new THREE.BufferGeometry();
                this.launchGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([this.x, this.y, this.z]), 3));
                this.launchMat = new THREE.PointsMaterial({
                    color: 0xD4AF37, // 发射时使用金色
                    size: 3.0 * scale, 
                    map: fireworkTexture, 
                    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false
                });
                this.launchMesh = new THREE.Points(this.launchGeo, this.launchMat);
                scene.add(this.launchMesh);

                this.trailParticles = [];
                
                // 颜色处理：从高级色板选色
                const baseColorHex = getRandomFireworkColor();
                this.color1 = new THREE.Color(baseColorHex);
                this.color2 = new THREE.Color(baseColorHex).offsetHSL(0.02, 0, -0.1); 

                // [Sound] 播放升空音效
                playSound(SOUND_LAUNCH, 0.25);
            }

            update() {
                if (!this.isExploded) {
                    this.y += this.speed;
                    this.speed *= 0.99; 
                    
                    const positions = this.launchGeo.attributes.position.array;
                    positions[1] = this.y;
                    this.launchGeo.attributes.position.needsUpdate = true;

                    if(Math.random() > 0.4) this.createTrailSpark();

                    if (this.speed < (0.1 * CONFIG.FW_SCALE * CONFIG.FW_SPEED_MULT) || this.y >= this.targetY) {
                        this.explode();
                    }
                } else {
                    this.updateExplosion();
                }

                for (let i = this.trailParticles.length - 1; i >= 0; i--) {
                    const p = this.trailParticles[i];
                    p.life -= 0.04;
                    p.mesh.position.y -= (0.1 * CONFIG.FW_SCALE);
                    p.material.opacity = p.life;
                    if (p.life <= 0) {
                        scene.remove(p.mesh);
                        p.geometry.dispose();
                        p.material.dispose();
                        this.trailParticles.splice(i, 1);
                    }
                }
            }

            createTrailSpark() {
                const geo = new THREE.BufferGeometry();
                geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([this.x, this.y, this.z]), 3));
                const mat = new THREE.PointsMaterial({
                    color: 0xcc9966, // 拖尾用淡古铜色
                    size: 2.0 * CONFIG.FW_SCALE, 
                    map: fireworkTexture,
                    transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false
                });
                const mesh = new THREE.Points(geo, mat);
                scene.add(mesh);
                this.trailParticles.push({ mesh, geometry: geo, material: mat, life: 1.0 });
            }

            explode() {
                this.isExploded = true;
                
                // [Sound] 播放爆炸音效
                playSound(SOUND_BOOM, 0.6);

                scene.remove(this.launchMesh);
                this.launchGeo.dispose();
                this.launchMat.dispose();

                const rayCount = 80 + Math.floor(Math.random() * 40);
                const particlesPerRay = 30;
                const totalParticles = rayCount * particlesPerRay;

                const positions = new Float32Array(totalParticles * 3);
                const colors = new Float32Array(totalParticles * 3);
                const velocities = new Float32Array(totalParticles * 3);
                this.frictions = new Float32Array(totalParticles);

                let idx = 0;
                const scale = CONFIG.FW_SCALE;
                const speedMult = CONFIG.FW_SPEED_MULT;

                for (let i = 0; i < rayCount; i++) {
                    const theta = Math.random() * Math.PI * 2;
                    const phi = Math.acos((Math.random() * 2) - 1);
                    const dirX = Math.sin(phi) * Math.cos(theta);
                    const dirY = Math.sin(phi) * Math.sin(theta);
                    const dirZ = Math.cos(phi);
                    
                    const power = (0.8 + Math.random() * 0.5) * 1.5 * scale * speedMult;

                    for (let j = 0; j < particlesPerRay; j++) {
                        positions[idx * 3] = this.x;
                        positions[idx * 3 + 1] = this.y;
                        positions[idx * 3 + 2] = this.z;

                        const colorMix = j / particlesPerRay;
                        const finalColor = this.color1.clone().lerp(this.color2, colorMix);
                        // 核心部分更亮白
                        if(j < 5) finalColor.lerp(new THREE.Color(0xffffff), 0.7);

                        colors[idx * 3] = finalColor.r;
                        colors[idx * 3 + 1] = finalColor.g;
                        colors[idx * 3 + 2] = finalColor.b;

                        const speedRatio = 1.0 - (j / particlesPerRay) * 0.6;
                        const jitter = 0.05;
                        velocities[idx * 3] = (dirX + (Math.random()-0.5)*jitter) * power * speedRatio;
                        velocities[idx * 3 + 1] = (dirY + (Math.random()-0.5)*jitter) * power * speedRatio;
                        velocities[idx * 3 + 2] = (dirZ + (Math.random()-0.5)*jitter) * power * speedRatio;

                        this.frictions[idx] = 0.95 + (1 - j/particlesPerRay) * 0.03; 
                        idx++;
                    }
                }

                const geometry = new THREE.BufferGeometry();
                geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
                this.explodeVelocities = velocities;
                
                const material = new THREE.PointsMaterial({
                    size: 1.5 * scale, 
                    map: fireworkTexture, vertexColors: true,
                    transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false
                });
                this.explodeMesh = new THREE.Points(geometry, material);
                scene.add(this.explodeMesh);
            }

            updateExplosion() {
                if (!this.explodeMesh) return;
                const positions = this.explodeMesh.geometry.attributes.position.array;
                const count = this.explodeVelocities.length / 3;
                const scale = CONFIG.FW_SCALE;
                const speedMult = CONFIG.FW_SPEED_MULT;

                for (let i = 0; i < count; i++) {
                    const ix = i * 3;
                    positions[ix] += this.explodeVelocities[ix];
                    positions[ix+1] += this.explodeVelocities[ix+1];
                    positions[ix+2] += this.explodeVelocities[ix+2];

                    this.explodeVelocities[ix] *= this.frictions[i];
                    this.explodeVelocities[ix+1] *= this.frictions[i];
                    this.explodeVelocities[ix+2] *= this.frictions[i];
                    this.explodeVelocities[ix+1] -= (0.005 * scale * speedMult); 
                }
                this.explodeMesh.geometry.attributes.position.needsUpdate = true;
                
                if (this.explodeMesh.material.opacity > 0.8) this.explodeMesh.material.opacity -= 0.005;
                else this.explodeMesh.material.opacity -= 0.015;

                if (this.explodeMesh.material.opacity <= 0) {
                    this.isDead = true;
                    this.dispose();
                }
            }

            dispose() {
                if(this.explodeMesh) {
                    scene.remove(this.explodeMesh);
                    this.explodeMesh.geometry.dispose();
                    this.explodeMesh.material.dispose();
                }
                this.trailParticles.forEach(p => {
                    scene.remove(p.mesh);
                    p.geometry.dispose();
                    p.material.dispose();
                });
            }
        }

        class Spark {
            constructor(position) {
                this.geometry = new THREE.BufferGeometry();
                this.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([position.x, position.y, position.z]), 3));
                this.material = new THREE.PointsMaterial({
                    color: 0xD4AF37, 
                    size: 3.0 * CONFIG.FW_SCALE, 
                    map: fireworkTexture,
                    transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false
                });
                this.mesh = new THREE.Points(this.geometry, this.material);
                scene.add(this.mesh);
                this.life = 1.0;
                this.decay = 0.08; 
            }
            update() {
                this.life -= this.decay;
                this.material.opacity = this.life;
                return this.life > 0;
            }
            dispose() {
                scene.remove(this.mesh);
                this.geometry.dispose();
                this.material.dispose();
            }
        }

        class RealisticFirework {
            constructor() {
                this.type = 'Realistic';
                this.isExploded = false;
                this.isDead = false;
                
                const scale = CONFIG.FW_SCALE;
                const speedMult = CONFIG.FW_SPEED_MULT;

                this.x = (Math.random() - 0.5) * 1200;
                this.y = -700;
                this.z = -500 + (Math.random() - 0.5) * 200;
                this.targetY = 400 + Math.random() * 500;

                this.speed = (0.8 + Math.random() * 0.4) * scale * speedMult;

                this.rocketGeo = new THREE.BufferGeometry();
                this.rocketGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([this.x, this.y, this.z]), 3));
                this.rocketMat = new THREE.PointsMaterial({
                    color: 0xffffff, 
                    size: 4.5 * scale, 
                    map: fireworkTexture,
                    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false
                });
                this.rocket = new THREE.Points(this.rocketGeo, this.rocketMat);
                scene.add(this.rocket);

                this.sparks = [];
                this.explosionSystem = null;
                this.particleVelocities = null;
                
                this.color = new THREE.Color(getRandomFireworkColor());

                // [Sound] 播放升空音效
                playSound(SOUND_LAUNCH, 0.25);
            }

            update() {
                if (!this.isExploded) {
                    this.y += this.speed;
                    this.speed *= 0.99; // 减小阻力
                    
                    const positions = this.rocket.geometry.attributes.position.array;
                    positions[1] = this.y;
                    this.rocket.geometry.attributes.position.needsUpdate = true;

                    if (Math.random() > 0.2) {
                        this.sparks.push(new Spark({x: this.x, y: this.y - 0.5, z: this.z}));
                    }

                    if (this.y >= this.targetY || this.speed < 0.1) {
                        this.explode();
                    }
                } else {
                    if (this.explosionSystem) {
                        const positions = this.explosionSystem.geometry.attributes.position.array;
                        const count = this.particleVelocities.length / 3;
                        const scale = CONFIG.FW_SCALE;
                        const speedMult = CONFIG.FW_SPEED_MULT;
                        
                        for (let i = 0; i < count; i++) {
                            const idx = i * 3;
                            positions[idx] += this.particleVelocities[idx];
                            positions[idx + 1] += this.particleVelocities[idx + 1];
                            positions[idx + 2] += this.particleVelocities[idx + 2];

                            this.particleVelocities[idx] *= 0.97; 
                            this.particleVelocities[idx + 1] *= 0.97;
                            this.particleVelocities[idx + 2] *= 0.97;
                            this.particleVelocities[idx + 1] -= (0.008 * scale * speedMult); 
                        }
                        this.explosionSystem.geometry.attributes.position.needsUpdate = true;
                        this.explosionSystem.material.opacity -= 0.008;

                        if (this.explosionSystem.material.opacity <= 0) {
                            this.isDead = true;
                        }
                    }
                }

                for (let i = this.sparks.length - 1; i >= 0; i--) {
                    if (!this.sparks[i].update()) {
                        this.sparks[i].dispose();
                        this.sparks.splice(i, 1);
                    }
                }
                
                if (this.isDead && this.sparks.length === 0) {
                    this.dispose();
                }
            }

            explode() {
                this.isExploded = true;
                
                // [Sound] 播放爆炸音效
                playSound(SOUND_BOOM, 0.6);

                scene.remove(this.rocket);
                this.rocketGeo.dispose();
                this.rocketMat.dispose();

                const count = 3000;
                const positions = new Float32Array(count * 3);
                const velocities = [];
                const scale = CONFIG.FW_SCALE;
                const speedMult = CONFIG.FW_SPEED_MULT;

                for (let i = 0; i < count; i++) {
                    positions[i * 3] = this.x;
                    positions[i * 3 + 1] = this.y;
                    positions[i * 3 + 2] = this.z;

                    const theta = Math.random() * Math.PI * 2;
                    const phi = Math.acos((Math.random() * 2) - 1);
                    const r = 1;
                    const xDir = r * Math.sin(phi) * Math.cos(theta);
                    const yDir = r * Math.sin(phi) * Math.sin(theta);
                    const zDir = r * Math.cos(phi);

                    const power = (Math.random() * 1.5 + 0.2) * 1.5 * scale * speedMult; 
                    velocities.push(xDir * power, yDir * power, zDir * power);
                }

                const geometry = new THREE.BufferGeometry();
                geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                this.particleVelocities = new Float32Array(velocities);

                const material = new THREE.PointsMaterial({
                    color: this.color, 
                    size: 1.8 * scale, 
                    map: fireworkTexture,
                    transparent: true, opacity: 1.0, blending: THREE.AdditiveBlending, depthWrite: false
                });

                this.explosionSystem = new THREE.Points(geometry, material);
                scene.add(this.explosionSystem);
            }

            dispose() {
                if (this.explosionSystem) {
                    scene.remove(this.explosionSystem);
                    this.explosionSystem.geometry.dispose();
                    this.explosionSystem.material.dispose();
                }
                this.sparks.forEach(s => s.dispose());
            }
        }

        // ==========================================
        // 2. 主逻辑初始化
        // ==========================================

        function initThree() {
            scene = new THREE.Scene();
            // 深邃夜空 (略带蓝调)
            scene.background = new THREE.Color(0x020205); 
            scene.fog = new THREE.FogExp2(0x020205, 0.0003);

            camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 10000);
            camera.position.set(0, 0, 1000);

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.outputColorSpace = THREE.SRGBColorSpace; 
            document.getElementById('canvas-container').appendChild(renderer.domElement);

            controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.rotateSpeed = 0.5;
            controls.enablePan = true;

            // 初始化背景
            starSystem = createStars();

            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });

            animate();
        }

        function createParticlesFromImage(image) {
            const maxDim = CONFIG.sampleResolution;
            let w, h;
            if (image.width > image.height) {
                w = maxDim; h = Math.round(maxDim * (image.height / image.width));
            } else {
                h = maxDim; w = Math.round(maxDim * (image.width / image.height));
            }

            const canvas = document.createElement('canvas');
            canvas.width = w; canvas.height = h;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, w, h);
            const imgData = ctx.getImageData(0, 0, w, h).data;

            const count = w * h;
            const posArray = new Float32Array(count * 3);
            const colArray = new Float32Array(count * 3);
            const targetArray = new Float32Array(count * 3);

            let validParticleIndex = 0;
            const circleTexture = createSharpCircleTexture();

            for (let i = 0; i < count; i++) {
                const i4 = i * 4;
                const r = imgData[i4] / 255;
                const g = imgData[i4 + 1] / 255;
                const b = imgData[i4 + 2] / 255;
                const a = imgData[i4 + 3];

                if (a < 20) continue;

                const boost = 1.05; 
                const brightness = (r + g + b) / 3;
                
                const col = i % w;
                const row = Math.floor(i / w);
                const x = (col - w / 2) * CONFIG.imageGap;
                const y = -(row - h / 2) * CONFIG.imageGap;
                
                // 负片浮雕逻辑：黑色凸起
                const z = (1.0 - brightness) * CONFIG.depthMultiplier;

                const idx = validParticleIndex * 3;
                posArray[idx] = x; posArray[idx+1] = y; posArray[idx+2] = z;
                targetArray[idx] = x; targetArray[idx+1] = y; targetArray[idx+2] = z;

                colArray[idx] = Math.min(r * boost, 1);
                colArray[idx+1] = Math.min(g * boost, 1);
                colArray[idx+2] = Math.min(b * boost, 1);

                validParticleIndex++;
            }

            const finalPos = posArray.slice(0, validParticleIndex * 3);
            const finalCol = colArray.slice(0, validParticleIndex * 3);
            const finalTarget = targetArray.slice(0, validParticleIndex * 3);

            particleAttributes.positions = finalPos; 
            particleAttributes.photoPositions = new Float32Array(finalTarget);
            particleAttributes.targets = finalTarget; 
            particleAttributes.colors = finalCol;

            if (particles) {
                scene.remove(particles);
                particles.geometry.dispose();
                particles.material.dispose();
            }

            const geometry = new THREE.BufferGeometry();
            geometry.setAttribute('position', new THREE.BufferAttribute(particleAttributes.positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(particleAttributes.colors, 3));
            geometry.computeBoundingSphere();

            const material = new THREE.PointsMaterial({
                size: CONFIG.particleSize,
                map: circleTexture,
                vertexColors: true,
                sizeAttenuation: true,
                transparent: true,
                opacity: 1.0, 
                alphaTest: 0.1, 
                blending: THREE.NormalBlending, 
                depthWrite: true 
            });

            particles = new THREE.Points(geometry, material);
            scene.add(particles);

            const fitDistance = Math.max(w * CONFIG.imageGap, h * CONFIG.imageGap);
            controls.reset();
            camera.position.set(0, 0, fitDistance * 0.95); 
            controls.target.set(0, 0, 0);

            isInitialized = true;
            document.getElementById('status').innerText = "System Ready. Show Hand.";
            document.getElementById('camera-preview').style.display = 'block';

            // 生成数字和文字形态
            generateAllNumbers(validParticleIndex);
            particleAttributes.newYearTargets = createNewYearPoints(validParticleIndex);
        }

        function generateAllNumbers(totalParticles) {
            for (let i = 1; i <= 5; i++) {
                numberCache[i] = createNumberPoints(i, totalParticles);
            }
        }

        function createNumberPoints(num, totalCount) {
            const size = 200;
            const canvas = document.createElement('canvas');
            canvas.width = size; canvas.height = size;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = '#000'; ctx.fillRect(0, 0, size, size);
            ctx.fillStyle = '#fff'; ctx.font = 'bold 180px Arial'; 
            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText(num.toString(), size/2, size/2);
            // 数字是“厚实”的
            return scanCanvasToPoints(canvas, totalCount, size, CONFIG.numberScale, size, true);
        }

        function createNewYearPoints(totalCount) {
            const width = 400; 
            const height = 300;
            const canvas = document.createElement('canvas');
            canvas.width = width; canvas.height = height;
            const ctx = canvas.getContext('2d');
            
            ctx.fillStyle = '#000'; ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = '#fff'; 
            ctx.textAlign = 'center'; 
            ctx.textBaseline = 'middle';

            // 第一行：2026
            ctx.font = 'bold 100px Arial';
            ctx.fillText("2026", width/2, height/2 - 50);

            // 第二行：新年快乐
            ctx.font = 'bold 70px "Microsoft YaHei", sans-serif'; 
            ctx.fillText("新年快乐", width/2, height/2 + 60);

            // 关键修复：让文字有厚度 (useThickness = true)
            return scanCanvasToPoints(canvas, totalCount, width, 1.5, height, true);
        }

        // 修复核心：useThickness 控制立体感
        function scanCanvasToPoints(canvas, totalCount, width, scale, height, useThickness) {
            height = height || width;
            const ctx = canvas.getContext('2d');
            const imgData = ctx.getImageData(0, 0, width, height).data;
            const textPixels = [];

            for (let i = 0; i < width * height; i++) {
                if (imgData[i * 4] > 128) {
                    const x = (i % width) - width / 2;
                    const y = -(Math.floor(i / width) - height / 2);
                    textPixels.push({x, y});
                }
            }

            const targetPos = new Float32Array(totalCount * 3);
            
            for (let i = 0; i < totalCount; i++) {
                const idx = i * 3;
                if (i < textPixels.length * 8) { 
                    const pixel = textPixels[i % textPixels.length];
                    targetPos[idx] = pixel.x * scale + (Math.random() - 0.5) * 2;
                    targetPos[idx+1] = pixel.y * scale + (Math.random() - 0.5) * 2;
                    
                    // 【立体感修复】
                    if (useThickness) {
                        // 给予一个固定的厚度范围 (例如 -25 到 +25)，而不是0，也不是随机乱飞
                        // 这样从侧面看是有厚度的板子，正面看也很清晰
                        targetPos[idx+2] = (Math.random() - 0.5) * CONFIG.textThickness; 
                    } else {
                        targetPos[idx+2] = (Math.random() - 0.5) * CONFIG.numberDepth; 
                    }

                } else {
                    targetPos[idx] = 0; targetPos[idx+1] = 0; targetPos[idx+2] = -8000;
                }
            }
            return targetPos;
        }

        // --- 手势识别逻辑 ---
        const videoElement = document.getElementById('input-video');
        const previewCanvas = document.getElementById('camera-preview');
        const previewCtx = previewCanvas.getContext('2d');
        const statusDiv = document.getElementById('status');
        const gestureIcon = document.getElementById('gesture-icon');

        function onResults(results) {
            if (!document.fullscreenElement) {
                previewCtx.save();
                previewCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
                previewCtx.drawImage(results.image, 0, 0, previewCanvas.width, previewCanvas.height);
                if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                    drawConnectors(previewCtx, results.multiHandLandmarks[0], HAND_CONNECTIONS, {color: '#D4AF37', lineWidth: 2});
                }
                previewCtx.restore();
            }
            
            let fingerCount = 0;
            let handDetected = false;

            if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                handDetected = true;
                const landmarks = results.multiHandLandmarks[0];
                const tips = [8, 12, 16, 20];
                const pips = [6, 10, 14, 18];
                tips.forEach((tipIdx, i) => { if (landmarks[tipIdx].y < landmarks[pips[i]].y) fingerCount++; });
                if (Math.abs(landmarks[4].x - landmarks[17].x) > Math.abs(landmarks[3].x - landmarks[17].x)) fingerCount++;
                if (fingerCount > 5) fingerCount = 5;
            }

            updateSystemState(handDetected, fingerCount);
        }

        function updateSystemState(hasHand, count) {
            if (!isInitialized) return;

            if (hasHand) {
                if (count === 0) {
                    statusDiv.innerText = "HAPPY NEW YEAR!";
                    statusDiv.style.color = '#D4AF37'; 
                    gestureIcon.innerText = "✊";
                    
                    if (currentMode !== 'NEWYEAR') {
                        currentMode = 'NEWYEAR';
                        particleAttributes.targets = particleAttributes.newYearTargets;
                    }

                } else if (count >= 1 && count <= 5) {
                    statusDiv.innerText = `Detected: ${count}`;
                    statusDiv.style.color = '#00E5FF';
                    gestureIcon.innerText = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣"][count];
                    
                    if (currentMode !== 'NUMBER' || targetContent !== count) {
                        currentMode = 'NUMBER';
                        targetContent = count;
                        particleAttributes.targets = numberCache[count];
                    }
                }
            } else {
                 if (currentMode !== 'PHOTO') {
                     currentMode = 'PHOTO';
                     particleAttributes.targets = particleAttributes.photoPositions;
                     statusDiv.innerText = "Displaying Photo";
                     statusDiv.style.color = '#888';
                     gestureIcon.innerText = "🖼️";
                 }
            }
        }

        const hands = new Hands({locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`});
        hands.setOptions({ maxNumHands: 1, modelComplexity: 1, minDetectionConfidence: 0.6, minTrackingConfidence: 0.5 });
        hands.onResults(onResults);

        // ==========================================
        // 3. 动画主循环
        // ==========================================
        function animate() {
            requestAnimationFrame(animate);

            // --- 烟花生成控制 ---
            const shouldSpawnFirework = !isInitialized || currentMode === 'NEWYEAR' || currentMode === 'NUMBER';
            
            if (shouldSpawnFirework && Math.random() < 0.03) { 
                if (Math.random() < 0.5) fireworks.push(new LinearFirework());
                else fireworks.push(new RealisticFirework());
            }

            // 星空旋转
            if(starSystem) {
                starSystem.rotation.y += 0.0002;
            }

            // 更新所有烟花
            for (let i = fireworks.length - 1; i >= 0; i--) {
                fireworks[i].update();
                if (fireworks[i].isDead) {
                    if (fireworks[i].type === 'Linear' && fireworks[i].trailParticles.length === 0) {
                        fireworks.splice(i, 1);
                    } 
                    else if (fireworks[i].type === 'Realistic' && fireworks[i].sparks.length === 0) {
                        fireworks.splice(i, 1);
                    }
                }
            }

            // --- 主粒子(照片/文字)逻辑更新 ---
            if (particles && particleAttributes.targets) {
                const positions = particles.geometry.attributes.position.array;
                const targets = particleAttributes.targets;
                const speed = CONFIG.morphSpeed;
                let hasUpdated = false;

                for (let i = 0; i < positions.length; i++) {
                    const current = positions[i];
                    const target = targets[i];
                    if (Math.abs(target - current) > 0.1) {
                        positions[i] += (target - current) * speed;
                        hasUpdated = true;
                    } else {
                        positions[i] = target;
                    }
                }
                if (hasUpdated) particles.geometry.attributes.position.needsUpdate = true;
                
                const time = Date.now() * 0.0015;
                
                // 旋转控制逻辑
                if (currentMode === 'NEWYEAR') {
                    // 新年模式：加入轻微的“呼吸式”旋转，让用户感知到文字的厚度/立体感
                    // 缓慢左右摆动
                    particles.rotation.y = Math.sin(time * 0.5) * 0.15; 
                } else if (currentMode === 'NUMBER') {
                    // 数字模式：摆动稍微大一点
                    particles.rotation.y = Math.sin(time) * 0.35; 
                } else {
                    // 照片模式：归零
                    particles.rotation.y += (0 - particles.rotation.y) * 0.1;
                }
            }

            controls.update();
            renderer.render(scene, camera);
        }

        initThree();
        const cameraUtils = new Camera(videoElement, { onFrame: async () => { await hands.send({image: videoElement}); }, width: 320, height: 240 });

        document.getElementById('file-upload').addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => { createParticlesFromImage(img); cameraUtils.start(); };
                img.src = event.target.result;
            };
            reader.readAsDataURL(file);
        });

    </script>
</body>
</html>
```



:::









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