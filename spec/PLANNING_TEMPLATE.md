# Sprint Planning Report: Sprint _

*Copy this file into `scrum/planning/` using your team's naming format. Fill in every field. Replace the italic guidance with your team's information.*

---

## 1. Meeting Details

**Date:** 11/2/26

**Scrum Master:** Thomas Kern

**Attendees:** Thomas, Ta'zyah, Kelsan, Caden

**Absent:** N/A

---

## 2. Sprint Goal

*One or two sentences describing a playable outcome, not a list of tickets. e.g., "A player can create a character and enter the first dungeon."*
By the end of the sprint a player should be able to have a generated dungeon, a test room, and simple movement controls
_

---

## 3. Capacity and Velocity

**Sprint dates:** 11/2 to 11/8

**Velocity last sprint (points completed):** n/a *(Sprint 1: write "n/a")*

**Average velocity so far:** 6 stars

**Known absences or reduced availability this sprint:** None outside of classwork

**Stars committed this sprint:** 6

**Why this commitment is realistic:** *(Compare it to your velocity and capacity. If you are committing more than last sprint's velocity, explain why.)*
This commitment is realistic because it establishes the ground work for later sprints to iterate and improve on. We can't compare to previous sprints in the current moment so it isn't certain if we are taking on too much or too little.
_

---

## 4. Committed Backlog Items

*Every item listed here must meet the Definition of Ready in your constitution. Items should be taken from the top of the product backlog in priority order. If you skipped a higher-priority item, explain why under "Notes".*

| Issue # | User story | Estimate | Owner | Ready? |
|---------|------------|----------|-------|--------|
|Issue: Random Dungeons|User Story: As a Player, I want to explore randomly generated dungeon floors, so that each dungeon run feels different. |Estimate: 3 stars|Owner: Thomas|Ready: [ ] |

|Issue: Cursor|User Story: As a user I want a visible cursor |Estimate: 1 star |Owner: Ta'zyah|Ready: [ ] |

|Issue: Easy Restart|User Story:  As a Game Tester, I want to restart a dungeon run easily, so that I can quickly test different parts of the game.|Estimate: 1 star|Owner: Undecided|Ready: [ ]|

|Issue: Keyboard Control|User Story: As a Player I want to be able to control the entire game with my keyboard|Estimate: 1 star|
Owner: Undecided|Ready: [ ]|


**Total Stars:** 6

**Notes:**  More issues may have to be included as these can be done relatively quick

---

## 5. Task Breakdown

*Break each story into tasks. Include tasks for writing tests and reviewing PRs, not only coding.*

### Issue #1: *Cursor*

- [ ] Using Aseprite, draw up an approriate cursor for the game to use
- [ ] Using Jasmine? (as this is a visual thing), set up tests for the cursor appearing and changing
- [ ] Using p5, write code the change the cursor when hovering over the canvas

### Issue #2: *Easy Restart*

- [ ] Write unit tests for button pressing to restart dungeon
- [ ] Write code to restart dungeon on a press of a button
- [ ]

### Issue #3: *Random Dungeons*

- [ ] Write unit tests for decteting and changing dungeom
- [ ] Use Jasmine to ensure dungeon visually changes
- [ ] Write code to randomly generate a new dungeon
### Issue #4: *Keyboard Control*

- [ ] Write unit tests to detect button pressing to move character
- [ ] Write code to move character and have other interactions
- [ ]

*(Repeat for each committed story.)*

---

## 6. Work Distribution

| Member | Stories owned | Points |
|--------|---------------|--------|
|Ta'zyah |1              |1       |
|Caden   |1?             |1       |
|Kelsan  |1?             |1       |
|Thomas  |1              |3       |

*If the work is not balanced, explain why:*

_

---

## 7. Stories Split or Deferred

*Did you split any stories that were too large for one sprint, or move stories back to the backlog? List them and say why.*

Not Currently

---

## 8. Retrospective Follow-Through

*Which action items from last sprint's retrospective are part of this sprint's plan, and how? (Sprint 1: write "n/a")*

| Action item | How it shows up in this sprint |
|-------------|--------------------------------|
|N/A          |N/A                             |
|             |                                |


---

## 9. Risks and Dependencies

*What might stop the team from meeting the sprint goal? Which stories depend on others being finished first?*

Right now, the only thing that could stop the team from meeting the sprint goal is a lack of availability, as the only story
that might depend on another being finished is the quick restart as to visually test it.

---

## 10. Checklist

- [X] Sprint goal written
- [ ] Every committed story meets the Definition of Ready
- [X] Every story has an owner
- [ ] Board updated: committed stories in the sprint, tasks created
- [ ] Commitment compared to velocity
- [ ] Report committed to `scrum/planning/` via pull request
