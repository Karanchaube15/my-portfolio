import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";

export const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-left-16 -top-32 h-screen md:-left-24 md:-top-16"
          fill="cyan"
        />
        <Spotlight
          className="left-[72%] top-8 h-[80vh] w-[42vw]"
          fill="purple"
        />
        <Spotlight
          className="left-32 top-40 h-[70vh] w-[42vw]"
          fill="indigo"
        />
      </div>

      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.08] dark:bg-black-100 dark:bg-grid-white/[0.02]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_18%,black)] dark:bg-black-100" />
      </div>

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[90vw] flex-col items-center justify-center md:max-w-3xl lg:max-w-[68vw]">
          <h2 className="max-w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-center text-[10px] uppercase tracking-[0.35em] text-blue-100 backdrop-blur-sm md:text-xs">
            AR/VR • Full-Stack • Creative Tech
          </h2>

          <TextGenerateEffect
            className="hero-accent-text text-center text-[34px] font-bold leading-tight md:text-5xl lg:text-6xl"
            words="Building immersive digital products through XR, full-stack apps, and visual storytelling"
          />

          <p className="mb-6 mt-5 max-w-3xl text-center text-sm text-white-100 md:text-base md:tracking-wide lg:text-xl">
            I&apos;m {links.ownerName} — a BCA student focused on Unity XR,
            modern web development, and cinematic creative experiences that
            feel polished, purposeful, and memorable.
          </p>

          <Link href="#projects" className="md:mt-6">
            <MagicButton
              title="Explore my projects"
              icon={<FaLocationArrow />}
              position="right"
              asChild
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
