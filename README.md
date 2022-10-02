# Fourth Challenge for the UT-Austin Full Stack Development Bootcamp

## Create a Timed Quiz 


___


This project was assigned at the end of our first two weeks in camp and is meant to test all the concepts we've learned so far. That includes javascript, web APIs, CSS, and HTML. The goal is to present a page that will let the user take a timed quiz and return a score at the end of the test that will persist in a log of high scores. 

I checked all the boxes on the Acceptance Criteria and then added a few more details like interactive CSS elements that are styled through javascript and CSS as well as randomizing the questions and answer choices to name a couple. But first we should talk about how to use the app.



___



## How to use

On page load, you'll see a screen with instructions on how to play the quiz. You have a timed limit to answer the ten questions in the quiz. For each answer you get correct you get points. You'll also get bonus points for time left at the end of the quiz.

![Coding Quiz Homescreen](./assets/images/Timed%20Coding%20Quiz%20Home%20Screen.jpg)

Once you press start, the timer will start and you'll get your first question. If you select correctly, you'll move along the test. If you miss a question, you'll move along as well, but not before taking 15 seconds off the timer.

![Coding Quiz Question Screen example](./assets/images/Coding%20Quiz%20Question%20example.jpg)

Once you've answered all the questions or the timer runs out, your score will be compared with the top 10 scores saved on the quiz. If you make the top ten, you can save your initials and name along with your score.

![Coding Quiz Log High Score Name](./assets/images/Coding%20Quiz%20Log%20High%20Scores%20example.jpg)

If at any time you want to see the top ten scores on the quiz, you can click on the text at the left that says, appropriately enough, "Click here to see high scores." You'll then see a table listed with all of the top high scores on the test. If you want to start over or are feeling bitter about your performance, you can click on the "Clear High Scores button" on the screen to erase all the scores and start over.

![Coding Quiz High Score Page](./assets/images/Coding%20Quiz%20High%20Scores.jpg)


___


## Changes Made and Lessons Learned

- The original layout in the challenge documentation stayed as the inspiration for the overall look of the page. I did change the color scheme and added more CSS styling in an attempt to punch things up a bit. Some examples of additional CSS effects are...
    - Added box-shadows to all buttons to give a more three-dimensional feel. I also added the same effect to the question choices to make the list items in the HTML look more like buttons.
    - The question options change color based on the "correct"(green) or "incorrect"(red) determination.
    - Used :nth-child() pseudo elements to style the High Scores box with zebra stripe lines.
    - When the timer reaches 25 seconds, javascript adds a class to the text that changes the color to red. 
    - Border-radius definitions across the page to soften the overall look.
    - Lots more details ...

- I randomized the order of the questions and the arrangement of the answer possibilities. That took some research before I finally found a Stack Overflow topic with comments pointing to the Durstenfeld Shuffle. While I get a little lost in the math theory of why this works best, the code is simple and does a great job. Links to the two commenters are below.

 - The biggest lesson learned was the importance of global variables and how they behave differently from local variables in more ways than just scope. For example, when I first built the code to populate the answer list, I called each `<li>` to be added individually using the variables that I defined globally in the beginning of my script. Later I decided to go back and refactor the code to use a for loop in order to make it more future proof. But I quickly found that didn't work the same way. I ended up declaring a local version of the variable to use in the for loop and it all worked fine and is now future proof.

- To be honest I'm still not sure I understand this, but I had to convert my questions object into an array before I could effectively manipulate it. While I don't completely understand why that became neccessary and why I couldn't seem to get the same functionality trying to navigate through the questions object, converting to an array was fairly simple and quickly fixed the issues that were plaguing me.

- The interval timer stumped me for longer than I like to admit. FOr the longest time the timer would speed up the longer the test went. I finally realized that because I defined the timer as a local variable in the scope of the questions, each time the new questions ran, I started another instance of the timer. By changing the timer to a globally scoped variable it no longer sped up and kept solid time. To be safe, I moved it into it's own function and then called the questions function in order to fully separate the timer and make sure it was working as intended.
    - Apparently if I define a variable in a function without using `var`, `let`, or `const` it's considered a global variablem. Even if it was set inside a function. News to me but it helped fix the timer problem.

- I decided to limit the high scores to the top 10, even though the requirements didn't mention that. It too me a minute to decide the best way to handle that and even then I'm not sure it's the most elegant solution. It works. I'm just not sure it dances at the ball.

- I also learned the value of independent functions and the ability to call them as needed. Which also taught me the need for global variables, since values ended up being passed around between functions.

- Digging through the console was the only way I found to help me dig out values I needed for all the functions. `console.log` saved me hours of work and confusion.


___



## Possible Future Changes

- I'd like to animate some transitions between screens but I feel that may come later with react frameworks. I'm sure I could figure it out eventually with CSS, but I'm also sure there's an easier solution in the future.
- I wouldn't mind having a version that's styled as and old 8-bit game.


___



## Credits


The original visual concept of the quiz was created by staff of the UT Austin Full Stack Development Bootcamp. Thanks to Leah, Ian, Negin, Diem, and all the students who work with me daily to keep improving. 

I was finally introduced to the Durstenfeld shuffle at [Stack Overflow](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array) with the original comment from user [Laurens Holst](https://stackoverflow.com/users/310500/laurens-holst) and I believe the final edit was from [ashleedawg](https://stackoverflow.com/users/8112776/ashleedawg)


___



## License

MIT License

Copyright (c) 2022 Mark Gardner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.