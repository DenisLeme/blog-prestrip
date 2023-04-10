import Layout from '../../components/layout';
import Date from '../../components/date';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
import { GetStaticProps, GetStaticPaths } from 'next'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData 
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
    description: string
    type: string
    name: string
    time: string
  }
}) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article >
          <div className='w-screen'>
          <h1 className='text-center text-4xl p-4 pt-4'>{postData.title}</h1>
          <div className='w-32'>
            <p className='text-center text-xs text-gray-600 w-screen mb-5'>{postData.description}</p>
          </div>
          <div className='mx-40' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>
        </article>
      </Layout>
    );
  }