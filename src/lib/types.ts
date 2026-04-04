export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
  coverImage?: string;
}

export interface PostWithContent extends PostMeta {
  content: string;
  readingTime: string;
}
