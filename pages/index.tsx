import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData 
}: {
  allPostsData: {
    date: string
    title: string
    id: string
    description: string
    type: string
    time: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <br/>
        <h1 className='text-center text-4xl'>Confira as últimas novidades</h1>
        
        <p className='text-xs text-gray-600 text-center'>
        Conteúdo premium para estimular 
        <br/>
        o seu interesse pelo que fazemos.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className='px-6 py-4'>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title , description }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
              <br />
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="/images/thiaguinho.jpg" alt="Sunset in the mountains"></img>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                  {title}
                  </div>
                  <div className='text-gray-700 text-base'>
                    {description}
                  </div>
                  <p className="text-gray-700 text-base text-right">
                  {date}
                  </p>
                </div>
              </div>
              </Link>
            </li>
          ))}
        </ul>
        </div>
      </section>
    </Layout>
  );
}