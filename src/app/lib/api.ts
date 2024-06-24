import { FlickrFeedDto } from "./types";

/**
 * Fetches the Flickr feed for the given keywords.
 * @param keywords The keywords to search for
 * @returns The Flickr feed
 */
export async function getFlickrFeed(keywords: string) {
	console.log("KEYWORD", keywords);

	const params = new URLSearchParams({
		format: "json",
		nojsoncallback: "1",
		tagmode: "any",
		tags: `[${keywords.split(" ")}]`,
		lang: "en-us",
	});

	// Delay of 5 secs
	//await new Promise((resolve) => setTimeout(resolve, 20000));

	const url = `https://www.flickr.com/services/feeds/photos_public.gne?${params}`;
	const response = await fetch(url, { signal: AbortSignal.timeout(5000) });
	return (await response.json()) as FlickrFeedDto;
}
