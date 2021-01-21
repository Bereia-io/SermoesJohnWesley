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
  justify-content:center;
  font-family:'Merriweather', serif;
  border:thin solid #E5E7EB;

  @media screen and (min-width:1024px) {
    width:30%;
    height:24rem;
    justify-content:flex-start;
    margin:0 1rem 0 1rem;
  }

  h1 {
    font-size:2rem;
    color:#374151;
    margin-bottom:2rem;

    strong {
      font-weight:900;
    }
  }
  h2 {
    font-size:1.4rem;
    color:#4B5563;
    margin-bottom:2rem;
  }
  span {
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