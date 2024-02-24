import React from 'react'
import { AiFillInstagram,AiFillFacebook,AiFillLinkedin } from "react-icons/ai";

const BlogDetails = () => {
  return (
    <main className="nk-pages">
         <section className="section has-mask">
          <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh"></div>
          <div className="container">
            <div className="section-content">
              <div className="row g-gs justify-content-center">
                <div className="col-xxl-8 col-xl-9 col-lg-10">
                  <div className="text-center">
                    <h6 className="overline-title text-primary">WebWizards</h6>
                    <h1 className="title">Advantages and disadvantages of Next.js</h1>
                    <ul className="list list-row gx-2">
                      <li>
                        <div className="sub-text fs-5">
                         19 Dec 2024
                        </div>
                      </li>
                      <li>
                        <em className="icon mx-0 ni ni-dot"></em>
                      </li>
                      <li>
                        <div className="sub-text fs-5">
                          avg read :20
                          min
                        </div>
                      </li>
                    </ul>
                    <div className="my-5">
                      <img
                        className="rounded-4 w-100"
                        src="https://nextjs.org/static/blog/next-13-4/twitter-card.png"
                        alt="thumbnail"
                      
                      />
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="block-typo">
                      <div
                       
                      />
                      Developing a website should be a freeing experience.

Freedom to pick whatever framework you want to use, if you utilize high-code.

Within Fathym’s composable frontend architecture, you can use any JavaScript framework (and even some others) to build one aspect of your website. And then, if you wish, use a different framework, or a combination of high-code, low-code and no-code builders.

Brilliant, right? Right.

So, in the spirit of spreading the composable frontends – which you can use with Fathym’s new UI – we take a look at one of the newer frameworks out there in Next.js.

Next.js popularity
We dug into StackOverflow’s developer survey for 2022, in which they named the most popular frameworks out there.

While Svelte was No. 1 in 2021, it was overtaken by Phoenix Framework and we saw many other newcomers to the list, including Next.js.

Surprisingly, Next.js was the fifth-most popular framework to use in 2022 for frontend development, even landing higher than React in sixth place. So, clearly people are loving what Next provides.

Image description

Framework popularity is important for multiple reasons.

First, if you and your team are working on a long-term, big-time project, you want to make sure the framework you’re using is going to be around throughout the entirety of the process. Imagine starting an important website build and the framework suddenly falls off the face of the planet, that’d be a nightmare.

Next, that popularity guarantees more developers know how to use that particular framework. If your first developer leaves, you should be able to fill their spot with another team member. Or, in the case of our modular frontends, you may want multiple team members on the same team who know that same framework. They can collaborate and help one another build something special.

And if your company expands, you will be able to find new developers who use that popular framework.

Let’s take a look at what it is, what it does and the positives/negatives of Next.js.

What is Next.js?
Next.js was developed by Guillermo Rauch, the CEO of Vercel, in 2016 and it’s currently in version 12.2, releasing in late June, 2022. And Next.js is actually written on top of Node.js, so it requires you have Node.js to use with Node Package Manager (npm).

One of the features of Next.js is the way it renders on the server side and client side, otherwise known as “universal apps.” That’s crucial for the single page applications (SPAs) it builds, and how it helps those SPAs have much-improved success in terms of SEO (search engine optimization).

As SEO expert Barry Adams explains:

“What happens when you use React without server-side rendering is that the crawler halts on the very first page because it can’t see any hyperlinks to follow. It sends the page to the indexer, which then has to render the page and extracts the hyperlinks, which will then be added to the crawler’s queue. Then the crawler will eventually crawl the next set of pages, and again will stop there because all the links are invisible until the JavaScript is rendered. So it has to wait for the indexer to come back with a new set of URLs to crawl,” Adams explained in a Medium article.

In the simplest of terms: SEO is crucial for anyone with a website who wants it to be discovered through Google search, and Next.js helps immensely with exactly that. SPAs are great because they are fast, flexible and adaptable. But a major SPA downside is, because they are mostly client-side rendered, when Google’s crawler looks for data, they can’t find any until they are rendered on the server side, too.

Next.js renders on both the client and server side: Some or all of the website is rendered on the server side so Google’s crawler can find the information (URL, meta tags and content etc.) and therefore put it into search results.

“Server-side rendering (SSR) is a popular technique for rendering a normally client-side only single page app (SPA) on the server and then sending a fully rendered page to the client,” as explained by geeksforgeeks.org..

In order to help with load times and to break up code into smaller chunks, Next.js does perform automatic code splitting for the developer.

For marketing people, the improved SEO is wonderful. For business owners, a faster time to market for websites and apps is made possible thanks to many premade components inside Next.js. Also, because Next.js helps make static sites, there’s improved security; there’s no connection to the database or the user’s data either.

Advantages and disadvantages of Next.js
Other positives with Next.js are:

Excellent performance in terms of load times

Load times helped with “lazy loading” and automatic code splitting

Tons of support for developers

Fantastic user-experience

Faster time to market

Great SEO

Negatives of Next.js are

Some developers find it too opinionated

Multiple developers complain about how Next.js does routing, others champion it

Conclusion
Have you tried Next.js?

Well, you can on the Fathym Platform today for free!

If you have, maybe you want to evaluate Next.js alongside other frameworks like React, Angular or Svelte.

Or, build an app with Next.js for one route – maybe your homepage – and then use no-code tools alongside it for another route – a blog, perhaps? The options are limitless for developers, so choose your own journey today.
                    </div>
                    <ul className="btn-list gy-3 ps-xl-6 ps-lg-4 ps-3">
                      <li>
                        <a className="link-secondary" href="https://www.facebook.com/profile.php?id=100089147380867">
                          <em className="icon fs-3 ni">
                          <AiFillFacebook />
                          </em>
                        </a>
                      </li>
                      <li>
                        <a className="link-secondary" href="https://instagram.com/_webs_wizard_?igshid=OGQ5ZDc2ODk2ZA==">
                          <em className="icon fs-3 ni ">
                            <AiFillInstagram />
                          </em>
                        </a>
                      </li>
                      <li>
                        <a className="link-secondary" href="https://www.linkedin.com/in/webs-wizards/">
                          <em className="icon fs-3 ni">
                          <AiFillLinkedin />
                          </em>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}

export default BlogDetails