import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='max-w-sm mx-auto px-3 pt-14'>
      <Component {...pageProps} />
    </div>
  );
}
