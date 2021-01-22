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

    img {
        width:150px;
    }

    strong {
        font-family:'Montserrat', sans-serif;
        font-size:1.2rem;
        color:#6B7280;
    }
`

export function Footer(props) {
    return(
        <SiteFooter>
            <Link href="/">
                <Image
                    src="/assets/logos/site-logo_v1.svg"
                    alt="Sermões John Wesley"
                    width={300}
                    height={100}
                />
            </Link>
            <strong>
                {props.copyright}
            </strong>
        </SiteFooter>
    )
}