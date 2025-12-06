import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useRef } from "react";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

// Configuration constants (Single Responsibility Principle)
const BG_VIDEO_SRC = "videos/hero-1.mp4";
const ANIMATION_DURATION = 0.8;
const STAGGER_DELAY = 0.15;

const Hero = () => {
  // Animation refs
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const brandRef = useRef(null);

  // helper to split text into spans for character-level animations
  const splitToSpans = (text, className = "") =>
    text.split("").map((ch, i) => (
      <span className={className} key={`${className}-${i}`}>
        {ch === " " ? "\u00A0" : ch}
      </span>
    ));

  // Scroll animation for clip-path
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  // Text entrance animations (distinct animations per text element)
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { duration: ANIMATION_DURATION, ease: "power2.out" } });

    // Heading letters: staggered flipping in
    const headingLetters = headingRef.current?.querySelectorAll(".letter") || [];
    tl.from(headingLetters, {
      opacity: 0,
      y: 40,
      rotationX: -18,
      scale: 0.96,
      stagger: 0.05,
      duration: 0.5,
    }, 0);

    // Description chars: slide up with slight skew, longer stagger for "typewriter" feel
    const descChars = descriptionRef.current?.querySelectorAll(".desc-char") || [];
    tl.from(descChars, {
      opacity: 0,
      x: -10,
      skewX: 6,
      stagger: 0.02,
      duration: 0.35,
    }, STAGGER_DELAY);

    // Button: pop in with elastic effect
    tl.from(buttonRef.current, {
      opacity: 0,
      scale: 0.92,
      ease: "back.out(1.4)",
      duration: 0.7,
    }, STAGGER_DELAY * 2);

    // Brand mark: rotate & float
    tl.from(brandRef.current, { opacity: 0, y: 8, scale: 0.94, rotationZ: -6, duration: 0.6 }, STAGGER_DELAY * 1.5);
    gsap.to(brandRef.current, { y: -12, duration: 2.8, repeat: -1, yoyo: true, ease: "sine.inOut" });

    return () => tl.kill();
  });

  // Letter animation on heading hover
  const handleHeadingHover = (color) => {
    const letters = headingRef.current?.querySelectorAll(".letter");
    if (letters) {
      gsap.to(letters, {
        color: color || "#FFD700",
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out",
      });
    }
  };

  const handleHeadingHoverEnd = () => {
    const letters = headingRef.current?.querySelectorAll(".letter");
    if (letters) {
      gsap.to(letters, {
        color: "#E1E8F0",
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out",
      });
    }
  };

  // Button hover
  const handleButtonHover = () => {
    if (buttonRef.current) gsap.to(buttonRef.current, { scale: .98, duration: 0.16, ease: "power2.out" });
  };

  const handleButtonHoverEnd = () => {
    if (buttonRef.current) gsap.to(buttonRef.current, { scale: 1, duration: 0.16, ease: "power2.out" });
  };

  // Brand hover
  const handleBrandHover = () => {
    if (brandRef.current) gsap.to(brandRef.current, { scale: 1.06, textShadow: "0 10px 30px rgba(120,30,200,0.25)", duration: 0.22 });
  };

  const handleBrandHoverEnd = () => {
    if (brandRef.current) gsap.to(brandRef.current, { scale: 1, textShadow: "none", duration: 0.22 });
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        {/* Single background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-0 top-0 size-full object-cover object-center"
          aria-hidden="true"
          style={{ filter: "brightness(0.62) contrast(1.04)" }}
        >
          <source src={BG_VIDEO_SRC} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark shadow overlay */}
        <div
          id="video-dark-overlay"
          aria-hidden="true"
          style={{ 
            background: "linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.3))",
            pointerEvents: "none"
          }}
          className="absolute inset-0 z-20"
        />

        {/* Content overlay */}
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            {/* Animated heading with letter animation */}
            <h1
              ref={headingRef}
              className="special-font hero-heading text-blue-100 cursor-pointer transition-colors"
              onMouseEnter={() => handleHeadingHover("#FFD600")}
              onMouseLeave={handleHeadingHoverEnd}
            >
              <span className="letter">r</span>
              <span className="letter">e</span>
              <span className="letter">d</span>
              <span className="letter">e</span>
              <span className="letter">f</span>
              <span className="letter">i</span>
              <b className="letter">n</b>
              <span className="letter">e</span>
            </h1>

            {/* Animated description */}
            <p ref={descriptionRef} className="mb-5 max-w-64 font-robert-regular text-blue-100">
              {splitToSpans("Enter the Metagame Layer", "desc-char")}<br />
              {splitToSpans("Unleash the Play Economy", "desc-char")}
            </p>

            {/* Animated button */}
            <div ref={buttonRef} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonHoverEnd}>
              <Button
                id="watch-trailer"
                title="Watch trailer"
                leftIcon={<TiLocationArrow />}
                containerClass="bg-yellow-300 flex-center gap-1"
              />
            </div>
          </div>
        </div>

        {/* Animated brand mark */}
        <h1
          ref={brandRef}
          className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75"
          onMouseEnter={handleBrandHover}
          onMouseLeave={handleBrandHoverEnd}
        >
          G<b>A</b>MING
        </h1>
      </div>
    </div>
  );
};

export default Hero;
