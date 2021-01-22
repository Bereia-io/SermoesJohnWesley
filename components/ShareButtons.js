import styled from 'styled-components'
import { Facebook, Twitter, Whatsapp, Telegram} from 'styled-icons/boxicons-logos'

const Buttons = styled.section`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:6rem;
    padding:6rem 0 4rem;
    border-top:thin solid #E5E7EB;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px 10px;
    z-index:-10;

    button {
        width:100%;
        padding:1rem;
        border:none;
        border-radius:1rem;
        background-color:#E5E7EB;
        cursor: pointer;
    }
`

export default function ShareButtons(props) {
    return(
        <Buttons>
            <button class="button" data-sharer="facebook" data-title={`"${props.title} | Sermões John Wesley"`} data-url={props.url} data-hashtag="#sermoesjohnwesley">
                <Facebook title="Compartilhar sermão no Facebook" color='#4B5563' size="24" />
            </button>

            <button class="button" data-sharer="twitter" data-title={`"${props.title} | Sermões John Wesley"`} data-hashtags="sermoesjohnwesley,projetobereia" data-url={props.url}>
                <Twitter title="Compartilhar sermão no Twitter" color='#4B5563' size="24" />
            </button>

            <button class="button" data-sharer="telegram" data-title={`"${props.title} | Sermões John Wesley"`} data-url={props.url}>
                <Telegram title="Enviar sermão pelo Telegram" color='#4B5563' size="24" />
            </button>

            <button class="button" data-sharer="whatsapp" data-title={`"${props.title} | Sermões John Wesley"`} data-url={props.url}>
                <Whatsapp title="Enviar sermão pelo WhatsApp" color='#4B5563' size="24" />
            </button>
        </Buttons>
    )
}