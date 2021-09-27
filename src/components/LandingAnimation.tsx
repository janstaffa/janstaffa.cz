import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const LandingAnimation: React.FC = () => {
  const wrapper = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1 / 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
    renderer.setSize(500, 500);
    wrapper.current?.appendChild(renderer.domElement);

    //Create a DirectionalLight and turn on shadows for the light
    const light = new THREE.AmbientLight(0xffffff, 0.1);
    light.position.set(1, 1, 0); //default; light shining from top
    light.castShadow = true; // default false
    scene.add(light);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(1, 1, 0);
    dirLight.castShadow = true; // default false
    scene.add(dirLight);
    const sphereGeometry = new THREE.SphereGeometry();
    const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xdddddd });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.castShadow = true; //default is false
    sphere.receiveShadow = false; //default
    scene.add(sphere);

    //  const helper = new THREE.CameraHelper(light.shadow.camera);
    //  scene.add(helper);

    camera.position.z = 5;
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.005;
      sphere.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();
  }, []);
  return (
    <div
      className="flex flex-col justify-center items-center w-1/2"
      ref={wrapper}
    ></div>
  );
};
