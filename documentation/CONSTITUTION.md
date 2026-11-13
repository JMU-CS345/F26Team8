# Team Constitution

*This document records how our team works together on Mage Quest. Fill in every field. Replace the italic guidance with your team's decisions. Changes to this document go through a pull request like any other change.*

---

## 1. Team and Roles

### Team Number

### Team Name

_

### Members

| Name | GitHub username | Preferred contact | Usual availability |
|Thomas Kern| Flim77 | Discord | 4pm-11pm
|Ta'zyah| Tazpet | Discord | Most hours expt 1-4am
Caden| CadenMarty07 | Discord | 6:30pm - 12am
|      |                 |                   |                    |
|      |                 |                   |                    |

### Scrum Master

**Sprint 1 Scrum Master:**Thomas Kern

**Does the role rotate?** Rotates per sprint. 

_

### Product Owner

*Choose one team member who will interact with the instructor (stakeholder) to clarify and prioritize stories, and to collect new ones.*
Thomas Kern
_

### Other Responsibilities

Who is responsible for maintaining the project board / backlog in good order? *(Scrum Master?)*

Who is responsible for deploying the main branch to production to update GitHub pages?
Thomas Kern

### Decision Making

*(How do we decide things: consensus, majority vote, Scrum Master decides? What happens if we are deadlocked?)*
Consensus / Majority vote
_

---

## 2. Scrum Process

### Sprint Length and Dates

| Sprint | Start | End | Review / Retro date |
|--------|-------|-----|---------------------|
| 1 | 11/2 | 11/8 | 11/9 |
| 2 | 11/9 | 11/15 | 11/16 |
| 3 | 11/16 | 11/29 | 11/30 |
| 4 | 11/30 | 12/6 | 12/7 |
| 5 | 12/7 | presentation day | presentation day | 

### Meetings

| Meeting | When |
|---------|------|
| Daily standup | Wed/Fri |
| Sprint planning | Mon |
| Sprint review | Mon |
| Sprint retrospective | Mon |


_

### Definition of Ready

*A backlog item may be pulled into a sprint only when:*

- [ ] it is written as a user story
- [x] it has acceptance criteria
- [ ] it has an estimate

### Definition of Done

*An item is done only when:*

- [ ] code is reviewed and approved by at least one teammate
- [ ] all tests pass in CI
- [x] merged to `main`
- [ ] works in the deployed build
- [ ] the issue is closed
- [ ]

### Estimation

**Method:** *(story points, t-shirt sizes, hours)*
Stars '*'

**Scale:** *(e.g., 1, 2, 3, 5, 8, 13)*
*
**
***
****
*****
_

### Backlog and Board

**Where the backlog lives:** *(e.g., GitHub Projects board, link here)*
https://github.com/orgs/JMU-CS345/projects/16
**Board columns:** *(e.g., To Do → In Progress → In Review → Done)*

_

---

## 3. Communication

### Primary Channel

**Channel:** *(Discord, Slack, GroupMe, ...)*
Discord CS345 group

**Expected response time:** *(e.g., within 12 hours on weekdays)*
within 12 hours on weekdays

### What Goes Where

*(What is discussed in the chat channel vs. in GitHub issues vs. in PR comments?)*
Chat: problem solving, questions between groupmates, and general dialouge 
Github Issues: Formal problems
PR comments: issues with branch

_

### Reporting Blockers or Falling Behind

*(How and how early does a member tell the team they are stuck or behind?)*
At least 2 days before sprint review 
_

### Absences

