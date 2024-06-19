import { ButtonBorder } from "@/components/my/button-border";
import { TextHero } from "@/components/my/text-hero";
import { Spotlight } from "@/components/ui/Spotlight";
export default function Page() {
  return (
    <div id="hero" className="h-screen-navbar relative w-full">

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <Spotlight
        fill="white"
      />
      <TextHero />

    </div>
  )
}
