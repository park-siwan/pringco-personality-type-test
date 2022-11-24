import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { css } from '@emotion/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className='max-w-sm mx-auto h-screen bg-gradient-to-b'
      css={css`
        background: linear-gradient(
          180deg,
          #d9d9d9 0%,
          #4d9dc7 0.01%,
          #bccb4c 35.94%,
          #d59054 68.23%,
          #cd4d7f 100%
        );
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      `}
    >
      <Component {...pageProps} />
    </div>
  );
}
