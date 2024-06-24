//=============================================================================
// Copyright (c) 2024 - W2Wizard
// See README in the root of this project for more information.
//=============================================================================
"use client";

import { FlickrItem } from "@/app/lib/types"
import React, { HTMLAttributes } from "react";

//=============================================================================

interface Props extends HTMLAttributes<HTMLElement> {
	post: FlickrItem;
}

//=============================================================================

const Post: React.FC<Props> = ({ post, ...rest }) => {
	const profileURL = `https://live.staticflickr.com/3708/buddyicons/${post.author_id}_r.jpg`;
	const userURL = `https://www.flickr.com/photos/${post.author_id}`;
	const daysAgo = Math.floor(
		(Date.now() - new Date(post.date_taken).getTime()) / 86400000
	);

	return (
		<div className="post transition">
			<a
				className="profile"
				href={post.link}
				target="_blank"
				rel="noopener noreferrer"
				{...rest}
			>
				<img
					className="transition"
					loading="lazy"
					src={post.media.m}
					alt={post.title}
				/>
			</a>
			<div hidden className="transition content">
				<a
					href={userURL}
					target="_blank"
					rel="noopener noreferrer"
					title="View profile"
				>
					<img
						width="32px"
						height="32px"
						className="profile"
						loading="lazy"
						onError={(e) => {
							(e.currentTarget as HTMLImageElement).src =
								"https://www.flickr.com/images/buddyicon.jpg";
						}}
						src={profileURL}
						alt={post.author}
					/>
				</a>
				<span>{post.title}</span>
				<small title={post.date_taken.toString()}>
					{daysAgo > 0 ? `${daysAgo} days ago` : "Today"}
				</small>
			</div>
		</div>
	);
};

export default Post;
