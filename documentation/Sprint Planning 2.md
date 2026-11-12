# Sprint Planning Report: Sprint 2

*Copy this file into `scrum/planning/` using your team's naming format. Fill in every field. Replace the italic guidance with your team's information.*

---

## 1. Meeting Details

**Date:** 11-11-2026

**Scrum Master:** Ta'zyah

**Attendees:** Ta'zyah, Thomas, Caden, Kelsan

**Absent:** N/A

---

## 2. Sprint Goal

*One or two sentences describing a playable outcome, not a list of tickets. e.g., "A player can create a character and enter the first dungeon."*

Developing a more visible and audible version of the game, where a mage can be chosen and played with within a built dungeon.

---

## 3. Capacity and Velocity

**Sprint dates:** 11-11 to 11-18

**Velocity last sprint (points completed):** 4 

**Average velocity so far:** 4

**Known absences or reduced availability this sprint:** N/A

**Points committed this sprint:** 1 3 2 3 1 3 2 2 (17)

**Why this commitment is realistic:** *(Compare it to your velocity and capacity. If you are committing more than last sprint's velocity, explain why.)*

More than last sprint, but that's because the works divided up between the 4 of us and it's more realistic to our abilities, given that our branches don't have major issues again.

---

## 4. Committed Backlog Items

*Every item listed here must meet the Definition of Ready in your constitution. Items should be taken from the top of the product backlog in priority order. If you skipped a higher-priority item, explain why under "Notes".*

| Issue # | User story | Estimate | Owner | Ready? |
|---------|------------|----------|-------|--------|
|Mage Classes         |As a player, I want be able to choose different classes of mage to play with.            |1          |Caden       | [ ]    |
|Beginning Music and Sounds         |As a composer I want specific songs or sound effects incorporated for the first areas            |3          |Kelsan       | [ ]    |
|Death         |As a player I want death to be an engaging part of the gameplay            |2          |Caden       | [ ]    |
|Rooms         |As a player, each room that I enter should be unique compared to the last room that I entered.            |3          |Ta'zyah       | [ ]    |
|Cursor         |As a user I want a visible cursor            |1          |Ta'zyah       | [ ]    |
|Character Visibility         |As a player, I should be able to tell what my current character looks like.            |2          |Ta'zyah/Caden       | [ ]    |
|Hitboxes|As a player, my character should have detection for their interactions between enemies and the environment.            |2          |Thomas       | [ ]    |
|Unit Testing|As a tester I want to have unit tests for each issue           |3          |Kelsan       | [ ]    |

**Total points:** 17

**Notes:** Some issues might be added or backlogged for this sprint

---

## 5. Task Breakdown

*Break each story into tasks. Include tasks for writing tests and reviewing PRs, not only coding.*

### Issue #1: *Mage Classes*

- [ ] Using p5, establish code that chooses a set class based on mage chosen
- [ ] (Preferably before task above), write test code to detect class changes

### Issue #2: *Beginning Music and Sounds*

- [ ] Using preferred music programs, create music for the main menu, dungeons, and create sounds.
  
### Issue #3: *Death*

- [ ] Write code for a proper health system.
- [ ] Establish a restart mechanic when health reaches 0
- [ ] Test to confirm it works as intended

### Issue #4: *Rooms*

- [ ] Write code to pick a pre-generated room for each room that connects to the dungeon map
- [ ] Use jasmine to test its connections properly

### Issue #5: *Cursor*

- [ ] Using Aseprite, draw up an approriate cursor for the game to use
- [ ] Using Jasmine? (as this is a visual thing), set up tests for the cursor appearing and changing
- [ ] Using p5, write code the change the cursor when hovering over the canvas

### Issue #6: *Character Visibility*

- [ ] Using Aseprite, draw up all the sprites for the character to control
- [ ] Use Jasmine to check if the player visibly changes through tests
- [ ] Use p5 to write code for the character's sprites changing based on their actions

### Issue #7: *Hitboxes*

- [ ] Write code that creates a hitbox
- [ ] Attach proper hitboxes to walls, character, and enemies 
- [ ] Test their accuracy

### Issue #8: *Unit Testing*

- [ ] Check each piece of code that reflects an issue for whether or not it has a test for it.
- [ ] If no test exists, write tests for the code and test it.
- [ ] Refactor when necessary


---

## 6. Work Distribution

| Member | Stories owned | Points |
|--------|---------------|--------|
|Thomas|1               |2        |
|Ta'zyah|3               |6        |
|Kelsan|2               |6        |
|Caden|3               |6        |

*If the work is not balanced, explain why:*

The work doesn't appear balanced, but that's due to the nature of the tasks right now being really specific to Ta'zyah and Kelsan, and some issues not being fully specific to what Thomas is currently working on.

---

## 7. Stories Split or Deferred

*Did you split any stories that were too large for one sprint, or move stories back to the backlog? List them and say why.*

N/A

---

## 8. Retrospective Follow-Through

*Which action items from last sprint's retrospective are part of this sprint's plan, and how? (Sprint 1: write "n/a")*

| Action item | How it shows up in this sprint |
|-------------|--------------------------------|
|Cursor             |Actual implementation                                |
|Keyboard Controls             |Adding more towards it on the character                                |

---

## 9. Risks and Dependencies

*What might stop the team from meeting the sprint goal? Which stories depend on others being finished first?*

Again, classwork from other classes and other outside complications would hinder sprint completion, although hitboxes does depend on enemies and the player existing first.

---

## 10. Checklist

- [X] Sprint goal written
- [ ] Every committed story meets the Definition of Ready
- [X] Every story has an owner
- [X] Board updated: committed stories in the sprint, tasks created
- [X] Commitment compared to velocity
- [X] Report committed to `scrum/planning/` via pull request
