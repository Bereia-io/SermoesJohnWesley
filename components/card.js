import Link from 'next/link'

export default function Card({
  title,
  date,
  verse,
  slug,
}) {
  return (
    <div>
      <h3>
        <Link as={`/${slug}`} href="/[slug]">
          <a>{title}</a>
        </Link>
      </h3>
      <div>
        <p>{date}</p>
      </div>
      <p>{verse}</p>
    </div>
  )
}