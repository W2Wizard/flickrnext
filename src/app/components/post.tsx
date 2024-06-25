//=============================================================================
// Copyright (c) 2024 - W2Wizard
// See README in the root of this project for more information.
//=============================================================================
"use client";

import { FlickrItem } from "@/app/lib/types";
import React, { HTMLAttributes } from "react";

//=============================================================================

interface Props extends HTMLAttributes<HTMLElement> {
	post: FlickrItem;
}

//=============================================================================

const Post = ({ post }: Props) => {
	const fallbackURL = "https://www.flickr.com/images/buddyicon.jpg";
	const profileURL = `https://live.staticflickr.com/3708/buddyicons/${post.author_id}_r.jpg`;
	const userURL = `https://www.flickr.com/photos/${post.author_id}`;
	const daysAgo = Math.floor(
		// 86400000 = 24 * 60 * 60 * 1000 = total milliseconds in a day
		(Date.now() - new Date(post.date_taken).getTime()) / 86400000
	);

	return (
		<article className="group/main relative cursor-pointer rounded-lg transition hover:shadow-lg hover:scale-[1.015] text-white">
			<a
				href={post.link}
				target="_blank"
				className="wui-outline"
				rel="noopener noreferrer"
			>
				<img
					className="w-full object-cover transition"
					loading="lazy"
					src={post.media.m}
					alt={post.title}
				/>
			</a>
			<div className="absolute bottom-0 left-0 z-10 flex w-full items-center gap-2 p-2 opacity-0 transition-opacity backdrop-blur-sm rounded-lg group-focus-within/main:opacity-100 group-hover/main:opacity-100 bg-[#80808040]">
				<a
					href={userURL}
					target="_blank"
					rel="noopener noreferrer"
					title="View profile"
					className="group/info outline-none"
				>
					<img
						width="32px"
						height="32px"
						tabIndex={-1}
						// Apply outline here to make it rounded
						className="rounded-full outline-none group-focus-within/info:wui-outline group-focus-within/info:opacity-100"
						loading="lazy"
						onError={(e) => (e.currentTarget.src = fallbackURL)}
						src={profileURL}
						alt={post.author}
					/>
				</a>
				<span className="flex-1">{post.title}</span>
				<small
					title={post.date_taken.toString()}
					className="text-xs min-w-[32px] "
				>
					{daysAgo > 0 ? `${daysAgo} days ago` : "Today"}
				</small>
			</div>
		</article>
	);
};

export default Post;
