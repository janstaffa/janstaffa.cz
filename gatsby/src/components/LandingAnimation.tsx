import React, { useRef } from 'react';
import * as THREE from 'three';
export const LandingAnimation: React.FC = () => {
  const wrapper = useRef<HTMLDivElement>();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1 / 1, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  wrapper.current.appendChild(renderer.domElement);
  return <div ref={wrapper}></div>;
};
