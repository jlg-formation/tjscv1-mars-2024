import { ReactNode, useEffect } from 'react';

export default function Title(props: { children: ReactNode }) {
  useEffect(() => {
    if (props.children === undefined) {
      return;
    }
    if (props.children === null) {
      return;
    }
    window.document.title = 'Gestion Stock : ' + props.children.toString();

    return () => {
      window.document.title = 'Gestion Stock';
    };
  });
  return <h1>{props.children}</h1>;
}
