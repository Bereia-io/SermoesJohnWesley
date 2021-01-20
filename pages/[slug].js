import Head from 'next/head'
// import { useRouter } from 'next/router'
import data from '../data/sermons.json'

export async function getStaticProps({params}) {
    const currentPath = params.slug
    const sermon = data.sermons.find(sermon => sermon.path === currentPath) || {
        notFound: true
    }

    return {
        props: {
            sermon
        },
        revalidate: 60
    }
}

export async function getStaticPaths() {
    const paths = data.sermons.map(sermon => {
        const slug = sermon.path
        return {
            params: {
                slug: slug.toString(),
            }
        };
    });

    return {
        paths, 
        fallback: true
    };
}

const Page = ({sermon}) => {
    if (!sermon) {
        // fix Next bug while building
        // "Error occurred prerendering page "/[...slug]". Read more: https://err.sh/next.js/prerender-error"
        // https://github.com/vercel/next.js/issues/12846
        return null;
    }
    return (
        <>
            <Head>
            <title>{sermon.title} | Sermões de John Wesley</title>
            </Head>
            <h1>{sermon.title}</h1>
            <h2>{sermon.location}</h2>
            <h2>Sermão pregado no dia: {sermon.date}</h2>
            {sermon.content.map(content => 
                <section dangerouslySetInnerHTML={{__html: content.outline}}></section>
            )}
            {sermon.content.map(content => 
                <section dangerouslySetInnerHTML={{__html: content.verse}}></section>
            )}
            {sermon.content.map(content => 
                <section dangerouslySetInnerHTML={{__html: content.body}}></section>
            )}
        </>
    );
}

export default Page