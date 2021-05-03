let b = [
  ,
  {
    message: "DB findActiveLobbiesForUser userId 76561198177128005  --> []",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.183Z",
  },
  {
    message: "DB findPendingLobby  --> null",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.223Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608f9cb72861855fe84b5ad0,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'tasty-eagle-12',\n  createdOn: 2021-05-03T06:48:23.232Z,\n  updatedOn: 2021-05-03T06:48:23.232Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608f9cb72861855fe84b5ad0'\n}",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.333Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608f9cb72861855fe84b5ad0,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'tasty-eagle-12',\n  createdOn: 2021-05-03T06:48:23.232Z,\n  updatedOn: 2021-05-03T06:48:23.232Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608f9cb72861855fe84b5ad0'\n}",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.377Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.378Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.380Z",
  },
  {
    message:
      "LobbyManager runLobby 608f9cb72861855fe84b5ad0 STATE_WAITING_FOR_BOT STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.381Z",
  },
  {
    message:
      "DB findLobbyById _id 608f9cb72861855fe84b5ad0   --> {\n  _id: 608f9cb72861855fe84b5ad0,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'tasty-eagle-12',\n  createdOn: 2021-05-03T06:48:23.232Z,\n  updatedOn: 2021-05-03T06:48:23.232Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608f9cb72861855fe84b5ad0'\n}",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.419Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.422Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> { _id: 608f9cb72861855fe84b5ad0, players: [ '76561198177128005' ] }",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.461Z",
  },
  {
    message:
      "validateLobbyPlayers 608f9cb72861855fe84b5ad0 end STATE_WAITING_FOR_BOT to STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.462Z",
  },
  {
    message: "STATE_WAITING_FOR_BOT 608f9cb72861855fe84b5ad0 undefined",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.464Z",
  },
  {
    message: "DB findUnassignedBot   --> null",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.497Z",
  },
  {
    message:
      "DB findOrCreateBot steamId64 76561199139099147 accountName dynastyesports personaName my*****Name password St3@mAccountToBu!dlovelyAPI69 --> {\n  status: 'BOT_OFFLINE',\n  lobbyCount: 0,\n  _id: 608f9cb72861855fe84b5ad1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-03T06:48:23.500Z,\n  updated_at: 2021-05-03T06:48:23.500Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.545Z",
  },
  {
    message: "lobby run findUnassignedBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.546Z",
  },
  {
    message:
      "DB assignBotToLobby lobby [object Object] botId 608f9cb72861855fe84b5ad1  --> {\n  _id: 608f9cb72861855fe84b5ad1,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-03T06:48:23.500Z,\n  updated_at: 2021-05-03T06:48:23.589Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.631Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608f9cb72861855fe84b5ad0,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_BOT_ASSIGNED',\n  password: 'tasty-eagle-12',\n  createdOn: 2021-05-03T06:48:23.232Z,\n  updatedOn: 2021-05-03T06:48:23.232Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608f9cb72861855fe84b5ad0',\n  botId: 608f9cb72861855fe84b5ad1\n}",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.673Z",
  },
  {
    message:
      "runLobby 608f9cb72861855fe84b5ad0 STATE_WAITING_FOR_BOT to STATE_BOT_ASSIGNED",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.674Z",
  },
  {
    message: "LobbyManager loadBotById 608f9cb72861855fe84b5ad1",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.676Z",
  },
  {
    message:
      "DB findBot  _id 608f9cb72861855fe84b5ad1  --> {\n  _id: 608f9cb72861855fe84b5ad1,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-03T06:48:23.500Z,\n  updated_at: 2021-05-03T06:48:23.589Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.717Z",
  },
  {
    message: "LobbyManager loadBot 608f9cb72861855fe84b5ad1",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.718Z",
  },
  {
    message: "LobbyManager getBot 608f9cb72861855fe84b5ad1 bot undefined",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.722Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_LOADING _id 608f9cb72861855fe84b5ad1  --> {\n  _id: 608f9cb72861855fe84b5ad1,\n  status: 'BOT_LOADING',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-03T06:48:23.500Z,\n  updated_at: 2021-05-03T06:48:23.725Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.763Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.770Z",
  },
  {
    message: "DotaBot connectDotaBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.772Z",
  },
  {
    message: "DotaBot connecting...",
    level: "debug",
    timestamp: "2021-05-03T06:48:23.773Z",
  },
  {
    message: "DotaBot logOnToSteam logging on steamUser...",
    level: "debug",
    timestamp: "2021-05-03T06:48:24.311Z",
  },
  {
    message: "DotaBot Received servers.",
    level: "debug",
    timestamp: "2021-05-03T06:48:25.221Z",
  },
  {
    message: "DotaBot set steam persona state and name.",
    level: "debug",
    timestamp: "2021-05-03T06:48:25.228Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.007Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.010Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.016Z",
  },
  {
    message: "Activating queue",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.018Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.019Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.021Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_ONLINE steamId64 76561199139099147  --> {\n  _id: 608f9cb72861855fe84b5ad1,\n  status: 'BOT_ONLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-03T06:48:23.500Z,\n  updated_at: 2021-05-03T06:48:32.022Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.070Z",
  },
  {
    message: "ihlManager loadBot loaded",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.073Z",
  },
  {
    message: "ihlManager loadBot done",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.074Z",
  },
  {
    message:
      "DotaBot createDotaBotLobby inhouse-lobby-608f9cb72861855fe84b5ad0 tasty-eagle-12  DOTA_GAMEMODE_1V1MID 21  76561199139099147",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.076Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.078Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.079Z",
  },
  {
    message:
      "DotaBot createPracticeLobby {\n  game_name: 'inhouse-lobby-608f9cb72861855fe84b5ad0',\n  server_region: 5,\n  game_mode: 21,\n  series_type: 1,\n  game_version: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  allow_spectating: true,\n  pass_key: 'tasty-eagle-12',\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  visibility: 0,\n  cm_pick: 0\n}",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.089Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.118Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.657Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  null  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1305526964, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608f9cb72861855fe84b5ad0',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'tasty-eagle-12',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  this.teamCache [] ",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.675Z",
  },
  {
    message: "DotaBot practiceLobbyResponse CMsgGenericResult { eresult: 1 }",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.680Z",
  },
  {
    message: "DotaBot createDotaBotLobby practice lobby created",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.689Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176301180697932   --> null",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.737Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.dotaLobbyId 27176301180697932 not found. Bot 608f9cb72861855fe84b5ad1 leaving lobby...",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.738Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_IN_LOBBY steamId64 76561199139099147  --> {\n  _id: 608f9cb72861855fe84b5ad1,\n  status: 'BOT_IN_LOBBY',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-03T06:48:23.500Z,\n  updated_at: 2021-05-03T06:48:32.689Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.772Z",
  },
  {
    message: "DotaBot createDotaBotLobby bot status updated",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.773Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.774Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.774Z",
  },
  {
    message: "DotaBot practiceLobbyKickFromTeam 1178833419",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.775Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.784Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 8678",
    level: "debug",
    timestamp: "2021-05-03T06:48:32.953Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.306Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1305526964, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608f9cb72861855fe84b5ad0',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'tasty-eagle-12',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1305526964, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608f9cb72861855fe84b5ad0',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'tasty-eagle-12',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  this.teamCache [] ",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.340Z",
  },
  {
    message: "DotaBot practiceLobbyResponse CMsgGenericResult { eresult: 1 }",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.343Z",
  },
  {
    message:
      "DotaBot practiceLobbyKickFromTeam response undefined [object Object]",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.344Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.348Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.350Z",
  },
  {
    message: "DotaBot joinChat Lobby_27176301180697932",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.353Z",
  },
  {
    message: "enterLobbyP dotaLobbyId: 27176301180697932",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.360Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.363Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176301180697932   --> null",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.377Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.dotaLobbyId 27176301180697932 not found. Bot 608f9cb72861855fe84b5ad1 leaving lobby...",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.378Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608f9cb72861855fe84b5ad0,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_BOT_STARTED',\n  password: 'tasty-eagle-12',\n  createdOn: 2021-05-03T06:48:23.232Z,\n  updatedOn: 2021-05-03T06:48:23.232Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608f9cb72861855fe84b5ad0',\n  botId: 608f9cb72861855fe84b5ad1,\n  dotaLobbyId: '27176301180697932'\n}",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.413Z",
  },
  {
    message: "updateLobby done. 608f9cb72861855fe84b5ad0 STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.415Z",
  },
  {
    message:
      "STATE_BOT_ASSIGNED to STATE_BOT_STARTED 608f9cb72861855fe84b5ad0 STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.418Z",
  },
  {
    message:
      "runLobby 608f9cb72861855fe84b5ad0 STATE_BOT_ASSIGNED to STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.419Z",
  },
  {
    message:
      "LobbyManager getBot 608f9cb72861855fe84b5ad1 bot DotaBot {\n  _events: [Object: null prototype] {\n    EVENT_LOBBY_READY: [Function (anonymous)],\n    EVENT_BOT_LOBBY_LEFT: [Function (anonymous)],\n    EVENT_MATCH_SIGNEDOUT: [Function (anonymous)],\n    EVENT_MATCH_OUTCOME: [Function (anonymous)]\n  },\n  _eventsCount: 4,\n  _maxListeners: undefined,\n  _connectionState: 'DOTA_CONNECTED',\n  _connectionAttempts: 1,\n  _connecting: false,\n  _lobbyOptions: {\n    game_name: 'inhouse-lobby-608f9cb72861855fe84b5ad0',\n    server_region: 5,\n    game_mode: 21,\n    series_type: 1,\n    game_version: 1,\n    allow_cheats: false,\n    fill_with_bots: false,\n    allow_spectating: true,\n    pass_key: 'tasty-eagle-12',\n    radiant_series_wins: 0,\n    dire_series_wins: 0,\n    allchat: true,\n    visibility: 0,\n    cm_pick: 0\n  },\n  _teamCache: [],\n  _queue: Queue {\n    _backoff: 10000,\n    _rateLimit: 1,\n    _debug: true,\n    _retries: 0,\n    _state: 'idle',\n    _queue: []\n  },\n  config: {\n    _id: 608f9cb72861855fe84b5ad1,\n    status: 'BOT_OFFLINE',\n    lobbyCount: 1,\n    steamId64: '76561199139099147',\n    accountName: 'dynastyesports',\n    personaName: 'my*****Name',\n    password: 'St3@mAccountToBu!dlovelyAPI69',\n    created_at: 2021-05-03T06:48:23.500Z,\n    updated_at: 2021-05-03T06:48:23.589Z,\n    __v: 0,\n    steam_guard_code: '3DW4R',\n    two_factor_code: undefined\n  },\n  steamClient: SteamClient {\n    _events: [Object: null prototype] {\n      message: [Array],\n      logOnResponse: [Array],\n      loggedOff: [Function (anonymous)],\n      error: [AsyncFunction (anonymous)],\n      servers: [Function (anonymous)]\n    },\n    _eventsCount: 5,\n    _maxListeners: undefined,\n    _jobs: {},\n    _currentJobID: 0,\n    sessionID: 1336603360,\n    _connection: Connection {\n      connecting: false,\n      _hadError: false,\n      _parent: null,\n      _host: null,\n      _readableState: [ReadableState],\n      _events: [Object: null prototype],\n      _eventsCount: 7,\n      _maxListeners: undefined,\n      _writableState: [WritableState],\n      allowHalfOpen: false,\n      _sockname: null,\n      _pendingData: null,\n      _pendingEncoding: '',\n      server: null,\n      _server: null,\n      timeout: 0,\n      sessionKey: <Buffer c7 43 74 54 93 fc 21 e4 e3 59 62 bb 37 f3 f1 99 d8 e0 cc 83 7c 6b 0d 04 28 ce af 51 1a b5 f2 da>,\n      [Symbol(async_id_symbol)]: 595,\n      [Symbol(kHandle)]: [TCP],\n      [Symbol(kSetNoDelay)]: false,\n      [Symbol(lastWriteQueueSize)]: 0,\n      [Symbol(timeout)]: Timeout {\n        _idleTimeout: -1,\n        _idlePrev: null,\n        _idleNext: null,\n        _idleStart: 42769,\n        _onTimeout: null,\n        _timerArgs: undefined,\n        _repeat: null,\n        _destroyed: true,\n        [Symbol(refed)]: false,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 594,\n        [Symbol(triggerId)]: 574\n      },\n      [Symbol(kBuffer)]: null,\n      [Symbol(kBufferCb)]: null,\n      [Symbol(kBufferGen)]: null,\n      [Symbol(kCapture)]: false,\n      [Symbol(kBytesRead)]: 0,\n      [Symbol(kBytesWritten)]: 0\n    },\n    _tempSessionKey: <Buffer c7 43 74 54 93 fc 21 e4 e3 59 62 bb 37 f3 f1 99 d8 e0 cc 83 7c 6b 0d 04 28 ce af 51 1a b5 f2 da>,\n    connected: true,\n    steamID: '76561199139099147',\n    _heartBeatFunc: Timeout {\n      _idleTimeout: 9000,\n      _idlePrev: [TimersList],\n      _idleNext: [TimersList],\n      _idleStart: 43863,\n      _onTimeout: [Function: bound ],\n      _timerArgs: undefined,\n      _repeat: 9000,\n      _destroyed: false,\n      [Symbol(refed)]: true,\n      [Symbol(kHasPrimitive)]: false,\n      [Symbol(asyncId)]: 633,\n      [Symbol(triggerId)]: 624\n    },\n    loggedOn: true,\n    [Symbol(kCapture)]: false\n  },\n  steamUser: SteamUser {\n    _client: SteamClient {\n      _events: [Object: null prototype],\n      _eventsCount: 5,\n      _maxListeners: undefined,\n      _jobs: {},\n      _currentJobID: 0,\n      sessionID: 1336603360,\n      _connection: [Connection],\n      _tempSessionKey: <Buffer c7 43 74 54 93 fc 21 e4 e3 59 62 bb 37 f3 f1 99 d8 e0 cc 83 7c 6b 0d 04 28 ce af 51 1a b5 f2 da>,\n      connected: true,\n      steamID: '76561199139099147',\n      _heartBeatFunc: Timeout {\n        _idleTimeout: 9000,\n        _idlePrev: [TimersList],\n        _idleNext: [TimersList],\n        _idleStart: 43863,\n        _onTimeout: [Function: bound ],\n        _timerArgs: undefined,\n        _repeat: 9000,\n        _destroyed: false,\n        [Symbol(refed)]: true,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 633,\n        [Symbol(triggerId)]: 624\n      },\n      loggedOn: true,\n      [Symbol(kCapture)]: false\n    },\n    _events: [Object: null prototype] {\n      updateMachineAuth: [Function (anonymous)]\n    },\n    _eventsCount: 1\n  },\n  steamFriends: SteamFriends {\n    _client: SteamClient {\n      _events: [Object: null prototype],\n      _eventsCount: 5,\n      _maxListeners: undefined,\n      _jobs: {},\n      _currentJobID: 0,\n      sessionID: 1336603360,\n      _connection: [Connection],\n      _tempSessionKey: <Buffer c7 43 74 54 93 fc 21 e4 e3 59 62 bb 37 f3 f1 99 d8 e0 cc 83 7c 6b 0d 04 28 ce af 51 1a b5 f2 da>,\n      connected: true,\n      steamID: '76561199139099147',\n      _heartBeatFunc: Timeout {\n        _idleTimeout: 9000,\n        _idlePrev: [TimersList],\n        _idleNext: [TimersList],\n        _idleStart: 43863,\n        _onTimeout: [Function: bound ],\n        _timerArgs: undefined,\n        _repeat: 9000,\n        _destroyed: false,\n        [Symbol(refed)]: true,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 633,\n        [Symbol(triggerId)]: 624\n      },\n      loggedOn: true,\n      [Symbol(kCapture)]: false\n    },\n    personaStates: { '76561199139099147': [Object] },\n    clanStates: {},\n    chatRooms: {},\n    friends: {},\n    groups: {},\n    _personaState: 1\n  },\n  Dota2: Dota2Client {\n    _events: [Object: null prototype] {\n      ready: [Function (anonymous)],\n      unready: [Function (anonymous)],\n      unhandled: [Function (anonymous)],\n      practiceLobbyUpdate: [Function (anonymous)],\n      practiceLobbyCleared: [Function (anonymous)],\n      matchSignedOut: [Function (anonymous)],\n      practiceLobbyResponse: [Function (anonymous)],\n      chatMessage: [Function (anonymous)]\n    },\n    _eventsCount: 8,\n    _maxListeners: undefined,\n    debug: true,\n    debugMore: true,\n    Logger: DerivedLogger {\n      _readableState: [ReadableState],\n      readable: true,\n      _events: [Object: null prototype],\n      _eventsCount: 3,\n      _maxListeners: undefined,\n      _writableState: [WritableState],\n      writable: true,\n      allowHalfOpen: true,\n      _transformState: [Object],\n      silent: undefined,\n      format: [Format],\n      defaultMeta: null,\n      levels: [Object],\n      level: 'silly',\n      exceptions: [ExceptionHandler],\n      rejections: [RejectionHandler],\n      profilers: {},\n      exitOnError: true,\n      [Symbol(kCapture)]: false\n    },\n    Inventory: [ [CSOEconItem], [CSOEconItem] ],\n    chatChannels: [],\n    Lobby: CSODOTALobby {\n      members: [],\n      left_members: [],\n      pending_invites: [],\n      team_details: [],\n      timed_reward_details: [],\n      broadcast_channel_info: [],\n      extra_messages: [],\n      previous_series_matches: [],\n      event_progression_enabled: [],\n      emergency_disabled_hero_ids: [],\n      mutations: [],\n      lobby_id: [Long],\n      game_mode: 21,\n      state: 0,\n      leader_id: [Long],\n      lobby_type: 1,\n      allow_cheats: false,\n      fill_with_bots: false,\n      intro_mode: false,\n      game_name: 'inhouse-lobby-608f9cb72861855fe84b5ad0',\n      server_region: 5,\n      cm_pick: 0,\n      allow_spectating: true,\n      bot_difficulty_radiant: 0,\n      game_version: 1,\n      pass_key: 'tasty-eagle-12',\n      leagueid: 0,\n      penalty_level_radiant: 0,\n      penalty_level_dire: 0,\n      series_type: 1,\n      radiant_series_wins: 0,\n      dire_series_wins: 0,\n      allchat: true,\n      dota_tv_delay: 1,\n      lan: false,\n      visibility: 0,\n      previous_match_override: [Long],\n      pause_setting: 0,\n      bot_difficulty_dire: 0,\n      bot_radiant: [Long],\n      bot_dire: [Long],\n      selection_priority_rules: 0,\n      league_node_id: 0\n    },\n    LobbyInvite: null,\n    Party: null,\n    PartyInvite: null,\n    _user: SteamUser { _client: [SteamClient] },\n    _client: SteamClient {\n      _events: [Object: null prototype],\n      _eventsCount: 5,\n      _maxListeners: undefined,\n      _jobs: {},\n      _currentJobID: 0,\n      sessionID: 1336603360,\n      _connection: [Connection],\n      _tempSessionKey: <Buffer c7 43 74 54 93 fc 21 e4 e3 59 62 bb 37 f3 f1 99 d8 e0 cc 83 7c 6b 0d 04 28 ce af 51 1a b5 f2 da>,\n      connected: true,\n      steamID: '76561199139099147',\n      _heartBeatFunc: Timeout {\n        _idleTimeout: 9000,\n        _idlePrev: [TimersList],\n        _idleNext: [TimersList],\n        _idleStart: 43863,\n        _onTimeout: [Function: bound ],\n        _timerArgs: undefined,\n        _repeat: 9000,\n        _destroyed: false,\n        [Symbol(refed)]: true,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 633,\n        [Symbol(triggerId)]: 624\n      },\n      loggedOn: true,\n      [Symbol(kCapture)]: false\n    },\n    _gc: SteamGameCoordinator {\n      _client: [SteamClient],\n      _appid: 570,\n      _jobs: [Object],\n      _currentJobID: 2,\n      _events: [Object: null prototype],\n      _eventsCount: 1\n    },\n    _appid: 570,\n    _gcReady: true,\n    _gcClientHelloIntervalId: null,\n    _gcConnectionStatus: 3,\n    _protoBufHeader: { msg: 7009, proto: [Object] },\n    _sendClientHello: [Function (anonymous)],\n    AccountID: 1178833419,\n    _gcClientHelloCount: 2,\n    [Symbol(kCapture)]: false\n  },\n  logOnDetails: {\n    account_name: 'dynastyesports',\n    password: 'St3@mAccountToBu!dlovelyAPI69',\n    auth_code: '3DW4R',\n    sha_sentryfile: <Buffer 0d f9 ab fb 57 ec fe c8 52 e4 6c 9f d6 ca 0c 54 f0 91 94 6a>,\n    protocol_version: 65575\n  },\n  [Symbol(kCapture)]: false\n}",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.573Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> { _id: 608f9cb72861855fe84b5ad0, players: [ '76561198177128005' ] }",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.622Z",
  },
  {
    message:
      "lobby run STATE_BOT_STARTED lobbyState {\n  _id: 608f9cb72861855fe84b5ad0,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_BOT_STARTED',\n  password: 'tasty-eagle-12',\n  createdOn: 2021-05-03T06:48:23.232Z,\n  updatedOn: 2021-05-03T06:48:23.232Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608f9cb72861855fe84b5ad0',\n  botId: '608f9cb72861855fe84b5ad1',\n  dotaLobbyId: '27176301180697932'\n} players [ '76561198177128005' ] ",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.626Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.628Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.628Z",
  },
  {
    message: "DotaBot inviteToLobby 76561198177128005",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.630Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.645Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608f9cb72861855fe84b5ad0,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'tasty-eagle-12',\n  createdOn: 2021-05-03T06:48:23.232Z,\n  updatedOn: 2021-05-03T06:48:23.232Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608f9cb72861855fe84b5ad0',\n  botId: 608f9cb72861855fe84b5ad1,\n  dotaLobbyId: '27176301180697932'\n}",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.703Z",
  },
  {
    message:
      "runLobby 608f9cb72861855fe84b5ad0 STATE_BOT_STARTED to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.704Z",
  },
  {
    message:
      "LobbyManager getBot 608f9cb72861855fe84b5ad1 bot DotaBot {\n  _events: [Object: null prototype] {\n    EVENT_LOBBY_READY: [Function (anonymous)],\n    EVENT_BOT_LOBBY_LEFT: [Function (anonymous)],\n    EVENT_MATCH_SIGNEDOUT: [Function (anonymous)],\n    EVENT_MATCH_OUTCOME: [Function (anonymous)]\n  },\n  _eventsCount: 4,\n  _maxListeners: undefined,\n  _connectionState: 'DOTA_CONNECTED',\n  _connectionAttempts: 1,\n  _connecting: false,\n  _lobbyOptions: {\n    game_name: 'inhouse-lobby-608f9cb72861855fe84b5ad0',\n    server_region: 5,\n    game_mode: 21,\n    series_type: 1,\n    game_version: 1,\n    allow_cheats: false,\n    fill_with_bots: false,\n    allow_spectating: true,\n    pass_key: 'tasty-eagle-12',\n    radiant_series_wins: 0,\n    dire_series_wins: 0,\n    allchat: true,\n    visibility: 0,\n    cm_pick: 0\n  },\n  _teamCache: [ '76561198177128005' ],\n  _queue: Queue {\n    _backoff: 10000,\n    _rateLimit: 1,\n    _debug: true,\n    _retries: 0,\n    _state: 'idle',\n    _queue: []\n  },\n  config: {\n    _id: 608f9cb72861855fe84b5ad1,\n    status: 'BOT_OFFLINE',\n    lobbyCount: 1,\n    steamId64: '76561199139099147',\n    accountName: 'dynastyesports',\n    personaName: 'my*****Name',\n    password: 'St3@mAccountToBu!dlovelyAPI69',\n    created_at: 2021-05-03T06:48:23.500Z,\n    updated_at: 2021-05-03T06:48:23.589Z,\n    __v: 0,\n    steam_guard_code: '3DW4R',\n    two_factor_code: undefined\n  },\n  steamClient: SteamClient {\n    _events: [Object: null prototype] {\n      message: [Array],\n      logOnResponse: [Array],\n      loggedOff: [Function (anonymous)],\n      error: [AsyncFunction (anonymous)],\n      servers: [Function (anonymous)]\n    },\n    _eventsCount: 5,\n    _maxListeners: undefined,\n    _jobs: {},\n    _currentJobID: 0,\n    sessionID: 1336603360,\n    _connection: Connection {\n      connecting: false,\n      _hadError: false,\n      _parent: null,\n      _host: null,\n      _readableState: [ReadableState],\n      _events: [Object: null prototype],\n      _eventsCount: 7,\n      _maxListeners: undefined,\n      _writableState: [WritableState],\n      allowHalfOpen: false,\n      _sockname: null,\n      _pendingData: null,\n      _pendingEncoding: '',\n      server: null,\n      _server: null,\n      timeout: 0,\n      sessionKey: <Buffer c7 43 74 54 93 fc 21 e4 e3 59 62 bb 37 f3 f1 99 d8 e0 cc 83 7c 6b 0d 04 28 ce af 51 1a b5 f2 da>,\n      [Symbol(async_id_symbol)]: 595,\n      [Symbol(kHandle)]: [TCP],\n      [Symbol(kSetNoDelay)]: false,\n      [Symbol(lastWriteQueueSize)]: 0,\n      [Symbol(timeout)]: Timeout {\n        _idleTimeout: -1,\n        _idlePrev: null,\n        _idleNext: null,\n        _idleStart: 42769,\n        _onTimeout: null,\n        _timerArgs: undefined,\n        _repeat: null,\n        _destroyed: true,\n        [Symbol(refed)]: false,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 594,\n        [Symbol(triggerId)]: 574\n      },\n      [Symbol(kBuffer)]: null,\n      [Symbol(kBufferCb)]: null,\n      [Symbol(kBufferGen)]: null,\n      [Symbol(kCapture)]: false,\n      [Symbol(kBytesRead)]: 0,\n      [Symbol(kBytesWritten)]: 0\n    },\n    _tempSessionKey: <Buffer c7 43 74 54 93 fc 21 e4 e3 59 62 bb 37 f3 f1 99 d8 e0 cc 83 7c 6b 0d 04 28 ce af 51 1a b5 f2 da>,\n    connected: true,\n    steamID: '76561199139099147',\n    _heartBeatFunc: Timeout {\n      _idleTimeout: 9000,\n      _idlePrev: [TimersList],\n      _idleNext: [TimersList],\n      _idleStart: 43863,\n      _onTimeout: [Function: bound ],\n      _timerArgs: undefined,\n      _repeat: 9000,\n      _destroyed: false,\n      [Symbol(refed)]: true,\n      [Symbol(kHasPrimitive)]: false,\n      [Symbol(asyncId)]: 633,\n      [Symbol(triggerId)]: 624\n    },\n    loggedOn: true,\n    [Symbol(kCapture)]: false\n  },\n  steamUser: SteamUser {\n    _client: SteamClient {\n      _events: [Object: null prototype],\n      _eventsCount: 5,\n      _maxListeners: undefined,\n      _jobs: {},\n      _currentJobID: 0,\n      sessionID: 1336603360,\n      _connection: [Connection],\n      _tempSessionKey: <Buffer c7 43 74 54 93 fc 21 e4 e3 59 62 bb 37 f3 f1 99 d8 e0 cc 83 7c 6b 0d 04 28 ce af 51 1a b5 f2 da>,\n      connected: true,\n      steamID: '76561199139099147',\n      _heartBeatFunc: Timeout {\n        _idleTimeout: 9000,\n        _idlePrev: [TimersList],\n        _idleNext: [TimersList],\n        _idleStart: 43863,\n        _onTimeout: [Function: bound ],\n        _timerArgs: undefined,\n        _repeat: 9000,\n        _destroyed: false,\n        [Symbol(refed)]: true,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 633,\n        [Symbol(triggerId)]: 624\n      },\n      loggedOn: true,\n      [Symbol(kCapture)]: false\n    },\n    _events: [Object: null prototype] {\n      updateMachineAuth: [Function (anonymous)]\n    },\n    _eventsCount: 1\n  },\n  steamFriends: SteamFriends {\n    _client: SteamClient {\n      _events: [Object: null prototype],\n      _eventsCount: 5,\n      _maxListeners: undefined,\n      _jobs: {},\n      _currentJobID: 0,\n      sessionID: 1336603360,\n      _connection: [Connection],\n      _tempSessionKey: <Buffer c7 43 74 54 93 fc 21 e4 e3 59 62 bb 37 f3 f1 99 d8 e0 cc 83 7c 6b 0d 04 28 ce af 51 1a b5 f2 da>,\n      connected: true,\n      steamID: '76561199139099147',\n      _heartBeatFunc: Timeout {\n        _idleTimeout: 9000,\n        _idlePrev: [TimersList],\n        _idleNext: [TimersList],\n        _idleStart: 43863,\n        _onTimeout: [Function: bound ],\n        _timerArgs: undefined,\n        _repeat: 9000,\n        _destroyed: false,\n        [Symbol(refed)]: true,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 633,\n        [Symbol(triggerId)]: 624\n      },\n      loggedOn: true,\n      [Symbol(kCapture)]: false\n    },\n    personaStates: { '76561199139099147': [Object] },\n    clanStates: {},\n    chatRooms: {},\n    friends: {},\n    groups: {},\n    _personaState: 1\n  },\n  Dota2: Dota2Client {\n    _events: [Object: null prototype] {\n      ready: [Function (anonymous)],\n      unready: [Function (anonymous)],\n      unhandled: [Function (anonymous)],\n      practiceLobbyUpdate: [Function (anonymous)],\n      practiceLobbyCleared: [Function (anonymous)],\n      matchSignedOut: [Function (anonymous)],\n      practiceLobbyResponse: [Function (anonymous)],\n      chatMessage: [Function (anonymous)],\n      inviteCreated: [Function]\n    },\n    _eventsCount: 9,\n    _maxListeners: undefined,\n    debug: true,\n    debugMore: true,\n    Logger: DerivedLogger {\n      _readableState: [ReadableState],\n      readable: true,\n      _events: [Object: null prototype],\n      _eventsCount: 3,\n      _maxListeners: undefined,\n      _writableState: [WritableState],\n      writable: true,\n      allowHalfOpen: true,\n      _transformState: [Object],\n      silent: undefined,\n      format: [Format],\n      defaultMeta: null,\n      levels: [Object],\n      level: 'silly',\n      exceptions: [ExceptionHandler],\n      rejections: [RejectionHandler],\n      profilers: {},\n      exitOnError: true,\n      [Symbol(kCapture)]: false\n    },\n    Inventory: [ [CSOEconItem], [CSOEconItem] ],\n    chatChannels: [],\n    Lobby: CSODOTALobby {\n      members: [],\n      left_members: [],\n      pending_invites: [],\n      team_details: [],\n      timed_reward_details: [],\n      broadcast_channel_info: [],\n      extra_messages: [],\n      previous_series_matches: [],\n      event_progression_enabled: [],\n      emergency_disabled_hero_ids: [],\n      mutations: [],\n      lobby_id: [Long],\n      game_mode: 21,\n      state: 0,\n      leader_id: [Long],\n      lobby_type: 1,\n      allow_cheats: false,\n      fill_with_bots: false,\n      intro_mode: false,\n      game_name: 'inhouse-lobby-608f9cb72861855fe84b5ad0',\n      server_region: 5,\n      cm_pick: 0,\n      allow_spectating: true,\n      bot_difficulty_radiant: 0,\n      game_version: 1,\n      pass_key: 'tasty-eagle-12',\n      leagueid: 0,\n      penalty_level_radiant: 0,\n      penalty_level_dire: 0,\n      series_type: 1,\n      radiant_series_wins: 0,\n      dire_series_wins: 0,\n      allchat: true,\n      dota_tv_delay: 1,\n      lan: false,\n      visibility: 0,\n      previous_match_override: [Long],\n      pause_setting: 0,\n      bot_difficulty_dire: 0,\n      bot_radiant: [Long],\n      bot_dire: [Long],\n      selection_priority_rules: 0,\n      league_node_id: 0\n    },\n    LobbyInvite: null,\n    Party: null,\n    PartyInvite: null,\n    _user: SteamUser { _client: [SteamClient] },\n    _client: SteamClient {\n      _events: [Object: null prototype],\n      _eventsCount: 5,\n      _maxListeners: undefined,\n      _jobs: {},\n      _currentJobID: 0,\n      sessionID: 1336603360,\n      _connection: [Connection],\n      _tempSessionKey: <Buffer c7 43 74 54 93 fc 21 e4 e3 59 62 bb 37 f3 f1 99 d8 e0 cc 83 7c 6b 0d 04 28 ce af 51 1a b5 f2 da>,\n      connected: true,\n      steamID: '76561199139099147',\n      _heartBeatFunc: Timeout {\n        _idleTimeout: 9000,\n        _idlePrev: [TimersList],\n        _idleNext: [TimersList],\n        _idleStart: 43863,\n        _onTimeout: [Function: bound ],\n        _timerArgs: undefined,\n        _repeat: 9000,\n        _destroyed: false,\n        [Symbol(refed)]: true,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 633,\n        [Symbol(triggerId)]: 624\n      },\n      loggedOn: true,\n      [Symbol(kCapture)]: false\n    },\n    _gc: SteamGameCoordinator {\n      _client: [SteamClient],\n      _appid: 570,\n      _jobs: [Object],\n      _currentJobID: 2,\n      _events: [Object: null prototype],\n      _eventsCount: 1\n    },\n    _appid: 570,\n    _gcReady: true,\n    _gcClientHelloIntervalId: null,\n    _gcConnectionStatus: 3,\n    _protoBufHeader: { msg: 4512, proto: [Object] },\n    _sendClientHello: [Function (anonymous)],\n    AccountID: 1178833419,\n    _gcClientHelloCount: 2,\n    [Symbol(kCapture)]: false\n  },\n  logOnDetails: {\n    account_name: 'dynastyesports',\n    password: 'St3@mAccountToBu!dlovelyAPI69',\n    auth_code: '3DW4R',\n    sha_sentryfile: <Buffer 0d f9 ab fb 57 ec fe c8 52 e4 6c 9f d6 ca 0c 54 f0 91 94 6a>,\n    protocol_version: 65575\n  },\n  [Symbol(kCapture)]: false\n}",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.838Z",
  },
  {
    message: "lobby run isDotaLobbyReady true",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.841Z",
  },
  {
    message:
      "LobbyManager onStartDotaLobby 608f9cb72861855fe84b5ad0 608f9cb72861855fe84b5ad1 STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.844Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.858Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.859Z",
  },
  {
    message: "DotaBot launchPracticeLobby",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.860Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T06:48:33.872Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-03T06:48:34.304Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1305526964, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608f9cb72861855fe84b5ad0',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'tasty-eagle-12',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 216862277, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1305526964, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608f9cb72861855fe84b5ad0',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'tasty-eagle-12',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  current_primary_event: 0,\n  league_node_id: 0\n}  this.teamCache [ '76561198177128005' ] ",
    level: "debug",
    timestamp: "2021-05-03T06:48:34.327Z",
  },
  {
    message: "DotaBot practiceLobbyResponse CMsgGenericResult { eresult: 2 }",
    level: "debug",
    timestamp: "2021-05-03T06:48:34.335Z",
  },
  {
    message: "DotaBot launchPracticeLobby response undefined",
    level: "debug",
    timestamp: "2021-05-03T06:48:34.339Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-03T06:48:34.343Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-03T06:48:34.352Z",
  },
  {
    message: "DotaBot leaveChat Lobby_27176301180697932",
    level: "debug",
    timestamp: "2021-05-03T06:48:34.360Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T06:48:34.370Z",
  },
  {
    message: "dota bot startDotaLobby matchId 0",
    level: "debug",
    timestamp: "2021-05-03T06:48:34.372Z",
  },
  {
    message: "LobbyManager onStartDotaLobby matchId 0 leagueid ",
    level: "debug",
    timestamp: "2021-05-03T06:48:34.374Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176301180697932   --> {\n  _id: 608f9cb72861855fe84b5ad0,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'tasty-eagle-12',\n  createdOn: 2021-05-03T06:48:23.232Z,\n  updatedOn: 2021-05-03T06:48:23.232Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608f9cb72861855fe84b5ad0',\n  botId: 608f9cb72861855fe84b5ad1,\n  dotaLobbyId: '27176301180697932'\n}",
    level: "debug",
    timestamp: "2021-05-03T06:48:34.395Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608f9cb72861855fe84b5ad0,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'tasty-eagle-12',\n  createdOn: 2021-05-03T06:48:23.232Z,\n  updatedOn: 2021-05-03T06:48:23.232Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608f9cb72861855fe84b5ad0',\n  botId: 608f9cb72861855fe84b5ad1,\n  dotaLobbyId: '27176301180697932',\n  matchId: '0',\n  startedAt: 2021-05-03T06:48:33.846Z\n}",
    level: "debug",
    timestamp: "2021-05-03T06:48:34.426Z",
  },
  {
    message: "matchTracker run false",
    level: "debug",
    timestamp: "2021-05-03T06:48:34.427Z",
  },
  {
    message: "matchTracker setMatchDetails matchId undefined",
    level: "debug",
    timestamp: "2021-05-03T06:48:34.428Z",
  },
  {
    message: "ihlManager onStartDotaLobby true",
    level: "debug",
    timestamp: "2021-05-03T06:48:34.429Z",
  },
  {
    message: "ihlManager onStartDotaLobby false",
    level: "debug",
    timestamp: "2021-05-03T06:48:34.430Z",
  },
  {
    message:
      "runLobby 608f9cb72861855fe84b5ad0 STATE_WAITING_FOR_PLAYERS to STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-03T06:48:34.431Z",
  },
  {
    message:
      "runLobby 608f9cb72861855fe84b5ad0 STATE_MATCH_IN_PROGRESS to STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-03T06:48:34.433Z",
  },
  {
    message: "DB findLobbyById _id undefined   --> null",
    level: "debug",
    timestamp: "2021-05-03T06:48:34.468Z",
  },
  {
    level: "error",
    message:
      "TypeError: Cannot read property 'id' of null - trace: at setMatchDetails (D:\\mohit\\blocks\\bexpressserver\\boldbtest\\server\\services\\dotaBot\\matchTracker.js:94:52)\n    at processTicksAndRejections (internal/process/task_queues.js:93:5)\n    at async MatchTracker.run (D:\\mohit\\blocks\\bexpressserver\\boldbtest\\server\\services\\dotaBot\\matchTracker.js:301:23)",
    timestamp: "2021-05-03T06:48:34.476Z",
  },
];
