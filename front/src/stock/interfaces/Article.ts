import { New } from './utils';

export interface Article {
  id: string;
  name: string;
  price: number;
  qty: number;
}

export type NewArticle = New<Article>;
