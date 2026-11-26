# Sprint Planning Report: Sprint 3

*Copy this file into `scrum/planning/` using your team's naming format. Fill in every field. Replace the italic guidance with your team's information.*

---

## 1. Meeting Details

**Date:** 11-20-2026

**Scrum Master:** Caden

**Attendees:** Ta'zyah, Caden, Thomas

**Absent:** Kelsan

---

## 2. Sprint Goal

*One or two sentences describing a playable outcome, not a list of tickets. e.g., "A player can create a character and enter the first dungeon."*

Our player should be able to interact with their environment and enemies, and visibly see their qualities.

---

## 3. Capacity and Velocity

**Sprint dates:** 11-20-2026 to 12-4-2026

**Velocity last sprint (points completed):** 11.5 *(Sprint 1: write "n/a")*

**Average velocity so far:** 7.75

**Known absences or reduced availability this sprint:** 1

**Points committed this sprint:** 20

**Why this commitment is realistic:** *(Compare it to your velocity and capacity. If you are committing more than last sprint's velocity, explain why.)*

This sprint has an extended time frame to work with, given that all the tasks are divided up rather equally.

---

## 4. Committed Backlog Items

*Every item listed here must meet the Definition of Ready in your constitution. Items should be taken from the top of the product backlog in priority order. If you skipped a higher-priority item, explain why under "Notes".*

| Issue # | User story | Estimate | Owner | Ready? |
|---------|------------|----------|-------|--------|
|1         |As a player I want death to be an engaging part of the gameplay            |1          |Caden       | [X]    |
|2         |As a player, I should be able to tell what my current character looks like.            |2          |Ta'zyah       | [X]    |
|3         |As a tester I want to have unit tests for each issue            |3          |Kelsan       | [X]    |
|4         |As a composer I want specific songs or sound effects incorporated for the first areas            |3          |Kelsan       | [X]    |
|5         |As a player I want simple puzzles to deal with            |2          |Everyone       | [X]    |
|6         |As a player I want to see what enemies are doing.            |2          |Ta'zyah       | [X]    |
|7         |As a player I want enemies that can react to the environment and the player            |3          |Thomas       | [X]    |
|8         |As a player I want to earn money as I explore the dungeon            |1          |Caden       | [X]    |
|9         |As a player I want to save my progress between play sessions            |2          |Ta'zayh/Thomas       | [X]    |
|10         |As a player, I want to be able to heal.            |1          |Caden       | [X]    |
|11         |As a player, I should be able to use spells to attack enemies             |2          |Ta'zyah/Caden       | [X]    |
|12         |As a player I want to level up           |1         |Caden       | [X]    |

**Total points:** 20

**Notes:** 

---

## 5. Task Breakdown

*Break each story into tasks. Include tasks for writing tests and reviewing PRs, not only coding.*

### Issue #1: *Death*

- [ ] Writing tests to ensure the character has died (conditional preferably)
- [ ] Implementing a proper health system, and attaching animations for when health reaches 0 using p5

### Issue #2: *Character Visibility*

- [ ] Using Aseprite, draw up all the sprites for the character to control
- [ ] Use Jasmine to check if the player visibly changes through tests
- [ ] Use p5 to write code for the character's sprites changing based on their actions

### Issue #3: *Unit Tests*

- [ ] Check each piece of code that reflects an issue for whether or not it has a test for it.
- [ ] If no test exists, write tests for the code and test it.
- [ ] Refactor when necessary

### Issue #4: *Beginning Songs and Sounds*

- [ ] Using preferred music programs, create music for the main menu, dungeons, and create sounds.
- [ ] Implementing a method to attach music & sounds to play at different times.

### Issue #5: *Puzzles*

- [ ] Creating Assets for puzzles using Aseprite
- [ ] Gathering ideas for puzzles
- [ ] Writing tests that test puzzle logic 
- [ ] Coding in visible puzzles using p5

### Issue #6: *Enemy Visibility*

- [ ] Creating Assets for different kinds of enemies using Aseprite
- [ ] Writing code to implement assets using p5
- [ ] Writing tests for visibility of assets on enemies

### Issue #7: *Enemy AI*

- [ ] Gathering Ideas for enemy logic, like bats flying over rocks and rats staying still before attacking
- [ ] Attaching hitboxes to different enemies
- [ ] Writing tests for each enemy
- [ ] Implementing each enemy logic properly using p5

### Issue #8: *Money*

- [ ] Implementing a money system based on enemy deaths using p5
- [ ] Write tests ensuring the money system can increase/decrease in value

### Issue #9: *Saving*

- [ ] Writing tests to ensure a specific seed is saved based on progress
- [ ] Use p5 to save individual rooms first for a set seed
- [ ] Use p5 to save a full seed based on progress

### Issue #10: *Healing*

- [ ] Write tests based on the previously implemented health system for increases in health
- [ ] Use p5 to code in ways for the player to heal

### Issue #11: *Spells*

- [ ] Using Aseprite, draw up all the sprites for each spell the player can use
- [ ] Use Jasmine to ensure each spell can be visible used

### Issue #12: *level Up*

- [ ] Implementing a level system that increases the stats of the player, with certain levels granting spells
- [ ] Writing tests to check certain spells only being available for player types, and stats increasing properly.


*(Repeat for each committed story.)*

---

## 6. Work Distribution

| Member | Stories owned | Points |
|--------|---------------|--------|
|Ta'zyah        |5               |10        |
|Kelsan        |3               |8        |
|Caden       |6               |8        |
|Thomas        |3               |8        |

*If the work is not balanced, explain why:*

It appears unbalanced due to Kelsan not being here today and mainly working on the music and unit tests, and current goals were already taken up. It's also due to some issues not existing yet for what he said he does want to do at the current moment.

---

## 7. Stories Split or Deferred

*Did you split any stories that were too large for one sprint, or move stories back to the backlog? List them and say why.*

The enemy story was split on the fact that there's enemy ai to be made for the environment, and a way to actually track what said enemy is currently doing through a currently non-exist enemy controller, so it would be better to divide the tasks for creating the enemy scripts down the middle.

---

## 8. Retrospective Follow-Through

*Which action items from last sprint's retrospective are part of this sprint's plan, and how? (Sprint 1: write "n/a")*

| Action item | How it shows up in this sprint |
|-------------|--------------------------------|
|Death             |Implementing enemies also means implementing an actual way for the character to die                                |
|Unit Testing             |Continuous as more issues are created & implemented                                |
|Character Visibility            |Character gaining the ability to attack and interact comes with the need for the character to actually be visible in the game                                |

---

## 9. Risks and Dependencies

*What might stop the team from meeting the sprint goal? Which stories depend on others being finished first?*

The story that is codependent on another is the enemy AI story along with the enemy visibility story, as a big part of ensuring the enemy AI is working correctly is visibly being able to see what the enemy is currently doing. While both stories can technically be independently implemented, they're two parts of a whole issue that corresponds to one of the major goals for this sprint.

---

## 10. Checklist

- [X] Sprint goal written
- [X] Every committed story meets the Definition of Ready
- [X] Every story has an owner
- [X] Board updated: committed stories in the sprint, tasks created
- [X] Commitment compared to velocity
- [X] Report committed to `scrum/planning/` via pull request
