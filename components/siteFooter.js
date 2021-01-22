import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const SiteFooter = styled.footer`
    width:100vw;
    height:auto;
    padding:4rem 0 4rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:#E5E7EB;

    a {
        cursor: pointer;
    }

    p {
        max-width:70vw;
        font-family:'Montserrat', sans-serif;
        font-size:1.2rem;
        font-weight:600;
        line-height:1.8rem;
        color:#6B7280;
        text-align:center;
        margin:1rem 0 1rem;
    }
`

export function Footer(props) {
    return(
        <SiteFooter>
            <Link href="/">
                <a>
                <Image
                    src="/assets/logos/site-logo_v1.svg"
                    alt="Sermões John Wesley"
                    width={150}
                    height={50}
                />
                </a>
            </Link>
                <p>O projeto Sermões de John Wesley é uma iniciativa independente, open source e sem fins lucrativos cujo objetivo é disponibilizar de forma fácil, simples e intuitiva todos os sermões pregados por Wesley.</p>
                <p><strong>{props.copyright}</strong></p>
        </SiteFooter>
    )
}