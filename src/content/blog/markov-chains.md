---
title: 'Markov Chains: How I Built a Text Generation Bot'
description: 'How I made my Discord bot generate text based on messages from users using the Markov chains.'
pubDate: 2026-10-06
author: 'Kirill Siukhin'
---

**Hi everybody!**

A few years ago I created a funny Discord bot called [Cheburek](https://en.wikipedia.org/wiki/Chebureki). The only purpose of this bot was to send a randomly generated messages from time to time (or by a `/generate` command). Cheburek had it's own words database (basically just a `words.txt` file), and it was being populated in a real time with the messages that bot could access from a few Discord servers it was in.

## How it worked?

Every time user sent a message, Cheburek processed it like this:

```
Hi, @zorreth! How are you?
```

1. Split message by spaces and divide it into separate words:
   ```
   `['Hi,', '@zorreth!', 'How', 'are', 'you?']`
   ```
2. Iterate over the words, filter the mentions (`@everyone`, `@here`, and user/roles), URLs, and the words that doesn't contain letters:
   ```
   ['Hi,', 'How', 'are', 'you?']
   ```
3. Lower case all the letters:
   ```
   ['hi,', 'how', 'are', 'you?']
   ```
4. Append the words to a local `words` list (RAM), and to the end of `words.txt` file (persistent storage).

Every time user sent a `/generate` command, Cheburek took a random amount of words (I believe it was 2-8) from the list, and sent them together, combined in a "sentence".

## Markov Chains
