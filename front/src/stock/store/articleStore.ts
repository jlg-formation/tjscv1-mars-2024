import { create } from 'zustand';
import { api } from '../api';
import { Article, NewArticle } from '../interfaces/Article';
import { sleep } from '../../utils';

export interface ArticleStore {
  articles: Article[] | undefined;
  refresh: () => Promise<void>;
  add: (newArticle: NewArticle) => Promise<void>;
  remove: (ids: string[]) => Promise<void>;
}

export const useArticleStore = create<ArticleStore>((set) => {
  const articles: Article[] | undefined = undefined;

  const refresh = async () => {
    await sleep(300);
    set({
      articles: await api.getArticles(),
    });
  };

  const add = async (newArticle: NewArticle) => {
    console.log('adding newArticle: ', newArticle);
    await api.add(newArticle);
    await refresh();
  };

  const remove = async (ids: string[]) => {
    console.log('remove articles with ids: ', ids);
    await api.remove(ids);
    await refresh();
  };

  return {
    articles,
    refresh,
    add,
    remove,
  };
});
