# Sprint Review Report: Sprint _

*Copy this file into `scrum/review/` using your team's naming format. Fill in every field. Replace the italic guidance with your team's information. Due by 11:59 p.m. on the day of the review.*

---

## 1. Meeting Details

**Date:** 11-18-26

**Scrum Master:** Ta'zyah

**Attendees:** Ta'zyah Thomas Kelsan Caden

**Absent:** N/A

**Presenter:** *Thomas*

**Deployed build reviewed:** *(GitHub Pages URL)*

**Release PR into `production`:** *(link; merge it before the review begins)*

---

## 2. Sprint Goal

*Tell the stakeholder whether the sprint delivered what it set out to.*

**The goal we set:** Developing a more visible and audible version of the game, where a mage can be chosen and played with within a built dungeon.

**Did we meet it?** *(Yes / Partly / No, and one sentence explaining why)*

Partly

Dungeon randomization now has added art for the rooms to change, and classes can be selected with hitboxes, but no music has been added to the game and unit tests aren't fully implemented.

---

## 3. Committed Items: Done or Not Done

*Done means the item meets every point of your Definition of Done, including "works in the deployed build." There is no "mostly done."*

*The presenter credits the members who built each story during the demo.*

| Issue # | User story | Estimate | Owner | Done? | Built by |
|---------|------------|----------|-------|-------|----------|
|1         |As a player, I want be able to choose different classes of mage to play with.            |1          |Caden       |Yes       |Caden           |
|2         |As a composer I want specific songs or sound effects incorporated for the first areas            |3          |Kelsan       |Mostly       |Kelsan           |
|3         |As a player I want death to be an engaging part of the gameplay            |2          |Caden       |No       |N/A           |
|4         |As a player, each room that I enter should be unique compared to the last room that I entered.            |3          |Ta'zyah       |Yes       |Ta'zyah           |
|5         |As a user I want a visible cursor            |1          |Ta'zyah       |Yes       |Ta'zyah           |
|8         | 	As a tester I want to have unit tests for each issue            |3          |Kelsan       |Partly       |Kelsan           |
|7         | 	As a player, my character should have detection for their interactions between enemies and the environment.            |2          |Thomas       |Yes       |Thomas           |
|6         | 	As a player, I should be able to tell what my current character looks like.            |2          |Caden/Ta'zyah       |No       |Neither           |


---

## 4. Metrics

| | Points |
|---|---|
| Committed |8|
| Completed |5|
| Completion rate | 63% |

**Velocity history:**

| Sprint | Committed | Completed |
|--------|-----------|-----------|
| 1      |4           |1.5           |
| 2      |8           |5           |
| 3      |           |           |
| 4      |           |           |

**Burndown or board snapshot:** *(Attach a screenshot or link)* 
<img width="1826" height="698" alt="image" src="https://github.com/user-attachments/assets/5a06a8bd-2315-43c8-925d-0a6b404778aa" />


**What explains the difference between committed and completed?** _
Some of our issues are only partly completed as seen above, with 2 of them not being picked up at all yet due to time constraints or not having the ability to implement with the current state of our branches.
---

## 5. Demo

*For each completed story, list the acceptance criteria and show that each one passed in the deployed build.*

*Presenter: be ready to explain and answer questions about every completed story, including work you didn't build.*

### Issue #1: *Mage Classes*

- [X] *Prompts User to pick a class on start up*
- [X] *Character visibly reflects the chosen class*

### Issue #4: *Rooms*

- [X] *Upon dungeon creation & reset, doors reflect positions currently open & closed*
- [X] *Walking between rooms correctly places doors for the current room*

### Issue #5: *Cursor*

- [X] *Hovering mouse over canvas displays a non-default cursor*

### Issue #7: *Hitboxes*

- [X] *Visibly show a debug outline to represent hitboxes for characters & walls to prepare interactions*
      
*(Repeat for each completed story.)*

---

## 6. Incomplete Work

*What happens to each item that is not done? Return it to the backlog and re-estimate it, even if the estimate stays the same. (Sprint 4: write "n/a")*

| Issue # | What remains | New estimate | Back in backlog? |
|---------|--------------|--------------|------------------|
|3         |Implementation of a character to allow death to be created              |2              | [ ]              |
|8         |Continuous testing of features means no exact "end" point              |2             | [ ]              |
|6         |Attaching assets to the character & coding in conditions              |2             | [ ]              |

---

## 7. Stakeholder Feedback

*Record what the instructor said: what they liked, what should change, and any new priorities. (Sprint 4: write "n/a")*

No given priorities, but liked that our new focus is on enemies. No changes listed, liked our room generation and current renditions of enemy assets (not implemented), though did suggest an idea for different framerate animations.

---

## 8. Backlog Changes

*How did the backlog change in response to the feedback? (Sprint 4: write "n/a")*

**New stories added:** N/A

**Priorities changed:** N/A

**Stories removed:** N/A

**If no change was needed, why not?** The feedback given aligned with our current goals for our next sprint, so no new stories were created or removed at this current moment.

---

## 9. Quality

*Give the stakeholder an honest picture of the build's quality.*

**CI status on `production`:** *Passing*

**Number of specs:** 6

**Known bugs in the deployed build:** 1

---

## 10. Checklist

- [X] Demo given from the deployed GitHub Pages build
- [X] Demo given by one presenter, crediting the members who built each story
- [X] Release PR merged before the review begins
- [X] Every committed item marked Done or Not Done
- [X] Every item marked Done has all its acceptance criteria checked in section 5
- [X] Metrics filled in, with the committed/completed difference explained
- [X] Stakeholder feedback recorded (Sprint 4: n/a)
- [X] Backlog updated, or the reason no change was needed explained (Sprint 4: n/a)
- [X] Report committed to `scrum/review/` via pull request by 11:59 p.m. on the day of the review
