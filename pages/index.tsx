import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        {/* What is the ball you chose? */}
        <title>8BALL FRIENDS</title>
        <meta name='8 ball friends' content='성격 유형 검사 시작' />
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>

      <main>
        <h1 className={'text-3xl font-bold underline'}>
          What is the ball you chose?
        </h1>
        <div className='bg-slate-400 py-20 px-10 grid gap-10 min-h-screen'>
          <div className='bg-white p-10 rounded-3xl shadow-xl'>
            <span className='font-bold text-2xl'>Select Item</span>
            <div className='flex justify-between my-2'>
              <span className='text-gray-500'>Gray Chair</span>
              <span className='font-bold'>$19</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-500'>Gray Chair</span>
              <span className='font-bold'>$19</span>
            </div>
            <div className='flex justify-between mt-2 pt-2 border-t-2 border-dashed font-bold'>
              <span>Total</span>
              <span>$38</span>
            </div>

            <button
              className='flex justify-center w-2/4 mt-5 mx-auto bg-blue-500
              rounded-2xl p-3 text-white
              hover:bg-blue-400  active:bg-teal-500  disabled:bg-blue-200'
              type='button'
            >
              Checkout
            </button>
          </div>
        </div>
      </main>

      <footer>
        {/* <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  );
}
