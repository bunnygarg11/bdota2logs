let b = [
  {
    message: "DB findActiveLobbiesForUser userId 76561199165399234  --> []",
    level: "debug",
    timestamp: "2021-05-02T09:34:31.029Z",
  },
  {
    message: "DB findPendingLobby  --> null",
    level: "debug",
    timestamp: "2021-05-02T09:34:31.334Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608e7227fc34d538e855f4f1,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'hungry-parrot-69',\n  createdOn: 2021-05-02T09:34:31.338Z,\n  updatedOn: 2021-05-02T09:34:31.339Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e7227fc34d538e855f4f1'\n}",
    level: "debug",
    timestamp: "2021-05-02T09:34:31.712Z",
  },
  {
    message: "DB findActiveLobbiesForUser userId 76561198177128005  --> []",
    level: "debug",
    timestamp: "2021-05-02T09:38:15.376Z",
  },
  {
    message:
      "DB findPendingLobby  --> {\n  _id: 608e7227fc34d538e855f4f1,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'hungry-parrot-69',\n  createdOn: 2021-05-02T09:34:31.338Z,\n  updatedOn: 2021-05-02T09:34:31.339Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e7227fc34d538e855f4f1'\n}",
    level: "debug",
    timestamp: "2021-05-02T09:38:15.468Z",
  },
  {
    message:
      "DB addPlayer  player 76561198177128005  --> {\n  _id: 608e7227fc34d538e855f4f1,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'hungry-parrot-69',\n  createdOn: 2021-05-02T09:34:31.338Z,\n  updatedOn: 2021-05-02T09:34:31.339Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e7227fc34d538e855f4f1'\n}",
    level: "debug",
    timestamp: "2021-05-02T09:38:15.535Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608e7227fc34d538e855f4f1,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'hungry-parrot-69',\n  createdOn: 2021-05-02T09:34:31.338Z,\n  updatedOn: 2021-05-02T09:34:31.339Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e7227fc34d538e855f4f1'\n}",
    level: "debug",
    timestamp: "2021-05-02T09:38:15.647Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T09:38:15.650Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-02T09:38:15.654Z",
  },
  {
    message:
      "LobbyManager runLobby 608e7227fc34d538e855f4f1 STATE_WAITING_FOR_BOT STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T09:38:15.659Z",
  },
  {
    message:
      "DB findLobbyById _id 608e7227fc34d538e855f4f1   --> {\n  _id: 608e7227fc34d538e855f4f1,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'hungry-parrot-69',\n  createdOn: 2021-05-02T09:34:31.338Z,\n  updatedOn: 2021-05-02T09:34:31.339Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e7227fc34d538e855f4f1'\n}",
    level: "debug",
    timestamp: "2021-05-02T09:38:15.734Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T09:38:15.737Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 608e7227fc34d538e855f4f1,\n  players: [ '76561199165399234', '76561198177128005' ]\n}",
    level: "debug",
    timestamp: "2021-05-02T09:38:15.804Z",
  },
  {
    message:
      "validateLobbyPlayers 608e7227fc34d538e855f4f1 end STATE_WAITING_FOR_BOT to STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T09:38:15.807Z",
  },
  {
    message: "STATE_WAITING_FOR_BOT 608e7227fc34d538e855f4f1 undefined",
    level: "debug",
    timestamp: "2021-05-02T09:38:15.816Z",
  },
  {
    message: "DB findUnassignedBot   --> null",
    level: "debug",
    timestamp: "2021-05-02T09:38:15.869Z",
  },
  {
    message:
      "DB findOrCreateBot steamId64 76561199139099147 accountName dynastyesports personaName my*****Name password St3@mAccountToBu!dlovelyAPI69 --> {\n  status: 'BOT_OFFLINE',\n  lobbyCount: 0,\n  _id: 608e7307fc34d538e855f4f2,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T09:38:15.878Z,\n  updated_at: 2021-05-02T09:38:15.878Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T09:38:15.942Z",
  },
  {
    message: "lobby run findUnassignedBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T09:38:15.946Z",
  },
  {
    message:
      "DB assignBotToLobby lobby [object Object] botId 608e7307fc34d538e855f4f2  --> {\n  _id: 608e7307fc34d538e855f4f2,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T09:38:15.878Z,\n  updated_at: 2021-05-02T09:38:15.997Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T09:38:16.059Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608e7227fc34d538e855f4f1,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_BOT_ASSIGNED',\n  password: 'hungry-parrot-69',\n  createdOn: 2021-05-02T09:34:31.338Z,\n  updatedOn: 2021-05-02T09:34:31.339Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e7227fc34d538e855f4f1',\n  botId: 608e7307fc34d538e855f4f2\n}",
    level: "debug",
    timestamp: "2021-05-02T09:38:16.116Z",
  },
  {
    message:
      "runLobby 608e7227fc34d538e855f4f1 STATE_WAITING_FOR_BOT to STATE_BOT_ASSIGNED",
    level: "debug",
    timestamp: "2021-05-02T09:38:16.118Z",
  },
  {
    message: "LobbyManager loadBotById 608e7307fc34d538e855f4f2",
    level: "debug",
    timestamp: "2021-05-02T09:38:16.122Z",
  },
  {
    message:
      "DB findBot  _id 608e7307fc34d538e855f4f2  --> {\n  _id: 608e7307fc34d538e855f4f2,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T09:38:15.878Z,\n  updated_at: 2021-05-02T09:38:15.997Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T09:38:16.178Z",
  },
  {
    message: "LobbyManager loadBot 608e7307fc34d538e855f4f2",
    level: "debug",
    timestamp: "2021-05-02T09:38:16.180Z",
  },
  {
    message: "LobbyManager getBot 608e7307fc34d538e855f4f2 ",
    level: "debug",
    timestamp: "2021-05-02T09:38:16.183Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_LOADING _id 608e7307fc34d538e855f4f2  --> {\n  _id: 608e7307fc34d538e855f4f2,\n  status: 'BOT_LOADING',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T09:38:15.878Z,\n  updated_at: 2021-05-02T09:38:16.185Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T09:38:16.248Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-02T09:38:16.284Z",
  },
  {
    message: "DotaBot connectDotaBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T09:38:16.290Z",
  },
  {
    message: "DotaBot connecting...",
    level: "debug",
    timestamp: "2021-05-02T09:38:16.294Z",
  },
  {
    message: "DotaBot logOnToSteam logging on steamUser...",
    level: "debug",
    timestamp: "2021-05-02T09:38:16.916Z",
  },
  {
    message: "DotaBot Received servers.",
    level: "debug",
    timestamp: "2021-05-02T09:38:17.943Z",
  },
  {
    message: "DotaBot set steam persona state and name.",
    level: "debug",
    timestamp: "2021-05-02T09:38:17.979Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-02T09:38:19.727Z",
  },
  {
    message: "Activating queue",
    level: "debug",
    timestamp: "2021-05-02T09:38:19.733Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-02T09:38:19.739Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-02T09:38:19.745Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_ONLINE steamId64 76561199139099147  --> {\n  _id: 608e7307fc34d538e855f4f2,\n  status: 'BOT_ONLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T09:38:15.878Z,\n  updated_at: 2021-05-02T09:38:19.749Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T09:38:19.816Z",
  },
  {
    message: "ihlManager loadBot loaded",
    level: "debug",
    timestamp: "2021-05-02T09:38:19.823Z",
  },
  {
    message: "ihlManager loadBot done",
    level: "debug",
    timestamp: "2021-05-02T09:38:19.825Z",
  },
  {
    message:
      "DotaBot createDotaBotLobby inhouse-lobby-608e7227fc34d538e855f4f1 hungry-parrot-69  DOTA_GAMEMODE_1V1MID 2  76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T09:38:19.831Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-02T09:38:19.837Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-02T09:38:19.839Z",
  },
  {
    message:
      "DotaBot createPracticeLobby {\n  game_name: 'inhouse-lobby-608e7227fc34d538e855f4f1',\n  server_region: 5,\n  game_mode: 2,\n  series_type: 1,\n  game_version: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  allow_spectating: true,\n  pass_key: 'hungry-parrot-69',\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  visibility: 0,\n  cm_pick: 1\n}",
    level: "debug",
    timestamp: "2021-05-02T09:38:19.858Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-02T09:38:20.032Z",
  },
  {
    message: "DotaBot practiceLobbyResponse CMsgGenericResult { eresult: 2 }",
    level: "debug",
    timestamp: "2021-05-02T09:38:20.613Z",
  },
  {
    message: "DotaBot createDotaBotLobby practice lobby failed",
    level: "debug",
    timestamp: "2021-05-02T09:38:20.619Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_IDLE steamId64 76561199139099147  --> {\n  _id: 608e7307fc34d538e855f4f2,\n  status: 'BOT_IDLE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T09:38:15.878Z,\n  updated_at: 2021-05-02T09:38:20.623Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T09:38:20.710Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-02T09:38:20.713Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-02T09:38:20.716Z",
  },
  {
    message: "DotaBot leavePracticeLobby",
    level: "debug",
    timestamp: "2021-05-02T09:38:20.719Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-02T09:38:20.737Z",
  },
  {
    message: "DotaBot practiceLobbyResponse CMsgGenericResult { eresult: 1 }",
    level: "debug",
    timestamp: "2021-05-02T09:38:21.326Z",
  },
  {
    message: "DotaBot leavePracticeLobby response undefined [object Object]",
    level: "debug",
    timestamp: "2021-05-02T09:38:21.330Z",
  },
  {
    level: "error",
    message: "DotaBot leaveLobbyChat missing lobby",
    timestamp: "2021-05-02T09:38:21.344Z",
  },
  {
    message:
      "DB unassignBotFromLobby lobby [object Object] botId 608e7307fc34d538e855f4f2  --> {\n  _id: 608e7307fc34d538e855f4f2,\n  status: 'BOT_IDLE',\n  lobbyCount: 0,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T09:38:15.878Z,\n  updated_at: 2021-05-02T09:38:21.408Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T09:38:21.468Z",
  },
  {
    message:
      "runLobby 608e7227fc34d538e855f4f1 STATE_BOT_ASSIGNED to STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T09:38:21.471Z",
  },
  {
    message: "STATE_WAITING_FOR_BOT 608e7227fc34d538e855f4f1 null",
    level: "debug",
    timestamp: "2021-05-02T09:38:21.474Z",
  },
  {
    message:
      "DB findUnassignedBot   --> {\n  _id: 608e7307fc34d538e855f4f2,\n  status: 'BOT_IDLE',\n  lobbyCount: 0,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T09:38:15.878Z,\n  updated_at: 2021-05-02T09:38:21.408Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T09:38:22.091Z",
  },
  {
    message: "lobby run findUnassignedBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T09:38:22.094Z",
  },
  {
    message:
      "DB assignBotToLobby lobby [object Object] botId 608e7307fc34d538e855f4f2  --> {\n  _id: 608e7307fc34d538e855f4f2,\n  status: 'BOT_IDLE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T09:38:15.878Z,\n  updated_at: 2021-05-02T09:38:22.186Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T09:38:22.254Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608e7227fc34d538e855f4f1,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_BOT_ASSIGNED',\n  password: 'hungry-parrot-69',\n  createdOn: 2021-05-02T09:34:31.338Z,\n  updatedOn: 2021-05-02T09:34:31.339Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e7227fc34d538e855f4f1',\n  botId: 608e7307fc34d538e855f4f2,\n  dotaLobbyId: null\n}",
    level: "debug",
    timestamp: "2021-05-02T09:38:22.323Z",
  },
  {
    message:
      "runLobby 608e7227fc34d538e855f4f1 STATE_WAITING_FOR_BOT to STATE_BOT_ASSIGNED",
    level: "debug",
    timestamp: "2021-05-02T09:38:22.325Z",
  },
  {
    message: "LobbyManager loadBotById 608e7307fc34d538e855f4f2",
    level: "debug",
    timestamp: "2021-05-02T09:38:22.328Z",
  },
  {
    message:
      "DB findBot  _id 608e7307fc34d538e855f4f2  --> {\n  _id: 608e7307fc34d538e855f4f2,\n  status: 'BOT_IDLE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T09:38:15.878Z,\n  updated_at: 2021-05-02T09:38:22.186Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T09:38:22.395Z",
  },
  {
    message: "LobbyManager loadBot 608e7307fc34d538e855f4f2",
    level: "debug",
    timestamp: "2021-05-02T09:38:22.398Z",
  },
  {
    message: "LobbyManager getBot 608e7307fc34d538e855f4f2 ",
    level: "debug",
    timestamp: "2021-05-02T09:38:22.401Z",
  },
  {
    message: "ihlManager loadBot done",
    level: "debug",
    timestamp: "2021-05-02T09:38:22.405Z",
  },
  {
    message:
      "DotaBot createDotaBotLobby inhouse-lobby-608e7227fc34d538e855f4f1 hungry-parrot-69  DOTA_GAMEMODE_1V1MID 2  76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T09:38:22.408Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-02T09:38:22.410Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-02T09:38:22.413Z",
  },
  {
    message:
      "DotaBot createPracticeLobby {\n  game_name: 'inhouse-lobby-608e7227fc34d538e855f4f1',\n  server_region: 5,\n  game_mode: 2,\n  series_type: 1,\n  game_version: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  allow_spectating: true,\n  pass_key: 'hungry-parrot-69',\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  visibility: 0,\n  cm_pick: 1\n}",
    level: "debug",
    timestamp: "2021-05-02T09:38:22.429Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-02T09:38:22.445Z",
  },
  {
    level: "error",
    message:
      "TimeoutError: operation timed out - trace: at listOnTimeout (internal/timers.js:554:17)\n    at processTimers (internal/timers.js:497:7)\nFrom previous event:\n    at DotaBot.createPracticeLobby (D:\\mohit\\blocks\\bexpressserver\\btest\\server\\services\\dotaBot\\dotaBot.js:1178:8)\n    at D:\\mohit\\blocks\\bexpressserver\\btest\\server\\services\\dotaBot\\dotaBot.js:245:32\n    at LobbyManager.STATE_BOT_ASSIGNED (D:\\mohit\\blocks\\bexpressserver\\btest\\server\\services\\dotaBot\\lobbyStateHandlers.js:283:73)\n    at processTicksAndRejections (internal/process/task_queues.js:93:5)\n    at async LobbyManager.runLobby (D:\\mohit\\blocks\\bexpressserver\\btest\\server\\services\\dotaBot\\lobbyManager.js:174:24)\n    at async LobbyManager.processEventQueue (D:\\mohit\\blocks\\bexpressserver\\btest\\server\\services\\dotaBot\\lobbyManager.js:493:23)",
    timestamp: "2021-05-02T09:38:27.460Z",
  },
  {
    message: "LobbyManager removeBot 608e7307fc34d538e855f4f2",
    level: "debug",
    timestamp: "2021-05-02T09:38:27.461Z",
  },
  {
    message: "LobbyManager getBot 608e7307fc34d538e855f4f2 ",
    level: "debug",
    timestamp: "2021-05-02T09:38:27.463Z",
  },
  {
    message: "DotaBot disconnectDotaBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T09:38:27.464Z",
  },
  {
    message: "DotaBot Logged off.",
    level: "debug",
    timestamp: "2021-05-02T09:38:27.474Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608e7227fc34d538e855f4f1,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_BOT_FAILED',\n  password: 'hungry-parrot-69',\n  createdOn: 2021-05-02T09:34:31.338Z,\n  updatedOn: 2021-05-02T09:34:31.339Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e7227fc34d538e855f4f1',\n  botId: 608e7307fc34d538e855f4f2,\n  dotaLobbyId: null\n}",
    level: "debug",
    timestamp: "2021-05-02T09:38:27.540Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_OFFLINE steamId64 76561199139099147  --> {\n  _id: 608e7307fc34d538e855f4f2,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T09:38:15.878Z,\n  updated_at: 2021-05-02T09:38:27.485Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T09:38:27.579Z",
  },
  {
    message: "ihlManager removeBot removed",
    level: "debug",
    timestamp: "2021-05-02T09:38:27.582Z",
  },
  {
    message:
      "DB unassignBotFromLobby lobby [object Object] botId 608e7307fc34d538e855f4f2  --> {\n  _id: 608e7307fc34d538e855f4f2,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 0,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T09:38:15.878Z,\n  updated_at: 2021-05-02T09:38:27.618Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T09:38:27.679Z",
  },
  {
    message:
      "runLobby 608e7227fc34d538e855f4f1 STATE_BOT_ASSIGNED to STATE_BOT_FAILED",
    level: "debug",
    timestamp: "2021-05-02T09:38:27.681Z",
  },
  {
    message:
      "runLobby 608e7227fc34d538e855f4f1 STATE_BOT_FAILED to STATE_BOT_FAILED",
    level: "debug",
    timestamp: "2021-05-02T09:38:27.688Z",
  },
  {
    message: "DB findActiveLobbiesForUser userId 76561198177128005  --> []",
    level: "debug",
    timestamp: "2021-05-02T09:41:14.274Z",
  },
  {
    message: "DB findPendingLobby  --> null",
    level: "debug",
    timestamp: "2021-05-02T09:41:14.444Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12'\n}",
    level: "debug",
    timestamp: "2021-05-02T09:41:14.832Z",
  },
  {
    message: "DB findActiveLobbiesForUser userId 76561199165399234  --> []",
    level: "debug",
    timestamp: "2021-05-02T09:41:25.169Z",
  },
  {
    message:
      "DB findPendingLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12'\n}",
    level: "debug",
    timestamp: "2021-05-02T09:41:25.266Z",
  },
  {
    message:
      "DB addPlayer  player 76561199165399234  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005', '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12'\n}",
    level: "debug",
    timestamp: "2021-05-02T09:41:25.366Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005', '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12'\n}",
    level: "debug",
    timestamp: "2021-05-02T09:41:25.571Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T09:41:25.590Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-02T09:41:25.603Z",
  },
  {
    message:
      "LobbyManager runLobby 608e73ba5a881b421486eb12 STATE_WAITING_FOR_BOT STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T09:41:26.103Z",
  },
  {
    message:
      "DB findLobbyById _id 608e73ba5a881b421486eb12   --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005', '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12'\n}",
    level: "debug",
    timestamp: "2021-05-02T09:41:26.356Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T09:41:26.410Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 608e73ba5a881b421486eb12,\n  players: [ '76561198177128005', '76561199165399234' ]\n}",
    level: "debug",
    timestamp: "2021-05-02T09:41:26.536Z",
  },
  {
    message:
      "validateLobbyPlayers 608e73ba5a881b421486eb12 end STATE_WAITING_FOR_BOT to STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T09:41:26.541Z",
  },
  {
    message: "STATE_WAITING_FOR_BOT 608e73ba5a881b421486eb12 undefined",
    level: "debug",
    timestamp: "2021-05-02T09:41:26.550Z",
  },
  {
    message: "DB findUnassignedBot   --> null",
    level: "debug",
    timestamp: "2021-05-02T09:41:26.611Z",
  },
  {
    message:
      "DB findOrCreateBot steamId64 76561199139099147 accountName dynastyesports personaName my*****Name password St3@mAccountToBu!dlovelyAPI69 --> {\n  status: 'BOT_OFFLINE',\n  lobbyCount: 0,\n  _id: 608e73c65a881b421486eb13,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T09:41:26.622Z,\n  updated_at: 2021-05-02T09:41:26.622Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T09:41:26.696Z",
  },
  {
    message: "lobby run findUnassignedBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T09:41:26.702Z",
  },
  {
    message:
      "DB assignBotToLobby lobby [object Object] botId 608e73c65a881b421486eb13  --> {\n  _id: 608e73c65a881b421486eb13,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T09:41:26.622Z,\n  updated_at: 2021-05-02T09:41:26.768Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T09:41:26.851Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005', '76561199165399234' ],\n  state: 'STATE_BOT_ASSIGNED',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: 608e73c65a881b421486eb13\n}",
    level: "debug",
    timestamp: "2021-05-02T09:41:26.954Z",
  },
  {
    message:
      "runLobby 608e73ba5a881b421486eb12 STATE_WAITING_FOR_BOT to STATE_BOT_ASSIGNED",
    level: "debug",
    timestamp: "2021-05-02T09:41:26.963Z",
  },
  {
    message: "LobbyManager loadBotById 608e73c65a881b421486eb13",
    level: "debug",
    timestamp: "2021-05-02T09:41:26.980Z",
  },
  {
    message:
      "DB findBot  _id 608e73c65a881b421486eb13  --> {\n  _id: 608e73c65a881b421486eb13,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T09:41:26.622Z,\n  updated_at: 2021-05-02T09:41:26.768Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T09:41:27.073Z",
  },
  {
    message: "LobbyManager loadBot 608e73c65a881b421486eb13",
    level: "debug",
    timestamp: "2021-05-02T09:41:27.080Z",
  },
  {
    message: "LobbyManager getBot 608e73c65a881b421486eb13 ",
    level: "debug",
    timestamp: "2021-05-02T09:41:27.084Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_LOADING _id 608e73c65a881b421486eb13  --> {\n  _id: 608e73c65a881b421486eb13,\n  status: 'BOT_LOADING',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T09:41:26.622Z,\n  updated_at: 2021-05-02T09:41:27.092Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T09:41:27.166Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-02T09:41:27.192Z",
  },
  {
    message: "DotaBot connectDotaBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T09:41:27.199Z",
  },
  {
    message: "DotaBot connecting...",
    level: "debug",
    timestamp: "2021-05-02T09:41:27.206Z",
  },
  {
    message: "DotaBot logOnToSteam logging on steamUser...",
    level: "debug",
    timestamp: "2021-05-02T09:41:27.802Z",
  },
  {
    message: "DotaBot set steam persona state and name.",
    level: "debug",
    timestamp: "2021-05-02T09:41:29.013Z",
  },
  {
    message: "DotaBot Received servers.",
    level: "debug",
    timestamp: "2021-05-02T09:41:29.561Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-02T09:41:30.870Z",
  },
  {
    message: "Activating queue",
    level: "debug",
    timestamp: "2021-05-02T09:41:30.877Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-02T09:41:30.885Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-02T09:41:30.897Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_ONLINE steamId64 76561199139099147  --> {\n  _id: 608e73c65a881b421486eb13,\n  status: 'BOT_ONLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T09:41:26.622Z,\n  updated_at: 2021-05-02T09:41:30.901Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T09:41:31.318Z",
  },
  {
    message: "ihlManager loadBot loaded",
    level: "debug",
    timestamp: "2021-05-02T09:41:31.449Z",
  },
  {
    message: "ihlManager loadBot done",
    level: "debug",
    timestamp: "2021-05-02T09:41:31.497Z",
  },
  {
    message:
      "DotaBot createDotaBotLobby inhouse-lobby-608e73ba5a881b421486eb12 young-robin-19  DOTA_GAMEMODE_1V1MID 2  76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T09:41:31.518Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-02T09:41:31.533Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-02T09:41:31.555Z",
  },
  {
    message:
      "DotaBot createPracticeLobby {\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  game_mode: 2,\n  series_type: 1,\n  game_version: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  allow_spectating: true,\n  pass_key: 'young-robin-19',\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  visibility: 0,\n  cm_pick: 1\n}",
    level: "debug",
    timestamp: "2021-05-02T09:41:31.609Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-02T09:41:31.916Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-02T09:41:32.755Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  null  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1870952681, high: 6327475, unsigned: true },\n  game_mode: 2,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  cm_pick: 1,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  this.teamCache [] ",
    level: "debug",
    timestamp: "2021-05-02T09:41:32.892Z",
  },
  {
    message: "DotaBot practiceLobbyResponse CMsgGenericResult { eresult: 1 }",
    level: "debug",
    timestamp: "2021-05-02T09:41:33.049Z",
  },
  {
    message: "DotaBot createDotaBotLobby practice lobby created",
    level: "debug",
    timestamp: "2021-05-02T09:41:33.171Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176300615272215   --> null",
    level: "debug",
    timestamp: "2021-05-02T09:41:33.294Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.dotaLobbyId 27176300615272215 not found. Bot 608e73c65a881b421486eb13 leaving lobby...",
    level: "debug",
    timestamp: "2021-05-02T09:41:33.334Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_IN_LOBBY steamId64 76561199139099147  --> {\n  _id: 608e73c65a881b421486eb13,\n  status: 'BOT_IN_LOBBY',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T09:41:26.622Z,\n  updated_at: 2021-05-02T09:41:33.186Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T09:41:33.469Z",
  },
  {
    message: "DotaBot createDotaBotLobby bot status updated",
    level: "debug",
    timestamp: "2021-05-02T09:41:33.535Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-02T09:41:33.608Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-02T09:41:33.684Z",
  },
  {
    message: "DotaBot practiceLobbyKickFromTeam 1178833419",
    level: "debug",
    timestamp: "2021-05-02T09:41:33.714Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-02T09:41:33.868Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-02T09:41:34.597Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1870952681, high: 6327475, unsigned: true },\n  game_mode: 2,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  cm_pick: 1,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1870952681, high: 6327475, unsigned: true },\n  game_mode: 2,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  cm_pick: 1,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  this.teamCache [] ",
    level: "debug",
    timestamp: "2021-05-02T09:41:34.758Z",
  },
  {
    message:
      "dotabot processMembers oldMembers [] newMembers[] members { left: [], joined: [], changedSlot: [] } ",
    level: "debug",
    timestamp: "2021-05-02T09:41:34.848Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1870952681, high: 6327475, unsigned: true },\n  game_mode: 2,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  cm_pick: 1,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}pending_invites undefined newLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1870952681, high: 6327475, unsigned: true },\n  game_mode: 2,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  cm_pick: 1,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-02T09:41:34.969Z",
  },
  {
    message: "membersToPlayerState playerState {}",
    level: "debug",
    timestamp: "2021-05-02T09:41:35.073Z",
  },
  {
    message: "dotaBot isDotaLobbyReady teamCache [] playerState {} ",
    level: "debug",
    timestamp: "2021-05-02T09:41:35.148Z",
  },
  {
    message: "DotaBot practiceLobbyResponse CMsgGenericResult { eresult: 1 }",
    level: "debug",
    timestamp: "2021-05-02T09:41:35.206Z",
  },
  {
    message:
      "DotaBot practiceLobbyKickFromTeam response undefined [object Object]",
    level: "debug",
    timestamp: "2021-05-02T09:41:35.249Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-02T09:41:35.387Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-02T09:41:35.440Z",
  },
  {
    message: "DotaBot joinChat Lobby_27176300615272215",
    level: "debug",
    timestamp: "2021-05-02T09:41:35.472Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-02T09:41:35.604Z",
  },
  {
    message: "enterLobbyP dotaLobbyId: 27176300615272215",
    level: "debug",
    timestamp: "2021-05-02T09:41:35.652Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176300615272215   --> null",
    level: "debug",
    timestamp: "2021-05-02T09:41:35.742Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.dotaLobbyId 27176300615272215 not found. Bot 608e73c65a881b421486eb13 leaving lobby...",
    level: "debug",
    timestamp: "2021-05-02T09:41:35.799Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005', '76561199165399234' ],\n  state: 'STATE_BOT_STARTED',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: 608e73c65a881b421486eb13,\n  dotaLobbyId: '27176300615272215'\n}",
    level: "debug",
    timestamp: "2021-05-02T09:41:35.853Z",
  },
  {
    message: "updateLobby done. 608e73ba5a881b421486eb12 STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-02T09:41:35.867Z",
  },
  {
    message:
      "STATE_BOT_ASSIGNED to STATE_BOT_STARTED 608e73ba5a881b421486eb12 STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-02T09:41:35.894Z",
  },
  {
    message:
      "runLobby 608e73ba5a881b421486eb12 STATE_BOT_ASSIGNED to STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-02T09:41:35.914Z",
  },
  {
    message: "LobbyManager getBot 608e73c65a881b421486eb13 ",
    level: "debug",
    timestamp: "2021-05-02T09:41:35.941Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 608e73ba5a881b421486eb12,\n  players: [ '76561198177128005', '76561199165399234' ]\n}",
    level: "debug",
    timestamp: "2021-05-02T09:41:36.049Z",
  },
  {
    message:
      "lobby run STATE_BOT_STARTED lobbyState {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005', '76561199165399234' ],\n  state: 'STATE_BOT_STARTED',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: '608e73c65a881b421486eb13',\n  dotaLobbyId: '27176300615272215'\n} players [ '76561198177128005', '76561199165399234' ] ",
    level: "debug",
    timestamp: "2021-05-02T09:41:36.068Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-02T09:41:36.076Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-02T09:41:36.079Z",
  },
  {
    message: "DotaBot inviteToLobby 76561198177128005",
    level: "debug",
    timestamp: "2021-05-02T09:41:36.083Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-02T09:41:36.114Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-02T09:41:36.134Z",
  },
  {
    message: "DotaBot inviteToLobby 76561199165399234",
    level: "debug",
    timestamp: "2021-05-02T09:41:36.232Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-02T09:41:36.363Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005', '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: 608e73c65a881b421486eb13,\n  dotaLobbyId: '27176300615272215'\n}",
    level: "debug",
    timestamp: "2021-05-02T09:41:36.451Z",
  },
  {
    message:
      "runLobby 608e73ba5a881b421486eb12 STATE_BOT_STARTED to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-02T09:41:36.511Z",
  },
  {
    message: "LobbyManager getBot 608e73c65a881b421486eb13 ",
    level: "debug",
    timestamp: "2021-05-02T09:41:36.549Z",
  },
  {
    message: "membersToPlayerState playerState {}",
    level: "debug",
    timestamp: "2021-05-02T09:41:36.576Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005', '76561199165399234' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-02T09:41:36.641Z",
  },
  {
    message:
      "runLobby 608e73ba5a881b421486eb12 STATE_WAITING_FOR_PLAYERS to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-02T09:41:36.683Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-02T09:42:00.540Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1870952681, high: 6327475, unsigned: true },\n  game_mode: 2,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  cm_pick: 1,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1870952681, high: 6327475, unsigned: true },\n  game_mode: 2,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  cm_pick: 1,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  this.teamCache [ '76561198177128005', '76561199165399234' ] ",
    level: "debug",
    timestamp: "2021-05-02T09:42:00.592Z",
  },
  {
    message:
      "dotabot processMembers oldMembers [] newMembers[] members { left: [], joined: [], changedSlot: [] } ",
    level: "debug",
    timestamp: "2021-05-02T09:42:00.599Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1870952681, high: 6327475, unsigned: true },\n  game_mode: 2,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  cm_pick: 1,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}pending_invites 76561199165399234 newLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1870952681, high: 6327475, unsigned: true },\n  game_mode: 2,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  cm_pick: 1,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-02T09:42:00.652Z",
  },
  {
    message: "membersToPlayerState playerState {}",
    level: "debug",
    timestamp: "2021-05-02T09:42:00.654Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005', '76561199165399234' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-02T09:42:00.656Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176300615272215   --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005', '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: 608e73c65a881b421486eb13,\n  dotaLobbyId: '27176300615272215'\n}",
    level: "debug",
    timestamp: "2021-05-02T09:42:00.777Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-02T09:44:14.145Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1870952681, high: 6327475, unsigned: true },\n  game_mode: 2,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  cm_pick: 1,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1870952681, high: 6327475, unsigned: true },\n  game_mode: 2,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  cm_pick: 1,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  this.teamCache [ '76561198177128005', '76561199165399234' ] ",
    level: "debug",
    timestamp: "2021-05-02T09:44:14.222Z",
  },
  {
    message:
      "dotabot processMembers oldMembers [] newMembers[] members { left: [], joined: [], changedSlot: [] } ",
    level: "debug",
    timestamp: "2021-05-02T09:44:14.231Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1870952681, high: 6327475, unsigned: true },\n  game_mode: 2,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  cm_pick: 1,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}pending_invites 76561199165399234 newLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1870952681, high: 6327475, unsigned: true },\n  game_mode: 2,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  cm_pick: 1,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-02T09:44:14.312Z",
  },
  {
    message: "membersToPlayerState playerState {}",
    level: "debug",
    timestamp: "2021-05-02T09:44:14.317Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005', '76561199165399234' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-02T09:44:14.324Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176300615272215   --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005', '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: 608e73c65a881b421486eb13,\n  dotaLobbyId: '27176300615272215'\n}",
    level: "debug",
    timestamp: "2021-05-02T09:44:14.397Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-02T09:45:15.440Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1870952681, high: 6327475, unsigned: true },\n  game_mode: 2,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  cm_pick: 1,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1870952681, high: 6327475, unsigned: true },\n  game_mode: 2,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  cm_pick: 1,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  this.teamCache [ '76561198177128005', '76561199165399234' ] ",
    level: "debug",
    timestamp: "2021-05-02T09:45:15.477Z",
  },
  {
    message:
      "dotabot processMembers oldMembers [] newMembers[] members { left: [], joined: [], changedSlot: [] } ",
    level: "debug",
    timestamp: "2021-05-02T09:45:15.481Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1870952681, high: 6327475, unsigned: true },\n  game_mode: 2,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  cm_pick: 1,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}pending_invites 76561199165399234 newLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1870952681, high: 6327475, unsigned: true },\n  game_mode: 2,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  cm_pick: 1,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-02T09:45:15.621Z",
  },
  {
    message: "membersToPlayerState playerState {}",
    level: "debug",
    timestamp: "2021-05-02T09:45:15.693Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005', '76561199165399234' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-02T09:45:15.824Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176300615272215   --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005', '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: 608e73c65a881b421486eb13,\n  dotaLobbyId: '27176300615272215'\n}",
    level: "debug",
    timestamp: "2021-05-02T09:45:16.077Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-02T09:45:19.942Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1870952681, high: 6327475, unsigned: true },\n  game_mode: 2,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  cm_pick: 1,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1870952681, high: 6327475, unsigned: true },\n  game_mode: 2,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  cm_pick: 1,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  this.teamCache [ '76561198177128005', '76561199165399234' ] ",
    level: "debug",
    timestamp: "2021-05-02T09:45:20.025Z",
  },
  {
    message:
      "dotabot processMembers oldMembers [] newMembers[] members { left: [], joined: [], changedSlot: [] } ",
    level: "debug",
    timestamp: "2021-05-02T09:45:20.031Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1870952681, high: 6327475, unsigned: true },\n  game_mode: 2,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  cm_pick: 1,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}pending_invites 76561199165399234 newLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1870952681, high: 6327475, unsigned: true },\n  game_mode: 2,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  cm_pick: 1,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-02T09:45:20.154Z",
  },
  {
    message: "membersToPlayerState playerState {}",
    level: "debug",
    timestamp: "2021-05-02T09:45:20.166Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005', '76561199165399234' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-02T09:45:20.173Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176300615272215   --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005', '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: 608e73c65a881b421486eb13,\n  dotaLobbyId: '27176300615272215'\n}",
    level: "debug",
    timestamp: "2021-05-02T09:45:20.260Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-02T09:46:07.090Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1870952681, high: 6327475, unsigned: true },\n  game_mode: 2,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  cm_pick: 1,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1870952681, high: 6327475, unsigned: true },\n  game_mode: 2,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  cm_pick: 1,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  this.teamCache [ '76561198177128005', '76561199165399234' ] ",
    level: "debug",
    timestamp: "2021-05-02T09:46:07.110Z",
  },
  {
    message:
      "dotabot processMembers oldMembers [] newMembers[] members { left: [], joined: [], changedSlot: [] } ",
    level: "debug",
    timestamp: "2021-05-02T09:46:07.111Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1870952681, high: 6327475, unsigned: true },\n  game_mode: 2,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  cm_pick: 1,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}pending_invites 76561199165399234 newLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1870952681, high: 6327475, unsigned: true },\n  game_mode: 2,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  cm_pick: 1,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-02T09:46:07.129Z",
  },
  {
    message: "membersToPlayerState playerState {}",
    level: "debug",
    timestamp: "2021-05-02T09:46:07.130Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005', '76561199165399234' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-02T09:46:07.131Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176300615272215   --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005', '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: 608e73c65a881b421486eb13,\n  dotaLobbyId: '27176300615272215'\n}",
    level: "debug",
    timestamp: "2021-05-02T09:46:07.267Z",
  },
];
