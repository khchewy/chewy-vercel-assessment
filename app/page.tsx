import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Chewy Vercel Technical Assessment
      </h1>
      
      <p className="mb-4">
        {`I'm a Support Engineer at Fullstory who is passionate about helping others grow.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