*(How much notice is required? How is the absent member's work covered?)*
Text message 1 hour before class and absent member is expected to work on their tasks outside of class. 
_

---

## 4. Git and GitHub Workflow

### Branch Naming

**Format:** *(e.g., `type/issue-short-description`)*

**Allowed types:** *(e.g., `feature`, `fix`, `docs`, `refactor`, `test`, `chore`)*

**Examples:**

- feature/dungeon-generation
-

### Branch Protection on `main`

- [x] No direct pushes to `main`
- [x] Required approvals before merge: _
- [x] CI must pass before merge
- [x] Same protection on `production`

### Commit Messages

*(Format and style, e.g., imperative mood: "Add rune puzzle validation". Do we follow Conventional Commits?)*
keep brief description 
_

### Pull Requests

**Maximum size:** *(e.g., aim for under 300 changed lines)*
aim for under 300 lines

**Description template:** *(e.g., What / Why / How to test / Screenshot)*
what and how to test

**Linking issues:** *(e.g., every PR includes `Closes #N`)*
every PR includes `Closes #N'

_

### Code Review

**Review turnaround:** *(e.g., within 24 hours of being requested)*
Within 24 hours

**Who reviews what:** *(e.g., any teammate; or a rotating assignment)*
any team mate except submit-er 

_

### Merging

**Merge style:** *(merge commit, squash and merge, or rebase and merge)*
Squash merge

**Who merges:** *(the author after approval, or the reviewer)*
the reviewer 

**After merge:** *(e.g., delete the branch)*
delete the branch

_

---

## 5. Code Conventions

### Naming

| Kind | Convention | Example |
|------|------------|---------|
| Variables and functions |camel case|caveSpawner|
| Classes |camel case | caveSpawner|
| Constants | upper snake case | JUMP_HEIGHT|
| Files |cammelCase|spawnFile|
| Test files | | |

### Formatting

**Indentation:** *(2 spaces, 4 spaces, tabs)*
tabs

**Semicolons:** *(always / never)*
always

**Quotes:** *(single / double)*
double

**Maximum line length:** _
65 char

**Tools:** *(e.g., Prettier and ESLint, with config files committed to the repo)*


_

### Project Structure

*(Where does each kind of file live?)*

```
src/
  model/        (e.g., game logic, no p5 drawing calls)
  view/         (e.g., drawing code)
  controller/   (e.g., input handling)
  tests/
assets/
  art/
  music/
spec/
  text documents...
```

### Architecture Rules

- game logic never calls p5 drawing functions directly, so it can be unit tested
-

### Comments and Documentation

*(When are comments or JSDoc required?)*

_

### Assets

**File naming:** *(e.g., all lowercase, hyphens, no spaces)*
dashes and all uppercase 

**Licensing and attribution:** *(Where do we record the source and license of art, sound, and fonts we did not make?)*
attribution text file
_

---

## 6. Testing and Quality

**Test framework:** Jasmine

**Where tests live:** within src/tests/

**What must have tests:** *(e.g., all model code; every bug fix gets a test that reproduces it; combat and puzzle rules)*
full coverage, and tests that meet all specs

_

**Coverage expectations:** 90+%

**Continuous integration:** *(What does GitHub Actions run on each PR?)*
runs tests
_

**Rule for failing CI:** *(e.g., nothing merges while CI is red)*
nothing merges while CI is red
_

**Manual playtesting:** *(Who plays the build before each sprint review, and how are bugs reported?)*
Each player should test current build 
_

---

## 7. Deployment

**Where the game is deployed:** GitHub Pages, URL here

**What triggers a deploy:** *(e.g., a release PR from `main` into `production`, opened by the Scrum Master after each sprint review)*
a release PR from `main` into `production`

**Who checks the deployed build, and when:** Ta'zyah Peterson 

---

## 8. AI Tool Usage

**Allowed tools:** ChatGPT, gemeni, claude

**Allowed uses:** Code generation, tests

_

**Not allowed:** Art, music, documentation 

**Disclosure:** *(e.g., note AI assistance in the PR description)*
note AI usage in Pull Requests 
_

**Responsibility:** 
whoever submits AI-generated code must understand it and is accountable for it
_

---

## 9. Working Agreements and Conflict

### Expected Effort

*(Hours per person per week.)*
3-5 hours

_

### Fair Contribution

*(What counts as contributing, and how is it tracked? e.g., PRs merged, reviews done, story points completed.)*
PRs merged 

_

### Conflict Resolution

*(What steps do we follow when there is a disagreement or a problem with a teammate?)*

1.  talk to the person directly
2.  raise it at the retrospective
3. Scrum Master mediates
4. escalate to the instructor

### Missed Commitments

*(What happens when a member repeatedly misses commitments?)*
Look to conflict resolution, possibly downscale on their responsibility 

_

### Amending This Constitution

*(How can this document be changed? e.g., proposed by PR, approved by team vote at a retrospective.)*
Proposed by PR
_

---

## 10. Sign-Off

*By signing, each member agrees to follow this constitution.*

| GitHub name | Signature (type your name) | Date |
Thomas Kern 10/28/26
Tazyah 10/28/26
Caden 10/28/26
|      |                            |      |
|      |                            |      |
