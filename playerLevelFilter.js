
export const  playerLevelFilter=(gameData)=>{

    try {
           if(!gameData || !gameData.activePlayer){
        console.log("No game data or active player found.");
    }
    console.log("Nivel del jugador:", gameData.activePlayer.level);
        
    } catch (error) {
        console.log("No hay dato filtrado:"+error)
    }
 
}