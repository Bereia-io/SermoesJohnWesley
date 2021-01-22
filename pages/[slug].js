import { useRouter } from 'next/router'
import {Navigation} from '../components/siteNav'
import {Header} from '../components/sermonHeader'
import {Sermon} from '../components/sermonBody'
import {Footer} from '../components/siteFooter'
import { getPostBySlug, getAllPosts } from '../lib/api'
import Head from 'next/head'
import markdownToHtml from '../lib/markdownToHtml'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
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
          </Head>
          <Navigation />
          <Header title={post.title} verse={post.verse} date={post.date} />
          <Sermon html={post.content} reference={post.reference} title={post.title} />
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