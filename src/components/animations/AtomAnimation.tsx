import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const AtomAnimation: React.FC = () => {
  const wrapper = useRef<HTMLDivElement>(null);

  //constants
  const electronRadius = 0.15;
  const electronOpacity = 0.8;
  const coreOpacity = 0.9;

  //materials
  const electronMaterial = new THREE.MeshStandardMaterial({
    color: 0x339989,
    opacity: electronOpacity,
    transparent: true,
  });
  const coreMaterial = new THREE.MeshStandardMaterial({
    color: 0x7de2d1,
    opacity: coreOpacity,
    transparent: true,
  });
  const ringMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000,
    side: THREE.DoubleSide,
  });

  const createElectron = (x: number, y: number) => {
    const electron1Geometry = new THREE.SphereGeometry(electronRadius);

    const electron = new THREE.Mesh(electron1Geometry, electronMaterial);
    electron.position.x = x;
    electron.position.y = y;
    return electron;
  };
  const getXYOnCircle = (r: number, ang: number): [number, number] => {
    const x = r * Math.sin((Math.PI * 2 * ang) / 360);
    const y = r * Math.cos((Math.PI * 2 * ang) / 360);
    return [x, y];
  };
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1 / 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
    renderer.setSize(700, 700);
    wrapper.current?.appendChild(renderer.domElement);

    //lights
    const light = new THREE.AmbientLight(0xffffff, 0.15);
    light.position.set(1, 1, 0); //default; light shining from top
    scene.add(light);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(1, 2, 0);
    dirLight.castShadow = true; // default false
    scene.add(dirLight);

    //sphere
    const sphereGeometry = new THREE.SphereGeometry(0.6);
    const sphere = new THREE.Mesh(sphereGeometry, coreMaterial);
    sphere.castShadow = true; //default is false
    sphere.receiveShadow = false; //default
    scene.add(sphere);

    //rings
    const group1 = new THREE.Group();
    {
      const radius = 2.5;
      const ringGeometry = new THREE.TorusGeometry(radius, 0.02, 32, 128);
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);

      group1.add(ring);
      for (let i = 0; i < 4; i++) {
        group1.add(createElectron(...getXYOnCircle(radius, i * 90)));
      }
    }
    scene.add(group1);

    const group2 = new THREE.Group();
    {
      const radius = 2;
      const ringGeometry = new THREE.TorusGeometry(radius, 0.02, 32, 128);
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);

      group2.add(ring);
      for (let i = 0; i < 18; i++) {
        group2.add(createElectron(...getXYOnCircle(radius, i * 20)));
      }
    }
    scene.add(group2);

    const group3 = new THREE.Group();
    {
      const radius = 1.5;
      const ringGeometry = new THREE.TorusGeometry(radius, 0.02, 32, 128);
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);

      group3.add(ring);
      for (let i = 0; i < 8; i++) {
        group3.add(createElectron(...getXYOnCircle(radius, i * 45)));
      }
    }

    scene.add(group3);

    const group4 = new THREE.Group();
    {
      const radius = 1;
      const ringGeometry = new THREE.TorusGeometry(radius, 0.02, 32, 128);
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      group4.add(ring);

      for (let i = 0; i < 2; i++) {
        group4.add(createElectron(...getXYOnCircle(radius, i * 180)));
      }
    }
    scene.add(group4);

    //  const helper = new THREE.ArrowHelper();
    //  scene.add(helper);

    camera.position.z = 5;
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.005;
      sphere.rotation.y += 0.005;
      group1.rotation.x += 0.01;
      group1.rotation.y += 0.01;
      group2.rotation.x += 0.005;
      group2.rotation.y += 0.005;
      group3.rotation.x += 0.01;
      group3.rotation.x += 0.01;
      group4.rotation.y += 0.005;
      group4.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (wrapper.current) {
        wrapper.current.innerHTML = '';
      }
    };
  }, []);
  return (
    <div
      className="animation-wrap z-0 flex flex-col justify-center items-center w-full h-full fade-in"
      ref={wrapper}
    ></div>
  );
};
