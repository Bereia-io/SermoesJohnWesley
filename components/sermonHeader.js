import Image from 'next/image'
import styled from 'styled-components'

const SermonHeader = styled.header`
    position:relative;
    margin-bottom:2rem;
    padding:4rem 2rem 4rem 2rem;
    width:100vw;
    height:80vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    background-color:#F9FAFB;

    @media screen and (min-width:1024px) {
        height:95vh;
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

    h1, h2, p {
        position:relative;
        font-family:'Merriweather', serif;
        z-index:2;

        @media screen and (min-width:1024px) {
            max-width:50vw;
        }
    }

    h1 {
        font-size:3rem;
        color:#F9FAFB;

        @media screen and (min-width:1024px) {
            font-size:4rem;
        }
    }

    h2 {
        margin-top:2rem;
        font-size:1.8rem;
        font-weight:400;
        line-height:1.8rem;
        color:#F3F4F6;

        @media screen and (min-width:1024px) {
            font-size:2rem;
            line-height:2.4rem;
        }
    }

    p {
        width:80vw;
        margin-top:2rem;
        padding-top:1.6rem;
        font-size:1.4rem;
        color:#E5E7EB;
        border-top:thin solid #6B7280;

        @media screen and (min-width:1024px) {
            margin-top:4rem;
            padding-top:4rem;
            font-size:1.6rem;
        }
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
        <SermonHeader>
            <h1>{props.title}</h1>
            <h2>{props.verse}</h2>
            <p>Sermão pregado no dia {props.date} {props.location}</p>
            
            <Image
                src="/assets/images/header.webp"
                alt="John Wesley"
                layout="fill"
                objectFit="cover"
            />
        </SermonHeader>
    )
}