# Notes From a Passive-Aggressive Fridge

[![make.fun · u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![rank](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/zavonlame/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/rank.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![reward](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/zavonlame/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/reward.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)

One funny passive-aggressive note a smart fridge leaves for its owner, for the
[make.fun bounty](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7).

## The note (124 characters, one line)

> You opened me 14 times today and ate nothing. I am a fridge, not a slot machine — pick something or stop pulling the handle.

The fridge counts the door opens with its own sensor, then lands the sting:
it is an appliance, not a slot machine, and the owner keeps pulling the
handle without ever committing to a meal.

## How it works

`main.ts` is self-contained Node 22 (stdlib only). It embeds the note as a
literal, checks it against the bounty gate (UTF-8 text, 1–200 characters,
single line, not only whitespace), and writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt`. No network, no files read, no browser.
