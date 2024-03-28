import { create } from 'zustand';
import { api } from '../api';
import { Article, NewArticle } from '../interfaces/Article';

export interface ArticleStore {
  articles: Article[] | undefined;
  refresh: () => Promise<void>;
  add: (newArticle: NewArticle) => Promise<void>;
  remove: (ids: string[]) => Promise<void>;
}

export const useArticleStore = create<ArticleStore>((set) => {
  const articles: Article[] | undefined = undefined;

  const refresh = async () => {
    set({
      articles: await api.getArticles(),
    });
  };

  const add = async (newArticle: NewArticle) => {
    console.log('adding newArticle: ', newArticle);
    const article = { ...newArticle, id: window.crypto.randomUUID() };
    console.log('article: ', article);
  };

  const remove = async (ids: string[]) => {
    console.log('remove articles with ids: ', ids);
  };

  return {
    articles,
    refresh,
    add,
    remove,
  };
});
