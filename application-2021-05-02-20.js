let b = [
  {
    message: "DB findActiveLobbiesForUser userId 76561198177128005  --> []",
    level: "debug",
    timestamp: "2021-05-02T14:54:14.114Z",
  },
  {
    message:
      "DB findPendingLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: null,\n  dotaLobbyId: '27176300615272215'\n}",
    level: "debug",
    timestamp: "2021-05-02T14:54:14.152Z",
  },
  {
    message:
      "DB addPlayer  player 76561198177128005  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: null,\n  dotaLobbyId: '27176300615272215'\n}",
    level: "debug",
    timestamp: "2021-05-02T14:54:14.197Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: null,\n  dotaLobbyId: '27176300615272215'\n}",
    level: "debug",
    timestamp: "2021-05-02T14:54:14.235Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T14:54:14.267Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-02T14:54:14.270Z",
  },
  {
    message:
      "LobbyManager runLobby 608e73ba5a881b421486eb12 STATE_WAITING_FOR_BOT STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T14:54:14.271Z",
  },
  {
    message:
      "DB findLobbyById _id 608e73ba5a881b421486eb12   --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: null,\n  dotaLobbyId: '27176300615272215'\n}",
    level: "debug",
    timestamp: "2021-05-02T14:54:14.328Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T14:54:14.329Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 608e73ba5a881b421486eb12,\n  players: [ '76561199165399234', '76561198177128005' ]\n}",
    level: "debug",
    timestamp: "2021-05-02T14:54:14.365Z",
  },
  {
    message:
      "validateLobbyPlayers 608e73ba5a881b421486eb12 end STATE_WAITING_FOR_BOT to STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T14:54:14.366Z",
  },
  {
    message: "STATE_WAITING_FOR_BOT 608e73ba5a881b421486eb12 null",
    level: "debug",
    timestamp: "2021-05-02T14:54:14.369Z",
  },
  {
    message: "DB findUnassignedBot   --> null",
    level: "debug",
    timestamp: "2021-05-02T14:54:14.399Z",
  },
  {
    message:
      "DB findOrCreateBot steamId64 76561199139099147 accountName dynastyesports personaName my*****Name password St3@mAccountToBu!dlovelyAPI69 --> {\n  status: 'BOT_OFFLINE',\n  lobbyCount: 0,\n  _id: 608ebd16cd773751d01df929,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T14:54:14.407Z,\n  updated_at: 2021-05-02T14:54:14.407Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T14:54:14.455Z",
  },
  {
    message: "lobby run findUnassignedBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T14:54:14.456Z",
  },
  {
    message:
      "DB assignBotToLobby lobby [object Object] botId 608ebd16cd773751d01df929  --> {\n  _id: 608ebd16cd773751d01df929,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T14:54:14.407Z,\n  updated_at: 2021-05-02T14:54:14.498Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T14:54:14.561Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_BOT_ASSIGNED',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: 608ebd16cd773751d01df929,\n  dotaLobbyId: '27176300615272215'\n}",
    level: "debug",
    timestamp: "2021-05-02T14:54:14.618Z",
  },
  {
    message:
      "runLobby 608e73ba5a881b421486eb12 STATE_WAITING_FOR_BOT to STATE_BOT_ASSIGNED",
    level: "debug",
    timestamp: "2021-05-02T14:54:14.619Z",
  },
  {
    message: "LobbyManager loadBotById 608ebd16cd773751d01df929",
    level: "debug",
    timestamp: "2021-05-02T14:54:14.620Z",
  },
  {
    message:
      "DB findBot  _id 608ebd16cd773751d01df929  --> {\n  _id: 608ebd16cd773751d01df929,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T14:54:14.407Z,\n  updated_at: 2021-05-02T14:54:14.498Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T14:54:14.661Z",
  },
  {
    message: "LobbyManager loadBot 608ebd16cd773751d01df929",
    level: "debug",
    timestamp: "2021-05-02T14:54:14.663Z",
  },
  {
    message: "LobbyManager getBot 608ebd16cd773751d01df929 ",
    level: "debug",
    timestamp: "2021-05-02T14:54:14.664Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_LOADING _id 608ebd16cd773751d01df929  --> {\n  _id: 608ebd16cd773751d01df929,\n  status: 'BOT_LOADING',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T14:54:14.407Z,\n  updated_at: 2021-05-02T14:54:14.667Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T14:54:14.721Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-02T14:54:17.015Z",
  },
  {
    message: "DotaBot connectDotaBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T14:54:17.017Z",
  },
  {
    message: "DotaBot connecting...",
    level: "debug",
    timestamp: "2021-05-02T14:54:17.018Z",
  },
  {
    message: "DotaBot logOnToSteam logging on steamUser...",
    level: "debug",
    timestamp: "2021-05-02T14:54:20.095Z",
  },
  {
    message: "DotaBot Received servers.",
    level: "debug",
    timestamp: "2021-05-02T14:54:26.703Z",
  },
  {
    message: "DotaBot set steam persona state and name.",
    level: "debug",
    timestamp: "2021-05-02T14:54:26.709Z",
  },
];
