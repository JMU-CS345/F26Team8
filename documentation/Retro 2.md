# Sprint Retrospective Report: Sprint 2

*Copy this file into `scrum/retrospective/` using your team's naming format. Fill in every field. Replace the italic guidance with your team's information. Due by 11:59 p.m. on the day of the retrospective.*

---

## 1. Meeting Details

**Date:** 11-18-2026

**Facilitator:** Thomas Kern

**Attendees:** Ta'zyah Thomas Caden Kelsan

**Absent:** N/A

---

## 2. Last Sprint's Action Items

*Did we do what we said we would? Did it help? (Sprint 1: write "n/a")*

| Action item | Owner | Done? | Did it help? |
|-------------|-------|-------|--------------|
|Mage Classes             |Caden       |Yes       |Yes              |
|Beginning Music and Sounds             |Kelsan       |Mostly       |Yes (helps art design)              |
|Death             |Caden       |No       |No              |
|Rooms             |Ta'zyah       |Yes       |Yes              |
|Cursor             |Ta'zyah       |Yes       |Neutral              |
|Unit Testing             |Kelsan       |Partly       |Yes              |
|Hitboxes             |Thomas       |Yes       |Yes              |
|Character Visibility             |Caden/Ta'zyah       |No       |No              |

---

## 3. The Sprint in Numbers

*Use these to ground the discussion in evidence.*

**Points committed / completed:** 17 / 11.5

**PRs merged:** 18

**CI runs failed / total:** 0 / 28 *(In your repo's **Actions** tab, count the runs from this sprint's dates. Use the **Status** filter to find the failed ones.)*

**Stories carried over:** 3

---

## 4. Observations

*Every member contributes at least one item. Be specific: "three PRs waited more than two days for review" is more useful than "communication could be better."*

*A concrete observation says what happened and backs it up with a specific PR, story, date, or number. Filling in section 3 isn't enough on its own: use its numbers in your observations where they help explain what happened.*

### What went well

- Implementation of the cursor within the "Doors n cursor" pull request, specifically because it was a simple matter of adding the cursor code to sketch.js, as well as the art being drawn rather quick.
- Production of music is going smoothly, albeit it isn't currently within any branch only due to not being added yet.
-

### What did not go well

- Specifically for the pull request to push main to production (specifically called "main into prod 2, maybe works"), because of a small lack of communication, there was a feature added that no longer works completely as intended, which was the mage classes. This was due to the "Doors n cursor" pull request changing the canvas size, where the mage class was configured with the previous canvas size.
- For the pull request "Doors n cursor", there was a bug that prevented it from being pushed sooner, which was an issue with mapping all of the tiles to the premade maps within the JSON file, which caused it to either place the tiles correctly and then never let the game be played, or place the tiles offset to the actual canvas. This was later fixed with the addition of setting the imageMode to center, but still wasted a bit of time.
-

### What puzzled us or what we want to try

- We all collectively agreed that what we want to try next currently is implementing enemies, which would include their visual assets, their attacks, their hitboxes, and their ai.
- Besides enemy ai, adding the current music renditions and a makeshift menu and overworld are ideas that the next sprint might include given extra time.

---

## 5. Root Cause

*Pick the most important problem from above and ask "why?" until you reach something the team can change.*

**Problem:** Communication

**Why?** It caused one of the features to render incorrectly

**Root cause:** Lack of communication fully for what each pull request had the goal of doing, and a small oversight in not explaining a slightly major change within sketch.js



---

## 6. Action Items for Next Sprint

*Two or three items. Each one has an owner and a way to tell whether it worked. (Sprint 4: write "n/a")*

| Action item | Owner | How we will know it worked |
|-------------|-------|----------------------------|
|Enemies             |(Thomas or Caden) AND Ta'zyah        |Spawning and actions with tests                            |
|Healing            |Caden       |Visual changes & testing                            |
|Level Up             |Thomas       |Visual changes & testing                            |

---

## 7. Constitution Changes

*Did this retrospective show that a rule in CONSTITUTION.md isn't working? If so, propose the change here and make it through a pull request. If not, explain why no change is needed. (Sprint 4: write "n/a")*

**Proposed change:** *None*

**Pull request:** *None*

**If no change is needed, why not?** *(Explain why the current rules are working, citing something from this sprint.)*

---

## 8. Checklist

- [X] Every member contributed observations
- [X] Last sprint's action items reviewed
- [ ] A root cause identified
- [X] Action items have owners and success measures (Sprint 4: n/a)
- [x] Action items added to the board or next planning report (Sprint 4: n/a)
- [ ] Constitution change proposed through a pull request, or the reason none is needed explained (Sprint 4: n/a)
- [X] Report committed to `scrum/retrospective/` via pull request by 11:59 p.m. on the day of the retrospective
