import Head from 'next/head';
import Image from 'next/image';

export const siteTitle = 'WeatherGO';

export default function Layout({ children }) {
  return (
    <div className='bg-opacity-40 bg-gray-600'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className='absolute inset-0 -z-10'>
        <Image
          src={'/images/background-sunrise.jpg'}
          layout='fill'
          objectFit='cover'
          quality={100} />
      </div>
      <main className='flex flex-col h-screen'>
        {children}
        <footer className='flex justify-center p-2 bg-opacity-60 bg-gray-600'>
          <p className='text-white'><small>Powered by: NextJS, Tailwindcss</small></p>
        </footer>
      </main>
    </div>
  );
}