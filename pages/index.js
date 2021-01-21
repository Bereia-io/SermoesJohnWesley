import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import styled from 'styled-components'

export default function Index({ allPosts }) {
  
  return (
    <>
        <Head>
          <title>Sermões de John Wesley</title>
        </Head>

        <header>
        </header>

        <section>
        {/* <ul>
          {props.posts.map(post => (
            <li key={post.id}>{post.title}</li>
            ))}
          </ul> */}
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
    'outline',
    'content'
  ])

  return {
    props: { allPosts },
  }
}