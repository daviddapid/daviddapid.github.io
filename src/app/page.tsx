import { ButtonBorder } from "@/components/my/button-border";
import { SertifCard, SertifCardComingSoon } from "@/components/my/sertif-card";
import { TextHero } from "@/components/my/text-hero";
import { Spotlight } from "@/components/ui/Spotlight";
export default function Page() {
  return (
    <>
      <section id="hero" className="h-screen-navbar relative w-full">

        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <Spotlight
          fill="white"
        />
        <TextHero />
      </section>
      <section className="skills h-screen" >
        <h1 className="text-3xl text-center md:text-start md:text-4xl mb-8 font-semibold">MY SERTIFICATES</h1>
        <div className="grid grid-cols-1 gap-3 md:grid md:grid-cols-3 ">
          <SertifCard title="Juara 1 Liga SMK" desc="adalah lomba kompetitif programming tingkat nasional yang diadakan oleh SMK KODING" img={{ src: '/liga_smk.png', alt: 'sertif juara 1 liga smk' }} />
          <SertifCard title="Juara 1 Traspac Competition" desc="adalah lomba membuat sistem software tingkat nasional yang diadakan oleh PT.TRASPAC" img={{ src: '/traspac.png', alt: 'sertif juara 1 traspac competition' }} />
          <SertifCardComingSoon />
        </div>
      </section>
    </>
  )
}
