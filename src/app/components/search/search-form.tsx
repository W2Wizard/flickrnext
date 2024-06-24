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
		<form role="search">
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
				value={keywords}
				onChange={(e) => setKeywords(e.currentTarget.value)}
			/>
			<button className="wui button" type="submit">
				Reload
			</button>
		</>
	);
};

//=============================================================================

export default SearchForm;
