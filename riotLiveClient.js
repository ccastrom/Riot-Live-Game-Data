process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export async function getLiveGameData() {

    try {
        const response = await fetch('https://127.0.0.1:2999/liveclientdata/allgamedata');
         if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
            const data = await response.json();
            console.log(data);
    } catch (error) {
        console.log(" error: "+error)
    }


}




