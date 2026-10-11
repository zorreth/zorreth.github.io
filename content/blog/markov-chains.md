---
title: 'Markov Chains: How I Built a Text Generation Bot'
description: 'How I made my Discord bot generate sensible text based on messages sent by users.'
pubDate: 2026-10-10
---

A few years ago, I built a fun little Discord bot called [Cheburek](https://en.wikipedia.org/wiki/Chebureki). Its only purpose was to send randomly generated messages from time to time, either automatically or when someone used a `/generate` command. Cheburek maintained its own word database (essentially a `words.txt` file), which was populated in real time with messages the bot could access on the Discord servers it had joined.

## The simplest text generator

Every time a user sent a message, Cheburek processed it like this:

_Let's say someone sent this message:_

```
Hi, @zorreth! How are you?
```

_Here's what Cheburek did:_

1. Split the message into words using spaces as delimiters:
   ```
   `['Hi,', '@zorreth!', 'How', 'are', 'you?']`
   ```
2. Filter out mentions, URLs, and words that don't contain any letters:
   ```
   ['Hi,', 'How', 'are', 'you?']
   ```
3. Convert the remaining words to lowercase, add them to a local in-memory wordlist, and append them to `words.txt` for persistent storage.

Words are saved! Now, whenever someone used the `/generate` command, Cheburek picked a random number of words from the list, and combined them in a "sentence". Of course, the final message was very chaotic, and the chances of generating something funny message were pretty low, that's why I really wanted to make Cheburek's messages more coherent, while keeping the idea of storing words from other people.

<figure>
    <img alt="The cheburek responses" src="/assets/blog/markov-chains/cheburek-old.png" />
    <figcaption>
        The original Cheburek responses (random word combinations)
    </figcaption>
</figure>

## What are Markov chains?

A [Markov chain](https://en.wikipedia.org/wiki/Markov_chain) is a mathematical model that describes how a system moves between different states, where the next state depends only on the current state, not the full history of how it got there.

Based on this idea, I built a bot that:

- Saves separate words from users (just like the original Cheburek).
- For each word, stores how many times it was used as **first**, **last**, or **after** the separate word.
- Can generate sentences using these words, where each next word is taken randomly based on the word usage data from users.

Let's say users sent these three messages:

- the cat sleeps
- the cat runs
- the dog sleeps

Cheburek tracks how often words appear after other words:

| Current word | Next word | Count |
| ------------ | --------- | ----- |
| the          | cat       | 2     |
| the          | dog       | 1     |
| cat          | sleeps    | 1     |
| cat          | runs      | 1     |
| dog          | sleeps    | 1     |

Now we can convert these into probabilities.

For example, after `the`:

- `cat`: 2/3 ≈ 66.7%
- `dog`: 1/3 ≈ 33.3%

So whenever the bot encounters `the`, it randomly selects `cat` or `dog` according to those probabilities.

This makes it possible to generate more predictable results based on the actual word usage patterns.

## How to store the word chain?

I chose a simple JSON file to store the whole word database and count how many times words were used.

It contains the special `__START__` and `__END__` objects, that show how many times a word was used as first or last in a message, respectively:

```json
{
  "__START__": {
    "the": 3
  },
  "the": {
    "cat": 2,
    "dog": 1
  },
  "cat": {
    "sleeps": 1,
    "runs": 1
  },
  "dog": {
    "sleeps": 1
  },
  "sleeps": {
    "__END__": 1
  },
  "runs": {
    "__END__": 1
  }
}
```

The main downside of using a JSON file storage is its **large file size**, because we are forced to write a single word multiple times to maintain a word chain. Other than that, it seems like a pretty good way to store the word connections.

## Results

<figure>
    <img alt="The Cheburek responses" src="/assets/blog/markov-chains/cheburek-new.png" />
    <figcaption>
        The new Cheburek responses (Markov chain)
    </figcaption>
</figure>

With this approach, Cheburek can generate sentences that follow patterns found in users' messages instead of combining completely random words.

The generated text isn't always meaningful, of course. Markov chains don't understand grammar or context; they only learn which words tend to follow one another. Still, the results can be much more interesting than those of the original word generator, especially with lots of words and connections saved.

For me, this was a fun way to explore Markov chains and see how a relatively simple algorithm can produce surprisingly interesting results.

See the Cheburek source code [on my GitHub](https://github.com/zorreth/cheburek).
