import { useRef, useEffect } from 'react';
import { VideoTexture, RepeatWrapping, TextureLoader } from 'three';
import { useGLTF } from '@react-three/drei';

export default function Model({ scale, position, rotation }) {
    const group = useRef();
    const { scene } = useGLTF('/prot.glb');

    useEffect(() => {
        // Create the first video (intro.mp4)
        const videoIntro = document.createElement('video');
        videoIntro.src = '/textures/intro.mp4';
        videoIntro.muted = true;
        videoIntro.play();

        const introTexture = new VideoTexture(videoIntro);
        introTexture.wrapT = RepeatWrapping;
        introTexture.wrapS = RepeatWrapping; // Add wrapS for horizontal flipping
        introTexture.repeat.set(-1, -1);

        // Create the second video (aot.mp4)
        const videoAot = document.createElement('video');
        videoAot.src = '/textures/aot.mp4';
        videoAot.loop = true;
        videoAot.muted = true;

        const aotTexture = new VideoTexture(videoAot);
        aotTexture.wrapT = RepeatWrapping;
        aotTexture.wrapS = RepeatWrapping; // Add wrapS for horizontal flipping
        aotTexture.repeat.set(-1, -1);

        // Image texture for Material.005
        const imgTxt = new TextureLoader().load('/textures/nice.png');

        // Apply textures
        scene.traverse((child) => {
            if (child.isMesh && child.material.name === 'Material.006') {
                child.material.map = introTexture; // Start with the intro video
                child.material.needsUpdate = true;
            }
            if (child.isMesh && child.material.name === 'Material.005') {
                child.material.map = imgTxt;
                child.material.needsUpdate = true;
            }
        });

        // Handle video transition from intro.mp4 to aot.mp4
        videoIntro.addEventListener('ended', () => {
            videoAot.play(); // Start playing the second video
            videoIntro.pause();
            videoIntro.remove();
            scene.traverse((child) => {
                if (child.isMesh && child.material.name === 'Material.006') {
                    child.material.map = aotTexture; // Switch to aot.mp4 texture
                    child.material.needsUpdate = true;
                }
            });
        });

        return () => {
            videoAot.pause();
            videoAot.remove();
        };
    }, [scene]);

    return (
        <primitive
            ref={group}
            object={scene}
            scale={scale}
            position={position}
            rotation={rotation}
        />
    );
}

useGLTF.preload('/prot.glb');


