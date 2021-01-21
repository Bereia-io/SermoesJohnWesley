import styled from 'styled-components'

const HeroHeader = styled.header`
    margin-bottom:2rem;
    padding:4rem 2rem 4rem 2rem;
    width:100vw;
    height:70vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    background-color:#F9FAFB;

    @media screen and (min-width:1024px) {
        height:80vh;
    }

    h1, h2, div {
        font-family:'Montserrat', serif;

        @media screen and (min-width:1024px) {
            max-width:50vw;
        }
    }

    h1 {
        font-size:3rem;
        color:#374151;

        @media screen and (min-width:1024px) {
            font-size:4rem;
        }
    }

    h2 {
        margin-top:2rem;
        font-size:1.8rem;
        font-weight:400;
        line-height:1.8rem;
        color:#6B7280;

        @media screen and (min-width:1024px) {
            font-size:2rem;
            line-height:2.4rem;
        }
    }

    div {
        width:80vw;
        margin-top:2rem;
        padding-top:1.6rem;
        font-size:1.4rem;
        color:#6B7280;
        border-top:thin solid #E5E7EB;

        @media screen and (min-width:1024px) {
            margin-top:4rem;
            padding-top:4rem;
            font-size:1.6rem;
        }
    }
`

export function Header(props) {
    return (
        <HeroHeader>
            <h1>{props.title}</h1>
            <h2>{props.verse}</h2>
            <div>
                <p>Sermão pregado no dia {props.date} {props.location}</p>
            </div>
        </HeroHeader>
    )
}