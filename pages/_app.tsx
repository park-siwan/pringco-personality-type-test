import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { css } from '@emotion/react';
import { Analytics } from '@vercel/analytics/react';
declare global {
  interface Window {
    Kakao: any;
  }
}
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      //아이패드 때문에 1024px
      className='mx-auto min-h-screen w-full lg:max-w-lg px-7 pt-12'
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
      <Analytics />
    </div>
  );
}
