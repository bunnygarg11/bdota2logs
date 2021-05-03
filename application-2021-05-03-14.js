let b = [
  ,
  {
    message: "DB findActiveLobbiesForUser userId 76561198177128005  --> []",
    level: "debug",
    timestamp: "2021-05-03T09:05:13.461Z",
  },
  {
    message: "DB findPendingLobby  --> null",
    level: "debug",
    timestamp: "2021-05-03T09:05:13.494Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608fbcc99494403b24fe8ec4,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'selfish-firefox-42',\n  createdOn: 2021-05-03T09:05:13.499Z,\n  updatedOn: 2021-05-03T09:05:13.499Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fbcc99494403b24fe8ec4'\n}",
    level: "debug",
    timestamp: "2021-05-03T09:05:13.593Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608fbcc99494403b24fe8ec4,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'selfish-firefox-42',\n  createdOn: 2021-05-03T09:05:13.499Z,\n  updatedOn: 2021-05-03T09:05:13.499Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fbcc99494403b24fe8ec4'\n}",
    level: "debug",
    timestamp: "2021-05-03T09:05:13.635Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-03T09:05:13.636Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-03T09:05:13.637Z",
  },
  {
    message:
      "LobbyManager runLobby 608fbcc99494403b24fe8ec4 STATE_WAITING_FOR_BOT STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-03T09:05:13.637Z",
  },
  {
    message:
      "DB findLobbyById _id 608fbcc99494403b24fe8ec4   --> {\n  _id: 608fbcc99494403b24fe8ec4,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'selfish-firefox-42',\n  createdOn: 2021-05-03T09:05:13.499Z,\n  updatedOn: 2021-05-03T09:05:13.499Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fbcc99494403b24fe8ec4'\n}",
    level: "debug",
    timestamp: "2021-05-03T09:05:13.669Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-03T09:05:13.669Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> { _id: 608fbcc99494403b24fe8ec4, players: [ '76561198177128005' ] }",
    level: "debug",
    timestamp: "2021-05-03T09:05:13.700Z",
  },
  {
    message:
      "validateLobbyPlayers 608fbcc99494403b24fe8ec4 end STATE_WAITING_FOR_BOT to STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-03T09:05:13.700Z",
  },
  {
    message: "STATE_WAITING_FOR_BOT 608fbcc99494403b24fe8ec4 undefined",
    level: "debug",
    timestamp: "2021-05-03T09:05:13.702Z",
  },
  {
    message: "DB findUnassignedBot   --> null",
    level: "debug",
    timestamp: "2021-05-03T09:05:13.751Z",
  },
  {
    message:
      "DB findOrCreateBot steamId64 76561199139099147 accountName dynastyesports personaName my*****Name password St3@mAccountToBu!dlovelyAPI69 --> {\n  status: 'BOT_OFFLINE',\n  lobbyCount: 0,\n  _id: 608fbcc99494403b24fe8ec5,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-03T09:05:13.761Z,\n  updated_at: 2021-05-03T09:05:13.761Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-03T09:05:13.815Z",
  },
  {
    message: "lobby run findUnassignedBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-03T09:05:13.818Z",
  },
  {
    message:
      "DB assignBotToLobby lobby [object Object] botId 608fbcc99494403b24fe8ec5  --> {\n  _id: 608fbcc99494403b24fe8ec5,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-03T09:05:13.761Z,\n  updated_at: 2021-05-03T09:05:13.871Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-03T09:05:13.905Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608fbcc99494403b24fe8ec4,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_BOT_ASSIGNED',\n  password: 'selfish-firefox-42',\n  createdOn: 2021-05-03T09:05:13.499Z,\n  updatedOn: 2021-05-03T09:05:13.499Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n  botId: 608fbcc99494403b24fe8ec5\n}",
    level: "debug",
    timestamp: "2021-05-03T09:05:13.944Z",
  },
  {
    message:
      "runLobby 608fbcc99494403b24fe8ec4 STATE_WAITING_FOR_BOT to STATE_BOT_ASSIGNED",
    level: "debug",
    timestamp: "2021-05-03T09:05:13.946Z",
  },
  {
    message: "LobbyManager loadBotById 608fbcc99494403b24fe8ec5",
    level: "debug",
    timestamp: "2021-05-03T09:05:13.950Z",
  },
  {
    message:
      "DB findBot  _id 608fbcc99494403b24fe8ec5  --> {\n  _id: 608fbcc99494403b24fe8ec5,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-03T09:05:13.761Z,\n  updated_at: 2021-05-03T09:05:13.871Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-03T09:05:13.987Z",
  },
  {
    message: "LobbyManager loadBot 608fbcc99494403b24fe8ec5",
    level: "debug",
    timestamp: "2021-05-03T09:05:13.988Z",
  },
  {
    message: "LobbyManager getBot 608fbcc99494403b24fe8ec5 bot undefined",
    level: "debug",
    timestamp: "2021-05-03T09:05:13.988Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_LOADING _id 608fbcc99494403b24fe8ec5  --> {\n  _id: 608fbcc99494403b24fe8ec5,\n  status: 'BOT_LOADING',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-03T09:05:13.761Z,\n  updated_at: 2021-05-03T09:05:13.989Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-03T09:05:14.067Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-03T09:05:14.071Z",
  },
  {
    message: "DotaBot connectDotaBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-03T09:05:14.071Z",
  },
  {
    message: "DotaBot connecting...",
    level: "debug",
    timestamp: "2021-05-03T09:05:14.072Z",
  },
  {
    message: "DotaBot logOnToSteam logging on steamUser...",
    level: "debug",
    timestamp: "2021-05-03T09:05:14.621Z",
  },
  {
    message: "DotaBot Received servers.",
    level: "debug",
    timestamp: "2021-05-03T09:05:15.405Z",
  },
  {
    message: "DotaBot set steam persona state and name.",
    level: "debug",
    timestamp: "2021-05-03T09:05:15.410Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-03T09:05:17.158Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-03T09:05:17.160Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-03T09:05:17.309Z",
  },
  {
    message: "Activating queue",
    level: "debug",
    timestamp: "2021-05-03T09:05:17.310Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T09:05:17.311Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-03T09:05:17.312Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_ONLINE steamId64 76561199139099147  --> {\n  _id: 608fbcc99494403b24fe8ec5,\n  status: 'BOT_ONLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-03T09:05:13.761Z,\n  updated_at: 2021-05-03T09:05:17.313Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-03T09:05:17.593Z",
  },
  {
    message: "ihlManager loadBot loaded",
    level: "debug",
    timestamp: "2021-05-03T09:05:17.594Z",
  },
  {
    message: "ihlManager loadBot done",
    level: "debug",
    timestamp: "2021-05-03T09:05:17.594Z",
  },
  {
    message:
      "DotaBot createDotaBotLobby inhouse-lobby-608fbcc99494403b24fe8ec4 selfish-firefox-42  DOTA_GAMEMODE_1V1MID 21  76561199139099147",
    level: "debug",
    timestamp: "2021-05-03T09:05:17.596Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-03T09:05:17.596Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-03T09:05:17.597Z",
  },
  {
    message:
      "DotaBot createPracticeLobby {\n  game_name: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n  server_region: 5,\n  game_mode: 21,\n  series_type: 1,\n  game_version: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  allow_spectating: true,\n  pass_key: 'selfish-firefox-42',\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  visibility: 0,\n  cm_pick: 0\n}",
    level: "debug",
    timestamp: "2021-05-03T09:05:17.600Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T09:05:17.611Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 8678",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.009Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.129Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  null  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1249881902, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'selfish-firefox-42',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  this.teamCache [] ",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.147Z",
  },
  {
    message: "DotaBot practiceLobbyResponse CMsgGenericResult { eresult: 1 }",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.152Z",
  },
  {
    message: "DotaBot createDotaBotLobby practice lobby created",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.155Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176301236342994   --> null",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.192Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.dotaLobbyId 27176301236342994 not found. Bot 608fbcc99494403b24fe8ec5 leaving lobby...",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.193Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_IN_LOBBY steamId64 76561199139099147  --> {\n  _id: 608fbcc99494403b24fe8ec5,\n  status: 'BOT_IN_LOBBY',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-03T09:05:13.761Z,\n  updated_at: 2021-05-03T09:05:18.158Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.225Z",
  },
  {
    message: "DotaBot createDotaBotLobby bot status updated",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.226Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.227Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.228Z",
  },
  {
    message: "DotaBot practiceLobbyKickFromTeam 1178833419",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.230Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.233Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.829Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1249881902, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'selfish-firefox-42',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1249881902, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'selfish-firefox-42',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  this.teamCache [] ",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.844Z",
  },
  {
    message: "DotaBot practiceLobbyResponse CMsgGenericResult { eresult: 1 }",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.848Z",
  },
  {
    message:
      "DotaBot practiceLobbyKickFromTeam response undefined [object Object]",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.849Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.850Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.851Z",
  },
  {
    message: "DotaBot joinChat Lobby_27176301236342994",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.851Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.858Z",
  },
  {
    message: "enterLobbyP dotaLobbyId: 27176301236342994",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.859Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176301236342994   --> null",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.878Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.dotaLobbyId 27176301236342994 not found. Bot 608fbcc99494403b24fe8ec5 leaving lobby...",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.878Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608fbcc99494403b24fe8ec4,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_BOT_STARTED',\n  password: 'selfish-firefox-42',\n  createdOn: 2021-05-03T09:05:13.499Z,\n  updatedOn: 2021-05-03T09:05:13.499Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301236342994'\n}",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.901Z",
  },
  {
    message: "updateLobby done. 608fbcc99494403b24fe8ec4 STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.902Z",
  },
  {
    message:
      "STATE_BOT_ASSIGNED to STATE_BOT_STARTED 608fbcc99494403b24fe8ec4 STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.902Z",
  },
  {
    message:
      "runLobby 608fbcc99494403b24fe8ec4 STATE_BOT_ASSIGNED to STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.903Z",
  },
  {
    message:
      "LobbyManager getBot 608fbcc99494403b24fe8ec5 bot DotaBot {\n  _events: [Object: null prototype] {\n    EVENT_LOBBY_READY: [Function (anonymous)],\n    EVENT_BOT_LOBBY_LEFT: [Function (anonymous)],\n    EVENT_MATCH_SIGNEDOUT: [Function (anonymous)],\n    EVENT_MATCH_OUTCOME: [Function (anonymous)]\n  },\n  _eventsCount: 4,\n  _maxListeners: undefined,\n  _connectionState: 'DOTA_CONNECTED',\n  _connectionAttempts: 1,\n  _connecting: false,\n  _lobbyOptions: {\n    game_name: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n    server_region: 5,\n    game_mode: 21,\n    series_type: 1,\n    game_version: 1,\n    allow_cheats: false,\n    fill_with_bots: false,\n    allow_spectating: true,\n    pass_key: 'selfish-firefox-42',\n    radiant_series_wins: 0,\n    dire_series_wins: 0,\n    allchat: true,\n    visibility: 0,\n    cm_pick: 0\n  },\n  _teamCache: [],\n  _pending_invites: true,\n  _queue: Queue {\n    _backoff: 10000,\n    _rateLimit: 1,\n    _debug: true,\n    _retries: 0,\n    _state: 'idle',\n    _queue: []\n  },\n  config: {\n    _id: 608fbcc99494403b24fe8ec5,\n    status: 'BOT_OFFLINE',\n    lobbyCount: 1,\n    steamId64: '76561199139099147',\n    accountName: 'dynastyesports',\n    personaName: 'my*****Name',\n    password: 'St3@mAccountToBu!dlovelyAPI69',\n    created_at: 2021-05-03T09:05:13.761Z,\n    updated_at: 2021-05-03T09:05:13.871Z,\n    __v: 0,\n    steam_guard_code: '3DW4R',\n    two_factor_code: undefined\n  },\n  steamClient: SteamClient {\n    _events: [Object: null prototype] {\n      message: [Array],\n      logOnResponse: [Array],\n      loggedOff: [Function (anonymous)],\n      error: [AsyncFunction (anonymous)],\n      servers: [Function (anonymous)]\n    },\n    _eventsCount: 5,\n    _maxListeners: undefined,\n    _jobs: {},\n    _currentJobID: 0,\n    sessionID: 1802521086,\n    _connection: Connection {\n      connecting: false,\n      _hadError: false,\n      _parent: null,\n      _host: null,\n      _readableState: [ReadableState],\n      _events: [Object: null prototype],\n      _eventsCount: 7,\n      _maxListeners: undefined,\n      _writableState: [WritableState],\n      allowHalfOpen: false,\n      _sockname: null,\n      _pendingData: null,\n      _pendingEncoding: '',\n      server: null,\n      _server: null,\n      timeout: 0,\n      sessionKey: <Buffer d7 cd af 90 68 79 d6 a8 4b 17 5f 98 cd 20 39 01 d1 9e 50 22 0c 0f 2e a9 5b 24 44 71 53 7e 83 a8>,\n      [Symbol(async_id_symbol)]: 2674,\n      [Symbol(kHandle)]: [TCP],\n      [Symbol(kSetNoDelay)]: false,\n      [Symbol(lastWriteQueueSize)]: 0,\n      [Symbol(timeout)]: Timeout {\n        _idleTimeout: -1,\n        _idlePrev: null,\n        _idleNext: null,\n        _idleStart: 1029159,\n        _onTimeout: null,\n        _timerArgs: undefined,\n        _repeat: null,\n        _destroyed: true,\n        [Symbol(refed)]: false,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 2673,\n        [Symbol(triggerId)]: 2653\n      },\n      [Symbol(kBuffer)]: null,\n      [Symbol(kBufferCb)]: null,\n      [Symbol(kBufferGen)]: null,\n      [Symbol(kCapture)]: false,\n      [Symbol(kBytesRead)]: 0,\n      [Symbol(kBytesWritten)]: 0\n    },\n    _tempSessionKey: <Buffer d7 cd af 90 68 79 d6 a8 4b 17 5f 98 cd 20 39 01 d1 9e 50 22 0c 0f 2e a9 5b 24 44 71 53 7e 83 a8>,\n    connected: true,\n    steamID: '76561199139099147',\n    _heartBeatFunc: Timeout {\n      _idleTimeout: 9000,\n      _idlePrev: [TimersList],\n      _idleNext: [TimersList],\n      _idleStart: 1030131,\n      _onTimeout: [Function: bound ],\n      _timerArgs: undefined,\n      _repeat: 9000,\n      _destroyed: false,\n      [Symbol(refed)]: true,\n      [Symbol(kHasPrimitive)]: false,\n      [Symbol(asyncId)]: 2712,\n      [Symbol(triggerId)]: 2703\n    },\n    loggedOn: true,\n    [Symbol(kCapture)]: false\n  },\n  steamUser: SteamUser {\n    _client: SteamClient {\n      _events: [Object: null prototype],\n      _eventsCount: 5,\n      _maxListeners: undefined,\n      _jobs: {},\n      _currentJobID: 0,\n      sessionID: 1802521086,\n      _connection: [Connection],\n      _tempSessionKey: <Buffer d7 cd af 90 68 79 d6 a8 4b 17 5f 98 cd 20 39 01 d1 9e 50 22 0c 0f 2e a9 5b 24 44 71 53 7e 83 a8>,\n      connected: true,\n      steamID: '76561199139099147',\n      _heartBeatFunc: Timeout {\n        _idleTimeout: 9000,\n        _idlePrev: [TimersList],\n        _idleNext: [TimersList],\n        _idleStart: 1030131,\n        _onTimeout: [Function: bound ],\n        _timerArgs: undefined,\n        _repeat: 9000,\n        _destroyed: false,\n        [Symbol(refed)]: true,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 2712,\n        [Symbol(triggerId)]: 2703\n      },\n      loggedOn: true,\n      [Symbol(kCapture)]: false\n    },\n    _events: [Object: null prototype] {\n      updateMachineAuth: [Function (anonymous)]\n    },\n    _eventsCount: 1\n  },\n  steamFriends: SteamFriends {\n    _client: SteamClient {\n      _events: [Object: null prototype],\n      _eventsCount: 5,\n      _maxListeners: undefined,\n      _jobs: {},\n      _currentJobID: 0,\n      sessionID: 1802521086,\n      _connection: [Connection],\n      _tempSessionKey: <Buffer d7 cd af 90 68 79 d6 a8 4b 17 5f 98 cd 20 39 01 d1 9e 50 22 0c 0f 2e a9 5b 24 44 71 53 7e 83 a8>,\n      connected: true,\n      steamID: '76561199139099147',\n      _heartBeatFunc: Timeout {\n        _idleTimeout: 9000,\n        _idlePrev: [TimersList],\n        _idleNext: [TimersList],\n        _idleStart: 1030131,\n        _onTimeout: [Function: bound ],\n        _timerArgs: undefined,\n        _repeat: 9000,\n        _destroyed: false,\n        [Symbol(refed)]: true,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 2712,\n        [Symbol(triggerId)]: 2703\n      },\n      loggedOn: true,\n      [Symbol(kCapture)]: false\n    },\n    personaStates: { '76561199139099147': [Object] },\n    clanStates: {},\n    chatRooms: {},\n    friends: {},\n    groups: {},\n    _personaState: 1\n  },\n  Dota2: Dota2Client {\n    _events: [Object: null prototype] {\n      ready: [Function (anonymous)],\n      unready: [Function (anonymous)],\n      unhandled: [Function (anonymous)],\n      practiceLobbyUpdate: [Function (anonymous)],\n      practiceLobbyCleared: [Function (anonymous)],\n      matchSignedOut: [Function (anonymous)],\n      practiceLobbyResponse: [Function (anonymous)],\n      chatMessage: [Function (anonymous)]\n    },\n    _eventsCount: 8,\n    _maxListeners: undefined,\n    debug: true,\n    debugMore: true,\n    Logger: DerivedLogger {\n      _readableState: [ReadableState],\n      readable: true,\n      _events: [Object: null prototype],\n      _eventsCount: 3,\n      _maxListeners: undefined,\n      _writableState: [WritableState],\n      writable: true,\n      allowHalfOpen: true,\n      _transformState: [Object],\n      silent: undefined,\n      format: [Format],\n      defaultMeta: null,\n      levels: [Object],\n      level: 'silly',\n      exceptions: [ExceptionHandler],\n      rejections: [RejectionHandler],\n      profilers: {},\n      exitOnError: true,\n      [Symbol(kCapture)]: false\n    },\n    Inventory: [ [CSOEconItem], [CSOEconItem] ],\n    chatChannels: [],\n    Lobby: CSODOTALobby {\n      members: [],\n      left_members: [],\n      pending_invites: [],\n      team_details: [],\n      timed_reward_details: [],\n      broadcast_channel_info: [],\n      extra_messages: [],\n      previous_series_matches: [],\n      event_progression_enabled: [],\n      emergency_disabled_hero_ids: [],\n      mutations: [],\n      lobby_id: [Long],\n      game_mode: 21,\n      state: 0,\n      leader_id: [Long],\n      lobby_type: 1,\n      allow_cheats: false,\n      fill_with_bots: false,\n      intro_mode: false,\n      game_name: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n      server_region: 5,\n      cm_pick: 0,\n      allow_spectating: true,\n      bot_difficulty_radiant: 0,\n      game_version: 1,\n      pass_key: 'selfish-firefox-42',\n      leagueid: 0,\n      penalty_level_radiant: 0,\n      penalty_level_dire: 0,\n      series_type: 1,\n      radiant_series_wins: 0,\n      dire_series_wins: 0,\n      allchat: true,\n      dota_tv_delay: 1,\n      lan: false,\n      visibility: 0,\n      previous_match_override: [Long],\n      pause_setting: 0,\n      bot_difficulty_dire: 0,\n      bot_radiant: [Long],\n      bot_dire: [Long],\n      selection_priority_rules: 0,\n      league_node_id: 0\n    },\n    LobbyInvite: null,\n    Party: null,\n    PartyInvite: null,\n    _user: SteamUser { _client: [SteamClient] },\n    _client: SteamClient {\n      _events: [Object: null prototype],\n      _eventsCount: 5,\n      _maxListeners: undefined,\n      _jobs: {},\n      _currentJobID: 0,\n      sessionID: 1802521086,\n      _connection: [Connection],\n      _tempSessionKey: <Buffer d7 cd af 90 68 79 d6 a8 4b 17 5f 98 cd 20 39 01 d1 9e 50 22 0c 0f 2e a9 5b 24 44 71 53 7e 83 a8>,\n      connected: true,\n      steamID: '76561199139099147',\n      _heartBeatFunc: Timeout {\n        _idleTimeout: 9000,\n        _idlePrev: [TimersList],\n        _idleNext: [TimersList],\n        _idleStart: 1030131,\n        _onTimeout: [Function: bound ],\n        _timerArgs: undefined,\n        _repeat: 9000,\n        _destroyed: false,\n        [Symbol(refed)]: true,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 2712,\n        [Symbol(triggerId)]: 2703\n      },\n      loggedOn: true,\n      [Symbol(kCapture)]: false\n    },\n    _gc: SteamGameCoordinator {\n      _client: [SteamClient],\n      _appid: 570,\n      _jobs: [Object],\n      _currentJobID: 2,\n      _events: [Object: null prototype],\n      _eventsCount: 1\n    },\n    _appid: 570,\n    _gcReady: true,\n    _gcClientHelloIntervalId: null,\n    _gcConnectionStatus: 3,\n    _protoBufHeader: { msg: 7009, proto: [Object] },\n    _sendClientHello: [Function (anonymous)],\n    AccountID: 1178833419,\n    _gcClientHelloCount: 1,\n    [Symbol(kCapture)]: false\n  },\n  logOnDetails: {\n    account_name: 'dynastyesports',\n    password: 'St3@mAccountToBu!dlovelyAPI69',\n    auth_code: '3DW4R',\n    sha_sentryfile: <Buffer 0d f9 ab fb 57 ec fe c8 52 e4 6c 9f d6 ca 0c 54 f0 91 94 6a>,\n    protocol_version: 65575\n  },\n  [Symbol(kCapture)]: false\n}",
    level: "debug",
    timestamp: "2021-05-03T09:05:18.970Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> { _id: 608fbcc99494403b24fe8ec4, players: [ '76561198177128005' ] }",
    level: "debug",
    timestamp: "2021-05-03T09:05:19.008Z",
  },
  {
    message:
      "lobby run STATE_BOT_STARTED lobbyState {\n  _id: 608fbcc99494403b24fe8ec4,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_BOT_STARTED',\n  password: 'selfish-firefox-42',\n  createdOn: 2021-05-03T09:05:13.499Z,\n  updatedOn: 2021-05-03T09:05:13.499Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n  botId: '608fbcc99494403b24fe8ec5',\n  dotaLobbyId: '27176301236342994'\n} players [ '76561198177128005' ] ",
    level: "debug",
    timestamp: "2021-05-03T09:05:19.011Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-03T09:05:19.014Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-03T09:05:19.015Z",
  },
  {
    message: "DotaBot inviteToLobby 76561198177128005",
    level: "debug",
    timestamp: "2021-05-03T09:05:19.016Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T09:05:19.023Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608fbcc99494403b24fe8ec4,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'selfish-firefox-42',\n  createdOn: 2021-05-03T09:05:13.499Z,\n  updatedOn: 2021-05-03T09:05:13.499Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301236342994'\n}",
    level: "debug",
    timestamp: "2021-05-03T09:05:19.057Z",
  },
  {
    message:
      "runLobby 608fbcc99494403b24fe8ec4 STATE_BOT_STARTED to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T09:05:19.058Z",
  },
  {
    message:
      "LobbyManager getBot 608fbcc99494403b24fe8ec5 bot DotaBot {\n  _events: [Object: null prototype] {\n    EVENT_LOBBY_READY: [Function (anonymous)],\n    EVENT_BOT_LOBBY_LEFT: [Function (anonymous)],\n    EVENT_MATCH_SIGNEDOUT: [Function (anonymous)],\n    EVENT_MATCH_OUTCOME: [Function (anonymous)]\n  },\n  _eventsCount: 4,\n  _maxListeners: undefined,\n  _connectionState: 'DOTA_CONNECTED',\n  _connectionAttempts: 1,\n  _connecting: false,\n  _lobbyOptions: {\n    game_name: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n    server_region: 5,\n    game_mode: 21,\n    series_type: 1,\n    game_version: 1,\n    allow_cheats: false,\n    fill_with_bots: false,\n    allow_spectating: true,\n    pass_key: 'selfish-firefox-42',\n    radiant_series_wins: 0,\n    dire_series_wins: 0,\n    allchat: true,\n    visibility: 0,\n    cm_pick: 0\n  },\n  _teamCache: [ '76561198177128005' ],\n  _pending_invites: true,\n  _queue: Queue {\n    _backoff: 10000,\n    _rateLimit: 1,\n    _debug: true,\n    _retries: 0,\n    _state: 'idle',\n    _queue: []\n  },\n  config: {\n    _id: 608fbcc99494403b24fe8ec5,\n    status: 'BOT_OFFLINE',\n    lobbyCount: 1,\n    steamId64: '76561199139099147',\n    accountName: 'dynastyesports',\n    personaName: 'my*****Name',\n    password: 'St3@mAccountToBu!dlovelyAPI69',\n    created_at: 2021-05-03T09:05:13.761Z,\n    updated_at: 2021-05-03T09:05:13.871Z,\n    __v: 0,\n    steam_guard_code: '3DW4R',\n    two_factor_code: undefined\n  },\n  steamClient: SteamClient {\n    _events: [Object: null prototype] {\n      message: [Array],\n      logOnResponse: [Array],\n      loggedOff: [Function (anonymous)],\n      error: [AsyncFunction (anonymous)],\n      servers: [Function (anonymous)]\n    },\n    _eventsCount: 5,\n    _maxListeners: undefined,\n    _jobs: {},\n    _currentJobID: 0,\n    sessionID: 1802521086,\n    _connection: Connection {\n      connecting: false,\n      _hadError: false,\n      _parent: null,\n      _host: null,\n      _readableState: [ReadableState],\n      _events: [Object: null prototype],\n      _eventsCount: 7,\n      _maxListeners: undefined,\n      _writableState: [WritableState],\n      allowHalfOpen: false,\n      _sockname: null,\n      _pendingData: null,\n      _pendingEncoding: '',\n      server: null,\n      _server: null,\n      timeout: 0,\n      sessionKey: <Buffer d7 cd af 90 68 79 d6 a8 4b 17 5f 98 cd 20 39 01 d1 9e 50 22 0c 0f 2e a9 5b 24 44 71 53 7e 83 a8>,\n      [Symbol(async_id_symbol)]: 2674,\n      [Symbol(kHandle)]: [TCP],\n      [Symbol(kSetNoDelay)]: false,\n      [Symbol(lastWriteQueueSize)]: 0,\n      [Symbol(timeout)]: Timeout {\n        _idleTimeout: -1,\n        _idlePrev: null,\n        _idleNext: null,\n        _idleStart: 1029159,\n        _onTimeout: null,\n        _timerArgs: undefined,\n        _repeat: null,\n        _destroyed: true,\n        [Symbol(refed)]: false,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 2673,\n        [Symbol(triggerId)]: 2653\n      },\n      [Symbol(kBuffer)]: null,\n      [Symbol(kBufferCb)]: null,\n      [Symbol(kBufferGen)]: null,\n      [Symbol(kCapture)]: false,\n      [Symbol(kBytesRead)]: 0,\n      [Symbol(kBytesWritten)]: 0\n    },\n    _tempSessionKey: <Buffer d7 cd af 90 68 79 d6 a8 4b 17 5f 98 cd 20 39 01 d1 9e 50 22 0c 0f 2e a9 5b 24 44 71 53 7e 83 a8>,\n    connected: true,\n    steamID: '76561199139099147',\n    _heartBeatFunc: Timeout {\n      _idleTimeout: 9000,\n      _idlePrev: [TimersList],\n      _idleNext: [TimersList],\n      _idleStart: 1030131,\n      _onTimeout: [Function: bound ],\n      _timerArgs: undefined,\n      _repeat: 9000,\n      _destroyed: false,\n      [Symbol(refed)]: true,\n      [Symbol(kHasPrimitive)]: false,\n      [Symbol(asyncId)]: 2712,\n      [Symbol(triggerId)]: 2703\n    },\n    loggedOn: true,\n    [Symbol(kCapture)]: false\n  },\n  steamUser: SteamUser {\n    _client: SteamClient {\n      _events: [Object: null prototype],\n      _eventsCount: 5,\n      _maxListeners: undefined,\n      _jobs: {},\n      _currentJobID: 0,\n      sessionID: 1802521086,\n      _connection: [Connection],\n      _tempSessionKey: <Buffer d7 cd af 90 68 79 d6 a8 4b 17 5f 98 cd 20 39 01 d1 9e 50 22 0c 0f 2e a9 5b 24 44 71 53 7e 83 a8>,\n      connected: true,\n      steamID: '76561199139099147',\n      _heartBeatFunc: Timeout {\n        _idleTimeout: 9000,\n        _idlePrev: [TimersList],\n        _idleNext: [TimersList],\n        _idleStart: 1030131,\n        _onTimeout: [Function: bound ],\n        _timerArgs: undefined,\n        _repeat: 9000,\n        _destroyed: false,\n        [Symbol(refed)]: true,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 2712,\n        [Symbol(triggerId)]: 2703\n      },\n      loggedOn: true,\n      [Symbol(kCapture)]: false\n    },\n    _events: [Object: null prototype] {\n      updateMachineAuth: [Function (anonymous)]\n    },\n    _eventsCount: 1\n  },\n  steamFriends: SteamFriends {\n    _client: SteamClient {\n      _events: [Object: null prototype],\n      _eventsCount: 5,\n      _maxListeners: undefined,\n      _jobs: {},\n      _currentJobID: 0,\n      sessionID: 1802521086,\n      _connection: [Connection],\n      _tempSessionKey: <Buffer d7 cd af 90 68 79 d6 a8 4b 17 5f 98 cd 20 39 01 d1 9e 50 22 0c 0f 2e a9 5b 24 44 71 53 7e 83 a8>,\n      connected: true,\n      steamID: '76561199139099147',\n      _heartBeatFunc: Timeout {\n        _idleTimeout: 9000,\n        _idlePrev: [TimersList],\n        _idleNext: [TimersList],\n        _idleStart: 1030131,\n        _onTimeout: [Function: bound ],\n        _timerArgs: undefined,\n        _repeat: 9000,\n        _destroyed: false,\n        [Symbol(refed)]: true,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 2712,\n        [Symbol(triggerId)]: 2703\n      },\n      loggedOn: true,\n      [Symbol(kCapture)]: false\n    },\n    personaStates: { '76561199139099147': [Object] },\n    clanStates: {},\n    chatRooms: {},\n    friends: {},\n    groups: {},\n    _personaState: 1\n  },\n  Dota2: Dota2Client {\n    _events: [Object: null prototype] {\n      ready: [Function (anonymous)],\n      unready: [Function (anonymous)],\n      unhandled: [Function (anonymous)],\n      practiceLobbyUpdate: [Function (anonymous)],\n      practiceLobbyCleared: [Function (anonymous)],\n      matchSignedOut: [Function (anonymous)],\n      practiceLobbyResponse: [Function (anonymous)],\n      chatMessage: [Function (anonymous)],\n      inviteCreated: [Function]\n    },\n    _eventsCount: 9,\n    _maxListeners: undefined,\n    debug: true,\n    debugMore: true,\n    Logger: DerivedLogger {\n      _readableState: [ReadableState],\n      readable: true,\n      _events: [Object: null prototype],\n      _eventsCount: 3,\n      _maxListeners: undefined,\n      _writableState: [WritableState],\n      writable: true,\n      allowHalfOpen: true,\n      _transformState: [Object],\n      silent: undefined,\n      format: [Format],\n      defaultMeta: null,\n      levels: [Object],\n      level: 'silly',\n      exceptions: [ExceptionHandler],\n      rejections: [RejectionHandler],\n      profilers: {},\n      exitOnError: true,\n      [Symbol(kCapture)]: false\n    },\n    Inventory: [ [CSOEconItem], [CSOEconItem] ],\n    chatChannels: [],\n    Lobby: CSODOTALobby {\n      members: [],\n      left_members: [],\n      pending_invites: [],\n      team_details: [],\n      timed_reward_details: [],\n      broadcast_channel_info: [],\n      extra_messages: [],\n      previous_series_matches: [],\n      event_progression_enabled: [],\n      emergency_disabled_hero_ids: [],\n      mutations: [],\n      lobby_id: [Long],\n      game_mode: 21,\n      state: 0,\n      leader_id: [Long],\n      lobby_type: 1,\n      allow_cheats: false,\n      fill_with_bots: false,\n      intro_mode: false,\n      game_name: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n      server_region: 5,\n      cm_pick: 0,\n      allow_spectating: true,\n      bot_difficulty_radiant: 0,\n      game_version: 1,\n      pass_key: 'selfish-firefox-42',\n      leagueid: 0,\n      penalty_level_radiant: 0,\n      penalty_level_dire: 0,\n      series_type: 1,\n      radiant_series_wins: 0,\n      dire_series_wins: 0,\n      allchat: true,\n      dota_tv_delay: 1,\n      lan: false,\n      visibility: 0,\n      previous_match_override: [Long],\n      pause_setting: 0,\n      bot_difficulty_dire: 0,\n      bot_radiant: [Long],\n      bot_dire: [Long],\n      selection_priority_rules: 0,\n      league_node_id: 0\n    },\n    LobbyInvite: null,\n    Party: null,\n    PartyInvite: null,\n    _user: SteamUser { _client: [SteamClient] },\n    _client: SteamClient {\n      _events: [Object: null prototype],\n      _eventsCount: 5,\n      _maxListeners: undefined,\n      _jobs: {},\n      _currentJobID: 0,\n      sessionID: 1802521086,\n      _connection: [Connection],\n      _tempSessionKey: <Buffer d7 cd af 90 68 79 d6 a8 4b 17 5f 98 cd 20 39 01 d1 9e 50 22 0c 0f 2e a9 5b 24 44 71 53 7e 83 a8>,\n      connected: true,\n      steamID: '76561199139099147',\n      _heartBeatFunc: Timeout {\n        _idleTimeout: 9000,\n        _idlePrev: [TimersList],\n        _idleNext: [TimersList],\n        _idleStart: 1030131,\n        _onTimeout: [Function: bound ],\n        _timerArgs: undefined,\n        _repeat: 9000,\n        _destroyed: false,\n        [Symbol(refed)]: true,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 2712,\n        [Symbol(triggerId)]: 2703\n      },\n      loggedOn: true,\n      [Symbol(kCapture)]: false\n    },\n    _gc: SteamGameCoordinator {\n      _client: [SteamClient],\n      _appid: 570,\n      _jobs: [Object],\n      _currentJobID: 2,\n      _events: [Object: null prototype],\n      _eventsCount: 1\n    },\n    _appid: 570,\n    _gcReady: true,\n    _gcClientHelloIntervalId: null,\n    _gcConnectionStatus: 3,\n    _protoBufHeader: { msg: 4512, proto: [Object] },\n    _sendClientHello: [Function (anonymous)],\n    AccountID: 1178833419,\n    _gcClientHelloCount: 1,\n    [Symbol(kCapture)]: false\n  },\n  logOnDetails: {\n    account_name: 'dynastyesports',\n    password: 'St3@mAccountToBu!dlovelyAPI69',\n    auth_code: '3DW4R',\n    sha_sentryfile: <Buffer 0d f9 ab fb 57 ec fe c8 52 e4 6c 9f d6 ca 0c 54 f0 91 94 6a>,\n    protocol_version: 65575\n  },\n  [Symbol(kCapture)]: false\n}",
    level: "debug",
    timestamp: "2021-05-03T09:05:19.114Z",
  },
  {
    message:
      "runLobby 608fbcc99494403b24fe8ec4 STATE_WAITING_FOR_PLAYERS to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T09:05:19.115Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-03T09:10:05.670Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1249881902, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'selfish-firefox-42',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1249881902, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'selfish-firefox-42',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  this.teamCache [ '76561198177128005' ] ",
    level: "debug",
    timestamp: "2021-05-03T09:10:05.692Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176301236342994   --> {\n  _id: 608fbcc99494403b24fe8ec4,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'selfish-firefox-42',\n  createdOn: 2021-05-03T09:05:13.499Z,\n  updatedOn: 2021-05-03T09:05:13.499Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301236342994'\n}",
    level: "debug",
    timestamp: "2021-05-03T09:10:05.772Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-03T09:10:05.772Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27176301236342994",
    level: "debug",
    timestamp: "2021-05-03T09:10:05.773Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 0",
    level: "debug",
    timestamp: "2021-05-03T09:10:05.774Z",
  },
  {
    message: "LobbyManager onLobbyReady 27176301236342994",
    level: "debug",
    timestamp: "2021-05-03T09:10:05.775Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176301236342994   --> {\n  _id: 608fbcc99494403b24fe8ec4,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'selfish-firefox-42',\n  createdOn: 2021-05-03T09:05:13.499Z,\n  updatedOn: 2021-05-03T09:05:13.499Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301236342994'\n}",
    level: "debug",
    timestamp: "2021-05-03T09:10:05.837Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 608fbcc99494403b24fe8ec4 inhouse-lobby-608fbcc99494403b24fe8ec4",
    level: "debug",
    timestamp: "2021-05-03T09:10:05.837Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T09:10:05.838Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-03T09:10:05.838Z",
  },
  {
    message:
      "LobbyManager runLobby 608fbcc99494403b24fe8ec4 STATE_WAITING_FOR_PLAYERS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T09:10:05.839Z",
  },
  {
    message:
      "DB findLobbyById _id 608fbcc99494403b24fe8ec4   --> {\n  _id: 608fbcc99494403b24fe8ec4,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'selfish-firefox-42',\n  createdOn: 2021-05-03T09:05:13.499Z,\n  updatedOn: 2021-05-03T09:05:13.499Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301236342994'\n}",
    level: "debug",
    timestamp: "2021-05-03T09:10:05.869Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T09:10:05.869Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> { _id: 608fbcc99494403b24fe8ec4, players: [ '76561198177128005' ] }",
    level: "debug",
    timestamp: "2021-05-03T09:10:05.917Z",
  },
  {
    message:
      "validateLobbyPlayers 608fbcc99494403b24fe8ec4 end STATE_WAITING_FOR_PLAYERS to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T09:10:05.917Z",
  },
  {
    message:
      "LobbyManager getBot 608fbcc99494403b24fe8ec5 bot DotaBot {\n  _events: [Object: null prototype] {\n    EVENT_LOBBY_READY: [Function (anonymous)],\n    EVENT_BOT_LOBBY_LEFT: [Function (anonymous)],\n    EVENT_MATCH_SIGNEDOUT: [Function (anonymous)],\n    EVENT_MATCH_OUTCOME: [Function (anonymous)]\n  },\n  _eventsCount: 4,\n  _maxListeners: undefined,\n  _connectionState: 'DOTA_CONNECTED',\n  _connectionAttempts: 1,\n  _connecting: false,\n  _lobbyOptions: {\n    game_name: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n    server_region: 5,\n    game_mode: 21,\n    series_type: 1,\n    game_version: 1,\n    allow_cheats: false,\n    fill_with_bots: false,\n    allow_spectating: true,\n    pass_key: 'selfish-firefox-42',\n    radiant_series_wins: 0,\n    dire_series_wins: 0,\n    allchat: true,\n    visibility: 0,\n    cm_pick: 0\n  },\n  _teamCache: [ '76561198177128005' ],\n  _pending_invites: false,\n  _queue: Queue {\n    _backoff: 10000,\n    _rateLimit: 1,\n    _debug: true,\n    _retries: 0,\n    _state: 'idle',\n    _queue: []\n  },\n  config: {\n    _id: 608fbcc99494403b24fe8ec5,\n    status: 'BOT_OFFLINE',\n    lobbyCount: 1,\n    steamId64: '76561199139099147',\n    accountName: 'dynastyesports',\n    personaName: 'my*****Name',\n    password: 'St3@mAccountToBu!dlovelyAPI69',\n    created_at: 2021-05-03T09:05:13.761Z,\n    updated_at: 2021-05-03T09:05:13.871Z,\n    __v: 0,\n    steam_guard_code: '3DW4R',\n    two_factor_code: undefined\n  },\n  steamClient: SteamClient {\n    _events: [Object: null prototype] {\n      message: [Array],\n      logOnResponse: [Array],\n      loggedOff: [Function (anonymous)],\n      error: [AsyncFunction (anonymous)],\n      servers: [Function (anonymous)]\n    },\n    _eventsCount: 5,\n    _maxListeners: undefined,\n    _jobs: {},\n    _currentJobID: 0,\n    sessionID: 1802521086,\n    _connection: Connection {\n      connecting: false,\n      _hadError: false,\n      _parent: null,\n      _host: null,\n      _readableState: [ReadableState],\n      _events: [Object: null prototype],\n      _eventsCount: 7,\n      _maxListeners: undefined,\n      _writableState: [WritableState],\n      allowHalfOpen: false,\n      _sockname: null,\n      _pendingData: null,\n      _pendingEncoding: '',\n      server: null,\n      _server: null,\n      timeout: 0,\n      sessionKey: <Buffer d7 cd af 90 68 79 d6 a8 4b 17 5f 98 cd 20 39 01 d1 9e 50 22 0c 0f 2e a9 5b 24 44 71 53 7e 83 a8>,\n      [Symbol(async_id_symbol)]: 2674,\n      [Symbol(kHandle)]: [TCP],\n      [Symbol(kSetNoDelay)]: false,\n      [Symbol(lastWriteQueueSize)]: 0,\n      [Symbol(timeout)]: Timeout {\n        _idleTimeout: -1,\n        _idlePrev: null,\n        _idleNext: null,\n        _idleStart: 1029159,\n        _onTimeout: null,\n        _timerArgs: undefined,\n        _repeat: null,\n        _destroyed: true,\n        [Symbol(refed)]: false,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 2673,\n        [Symbol(triggerId)]: 2653\n      },\n      [Symbol(kBuffer)]: null,\n      [Symbol(kBufferCb)]: null,\n      [Symbol(kBufferGen)]: null,\n      [Symbol(kCapture)]: false,\n      [Symbol(kBytesRead)]: 0,\n      [Symbol(kBytesWritten)]: 0\n    },\n    _tempSessionKey: <Buffer d7 cd af 90 68 79 d6 a8 4b 17 5f 98 cd 20 39 01 d1 9e 50 22 0c 0f 2e a9 5b 24 44 71 53 7e 83 a8>,\n    connected: true,\n    steamID: '76561199139099147',\n    _heartBeatFunc: Timeout {\n      _idleTimeout: 9000,\n      _idlePrev: [TimersList],\n      _idleNext: [TimersList],\n      _idleStart: 1318385,\n      _onTimeout: [Function: bound ],\n      _timerArgs: undefined,\n      _repeat: 9000,\n      _destroyed: false,\n      [Symbol(refed)]: true,\n      [Symbol(kHasPrimitive)]: false,\n      [Symbol(asyncId)]: 2712,\n      [Symbol(triggerId)]: 2703\n    },\n    loggedOn: true,\n    [Symbol(kCapture)]: false\n  },\n  steamUser: SteamUser {\n    _client: SteamClient {\n      _events: [Object: null prototype],\n      _eventsCount: 5,\n      _maxListeners: undefined,\n      _jobs: {},\n      _currentJobID: 0,\n      sessionID: 1802521086,\n      _connection: [Connection],\n      _tempSessionKey: <Buffer d7 cd af 90 68 79 d6 a8 4b 17 5f 98 cd 20 39 01 d1 9e 50 22 0c 0f 2e a9 5b 24 44 71 53 7e 83 a8>,\n      connected: true,\n      steamID: '76561199139099147',\n      _heartBeatFunc: Timeout {\n        _idleTimeout: 9000,\n        _idlePrev: [TimersList],\n        _idleNext: [TimersList],\n        _idleStart: 1318385,\n        _onTimeout: [Function: bound ],\n        _timerArgs: undefined,\n        _repeat: 9000,\n        _destroyed: false,\n        [Symbol(refed)]: true,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 2712,\n        [Symbol(triggerId)]: 2703\n      },\n      loggedOn: true,\n      [Symbol(kCapture)]: false\n    },\n    _events: [Object: null prototype] {\n      updateMachineAuth: [Function (anonymous)]\n    },\n    _eventsCount: 1\n  },\n  steamFriends: SteamFriends {\n    _client: SteamClient {\n      _events: [Object: null prototype],\n      _eventsCount: 5,\n      _maxListeners: undefined,\n      _jobs: {},\n      _currentJobID: 0,\n      sessionID: 1802521086,\n      _connection: [Connection],\n      _tempSessionKey: <Buffer d7 cd af 90 68 79 d6 a8 4b 17 5f 98 cd 20 39 01 d1 9e 50 22 0c 0f 2e a9 5b 24 44 71 53 7e 83 a8>,\n      connected: true,\n      steamID: '76561199139099147',\n      _heartBeatFunc: Timeout {\n        _idleTimeout: 9000,\n        _idlePrev: [TimersList],\n        _idleNext: [TimersList],\n        _idleStart: 1318385,\n        _onTimeout: [Function: bound ],\n        _timerArgs: undefined,\n        _repeat: 9000,\n        _destroyed: false,\n        [Symbol(refed)]: true,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 2712,\n        [Symbol(triggerId)]: 2703\n      },\n      loggedOn: true,\n      [Symbol(kCapture)]: false\n    },\n    personaStates: { '76561199139099147': [Object] },\n    clanStates: {},\n    chatRooms: {},\n    friends: {},\n    groups: {},\n    _personaState: 1\n  },\n  Dota2: Dota2Client {\n    _events: [Object: null prototype] {\n      ready: [Function (anonymous)],\n      unready: [Function (anonymous)],\n      unhandled: [Function (anonymous)],\n      practiceLobbyUpdate: [Function (anonymous)],\n      practiceLobbyCleared: [Function (anonymous)],\n      matchSignedOut: [Function (anonymous)],\n      practiceLobbyResponse: [Function (anonymous)],\n      chatMessage: [Function (anonymous)]\n    },\n    _eventsCount: 8,\n    _maxListeners: undefined,\n    debug: true,\n    debugMore: true,\n    Logger: DerivedLogger {\n      _readableState: [ReadableState],\n      readable: true,\n      _events: [Object: null prototype],\n      _eventsCount: 3,\n      _maxListeners: undefined,\n      _writableState: [WritableState],\n      writable: true,\n      allowHalfOpen: true,\n      _transformState: [Object],\n      silent: undefined,\n      format: [Format],\n      defaultMeta: null,\n      levels: [Object],\n      level: 'silly',\n      exceptions: [ExceptionHandler],\n      rejections: [RejectionHandler],\n      profilers: {},\n      exitOnError: true,\n      [Symbol(kCapture)]: false\n    },\n    Inventory: [ [CSOEconItem], [CSOEconItem] ],\n    chatChannels: [ [CMsgDOTAJoinChatChannelResponse] ],\n    Lobby: CSODOTALobby {\n      members: [],\n      left_members: [],\n      pending_invites: [],\n      team_details: [],\n      timed_reward_details: [],\n      broadcast_channel_info: [],\n      extra_messages: [],\n      previous_series_matches: [],\n      event_progression_enabled: [],\n      emergency_disabled_hero_ids: [],\n      mutations: [],\n      lobby_id: [Long],\n      game_mode: 21,\n      state: 0,\n      leader_id: [Long],\n      lobby_type: 1,\n      allow_cheats: false,\n      fill_with_bots: false,\n      intro_mode: false,\n      game_name: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n      server_region: 5,\n      cm_pick: 0,\n      allow_spectating: true,\n      bot_difficulty_radiant: 0,\n      game_version: 1,\n      pass_key: 'selfish-firefox-42',\n      leagueid: 0,\n      penalty_level_radiant: 0,\n      penalty_level_dire: 0,\n      series_type: 1,\n      radiant_series_wins: 0,\n      dire_series_wins: 0,\n      allchat: true,\n      dota_tv_delay: 1,\n      lan: false,\n      visibility: 0,\n      previous_match_override: [Long],\n      pause_setting: 0,\n      bot_difficulty_dire: 0,\n      bot_radiant: [Long],\n      bot_dire: [Long],\n      selection_priority_rules: 0,\n      league_node_id: 0\n    },\n    LobbyInvite: null,\n    Party: null,\n    PartyInvite: null,\n    _user: SteamUser { _client: [SteamClient] },\n    _client: SteamClient {\n      _events: [Object: null prototype],\n      _eventsCount: 5,\n      _maxListeners: undefined,\n      _jobs: {},\n      _currentJobID: 0,\n      sessionID: 1802521086,\n      _connection: [Connection],\n      _tempSessionKey: <Buffer d7 cd af 90 68 79 d6 a8 4b 17 5f 98 cd 20 39 01 d1 9e 50 22 0c 0f 2e a9 5b 24 44 71 53 7e 83 a8>,\n      connected: true,\n      steamID: '76561199139099147',\n      _heartBeatFunc: Timeout {\n        _idleTimeout: 9000,\n        _idlePrev: [TimersList],\n        _idleNext: [TimersList],\n        _idleStart: 1318385,\n        _onTimeout: [Function: bound ],\n        _timerArgs: undefined,\n        _repeat: 9000,\n        _destroyed: false,\n        [Symbol(refed)]: true,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 2712,\n        [Symbol(triggerId)]: 2703\n      },\n      loggedOn: true,\n      [Symbol(kCapture)]: false\n    },\n    _gc: SteamGameCoordinator {\n      _client: [SteamClient],\n      _appid: 570,\n      _jobs: [Object],\n      _currentJobID: 2,\n      _events: [Object: null prototype],\n      _eventsCount: 1\n    },\n    _appid: 570,\n    _gcReady: true,\n    _gcClientHelloIntervalId: null,\n    _gcConnectionStatus: 3,\n    _protoBufHeader: { msg: 4512, proto: [Object] },\n    _sendClientHello: [Function (anonymous)],\n    AccountID: 1178833419,\n    _gcClientHelloCount: 1,\n    [Symbol(kCapture)]: false\n  },\n  logOnDetails: {\n    account_name: 'dynastyesports',\n    password: 'St3@mAccountToBu!dlovelyAPI69',\n    auth_code: '3DW4R',\n    sha_sentryfile: <Buffer 0d f9 ab fb 57 ec fe c8 52 e4 6c 9f d6 ca 0c 54 f0 91 94 6a>,\n    protocol_version: 65575\n  },\n  [Symbol(kCapture)]: false\n}",
    level: "debug",
    timestamp: "2021-05-03T09:10:05.982Z",
  },
  {
    message: "lobby run isDotaLobbyReady true",
    level: "debug",
    timestamp: "2021-05-03T09:10:05.983Z",
  },
  {
    message:
      "LobbyManager onStartDotaLobby 608fbcc99494403b24fe8ec4 608fbcc99494403b24fe8ec5 STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.026Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.027Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.028Z",
  },
  {
    message: "DotaBot launchPracticeLobby",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.028Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.127Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.614Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1249881902, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'selfish-firefox-42',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1249881902, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'selfish-firefox-42',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  current_primary_event: 0,\n  league_node_id: 0\n}  this.teamCache [ '76561198177128005' ] ",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.666Z",
  },
  {
    message: "DotaBot practiceLobbyResponse CMsgGenericResult { eresult: 2 }",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.669Z",
  },
  {
    message: "DotaBot launchPracticeLobby response undefined",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.670Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.672Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.673Z",
  },
  {
    message: "DotaBot leaveChat Lobby_27176301236342994",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.674Z",
  },
  {
    message: "dota bot startDotaLobby matchId 0",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.754Z",
  },
  {
    message: "LobbyManager onStartDotaLobby matchId 0 leagueid ",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.754Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176301236342994   --> {\n  _id: 608fbcc99494403b24fe8ec4,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'selfish-firefox-42',\n  createdOn: 2021-05-03T09:05:13.499Z,\n  updatedOn: 2021-05-03T09:05:13.499Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301236342994'\n}",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.795Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.797Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27176301236342994",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.798Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.799Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608fbcc99494403b24fe8ec4,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'selfish-firefox-42',\n  createdOn: 2021-05-03T09:05:13.499Z,\n  updatedOn: 2021-05-03T09:05:13.499Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301236342994',\n  matchId: '0',\n  startedAt: 2021-05-03T09:10:06.027Z\n}",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.862Z",
  },
  {
    message: "matchTracker run false",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.867Z",
  },
  {
    message: "matchTracker setMatchDetails matchId undefined",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.894Z",
  },
  {
    message: "ihlManager onStartDotaLobby true",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.899Z",
  },
  {
    message: "ihlManager onStartDotaLobby false",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.904Z",
  },
  {
    message:
      "runLobby 608fbcc99494403b24fe8ec4 STATE_WAITING_FOR_PLAYERS to STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.905Z",
  },
  {
    message:
      "runLobby 608fbcc99494403b24fe8ec4 STATE_MATCH_IN_PROGRESS to STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.906Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 0",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.907Z",
  },
  {
    message: "LobbyManager onLobbyReady 27176301236342994",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.907Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176301236342994   --> {\n  _id: 608fbcc99494403b24fe8ec4,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'selfish-firefox-42',\n  createdOn: 2021-05-03T09:05:13.499Z,\n  updatedOn: 2021-05-03T09:05:13.499Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301236342994',\n  matchId: '0',\n  startedAt: 2021-05-03T09:10:06.027Z\n}",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.943Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 608fbcc99494403b24fe8ec4 inhouse-lobby-608fbcc99494403b24fe8ec4",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.944Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.945Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.946Z",
  },
  {
    message:
      "LobbyManager runLobby 608fbcc99494403b24fe8ec4 STATE_MATCH_IN_PROGRESS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.946Z",
  },
  {
    message: "DB findLobbyById _id undefined   --> null",
    level: "debug",
    timestamp: "2021-05-03T09:10:06.948Z",
  },
  {
    level: "error",
    message:
      "TypeError: Cannot read property 'id' of null - trace: at setMatchDetails (D:\\mohit\\blocks\\bexpressserver\\boldbtest\\server\\services\\dotaBot\\matchTracker.js:94:52)\n    at processTicksAndRejections (internal/process/task_queues.js:93:5)\n    at async MatchTracker.run (D:\\mohit\\blocks\\bexpressserver\\boldbtest\\server\\services\\dotaBot\\matchTracker.js:301:23)",
    timestamp: "2021-05-03T09:10:07.085Z",
  },
  {
    message:
      "DB findLobbyById _id 608fbcc99494403b24fe8ec4   --> {\n  _id: 608fbcc99494403b24fe8ec4,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'selfish-firefox-42',\n  createdOn: 2021-05-03T09:05:13.499Z,\n  updatedOn: 2021-05-03T09:05:13.499Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301236342994',\n  matchId: '0',\n  startedAt: 2021-05-03T09:10:06.027Z\n}",
    level: "debug",
    timestamp: "2021-05-03T09:10:07.088Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-03T09:10:07.089Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-03T09:10:12.366Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1249881902, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'selfish-firefox-42',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  current_primary_event: 0,\n  league_node_id: 0\n}  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1249881902, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'selfish-firefox-42',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  current_primary_event: 0,\n  league_node_id: 0\n}  this.teamCache [ '76561198177128005' ] ",
    level: "debug",
    timestamp: "2021-05-03T09:10:12.448Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176301236342994   --> {\n  _id: 608fbcc99494403b24fe8ec4,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'selfish-firefox-42',\n  createdOn: 2021-05-03T09:05:13.499Z,\n  updatedOn: 2021-05-03T09:05:13.499Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fbcc99494403b24fe8ec4',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301236342994',\n  matchId: '0',\n  startedAt: 2021-05-03T09:10:06.027Z\n}",
    level: "debug",
    timestamp: "2021-05-03T09:10:12.481Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.state STATE_MATCH_IN_PROGRESS invalid. Bot 608fbcc99494403b24fe8ec5 leaving lobby...",
    level: "debug",
    timestamp: "2021-05-03T09:10:12.482Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-03T09:10:12.482Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-03T09:10:12.483Z",
  },
  {
    message: "DotaBot leavePracticeLobby",
    level: "debug",
    timestamp: "2021-05-03T09:10:12.484Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T09:10:12.513Z",
  },
  {
    message: "dotaBot practiceLobbyCleared emitted",
    level: "debug",
    timestamp: "2021-05-03T09:10:13.104Z",
  },
  {
    message: "LobbyManager queueEvent onBotLobbyLeft 608fbcc99494403b24fe8ec5",
    level: "debug",
    timestamp: "2021-05-03T09:10:13.105Z",
  },
  {
    message: "LobbyManager processEventQueue onBotLobbyLeft 0",
    level: "debug",
    timestamp: "2021-05-03T09:10:13.106Z",
  },
  {
    message: "DotaBot practiceLobbyResponse CMsgGenericResult { eresult: 1 }",
    level: "debug",
    timestamp: "2021-05-03T09:10:13.141Z",
  },
  {
    message: "DotaBot leavePracticeLobby response undefined [object Object]",
    level: "debug",
    timestamp: "2021-05-03T09:10:13.142Z",
  },
  {
    level: "error",
    message: "DotaBot leaveLobbyChat missing lobby",
    timestamp: "2021-05-03T09:10:13.153Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_IDLE _id 608fbcc99494403b24fe8ec5  --> {\n  _id: 608fbcc99494403b24fe8ec5,\n  status: 'BOT_IDLE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-03T09:05:13.761Z,\n  updated_at: 2021-05-03T09:10:13.143Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-03T09:10:13.189Z",
  },
  {
    message: "DB findAllLobbiesInState state STATE_WAITING_FOR_BOT  --> []",
    level: "debug",
    timestamp: "2021-05-03T09:10:13.221Z",
  },
  {
    message: "LobbyManager onBotAvailable 0",
    level: "debug",
    timestamp: "2021-05-03T09:10:13.222Z",
  },
];
