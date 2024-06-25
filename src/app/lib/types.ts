//=============================================================================
// Copyright (c) 2024 - W2Wizard
// See README in the root of this project for more information.
//=============================================================================

export interface FlickrFeedDto {
  title: string;
  link: string;
  description: string;
  modified: string;
  generator: string;
  items: FlickrItem[];
}

export interface FlickrItem {
  title: string;
  link: string;
  media: {
    m: string;
  };
  date_taken: Date;
  description: string;
  published: string;
  author: string;
  author_id: string;
  tags: string;
}
