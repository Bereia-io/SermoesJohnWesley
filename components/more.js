import Card from './card'

export default function MoreStories({ posts }) {
  return (
    <>
        {posts.map((post) => (
          <Card key={post.slug} title={post.title} date={post.date} slug={post.slug} verse={post.verse} number={post.number}/>
        ))}
    </>
  )
}