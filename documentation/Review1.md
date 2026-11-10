# Sprint Review Report: Sprint _

*Copy this file into `scrum/review/` using your team's naming format. Fill in every field. Replace the italic guidance with your team's information. Due by 11:59 p.m. on the day of the review.*

---

## 1. Meeting Details

**Date:** 11/9/2026

**Scrum Master:** Thomas

**Attendees:** Ta'zyah, Thomas, Kelsan, Caden

**Absent:** N/A

**Presenter:** Thomas

**Deployed build reviewed:** 3a3426b (Git ID)

**Release PR into `production`:** (Done)

---

## 2. Sprint Goal

*Tell the stakeholder whether the sprint delivered what it set out to.*

**The goal we set:** Establishing the basic groundwork for the dungeon and the player

**Did we meet it?** *(Yes / Partly / No, and one sentence explaining why)*

Mostly, there wasn't any official art added, but the controls and dungeon creation/randomization process was established. 

---

## 3. Committed Items: Done or Not Done

*Done means the item meets every point of your Definition of Done, including "works in the deployed build." There is no "mostly done."*

*The presenter credits the members who built each story during the demo.*

| Issue # | User story | Estimate | Owner | Done? | Built by |
|---------|------------|----------|-------|-------|----------|
|Random Dungeons         |As a Player, I want to explore randomly generated dungeon floors, so that each dungeon run feels different.            |3 stars          |Thomas       |Mostly       |Thomas           |
|Cursor         |As a user I want a visible cursor            |1 Star          |Ta'zyah       |No       |N/A           |
|Easy Restart         |As a Game Tester, I want to restart a dungeon run easily, so that I can quickly test different parts of the game.            |1 Star          |Undecided       |No       |N/A           |
|Keyboard Control         | As a Player I want to be able to control the entire game with my keyboard            |1 Star          |Caden       |Yes       |Caden           |
|         |            |          |       |       |           |

---

## 4. Metrics

| | Stars |
|---|---|
| Committed |4|
| Completed |1.5|
| Completion rate | 25% |

**Velocity history:**

| Sprint | Committed | Completed |
|--------|-----------|-----------|
| 1      |4           |1.5           |
| 2      |           |           |
| 3      |           |           |
| 4      |           |           |

**Burndown or board snapshot:** *(Attach a screenshot or link)*

**What explains the difference between committed and completed?**  The difficulty of the issues and current time constraints of allowing us to work on the issues

---

## 5. Demo

*For each completed story, list the acceptance criteria and show that each one passed in the deployed build.*

*Presenter: be ready to explain and answer questions about every completed story, including work you didn't build.*

### Issue #1: *Random Dungeons*

- [X] *Dungeon map shows new arrangement on reset*
- [X] *Rooms connect to reflect the randomized dungeon map*

### Issue #2: *Keyboard Controls*

- [X] *Character moves accordingly to button presses*

*(Repeat for each completed story.)*

---

## 6. Incomplete Work

*What happens to each item that is not done? Return it to the backlog and re-estimate it, even if the estimate stays the same. (Sprint 4: write "n/a")*

| Issue # | What remains | New estimate | Back in backlog? |
|---------|--------------|--------------|------------------|
|Cursor         |Adding Assets              |1 Star              | [X]              |
|Easy Restart         |Implementation once dungeon creation is finished              |1 Star              | [X]              |

---

## 7. Stakeholder Feedback

*Record what the instructor said: what they liked, what should change, and any new priorities. (Sprint 4: write "n/a")*

They liked that we already got the dungeon randomization aspect down, and said that we should start focusing on the character attributes

---

## 8. Backlog Changes

*How did the backlog change in response to the feedback? (Sprint 4: write "n/a")*

**New stories added:**  (Not at the moment)

**Priorities changed:** 2

**Stories removed:** None

**If no change was needed, why not?** _

---

## 9. Quality

*Give the stakeholder an honest picture of the build's quality.*

**CI status on `production`:** Outside of current index issue, Passing

**Number of specs:** 4

**Known bugs in the deployed build:** N/A

---

## 10. Checklist

- [X] Demo given from the deployed GitHub Pages build
- [X] Demo given by one presenter, crediting the members who built each story
- [ ] Release PR merged before the review begins
- [X] Every committed item marked Done or Not Done
- [ ] Every item marked Done has all its acceptance criteria checked in section 5
- [ ] Metrics filled in, with the committed/completed difference explained
- [X] Stakeholder feedback recorded (Sprint 4: n/a)
- [ ] Backlog updated, or the reason no change was needed explained (Sprint 4: n/a)
- [ ] Report committed to `scrum/review/` via pull request by 11:59 p.m. on the day of the review
