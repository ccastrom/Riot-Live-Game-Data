import { createServer } from 'node:http';
import{startPolling} from './liveGamePollingService.js'
import { getLiveGameData } from './riotLiveClient.js';
import { getLastGameData } from './liveGamePollingService.js';
import{ playerLevelFilter } from './playerLevelFilter.js';
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
getLiveGameData();
startPolling();
getLastGameData();

setInterval(() => {
  const data = getLastGameData();
  playerLevelFilter(data);
}, 1000);