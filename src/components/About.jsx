import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image bg-black flex items-center justify-center">
          <h2 className="special-font hero-heading text-white text-center leading-tight px-4">
            BUGBITE <br /> <b>GAME</b>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
