//=============================================================================
// Copyright (c) 2024 - W2Wizard
// See README in the root of this project for more information.
//=============================================================================
"use client";

import CSS from "./search.module.css";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

//=============================================================================

export const SearchForm = () => {
	return (
		<form className={CSS.form} role="search">
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
				className="wui"
				name="q"
				title="Search for photos..."
				type="search"
				vocab="keywords"
				value={keywords}
				placeholder="Search for photos..."
				onChange={(e) => setKeywords(e.currentTarget.value)}
			/>
			<button className="wui button transition" type="submit">
				Search
			</button>
		</>
	);
};

//=============================================================================

export default SearchForm;
