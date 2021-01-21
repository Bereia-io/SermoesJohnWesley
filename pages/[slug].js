import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
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
                <title>
                  {post.title} | Sermões de John Wesley
                </title>
              </Head>

            <article>
              <header>
                <h1>{post.title}</h1>
                <p>{post.location}</p>
                <p>{post.date}</p>
              </header>
              <section>
                {post.verse}
              </section>
              <section dangerouslySetInnerHTML={{__html: post.content}} />
            </article>
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