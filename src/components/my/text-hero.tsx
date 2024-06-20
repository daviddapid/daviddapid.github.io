"use client";
import { useEffect, useState } from "react";
import { FlipWords } from "../ui/flip-words";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { motion } from "framer-motion";
import { ButtonBorder } from "./button-border";

export function TextHero() {
	const [show2, setShow2] = useState(false);
	const [show3, setShow3] = useState(false);
	const [show4, setShow4] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setShow2(true);
		}, 500);
		setTimeout(() => {
			setShow3(true);
		}, 1500);
		setTimeout(() => {
			setShow4(true);
		}, 2500);
	}, []);
	return (
		<div className="text-center">
			<motion.h1
				className="dark:text-gray-300"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
			>
				WELCOME TO MY WEBSITE
			</motion.h1>

			{show2 && <TextGenerateEffect words="Hi I'm David, a" />}
			{show3 && (
				<motion.h1>
					<FlipWords
						words={["Programmer", "Fullstack", "Cat Lover"]}
						className="text-5xl md:text-8xl text-yellow-500 dark:text-yellow-400 font-bold"
					/>
				</motion.h1>
			)}
			{show4 && (
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ bounce: 0.5, bounceDamping: 5, type: "spring" }}
				>
					<ButtonBorder text="Know More About Me" />
				</motion.div>
			)}
		</div>
	);
}
