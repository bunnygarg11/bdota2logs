let b = [
  {
    message: "DB findActiveLobbiesForUser userId 76561199165399234  --> []",
    level: "debug",
    timestamp: "2021-05-01T16:09:05.639Z",
  },
  {
    message:
      "DB findPendingLobby  --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'white-dodo-94',\n  createdOn: 2021-05-01T15:12:40.778Z,\n  updatedOn: 2021-05-01T15:12:40.779Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608d6fe84f12dc10f43f6ced'\n}",
    level: "debug",
    timestamp: "2021-05-01T16:09:06.070Z",
  },
  {
    message:
      "DB addPlayer  player 76561199165399234  --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005', '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'white-dodo-94',\n  createdOn: 2021-05-01T15:12:40.778Z,\n  updatedOn: 2021-05-01T15:12:40.779Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608d6fe84f12dc10f43f6ced'\n}",
    level: "debug",
    timestamp: "2021-05-01T16:09:06.324Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005', '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'white-dodo-94',\n  createdOn: 2021-05-01T15:12:40.778Z,\n  updatedOn: 2021-05-01T15:12:40.779Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608d6fe84f12dc10f43f6ced'\n}",
    level: "debug",
    timestamp: "2021-05-01T16:09:06.600Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-01T16:09:06.617Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-01T16:09:06.773Z",
  },
  {
    message:
      "LobbyManager runLobby 608d6fe84f12dc10f43f6ced STATE_WAITING_FOR_BOT STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-01T16:09:06.863Z",
  },
  {
    message:
      "DB findLobbyById _id 608d6fe84f12dc10f43f6ced   --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005', '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'white-dodo-94',\n  createdOn: 2021-05-01T15:12:40.778Z,\n  updatedOn: 2021-05-01T15:12:40.779Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608d6fe84f12dc10f43f6ced'\n}",
    level: "debug",
    timestamp: "2021-05-01T16:09:06.980Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-01T16:09:06.987Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  players: [ '76561198177128005', '76561199165399234' ]\n}",
    level: "debug",
    timestamp: "2021-05-01T16:09:07.468Z",
  },
  {
    message:
      "validateLobbyPlayers 608d6fe84f12dc10f43f6ced end STATE_WAITING_FOR_BOT to STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-01T16:09:07.518Z",
  },
  {
    message: "STATE_WAITING_FOR_BOT 608d6fe84f12dc10f43f6ced undefined",
    level: "debug",
    timestamp: "2021-05-01T16:09:07.620Z",
  },
  {
    message: "DB findUnassignedBot   --> null",
    level: "debug",
    timestamp: "2021-05-01T16:09:07.843Z",
  },
  {
    message:
      "DB findOrCreateBot steamId64 76561199139099147 accountName dynastyesports personaName my*****Name password St3@mAccountToBu!dlovelyAPI69 --> {\n  status: 'BOT_OFFLINE',\n  lobbyCount: 0,\n  _id: 608d7d23097a400950061578,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-01T16:09:08.085Z,\n  updated_at: 2021-05-01T16:09:08.085Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-01T16:09:08.337Z",
  },
  {
    message: "lobby run findUnassignedBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-01T16:09:08.345Z",
  },
  {
    message:
      "DB assignBotToLobby lobby [object Object] botId 608d7d23097a400950061578  --> {\n  _id: 608d7d23097a400950061578,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-01T16:09:08.085Z,\n  updated_at: 2021-05-01T16:09:08.547Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-01T16:09:08.748Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005', '76561199165399234' ],\n  state: 'STATE_BOT_ASSIGNED',\n  password: 'white-dodo-94',\n  createdOn: 2021-05-01T15:12:40.778Z,\n  updatedOn: 2021-05-01T15:12:40.779Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  botId: 608d7d23097a400950061578\n}",
    level: "debug",
    timestamp: "2021-05-01T16:09:08.999Z",
  },
  {
    message:
      "runLobby 608d6fe84f12dc10f43f6ced STATE_WAITING_FOR_BOT to STATE_BOT_ASSIGNED",
    level: "debug",
    timestamp: "2021-05-01T16:09:09.015Z",
  },
  {
    message: "LobbyManager loadBotById 608d7d23097a400950061578",
    level: "debug",
    timestamp: "2021-05-01T16:09:09.190Z",
  },
  {
    message:
      "DB findBot  _id 608d7d23097a400950061578  --> {\n  _id: 608d7d23097a400950061578,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-01T16:09:08.085Z,\n  updated_at: 2021-05-01T16:09:08.547Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-01T16:09:09.362Z",
  },
  {
    message: "LobbyManager loadBot 608d7d23097a400950061578",
    level: "debug",
    timestamp: "2021-05-01T16:09:09.411Z",
  },
  {
    message: "LobbyManager getBot 608d7d23097a400950061578",
    level: "debug",
    timestamp: "2021-05-01T16:09:09.485Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_LOADING _id 608d7d23097a400950061578  --> {\n  _id: 608d7d23097a400950061578,\n  status: 'BOT_LOADING',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-01T16:09:08.085Z,\n  updated_at: 2021-05-01T16:09:09.496Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-01T16:09:09.671Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-01T16:09:09.797Z",
  },
  {
    message: "DotaBot connectDotaBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-01T16:09:09.819Z",
  },
  {
    message: "DotaBot connecting...",
    level: "debug",
    timestamp: "2021-05-01T16:09:09.836Z",
  },
  {
    message: "DotaBot logOnToSteam logging on steamUser...",
    level: "debug",
    timestamp: "2021-05-01T16:09:10.711Z",
  },
  {
    message: "DotaBot Received servers.",
    level: "debug",
    timestamp: "2021-05-01T16:09:14.635Z",
  },
  {
    message: "DotaBot set steam persona state and name.",
    level: "debug",
    timestamp: "2021-05-01T16:09:15.080Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-01T16:09:17.977Z",
  },
  {
    message: "Activating queue",
    level: "debug",
    timestamp: "2021-05-01T16:09:17.981Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-01T16:09:17.986Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-01T16:09:18.019Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-01T16:09:18.258Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-01T16:09:19.085Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 8678",
    level: "debug",
    timestamp: "2021-05-01T16:09:19.385Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_ONLINE steamId64 76561199139099147  --> {\n  _id: 608d7d23097a400950061578,\n  status: 'BOT_ONLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-01T16:09:08.085Z,\n  updated_at: 2021-05-01T16:09:19.098Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-01T16:09:19.579Z",
  },
  {
    message: "ihlManager loadBot loaded",
    level: "debug",
    timestamp: "2021-05-01T16:09:19.590Z",
  },
  {
    message: "ihlManager loadBot done",
    level: "debug",
    timestamp: "2021-05-01T16:09:19.596Z",
  },
  {
    message:
      "DotaBot createDotaBotLobby inhouse-lobby-608d6fe84f12dc10f43f6ced white-dodo-94  DOTA_GAMEMODE_1V1MID 21  76561199139099147",
    level: "debug",
    timestamp: "2021-05-01T16:09:19.632Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-01T16:09:19.641Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-01T16:09:19.649Z",
  },
  {
    message:
      "DotaBot createPracticeLobby {\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  game_mode: 21,\n  series_type: 0,\n  game_version: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  allow_spectating: true,\n  pass_key: 'white-dodo-94',\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  visibility: 0,\n  cm_pick: 0\n}",
    level: "debug",
    timestamp: "2021-05-01T16:09:19.746Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-01T16:09:20.245Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-01T16:09:21.401Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  null  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  this.teamCache [] ",
    level: "debug",
    timestamp: "2021-05-01T16:09:21.582Z",
  },
  {
    message: "DotaBot practiceLobbyResponse CMsgGenericResult { eresult: 1 }",
    level: "debug",
    timestamp: "2021-05-01T16:09:21.708Z",
  },
  {
    message: "DotaBot createDotaBotLobby practice lobby created",
    level: "debug",
    timestamp: "2021-05-01T16:09:21.772Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176300174943980   --> null",
    level: "debug",
    timestamp: "2021-05-01T16:09:21.893Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.dotaLobbyId 27176300174943980 not found. Bot 608d7d23097a400950061578 leaving lobby...",
    level: "debug",
    timestamp: "2021-05-01T16:09:21.942Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_IN_LOBBY steamId64 76561199139099147  --> {\n  _id: 608d7d23097a400950061578,\n  status: 'BOT_IN_LOBBY',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-01T16:09:08.085Z,\n  updated_at: 2021-05-01T16:09:21.782Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-01T16:09:22.021Z",
  },
  {
    message: "DotaBot createDotaBotLobby bot status updated",
    level: "debug",
    timestamp: "2021-05-01T16:09:22.055Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-01T16:09:22.087Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-01T16:09:22.111Z",
  },
  {
    message: "DotaBot practiceLobbyKickFromTeam 1178833419",
    level: "debug",
    timestamp: "2021-05-01T16:09:22.122Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-01T16:09:22.364Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-01T16:09:22.884Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  this.teamCache [] ",
    level: "debug",
    timestamp: "2021-05-01T16:09:23.209Z",
  },
  {
    message:
      "dotabot processMembers oldMembers [] newMembers[] members { left: [], joined: [], changedSlot: [] } ",
    level: "debug",
    timestamp: "2021-05-01T16:09:23.322Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} newLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-01T16:09:23.730Z",
  },
  {
    message: "membersToPlayerState playerState {}",
    level: "debug",
    timestamp: "2021-05-01T16:09:23.806Z",
  },
  {
    message: "dotaBot isDotaLobbyReady teamCache [] playerState {} ",
    level: "debug",
    timestamp: "2021-05-01T16:09:23.847Z",
  },
  {
    message: "DotaBot practiceLobbyResponse CMsgGenericResult { eresult: 1 }",
    level: "debug",
    timestamp: "2021-05-01T16:09:23.905Z",
  },
  {
    message:
      "DotaBot practiceLobbyKickFromTeam response undefined [object Object]",
    level: "debug",
    timestamp: "2021-05-01T16:09:23.917Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-01T16:09:23.958Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-01T16:09:23.977Z",
  },
  {
    message: "DotaBot joinChat Lobby_27176300174943980",
    level: "debug",
    timestamp: "2021-05-01T16:09:24.011Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-01T16:09:24.149Z",
  },
  {
    message: "enterLobbyP dotaLobbyId: 27176300174943980",
    level: "debug",
    timestamp: "2021-05-01T16:09:24.231Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176300174943980   --> null",
    level: "debug",
    timestamp: "2021-05-01T16:09:24.303Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.dotaLobbyId 27176300174943980 not found. Bot 608d7d23097a400950061578 leaving lobby...",
    level: "debug",
    timestamp: "2021-05-01T16:09:24.327Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005', '76561199165399234' ],\n  state: 'STATE_BOT_STARTED',\n  password: 'white-dodo-94',\n  createdOn: 2021-05-01T15:12:40.778Z,\n  updatedOn: 2021-05-01T15:12:40.779Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  botId: 608d7d23097a400950061578,\n  dotaLobbyId: '27176300174943980'\n}",
    level: "debug",
    timestamp: "2021-05-01T16:09:24.415Z",
  },
  {
    message: "updateLobby done. 608d6fe84f12dc10f43f6ced STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-01T16:09:24.483Z",
  },
  {
    message:
      "STATE_BOT_ASSIGNED to STATE_BOT_STARTED 608d6fe84f12dc10f43f6ced STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-01T16:09:24.508Z",
  },
  {
    message:
      "runLobby 608d6fe84f12dc10f43f6ced STATE_BOT_ASSIGNED to STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-01T16:09:24.524Z",
  },
  {
    message: "LobbyManager getBot 608d7d23097a400950061578",
    level: "debug",
    timestamp: "2021-05-01T16:09:24.545Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  players: [ '76561198177128005', '76561199165399234' ]\n}",
    level: "debug",
    timestamp: "2021-05-01T16:09:24.646Z",
  },
  {
    message:
      "lobby run STATE_BOT_STARTED lobbyState {\n  _id: 608d6fe84f12dc10f43f6ced,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005', '76561199165399234' ],\n  state: 'STATE_BOT_STARTED',\n  password: 'white-dodo-94',\n  createdOn: 2021-05-01T15:12:40.778Z,\n  updatedOn: 2021-05-01T15:12:40.779Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  botId: '608d7d23097a400950061578',\n  dotaLobbyId: '27176300174943980'\n} players [ '76561198177128005', '76561199165399234' ] ",
    level: "debug",
    timestamp: "2021-05-01T16:09:24.737Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-01T16:09:24.765Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-01T16:09:24.788Z",
  },
  {
    message: "DotaBot inviteToLobby 76561198177128005",
    level: "debug",
    timestamp: "2021-05-01T16:09:24.879Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-01T16:09:25.064Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-01T16:09:25.178Z",
  },
  {
    message: "DotaBot inviteToLobby 76561199165399234",
    level: "debug",
    timestamp: "2021-05-01T16:09:25.263Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-01T16:09:25.560Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005', '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'white-dodo-94',\n  createdOn: 2021-05-01T15:12:40.778Z,\n  updatedOn: 2021-05-01T15:12:40.779Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  botId: 608d7d23097a400950061578,\n  dotaLobbyId: '27176300174943980'\n}",
    level: "debug",
    timestamp: "2021-05-01T16:09:26.093Z",
  },
  {
    message:
      "runLobby 608d6fe84f12dc10f43f6ced STATE_BOT_STARTED to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-01T16:09:26.137Z",
  },
  {
    message: "LobbyManager getBot 608d7d23097a400950061578",
    level: "debug",
    timestamp: "2021-05-01T16:09:26.182Z",
  },
  {
    message: "membersToPlayerState playerState {}",
    level: "debug",
    timestamp: "2021-05-01T16:09:26.205Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005', '76561199165399234' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-01T16:09:26.228Z",
  },
  {
    message:
      "runLobby 608d6fe84f12dc10f43f6ced STATE_WAITING_FOR_PLAYERS to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-01T16:09:26.237Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-01T16:09:31.202Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  this.teamCache [ '76561198177128005', '76561199165399234' ] ",
    level: "debug",
    timestamp: "2021-05-01T16:09:31.353Z",
  },
  {
    message:
      "dotabot processMembers oldMembers [] newMembers[] members { left: [], joined: [], changedSlot: [] } ",
    level: "debug",
    timestamp: "2021-05-01T16:09:31.362Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} newLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-01T16:09:31.502Z",
  },
  {
    message: "membersToPlayerState playerState {}",
    level: "debug",
    timestamp: "2021-05-01T16:09:31.509Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005', '76561199165399234' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-01T16:09:31.512Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176300174943980   --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005', '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'white-dodo-94',\n  createdOn: 2021-05-01T15:12:40.778Z,\n  updatedOn: 2021-05-01T15:12:40.779Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  botId: 608d7d23097a400950061578,\n  dotaLobbyId: '27176300174943980'\n}",
    level: "debug",
    timestamp: "2021-05-01T16:09:31.585Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-01T16:09:33.333Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  this.teamCache [ '76561198177128005', '76561199165399234' ] ",
    level: "debug",
    timestamp: "2021-05-01T16:09:33.405Z",
  },
  {
    message:
      "dotabot processMembers oldMembers [] newMembers[] members { left: [], joined: [], changedSlot: [] } ",
    level: "debug",
    timestamp: "2021-05-01T16:09:33.409Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} newLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-01T16:09:33.494Z",
  },
  {
    message: "membersToPlayerState playerState {}",
    level: "debug",
    timestamp: "2021-05-01T16:09:33.498Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005', '76561199165399234' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-01T16:09:33.501Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176300174943980   --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005', '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'white-dodo-94',\n  createdOn: 2021-05-01T15:12:40.778Z,\n  updatedOn: 2021-05-01T15:12:40.779Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  botId: 608d7d23097a400950061578,\n  dotaLobbyId: '27176300174943980'\n}",
    level: "debug",
    timestamp: "2021-05-01T16:09:33.591Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-01T16:09:50.075Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  this.teamCache [ '76561198177128005', '76561199165399234' ] ",
    level: "debug",
    timestamp: "2021-05-01T16:09:50.097Z",
  },
  {
    message:
      "dotabot processMembers oldMembers [] newMembers[] members { left: [], joined: [], changedSlot: [] } ",
    level: "debug",
    timestamp: "2021-05-01T16:09:50.098Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} newLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-01T16:09:50.131Z",
  },
  {
    message: "membersToPlayerState playerState {}",
    level: "debug",
    timestamp: "2021-05-01T16:09:50.133Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005', '76561199165399234' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-01T16:09:50.135Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176300174943980   --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005', '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'white-dodo-94',\n  createdOn: 2021-05-01T15:12:40.778Z,\n  updatedOn: 2021-05-01T15:12:40.779Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  botId: 608d7d23097a400950061578,\n  dotaLobbyId: '27176300174943980'\n}",
    level: "debug",
    timestamp: "2021-05-01T16:09:50.193Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-01T16:10:06.572Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  this.teamCache [ '76561198177128005', '76561199165399234' ] ",
    level: "debug",
    timestamp: "2021-05-01T16:10:06.602Z",
  },
  {
    message:
      "dotabot processMembers oldMembers [] newMembers[] members { left: [], joined: [], changedSlot: [] } ",
    level: "debug",
    timestamp: "2021-05-01T16:10:06.603Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} newLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-01T16:10:06.647Z",
  },
  {
    message: "membersToPlayerState playerState {}",
    level: "debug",
    timestamp: "2021-05-01T16:10:06.650Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005', '76561199165399234' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-01T16:10:06.654Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176300174943980   --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005', '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'white-dodo-94',\n  createdOn: 2021-05-01T15:12:40.778Z,\n  updatedOn: 2021-05-01T15:12:40.779Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  botId: 608d7d23097a400950061578,\n  dotaLobbyId: '27176300174943980'\n}",
    level: "debug",
    timestamp: "2021-05-01T16:10:06.728Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-01T16:11:26.281Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  this.teamCache [ '76561198177128005', '76561199165399234' ] ",
    level: "debug",
    timestamp: "2021-05-01T16:11:26.332Z",
  },
  {
    message:
      "dotabot processMembers oldMembers [] newMembers[] members { left: [], joined: [], changedSlot: [] } ",
    level: "debug",
    timestamp: "2021-05-01T16:11:26.336Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} newLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-01T16:11:26.473Z",
  },
  {
    message: "membersToPlayerState playerState {}",
    level: "debug",
    timestamp: "2021-05-01T16:11:26.480Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005', '76561199165399234' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-01T16:11:26.486Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176300174943980   --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005', '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'white-dodo-94',\n  createdOn: 2021-05-01T15:12:40.778Z,\n  updatedOn: 2021-05-01T15:12:40.779Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  botId: 608d7d23097a400950061578,\n  dotaLobbyId: '27176300174943980'\n}",
    level: "debug",
    timestamp: "2021-05-01T16:11:26.604Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-01T16:11:29.079Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  this.teamCache [ '76561198177128005', '76561199165399234' ] ",
    level: "debug",
    timestamp: "2021-05-01T16:11:29.252Z",
  },
  {
    message:
      "dotabot processMembers oldMembers [] newMembers[] members { left: [], joined: [], changedSlot: [] } ",
    level: "debug",
    timestamp: "2021-05-01T16:11:29.261Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} newLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: 1983686380, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 0,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-01T16:11:29.412Z",
  },
  {
    message: "membersToPlayerState playerState {}",
    level: "debug",
    timestamp: "2021-05-01T16:11:29.415Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005', '76561199165399234' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-01T16:11:29.419Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176300174943980   --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005', '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'white-dodo-94',\n  createdOn: 2021-05-01T15:12:40.778Z,\n  updatedOn: 2021-05-01T15:12:40.779Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  botId: 608d7d23097a400950061578,\n  dotaLobbyId: '27176300174943980'\n}",
    level: "debug",
    timestamp: "2021-05-01T16:11:29.516Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7465",
    level: "debug",
    timestamp: "2021-05-01T16:15:46.024Z",
  },
];
