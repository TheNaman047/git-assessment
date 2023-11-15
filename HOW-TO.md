# How to sit this assessment

## At a glance

|                | Session 1                          | Session 2                                   |
|----------------|------------------------------------|---------------------------------------------|
| Topics         | fundamentals, collaboration, remotes, tags | merge & rebase, reset & revert, history rewriting, splitting |
| Practical      | 10 tasks (4 easy, 4 medium, 2 hard) | 11 tasks (3 easy, 4 medium, 4 hard)        |
| Written paper  | 17 questions                       | 18 questions                                |
| Time to set aside | about 2h 15m                    | about 2h 45m                                |
| Total marks    | 104                                | 124                                         |

Sit them on separate days if you like; they are independent. Nothing is timed
and nothing locks - the times above are guidance so you can pace yourself.
Budget roughly 6 minutes for an easy task, 10 for a medium, 15 for a hard one.
If a task runs to twice that, push what you have and move on.

## What you need on your machine

| You need | Check it with | Why |
|---|---|---|
| Git 2.23 or newer | `git --version` | the tasks use `git switch` and `git restore` |
| A GitHub account you can push from | `ssh -T git@github.com` | all your work lands in your own fork |
| The `gh` CLI, signed in | `gh auth status` | easiest way to fork and open the PR; the web UI also works |
| An editor Git will open | `git config --global core.editor` | the interactive-rebase tasks need one |
| `git filter-repo` (session 2 only) | `git filter-repo --version` | `brew install git-filter-repo` |

Nothing else - no Node, no Docker. The sandbox project is never run.

Run this before you start:

    git --version
    git config --global user.name && git config --global user.email
    git config --global core.editor
    gh auth status
    git filter-repo --version        # session 2 only

## How you are marked

Three things, not one:

- **Your branches** - a script reads your fork and checks commit graph shape,
  file contents and refs. It never compares commit SHAs, so it does not matter
  that your hashes differ from anyone else's.
- **Your write-up** - `SOLUTIONS.md`, marked by a person. Roughly a third of the
  practical marks. A perfect branch with an empty explanation scores about half.
- **The written paper** - answered on the portal, not in the repo.

## Ground rules

- Everything happens in **your own fork**. Never push to this repository
  except for the one pull request that task G1 asks for.
- Never commit to `main`, in your fork or here.
- Every task has its own starting point. Always branch from the seed:

      git switch -c answer/<id> origin/seed/<id>

  Never build one answer on top of another - a mistake in one task must not
  fail the next.
- The seed branches are your safety net. If you wreck an answer branch, delete
  it and start again from the seed. Do not force-push over a `seed/*` branch.
- Open book. Use the docs, use the man pages. You will be asked to explain
  what you did, so understand it.

## Setup (once)

    gh repo fork TheNaman047/git-assessment --clone --remote
    cd git-assessment
    git branch -r | grep -c seed/     # expect 20+
    git remote -v                     # 'origin' = your fork, 'upstream' = here

If you forked through the web UI, make sure you **unchecked** "Copy the main
branch only" - otherwise you will not have the seed branches.

## Doing the tasks

Briefs live in `.task/` on `main` - one file per task - and are also on the
test portal. For each task:

1. `git switch -c answer/<id> origin/seed/<id>`
2. Do the work.
3. `git push -u origin answer/<id>`

Task ids: `f1 f2 f3 g1 g2 r1 r2 r3 t1 t2` (session 1) and
`m1 m2 m3 v1 v2 v3 i1 i2 i3 s1 s2` (session 2).
M1 wants two branches: `answer/m1-ff` and `answer/m1-noff`.

## SOLUTIONS.md - required, and worth marks

Create a branch called `submission` from `main` and put a single
`SOLUTIONS.md` at the repo root on it. One section per task:

    ## F1
    Commands:
        git add .gitignore api/routes/users.js api/server.js
        git commit -m "Add users route and ignore build artifacts"
    Why:
        Two sentences, in your own words, about why you did it that way.

Half the marks on the practical half come from the commands being right; the
other half comes from the explanation. An empty or copy-pasted `Why` scores
zero for that task even if the branch is perfect.

Push it: `git push -u origin submission`

## When you are done

Tell the evaluator your fork's URL. Nothing else is collected from git; the
theory half is submitted on the portal.
