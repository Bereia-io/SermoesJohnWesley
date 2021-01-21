import styled from 'styled-components'

const Header = styled.header``
const Body = styled.article``
const Verse = styled.section``
const Outline = styled.section``
const Content = styled.section``

export function SermonHeader(props) {
    return (
        <Header>
            <h1>{props.title}</h1>
            <h2>{props.date}</h2>
        </Header>
    );
}

export function SermonBody(props) {
    return(
        <>
        <Body>
            <Verse dangerouslySetInnerHTML={{__html: props.verse}}/>
            <Outline dangerouslySetInnerHTML={{__html: props.outline}}/>
            <Content dangerouslySetInnerHTML={{__html: props.body}}/>
        </Body>
        </>
    )
}