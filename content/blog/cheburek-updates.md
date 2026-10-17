---
title: 'Major Updates on Cheburek'
description: 'The new features for my text generation bot Cheburek.'
pubDate: 2026-10-15
draft: true
---

A few days ago I made [this post](../markov-chains) about my "new" Discord bot called Cheburek.

In a nutshell, I built a bot that could divide messages into "words" (better - tokens), and store them using **Markov chains**. Then, a bot could create a random sequence of these tokens, using historical word usage data to create more predictible and meaningful text.

As Cheburek "learns" new words and word connections, it can make a funny messages, while preserving the server's internal jokes and messaging style.

Cheburek just got a huge update, so here's the post about it.

## The core library

I made a dedicated library for Cheburek called [cheburek-core](https://github.com/cheburek-bot/cheburek-core). It is available on [PyPI](https://pypi.org/project/cheburek-core/) (though I really need to write a better documentation for it).

The core library has all the features that Cheburek has – Markov chain implementation, meme generation, storage, and more.

## Telegram bot

Using the shared `cheburek-core` library, I made a [Telegram bot](https://t.me/ChebruekBot) Cheburek implementation.

## Better CI/CD

I added more GitHub workflows to test, build and publish Cheburek packages. It can build and publish both `cheburek-core` PyPI library, and bot images to run them using Docker.

<figure>
    <img alt="The cheburek schema" src="/assets/blog/cheburek-updates/cheburek-schema.png" />
    <figcaption>
        The cheburek schema
    </figcaption>
</figure>
