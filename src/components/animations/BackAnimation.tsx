import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const BackAnimation: React.FC = () => {
  const wrapper = useRef<HTMLDivElement>(null);

  //constants

  //materials
  const coreMaterial = new THREE.MeshStandardMaterial({
    color: 0x7de2d1,
  });
  const createElectron = (x: number, y: number) => {
    const electron1Geometry = new THREE.SphereGeometry(2);

    const electron = new THREE.Mesh(electron1Geometry, coreMaterial);
    electron.position.x = x;
    electron.position.y = y;
    return electron;
  };
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
    renderer.setSize(window.innerWidth, window.innerHeight);
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

    //  const helper = new THREE.ArrowHelper();
    //  scene.add(helper);

    camera.position.z = 5;
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.005;
      sphere.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (wrapper.current) {
        wrapper.current.innerHTML = '';
      }
    };
  }, []);
  return <div className="absolute" ref={wrapper}></div>;
};
