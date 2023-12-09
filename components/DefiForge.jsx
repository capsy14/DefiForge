"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FontLoader } from "three/addons/loaders/FontLoader.js";

const DefiForge = () => {
  const displayRef = useRef();
  const [text, setText] = useState("DefiForge");
  const scrollRef = useRef(0);

  useEffect(() => {
    // console.log("window width",window.innerWidth)
    document.body.addEventListener("scroll", handleScroll);
    return () => document.body.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    scrollRef.current = document.body.scrollTop;
  };

  useEffect(() => {
    const preload = async () => {
      let manager = new THREE.LoadingManager();
      const loader = new FontLoader(manager);
      let typo;
      try {
        typo = await loader.loadAsync(
          "https://res.cloudinary.com/dydre7amr/raw/upload/v1612950355/font_zsd4dr.json"
        );
        console.log("typo", typo);
      } catch (err) {
        console.error(err);
      }

      const particle = new THREE.TextureLoader(manager).load(
        "https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png"
      );
      manager.onLoad = function () {
        const environment = new Environment(typo, particle);
      };
    };
    preload();

    class Environment {
      constructor(font, particle) {
        this.font = font;
        this.particle = particle;
        this.container = displayRef.current;
        this.scene = new THREE.Scene();
        this.createCamera();
        this.createRenderer();
        this.setup();
        this.bindEvents();
      }

      bindEvents() {
        window.addEventListener("resize", this.onWindowResize.bind(this));
      }

      setup() {
        this.createParticles = new CreateParticles(
          this.scene,
          this.font,
          this.particle,
          this.camera,
          this.renderer
        );
      }

      render() {
        this.createParticles.render();
        this.renderer.render(this.scene, this.camera);
      }

      createCamera() {
        this.camera = new THREE.PerspectiveCamera(
          65,
          this.container.clientWidth / this.container.clientHeight,
          1,
          10000
        );
        console.log("this.camera", this.camera);
        console.log("clientWidth", this.container.clientWidth);
        console.log("clientHeight", this.container.clientHeight);
        this.camera.position.set(0, 0, 100);
      }

      createRenderer() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(
          this.container.clientWidth,
          this.container.clientHeight
        );
        this.renderer.setClearColor(new THREE.Color("rgb(5, 5, 30)"), 1);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        // let canvas = document.querySelector("canvas");
        // if (displayRef.current.contains(canvas))
        //   displayRef.current.removeChild(canvas);
        const rendererElement = this.renderer.domElement;
        rendererElement.id = "textDisplay";
        this.container.appendChild(rendererElement);

        this.renderer.setAnimationLoop(() => {
          this.render();
        });
      }

      onWindowResize() {
        this.camera.aspect =
          this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(
          this.container.clientWidth,
          this.container.clientHeight
        );
      }
    }

    class CreateParticles {
      constructor(scene, font, particleImg, camera, renderer) {
        this.scene = scene;
        this.font = font;
        this.particleImg = particleImg;
        this.camera = camera;
        this.renderer = renderer;

        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2(-1, 1);

        this.colorChange = new THREE.Color();

        this.buttom = false;

        this.data = {
          text: "    DefiForge\nWelcomes You",
          amount: 1900,
          particleSize: 1,
          particleColor: 0xffffff,
          textSize: 16,
          area: 250,
          ease: 0.05,
        };

        this.setup();
        this.bindEvents();
        // this.mouse.x=1;
        // this.mouse.y=-1;
      }

      setup() {
        const geometry = new THREE.PlaneGeometry(
          this.visibleWidthAtZDepth(100, this.camera),
          this.visibleHeightAtZDepth(100, this.camera)
        );
        const material = new THREE.MeshBasicMaterial({
          color: 0x00ff00,
          transparent: true,
        });
        this.planeArea = new THREE.Mesh(geometry, material);
        this.planeArea.visible = false;
        this.createText();
      }

      bindEvents() {
        document.addEventListener("mousedown", this.onMouseDown.bind(this));
        document.addEventListener("mousemove", this.onMouseMove.bind(this));
        document.addEventListener("mouseup", this.onMouseUp.bind(this));
      }

      onMouseDown(event) {
        const displayDiv = document.getElementById("display");
        this.mouse.x = (event.clientX / displayDiv.offsetWidth) * 2 - 1;
        this.mouse.y =
          -((event.clientY + scrollRef.current -80) / displayDiv.offsetHeight) * 2 +
          1;
        if (Math.abs(this.mouse.y) > 1) return;
        if (
          displayDiv &&
          (displayDiv === event.target || displayDiv.contains(event.target))
        ) {
        } else {
          return;
        }

        const vector = new THREE.Vector3(this.mouse.x, this.mouse.y, 0.5);
        vector.unproject(this.camera);
        const dir = vector.sub(this.camera.position).normalize();
        const distance = -this.camera.position.z / dir.z;
        this.currenPosition = this.camera.position
          .clone()
          .add(dir.multiplyScalar(distance));

        const pos = this.particles.geometry.attributes.position;
        this.buttom = true;
        this.data.ease = 0.01;
      }

      onMouseUp() {
        this.buttom = false;
        this.data.ease = 0.05;
      }

      onMouseMove(event) {
        const displayDiv = document.getElementById("display");
        this.mouse.x = (event.clientX / displayDiv.offsetWidth) * 2 - 1;
        this.mouse.y =
          -((event.clientY + scrollRef.current -80) / displayDiv.offsetHeight) * 2 +
          1;
        if (Math.abs(this.mouse.y) > 1) return;
        if (
          displayDiv &&
          (displayDiv === event.target || displayDiv.contains(event.target))
        ) {
        } else {
          return;
        }
      }

      render() {
        const time = ((0.001 * performance.now()) % 12) / 12;
        const zigzagTime = (1 + Math.sin(time * 2 * Math.PI)) / 6;

        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersects = this.raycaster.intersectObject(this.planeArea);
        if (intersects.length > 0) {
          const pos = this.particles.geometry.attributes.position;
          const copy = this.geometryCopy.attributes.position;
          const coulors = this.particles.geometry.attributes.customColor;
          const size = this.particles.geometry.attributes.size;

          const mx = intersects[0].point.x;
          const my = intersects[0].point.y;
          const mz = intersects[0].point.z;

          for (var i = 0, l = pos.count; i < l; i++) {
            const initX = copy.getX(i);
            const initY = copy.getY(i);
            const initZ = copy.getZ(i);

            let px = pos.getX(i);
            let py = pos.getY(i);
            let pz = pos.getZ(i);

            this.colorChange.setHSL(0.66, 1, 0.5);
            // console.log("this.colorChange uwvhi",this.colorChange)
            coulors.setXYZ(
              i,
              this.colorChange.r,
              this.colorChange.g,
              this.colorChange.b
            );
            coulors.needsUpdate = true;

            size.array[i] = this.data.particleSize;
            size.needsUpdate = true;

            let dx = mx - px;
            let dy = my - py;
            const dz = mz - pz;

            const mouseDistance = this.distance(mx, my, px, py);
            let d = (dx = mx - px) * dx + (dy = my - py) * dy;
            const f = -this.data.area / d;

            if (this.buttom) {
              const t = Math.atan2(dy, dx);
              px -= f * Math.cos(t);
              py -= f * Math.sin(t);
              this.colorChange.setHSL(0.5 + zigzagTime, 1.0, 0.5);
              coulors.setXYZ(
                i,
                this.colorChange.r,
                this.colorChange.g,
                this.colorChange.b
              );
              coulors.needsUpdate = true;

              if (
                px > initX + 70 ||
                px < initX - 70 ||
                py > initY + 70 ||
                py < initY - 70
              ) {
                this.colorChange.setHSL(0.66, 1.0, 0.7);
                // this.colorChange.setHSL(0.66, 1.0, 0.5); for particle colors

                coulors.setXYZ(
                  i,
                  this.colorChange.r,
                  this.colorChange.g,
                  this.colorChange.b
                );
                coulors.needsUpdate = true;
              }
            } else {
              if (mouseDistance < this.data.area) {
                if (i % 5 == 0) {
                  const t = Math.atan2(dy, dx);
                  px -= 0.03 * Math.cos(t);
                  py -= 0.03 * Math.sin(t);

                  this.colorChange.setHSL(0.75, 1.0, 0.5);
                  // this.colorChange.setHSL(0.15, 1.0, 0.5); for below text
                  coulors.setXYZ(
                    i,
                    this.colorChange.r,
                    this.colorChange.g,
                    this.colorChange.b
                  );
                  coulors.needsUpdate = true;

                  size.array[i] = this.data.particleSize / 1.2;
                  size.needsUpdate = true;
                } else {
                  const t = Math.atan2(dy, dx);
                  px += f * Math.cos(t);
                  py += f * Math.sin(t);

                  pos.setXYZ(i, px, py, pz);
                  pos.needsUpdate = true;

                  size.array[i] = this.data.particleSize * 1.3;
                  size.needsUpdate = true;
                }

                if (
                  px > initX + 10 ||
                  px < initX - 10 ||
                  py > initY + 10 ||
                  py < initY - 10
                ) {
                  this.colorChange.setHSL(0.75, 1.0, 0.5);
                  // this.colorChange.setHSL(0.15, 1.0, 0.5); for yellow bubble
                  coulors.setXYZ(
                    i,
                    this.colorChange.r,
                    this.colorChange.g,
                    this.colorChange.b
                  );
                  coulors.needsUpdate = true;

                  size.array[i] = this.data.particleSize / 1.8;
                  size.needsUpdate = true;
                }
              }
            }

            px += (initX - px) * this.data.ease;
            py += (initY - py) * this.data.ease;
            pz += (initZ - pz) * this.data.ease;

            pos.setXYZ(i, px, py, pz);
            pos.needsUpdate = true;
          }
        }
      }

      createText() {
        let thePoints = [];
        let shapes = this.font.generateShapes(
          this.data.text,
          this.data.textSize
        );
        let geometry = new THREE.ShapeGeometry(shapes);
        geometry.computeBoundingBox();

        const xMid =
          -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
        let yMid =
          (geometry.boundingBox.max.y - 30 - geometry.boundingBox.min.y) / 2.85;
        // if (window.innerWidth < 670) {
        //   console.log("wbvej")
        //   yMid = (geometry.boundingBox.max.y - geometry.boundingBox.min.y) / 2.85;
        // }

        geometry.center();

        let holeShapes = [];

        for (let q = 0; q < shapes.length; q++) {
          let shape = shapes[q];

          if (shape.holes && shape.holes.length > 0) {
            for (let j = 0; j < shape.holes.length; j++) {
              let hole = shape.holes[j];
              holeShapes.push(hole);
            }
          }
        }
        shapes.push.apply(shapes, holeShapes);

        let colors = [];
        let sizes = [];

        for (let x = 0; x < shapes.length; x++) {
          let shape = shapes[x];

          const amountPoints =
            shape.type == "Path" ? this.data.amount / 2 : this.data.amount;

          let points = shape.getSpacedPoints(amountPoints);
          points.forEach((element, z) => {
            const a = new THREE.Vector3(element.x, element.y, 0);
            thePoints.push(a);
            colors.push(
              this.colorChange.r,
              this.colorChange.g,
              this.colorChange.b
            );
            sizes.push(1);
          });
        }

        let geoParticles = new THREE.BufferGeometry().setFromPoints(thePoints);
        geoParticles.translate(xMid, yMid, 0);
        // console.log("colors",colors)
        geoParticles.setAttribute(
          "customColor",
          new THREE.Float32BufferAttribute(colors, 3)
        );
        // console.log()
        geoParticles.setAttribute(
          "size",
          new THREE.Float32BufferAttribute(sizes, 1)
        );

        const material = new THREE.ShaderMaterial({
          uniforms: {
            color: { value: new THREE.Color(0xffffff) },
            pointTexture: { value: this.particleImg },
          },
          vertexShader: `attribute float size;
            attribute vec3 customColor;
            varying vec3 vColor;
      
            void main() {
      
              vColor = customColor;
              vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
              gl_PointSize = size * ( 300.0 / -mvPosition.z );
              gl_Position = projectionMatrix * mvPosition;
      
            }`,
          fragmentShader: `uniform vec3 color;
              uniform sampler2D pointTexture;
        
              varying vec3 vColor;
        
              void main() {
        
                gl_FragColor = vec4( color * vColor, 1.0 );
                gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );
        
              }`,

          blending: THREE.AdditiveBlending,
          depthTest: false,
          transparent: true,
        });

        this.particles = new THREE.Points(geoParticles, material);
        this.scene.add(this.particles);

        this.geometryCopy = new THREE.BufferGeometry();
        this.geometryCopy.copy(this.particles.geometry);
      }

      visibleHeightAtZDepth(depth, camera) {
        const cameraOffset = camera.position.z;
        if (depth < cameraOffset) depth -= cameraOffset;
        else depth += cameraOffset;

        const vFOV = (camera.fov * Math.PI) / 180;

        return 2 * Math.tan(vFOV / 2) * Math.abs(depth);
      }

      visibleWidthAtZDepth(depth, camera) {
        const height = this.visibleHeightAtZDepth(depth, camera);
        // const displayDiv = document.getElementById("display");
        // const height = window.innerWidth
        return height * camera.aspect;
        // return window.innerWidth;
      }

      distance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
      }
    }
    displayRef.current.style.opacity=1;
    displayRef.current.style.transform="translateY(80px)";

  }, [text]);

  // const [typewriterIndex, setTypewriterIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (typewriterIndex <= "DefiForge".length) {
  //       setText("DefiForge".substring(0, typewriterIndex));
  //     } else {
  //       setText("Welcomes You".substring(0, typewriterIndex - "DefiForge".length));
  //     }

  //     setTypewriterIndex((prevIndex) => prevIndex + 1);

  //     if (typewriterIndex > "DefiForge".length + "Welcomes You".length) {
  //       clearInterval(interval);
  //       // Typewriter effect complete, you can perform additional actions here
  //     }
  //   }, 100); // Adjust the interval to control the typing speed

  //   // Clear the interval on component unmount or when the effect is no longer needed
  //   return () => clearInterval(interval);
  // }, [typewriterIndex]);

  return (
    <>
      <div
        id="display"
        ref={displayRef}
        className="w-screen h-screen -z-10"
      ></div>
    </>
  );
};

export default DefiForge;
