---
title: 'Introducing Cubean – A Speedcubing Timer Built with Passion'
description: "Meet Cubean – an online speedcubing timer and solve tracker built to help cubers track their progress, explore statistics, and share their achievements. Here's a look at the project, the technology behind it, and what's coming next."
pubDate: 2026-11-07
draft: false
---

I've been working on a project called Cubean, and I think it's finally time to properly introduce it.

Cubean started as an idea for a speedcubing timer, but it gradually evolved into something bigger: a platform where speedcubers can track their progress, analyze their results, customize their experience, and share their achievements with others.

In this post, I'd like to talk about what Cubean is, why I built it, what technologies power it, and where I want to take it in the future.

## What is Cubean?

<figure>
    <img alt="The Cubean interface" src="/assets/blog/introducing-cubean/cubean.png" />
    <figcaption>
        The Cubean interface
    </figcaption>
</figure>

Cubean is an online speedcubing timer and solve tracker designed to make practicing more convenient and enjoyable.

At its core, it provides everything you'd expect from a speedcubing timer:

- A keyboard or mouse-controlled timer.
- Automatic scramble generation.
- Support for multiple WCA puzzles.
- Solve history with penalties (+2 and DNF).
- Statistics, including averages and personal bests.
- Customizable timer settings.

But I didn't want to stop at simply making another timer.

I wanted Cubean to become a place where you can keep all your speedcubing progress in one place.

## More than just a timer

One of the things I wanted to introduce was a social aspect.

Cubean supports public user profiles where speedcubers can share their statistics and progress. Profiles include information about the user, solve statistics, and other details.

Users can also create custom puzzles, making it possible to track results for things beyond the standard WCA puzzle lineup.

I think there's something particularly interesting about being able to look back at your progress and see how much you've improved over time. That's one of the things I wanted Cubean to encourage.

## The technology behind it

As a full-stack developer, I also wanted Cubean to be an opportunity to work with technologies I enjoy and learn more about building and maintaining a real-world application.

Here's the current tech stack:

- Next.js — application framework and routing.
- React — user interface.
- TypeScript — type safety.
- Tailwind CSS — styling.
- Drizzle ORM — database queries and schema management.
- PostgreSQL — persistent data storage.
- Better Auth — authentication and OAuth integration.
- Zustand — client-side state management.
- Docker — containerization and deployment.

I also pay a lot of attention to project architecture. As the application grows, keeping things maintainable becomes increasingly important.

## Some engineering details

There are quite a few interesting details behind something that might initially look like a simple timer.

The timer itself has several states, including preparation, inspection, and running. It also needs to handle keyboard events reliably without accidentally triggering other interface elements.

Another interesting part is anonymous usage. I wanted people to be able to try Cubean immediately without creating an account first. Their solves can later be transferred to their account when they sign in.

Internationalization was another consideration from the beginning. Cubean currently supports English and Russian, with the intention of keeping the application accessible to a wider audience.

These are small details individually, but together they make the experience feel much more complete.

## What's next?

Cubean is still evolving, and I have plenty of ideas for its future.

Some of the things I'd like to work on include:

- More detailed statistics and progress tracking.
- Improvements to public profiles.
- Additional customization options.
- More social features.
- General performance and usability improvements.

I also want to keep improving the existing functionality rather than endlessly adding new features without polishing what's already there.

My current approach is to make each release bring something meaningful, whether that's a new feature, a usability improvement, or an important bug fix.

## Final thoughts

Building Cubean has been a great learning experience.

It's one thing to build a small application to experiment with a technology, but it's another to maintain a project that has authentication, a database, user-generated content, internationalization, and an actual deployment pipeline.

There are always things to improve, bugs to fix, and ideas to explore.

Most importantly, I want Cubean to be something that I would genuinely enjoy using myself.

If you're a speedcuber, I'd love for you to give it a try!

**Check it out: [https://cubean.net](https://cubean.net)**

And if you're a developer interested in the technical side of the project, I'll hopefully share more about its architecture and implementation in future posts.
