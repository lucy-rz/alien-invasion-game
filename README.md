# ALIEN INVASION GAME - Project 1

## Pseudocode
  
 define state variables
- player: person will need click to a spaceship that will pop-up on the screen.
- spaceship: only one element will be displayed on the screen under the conditions of being random and for a very short amount of time.
- grid: this will be the container of a predefined amount of spaceships.
- points: if player correctly clicks on the displayed spaceship a point will be added to their marker.
- timer: time will be initialized once the player cliks start and it will be displayed on the screen.
- currently playing: set up to prevent multiple clicks once game has started

 cached elements
- start button
- play again button
- access to points element to update it if clicked
- displayed timer for player
- physical grid

 functions
- use random to display a spaceship from a location of the grid
- set a non-visible timer to display the random spaceship
- start game that will call init to set up game
- "start" button functionality to run game for the first time
- "play again" button 
- clickedSpaceship function when the player hits an element in the grid and in the span time.
- add points if player hits spaceship  
- set a visible timer for the player
- 

 event listeners
- clicked grid section
- play again button


