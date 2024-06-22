"use client";
export function TextField({
	name,
	label,
	value,
	onChange,
}: {
	name: string;
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
			<textarea
				id={name}
				name={name}
				minLength={5}
				maxLength={300}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className="border-2 h-[150px] w-full border-neutral-200 rounded-lg px-2 py-2 focus:outline-none focus:border-blue-300 dark:bg-neutral-900 dark:border-none"
			></textarea>
		</div>
	);
}
