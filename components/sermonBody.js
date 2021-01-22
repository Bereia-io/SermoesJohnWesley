import styled from 'styled-components'
import ShareButtons from './ShareButtons'

const Article = styled.article`
    position:relative;
    width:90vw;
    font-family:'Merriweather', serif;
    margin:-5vh auto 2rem;
    padding:2rem;
    border-top-right-radius: 2rem;
    border-top-left-radius: 2rem;
    z-index:10;
    background:#ffffff;

    @media screen and (min-width:1024px) {
        width:50vw;
        margin:-10vh auto 2rem;
    }

    h2,
    h3 {
        width:90%;
        margin:0 auto;
    }

    h2 {
        padding:2rem 0 2rem;
        border-bottom:thin dashed #6B7280;
        font-size:3rem;
        color:#6B7280;
    }
    
    h3 {
        margin:2rem auto 2rem;
        padding:1rem 0 1rem;
        font-size:2.4rem;
    }

    blockquote p {
        width:100%;
        margin:4rem 0 4rem;
        padding:4rem 2rem 4rem 2rem;
        font-size:2.2rem;
        line-height:2.8rem;
        text-align:center;
        border-top:thin solid #E5E7EB;
        border-bottom:thin solid #E5E7EB;
    }

    p {
        width:90%;
        margin:4rem auto 4rem;
        font-size:1.8rem;
        color:#6B7280;
        line-height:2.6rem;

        strong:first-of-type {
            color:#B91C1C;
        }
    }

    ul {
        list-style:none;
    }

    ul, ol {
        width:90%;
        margin:0 auto;
        padding:1rem 0 1rem;

        li {
            margin:2rem 0 2rem;
            font-size:1.8rem;
            line-height:2.8rem;
            color:#6B7280;
        }
    }
`

const ArticleFooter = styled.footer`
    font-family:'Montserrat', sans-serif;
    font-size:1.4rem;

    @media screen and (min-width:1024px) {
        font-size:1.4rem;
    }

    section {
        width:100%;
        padding:2rem 0 0 0;
        
        a {
            color:#B91C1C;
        }
    }
`
export function Sermon(props) {
    return(
        <>
        <Article>
            <section dangerouslySetInnerHTML={{__html: props.html}} />
            <ArticleFooter>
                <section>
                    Fonte: <a href={props.reference} title={props.title} target="_blanck">{props.reference}</a>
                </section>
            </ArticleFooter>
            <ShareButtons url={props.slug} quote={props.verse} title={props.title}/>
        </Article>
        </>
    )
}