import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';


export const siteTitle = 'Buuk';

export default function Layout({ children, home }: {children: React.ReactNode, home?: boolean}) {
  return (
    <div className={styles.container}>
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
      <header className={styles.header}>
        {home ? (
          <>
          
          <div className='relative w-screen h-64'>
            <Image              
              src="/images/Desktop.png"
              className='object-cover'                  
              alt=""
              fill
            />
            </div>
            
          </>
        ) : (
          <>
            <Link href="/">
            <div className='relative w-screen h-64'>
            <Image              
              src="/images/thiaguinho.jpg"
              className='object-cover'                  
              alt=""
              fill
            />
            </div>
            </Link>
           
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}