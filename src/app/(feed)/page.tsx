//=============================================================================
// Copyright (c) 2024 - W2Wizard
// See README in the root of this project for more information.
//=============================================================================

import Post from "../components/post";
import { getFlickrFeed } from "../lib/api";

//=============================================================================

interface PageProps {
	searchParams: { [key: string]: string | string[] | undefined };
}

//=============================================================================

export default async function Page({ searchParams }: PageProps) {
	let keywords: string = "";

	if (typeof searchParams.q === "string") {
		keywords = searchParams.q;
	} else if (Array.isArray(searchParams.q)) {
		keywords = searchParams.q.join(" ");
	}

	const columnCount = 3;
	const feed = await getFlickrFeed(keywords);
	const itemsPerColumn = Math.ceil(feed.items.length / columnCount);

	if (feed.items.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center text-center min-h-screen">
				<span className="text-2xl">🤔</span>
				<b>Nothing found</b>
			</div>
		);
	}

	const columns = Array.from({ length: columnCount }, (_, i) => {
		const start = i * itemsPerColumn;
		const end = start + itemsPerColumn;
		const items = feed.items.slice(start, end);

		return (
			<div className="flex flex-col gap-4" key={i} id={`column-${i + 1}`}>
				{items.map((item, j) => (
					<Post key={j} post={item} />
				))}
			</div>
		);
	});

	return (
		<ul className="grid gap-4 p-4 rounded-[var(--wui-radius)] shadow-inner grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{columns}
		</ul>
	);
}
