export interface PostMeta {
  slug: string;
  title: string;
  titleEn?: string;
  date: string;
  description: string;
  descriptionEn?: string;
  tags?: string[];
  coverImage?: string;
}

export interface PostWithContent extends PostMeta {
  content: string;
  readingTime: string;
}
