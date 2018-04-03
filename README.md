# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable | 
|---|---| 
|Day 1: Tue| Wireframes and Priority Matrix|
|Day 2: Wed| Project Approval /  Pseudocode / actual code|
|Day 3: Thur| Basic Clickable Model |
|Day 4: Fri| Working Prototype |
|Day 5: Sat| Final Working Project |
|Day 6: Sun| Bugs / Stylying / PostMVP |
|Day 7: Mon| Project Presentations |


## Project Description

Title: MTplAy

Description: MTplAy is a New York City trivia game. The player receives a question 
that can pertain to the history of the city, a fun fact, or anything
in between. 

There are 10 questions in total and if you get four wrong, YOU'RE OUT. 
 


## Wireframes

https://res.cloudinary.com/dc6dj6gen/image/upload/v1522274216/IMG_3288.jpg
                      
https://res.cloudinary.com/dc6dj6gen/image/upload/v1522274213/IMG_3289.jpg
                      

## Priority Matrix

https://res.cloudinary.com/dc6dj6gen/image/upload/v1522274218/IMG_3290.jpg

## Game Components

### Landing Page
The landing page consists of the title of the game. 


### Game Initialization
The background will be a NYC themed backdrop, and each trivia question will be a smaller window within the broswer.

### Playing The Game
Each question is harder than the last. If you can keep a winning streak, you win! If you get four wrong, you lose!

### Winning The Game
If you answer every question correctly you win and the game reloads.

### Game Reset
If you win or lose you go back to the landing page.

## MVP 
- Each question will be multiple choice.
- There will be 10 questions.
- The order they are presented will be random every time.
- All questions are about NYC's past, present and mixed with some fun facts.
- A player loses if they get two questions wrong, in any order. Meaning two in a row, two at the beginning or end, two in any place.

## POST MVP
- Player can enter their name.
- Music
- A timer 
- A scoring system 
## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Question logic | H | 8hrs| 9hrs | 12hrs |
| Functionality | H | 8hrs | 9hrs | 12hrs | 
| Styling | H | 4hrs | 6hrs | 6hrs |
| Total |  | 20hrs| 22hrs | 30hrs |

## Helper Functions
Helper functions should be generic enough that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet
https://imgur.com/a/APatI

## jQuery Discoveries

  $('#choice1').on('click', () => {
    evaluate(triviaGame[i], $('#choice1').html())
    
This is the part of my code that evaluates if you're clicking the correct answer or not and whether the alert will appear. It ties into a function called askQuestion. 

## Change Log
I changed a few things while creating this trivia game.

- I was sure I'd impliment a score but never got that far.
- I wanted each question to have a time limit, like Kahoot.
- Over the course of the game I changed how many you can get wrong a few times. It was 3 wrong, then 5, then I settled with 4.
## Issues and Resolutions
 My biggest issue was getting my questions and choices to appear on the center of the page. 
I wanna give a big thank you to my classmate Andrew for helping me.
He showed me how to create a function that selects each choice presented on screen 
#### SAMPLE.....
**ERROR**: I'm actually dealing with an error now that says my .question is not defined in my checkAnswer function. Not sure why this is happening, it was working all day.                             
**RESOLUTION**: In the middle of trying to solve it now. 
