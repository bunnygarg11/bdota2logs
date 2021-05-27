let b = [
  ,
  {
    level: "error",
    message:
      "ReferenceError: leagueid is not defined - trace: at Object.<anonymous> (D:\\mohit\\blocks\\bexpressserver\\boldbtest11\\server\\services\\dotaBot\\dotabotadmin.js:15:5)\n    at Module._compile (internal/modules/cjs/loader.js:1063:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)\n    at Module.load (internal/modules/cjs/loader.js:928:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:769:14)\n    at Module.require (internal/modules/cjs/loader.js:952:19)\n    at require (internal/modules/cjs/helpers.js:88:18)\n    at D:\\mohit\\blocks\\bexpressserver\\boldbtest11\\server\\services\\dotaBot\\index.js:12:9\n    at Object.<anonymous> (D:\\mohit\\blocks\\bexpressserver\\boldbtest11\\server\\services\\dotaBot\\index.js:15:3)\n    at Module._compile (internal/modules/cjs/loader.js:1063:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)\n    at Module.load (internal/modules/cjs/loader.js:928:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:769:14)\n    at Module.require (internal/modules/cjs/loader.js:952:19)\n    at require (internal/modules/cjs/helpers.js:88:18)\n    at Object.<anonymous> (D:\\mohit\\blocks\\bexpressserver\\boldbtest11\\server\\api\\createLobby\\controllers\\createLobby.js:1:12)\n    at Module._compile (internal/modules/cjs/loader.js:1063:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)\n    at Module.load (internal/modules/cjs/loader.js:928:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:769:14)\n    at Module.require (internal/modules/cjs/loader.js:952:19)\n    at require (internal/modules/cjs/helpers.js:88:18)",
    timestamp: "2021-05-27T12:57:49.888Z",
  },
  {
    message:
      "DB setAllBotsOffline  --> {\n  n: 0,\n  nModified: 0,\n  opTime: {\n    ts: Timestamp { _bsontype: 'Timestamp', low_: 9, high_: 1622120348 },\n    t: 18\n  },\n  electionId: 7fffffff0000000000000012,\n  ok: 1,\n  '$clusterTime': {\n    clusterTime: Timestamp { _bsontype: 'Timestamp', low_: 9, high_: 1622120348 },\n    signature: { hash: [Binary], keyId: [Long] }\n  },\n  operationTime: Timestamp { _bsontype: 'Timestamp', low_: 9, high_: 1622120348 }\n}",
    level: "debug",
    timestamp: "2021-05-27T12:59:08.752Z",
  },
  {
    message:
      "DB findActiveLobbiesForUser userId 76561198177128005,76561198003549651  --> []",
    level: "debug",
    timestamp: "2021-05-27T13:07:01.674Z",
  },
  {
    message:
      "DB getDefaults   --> {\n  _id: 60af979c8a87830624a07912,\n  lobbyNameTemplate: 'Inhouse Lobby ${lobbyId}',\n  readyCheckTimeout: 240000,\n  defaultGameMode: 'DOTA_GAMEMODE_1V1MID',\n  PlayersLength: 2,\n  leagueid: '3401',\n  createdOn: 2021-05-27T12:59:08.729Z,\n  updatedOn: 2021-05-27T12:59:08.729Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-27T13:07:02.071Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 60af99758a87830624a07913,\n  readyCheckTimeout: 240000,\n  prevstate: [],\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  setMatchPlayerDetails: false,\n  players: [ '76561198177128005', '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'sour-bobcat-21',\n  createdOn: 2021-05-27T13:07:01.679Z,\n  updatedOn: 2021-05-27T13:07:01.679Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60af99758a87830624a07913'\n}",
    level: "debug",
    timestamp: "2021-05-27T13:07:02.260Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 60af99758a87830624a07913,\n  readyCheckTimeout: 240000,\n  prevstate: [],\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  setMatchPlayerDetails: false,\n  players: [ '76561198177128005', '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'sour-bobcat-21',\n  createdOn: 2021-05-27T13:07:01.679Z,\n  updatedOn: 2021-05-27T13:07:01.679Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60af99758a87830624a07913'\n}",
    level: "debug",
    timestamp: "2021-05-27T13:07:02.436Z",
  },
  {
    message: "DB findassignedBot   --> []",
    level: "debug",
    timestamp: "2021-05-27T13:07:02.605Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-27T13:07:02.608Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-27T13:07:02.612Z",
  },
  {
    message:
      "LobbyManager runLobby 60af99758a87830624a07913 STATE_WAITING_FOR_BOT STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-27T13:07:02.613Z",
  },
  {
    message:
      "DB findLobbyById _id 60af99758a87830624a07913   --> {\n  _id: 60af99758a87830624a07913,\n  readyCheckTimeout: 240000,\n  prevstate: [],\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  setMatchPlayerDetails: false,\n  players: [ '76561198177128005', '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'sour-bobcat-21',\n  createdOn: 2021-05-27T13:07:01.679Z,\n  updatedOn: 2021-05-27T13:07:01.679Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60af99758a87830624a07913'\n}",
    level: "debug",
    timestamp: "2021-05-27T13:07:02.786Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-27T13:07:02.787Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 60af99758a87830624a07913,\n  players: [ '76561198177128005', '76561198003549651' ]\n}",
    level: "debug",
    timestamp: "2021-05-27T13:07:02.953Z",
  },
  {
    message:
      "validateLobbyPlayers 60af99758a87830624a07913 end STATE_WAITING_FOR_BOT to STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-27T13:07:02.958Z",
  },
  {
    message: "STATE_WAITING_FOR_BOT 60af99758a87830624a07913 undefined",
    level: "debug",
    timestamp: "2021-05-27T13:07:02.961Z",
  },
  {
    message:
      "DB findUnassignedBot   --> {\n  _id: 60ad401e9af9070008dc86d8,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-25T18:21:18.634Z,\n  updated_at: 2021-05-27T11:32:58.395Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-27T13:07:03.127Z",
  },
  {
    message: "lobby run findUnassignedBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-27T13:07:03.128Z",
  },
  {
    message:
      "DB assignBotToLobby lobby [object Object] botId 60ad401e9af9070008dc86d8  --> {\n  _id: 60ad401e9af9070008dc86d8,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 2,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-25T18:21:18.634Z,\n  updated_at: 2021-05-27T13:07:03.290Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-27T13:07:03.462Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 60af99758a87830624a07913,\n  readyCheckTimeout: 240000,\n  prevstate: [],\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  setMatchPlayerDetails: false,\n  players: [ '76561198177128005', '76561198003549651' ],\n  state: 'STATE_BOT_ASSIGNED',\n  password: 'sour-bobcat-21',\n  createdOn: 2021-05-27T13:07:01.679Z,\n  updatedOn: 2021-05-27T13:07:01.679Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60af99758a87830624a07913',\n  botId: 60ad401e9af9070008dc86d8\n}",
    level: "debug",
    timestamp: "2021-05-27T13:07:03.641Z",
  },
  {
    message:
      "runLobby 60af99758a87830624a07913 STATE_WAITING_FOR_BOT to STATE_BOT_ASSIGNED",
    level: "debug",
    timestamp: "2021-05-27T13:07:03.642Z",
  },
  {
    message: "LobbyManager loadBotById 60ad401e9af9070008dc86d8",
    level: "debug",
    timestamp: "2021-05-27T13:07:03.643Z",
  },
  {
    message:
      "DB findBot  _id 60ad401e9af9070008dc86d8  --> {\n  _id: 60ad401e9af9070008dc86d8,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 2,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-25T18:21:18.634Z,\n  updated_at: 2021-05-27T13:07:03.290Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-27T13:07:03.810Z",
  },
  {
    message: "LobbyManager loadBot 60ad401e9af9070008dc86d8",
    level: "debug",
    timestamp: "2021-05-27T13:07:03.812Z",
  },
  {
    message: "LobbyManager getBot 60ad401e9af9070008dc86d8 ",
    level: "debug",
    timestamp: "2021-05-27T13:07:03.813Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_LOADING _id 60ad401e9af9070008dc86d8  --> {\n  _id: 60ad401e9af9070008dc86d8,\n  status: 'BOT_LOADING',\n  lobbyCount: 2,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-25T18:21:18.634Z,\n  updated_at: 2021-05-27T13:07:03.814Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-27T13:07:03.987Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-27T13:07:03.993Z",
  },
  {
    message: "DotaBot connectDotaBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-27T13:07:03.994Z",
  },
  {
    message: "DotaBot connecting...",
    level: "debug",
    timestamp: "2021-05-27T13:07:03.995Z",
  },
  {
    message: "DotaBot logOnToSteam logging on steamUser...",
    level: "debug",
    timestamp: "2021-05-27T13:07:05.305Z",
  },
  {
    message: "DotaBot Received servers.",
    level: "debug",
    timestamp: "2021-05-27T13:07:10.549Z",
  },
  {
    message: "DotaBot set steam persona state and name.",
    level: "debug",
    timestamp: "2021-05-27T13:07:10.554Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-27T13:07:12.398Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-27T13:07:12.406Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-27T13:07:12.415Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-27T13:07:12.618Z",
  },
  {
    message: "Activating queue",
    level: "debug",
    timestamp: "2021-05-27T13:07:12.620Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-27T13:07:12.624Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-27T13:07:12.627Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 8678",
    level: "debug",
    timestamp: "2021-05-27T13:07:12.712Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_ONLINE steamId64 76561199139099147  --> {\n  _id: 60ad401e9af9070008dc86d8,\n  status: 'BOT_ONLINE',\n  lobbyCount: 2,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-25T18:21:18.634Z,\n  updated_at: 2021-05-27T13:07:12.630Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-27T13:07:12.805Z",
  },
  {
    message: "lobbyManager loadBot loaded",
    level: "debug",
    timestamp: "2021-05-27T13:07:12.807Z",
  },
  {
    message: "lobbyManager loadBot done",
    level: "debug",
    timestamp: "2021-05-27T13:07:12.808Z",
  },
  {
    message:
      "DotaBot createDotaBotLobby inhouse-lobby-60af99758a87830624a07913 sour-bobcat-21  DOTA_GAMEMODE_1V1MID 21  76561199139099147",
    level: "debug",
    timestamp: "2021-05-27T13:07:12.811Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-27T13:07:12.818Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-27T13:07:12.819Z",
  },
  {
    message:
      "DotaBot createPracticeLobby {\n  game_name: 'inhouse-lobby-60af99758a87830624a07913',\n  server_region: 5,\n  game_mode: 21,\n  series_type: 1,\n  game_version: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  allow_spectating: true,\n  pass_key: 'sour-bobcat-21',\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  visibility: 0,\n  cm_pick: 0,\n  leagueid: 13130\n}",
    level: "debug",
    timestamp: "2021-05-27T13:07:12.837Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-27T13:07:12.856Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-27T13:07:13.503Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  null  lobby--> {\n  lobby_id: Long { low: -1747899596, high: 6336191, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60af99758a87830624a07913',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'sour-bobcat-21',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [] ",
    level: "debug",
    timestamp: "2021-05-27T13:07:13.571Z",
  },
  {
    message:
      "DotaBot practiceLobbyResponse { eresult: 1, debug_message: null }",
    level: "debug",
    timestamp: "2021-05-27T13:07:13.577Z",
  },
  {
    message: "DotaBot createDotaBotLobby practice lobby created",
    level: "debug",
    timestamp: "2021-05-27T13:07:13.590Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27213735673277236   --> null",
    level: "debug",
    timestamp: "2021-05-27T13:07:13.743Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.dotaLobbyId 27213735673277236 not found. Bot 60ad401e9af9070008dc86d8 leaving lobby...",
    level: "debug",
    timestamp: "2021-05-27T13:07:13.747Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_IN_LOBBY steamId64 76561199139099147  --> {\n  _id: 60ad401e9af9070008dc86d8,\n  status: 'BOT_IN_LOBBY',\n  lobbyCount: 2,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-25T18:21:18.634Z,\n  updated_at: 2021-05-27T13:07:13.591Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-27T13:07:13.763Z",
  },
  {
    message: "DotaBot createDotaBotLobby bot status updated",
    level: "debug",
    timestamp: "2021-05-27T13:07:13.766Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-27T13:07:13.768Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-27T13:07:13.769Z",
  },
  {
    message: "DotaBot practiceLobbyKickFromTeam 1178833419",
    level: "debug",
    timestamp: "2021-05-27T13:07:13.770Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-27T13:07:13.775Z",
  },
  {
    message:
      "DotaBot practiceLobbyResponse { eresult: 1, debug_message: null }",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.343Z",
  },
  {
    message:
      "DotaBot practiceLobbyKickFromTeam response undefined .CMsgGenericResult",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.346Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.349Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.350Z",
  },
  {
    message: "DotaBot joinChat Lobby_27213735673277236",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.351Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.358Z",
  },
  {
    message: "enterLobbyP dotaLobbyId: 27213735673277236",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.359Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 60af99758a87830624a07913,\n  readyCheckTimeout: 240000,\n  prevstate: [],\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  setMatchPlayerDetails: false,\n  players: [ '76561198177128005', '76561198003549651' ],\n  state: 'STATE_BOT_STARTED',\n  password: 'sour-bobcat-21',\n  createdOn: 2021-05-27T13:07:01.679Z,\n  updatedOn: 2021-05-27T13:07:01.679Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60af99758a87830624a07913',\n  botId: 60ad401e9af9070008dc86d8,\n  dotaLobbyId: '27213735673277236'\n}",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.534Z",
  },
  {
    message: "updateLobby done. 60af99758a87830624a07913 STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.535Z",
  },
  {
    message:
      "STATE_BOT_ASSIGNED to STATE_BOT_STARTED 60af99758a87830624a07913 STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.536Z",
  },
  {
    message:
      "runLobby 60af99758a87830624a07913 STATE_BOT_ASSIGNED to STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.537Z",
  },
  {
    message: "LobbyManager getBot 60ad401e9af9070008dc86d8 ",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.538Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 60af99758a87830624a07913,\n  players: [ '76561198177128005', '76561198003549651' ]\n}",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.697Z",
  },
  {
    message:
      "lobby run STATE_BOT_STARTED lobbyState {\n  _id: 60af99758a87830624a07913,\n  readyCheckTimeout: 240000,\n  prevstate: [],\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  setMatchPlayerDetails: false,\n  players: [ '76561198177128005', '76561198003549651' ],\n  state: 'STATE_BOT_STARTED',\n  password: 'sour-bobcat-21',\n  createdOn: 2021-05-27T13:07:01.679Z,\n  updatedOn: 2021-05-27T13:07:01.679Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60af99758a87830624a07913',\n  botId: '60ad401e9af9070008dc86d8',\n  dotaLobbyId: '27213735673277236'\n} players [ '76561198177128005', '76561198003549651' ] ",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.702Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.704Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.718Z",
  },
  {
    message: "DotaBot inviteToLobby 76561198177128005",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.719Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.724Z",
  },
  {
    message: "LobbyManager unregisterLobbyTimeout 60af99758a87830624a07913",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.726Z",
  },
  {
    message:
      "LobbyManager registerLobbyTimeout 60af99758a87830624a07913 Thu May 27 2021 18:37:14 GMT+0530 (India Standard Time) 240000. timeout 239999ms",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.740Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.744Z",
  },
  {
    message: "DotaBot inviteToLobby 76561198003549651",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.746Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.764Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 60af99758a87830624a07913,\n  readyCheckTimeout: 240000,\n  prevstate: [],\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  setMatchPlayerDetails: false,\n  players: [ '76561198177128005', '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'sour-bobcat-21',\n  createdOn: 2021-05-27T13:07:01.679Z,\n  updatedOn: 2021-05-27T13:07:01.679Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60af99758a87830624a07913',\n  botId: 60ad401e9af9070008dc86d8,\n  dotaLobbyId: '27213735673277236',\n  readyCheckTime: 2021-05-27T13:07:14.725Z\n}",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.917Z",
  },
  {
    message:
      "runLobby 60af99758a87830624a07913 STATE_BOT_STARTED to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.918Z",
  },
  {
    message: "LobbyManager getBot 60ad401e9af9070008dc86d8 ",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.920Z",
  },
  {
    message:
      "membersToPlayerState playerState {} members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.934Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005', '76561198003549651' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.936Z",
  },
  {
    message:
      "runLobby 60af99758a87830624a07913 STATE_WAITING_FOR_PLAYERS to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-27T13:07:14.937Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-27T13:07:23.296Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: -1747899596, high: 6336191, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60af99758a87830624a07913',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'sour-bobcat-21',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: -1747899596, high: 6336191, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'dEkU',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [ Long { low: 43283923, high: 17825793, unsigned: true } ],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60af99758a87830624a07913',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'sour-bobcat-21',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198177128005', '76561198003549651' ] ",
    level: "debug",
    timestamp: "2021-05-27T13:07:23.479Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-27T13:07:23.480Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites 76561198003549651 newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'dEkU',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] members {\n  left: [],\n  joined: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'dEkU',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  changedSlot: []\n}",
    level: "debug",
    timestamp: "2021-05-27T13:07:23.646Z",
  },
  {
    message: "DotaBot processLobbyUpdate member joined 76561198177128005 ",
    level: "debug",
    timestamp: "2021-05-27T13:07:23.647Z",
  },
  {
    message:
      "membersToPlayerState playerState {} members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'dEkU',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-27T13:07:23.665Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005', '76561198003549651' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-27T13:07:23.666Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27213735673277236   --> {\n  _id: 60af99758a87830624a07913,\n  readyCheckTimeout: 240000,\n  prevstate: [],\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  setMatchPlayerDetails: false,\n  players: [ '76561198177128005', '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'sour-bobcat-21',\n  createdOn: 2021-05-27T13:07:01.679Z,\n  updatedOn: 2021-05-27T13:07:01.679Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60af99758a87830624a07913',\n  botId: 60ad401e9af9070008dc86d8,\n  dotaLobbyId: '27213735673277236',\n  readyCheckTime: 2021-05-27T13:07:14.725Z\n}",
    level: "debug",
    timestamp: "2021-05-27T13:07:23.830Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-27T13:07:29.745Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: -1747899596, high: 6336191, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'dEkU',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [ Long { low: 43283923, high: 17825793, unsigned: true } ],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60af99758a87830624a07913',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'sour-bobcat-21',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: -1747899596, high: 6336191, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'dEkU',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [ Long { low: 43283923, high: 17825793, unsigned: true } ],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60af99758a87830624a07913',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'sour-bobcat-21',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198177128005', '76561198003549651' ] ",
    level: "debug",
    timestamp: "2021-05-27T13:07:29.852Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-27T13:07:29.853Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'dEkU',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites 76561198003549651 newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-27T13:07:30.093Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198177128005': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-27T13:07:30.111Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005', '76561198003549651' ] playerState { '76561198177128005': 1 } ",
    level: "debug",
    timestamp: "2021-05-27T13:07:30.112Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27213735673277236   --> {\n  _id: 60af99758a87830624a07913,\n  readyCheckTimeout: 240000,\n  prevstate: [],\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  setMatchPlayerDetails: false,\n  players: [ '76561198177128005', '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'sour-bobcat-21',\n  createdOn: 2021-05-27T13:07:01.679Z,\n  updatedOn: 2021-05-27T13:07:01.679Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60af99758a87830624a07913',\n  botId: 60ad401e9af9070008dc86d8,\n  dotaLobbyId: '27213735673277236',\n  readyCheckTime: 2021-05-27T13:07:14.725Z\n}",
    level: "debug",
    timestamp: "2021-05-27T13:07:30.275Z",
  },
  {
    message:
      "LobbyManager registerLobbyTimeout 60af99758a87830624a07913 timed out",
    level: "debug",
    timestamp: "2021-05-27T13:11:14.747Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyTimedOut [object Object]",
    level: "debug",
    timestamp: "2021-05-27T13:11:14.748Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyTimedOut 0",
    level: "debug",
    timestamp: "2021-05-27T13:11:14.748Z",
  },
  {
    message: "LobbyManager onLobbyTimedOut 60af99758a87830624a07913",
    level: "debug",
    timestamp: "2021-05-27T13:11:14.749Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-27T13:11:14.750Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-27T13:11:14.751Z",
  },
  {
    message:
      "LobbyManager runLobby 60af99758a87830624a07913 STATE_WAITING_FOR_PLAYERS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-27T13:11:14.752Z",
  },
  {
    message:
      "DB findLobbyById _id 60af99758a87830624a07913   --> {\n  _id: 60af99758a87830624a07913,\n  readyCheckTimeout: 240000,\n  prevstate: [],\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  setMatchPlayerDetails: false,\n  players: [ '76561198177128005', '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'sour-bobcat-21',\n  createdOn: 2021-05-27T13:07:01.679Z,\n  updatedOn: 2021-05-27T13:07:01.679Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60af99758a87830624a07913',\n  botId: 60ad401e9af9070008dc86d8,\n  dotaLobbyId: '27213735673277236',\n  readyCheckTime: 2021-05-27T13:07:14.725Z\n}",
    level: "debug",
    timestamp: "2021-05-27T13:11:14.912Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-27T13:11:14.913Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 60af99758a87830624a07913,\n  players: [ '76561198177128005', '76561198003549651' ]\n}",
    level: "debug",
    timestamp: "2021-05-27T13:11:15.070Z",
  },
  {
    message:
      "validateLobbyPlayers 60af99758a87830624a07913 end STATE_WAITING_FOR_PLAYERS to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-27T13:11:15.071Z",
  },
  {
    message: "LobbyManager getBot 60ad401e9af9070008dc86d8 ",
    level: "debug",
    timestamp: "2021-05-27T13:11:15.072Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198177128005': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-27T13:11:15.092Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005', '76561198003549651' ] playerState { '76561198177128005': 1 } ",
    level: "debug",
    timestamp: "2021-05-27T13:11:15.095Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198177128005': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-27T13:11:15.225Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 60af99758a87830624a07913,\n  readyCheckTimeout: 240000,\n  prevstate: [],\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  setMatchPlayerDetails: false,\n  players: [ '76561198177128005', '76561198003549651' ],\n  state: 'STATE_COMPLETED_NO_STATS',\n  password: 'sour-bobcat-21',\n  createdOn: 2021-05-27T13:07:01.679Z,\n  updatedOn: 2021-05-27T13:07:01.679Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60af99758a87830624a07913',\n  botId: 60ad401e9af9070008dc86d8,\n  dotaLobbyId: '27213735673277236',\n  readyCheckTime: null,\n  joinedPlayers: { '76561198177128005': 1 }\n}",
    level: "debug",
    timestamp: "2021-05-27T13:11:15.398Z",
  },
  {
    message:
      "LobbyManager botLeaveLobby 60af99758a87830624a07913 60ad401e9af9070008dc86d8",
    level: "debug",
    timestamp: "2021-05-27T13:11:15.399Z",
  },
  {
    message: "LobbyManager loadBotById 60ad401e9af9070008dc86d8",
    level: "debug",
    timestamp: "2021-05-27T13:11:15.400Z",
  },
  {
    message:
      "DB findBot  _id 60ad401e9af9070008dc86d8  --> {\n  _id: 60ad401e9af9070008dc86d8,\n  status: 'BOT_IN_LOBBY',\n  lobbyCount: 2,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-25T18:21:18.634Z,\n  updated_at: 2021-05-27T13:07:13.591Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-27T13:11:15.559Z",
  },
  {
    message: "LobbyManager loadBot 60ad401e9af9070008dc86d8",
    level: "debug",
    timestamp: "2021-05-27T13:11:15.560Z",
  },
  {
    message: "LobbyManager getBot 60ad401e9af9070008dc86d8 ",
    level: "debug",
    timestamp: "2021-05-27T13:11:15.560Z",
  },
  {
    message: "lobbyManager loadBot done",
    level: "debug",
    timestamp: "2021-05-27T13:11:15.561Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-27T13:11:15.562Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-27T13:11:15.563Z",
  },
  {
    message: "DotaBot leavePracticeLobby",
    level: "debug",
    timestamp: "2021-05-27T13:11:15.564Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-27T13:11:15.569Z",
  },
  {
    message: "dotaBot practiceLobbyCleared emitted",
    level: "debug",
    timestamp: "2021-05-27T13:11:16.046Z",
  },
  {
    message: "LobbyManager queueEvent onBotLobbyLeft 60ad401e9af9070008dc86d8",
    level: "debug",
    timestamp: "2021-05-27T13:11:16.047Z",
  },
  {
    message:
      "DotaBot practiceLobbyResponse { eresult: 1, debug_message: null }",
    level: "debug",
    timestamp: "2021-05-27T13:11:16.050Z",
  },
  {
    message: "DotaBot leavePracticeLobby response undefined .CMsgGenericResult",
    level: "debug",
    timestamp: "2021-05-27T13:11:16.051Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-27T13:11:16.052Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-27T13:11:16.054Z",
  },
  {
    message: "DotaBot abandonCurrentGame",
    level: "debug",
    timestamp: "2021-05-27T13:11:16.056Z",
  },
  {
    level: "error",
    message: "DotaBot leaveLobbyChat missing lobby",
    timestamp: "2021-05-27T13:11:16.061Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-27T13:11:16.062Z",
  },
  {
    message:
      "LobbyManager botLeaveLobby bot 60ad401e9af9070008dc86d8 left lobby 27213735673277236",
    level: "debug",
    timestamp: "2021-05-27T13:11:16.064Z",
  },
  {
    message:
      "DB unassignBotFromLobby lobby [object Object] botId 60ad401e9af9070008dc86d8  --> {\n  _id: 60ad401e9af9070008dc86d8,\n  status: 'BOT_IN_LOBBY',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-25T18:21:18.634Z,\n  updated_at: 2021-05-27T13:11:16.268Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-27T13:11:16.430Z",
  },
  {
    level: "error",
    message:
      "TypeError: Assignment to constant variable. - trace: at LobbyManager.STATE_WAITING_FOR_PLAYERS (D:\\mohit\\blocks\\bexpressserver\\boldbtest11\\server\\services\\dotaBot\\lobbyStateHandlers.js:395:20)\n    at runMicrotasks (<anonymous>)\n    at processTicksAndRejections (internal/process/task_queues.js:93:5)\n    at async LobbyManager.runLobby (D:\\mohit\\blocks\\bexpressserver\\boldbtest11\\server\\services\\dotaBot\\lobbyManager.js:173:24)\n    at async LobbyManager.processEventQueue (D:\\mohit\\blocks\\bexpressserver\\boldbtest11\\server\\services\\dotaBot\\lobbyManager.js:504:23)\n    at async LobbyManager.processEventQueue (D:\\mohit\\blocks\\bexpressserver\\boldbtest11\\server\\services\\dotaBot\\lobbyManager.js:512:9)",
    timestamp: "2021-05-27T13:11:16.435Z",
  },
  {
    message:
      "DB updateLobbyState  state STATE_FAILED --> {\n  _id: 60af99758a87830624a07913,\n  readyCheckTimeout: 240000,\n  prevstate: [],\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  setMatchPlayerDetails: false,\n  players: [ '76561198177128005', '76561198003549651' ],\n  state: 'STATE_FAILED',\n  password: 'sour-bobcat-21',\n  createdOn: 2021-05-27T13:07:01.679Z,\n  updatedOn: 2021-05-27T13:07:01.679Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60af99758a87830624a07913',\n  botId: null,\n  dotaLobbyId: null,\n  readyCheckTime: null,\n  joinedPlayers: { '76561198177128005': 1 }\n}",
    level: "debug",
    timestamp: "2021-05-27T13:11:16.608Z",
  },
  {
    message:
      "DB setAllBotsOffline  --> {\n  n: 1,\n  nModified: 1,\n  opTime: {\n    ts: Timestamp { _bsontype: 'Timestamp', low_: 3, high_: 1622121847 },\n    t: 18\n  },\n  electionId: 7fffffff0000000000000012,\n  ok: 1,\n  '$clusterTime': {\n    clusterTime: Timestamp { _bsontype: 'Timestamp', low_: 3, high_: 1622121847 },\n    signature: { hash: [Binary], keyId: [Long] }\n  },\n  operationTime: Timestamp { _bsontype: 'Timestamp', low_: 3, high_: 1622121847 }\n}",
    level: "debug",
    timestamp: "2021-05-27T13:24:07.781Z",
  },
];
