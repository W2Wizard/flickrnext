//=============================================================================
// Copyright (c) 2024 - W2Wizard
// See README in the root of this project for more information.
//=============================================================================
"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

//=============================================================================

export const SearchForm = () => {
	return (
		<form className="flex gap-2 flex-1" role="search">
			<Suspense>
				<Body />
			</Suspense>
		</form>
	);
};

const Body = () => {
	const searchParams = useSearchParams();
	const initialKeywords = searchParams.get("q") || "";
	const [keywords, setKeywords] = useState(initialKeywords);

	return (
		<>
			<input
				className="p-1 px-2 text-[var(--wui-foreground)] shadow-[var(--wui-box-shadow)] rounded-[var(--wui-radius)] border border-[var(--wui-border)] bg-[var(--wui-shade-01)] text-sm h-full flex-1 w-full md:w-auto outline-1 outline-offset-2 outline-[var(--wui-outline)] transition"
				name="q"
				title="Search for photos..."
				//type="search" // Text works too, this just adds an X button in some browsers
				vocab="keywords"
				value={keywords}
				placeholder="Search for photos..."
				onChange={(e) => setKeywords(e.currentTarget.value)}
			/>
			<button className="transition md:block hidden rounded-lg text-sm px-3 bg-[var(--wui-primary)] hover:bg-[var(--wui-secondary)]" type="submit">
				Search
			</button>
		</>
	);
};

//=============================================================================

export default SearchForm;
