## Description

Save the sea is a game where the player has to save the sea from the garbage with a fish net. The fish net move horizontally to catched the garbage thrown by the passer-by standing on the pier.The score of garbage catched is indicated at the top of the screen out of the remain item. 

## MVP (DOM - CANVAS)

Game has 1 fish net that moves horizontally with the left and right keyboard arrow.The garbage fall from the passer-by bag
In order to win the player needs to catch all the garbage.If the winner catch more than the half the garbage it will be congratulate, still.Increasing difficulty with garbages following quicker

## Backlog
* if the player winnext level is harder, quicker
* if the player lose, next level is same diffficulty

## main.js
* buildSplashScreen () {}
* buildGameScreen () {}
* buildGameOverScreen () {}

## game.js
* Game () {}
* starLoop () {}
* drawCanvas () {}
* addGargabe () {}
* checkCollisions () {}
* clearCanvas () {}
* updateCanvas () {}
* GameResult () {}

## garbage.js
* Garbage () { this.x; this.y; this.direction; this.size }
* draw () {}
* move () {}
* checkScreenCollision () {}

## fishnet.js
* Fishnet () { this.x; this.y; this.direction; this.size }
* draw () {}
* move () {}
* checkCollisionTop() {}

## Task
* main - buildDom
* main - buildSplashScreen
* main - buildGameScreen
* main - buildGameResultScreen
* main - addEventListener
* game - buildCanvas
* game - drawCanvas
* game - startLoop
* RainbowWarriorBoat - draw
* RainbowWarriorBoat - move
* garbage - draw
* garbage - move
* game - addGarbage
* fishnet - draw
* fishnet - move
* game - addFishnet
* game - checkCollision
* game - addEventListener
* game - GameOver
 
# Links
## Wireframe
[https://wireframepro.mockflow.com/view/Me3f93fbc316e36f9146b0f132d1680b1589545757478]

## Trello 
My Trello Link [https://trello.com/b/j2RTqXjp/save-the-sea-videogame]

## Git
URls for the project repo [https://github.com/aurorecr/save-the-sea-project1-game.git]

## Slides
URls for the project presentation 
 
 




