let b = [
  ,
  {
    message:
      "DB setAllBotsOffline  --> {\n  n: 0,\n  nModified: 0,\n  opTime: {\n    ts: Timestamp { _bsontype: 'Timestamp', low_: 2, high_: 1622122848 },\n    t: 18\n  },\n  electionId: 7fffffff0000000000000012,\n  ok: 1,\n  '$clusterTime': {\n    clusterTime: Timestamp { _bsontype: 'Timestamp', low_: 2, high_: 1622122848 },\n    signature: { hash: [Binary], keyId: [Long] }\n  },\n  operationTime: Timestamp { _bsontype: 'Timestamp', low_: 2, high_: 1622122848 }\n}",
    level: "debug",
    timestamp: "2021-05-27T13:40:49.231Z",
  },
  {
    message:
      "DB findActiveLobbiesForUser userId 76561198177128005,76561198003549651  --> []",
    level: "debug",
    timestamp: "2021-05-27T13:48:48.724Z",
  },
  {
    message:
      "DB getDefaults   --> {\n  _id: 60af979c8a87830624a07912,\n  lobbyNameTemplate: 'Inhouse Lobby ${lobbyId}',\n  readyCheckTimeout: 240000,\n  defaultGameMode: 'DOTA_GAMEMODE_1V1MID',\n  PlayersLength: 2,\n  leagueid: '3401',\n  createdOn: 2021-05-27T12:59:08.729Z,\n  updatedOn: 2021-05-27T12:59:08.729Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-27T13:48:49.118Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 60afa3408189f3450840223c,\n  readyCheckTimeout: 240000,\n  prevstate: [],\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  setMatchPlayerDetails: false,\n  players: [ '76561198177128005', '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'itchy-mole-63',\n  createdOn: 2021-05-27T13:48:48.742Z,\n  updatedOn: 2021-05-27T13:48:48.742Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60afa3408189f3450840223c'\n}",
    level: "debug",
    timestamp: "2021-05-27T13:48:49.305Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 60afa3408189f3450840223c,\n  readyCheckTimeout: 240000,\n  prevstate: [],\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  setMatchPlayerDetails: false,\n  players: [ '76561198177128005', '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'itchy-mole-63',\n  createdOn: 2021-05-27T13:48:48.742Z,\n  updatedOn: 2021-05-27T13:48:48.742Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60afa3408189f3450840223c'\n}",
    level: "debug",
    timestamp: "2021-05-27T13:48:49.480Z",
  },
  {
    message: "DB findassignedBot   --> []",
    level: "debug",
    timestamp: "2021-05-27T13:48:49.647Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-27T13:48:49.652Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-27T13:48:49.657Z",
  },
  {
    message:
      "LobbyManager runLobby 60afa3408189f3450840223c STATE_WAITING_FOR_BOT STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-27T13:48:49.660Z",
  },
  {
    message:
      "DB findLobbyById _id 60afa3408189f3450840223c   --> {\n  _id: 60afa3408189f3450840223c,\n  readyCheckTimeout: 240000,\n  prevstate: [],\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  setMatchPlayerDetails: false,\n  players: [ '76561198177128005', '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'itchy-mole-63',\n  createdOn: 2021-05-27T13:48:48.742Z,\n  updatedOn: 2021-05-27T13:48:48.742Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60afa3408189f3450840223c'\n}",
    level: "debug",
    timestamp: "2021-05-27T13:48:49.835Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-27T13:48:49.836Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 60afa3408189f3450840223c,\n  players: [ '76561198177128005', '76561198003549651' ]\n}",
    level: "debug",
    timestamp: "2021-05-27T13:48:50.012Z",
  },
  {
    message:
      "validateLobbyPlayers 60afa3408189f3450840223c end STATE_WAITING_FOR_BOT to STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-27T13:48:50.015Z",
  },
  {
    message: "STATE_WAITING_FOR_BOT 60afa3408189f3450840223c undefined",
    level: "debug",
    timestamp: "2021-05-27T13:48:50.022Z",
  },
  {
    message:
      "DB findUnassignedBot   --> {\n  _id: 60ad401e9af9070008dc86d8,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-25T18:21:18.634Z,\n  updated_at: 2021-05-27T13:24:07.582Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-27T13:48:50.191Z",
  },
  {
    message: "lobby run findUnassignedBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-27T13:48:50.193Z",
  },
  {
    message:
      "DB assignBotToLobby lobby [object Object] botId 60ad401e9af9070008dc86d8  --> {\n  _id: 60ad401e9af9070008dc86d8,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 2,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-25T18:21:18.634Z,\n  updated_at: 2021-05-27T13:48:50.369Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-27T13:48:50.559Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 60afa3408189f3450840223c,\n  readyCheckTimeout: 240000,\n  prevstate: [],\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  setMatchPlayerDetails: false,\n  players: [ '76561198177128005', '76561198003549651' ],\n  state: 'STATE_BOT_ASSIGNED',\n  password: 'itchy-mole-63',\n  createdOn: 2021-05-27T13:48:48.742Z,\n  updatedOn: 2021-05-27T13:48:48.742Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60afa3408189f3450840223c',\n  botId: 60ad401e9af9070008dc86d8\n}",
    level: "debug",
    timestamp: "2021-05-27T13:48:50.759Z",
  },
  {
    message:
      "runLobby 60afa3408189f3450840223c STATE_WAITING_FOR_BOT to STATE_BOT_ASSIGNED",
    level: "debug",
    timestamp: "2021-05-27T13:48:50.765Z",
  },
  {
    message: "LobbyManager loadBotById 60ad401e9af9070008dc86d8",
    level: "debug",
    timestamp: "2021-05-27T13:48:50.768Z",
  },
  {
    message:
      "DB findBot  _id 60ad401e9af9070008dc86d8  --> {\n  _id: 60ad401e9af9070008dc86d8,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 2,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-25T18:21:18.634Z,\n  updated_at: 2021-05-27T13:48:50.369Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-27T13:48:50.951Z",
  },
  {
    message: "LobbyManager loadBot 60ad401e9af9070008dc86d8",
    level: "debug",
    timestamp: "2021-05-27T13:48:50.955Z",
  },
  {
    message: "LobbyManager getBot 60ad401e9af9070008dc86d8 ",
    level: "debug",
    timestamp: "2021-05-27T13:48:50.961Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_LOADING _id 60ad401e9af9070008dc86d8  --> {\n  _id: 60ad401e9af9070008dc86d8,\n  status: 'BOT_LOADING',\n  lobbyCount: 2,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-25T18:21:18.634Z,\n  updated_at: 2021-05-27T13:48:50.965Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-27T13:48:51.157Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-27T13:48:51.173Z",
  },
  {
    message: "DotaBot connectDotaBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-27T13:48:51.175Z",
  },
  {
    message: "DotaBot connecting...",
    level: "debug",
    timestamp: "2021-05-27T13:48:51.181Z",
  },
  {
    message: "DotaBot logOnToSteam logging on steamUser...",
    level: "debug",
    timestamp: "2021-05-27T13:48:52.884Z",
  },
  {
    message: "DotaBot Received servers.",
    level: "debug",
    timestamp: "2021-05-27T13:48:54.249Z",
  },
  {
    message: "DotaBot set steam persona state and name.",
    level: "debug",
    timestamp: "2021-05-27T13:48:54.269Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-27T13:48:55.987Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-27T13:48:55.991Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-27T13:48:55.998Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-27T13:48:56.245Z",
  },
  {
    message: "Activating queue",
    level: "debug",
    timestamp: "2021-05-27T13:48:56.249Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-27T13:48:56.254Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-27T13:48:56.256Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_ONLINE steamId64 76561199139099147  --> {\n  _id: 60ad401e9af9070008dc86d8,\n  status: 'BOT_ONLINE',\n  lobbyCount: 2,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-25T18:21:18.634Z,\n  updated_at: 2021-05-27T13:48:56.257Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-27T13:48:56.434Z",
  },
  {
    message: "lobbyManager loadBot loaded",
    level: "debug",
    timestamp: "2021-05-27T13:48:56.435Z",
  },
  {
    message: "lobbyManager loadBot done",
    level: "debug",
    timestamp: "2021-05-27T13:48:56.437Z",
  },
  {
    message:
      "DotaBot createDotaBotLobby inhouse-lobby-60afa3408189f3450840223c itchy-mole-63  DOTA_GAMEMODE_1V1MID 21  76561199139099147",
    level: "debug",
    timestamp: "2021-05-27T13:48:56.438Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-27T13:48:56.439Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-27T13:48:56.440Z",
  },
  {
    message:
      "DotaBot createPracticeLobby {\n  game_name: 'inhouse-lobby-60afa3408189f3450840223c',\n  server_region: 5,\n  game_mode: 21,\n  series_type: 1,\n  game_version: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  allow_spectating: true,\n  pass_key: 'itchy-mole-63',\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  visibility: 0,\n  cm_pick: 0,\n  leagueid: 13130\n}",
    level: "debug",
    timestamp: "2021-05-27T13:48:56.449Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-27T13:48:56.461Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-27T13:48:57.186Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  null  lobby--> {\n  lobby_id: Long { low: -1723287314, high: 6336191, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60afa3408189f3450840223c',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'itchy-mole-63',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [] ",
    level: "debug",
    timestamp: "2021-05-27T13:48:57.290Z",
  },
  {
    message:
      "DotaBot practiceLobbyResponse { eresult: 1, debug_message: null }",
    level: "debug",
    timestamp: "2021-05-27T13:48:57.302Z",
  },
  {
    message: "DotaBot createDotaBotLobby practice lobby created",
    level: "debug",
    timestamp: "2021-05-27T13:48:57.306Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27213735697889518   --> null",
    level: "debug",
    timestamp: "2021-05-27T13:48:57.468Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.dotaLobbyId 27213735697889518 not found. Bot 60ad401e9af9070008dc86d8 leaving lobby...",
    level: "debug",
    timestamp: "2021-05-27T13:48:57.469Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_IN_LOBBY steamId64 76561199139099147  --> {\n  _id: 60ad401e9af9070008dc86d8,\n  status: 'BOT_IN_LOBBY',\n  lobbyCount: 2,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-25T18:21:18.634Z,\n  updated_at: 2021-05-27T13:48:57.307Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-27T13:48:57.481Z",
  },
  {
    message: "DotaBot createDotaBotLobby bot status updated",
    level: "debug",
    timestamp: "2021-05-27T13:48:57.482Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-27T13:48:57.483Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-27T13:48:57.484Z",
  },
  {
    message: "DotaBot practiceLobbyKickFromTeam 1178833419",
    level: "debug",
    timestamp: "2021-05-27T13:48:57.485Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-27T13:48:57.496Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 8678",
    level: "debug",
    timestamp: "2021-05-27T13:48:57.581Z",
  },
  {
    message:
      "DotaBot practiceLobbyResponse { eresult: 1, debug_message: null }",
    level: "debug",
    timestamp: "2021-05-27T13:48:57.983Z",
  },
  {
    message:
      "DotaBot practiceLobbyKickFromTeam response undefined .CMsgGenericResult",
    level: "debug",
    timestamp: "2021-05-27T13:48:57.984Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-27T13:48:57.986Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-27T13:48:57.987Z",
  },
  {
    message: "DotaBot joinChat Lobby_27213735697889518",
    level: "debug",
    timestamp: "2021-05-27T13:48:57.988Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-27T13:48:57.999Z",
  },
  {
    message: "enterLobbyP dotaLobbyId: 27213735697889518",
    level: "debug",
    timestamp: "2021-05-27T13:48:58.001Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 60afa3408189f3450840223c,\n  readyCheckTimeout: 240000,\n  prevstate: [],\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  setMatchPlayerDetails: false,\n  players: [ '76561198177128005', '76561198003549651' ],\n  state: 'STATE_BOT_STARTED',\n  password: 'itchy-mole-63',\n  createdOn: 2021-05-27T13:48:48.742Z,\n  updatedOn: 2021-05-27T13:48:48.742Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60afa3408189f3450840223c',\n  botId: 60ad401e9af9070008dc86d8,\n  dotaLobbyId: '27213735697889518'\n}",
    level: "debug",
    timestamp: "2021-05-27T13:48:58.173Z",
  },
  {
    message: "updateLobby done. 60afa3408189f3450840223c STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-27T13:48:58.174Z",
  },
  {
    message:
      "STATE_BOT_ASSIGNED to STATE_BOT_STARTED 60afa3408189f3450840223c STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-27T13:48:58.176Z",
  },
  {
    message:
      "runLobby 60afa3408189f3450840223c STATE_BOT_ASSIGNED to STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-27T13:48:58.178Z",
  },
  {
    message: "LobbyManager getBot 60ad401e9af9070008dc86d8 ",
    level: "debug",
    timestamp: "2021-05-27T13:48:58.179Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 60afa3408189f3450840223c,\n  players: [ '76561198177128005', '76561198003549651' ]\n}",
    level: "debug",
    timestamp: "2021-05-27T13:48:58.345Z",
  },
  {
    message:
      "lobby run STATE_BOT_STARTED lobbyState {\n  _id: 60afa3408189f3450840223c,\n  readyCheckTimeout: 240000,\n  prevstate: [],\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  setMatchPlayerDetails: false,\n  players: [ '76561198177128005', '76561198003549651' ],\n  state: 'STATE_BOT_STARTED',\n  password: 'itchy-mole-63',\n  createdOn: 2021-05-27T13:48:48.742Z,\n  updatedOn: 2021-05-27T13:48:48.742Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60afa3408189f3450840223c',\n  botId: '60ad401e9af9070008dc86d8',\n  dotaLobbyId: '27213735697889518'\n} players [ '76561198177128005', '76561198003549651' ] ",
    level: "debug",
    timestamp: "2021-05-27T13:48:58.350Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-27T13:48:58.351Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-27T13:48:58.352Z",
  },
  {
    message: "DotaBot inviteToLobby 76561198177128005",
    level: "debug",
    timestamp: "2021-05-27T13:48:58.353Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-27T13:48:58.366Z",
  },
  {
    message: "LobbyManager unregisterLobbyTimeout 60afa3408189f3450840223c",
    level: "debug",
    timestamp: "2021-05-27T13:48:58.368Z",
  },
  {
    message:
      "LobbyManager registerLobbyTimeout 60afa3408189f3450840223c Thu May 27 2021 19:18:58 GMT+0530 (India Standard Time) 240000. timeout 239999ms",
    level: "debug",
    timestamp: "2021-05-27T13:48:58.395Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-27T13:48:58.402Z",
  },
  {
    message: "DotaBot inviteToLobby 76561198003549651",
    level: "debug",
    timestamp: "2021-05-27T13:48:58.403Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-27T13:48:58.412Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 60afa3408189f3450840223c,\n  readyCheckTimeout: 240000,\n  prevstate: [],\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  setMatchPlayerDetails: false,\n  players: [ '76561198177128005', '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'itchy-mole-63',\n  createdOn: 2021-05-27T13:48:48.742Z,\n  updatedOn: 2021-05-27T13:48:48.742Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60afa3408189f3450840223c',\n  botId: 60ad401e9af9070008dc86d8,\n  dotaLobbyId: '27213735697889518',\n  readyCheckTime: 2021-05-27T13:48:58.367Z\n}",
    level: "debug",
    timestamp: "2021-05-27T13:48:58.570Z",
  },
  {
    message:
      "runLobby 60afa3408189f3450840223c STATE_BOT_STARTED to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-27T13:48:58.572Z",
  },
  {
    message: "LobbyManager getBot 60ad401e9af9070008dc86d8 ",
    level: "debug",
    timestamp: "2021-05-27T13:48:58.576Z",
  },
  {
    message:
      "membersToPlayerState playerState {} members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-27T13:48:58.588Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005', '76561198003549651' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-27T13:48:58.591Z",
  },
  {
    message:
      "runLobby 60afa3408189f3450840223c STATE_WAITING_FOR_PLAYERS to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-27T13:48:58.595Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-27T13:49:06.087Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: -1723287314, high: 6336191, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60afa3408189f3450840223c',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'itchy-mole-63',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: -1723287314, high: 6336191, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'dEkU',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [ Long { low: 43283923, high: 17825793, unsigned: true } ],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60afa3408189f3450840223c',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'itchy-mole-63',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198177128005', '76561198003549651' ] ",
    level: "debug",
    timestamp: "2021-05-27T13:49:06.299Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-27T13:49:06.301Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites 76561198003549651 newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'dEkU',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] members {\n  left: [],\n  joined: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'dEkU',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  changedSlot: []\n}",
    level: "debug",
    timestamp: "2021-05-27T13:49:06.372Z",
  },
  {
    message: "DotaBot processLobbyUpdate member joined 76561198177128005 ",
    level: "debug",
    timestamp: "2021-05-27T13:49:06.374Z",
  },
  {
    message:
      "membersToPlayerState playerState {} members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'dEkU',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-27T13:49:06.395Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005', '76561198003549651' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-27T13:49:06.397Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27213735697889518   --> {\n  _id: 60afa3408189f3450840223c,\n  readyCheckTimeout: 240000,\n  prevstate: [],\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  setMatchPlayerDetails: false,\n  players: [ '76561198177128005', '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'itchy-mole-63',\n  createdOn: 2021-05-27T13:48:48.742Z,\n  updatedOn: 2021-05-27T13:48:48.742Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60afa3408189f3450840223c',\n  botId: 60ad401e9af9070008dc86d8,\n  dotaLobbyId: '27213735697889518',\n  readyCheckTime: 2021-05-27T13:48:58.367Z\n}",
    level: "debug",
    timestamp: "2021-05-27T13:49:06.562Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-27T13:49:13.687Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: -1723287314, high: 6336191, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'dEkU',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [ Long { low: 43283923, high: 17825793, unsigned: true } ],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60afa3408189f3450840223c',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'itchy-mole-63',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: -1723287314, high: 6336191, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'dEkU',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [ Long { low: 43283923, high: 17825793, unsigned: true } ],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60afa3408189f3450840223c',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'itchy-mole-63',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198177128005', '76561198003549651' ] ",
    level: "debug",
    timestamp: "2021-05-27T13:49:13.800Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-27T13:49:13.803Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'dEkU',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites 76561198003549651 newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-27T13:49:13.855Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198177128005': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-27T13:49:13.884Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005', '76561198003549651' ] playerState { '76561198177128005': 1 } ",
    level: "debug",
    timestamp: "2021-05-27T13:49:13.887Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27213735697889518   --> {\n  _id: 60afa3408189f3450840223c,\n  readyCheckTimeout: 240000,\n  prevstate: [],\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  setMatchPlayerDetails: false,\n  players: [ '76561198177128005', '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'itchy-mole-63',\n  createdOn: 2021-05-27T13:48:48.742Z,\n  updatedOn: 2021-05-27T13:48:48.742Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60afa3408189f3450840223c',\n  botId: 60ad401e9af9070008dc86d8,\n  dotaLobbyId: '27213735697889518',\n  readyCheckTime: 2021-05-27T13:48:58.367Z\n}",
    level: "debug",
    timestamp: "2021-05-27T13:49:14.070Z",
  },
  {
    message:
      "LobbyManager registerLobbyTimeout 60afa3408189f3450840223c timed out",
    level: "debug",
    timestamp: "2021-05-27T13:52:58.403Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyTimedOut [object Object]",
    level: "debug",
    timestamp: "2021-05-27T13:52:58.404Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyTimedOut 0",
    level: "debug",
    timestamp: "2021-05-27T13:52:58.405Z",
  },
  {
    message: "LobbyManager onLobbyTimedOut 60afa3408189f3450840223c",
    level: "debug",
    timestamp: "2021-05-27T13:52:58.406Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-27T13:52:58.406Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-27T13:52:58.408Z",
  },
  {
    message:
      "LobbyManager runLobby 60afa3408189f3450840223c STATE_WAITING_FOR_PLAYERS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-27T13:52:58.409Z",
  },
  {
    message:
      "DB findLobbyById _id 60afa3408189f3450840223c   --> {\n  _id: 60afa3408189f3450840223c,\n  readyCheckTimeout: 240000,\n  prevstate: [],\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  setMatchPlayerDetails: false,\n  players: [ '76561198177128005', '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'itchy-mole-63',\n  createdOn: 2021-05-27T13:48:48.742Z,\n  updatedOn: 2021-05-27T13:48:48.742Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60afa3408189f3450840223c',\n  botId: 60ad401e9af9070008dc86d8,\n  dotaLobbyId: '27213735697889518',\n  readyCheckTime: 2021-05-27T13:48:58.367Z\n}",
    level: "debug",
    timestamp: "2021-05-27T13:52:58.585Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-27T13:52:58.587Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 60afa3408189f3450840223c,\n  players: [ '76561198177128005', '76561198003549651' ]\n}",
    level: "debug",
    timestamp: "2021-05-27T13:52:58.764Z",
  },
  {
    message:
      "validateLobbyPlayers 60afa3408189f3450840223c end STATE_WAITING_FOR_PLAYERS to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-27T13:52:58.766Z",
  },
  {
    message: "LobbyManager getBot 60ad401e9af9070008dc86d8 ",
    level: "debug",
    timestamp: "2021-05-27T13:52:58.769Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198177128005': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-27T13:52:58.817Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005', '76561198003549651' ] playerState { '76561198177128005': 1 } ",
    level: "debug",
    timestamp: "2021-05-27T13:52:58.820Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198177128005': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-27T13:52:58.867Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 60afa3408189f3450840223c,\n  readyCheckTimeout: 240000,\n  prevstate: [],\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  setMatchPlayerDetails: false,\n  players: [ '76561198177128005', '76561198003549651' ],\n  state: 'STATE_MATCH_NO_STATS',\n  password: 'itchy-mole-63',\n  createdOn: 2021-05-27T13:48:48.742Z,\n  updatedOn: 2021-05-27T13:48:48.742Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60afa3408189f3450840223c',\n  botId: 60ad401e9af9070008dc86d8,\n  dotaLobbyId: '27213735697889518',\n  readyCheckTime: null,\n  joinedPlayers: { '76561198177128005': 1 }\n}",
    level: "debug",
    timestamp: "2021-05-27T13:52:59.063Z",
  },
  {
    message:
      "runLobby 60afa3408189f3450840223c STATE_WAITING_FOR_PLAYERS to STATE_MATCH_NO_STATS",
    level: "debug",
    timestamp: "2021-05-27T13:52:59.066Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 60afa3408189f3450840223c,\n  readyCheckTimeout: 240000,\n  prevstate: [],\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  setMatchPlayerDetails: false,\n  players: [ '76561198177128005', '76561198003549651' ],\n  state: 'STATE_COMPLETED_NO_STATS',\n  password: 'itchy-mole-63',\n  createdOn: 2021-05-27T13:48:48.742Z,\n  updatedOn: 2021-05-27T13:48:48.742Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60afa3408189f3450840223c',\n  botId: 60ad401e9af9070008dc86d8,\n  dotaLobbyId: '27213735697889518',\n  readyCheckTime: null,\n  joinedPlayers: { '76561198177128005': 1 }\n}",
    level: "debug",
    timestamp: "2021-05-27T13:52:59.267Z",
  },
  {
    message:
      "LobbyManager botLeaveLobby 60afa3408189f3450840223c 60ad401e9af9070008dc86d8",
    level: "debug",
    timestamp: "2021-05-27T13:52:59.270Z",
  },
  {
    message: "LobbyManager loadBotById 60ad401e9af9070008dc86d8",
    level: "debug",
    timestamp: "2021-05-27T13:52:59.272Z",
  },
  {
    message:
      "DB findBot  _id 60ad401e9af9070008dc86d8  --> {\n  _id: 60ad401e9af9070008dc86d8,\n  status: 'BOT_IN_LOBBY',\n  lobbyCount: 2,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-25T18:21:18.634Z,\n  updated_at: 2021-05-27T13:48:57.307Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-27T13:52:59.450Z",
  },
  {
    message: "LobbyManager loadBot 60ad401e9af9070008dc86d8",
    level: "debug",
    timestamp: "2021-05-27T13:52:59.452Z",
  },
  {
    message: "LobbyManager getBot 60ad401e9af9070008dc86d8 ",
    level: "debug",
    timestamp: "2021-05-27T13:52:59.454Z",
  },
  {
    message: "lobbyManager loadBot done",
    level: "debug",
    timestamp: "2021-05-27T13:52:59.456Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-27T13:52:59.459Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-27T13:52:59.461Z",
  },
  {
    message: "DotaBot leavePracticeLobby",
    level: "debug",
    timestamp: "2021-05-27T13:52:59.463Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-27T13:52:59.478Z",
  },
  {
    message: "dotaBot practiceLobbyCleared emitted",
    level: "debug",
    timestamp: "2021-05-27T13:53:00.045Z",
  },
  {
    message: "LobbyManager queueEvent onBotLobbyLeft 60ad401e9af9070008dc86d8",
    level: "debug",
    timestamp: "2021-05-27T13:53:00.048Z",
  },
  {
    message:
      "DotaBot practiceLobbyResponse { eresult: 1, debug_message: null }",
    level: "debug",
    timestamp: "2021-05-27T13:53:00.060Z",
  },
  {
    message: "DotaBot leavePracticeLobby response undefined .CMsgGenericResult",
    level: "debug",
    timestamp: "2021-05-27T13:53:00.062Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-27T13:53:00.065Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-27T13:53:00.066Z",
  },
  {
    message: "DotaBot abandonCurrentGame",
    level: "debug",
    timestamp: "2021-05-27T13:53:00.068Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-27T13:53:00.075Z",
  },
  {
    level: "error",
    message: "DotaBot leaveLobbyChat missing lobby",
    timestamp: "2021-05-27T13:53:00.080Z",
  },
  {
    message:
      "LobbyManager botLeaveLobby bot 60ad401e9af9070008dc86d8 left lobby 27213735697889518",
    level: "debug",
    timestamp: "2021-05-27T13:53:00.085Z",
  },
  {
    message:
      "DB unassignBotFromLobby lobby [object Object] botId 60ad401e9af9070008dc86d8  --> {\n  _id: 60ad401e9af9070008dc86d8,\n  status: 'BOT_IN_LOBBY',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-25T18:21:18.634Z,\n  updated_at: 2021-05-27T13:53:00.275Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-27T13:53:00.455Z",
  },
  {
    message:
      "runLobby 60afa3408189f3450840223c STATE_MATCH_NO_STATS to STATE_COMPLETED_NO_STATS",
    level: "debug",
    timestamp: "2021-05-27T13:53:00.459Z",
  },
  {
    message:
      "runLobby 60afa3408189f3450840223c STATE_COMPLETED_NO_STATS to STATE_COMPLETED_NO_STATS",
    level: "debug",
    timestamp: "2021-05-27T13:53:00.463Z",
  },
  {
    message: "LobbyManager processEventQueue onBotLobbyLeft 0",
    level: "debug",
    timestamp: "2021-05-27T13:53:00.465Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_IDLE _id 60ad401e9af9070008dc86d8  --> {\n  _id: 60ad401e9af9070008dc86d8,\n  status: 'BOT_IDLE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-25T18:21:18.634Z,\n  updated_at: 2021-05-27T13:53:00.467Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-27T13:53:00.646Z",
  },
  {
    message: "DB findAllLobbiesInState state STATE_WAITING_FOR_BOT  --> []",
    level: "debug",
    timestamp: "2021-05-27T13:53:00.817Z",
  },
  {
    message: "LobbyManager onBotAvailable 0",
    level: "debug",
    timestamp: "2021-05-27T13:53:00.819Z",
  },
  {
    message:
      "DB setAllBotsOffline  --> {\n  n: 1,\n  nModified: 1,\n  opTime: {\n    ts: Timestamp { _bsontype: 'Timestamp', low_: 26, high_: 1622123669 },\n    t: 18\n  },\n  electionId: 7fffffff0000000000000012,\n  ok: 1,\n  '$clusterTime': {\n    clusterTime: Timestamp { _bsontype: 'Timestamp', low_: 26, high_: 1622123669 },\n    signature: { hash: [Binary], keyId: [Long] }\n  },\n  operationTime: Timestamp { _bsontype: 'Timestamp', low_: 26, high_: 1622123669 }\n}",
    level: "debug",
    timestamp: "2021-05-27T13:54:30.204Z",
  },
  {
    message:
      "DB findLobbyById _id 60afa3408189f3450840223c   --> {\n  _id: 60afa3408189f3450840223c,\n  readyCheckTimeout: 240000,\n  prevstate: [],\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  setMatchPlayerDetails: false,\n  players: [ '76561198177128005', '76561198003549651' ],\n  state: 'STATE_COMPLETED_NO_STATS',\n  password: 'itchy-mole-63',\n  createdOn: 2021-05-27T13:48:48.742Z,\n  updatedOn: 2021-05-27T13:48:48.742Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60afa3408189f3450840223c',\n  botId: null,\n  dotaLobbyId: null,\n  readyCheckTime: null,\n  joinedPlayers: { '76561198177128005': 1 }\n}",
    level: "debug",
    timestamp: "2021-05-27T13:54:37.982Z",
  },
];
