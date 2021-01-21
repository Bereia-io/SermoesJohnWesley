import styled from 'styled-components'

const SiteFooter = styled.footer`
    width:100vw;
    height:auto;
    padding:6rem 4rem 6rem 4rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:#E5E7EB;

    strong {
        font-family:'Montserrat', sans-serif;
        font-size:1.2rem;
        color:#6B7280;
    }
`

export function Footer(props) {
    return(
        <SiteFooter>
            <strong>
                {props.copyright}
            </strong>
        </SiteFooter>
    )
}