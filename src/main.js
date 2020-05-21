// // to modify the DOM depending on the screen
// function buildDom(htmlString){
//     var div = document.createElement("div");
//     div.innerHTML = htmlString;
//     return div.children[0];
//   }
//   // main game function for page load
//   function main() {
//     var splashScreen;
//     // SETTING GAME SPLASH SCREEN
//     function createSplashScreen() {
//       splashScreen = buildDom(`
//         <main>
//           <div class=“container”>
//             <div id=“title-box”>
//               <h1>Save the Sea</h1>
//             </div>
//             <div id=“instruction”>
//               <h2>Be a Green Warrior</h2>
//               <p>
//               Catch the garbages falling in the see with your fishnet. Use the left/right arrow key to move the fishnet.
//               </p>
//             </div>
//             <div class=“input-container”>
//               <button id=“start-btn” class =“button”>GO!</button>
//             </div>
//           </div>
//         </main>`);
//       document.body.appendChild(splashScreen);
//       var startButton = splashScreen.querySelector("#start-btn");
//       startButton.addEventListener("click", function() {
//         startGame();
//       });
//     }
//     function removeSplashScreen() {
//       splashScreen.remove();
//     }
//     // SETTING GAME SCREEN
//     function createGameScreen() {
//       var gameScreen = buildDom(`
//       <main class=“game game-container”>
//           <div class=“canvas-container”>
//             <canvas id=“myCanvas” width="700" height="631"></canvas>
//           </div>
//       </main>
//       `);
//       document.body.appendChild(gameScreen);
//       return gameScreen;
//     }

//     function startGame() {
//       removeSplashScreen();
//       gameScreen = createGameScreen();
//       start();
//     }
//     createSplashScreen();
//   }
//   window.addEventListener("load", main);