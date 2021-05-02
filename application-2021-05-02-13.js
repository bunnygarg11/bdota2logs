let b = [
  {
    message: "DB findActiveLobbiesForUser userId 76561198177128005  --> []",
    level: "debug",
    timestamp: "2021-05-02T07:37:06.352Z",
  },
  {
    message:
      "DB findPendingLobby  --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'white-dodo-94',\n  createdOn: 2021-05-01T15:12:40.778Z,\n  updatedOn: 2021-05-01T15:12:40.779Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  botId: null,\n  dotaLobbyId: '27176300174943980'\n}",
    level: "debug",
    timestamp: "2021-05-02T07:37:06.400Z",
  },
  {
    message:
      "DB addPlayer  player 76561198177128005  --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'white-dodo-94',\n  createdOn: 2021-05-01T15:12:40.778Z,\n  updatedOn: 2021-05-01T15:12:40.779Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  botId: null,\n  dotaLobbyId: '27176300174943980'\n}",
    level: "debug",
    timestamp: "2021-05-02T07:37:06.457Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'white-dodo-94',\n  createdOn: 2021-05-01T15:12:40.778Z,\n  updatedOn: 2021-05-01T15:12:40.779Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  botId: null,\n  dotaLobbyId: '27176300174943980'\n}",
    level: "debug",
    timestamp: "2021-05-02T07:37:06.521Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T07:37:06.522Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-02T07:37:06.523Z",
  },
  {
    message:
      "LobbyManager runLobby 608d6fe84f12dc10f43f6ced STATE_WAITING_FOR_BOT STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T07:37:06.524Z",
  },
  {
    message:
      "DB findLobbyById _id 608d6fe84f12dc10f43f6ced   --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'white-dodo-94',\n  createdOn: 2021-05-01T15:12:40.778Z,\n  updatedOn: 2021-05-01T15:12:40.779Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  botId: null,\n  dotaLobbyId: '27176300174943980'\n}",
    level: "debug",
    timestamp: "2021-05-02T07:37:06.573Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T07:37:06.574Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  players: [ '76561199165399234', '76561198177128005' ]\n}",
    level: "debug",
    timestamp: "2021-05-02T07:37:06.620Z",
  },
  {
    message:
      "validateLobbyPlayers 608d6fe84f12dc10f43f6ced end STATE_WAITING_FOR_BOT to STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T07:37:06.622Z",
  },
  {
    message: "STATE_WAITING_FOR_BOT 608d6fe84f12dc10f43f6ced null",
    level: "debug",
    timestamp: "2021-05-02T07:37:06.624Z",
  },
  {
    message: "DB findUnassignedBot   --> null",
    level: "debug",
    timestamp: "2021-05-02T07:37:06.665Z",
  },
  {
    message:
      "DB findOrCreateBot steamId64 76561199139099147 accountName dynastyesports personaName my*****Name password St3@mAccountToBu!dlovelyAPI69 --> {\n  status: 'BOT_OFFLINE',\n  lobbyCount: 0,\n  _id: 608e56a27ee0d03a108c98b6,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T07:37:06.673Z,\n  updated_at: 2021-05-02T07:37:06.673Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T07:37:06.726Z",
  },
  {
    message: "lobby run findUnassignedBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T07:37:06.726Z",
  },
  {
    message:
      "DB assignBotToLobby lobby [object Object] botId 608e56a27ee0d03a108c98b6  --> {\n  _id: 608e56a27ee0d03a108c98b6,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T07:37:06.673Z,\n  updated_at: 2021-05-02T07:37:06.775Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T07:37:06.822Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_BOT_ASSIGNED',\n  password: 'white-dodo-94',\n  createdOn: 2021-05-01T15:12:40.778Z,\n  updatedOn: 2021-05-01T15:12:40.779Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  botId: 608e56a27ee0d03a108c98b6,\n  dotaLobbyId: '27176300174943980'\n}",
    level: "debug",
    timestamp: "2021-05-02T07:37:06.899Z",
  },
  {
    message:
      "runLobby 608d6fe84f12dc10f43f6ced STATE_WAITING_FOR_BOT to STATE_BOT_ASSIGNED",
    level: "debug",
    timestamp: "2021-05-02T07:37:06.902Z",
  },
  {
    message: "LobbyManager loadBotById 608e56a27ee0d03a108c98b6",
    level: "debug",
    timestamp: "2021-05-02T07:37:06.903Z",
  },
  {
    message:
      "DB findBot  _id 608e56a27ee0d03a108c98b6  --> {\n  _id: 608e56a27ee0d03a108c98b6,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T07:37:06.673Z,\n  updated_at: 2021-05-02T07:37:06.775Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T07:37:06.946Z",
  },
  {
    message: "LobbyManager loadBot 608e56a27ee0d03a108c98b6",
    level: "debug",
    timestamp: "2021-05-02T07:37:06.947Z",
  },
  {
    message: "LobbyManager getBot 608e56a27ee0d03a108c98b6 bot undefined",
    level: "debug",
    timestamp: "2021-05-02T07:37:06.948Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_LOADING _id 608e56a27ee0d03a108c98b6  --> {\n  _id: 608e56a27ee0d03a108c98b6,\n  status: 'BOT_LOADING',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T07:37:06.673Z,\n  updated_at: 2021-05-02T07:37:06.948Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T07:37:06.996Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-02T07:37:06.999Z",
  },
  {
    message: "DotaBot connectDotaBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T07:37:07.002Z",
  },
  {
    message: "DotaBot connecting...",
    level: "debug",
    timestamp: "2021-05-02T07:37:07.003Z",
  },
  {
    message: "DotaBot logOnToSteam logging on steamUser...",
    level: "debug",
    timestamp: "2021-05-02T07:37:07.687Z",
  },
  {
    message: "DotaBot Received servers.",
    level: "debug",
    timestamp: "2021-05-02T07:37:08.625Z",
  },
  {
    message: "DotaBot set steam persona state and name.",
    level: "debug",
    timestamp: "2021-05-02T07:37:08.628Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-02T07:37:10.589Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-02T07:37:10.594Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-02T07:37:10.644Z",
  },
  {
    message: "Activating queue",
    level: "debug",
    timestamp: "2021-05-02T07:37:10.644Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-02T07:37:10.645Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-02T07:37:10.646Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_ONLINE steamId64 76561199139099147  --> {\n  _id: 608e56a27ee0d03a108c98b6,\n  status: 'BOT_ONLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T07:37:06.673Z,\n  updated_at: 2021-05-02T07:37:10.646Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T07:37:10.695Z",
  },
  {
    message: "ihlManager loadBot loaded",
    level: "debug",
    timestamp: "2021-05-02T07:37:10.696Z",
  },
  {
    message: "ihlManager loadBot done",
    level: "debug",
    timestamp: "2021-05-02T07:37:10.696Z",
  },
  {
    message:
      "DotaBot createDotaBotLobby inhouse-lobby-608d6fe84f12dc10f43f6ced white-dodo-94  DOTA_GAMEMODE_1V1MID 21  76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T07:37:10.699Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-02T07:37:10.703Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-02T07:37:10.704Z",
  },
  {
    message:
      "DotaBot createPracticeLobby {\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  game_mode: 21,\n  series_type: 1,\n  game_version: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  allow_spectating: true,\n  pass_key: 'white-dodo-94',\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  visibility: 0,\n  cm_pick: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T07:37:10.708Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-02T07:37:10.721Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-02T07:37:11.251Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  null  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1929055710, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  this.teamCache [] ",
    level: "debug",
    timestamp: "2021-05-02T07:37:11.260Z",
  },
  {
    message: "DotaBot practiceLobbyResponse CMsgGenericResult { eresult: 1 }",
    level: "debug",
    timestamp: "2021-05-02T07:37:11.262Z",
  },
  {
    message: "DotaBot createDotaBotLobby practice lobby created",
    level: "debug",
    timestamp: "2021-05-02T07:37:11.267Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176300557169186   --> null",
    level: "debug",
    timestamp: "2021-05-02T07:37:11.306Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.dotaLobbyId 27176300557169186 not found. Bot 608e56a27ee0d03a108c98b6 leaving lobby...",
    level: "debug",
    timestamp: "2021-05-02T07:37:11.307Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_IN_LOBBY steamId64 76561199139099147  --> {\n  _id: 608e56a27ee0d03a108c98b6,\n  status: 'BOT_IN_LOBBY',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T07:37:06.673Z,\n  updated_at: 2021-05-02T07:37:11.268Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T07:37:11.358Z",
  },
  {
    message: "DotaBot createDotaBotLobby bot status updated",
    level: "debug",
    timestamp: "2021-05-02T07:37:11.361Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-02T07:37:11.362Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-02T07:37:11.363Z",
  },
  {
    message: "DotaBot practiceLobbyKickFromTeam 1178833419",
    level: "debug",
    timestamp: "2021-05-02T07:37:11.369Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-02T07:37:11.376Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 8678",
    level: "debug",
    timestamp: "2021-05-02T07:37:11.436Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-02T07:37:11.941Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1929055710, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1929055710, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  this.teamCache [] ",
    level: "debug",
    timestamp: "2021-05-02T07:37:11.957Z",
  },
  {
    message:
      "dotabot processMembers oldMembers [] newMembers[] members { left: [], joined: [], changedSlot: [] } ",
    level: "debug",
    timestamp: "2021-05-02T07:37:11.959Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1929055710, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} newLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1929055710, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.011Z",
  },
  {
    message: "membersToPlayerState playerState {}",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.012Z",
  },
  {
    message: "dotaBot isDotaLobbyReady teamCache [] playerState {} ",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.013Z",
  },
  {
    message: "DotaBot practiceLobbyResponse CMsgGenericResult { eresult: 1 }",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.021Z",
  },
  {
    message:
      "DotaBot practiceLobbyKickFromTeam response undefined [object Object]",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.022Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.024Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.025Z",
  },
  {
    message: "DotaBot joinChat Lobby_27176300557169186",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.025Z",
  },
  {
    message: "enterLobbyP dotaLobbyId: 27176300557169186",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.029Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.037Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176300557169186   --> null",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.068Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.dotaLobbyId 27176300557169186 not found. Bot 608e56a27ee0d03a108c98b6 leaving lobby...",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.071Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_BOT_STARTED',\n  password: 'white-dodo-94',\n  createdOn: 2021-05-01T15:12:40.778Z,\n  updatedOn: 2021-05-01T15:12:40.779Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  botId: 608e56a27ee0d03a108c98b6,\n  dotaLobbyId: '27176300557169186'\n}",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.079Z",
  },
  {
    message: "updateLobby done. 608d6fe84f12dc10f43f6ced STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.083Z",
  },
  {
    message:
      "STATE_BOT_ASSIGNED to STATE_BOT_STARTED 608d6fe84f12dc10f43f6ced STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.085Z",
  },
  {
    message:
      "runLobby 608d6fe84f12dc10f43f6ced STATE_BOT_ASSIGNED to STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.087Z",
  },
  {
    message:
      "LobbyManager getBot 608e56a27ee0d03a108c98b6 bot DotaBot {\n  _events: [Object: null prototype] {\n    EVENT_LOBBY_READY: [Function (anonymous)],\n    EVENT_BOT_LOBBY_LEFT: [Function (anonymous)],\n    EVENT_MATCH_SIGNEDOUT: [Function (anonymous)],\n    EVENT_MATCH_OUTCOME: [Function (anonymous)]\n  },\n  _eventsCount: 4,\n  _maxListeners: undefined,\n  _connectionState: 'DOTA_CONNECTED',\n  _connectionAttempts: 1,\n  _connecting: false,\n  _lobbyOptions: {\n    game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n    server_region: 5,\n    game_mode: 21,\n    series_type: 1,\n    game_version: 1,\n    allow_cheats: false,\n    fill_with_bots: false,\n    allow_spectating: true,\n    pass_key: 'white-dodo-94',\n    radiant_series_wins: 0,\n    dire_series_wins: 0,\n    allchat: true,\n    visibility: 0,\n    cm_pick: 0\n  },\n  _teamCache: [],\n  _queue: Queue {\n    _backoff: 10000,\n    _rateLimit: 1,\n    _debug: true,\n    _retries: 0,\n    _state: 'idle',\n    _queue: []\n  },\n  config: {\n    _id: 608e56a27ee0d03a108c98b6,\n    status: 'BOT_OFFLINE',\n    lobbyCount: 1,\n    steamId64: '76561199139099147',\n    accountName: 'dynastyesports',\n    personaName: 'my*****Name',\n    password: 'St3@mAccountToBu!dlovelyAPI69',\n    created_at: 2021-05-02T07:37:06.673Z,\n    updated_at: 2021-05-02T07:37:06.775Z,\n    __v: 0,\n    steam_guard_code: '3DW4R',\n    two_factor_code: undefined\n  },\n  steamClient: SteamClient {\n    _events: [Object: null prototype] {\n      message: [Array],\n      logOnResponse: [Array],\n      loggedOff: [Function (anonymous)],\n      error: [AsyncFunction (anonymous)],\n      servers: [Function (anonymous)]\n    },\n    _eventsCount: 5,\n    _maxListeners: undefined,\n    _jobs: {},\n    _currentJobID: 0,\n    sessionID: -1988409767,\n    _connection: Connection {\n      connecting: false,\n      _hadError: false,\n      _parent: null,\n      _host: null,\n      _readableState: [ReadableState],\n      _events: [Object: null prototype],\n      _eventsCount: 7,\n      _maxListeners: undefined,\n      _writableState: [WritableState],\n      allowHalfOpen: false,\n      _sockname: null,\n      _pendingData: null,\n      _pendingEncoding: '',\n      server: null,\n      _server: null,\n      timeout: 0,\n      sessionKey: <Buffer a0 ea c7 95 95 ce 4b fe 1e d2 75 af 3b 77 d8 5d 35 59 4b ae 05 11 69 90 e0 95 a8 c7 a1 9e 48 a8>,\n      [Symbol(async_id_symbol)]: 767,\n      [Symbol(kHandle)]: [TCP],\n      [Symbol(kSetNoDelay)]: false,\n      [Symbol(lastWriteQueueSize)]: 0,\n      [Symbol(timeout)]: Timeout {\n        _idleTimeout: -1,\n        _idlePrev: null,\n        _idleNext: null,\n        _idleStart: 137181,\n        _onTimeout: null,\n        _timerArgs: undefined,\n        _repeat: null,\n        _destroyed: true,\n        [Symbol(refed)]: false,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 766,\n        [Symbol(triggerId)]: 746\n      },\n      [Symbol(kBuffer)]: null,\n      [Symbol(kBufferCb)]: null,\n      [Symbol(kBufferGen)]: null,\n      [Symbol(kCapture)]: false,\n      [Symbol(kBytesRead)]: 0,\n      [Symbol(kBytesWritten)]: 0\n    },\n    _tempSessionKey: <Buffer a0 ea c7 95 95 ce 4b fe 1e d2 75 af 3b 77 d8 5d 35 59 4b ae 05 11 69 90 e0 95 a8 c7 a1 9e 48 a8>,\n    connected: true,\n    steamID: '76561199139099147',\n    _heartBeatFunc: Timeout {\n      _idleTimeout: 9000,\n      _idlePrev: [TimersList],\n      _idleNext: [TimersList],\n      _idleStart: 138387,\n      _onTimeout: [Function: bound ],\n      _timerArgs: undefined,\n      _repeat: 9000,\n      _destroyed: false,\n      [Symbol(refed)]: true,\n      [Symbol(kHasPrimitive)]: false,\n      [Symbol(asyncId)]: 805,\n      [Symbol(triggerId)]: 796\n    },\n    loggedOn: true,\n    [Symbol(kCapture)]: false\n  },\n  steamUser: SteamUser {\n    _client: SteamClient {\n      _events: [Object: null prototype],\n      _eventsCount: 5,\n      _maxListeners: undefined,\n      _jobs: {},\n      _currentJobID: 0,\n      sessionID: -1988409767,\n      _connection: [Connection],\n      _tempSessionKey: <Buffer a0 ea c7 95 95 ce 4b fe 1e d2 75 af 3b 77 d8 5d 35 59 4b ae 05 11 69 90 e0 95 a8 c7 a1 9e 48 a8>,\n      connected: true,\n      steamID: '76561199139099147',\n      _heartBeatFunc: Timeout {\n        _idleTimeout: 9000,\n        _idlePrev: [TimersList],\n        _idleNext: [TimersList],\n        _idleStart: 138387,\n        _onTimeout: [Function: bound ],\n        _timerArgs: undefined,\n        _repeat: 9000,\n        _destroyed: false,\n        [Symbol(refed)]: true,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 805,\n        [Symbol(triggerId)]: 796\n      },\n      loggedOn: true,\n      [Symbol(kCapture)]: false\n    },\n    _events: [Object: null prototype] {\n      updateMachineAuth: [Function (anonymous)]\n    },\n    _eventsCount: 1\n  },\n  steamFriends: SteamFriends {\n    _client: SteamClient {\n      _events: [Object: null prototype],\n      _eventsCount: 5,\n      _maxListeners: undefined,\n      _jobs: {},\n      _currentJobID: 0,\n      sessionID: -1988409767,\n      _connection: [Connection],\n      _tempSessionKey: <Buffer a0 ea c7 95 95 ce 4b fe 1e d2 75 af 3b 77 d8 5d 35 59 4b ae 05 11 69 90 e0 95 a8 c7 a1 9e 48 a8>,\n      connected: true,\n      steamID: '76561199139099147',\n      _heartBeatFunc: Timeout {\n        _idleTimeout: 9000,\n        _idlePrev: [TimersList],\n        _idleNext: [TimersList],\n        _idleStart: 138387,\n        _onTimeout: [Function: bound ],\n        _timerArgs: undefined,\n        _repeat: 9000,\n        _destroyed: false,\n        [Symbol(refed)]: true,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 805,\n        [Symbol(triggerId)]: 796\n      },\n      loggedOn: true,\n      [Symbol(kCapture)]: false\n    },\n    personaStates: { '76561199139099147': [Object] },\n    clanStates: {},\n    chatRooms: {},\n    friends: {},\n    groups: {},\n    _personaState: 1\n  },\n  Dota2: Dota2Client {\n    _events: [Object: null prototype] {\n      ready: [Function (anonymous)],\n      unready: [Function (anonymous)],\n      unhandled: [Function (anonymous)],\n      practiceLobbyUpdate: [Function (anonymous)],\n      practiceLobbyCleared: [Function (anonymous)],\n      matchSignedOut: [Function (anonymous)],\n      practiceLobbyResponse: [Function (anonymous)],\n      chatMessage: [Function (anonymous)]\n    },\n    _eventsCount: 8,\n    _maxListeners: undefined,\n    debug: true,\n    debugMore: true,\n    Logger: DerivedLogger {\n      _readableState: [ReadableState],\n      readable: true,\n      _events: [Object: null prototype],\n      _eventsCount: 3,\n      _maxListeners: undefined,\n      _writableState: [WritableState],\n      writable: true,\n      allowHalfOpen: true,\n      _transformState: [Object],\n      silent: undefined,\n      format: [Format],\n      defaultMeta: null,\n      levels: [Object],\n      level: 'silly',\n      exceptions: [ExceptionHandler],\n      rejections: [RejectionHandler],\n      profilers: {},\n      exitOnError: true,\n      [Symbol(kCapture)]: false\n    },\n    Inventory: [ [CSOEconItem], [CSOEconItem] ],\n    chatChannels: [],\n    Lobby: CSODOTALobby {\n      members: [],\n      left_members: [],\n      pending_invites: [],\n      team_details: [],\n      timed_reward_details: [],\n      broadcast_channel_info: [],\n      extra_messages: [],\n      previous_series_matches: [],\n      event_progression_enabled: [],\n      emergency_disabled_hero_ids: [],\n      mutations: [],\n      lobby_id: [Long],\n      game_mode: 21,\n      state: 0,\n      leader_id: [Long],\n      lobby_type: 1,\n      allow_cheats: false,\n      fill_with_bots: false,\n      intro_mode: false,\n      game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n      server_region: 5,\n      cm_pick: 0,\n      allow_spectating: true,\n      bot_difficulty_radiant: 0,\n      game_version: 1,\n      pass_key: 'white-dodo-94',\n      leagueid: 0,\n      penalty_level_radiant: 0,\n      penalty_level_dire: 0,\n      series_type: 1,\n      radiant_series_wins: 0,\n      dire_series_wins: 0,\n      allchat: true,\n      dota_tv_delay: 1,\n      lan: false,\n      visibility: 0,\n      previous_match_override: [Long],\n      pause_setting: 0,\n      bot_difficulty_dire: 0,\n      bot_radiant: [Long],\n      bot_dire: [Long],\n      selection_priority_rules: 0,\n      league_node_id: 0\n    },\n    LobbyInvite: null,\n    Party: null,\n    PartyInvite: null,\n    _user: SteamUser { _client: [SteamClient] },\n    _client: SteamClient {\n      _events: [Object: null prototype],\n      _eventsCount: 5,\n      _maxListeners: undefined,\n      _jobs: {},\n      _currentJobID: 0,\n      sessionID: -1988409767,\n      _connection: [Connection],\n      _tempSessionKey: <Buffer a0 ea c7 95 95 ce 4b fe 1e d2 75 af 3b 77 d8 5d 35 59 4b ae 05 11 69 90 e0 95 a8 c7 a1 9e 48 a8>,\n      connected: true,\n      steamID: '76561199139099147',\n      _heartBeatFunc: Timeout {\n        _idleTimeout: 9000,\n        _idlePrev: [TimersList],\n        _idleNext: [TimersList],\n        _idleStart: 138387,\n        _onTimeout: [Function: bound ],\n        _timerArgs: undefined,\n        _repeat: 9000,\n        _destroyed: false,\n        [Symbol(refed)]: true,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 805,\n        [Symbol(triggerId)]: 796\n      },\n      loggedOn: true,\n      [Symbol(kCapture)]: false\n    },\n    _gc: SteamGameCoordinator {\n      _client: [SteamClient],\n      _appid: 570,\n      _jobs: [Object],\n      _currentJobID: 2,\n      _events: [Object: null prototype],\n      _eventsCount: 1\n    },\n    _appid: 570,\n    _gcReady: true,\n    _gcClientHelloIntervalId: null,\n    _gcConnectionStatus: 3,\n    _protoBufHeader: { msg: 7009, proto: [Object] },\n    _sendClientHello: [Function (anonymous)],\n    AccountID: 1178833419,\n    _gcClientHelloCount: 1,\n    [Symbol(kCapture)]: false\n  },\n  logOnDetails: {\n    account_name: 'dynastyesports',\n    password: 'St3@mAccountToBu!dlovelyAPI69',\n    auth_code: '3DW4R',\n    sha_sentryfile: <Buffer 0d f9 ab fb 57 ec fe c8 52 e4 6c 9f d6 ca 0c 54 f0 91 94 6a>,\n    protocol_version: 65575\n  },\n  [Symbol(kCapture)]: false\n}",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.176Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  players: [ '76561199165399234', '76561198177128005' ]\n}",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.221Z",
  },
  {
    message:
      "lobby run STATE_BOT_STARTED lobbyState {\n  _id: 608d6fe84f12dc10f43f6ced,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_BOT_STARTED',\n  password: 'white-dodo-94',\n  createdOn: 2021-05-01T15:12:40.778Z,\n  updatedOn: 2021-05-01T15:12:40.779Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  botId: '608e56a27ee0d03a108c98b6',\n  dotaLobbyId: '27176300557169186'\n} players [ '76561199165399234', '76561198177128005' ] ",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.236Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.238Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.238Z",
  },
  {
    message: "DotaBot inviteToLobby 76561199165399234",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.239Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.245Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.254Z",
  },
  {
    message: "DotaBot inviteToLobby 76561198177128005",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.255Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.267Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'white-dodo-94',\n  createdOn: 2021-05-01T15:12:40.778Z,\n  updatedOn: 2021-05-01T15:12:40.779Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  botId: 608e56a27ee0d03a108c98b6,\n  dotaLobbyId: '27176300557169186'\n}",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.318Z",
  },
  {
    message:
      "runLobby 608d6fe84f12dc10f43f6ced STATE_BOT_STARTED to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.319Z",
  },
  {
    message:
      "LobbyManager getBot 608e56a27ee0d03a108c98b6 bot DotaBot {\n  _events: [Object: null prototype] {\n    EVENT_LOBBY_READY: [Function (anonymous)],\n    EVENT_BOT_LOBBY_LEFT: [Function (anonymous)],\n    EVENT_MATCH_SIGNEDOUT: [Function (anonymous)],\n    EVENT_MATCH_OUTCOME: [Function (anonymous)]\n  },\n  _eventsCount: 4,\n  _maxListeners: undefined,\n  _connectionState: 'DOTA_CONNECTED',\n  _connectionAttempts: 1,\n  _connecting: false,\n  _lobbyOptions: {\n    game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n    server_region: 5,\n    game_mode: 21,\n    series_type: 1,\n    game_version: 1,\n    allow_cheats: false,\n    fill_with_bots: false,\n    allow_spectating: true,\n    pass_key: 'white-dodo-94',\n    radiant_series_wins: 0,\n    dire_series_wins: 0,\n    allchat: true,\n    visibility: 0,\n    cm_pick: 0\n  },\n  _teamCache: [ '76561199165399234', '76561198177128005' ],\n  _queue: Queue {\n    _backoff: 10000,\n    _rateLimit: 1,\n    _debug: true,\n    _retries: 0,\n    _state: 'idle',\n    _queue: []\n  },\n  config: {\n    _id: 608e56a27ee0d03a108c98b6,\n    status: 'BOT_OFFLINE',\n    lobbyCount: 1,\n    steamId64: '76561199139099147',\n    accountName: 'dynastyesports',\n    personaName: 'my*****Name',\n    password: 'St3@mAccountToBu!dlovelyAPI69',\n    created_at: 2021-05-02T07:37:06.673Z,\n    updated_at: 2021-05-02T07:37:06.775Z,\n    __v: 0,\n    steam_guard_code: '3DW4R',\n    two_factor_code: undefined\n  },\n  steamClient: SteamClient {\n    _events: [Object: null prototype] {\n      message: [Array],\n      logOnResponse: [Array],\n      loggedOff: [Function (anonymous)],\n      error: [AsyncFunction (anonymous)],\n      servers: [Function (anonymous)]\n    },\n    _eventsCount: 5,\n    _maxListeners: undefined,\n    _jobs: {},\n    _currentJobID: 0,\n    sessionID: -1988409767,\n    _connection: Connection {\n      connecting: false,\n      _hadError: false,\n      _parent: null,\n      _host: null,\n      _readableState: [ReadableState],\n      _events: [Object: null prototype],\n      _eventsCount: 7,\n      _maxListeners: undefined,\n      _writableState: [WritableState],\n      allowHalfOpen: false,\n      _sockname: null,\n      _pendingData: null,\n      _pendingEncoding: '',\n      server: null,\n      _server: null,\n      timeout: 0,\n      sessionKey: <Buffer a0 ea c7 95 95 ce 4b fe 1e d2 75 af 3b 77 d8 5d 35 59 4b ae 05 11 69 90 e0 95 a8 c7 a1 9e 48 a8>,\n      [Symbol(async_id_symbol)]: 767,\n      [Symbol(kHandle)]: [TCP],\n      [Symbol(kSetNoDelay)]: false,\n      [Symbol(lastWriteQueueSize)]: 0,\n      [Symbol(timeout)]: Timeout {\n        _idleTimeout: -1,\n        _idlePrev: null,\n        _idleNext: null,\n        _idleStart: 137181,\n        _onTimeout: null,\n        _timerArgs: undefined,\n        _repeat: null,\n        _destroyed: true,\n        [Symbol(refed)]: false,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 766,\n        [Symbol(triggerId)]: 746\n      },\n      [Symbol(kBuffer)]: null,\n      [Symbol(kBufferCb)]: null,\n      [Symbol(kBufferGen)]: null,\n      [Symbol(kCapture)]: false,\n      [Symbol(kBytesRead)]: 0,\n      [Symbol(kBytesWritten)]: 0\n    },\n    _tempSessionKey: <Buffer a0 ea c7 95 95 ce 4b fe 1e d2 75 af 3b 77 d8 5d 35 59 4b ae 05 11 69 90 e0 95 a8 c7 a1 9e 48 a8>,\n    connected: true,\n    steamID: '76561199139099147',\n    _heartBeatFunc: Timeout {\n      _idleTimeout: 9000,\n      _idlePrev: [TimersList],\n      _idleNext: [TimersList],\n      _idleStart: 138387,\n      _onTimeout: [Function: bound ],\n      _timerArgs: undefined,\n      _repeat: 9000,\n      _destroyed: false,\n      [Symbol(refed)]: true,\n      [Symbol(kHasPrimitive)]: false,\n      [Symbol(asyncId)]: 805,\n      [Symbol(triggerId)]: 796\n    },\n    loggedOn: true,\n    [Symbol(kCapture)]: false\n  },\n  steamUser: SteamUser {\n    _client: SteamClient {\n      _events: [Object: null prototype],\n      _eventsCount: 5,\n      _maxListeners: undefined,\n      _jobs: {},\n      _currentJobID: 0,\n      sessionID: -1988409767,\n      _connection: [Connection],\n      _tempSessionKey: <Buffer a0 ea c7 95 95 ce 4b fe 1e d2 75 af 3b 77 d8 5d 35 59 4b ae 05 11 69 90 e0 95 a8 c7 a1 9e 48 a8>,\n      connected: true,\n      steamID: '76561199139099147',\n      _heartBeatFunc: Timeout {\n        _idleTimeout: 9000,\n        _idlePrev: [TimersList],\n        _idleNext: [TimersList],\n        _idleStart: 138387,\n        _onTimeout: [Function: bound ],\n        _timerArgs: undefined,\n        _repeat: 9000,\n        _destroyed: false,\n        [Symbol(refed)]: true,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 805,\n        [Symbol(triggerId)]: 796\n      },\n      loggedOn: true,\n      [Symbol(kCapture)]: false\n    },\n    _events: [Object: null prototype] {\n      updateMachineAuth: [Function (anonymous)]\n    },\n    _eventsCount: 1\n  },\n  steamFriends: SteamFriends {\n    _client: SteamClient {\n      _events: [Object: null prototype],\n      _eventsCount: 5,\n      _maxListeners: undefined,\n      _jobs: {},\n      _currentJobID: 0,\n      sessionID: -1988409767,\n      _connection: [Connection],\n      _tempSessionKey: <Buffer a0 ea c7 95 95 ce 4b fe 1e d2 75 af 3b 77 d8 5d 35 59 4b ae 05 11 69 90 e0 95 a8 c7 a1 9e 48 a8>,\n      connected: true,\n      steamID: '76561199139099147',\n      _heartBeatFunc: Timeout {\n        _idleTimeout: 9000,\n        _idlePrev: [TimersList],\n        _idleNext: [TimersList],\n        _idleStart: 138387,\n        _onTimeout: [Function: bound ],\n        _timerArgs: undefined,\n        _repeat: 9000,\n        _destroyed: false,\n        [Symbol(refed)]: true,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 805,\n        [Symbol(triggerId)]: 796\n      },\n      loggedOn: true,\n      [Symbol(kCapture)]: false\n    },\n    personaStates: { '76561199139099147': [Object] },\n    clanStates: {},\n    chatRooms: {},\n    friends: {},\n    groups: {},\n    _personaState: 1\n  },\n  Dota2: Dota2Client {\n    _events: [Object: null prototype] {\n      ready: [Function (anonymous)],\n      unready: [Function (anonymous)],\n      unhandled: [Function (anonymous)],\n      practiceLobbyUpdate: [Function (anonymous)],\n      practiceLobbyCleared: [Function (anonymous)],\n      matchSignedOut: [Function (anonymous)],\n      practiceLobbyResponse: [Function (anonymous)],\n      chatMessage: [Function (anonymous)],\n      inviteCreated: [Array]\n    },\n    _eventsCount: 9,\n    _maxListeners: undefined,\n    debug: true,\n    debugMore: true,\n    Logger: DerivedLogger {\n      _readableState: [ReadableState],\n      readable: true,\n      _events: [Object: null prototype],\n      _eventsCount: 3,\n      _maxListeners: undefined,\n      _writableState: [WritableState],\n      writable: true,\n      allowHalfOpen: true,\n      _transformState: [Object],\n      silent: undefined,\n      format: [Format],\n      defaultMeta: null,\n      levels: [Object],\n      level: 'silly',\n      exceptions: [ExceptionHandler],\n      rejections: [RejectionHandler],\n      profilers: {},\n      exitOnError: true,\n      [Symbol(kCapture)]: false\n    },\n    Inventory: [ [CSOEconItem], [CSOEconItem] ],\n    chatChannels: [],\n    Lobby: CSODOTALobby {\n      members: [],\n      left_members: [],\n      pending_invites: [],\n      team_details: [],\n      timed_reward_details: [],\n      broadcast_channel_info: [],\n      extra_messages: [],\n      previous_series_matches: [],\n      event_progression_enabled: [],\n      emergency_disabled_hero_ids: [],\n      mutations: [],\n      lobby_id: [Long],\n      game_mode: 21,\n      state: 0,\n      leader_id: [Long],\n      lobby_type: 1,\n      allow_cheats: false,\n      fill_with_bots: false,\n      intro_mode: false,\n      game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n      server_region: 5,\n      cm_pick: 0,\n      allow_spectating: true,\n      bot_difficulty_radiant: 0,\n      game_version: 1,\n      pass_key: 'white-dodo-94',\n      leagueid: 0,\n      penalty_level_radiant: 0,\n      penalty_level_dire: 0,\n      series_type: 1,\n      radiant_series_wins: 0,\n      dire_series_wins: 0,\n      allchat: true,\n      dota_tv_delay: 1,\n      lan: false,\n      visibility: 0,\n      previous_match_override: [Long],\n      pause_setting: 0,\n      bot_difficulty_dire: 0,\n      bot_radiant: [Long],\n      bot_dire: [Long],\n      selection_priority_rules: 0,\n      league_node_id: 0\n    },\n    LobbyInvite: null,\n    Party: null,\n    PartyInvite: null,\n    _user: SteamUser { _client: [SteamClient] },\n    _client: SteamClient {\n      _events: [Object: null prototype],\n      _eventsCount: 5,\n      _maxListeners: undefined,\n      _jobs: {},\n      _currentJobID: 0,\n      sessionID: -1988409767,\n      _connection: [Connection],\n      _tempSessionKey: <Buffer a0 ea c7 95 95 ce 4b fe 1e d2 75 af 3b 77 d8 5d 35 59 4b ae 05 11 69 90 e0 95 a8 c7 a1 9e 48 a8>,\n      connected: true,\n      steamID: '76561199139099147',\n      _heartBeatFunc: Timeout {\n        _idleTimeout: 9000,\n        _idlePrev: [TimersList],\n        _idleNext: [TimersList],\n        _idleStart: 138387,\n        _onTimeout: [Function: bound ],\n        _timerArgs: undefined,\n        _repeat: 9000,\n        _destroyed: false,\n        [Symbol(refed)]: true,\n        [Symbol(kHasPrimitive)]: false,\n        [Symbol(asyncId)]: 805,\n        [Symbol(triggerId)]: 796\n      },\n      loggedOn: true,\n      [Symbol(kCapture)]: false\n    },\n    _gc: SteamGameCoordinator {\n      _client: [SteamClient],\n      _appid: 570,\n      _jobs: [Object],\n      _currentJobID: 2,\n      _events: [Object: null prototype],\n      _eventsCount: 1\n    },\n    _appid: 570,\n    _gcReady: true,\n    _gcClientHelloIntervalId: null,\n    _gcConnectionStatus: 3,\n    _protoBufHeader: { msg: 4512, proto: [Object] },\n    _sendClientHello: [Function (anonymous)],\n    AccountID: 1178833419,\n    _gcClientHelloCount: 1,\n    [Symbol(kCapture)]: false\n  },\n  logOnDetails: {\n    account_name: 'dynastyesports',\n    password: 'St3@mAccountToBu!dlovelyAPI69',\n    auth_code: '3DW4R',\n    sha_sentryfile: <Buffer 0d f9 ab fb 57 ec fe c8 52 e4 6c 9f d6 ca 0c 54 f0 91 94 6a>,\n    protocol_version: 65575\n  },\n  [Symbol(kCapture)]: false\n}",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.416Z",
  },
  {
    message: "membersToPlayerState playerState {}",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.417Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561199165399234', '76561198177128005' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.418Z",
  },
  {
    message:
      "runLobby 608d6fe84f12dc10f43f6ced STATE_WAITING_FOR_PLAYERS to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-02T07:37:12.418Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-02T07:43:32.901Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1929055710, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1929055710, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  this.teamCache [ '76561199165399234', '76561198177128005' ] ",
    level: "debug",
    timestamp: "2021-05-02T07:43:32.936Z",
  },
  {
    message:
      "dotabot processMembers oldMembers [] newMembers[] members { left: [], joined: [], changedSlot: [] } ",
    level: "debug",
    timestamp: "2021-05-02T07:43:32.937Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1929055710, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} newLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1929055710, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-02T07:43:33.096Z",
  },
  {
    message: "membersToPlayerState playerState {}",
    level: "debug",
    timestamp: "2021-05-02T07:43:33.096Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561199165399234', '76561198177128005' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-02T07:43:33.097Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176300557169186   --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'white-dodo-94',\n  createdOn: 2021-05-01T15:12:40.778Z,\n  updatedOn: 2021-05-01T15:12:40.779Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  botId: 608e56a27ee0d03a108c98b6,\n  dotaLobbyId: '27176300557169186'\n}",
    level: "debug",
    timestamp: "2021-05-02T07:43:33.158Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-02T07:46:58.246Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1929055710, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1929055710, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  this.teamCache [ '76561199165399234', '76561198177128005' ] ",
    level: "debug",
    timestamp: "2021-05-02T07:46:58.280Z",
  },
  {
    message:
      "dotabot processMembers oldMembers [] newMembers[] members { left: [], joined: [], changedSlot: [] } ",
    level: "debug",
    timestamp: "2021-05-02T07:46:58.283Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1929055710, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} newLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1929055710, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-02T07:46:58.413Z",
  },
  {
    message: "membersToPlayerState playerState {}",
    level: "debug",
    timestamp: "2021-05-02T07:46:58.436Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561199165399234', '76561198177128005' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-02T07:46:58.527Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176300557169186   --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'white-dodo-94',\n  createdOn: 2021-05-01T15:12:40.778Z,\n  updatedOn: 2021-05-01T15:12:40.779Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  botId: 608e56a27ee0d03a108c98b6,\n  dotaLobbyId: '27176300557169186'\n}",
    level: "debug",
    timestamp: "2021-05-02T07:46:58.767Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-02T08:09:33.716Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1929055710, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  lobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1929055710, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n}  this.teamCache [ '76561199165399234', '76561198177128005' ] ",
    level: "debug",
    timestamp: "2021-05-02T08:09:33.942Z",
  },
  {
    message:
      "dotabot processMembers oldMembers [] newMembers[] members { left: [], joined: [], changedSlot: [] } ",
    level: "debug",
    timestamp: "2021-05-02T08:09:33.956Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1929055710, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} newLobby CSODOTALobby {\n  members: [],\n  left_members: [],\n  pending_invites: [ Long { low: 1205133506, high: 17825793, unsigned: true } ],\n  team_details: [],\n  timed_reward_details: [],\n  broadcast_channel_info: [],\n  extra_messages: [],\n  previous_series_matches: [],\n  event_progression_enabled: [],\n  emergency_disabled_hero_ids: [],\n  mutations: [],\n  lobby_id: Long { low: -1929055710, high: 6327475, unsigned: true },\n  game_mode: 21,\n  state: 0,\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  server_region: 5,\n  cm_pick: 0,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  pass_key: 'white-dodo-94',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  dota_tv_delay: 1,\n  lan: false,\n  visibility: 0,\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  pause_setting: 0,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  selection_priority_rules: 0,\n  league_node_id: 0\n} members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-02T08:09:34.176Z",
  },
  {
    message: "membersToPlayerState playerState {}",
    level: "debug",
    timestamp: "2021-05-02T08:09:34.184Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561199165399234', '76561198177128005' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-02T08:09:34.198Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176300557169186   --> {\n  _id: 608d6fe84f12dc10f43f6ced,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'white-dodo-94',\n  createdOn: 2021-05-01T15:12:40.778Z,\n  updatedOn: 2021-05-01T15:12:40.779Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608d6fe84f12dc10f43f6ced',\n  botId: 608e56a27ee0d03a108c98b6,\n  dotaLobbyId: '27176300557169186'\n}",
    level: "debug",
    timestamp: "2021-05-02T08:09:34.308Z",
  },
];
