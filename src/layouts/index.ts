import dynamic from 'next/dynamic';

export const dynamicComponents = {
  AuthorLayout: dynamic(() => import('./AuthorLayout')),
  ListLayout: dynamic(() => import('./ListLayout')),
  PostLayout: dynamic(() => import('./PostLayout')),
  PostSimple: dynamic(() => import('./PostSimple')),
};
