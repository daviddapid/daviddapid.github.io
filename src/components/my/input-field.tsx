"use client";
import { HTMLInputTypeAttribute } from "react";

export function InputField({
	name,
	type,
	label,
	value,
	onChange,
}: {
	name: string;
	type: HTMLInputTypeAttribute;
	label: string;
	value: string;
	onChange: (val: string) => void;
}) {
	return (
		<div className="mb-4 ">
			<label
				className="block uppercase text-sm tracking-wider text-neutral-500 dark:text-neutral-300 font-semibold"
				htmlFor={name}
			>
				{label}
			</label>
			<input
				value={value}
				onChange={(e) => onChange(e.target.value)}
				type={type}
				id={name}
				name={name}
				className="border-2 w-full border-neutral-200 rounded-lg px-2 py-2 focus:outline-none focus:border-blue-300 dark:bg-neutral-900 dark:border-none"
			/>
		</div>
	);
}
