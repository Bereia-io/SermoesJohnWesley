import Head from 'next/head'
import More from '../components/more'
import { getAllPosts } from '../lib/api'

export default function Index({ allPosts }) {
  const morePosts = allPosts
  return (
    <>
        <Head>
          <title>Sermões de John Wesley | Projeto Bereia</title>
        </Head>

        <section>
        {morePosts.length > 0 && <More posts={morePosts} />}
        </section>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'verse',
    'location',
    'content'
  ])

  return {
    props: { allPosts },
  }
}