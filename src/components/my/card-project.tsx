"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { EyeIcon } from "lucide-react";

type props = { img: string; title: string; description: string; link?: string };

export function CardProject({ img, title, description, link }: props) {
	return (
		<div className="w-full rounded-xl relative overflow-hidden">
			<motion.div
				initial={{ opacity: 0 }}
				whileHover={{ opacity: 1 }}
				transition={{ ease: "easeInOut" }}
				className="bg-slate-800 z-10 bg-opacity-[0.5] backdrop-blur-[7px]  absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col "
			>
				<p className="text-xl font-bold ">{title}</p>
				<p>{description}</p>
				{link && (
					<a
						href={link}
						className="mt-5  border-white border px-3 py-2 flex gap-1"
					>
						see website <EyeIcon className="w-4" />
					</a>
				)}
			</motion.div>
			<Image
				src={img}
				alt={title}
				width={2000}
				height={2000}
				className="w-full h-full pointer-events-none"
			/>
		</div>
	);
}
