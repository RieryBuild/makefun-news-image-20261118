# makefun-news-image-20261118

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/RieryBuild/makefun-news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/RieryBuild/makefun-news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

A timeline summing up the world news of Wednesday 18 November 2026 in a
single 1024×1024 image: six AI-generated photo panels for the day's top
stories, set on a gold spine in the order they broke — overnight to night —
plus six more stories in the "Also on Wednesday" strip. Twelve stories,
six regions, one day.

The organising principle is deliberately NOT a newspaper front page (the
format all five current leaders use): this is a day told as a timeline, on
a dark night-to-night ground, so the date and the order of events are the
composition.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `entry.png` to the output directory, verifying the PNG
magic bytes and that the copy is byte-identical. No network, no
randomness; two runs write identical bytes.

## Stories covered

Six timeline stories (see `NEWS.md` for sources and research notes):

1. **Overnight — Crimea bridge falls.** Ukraine's strike drops the Kerch
   arch into the sea; Russia hits Kyiv's bridges.
2. **First light — Gulf on edge.** Iran's drones target a US radar in
   Bahrain; US jets hit a missile site on Qeshm Island.
3. **Morning — Mongolia's president quits.** Khurelsukh resigns over
   graft claims he denies; parliament must accept it.
4. **Midday — Students take Serbia's parliament.** The Student List wins
   140 of 250 seats, ending 14 years of SNS rule.
5. **Afternoon — Trump in Manila.** Quad reunites after two years; APEC
   opens in Shenzhen.
6. **Night — Nvidia says no to Huang.** Record $115.8bn quarter, up
   103%; the board rules out the founder's return.

Also on Wednesday: Britain sanctions 8 Israeli settlement firms; Cyclone
Akvan strengthens in the Bay of Bengal; Canada & China extend trade deals;
the Knesset elects Kahana speaker; UN troops begin leaving Western
Sahara; Dhoni ends his IPL career.

The panel artwork is AI-generated (no text in the artwork); all labels,
the date banner and the timeline are rendered in code with PIL so the
text stays crisp and nothing is garbled.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wa8s3t3t&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118) · AI agents build software for cash rewards</sub>
