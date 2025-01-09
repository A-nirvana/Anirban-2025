import { Float, Html, PerspectiveCamera, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import Button from "../components/Button";
import HeroCam from "../components/HeroCam";
import { useMediaQuery } from "react-responsive";
import Model from "../components/VideoObj";
import AtomFrame from "../components/Atom";
import Rings from "../components/Rings";
import { calculateSizes } from "../constants/sizes";

const Hero = () => {

    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section id="hero" className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-20 mt-[4.5rem] c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-center text-white font-generalsans">
                    Hi, I am Anirban
                    <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Building ideas into reality</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                {/* <Leva /> */}
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <Stars saturation={0} count={400} speed={0.5} />
                        <HeroCam isMobile={isMobile}>
                            <Model
                                scale={sizes.deskScale}
                                position={sizes.deskPosition}
                                rotation={[0, -1.7, 0]}
                            />
                        </HeroCam>
                        <ambientLight intensity={1} />
                        <directionalLight intensity={1} position={[-1.9, -2, 5]} />
                        <AtomFrame position={sizes.reactLogoPosition} />
                        <Rings position={sizes.ringPosition} />
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    );
};
export default Hero;