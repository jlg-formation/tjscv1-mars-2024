import { ReactNode } from 'react';

function Main(props: { children: ReactNode }) {
  return (
    <main className="max-sm mx-auto flex w-full max-w-4xl grow flex-col items-center gap-2 p-2 ">
      {props.children}
    </main>
  );
}

export default Main;
