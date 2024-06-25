//=============================================================================
// Copyright (c) 2024 - W2Wizard
// See README in the root of this project for more information.
//=============================================================================

import { type FlickrFeedDto } from "./types";

//=============================================================================

/**
 * Fetches the Flickr feed for the given keywords.
 * @param keywords The keywords to search for
 * @returns The Flickr feed
 */
export async function getFlickrFeed(keywords: string) {
	const params = new URLSearchParams({
		format: "json",
		nojsoncallback: "1", // Undocumented, but actually returns json.
		tagmode: "any", // or "all"
		tags: `[${keywords.split(" ")}]`,
		lang: "en-us", // This is kinda useless.
	});

	// Delay of 5 secs, debug
	//await new Promise((resolve) => setTimeout(resolve, 20000));

	const url = `https://www.flickr.com/services/feeds/photos_public.gne?${params}`;
	const response = await fetch(url, { signal: AbortSignal.timeout(5000) });
	return (await response.json()) as FlickrFeedDto;
}
