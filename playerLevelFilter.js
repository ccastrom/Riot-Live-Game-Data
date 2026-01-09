import { trackLevel } from "./levelTrackProgress.js";
export const playerLevelFilter = (gameData) => {
  try {
    if (!gameData || !gameData.activePlayer) {
      //console.log("No game data or active player found.");
    }
    trackLevel(gameData);
  } catch (error) {
    console.log(" error playerLevelFilter.js: " + error);
  }
};
