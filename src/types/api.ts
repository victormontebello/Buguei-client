export interface Post {
  _id: string;
  title: string;
  content: string; 
  description: string;
  author: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface News {
  _id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  url: string;
  urlToImage: string;
}