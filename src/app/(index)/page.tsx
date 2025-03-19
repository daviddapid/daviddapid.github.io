import { Card } from "@/components/my/card";
import { CardProject } from "@/components/my/card-project";
import { Globe } from "@/components/my/globe";
import { MysqlIcon } from "@/components/my/icons/mysql-icon";
import { InputField } from "@/components/my/input-field";
import { LaravelIcon } from "@/components/my/icons/laravel-icon";
import { NextJsIcon } from "@/components/my/icons/nextjs-icon";
import { SertifCard, SertifCardComingSoon } from "@/components/my/sertif-card";
import { TextField } from "@/components/my/text-area-field";
import { TextHero } from "@/components/my/text-hero";
import { TextSection } from "@/components/my/text-section";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/button";
import { World } from "@/components/ui/globe";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";
import { GolangIcon } from "@/components/my/icons/golang-icon";
import { VueIcon } from "@/components/my/icons/vue-icon";
import { PostgreSql } from "@/components/my/icons/postgresql-icon";
import { NuxtIcon } from "@/components/my/icons/nuxt-icon";
import { ReactIcon } from "@/components/my/icons/react-icon";
import { FormEmail } from "@/components/my/form-email";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
export default function Page() {
	return (
		<>
			{/* GRID BG */}
			<div className="dark:bg-grid-white/[0.2] bg-grid-black/[0.2] absolute top-0 left-0 h-screen w-screen">
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			</div>

			{/* HERO SECTION */}
			<section id="hero" className="h-screen-navbar relative w-full">
				<Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

				<Spotlight fill="white" />
				<TextHero />
			</section>

			{/* SKILL */}
			<div className="mb-8 relative">
				<div className="h-full w-[19px] left-[-1rem] bg-red dark:bg-black absolute blur-[19px]"></div>
				<InfiniteMovingCards
					speed="normal"
					names={["laravel", "next js", "golang", "nuxt js", "vue js", "mysql", "postgresql"]}
				/>
				<InfiniteMovingCards
					direction="right"
					speed="normal"
					icons={[
						<LaravelIcon key={"laravel-icon"} />,
						<MysqlIcon key={"mysql-icon"} />,
						<NextJsIcon key={"nextjs-icon"} />,
						<GolangIcon key={"golang-icon"} />,
						<VueIcon key={"vue-icon"} />,
						<PostgreSql key={"postgre-icon"} />,
						<NuxtIcon key={"nuxt-icon"} />,
						<ReactIcon key={"react-icon"} />,
					]}
				/>
			</div>

			{/* EXPERIENCE SECTION */}
			<section id="experience" className="min-h-screen">
				<TextSection text="EXPERIENCE" />
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-3">
					<div className="md:col-span-2 md:row-span-2">
						<CardProject
							img="/jatimexpo.png"
							title="Jatim Expo Company Profile"
							description="website company profile Jatim Expo"
							link="https://www.jatimexpo.id/"
							key={"jatimexpo"}
						/>
					</div>
					<CardProject
						img="/desa digital.jpg"
						title="Desa Digital App"
						description="web app (PWA) sistem administrasi & e-commerce"
						// link="jatimexpo.id"
						key={"desa digital"}
					/>

					<CardProject
						img="/sampoerna.png"
						title="Sampoerna Academy"
						description="website company profile Sampoerna Academy"
						link="https://www.sampoernaacademy.sch.id/"
						key={"sampoernaacademy"}
					/>
					<CardProject
						img="/finstyle.jpg"
						title="FinStyle Mobile App"
						description="An app to Access your insurance and policies dashboard anytime"
						key={"finstyle"}
					/>

					<div className="md:col-span-2 md:row-span-2">
						<CardProject
							img="/undangan digital.jpg"
							title="Undangan Digital"
							description="sistem e-booking untuk pernikahan + scan QR"
							key={"sampoernaacademy"}
						/>
					</div>
					<CardProject
						img="/bank digital.jpg"
						title="BANK Digital"
						description="e-learning menabung IAIN Kudus"
						key={"hanefa"}
					/>
				</div>
				<div className="flex w-full justify-center mt-12">
					<Link href={"#contact"}>
						<HoverBorderGradient className="capitalize text-xl md:text-2xl">
							request a demo project
						</HoverBorderGradient>
					</Link>
				</div>
			</section>

			{/* SERTIFICATE */}
			<section id="sertificate" className="sertificates min-h-screen mt-24 md:mt-28">
				<TextSection text="MY SERTIFICATES" />
				<div className="grid grid-cols-1 gap-3 md:grid md:grid-cols-3 ">
					<SertifCard
						title="Juara 1 Liga SMK"
						desc="adalah lomba kompetitif programming tingkat nasional yang diadakan oleh SMK KODING"
						img={{ src: "/liga_smk.png", alt: "sertif juara 1 liga smk" }}
						href="smk-koding"
					/>
					<SertifCard
						title="Juara 1 Traspac Competition"
						desc="adalah lomba membuat sistem software tingkat nasional yang diadakan oleh PT.TRASPAC"
						img={{ src: "/traspac.png", alt: "sertif juara 1 traspac competition" }}
						href="traspac-competition"
					/>
					<SertifCardComingSoon />
				</div>
			</section>

			{/* CONTACT SECTION */}
			<section id="contact" className="min-h-screen mb-5 mt-24 md:mt-0">
				<TextSection text="GET IN TOUCH" />
				<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
					<Card className="bg-white shadow-md">
						<h1 className="text-2xl mb-5">Send Me Email</h1>
						<FormEmail />
					</Card>
					<div className="grid grid-cols-3 gap-2 w-full h-fit">
						<Card className="text-center">
							<a href="https://instagram.com/david.nexious">
								<Image
									src={"/ig_icon.png"}
									alt="instagram"
									className="w-[39px] mx-auto md:w-[70px]"
									width={1000}
									height={1000}
								/>
								<p className="hidden xl:block mt-3">@david.nexious</p>
							</a>
						</Card>
						<Card className="text-center">
							<a href="https://wa.me/628813573779">
								<Image
									src={"/whatsapp_icon.png"}
									alt="whatsapp"
									className="w-[39px] mx-auto md:w-[70px]"
									width={1000}
									height={1000}
								/>
								<p className="hidden xl:block mt-3">(+62) 8813573779</p>
							</a>
						</Card>
						<Card>
							<a href="mailto:daviddapid19@gmail.com">
								<Image
									src={"/gmail_icon.png"}
									alt="whatsapp"
									className="w-[39px] mx-auto md:w-[70px]"
									width={1000}
									height={1000}
								/>
								<p className="hidden xl:block mt-3 text-sm mx-[-10px] text-wrap">
									daviddapid19@gmail.com
								</p>
							</a>
						</Card>
					</div>
				</div>
			</section>
		</>
	);
}
