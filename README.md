# Rock Paper Scissors: An Introductory JavaScript Project

## Table of Contents
1. [Overview](#overview)
2. [The Game](#the-game)
3. [Retrospective](#retrospective)

## Overview
This project forms part of [The Odin Project](https://www.theodinproject.com/) Foundations Course. Following a brief introduction to the basics of JavaScript, you are tasked to create a simple game of "rock, paper, scissors" that can be played inside a browser console. This is my attempt to complete this project.

The purpose of this project is twofold. The first is to provide you with an opportunity to practise writing and using JavaScript. The second, arguably more important purpose, is to practise taking an algorithmic approach to problem-solving (as outlined in the "Problem-Solving" lesson in the course). 

As the intention is to practise problem-solving, I've opted to create and include an additional [markdown document](./problem-solving.md) that
- Provides a detailed description of the problem-solving methodology covered in the Foundations Course.
- A written example of the process being applied to this project.

---

**Note**: When developing this game, the focus was on ensuring it was operational within the Google Chrome browser. It may still function correctly in other browsers, however, there is no guarantee that it will.

## The Game
If you're interesting in testing the game, please ensure you're using the Google Chrome browser to ensure it functions as intended.

To play the game, please visit the following website and open the browser console: https://je-richards.github.io/odin-rock-paper-scissors/

To open the console in Google Chrome, choose one of the following options:
1. Right-click on the page, click on **Inspect** from the menu, then navigate to the tab.
2. Alternatively, use the following shortcut:
    * For Mac: cmd + option + J
    * For Windows, Linux, ChromeOS: ctrl + shift + J

## Retrospective 
As the purpose of this project is to practise what's been taught thus far in the Foundations course, I figured it would be worthwhile performing a retrospective to help identify opportunities for improvement.

The retrospective will be subsectioned based on date. That way, should I choose to return and improve upon this project, I can add further retrospectives to see how each iteration has improved upon the last and how my understanding of HTML, CSS, and JavaScript has improved. The SHA string for the latest commit will be included in each retrospective.

### May 20th, 2024
- Full commit SHA: a9090fdbcd85ae869278d1d650856164054149f5
- The pseudocode that I wrote didn't perfectly align with the final coded solution. It was very close, but the implemented code did deviate slightly. I think this will improve with time as I practise writing more and more pseudocode.
- The current implementation can only be played via the browser console, as per the project specification. One obvious room for improvement would be to allow the game to be played directly on the browser page without needing to open the console. Although this would involve going beyond the scope of the project.
- The bulk of the game code involves comparing the choice input by the user and the choice generated for the computer. I've written this via an if statement that explicitely outlines every possible outcome that can occur. However, I think with a little bit of tinkering this could be simplified to reduce the code needed.
- Some sections of the code, such as the initialisation of new variables, could be combined into a single line rather than being written explicitely across multiple lines. This is a very minor change that mainly benefits code length and readability.