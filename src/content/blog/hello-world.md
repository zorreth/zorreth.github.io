---
title: 'Hello World'
description: 'The celebration of my new website launch and discussion of what I used to build it.'
pubDate: 2026-10-01
author: 'Kirill Siukhin'
---

Hi everyone, welcome to the new version of zorreth.com

The website has finally turned from the simple link shortener to a good-looking blog. It only has the necessary pages and features, and so far I think it's perfect for my needs. I only added a bit of a bio on the homepage at the moment, I probably have to add some more so I could really use the site as a portfolio.

## The Blog Stack

I wanted to try something new, so I tried [Astro](https://astro.build). I think it's one of the best choices for the **static content-driven websites**, which is exactly what I wanted my website to be. Astro outputs the simple **HTML/JS/CSS multi-page bundle**, which I host on GitHub Pages.

The blog is driven by **Astro content collections**:

- **Astro content collections** is this simple way to collect the (.md) files in a specified directory, parse them and access through the simple `getCollection()` function.
- Astro allows you to automatically generate HTML markup based on the .MD files. Moreover, you can add the necessary information inside a particular Markdown file, such as (post) title, description, publication date, author name, and any other needed data, which gets validated and parsed using Zod and can be retrieved by Astro's `getCollection()` function.

I also added `@astrojs/sitemap` for automatic sitemap generation. Everything is being generated **on build**, so the client always retrieves the fully generated page, asset or sitemap.

The `<n> minutes read` counter at the top of each post is being calculated on build using this simple function:

```ts
function calculateReadTime(text: string): number {
  return Math.ceil(text.replace(/\n+/g, ' ').split(' ').length / 200);
}
```

which takes the blog text, splits it into words, and divides the n of words by 200 (average WPM) to get the approximate reading time. Simple, but it works.

## Comments Section

I didn't want to use the comment services or build my own and self-host it for something as simple as blog comments, so I decided to use [utterances](https://utteranc.es) for now. It uses the **GitHub repository issues** to store comments, allowing users to post comments after logging in with their GitHub account. The thing works pretty good as I tested it, so I'll keep it for now and maybe move to something else later.

## Further Updates

I'd like to write web-development related posts, not sure yet how often. Stay tuned for updates, or subscribe to the new [RSS](/rss.xml) feed. Thanks for visiting!
