---
title: "Git Cherry-pick"
description: "Overview and Scenarios of the git cherry-pick command."
date: "April 17, 2018"
author: "Johanna Tchon"
layout: "blog"
---

<article>

{$page.description}

Objective: Learn how to use the `git cherry-pick` command, primarily associated with backporting JIRA issues.

Now that you are learning how to backport JIRA issues, that means that you have gotten some minimal experience with Git.  If you have heard some horror stories about Git, you must have heard the term *'merge conflict'*.  And if you have not run into any *merge conflicts* yet, this is your lucky day!

My hope is to give you a better understanding of why we use `git cherry-pick` when backporting JIRA tickets and to help you navigate through errors you will possibly encounter when using this command.

#### What does it do?

From what the command implies, it picks a commit(s) from another branch and applies those commit(s) to your current branch.

**_What does that look like?_**

![alt cherrypick](/images/git_cherry_pick.gif)

Both branches start off with a base of **A** where the left side branches off with three commits **B**, **C**, and **D**, in that order, and the right branch has one commit, **E**.  Say we want to *cherry-pick* the commits **B** and **D**, but not **C**, from the left branch and patch them onto the right branch on top of commit **E**.  `git cherry-pick` easily allows us to pick and choose specific commits that we want to apply to our local branch, rather than all (and unwanted) commits.  How convenient!

#### Why do we use it?

In context of backporting JIRA tickets, say that you are backporting an issue (commit(s)) from Liferay's **master** branch to Liferay's **7.0.x** branch.  You have to apply each commit to check if the fixes work in Liferay's  **7.0.x**.  This is when you use `git cherry-pick <Commit ID>` for each of those commits.

	Note: Commit ID is a SHA-1 Hash alphanumeric code that can be either 40 characters long or 7 characters long.  The 7-character hash is the shorthand version of the 40-character hash.

A better question to ask is...

**_Why don't we directly apply the changes by copying and pasting the changes into our current branch?_**

Copying and pasting manually can be a tedious task.  If there are multiple files changed or files are deeply nested inside the repository, it can get very complicated and messy, especially tracking what changes have and have not been made yet.  It can also be an easy way to create unintentional bugs.

`git cherry-pick` automates this process and does this in a quick and clean way all in one shot.

For backporting, `git cherry-pick` is ideal because it commits changes to your current branch with the same author and commit message as used in the original commit. If a Github User (_hobbitfoLyfe_) made a commit and you applied changes _manually_ with your Github handle _shortGandalf_, this commit will be authored by you (_shortGandalf_) and not by _hobbitfoLyfe_.  So if someone has questions about the bug fix commit, they will be asking you, _shortGandalf_, and you are going to have no idea because you did not fix the original bug.  Let's leave the drama for the movies and out of backporting JIRA tickets...

#### How do you use it?

When you run the `git cherry-pick <Commit ID>` command, it can go a few different ways (maybe more, but this is what I have experienced).

###### The Dream:  Do nothing

```
$ git cherry-pick d67142e
warning: inexact rename detection was skipped due to too many files.
warning: you may want to set your merge.renamelimit variable to at least 9190 and retry the command.
[LPS-78835-master 782f39d44b3f] LPS-74282 Uses node 8.4.0
 Author: Chema Balsas <jose.balsas@liferay.com>
 Date: Thu Aug 31 10:16:00 2017 +0200
 1 file changed, 5 insertions(+), 1 deletion(-)
```

This is the ideal situation.  This will fast-forward the commit because it has found the commit that you wanted to `cherry-pick` from another branch and it causes no merge conflicts.  This means it will be committed automatically to your current branch.

If you run `git log`, you will now see that this commit is now, a part of your log with the original author and commit message.  Done!  Yay!

###### The Reality:  Merge Conflict

```
$ git cherry-pick 99daed2
error: could not apply 99daed2... commit
hint: after resolving the conflicts, mark the corrected paths
hint: with 'git add <paths>' or 'git rm <paths>'
hint: and commit the result with 'git commit'
```

If there is an issue with a `cherry-pick`, it is most likely caused by a merge conflict.  This means that the changes cannot be automatically merged.  You need to go to the files that were changed by the `cherry-pick` and it will show you something like this:

```
<html>
<body>

<<<<<<< HEAD
<h1>My First Heading</h1>
=======
<h1 class="heading">My First Heading</h1>
>>>>>>> 99daed2

<p>My first paragraph.</p>

</body>
</html>
```

Note: Merge conflicts often occur because the change you are applying has been altered by other changes, so the base changes in the file you are trying to change are no longer the same.

Between `<<<<<<< HEAD` and `=======` is the original code and between `=======` and `<<<<<<< 99daed2` (commit ID) is the `cherry-pick`ed code.

**_Action:_** You will need to resolve the merge conflict before continuing, by merging the desired changes from the `cherry-pick` and the appropriate changes changes from the current file.  Most of the time, it is as easy as removing all the conflict markers (i.e. `<<<<<< HEAD`) and the HEAD content.  Once removed, it should look something like this:

```
<html>
<body>

<h1 class="heading">My First Heading</h1>

<p>My first paragraph.</p>

</body>
</html>
```

Other times, Git does not interpret differences correctly so the best practice is to always check the `cherry-pick`ed commit in Git and check what was actually changed.  Then remove all conflict markers and the content of the cherry-picked commit (i.e. lines between `=======` and `<<<<<< 99daed2`).

```
<html>
<body>

<h1>My First Heading</h1> <!-- manually add 'class="heading"' -->

<p>My first paragraph.</p>

</body>
</html>
```

Starting off with the content that you had originally (_HEAD_), make the changes in your local files manually and save.  Most importantly, you must commit the resolution of the merge conflict by staging as usual (`git add`) and commit using the `--allow-empty` flag to keep original author and commit message (`git commit --allow-empty`).  This concludes the merge conflict and cherry pick!  Go ahead and test out your changes!

###### The Other Reality: Commit is not found

```
$ git cherry-pick 56035ad
fatal: bad revision '56035ad'

$ git cherry-pick 68ce5127bbb3a1e5dbef11b150625e6c05e6d427
fatal: bad object 68ce5127bbb3a1e5dbef11b150625e6c05e6d427

```

You may get this error because the commit has not been fetched from your remote yet or, plainly, the commit is not found in your local repository.  Make sure you fetch the latest changes from your upstream and try again!

</article>