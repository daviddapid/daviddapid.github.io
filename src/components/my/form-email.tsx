"use client";

import { InputField } from "@/components/my/input-field";
import { TextField } from "@/components/my/text-area-field";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function FormEmail() {
	const [subject, setSubject] = useState("");
	const [body, setBody] = useState("");
	const { push } = useRouter();

	function handleSubmit() {
		push(`mailto:daviddapid19@gmail.com?subject=${subject}&body=${body}`);
	}

	return (
		<form
			action="mailto:daviddapid19@gmail.com"
			onSubmit={handleSubmit}
		>
			<InputField
				label="name"
				type="text"
				name="subject"
				value={subject}
				onChange={(e) => setSubject(e)}
			/>
			<TextField
				label="what can i help u?"
				name="body"
				value={body}
				onChange={(val) => setBody(val)}
			/>
			<Button
				className="px-5"
				type="submit"
			>
				Send
			</Button>
		</form>
	);
}
