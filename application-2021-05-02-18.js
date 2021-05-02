let b = [
  
  {
    message: "DB findActiveLobbiesForUser userId 76561198177128005  --> []",
    level: "debug",
    timestamp: "2021-05-02T13:25:29.134Z",
  },
  {
    message:
      "DB findPendingLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: null,\n  dotaLobbyId: '27176300615272215'\n}",
    level: "debug",
    timestamp: "2021-05-02T13:25:29.271Z",
  },
  {
    message:
      "DB addPlayer  player 76561198177128005  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: null,\n  dotaLobbyId: '27176300615272215'\n}",
    level: "debug",
    timestamp: "2021-05-02T13:25:29.471Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: null,\n  dotaLobbyId: '27176300615272215'\n}",
    level: "debug",
    timestamp: "2021-05-02T13:25:29.540Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T13:25:29.547Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-02T13:25:29.549Z",
  },
  {
    message:
      "LobbyManager runLobby 608e73ba5a881b421486eb12 STATE_WAITING_FOR_BOT STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T13:25:29.553Z",
  },
  {
    message:
      "DB findLobbyById _id 608e73ba5a881b421486eb12   --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: null,\n  dotaLobbyId: '27176300615272215'\n}",
    level: "debug",
    timestamp: "2021-05-02T13:25:29.634Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T13:25:29.635Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 608e73ba5a881b421486eb12,\n  players: [ '76561199165399234', '76561198177128005' ]\n}",
    level: "debug",
    timestamp: "2021-05-02T13:25:29.750Z",
  },
  {
    message:
      "validateLobbyPlayers 608e73ba5a881b421486eb12 end STATE_WAITING_FOR_BOT to STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T13:25:29.752Z",
  },
  {
    message: "STATE_WAITING_FOR_BOT 608e73ba5a881b421486eb12 null",
    level: "debug",
    timestamp: "2021-05-02T13:25:29.754Z",
  },
  {
    message: "DB findUnassignedBot   --> null",
    level: "debug",
    timestamp: "2021-05-02T13:25:29.817Z",
  },
  {
    message:
      "DB findOrCreateBot steamId64 76561199139099147 accountName dynastyesports personaName my*****Name password St3@mAccountToBu!dlovelyAPI69 --> {\n  status: 'BOT_OFFLINE',\n  lobbyCount: 0,\n  _id: 608ea849786bb16290722c4e,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T13:25:29.837Z,\n  updated_at: 2021-05-02T13:25:29.837Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T13:25:29.983Z",
  },
  {
    message: "lobby run findUnassignedBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T13:25:29.986Z",
  },
  {
    message:
      "DB assignBotToLobby lobby [object Object] botId 608ea849786bb16290722c4e  --> {\n  _id: 608ea849786bb16290722c4e,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T13:25:29.837Z,\n  updated_at: 2021-05-02T13:25:30.070Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T13:25:30.221Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_BOT_ASSIGNED',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: 608ea849786bb16290722c4e,\n  dotaLobbyId: '27176300615272215'\n}",
    level: "debug",
    timestamp: "2021-05-02T13:25:30.294Z",
  },
  {
    message:
      "runLobby 608e73ba5a881b421486eb12 STATE_WAITING_FOR_BOT to STATE_BOT_ASSIGNED",
    level: "debug",
    timestamp: "2021-05-02T13:25:30.321Z",
  },
  {
    message: "LobbyManager loadBotById 608ea849786bb16290722c4e",
    level: "debug",
    timestamp: "2021-05-02T13:25:30.323Z",
  },
  {
    message:
      "DB findBot  _id 608ea849786bb16290722c4e  --> {\n  _id: 608ea849786bb16290722c4e,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T13:25:29.837Z,\n  updated_at: 2021-05-02T13:25:30.070Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T13:25:30.386Z",
  },
  {
    message: "LobbyManager loadBot 608ea849786bb16290722c4e",
    level: "debug",
    timestamp: "2021-05-02T13:25:30.388Z",
  },
  {
    message: "LobbyManager getBot 608ea849786bb16290722c4e ",
    level: "debug",
    timestamp: "2021-05-02T13:25:30.389Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_LOADING _id 608ea849786bb16290722c4e  --> {\n  _id: 608ea849786bb16290722c4e,\n  status: 'BOT_LOADING',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T13:25:29.837Z,\n  updated_at: 2021-05-02T13:25:30.394Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T13:25:30.506Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-02T13:25:30.551Z",
  },
  {
    message: "DotaBot connectDotaBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T13:25:30.553Z",
  },
  {
    message: "DotaBot connecting...",
    level: "debug",
    timestamp: "2021-05-02T13:25:30.554Z",
  },
  {
    message: "DotaBot logOnToSteam logging on steamUser...",
    level: "debug",
    timestamp: "2021-05-02T13:25:31.750Z",
  },
  {
    message: "DotaBot Received servers.",
    level: "debug",
    timestamp: "2021-05-02T13:25:33.041Z",
  },
  {
    message: "DotaBot set steam persona state and name.",
    level: "debug",
    timestamp: "2021-05-02T13:25:33.054Z",
  },
];
