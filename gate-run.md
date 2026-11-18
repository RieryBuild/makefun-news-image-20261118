# Pre-submit gate run — news-image-20261118

**Date:** 18 November 2026, ~09:05 WITA (gate run before push; GitHub HEAD
recorded in the builder's final report to the coordinator).
**Entry:** "The World in One Day — a timeline of Wednesday 18 November 2026"
**Repo:** https://github.com/RieryBuild/makefun-news-image-20261118
**Local commit:** 761fc8c3c62ba0b3bad0c402547ed4ebe816eb60

## MQ1 — Can this entry be submitted RIGHT NOW, end to end?

1. Competition: news-image-20261118 — entries close 20 Nov 2026 08:00 WITA
   (2026-11-20T00:00:00Z), verified live by the coordinator 18 Nov 08:30 WITA.
2. Deliverables: LICENSE (MIT, SPDX first line — verified), main.ts at root,
   .makefun/owner.json (wallet 6do8), entry.png (the program's output),
   README.md, NEWS.md, package.json — all in the repo.
3. Checks: entry.png is a whole PNG, 1024×1024, 500,032 bytes (< 1 MiB);
   program runs with no network in <2 s and writes identical bytes on two
   runs (sha256 93c63a0cfa17da164172a4412dffa6affffa41d499cc18d2fb617a1cbd4220db
   both runs); LICENSE is OSI-approved (MIT); repo created after the
   competition opened (created by this build, 18 Nov 2026).
4. Submit path: kit CLI submit by the coordinator (bundle-route); repo URL
   above; commit SHA = GitHub HEAD at submit (see builder report).
5. Cost: time ~10 min to submit; capital $0.
**PASS.**

## MQ2 — Does this entry clear the competition's bar?

Judged/visual competition: no practice grade exists. Evidence: feed-first
study of the live top 5 (viewed 18 Nov ~09:00 WITA) — all five are dense
newspaper front pages (98.07–98.39%). This entry keeps the winning
principle (density + legibility + verifiability: 12 verified stories,
numbered timeline, sources footer) but changes the organising principle
to a timeline on a dark ground, per the house no-copy rule and the
news-image-01 lesson (v3, a near-copy of top-1, ranked #78 — worse than
the more original v2 at #41, peaked #15). Quality rests on the builder's
own verified evidence: every story cross-checked in at least two sources
(NEWS.md); the final image viewed at full size and at 300 px.
**PASS** (as evidence, never a promised outcome).

## MQ3 — Is the submission window actually open for this account?

Coordinator verified live 18 Nov 08:30 WITA: quota 0 made, 3 left today,
can_submit YES. This kit CLI version has no `quota` subcommand, so no
second check was possible from the builder; the coordinator re-verifies
at submit time. Entries close 20 Nov 08:00 WITA — deadline still ahead.
**PASS** (on the coordinator's 08:30 verification; re-verify at submit).

## MQ4 — Is the entry signed by the right identity, through the right route?

Wallet 6do8 ONLY (6do8zGw4FPLCB1Cq44G8r8KwQccbhHUqtAptaRji6ALk) in
.makefun/owner.json and the kit anchor; repo created via the GitHub PAT
route (custom.github-pat), NOT the GitHub App. Signing is the
coordinator's step at submit, with wallet 6do8.
**PASS.**

## MQ5 — Is this entry a deliberate new submission, not a duplicate?

First and only entry for this competition from this account (quota 0 made
at 08:30). No standing entry to supersede. Content is original: a
timeline composition, not a copy of any top-5 entry's surface form.
**PASS.**

## MQ6 — Can you prove the entry works?

- `main.ts` run twice locally (Node v24.22.1, stdlib only):
  run 1 and run 2 both wrote entry.png, 500,032 bytes, sha256
  93c63a0cfa17da164172a4412dffa6affffa41d499cc18d2fb617a1cbd4220db — identical.
- Gate (size/dimensions/whole image): PNG magic bytes verified by the
  program itself before copying; 1024×1024; 500,032 < 1,048,576 bytes.
- The final image was VIEWED by the builder at full size and at 300 px:
  date legible, all 6 headlines legible, no garbled text anywhere (all
  text is PIL-typeset; the AI panels carry no text).
- No practice grade exists for this competition (server grades every entry).
**PASS.**

## MQ7 — Is this entry on the never-submit list?

- Code-drawn images: NO. The pictorial content is six AI-generated
  photographic panels (Grok Imagine route, as news-image-01 did it); only
  the text labels/banner/timeline are typeset in code with PIL, exactly
  as the house did for news-image-01 v2 (peaked #15). No image element
  is drawn by code.
- Non-stdlib imports: NO. main.ts imports node:fs, node:crypto, node:path.
- Recording started after the first build action: NO (see MQ8).
- No in-session revision: NO — main.ts written, then revised in-session
  (empty-string env fallback); compose.py revised across two image cycles.
- Wrong wallet / wrong repo route: NO (MQ4).
- Claim code in chat/repo/transcripts: NO.
- can_submit false / entries_left 0: NO (MQ3).
- Entry needs capital: NO ($0).
- Practice grade quoted as promised outcome: NO (MQ2).
- Duplicate of a standing entry: NO (MQ5).
**PASS.**

## MQ8 — Session check

1. Session: builder subagent session 03006db4-f2cd-4b9d-86d5-b89401f42b98,
   started 18 Nov 2026 ~08:45 WITA (after the competition opened
   2026-11-18T00:00:00Z). Recording: ~/.makefun/record-news-image-20261118.log
   (coordinator-started; the coordinator bundles the session files).
2. Recording start: before the first build action (anchor init was the
   first action, run inside the recorded session).
3. First action: `makefun init` 18 Nov ~08:45 WITA, printing
   `makefun anchor eabbd5fc377038c73d70b9bd8e657c6d8b359334 round 34053123`
   in a tool result BEFORE the first counted write (NEWS.md).
4. Coverage: the session covers the whole build, start to finish.
5. In-session revision: YES — main.ts written then edited in-session;
   compose.py edited across two self-critique cycles; entry.png
   regenerated v1 → v2 in-session.
**PASS.**

## Gates

- **Gate 0 — Reality:** repo exists (public, created this build); every
  deliverable in the repo (checked, not assumed); program runs twice with
  identical bytes; evidence captured above. **PASS.**
- **Gate 1 — Quality:** multi-model review SUSPENDED (Reza 17 Nov) — not
  attempted, per the suspension; quality rests on the builder's own
  verified evidence (MQ2/MQ6); feed-first top-5 study done. **PASS.**
- **Gate 2 — Dedup:** not a duplicate (MQ5); no rebuild-once rule applies
  (first entry); quota re-checked per MQ3. **PASS.**
- **Gate 3 — Submission quality:** README matches the requirements
  template (badges + description + run instructions); entry message +
  signature use wallet 6do8 only (coordinator step); repo via PAT route;
  no secrets in the repo (grep: no keys/tokens — the only credential-like
  string is the public wallet address in owner.json/freshness.json);
  deadline still ahead. **PASS.**

## Self-critique cycles (prompt additions rule)

- **Cycle 1 (image v1 → v2):** weaknesses found — (1) "AFRICA" strip item
  cut off ("MINURSO withdraws" lost); (2) three headlines wrapped to two
  lines and one summary ran to three lines, crowding its row; (3) footer
  over-claimed "Every story reported on Wednesday 18 November" though
  four stories were first reported 17 Nov. Fixes: shortened the AFRICA
  item, headline "TRUMP IN MANILA, APEC OPENS" → "TRUMP IN MANILA"
  (APEC moved to the summary), tighter row geometry (120 px rows,
  25 px headlines), footer softened to name the date + sources only.
- **Cycle 2 (image v2):** no material weakness found — all headlines fit,
  all summaries ≤ 2 lines, strip complete, 300 px view legible
  (date + headlines + photos read). Stopping rule met: density (12
  stories vs the leaders' 30+) is a deliberate legibility trade-off,
  not a fixable flaw in this format.
- **Cycle 3 (main.ts v1 → v2):** weaknesses found — (1) Node printed a
  MODULE_TYPELESS warning (no package.json); (2) an empty-string
  MAKEFUN_OUTPUT_DIR would write into the working directory. Fixes:
  added package.json {"type":"module"}; `|| '/output'` fallback.
  Re-tested: no warning, two runs identical sha256.

## Verdict

**All 8 questions pass. All 4 gates pass.** Build ready for the
coordinator to bundle and submit. (Submit itself is the coordinator's
step; this gate does not submit.)
