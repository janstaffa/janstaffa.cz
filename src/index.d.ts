export interface BlogData {
  meta: {
    title: string;
  };
  content: string;
}

export interface BlogPostMeta {
  id: number;
  urlName: string;
  title: string;
  description: string;
  date: string;
  thumbnail: string;
  tags: string[];
}

export interface BlogsList {
  blogs: BlogPostMeta[];
  tags: string[];
}
