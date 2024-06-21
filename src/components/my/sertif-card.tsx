"use client";

import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { EvervaultCard, Icon } from "../ui/evervault-card";
import Link from "next/link";
import { EyeIcon } from "lucide-react";

type prop = {
	title: string;
	desc: string;
	img: {
		src: string;
		alt: string;
	};
	href: string;
};
export function SertifCard({ title, desc, img, href }: prop) {
	return (
		<CardContainer className="inter-var w-full h-full">
			<CardBody className="h-full bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-6 border  ">
				<CardItem
					translateZ="120"
					className="text-xl font-bold text-neutral-600 dark:text-white"
				>
					{title}
				</CardItem>
				<CardItem
					as="p"
					translateZ="100"
					className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
				>
					{desc}
				</CardItem>
				<CardItem
					translateZ="120"
					className="w-full mt-4"
				>
					<Image
						src={img.src}
						alt={img.alt}
						width={2000}
						height={2000}
					/>
				</CardItem>
				<CardItem
					translateZ="90"
					className="w-full mt-4"
				>
					<Link
						href={href}
						className="w-full border-slate-300 dark:border-slate-700 flex justify-center items-center gap-3 border py-2 text-center"
					>
						Lihat Detail
						<EyeIcon className="w-[18px]" />
					</Link>
				</CardItem>
			</CardBody>
		</CardContainer>
	);
}
export function SertifCardComingSoon() {
	return (
		<div className="  flex items-center justify-center h-full w-full">
			<div className=" h-full w-full border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative">
				<Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
				<Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
				<Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
				<Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

				<EvervaultCard
					text="Soon"
					className="text-xl"
				/>
			</div>
		</div>
	);
}
