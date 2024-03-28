import { create } from 'zustand';
import { Article, NewArticle } from '../interfaces/Article';

export interface ArticleStore {
  articles: Article[] | undefined;
  refresh: () => void;
  add: (newArticle: NewArticle) => void;
  remove: (ids: string[]) => void;
}

export const useArticleStore = create<ArticleStore>((set) => {
  const articles: Article[] | undefined = undefined;

  const refresh = () => {
    set({
      articles: [
        { id: 'a1', name: 'Tournevis', price: 2.34, qty: 123 },
        { id: 'a2', name: 'Pelle', price: 3.56, qty: 67 },
      ],
    });
  };

  const add = (newArticle: NewArticle) => {
    console.log('adding newArticle: ', newArticle);
    const article = { ...newArticle, id: window.crypto.randomUUID() };
    console.log('article: ', article);
  };

  const remove = (ids: string[]) => {
    console.log('remove articles with ids: ', ids);
  };

  return {
    articles,
    refresh,
    add,
    remove,
  };
});
