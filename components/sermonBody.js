import styled from 'styled-components'

const Article = styled.article`
    width:74vw;
    font-family:'Merriweather', serif;
    margin:2rem auto 2rem;
    padding-bottom:2rem;

    @media screen and (min-width:1024px) {
        width:50vw;
    }

    h2,
    h3 {
        width:100%;
    }

    h2 {
        margin:4rem 0 4rem;
        padding:2rem 0 2rem;
        border-bottom:thin dashed #6B7280;
        font-size:3rem;
        color:#6B7280;
    }
    
    h3 {
        margin:2rem 0 2rem;
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
        margin:4rem 0 4rem;
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
        width:100%;
        padding:1rem 0 1rem;

        li {
            margin:2rem 0 2rem;
            font-size:1.8rem;
            line-height:2.8rem;
            color:#6B7280;
        }
    }

    footer {
        margin:4rem 0 0 0;
        padding:4rem 0 0 0;
        border-top:thin solid #E5E7EB;
        font-family:'Montserrat', sans-serif;
        font-size:1.4rem;

        @media screen and (min-width:1024px) {
            margin:6rem 0 0 0;
            padding:6rem 0 4rem;
            font-size:1.4rem;
        }

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
            <footer>
                Fonte: <a href={props.reference} title={props.title} target="_blanck">{props.reference}</a>
            </footer>
        </Article>
        </>
    )
}