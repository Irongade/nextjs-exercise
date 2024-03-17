export type Author = {
  name: string;
  avatar_url: string;
};

export type Post = {
  published_at: string;
  heading: string;
  body: string;
  summary: string;
  slug: string;
  locale: string;
  children: any[];
  featured: boolean;
  i18n_pages: string[][];
  tag: { id: number; name: string };
  hero_image_url: string;
  author: Author;
};

export type PostResponse = {
  pages: Post[];
};
