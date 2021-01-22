import getConfig from "next/config";
import { useRouter } from 'next/router'
import {Navigation} from '../components/siteNav'
import {Header} from '../components/sermonHeader'
import {Sermon} from '../components/sermonBody'
import {Footer} from '../components/siteFooter'
import { getPostBySlug, getAllPosts } from '../lib/api'
import Head from 'next/head'
import markdownToHtml from '../lib/markdownToHtml'
const { publicRuntimeConfig } = getConfig();


export default function Post({ post, morePosts, preview }) {
  const router = useRouter()  
  const ogImage = `${publicRuntimeConfig.SITE_URL}/api/image-generator?title=${post.title}` + '&' + `number=${post.number}` + '&' +`description=${post.verse}`

  if (!router.isFallback && !post?.slug) {
    return <p>Não encontrado</p>
  }
  return (
    <>
        {router.isFallback ? (
          <title>Carregando...</title>
        ) : (
          <>
          <Head>
            <title>{post.title} | Sermões John Wesley</title>

            <meta name="title" content={`${post.title} | Sermões John Wesley`}/>
            <meta name="description" content={post.verse}/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content={`https://sermoesjohnwesley.com.br/${post.slug}`}/>
            <meta property="og:title" content={`${post.title} | Sermões John Wesley`}/>
            <meta property="og:description" content={post.verse}/>
            <meta property="og:image" content={`${ogImage}`}/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={`https://sermoesjohnwesley.com.br/${post.slug}`}/>
            <meta property="twitter:title" content={`${post.title} | Sermões John Wesley`}/>
            <meta property="twitter:description" content={post.verse}/>
            <meta property="twitter:image" content={`${ogImage}`}/>

            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Montserrat&display=swap" rel="stylesheet" />

            <script src="/assets/scripts/sharer.min.js" />
          </Head>
          <Navigation />
          <Header title={post.title} verse={post.verse} date={post.date} />
          <Sermon html={post.content} reference={post.reference} title={post.title} slug={`${publicRuntimeConfig.SITE_URL}/${post.slug}`}/>
          <Footer copyright="Um site do Projeto Bereia"/>
          </>
        )}
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'verse',
    'location',
    'reference',
    'content',
    'image',
    'number'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}