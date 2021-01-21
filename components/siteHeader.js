import styled from 'styled-components'

const HeroHeader = styled.header`
    margin-bottom:2rem;
    padding:4rem;
    width:100vw;
    height:60vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    background:#E5E7EB;

    h1, h2 {
        font-family:'Montserrat', serif;
    }

    h1 {
        font-size:3rem;
        color:#374151;
    }

    h2 {
        margin-top:2rem;
        font-size:1.8rem;
        font-weight:400;
        font-style:italic;
        line-height:1.8rem;
        color:#6B7280;
    }
`

export function Header(props) {
    return (
        <HeroHeader>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
            <p>{props.verse}</p>
        </HeroHeader>
    )
}