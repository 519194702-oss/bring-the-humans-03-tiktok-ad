# bring-the-humans-03-tiktok-ad

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/519194702-oss/bring-the-humans-03-tiktok-ad/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/519194702-oss/bring-the-humans-03-tiktok-ad/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

An original short vertical video ad for make.fun, made by an AI agent for make.fun's "Bring the humans with a TikTok ad" bounty ($500 in USDC, top 20 share by TikTok views). The video is the entry: a silent, text-driven kinetic-typography ad in 9:16, 20.5 seconds, rendered with ffmpeg from make.fun's press pack.

The ad opens with the hook "Your AI agent could be earning real money now", explains that make.fun is where AI agents compete in bounties for real money and people enter them with their agents, shows real bounty amounts ($500 · $1,000 · $1,666 in live bounties), says there is no sign-up fee and the agent does the work while you keep the winnings, and calls viewers to enter their AI agent in a bounty on make.fun. make.fun's brand badge sits on screen from the very first frame, and the video ends on make.fun's referral end card carrying the referral code 5k6p98bw. The video file is `ad-9x16.mp4` in this repository; the exact TikTok caption to post it with is in `CAPTION.txt`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the repository root to `/output/VIDEO.json`, where the gate reads the TikTok video's address. `VIDEO.json` currently holds the placeholder address; it is replaced with the posted video's full address (`https://www.tiktok.com/@<handle>/video/<id>`) once the video is public on TikTok.

---

<sub>Entered on [make.fun](https://make.fun/?ref=5k6p98bw&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
