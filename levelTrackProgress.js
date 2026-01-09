let lastLevel = null;

export const trackLevel = (jsonData) => {
  if (!jsonData || !jsonData.activePlayer) {
    return;
  }

  const currentLevel = jsonData.activePlayer.level;

  const gameTime = Math.floor(jsonData.gameData.gameTime);

  if (lastLevel === null) {
    lastLevel = currentLevel;
    return;
  }

  if (currentLevel > lastLevel) {
    console.log("New Level!: ", currentLevel, "Minute:", parseTime(gameTime));
    lastLevel = currentLevel;
  }
};

const parseTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
};
