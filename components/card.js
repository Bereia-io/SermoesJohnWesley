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
  border:thin solid #E5E7EB;

  h1 {
    font-size:2rem;
    color:#374151;
    margin-bottom:2rem;
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
  date,
  verse,
  slug,
}) {
  return (
    <Link as={`/${slug}`} href="/[slug]">
      <PostCard>
        <h1>Sermão: {title}</h1>
        <h2>{verse}</h2>
        <span>Pregado no dia {date}</span>
      </PostCard>
    </Link>
  )
}