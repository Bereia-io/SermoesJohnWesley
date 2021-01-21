import Card from './card'

export default function MoreStories({ posts }) {
  return (
    <section>
      <div>
        {posts.map((post) => (
          <Card key={post.slug} title={post.title} date={post.date} slug={post.slug} verse={post.verse} />
        ))}
      </div>
    </section>
  )
}