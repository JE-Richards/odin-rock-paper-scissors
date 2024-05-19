# Problem-Solving

## Table of Contents
1. [Overview](#overview)
2. [The Problem-Solving Process](#the-problem-solving-process)
    1. [Understanding the Problem](#1-understanding-the-problem)
    2. [Planning](#2-planning)
    3. [Pseudocode](#3-pseudocode)
    4. [Divide and Conquer](#4-divide-and-conquer)
3. [Applying the Approach to the Project](#applying-the-approach-to-the-project)
    1. [Project Problem](#project-problem)
    2. [Understanding the Problem](#understanding-the-problem)
    3. [Planning](#planning)
    4. [Pseudocode](#pseudocode)
    5. [Divide and Conquer](#divide-and-conquer)

## Overview
One of this project's purposes is for students to practise using the problem-solving approach previously outlined in the [Problem-Solving](https://www.theodinproject.com/lessons/foundations-problem-solving) lesson that forms part of the Foundations Course on [The Odin Project](https://www.theodinproject.com/).

As such, I've included this additional markdown file to outline the problem-solving process and to include my implementation of it. Outside of this project, it's unlikely that such a file will need to be included. However, the approach outlined herein will still likely be used even if it's not evident in the final product.

## The Problem-Solving Process
When approaching a problem, it's better to take a planned and methodical approach rather than jumping in trying to solve it haphazardly.

As such, the problem-solving process can be broken down into four steps (at least when it comes to programming anyway):
1. Understanding the problem
2. Planning
3. Pseudocode
4. Divide and conquer

Let's look at each step in a little more detail.

### 1. Understanding the problem
The first step to solving any problem should be ensuring that you *truly understand* what the problem is. If you don't understand the problem, you either won't know if it's been solved or not, or you'll waste time chasing an incorrect solution.

To ensure you understand the problem, try writing it down on paper in your own words. Draw diagrams too if it helps. But make sure that you can fully explain the problem yourself. If you can't, you might need to gather more information about the problem first.

As soon as you're able to accurately describe the problem to someone else, in plain English (or your native language), then you can be sure you're ready to move on to the next step.

### 2. Planning
You might understand the problem now, but that doesn't mean you're ready to jump straight into coding the solution. You need to plan *how* you're going to solve it first.

Many different approaches can be taken to formulate a plan, but one of the best is asking yourself simple, problem-related, questions and answering them. Some useful questions to consider might be:
- Does the program need a user interface? If it does, what will it look like? What functionality will it need?
- Does the program have inputs? Are they user generated or are they obtained elsewhere?
- What's the desired output?
- Given the inputs you have, what steps are needed to return the desired output?

Once you've done this, it's best to write out an algorithm that solves the problem. It doesn't need to be overly complex either. Think of it as a sequence of steps that need to be taken by the computer to solve the problem.

### 3. Pseudocode
If you've not encountered pseudocode before, don't panic. All it means is writing out the logic for your program in your natural language instead of in code.

This is a great step to take as it helps you slow down and think through each step your program will need to take to solve the problem. Doing this can help you reduce the amount of bugs you might have encountered had you hastily written out your code instead.

As for what to do with your pseudocode; write it as comments in the code file you're going to program. Not only is this useful to have when you're coding as it will tell you explicitely what you need to do, but it'll also act as an explanation for what the code you'll write is intended to do.

#### 4. Divide and Conquer
What your planning has done is break down the big problem into a sequence of smaller sub-problems. Each step of your algorithm should represent one of these smaller sub-problems. 

With these sub-problems identified, you can now start approaching each of them individually. Once you've coded them all correctly, you should have the solution to the initial problem.

Whilst this might sound like unnecessary busy-work, it isn't. If you try solving the big problem in one go, you'll make it a lot harder on yourself and end up tying yourself in knots. Well, you will if the problem is sufficiently complex anyway. 

Decomposing the big problem into smaller, easier to solve problems is a great way to deal with complexity. It makes something complex much more approachable and far less daunting.

## Applying the Approach to the Project

### Project Problem
> Create the game Rock Paper Scissors. The game will be played entirely in the console.

### Understanding the Problem
Based on the information provided, and the context of the course the project resides in, I'd reformulate the problem as:

Using JavaScript, build a game of Rock Paper Scissors that can be played using a browser console. The game will be played against the computer/code.

### Planning
- Does the game need a user interface?
    * Seeing as the game is played via the console, we won't need an interface.
    * However, it might be beneficial to use a popup box to accept the input of the user.
- Does the problem have inputs?
    * Yes, there will be an input generated by the user. The input will take one of three values, either rock, paper, or scissors.
- What's the desired output?
    * A message declaring whether the user has won or lost depending on the choice they made when compared to the choice generated for the computer.
- What steps need to be taken? (Think of this as the algorithm that will need to be implemented in code)
    1. The user is prompted to pick one of three options.
    2. The user makes a selection.
    3. A selection is made randomly by the program for the computer.
    4. Compare the users input against the computers choice.
    5. Decide whether the user has won or lost based on the rules of rock, paper, scissors.
        * Rock beats scissors
        * Paper beats rock
        * Scissors beats paper
        * It's a draw if both players choose the same option
    6. Output the result to the console.

### Pseudocode
Here I'll turn the algorithm created above into Pseudocode. The pseudocode will be included in the [JavaScript file](./rock-paper-scissors.js) as comments.

```
// Generate a pop-up box that asks the user to select one of three options;
// User makes a selection;
// Compute rock, paper, scissor choice for the computer;
// If user choice is rock then do;
    // If computer choice is rock then ouptput "Tie Game";
    // Else if computer choice is scissors then output "You Win!";
    // Else output "You Lose";
// Else if user choice is scissors then do;
    // If computer choice is rock then output "You Lose";
    // Else if computer choice is scissors then output "Tie Game";
    // Else output "You Win!";
// Else do;
    // If computer choice is rock then output "You Win!";
    // Else if computer choice is scissors then output "You Lose";
    // Else output "Tie Game";
// Print the output to the console;
```

### Divide and Conquer
This will be done via the implemented solution in [JavaScript file](./rock-paper-scissors.js).

The code will be written incrementally and tested after each incrament is added. Once the final code is completed and running as intended, the problem will be solved.