export function TextField({ name, label }: { name: string; label: string }) {
	return (
		<div className="mb-4 ">
			<label
				className="block uppercase text-sm tracking-wider text-neutral-500 font-semibold"
				htmlFor={name}
			>
				{label}
			</label>
			<textarea
				id={name}
				name={name}
				minLength={5}
				maxLength={300}
				className="border-2 h-[150px] w-full border-neutral-200 rounded-lg px-2 py-2 focus:outline-none focus:border-blue-300 dark:bg-neutral-900 dark:border-none"
			></textarea>
		</div>
	);
}
