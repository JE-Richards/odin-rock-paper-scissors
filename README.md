# Rock Paper Scissors: An Introductory JavaScript Project

## Table of Contents
1. [Overview](#overview)
2. [The Game](#the-game)
3. [Retrospective](#retrospective)

## Overview
This project forms part of [The Odin Project](https://www.theodinproject.com/) Foundations Course. 

### Part One
Following a brief introduction to the basics of JavaScript, you are tasked to create a simple game of "rock, paper, scissors" that can be played inside a browser console. This is my attempt to complete this project.

The purpose of this project is twofold. The first is to provide you with an opportunity to practise writing and using JavaScript. The second, arguably more important purpose, is to practise taking an algorithmic approach to problem-solving (as outlined in the "Problem-Solving" lesson in the course). 

As the intention is to practise problem-solving, I've opted to create and include an additional [markdown document](./problem-solving.md) that
- Provides a detailed description of the problem-solving methodology covered in the Foundations Course.
- A written example of the process being applied to this project.

### Part Two
Following the completion of part one, the course moves on to covering how to utilise JavaScript for DOM (Document Object Model) manipulation. Using this, you are then tasked with updating the game so that it has a UI and can be played directly on the webpage, rather than needing to utilise the DevTools console.

An additional objective for this part of the project is to use, and become familiar with, making and using git branches. You should create a new branch of the project to implement the UI changes, then merge back to the main branch once everything is functional.

---

**Note**: When developing this game, the focus was on ensuring it was operational within the Google Chrome browser. It may still function correctly in other browsers, however, there is no guarantee that it will.

## The Game
If you're interesting in testing the game, please ensure you're using the Google Chrome browser to ensure it functions as intended.

To play the game, please visit the following website: https://je-richards.github.io/odin-rock-paper-scissors/

## Retrospective 
As the purpose of this project is to practise what's been taught thus far in the Foundations course, I figured it would be worthwhile performing a retrospective to help identify opportunities for improvement.

The retrospective will be subsectioned based on date (most recent to oldest). That way, should I choose to return and improve upon this project, I can add further retrospectives to see how each iteration has improved upon the last and how my understanding of HTML, CSS, and JavaScript has improved. The SHA string for the latest commit will be included in each retrospective.

### May 22nd, 2024
- Full commit SHA: e870088569561974de7f317c1b2822f8b0ba67be
- Returning to this project highlighted the importance of a well-thought out project plan. Prior to writing my initial code for the game, I had done some amount of planning when producing the pseudocode. However, when both writing the pseudocode and subsequent code, my main focus was on producing something that worked. I hadn't put much thought into writing the code and organising it in a way that would make future modifications and additions a smoother and pain-free process. This added a significant time investment to this iteration in the form of untangling the initial code.
- I added an additional CSS file (technically outside of the project scope), just to make the page look a little less bland. Creating the stylesheet highlighted a need to enhance my familiarity with, and ability to use, flexboxes.

### May 20th, 2024
- Full commit SHA: a9090fdbcd85ae869278d1d650856164054149f5
- The pseudocode that I wrote didn't perfectly align with the final coded solution. It was very close, but the implemented code did deviate slightly. I think this will improve with time as I practise writing more and more pseudocode.
- The current implementation can only be played via the browser console, as per the project specification. One obvious room for improvement would be to allow the game to be played directly on the browser page without needing to open the console. Although this would involve going beyond the scope of the project.
- The bulk of the game code involves comparing the choice input by the user and the choice generated for the computer. I've written this via an if statement that explicitely outlines every possible outcome that can occur. However, I think with a little bit of tinkering this could be simplified to reduce the code needed.
- Some sections of the code, such as the initialisation of new variables, could be combined into a single line rather than being written explicitely across multiple lines. This is a very minor change that mainly benefits code length and readability.