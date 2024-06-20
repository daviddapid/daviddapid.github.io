import { CardProject } from "@/components/my/card-project";
import { Globe } from "@/components/my/globe";
import { SertifCard, SertifCardComingSoon } from "@/components/my/sertif-card";
import { TextHero } from "@/components/my/text-hero";
import { TextSection } from "@/components/my/text-section";
import { Spotlight } from "@/components/ui/Spotlight";
import { World } from "@/components/ui/globe";
import Image from "next/image";
export default function Page() {
	return (
		<>
			<section
				id="hero"
				className="h-screen-navbar relative w-full"
			>
				<Spotlight
					className="-top-40 left-0 md:left-60 md:-top-20"
					fill="white"
				/>

				<Spotlight fill="white" />
				<TextHero />
			</section>
			<section
				id="projects"
				className="h-screen"
			>
				<TextSection text="PROJECTS" />
				<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
					<div className="md:col-span-2 md:row-span-2">
						<CardProject
							img="/jatimexpo.png"
							title="Jatim Expo Company Profile"
							description="website company profile Jatim Expo"
							link="jatimexpo.id"
						/>
					</div>
					<CardProject
						img="/jatimexpo.png"
						title="Jatim Expo Company Profile"
						description="website company profile Jatim Expo"
						link="jatimexpo.id"
					/>
					<CardProject
						img="/jatimexpo.png"
						title="Jatim Expo Company Profile"
						description="website company profile Jatim Expo"
						link="jatimexpo.id"
					/>
				</div>
			</section>
			<section className="sertificates h-screen">
				<TextSection text="MY SERTIFICATES" />
				<div className="grid grid-cols-1 gap-3 md:grid md:grid-cols-3 ">
					<SertifCard
						title="Juara 1 Liga SMK"
						desc="adalah lomba kompetitif programming tingkat nasional yang diadakan oleh SMK KODING"
						img={{ src: "/liga_smk.png", alt: "sertif juara 1 liga smk" }}
					/>
					<SertifCard
						title="Juara 1 Traspac Competition"
						desc="adalah lomba membuat sistem software tingkat nasional yang diadakan oleh PT.TRASPAC"
						img={{ src: "/traspac.png", alt: "sertif juara 1 traspac competition" }}
					/>
					<SertifCardComingSoon />
				</div>
			</section>
		</>
	);
}
