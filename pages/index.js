import getConfig from "next/config";
import Head from 'next/head'
import {Navigation} from '../components/siteNav'
import {Header} from '../components/siteHeader'
import {Footer} from '../components/siteFooter'
import More from '../components/more'
import { getAllPosts } from '../lib/api'
import styled from 'styled-components'

const Feed = styled.main`
  position:relative;
  width:80vw;
  height:auto;
  margin:-10vh auto 0;
  padding:2rem 0 4rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  z-index:10;

  @media screen and (min-width:1024px) {
    padding:0 0 4rem 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px 10px;
  }
`

export default function Index({ allPosts }) {
  const morePosts = allPosts
  const { publicRuntimeConfig } = getConfig();
  const ogImage = `${publicRuntimeConfig.SITE_URL}/api/image-generator?title=Sermões de John Wesley` + '&' +`description="Ponha fogo no seu sermão ou ponha seu sermão no fogo"`
  return (
    <>
        <Head>
          <title>Sermões de John Wesley | Projeto Bereia</title>
          
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Montserrat&display=swap" rel="stylesheet" />

          <meta name="theme-color" content="#B91C1C" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#B91C1C" />

          <meta property="og:type" content="website"/>
          <meta property="og:url" content={`https://sermoesjohnwesley.com.br/`}/>
          <meta property="og:title" content={`Sermões de John Wesley | Projeto Bereia`}/>
          <meta property="og:description" content='"Ponha fogo no seu sermão ou ponha seu sermão no fogo" | Leia todos os sermões de John Wesley'/>
          <meta property="og:image" content={`${ogImage}`}/>

          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content={`https://sermoesjohnwesley.com.br/`}/>
          <meta property="twitter:title" content={`Sermões de John Wesley | Projeto Bereia`}/>
          <meta property="twitter:description" content='"Ponha fogo no seu sermão ou ponha seu sermão no fogo" | Leia todos os sermões de John Wesley'/>
          <meta property="twitter:image" content={`${ogImage}`}/>
          
          {/* <Analytics /> */}
        </Head>

        <Navigation />

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