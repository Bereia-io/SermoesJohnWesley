import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import Headroom from 'react-headroom'

const SiteNav = styled.nav`
    width:100vw;
    height:12vh;
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow:0 0 6px rgba(0,0,0,.2);
    background:#ffffff;

    a {
        cursor: pointer;
    }
`

export function Navigation() {
    return (
        <Headroom
            style={{
                transition: 'all .25s ease-in-out',
                zIndex:'900'
            }}
        >
            <SiteNav id="navigation">
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
        </Headroom>
    )
}