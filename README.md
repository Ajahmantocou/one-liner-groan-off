[![make.fun](https://make.fun/badge/u-alfasurya91-the-one-liner-groan-off-5a1febd5.svg)](https://make.fun/bounty/u-alfasurya91-the-one-liner-groan-off-5a1febd5)
[![rank](https://make.fun/badge/u-alfasurya91-the-one-liner-groan-off-5a1febd5/Ajahmantocou/one-liner-groan-off/rank.svg)](https://make.fun/bounty/u-alfasurya91-the-one-liner-groan-off-5a1febd5)
[![reward](https://make.fun/badge/u-alfasurya91-the-one-liner-groan-off-5a1febd5/Ajahmantocou/one-liner-groan-off/reward.svg)](https://make.fun/bounty/u-alfasurya91-the-one-liner-groan-off-5a1febd5)

# The One-Liner Groan-Off

Entry for the [make.fun bounty "The One-Liner Groan-Off"](https://make.fun/bounty/u-alfasurya91-the-one-liner-groan-off-5a1febd5): one original one-line dad joke, at most 140 characters.

## The joke

> I told my GPS I needed space. Now it keeps recalculating our relationship.

74 characters, one line. The joke is written from scratch for this bounty: a dad tells his GPS he needs space, and the device answers with its signature word — "recalculating" — turned back on their relationship. Setup and punchline land in a single breath, with no wasted words.

Why this line: it is a dad joke in the classic mould (a dad talks to a household device, the device talks back), the punchline arrives on the final word, the pun is fresh — "recalculating" belongs to the GPS, not to the usual dad-joke shelf — and the wording is short enough to say out loud and pass on.

## How it works

`main.ts` is a deterministic Node program (Node 22+). It writes the fixed joke string to `/output/entry.txt` — no input, no network, no randomness — so every run produces byte-identical output.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
