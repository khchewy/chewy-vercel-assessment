import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Chewy Vercel Technical Assessment</h1>
        <h2>From this list, rank your 5 most favourite and 5 least favourite support tasks. Provide a brief explanation for each.</h2>
        <h3>Favourite:</h3>
        <ol>
          <li>Act as a dedicated CSE for a handful of key customers to ensure their success using Vercel</li>
          <p>As an experienced support professional, one of the things that keeps me in support is the satisfaction of seeing a customer “get it” and to see them demonstrate their new-found knowledge as they grow in their familiarity and expertise with the platform. At Fullstory, I enjoy the opportunities to work with our returning customers and to see them further develop their skills along their journey with us. As a dedicated CSE at Vercel, I would value the chance to see key customers grow and to grow with them, developing a sense of trust and rapport between those users and support.</p>

        </ol>
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
