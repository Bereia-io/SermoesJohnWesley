import Head from 'next/head'
import {Header} from '../components/siteHeader'
import {Footer} from '../components/siteFooter'
import More from '../components/more'
import { getAllPosts } from '../lib/api'
import styled from 'styled-components'

const Feed = styled.main`
  width:80vw;
  height:auto;
  padding:2rem 0 4rem;
  margin:0 auto;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

export default function Index({ allPosts }) {
  const morePosts = allPosts
  return (
    <>
        <Head>
          <title>Sermões de John Wesley | Projeto Bereia</title>
        </Head>

        <Header title="Sermões de John Wesley" description='"Ponha fogo no seu sermão ou ponha seu sermão no fogo"'/>
        <Feed>
          {morePosts.length > 0 && <More posts={morePosts} />}
        </Feed>
        <Footer copyright="Um site do Projeto Bereia"/>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'number',
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