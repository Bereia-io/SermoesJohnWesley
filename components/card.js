import Link from 'next/link'
import styled from 'styled-components'

const PostCard = styled.a`
  width:100%;
  height:auto;
  margin:1rem 0 1rem;
  padding:4rem 2rem 4rem 2rem;
  border-radius:1rem;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  font-family:'Merriweather', serif;
  border:thin solid #E5E7EB;
  cursor: pointer;
  transition:.2s ease-out;
  background-color:#ffffff;

  :hover {
    box-shadow:0 0 10px rgba(0,0,0,.2);
    transition:.2s ease-in;
  }

  @media screen and (min-width:1024px) {
    height:24rem;
    justify-content:flex-start;
    margin:0 1rem 0 1rem;
  }

  h1 {
    width:90%;
    font-size:2rem;
    color:#374151;
    margin-bottom:2rem;

    strong {
      font-weight:900;
    }
  }
  h2 {
    width:90%;
    font-size:1.4rem;
    color:#4B5563;
    margin-bottom:2rem;
  }
  span {
    width:90%;
    font-size:1.4rem;
    color:#6B7280;
  }
`

export default function Card({
  title,
  number,
  date,
  verse,
  slug,
}) {
  return (
    <Link as={`/${slug}`} href="/[slug]">
      <PostCard>
        <h1><strong>Sermão {number}:</strong> {title}</h1>
        <h2>{verse}</h2>
        <span>Pregado no dia {date}</span>
      </PostCard>
    </Link>
  )
}