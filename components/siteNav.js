import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const SiteNav = styled.nav`
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:12vh;
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow:0 0 6px rgba(0,0,0,.2);
    background:#ffffff;
    z-index:900;

    a {
        cursor: pointer;
    }
`

export function Navigation() {
    return (
        <SiteNav>
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
        </SiteNav>
    )
}