import {getLiveGameData} from './riotLiveClient.js';

let lastGameData=null;
export const startPolling=()=>{
    setInterval(async()=>{
        try {
            lastGameData= await getLiveGameData();
        } catch (error) {
            lastGameData=null;
        }
    },1000)
  
}

export const getLastGameData=()=>{
    return lastGameData;
}