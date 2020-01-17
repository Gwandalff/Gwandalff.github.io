---
title: "Lines of Action game and Artificial Intelligence"
collection: portfolio
permalink: /portfolio/AI-lines-of-action
excerpt: 'The goal of this project was to create a web-based Lines of Action game and create some Artificial Intelligences for the game.'
---

<span class="align-left"><i class="fa fa-clock"></i> 05/11/2018 - 27/01/2019</span><br>
<span class="cf"></span>
<span class="align-left"><i class="fa fa-angle-right"></i> Project of the AI course by Zoltan MIKLOS</span><span class="align-right"><i class="fa fa-cogs"></i> Angular, TypeScipt <br></span>
<span class="cf full"></span>



The goal of this project was to create a web-based Lines of Action game and create some Artificial Intelligences for the game.

We choosed to not use back-end calculus to be able to publish the game in a Github Page and let everyone have fun with this project. We used Angular to create this project because we didn't know how to create an Angular application and we wanted to learn this new technology.

For the Artificial Intelligences, we have started by creating a basic AI which play randomly but always follow the rules of the game. So we begin to create the game flow and the function that calculate the valid moves of a given pawn. After that, create the random AI was really easy, we just have to pick randomly one of the AI's pawn and play randomly one of its valid moves.

After that we created two other AI that are more "Clever" than the random one. This two AI used the same algorithm, a Min-Max algorithm. The main issue is that there is millions of nodes in a Min-Max tree of the entire game. So, we used some heuristics to give an "Advantage" value for the possibles boards and process the Min-Max tree only on a selected depth. The difference between the two level of "Clever" AI is only the heuristics we selected for the "Advantage" calculation.



<span class="align-left"><i class="fa fa-users"></i> : JOUNEAUX Gwendal, BRETON Yoann, SCHNEIDER Timothée</span>
