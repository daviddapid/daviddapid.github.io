"use client";

import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TextHero } from "@/components/my/text-hero";

export default function Page() {
  return (
    <section id="hero">
      <h2 className="tracking-widest text-sm dark:text-gray-100">WELCOME TO MY WEBSITE</h2>
      <Spotlight
        className="top-[150px] left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Spotlight

        className="top-[0px] left-0  md:left-60 md:-top-20"
        fill="white"
      />
      <TextHero words="Hi I'm William, a Cat Lover based in Surabaya" />
    </section>
  );
}
