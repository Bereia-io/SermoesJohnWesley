import Image from 'next/image'
import styled from 'styled-components'

const SiteHeader = styled.header`
    position:relative;
    padding:4rem;
    width:100vw;
    height:70vh;
    margin-bottom:2rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    background:#E5E7EB;

    @media screen and (min-width:1024px) {
        height:80vh;
    }

    :before {
        position:absolute;
        content:'';
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,.8);
        z-index:1;
    }

    h1, h2 {
        font-family:'Montserrat', serif;
        z-index:10;
    }

    h1 {
        font-size:3rem;
        color:#F9FAFB;
    }

    h2 {
        margin-top:2rem;
        font-size:1.8rem;
        font-weight:400;
        font-style:italic;
        line-height:1.8rem;
        color:#F9FAFB;
    }

    img {
        position:absolute;
        width:100%;
        height:100%;
        top:0;
        left:0;
        z-index:0;
    }
`

export function Header(props) {
    return (
        <SiteHeader>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
            <p>{props.verse}</p>
            <Image
                src="/assets/images/header.webp"
                alt="John Wesley"
                layout="fill"
                objectFit="cover"
            />
        </SiteHeader>
    )
}