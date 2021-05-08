let b = [
  ,
  {
    message: "DB findActiveLobbiesForUser userId 76561198177128005  --> []",
    level: "debug",
    timestamp: "2021-05-07T05:33:16.800Z",
  },
  {
    message: "DB findPendingLobby  --> null",
    level: "debug",
    timestamp: "2021-05-07T05:33:21.955Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 6094d121d4db5750e8e130e8,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'itchy-tiger-97',\n  createdOn: 2021-05-07T05:33:22.528Z,\n  updatedOn: 2021-05-07T05:33:22.529Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d121d4db5750e8e130e8'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:33:22.673Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 6094d121d4db5750e8e130e8,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'itchy-tiger-97',\n  createdOn: 2021-05-07T05:33:22.528Z,\n  updatedOn: 2021-05-07T05:33:22.529Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d121d4db5750e8e130e8'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:33:22.723Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-07T05:33:22.728Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-07T05:33:22.731Z",
  },
  {
    message:
      "LobbyManager runLobby 6094d121d4db5750e8e130e8 STATE_WAITING_FOR_BOT STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-07T05:33:22.736Z",
  },
  {
    message:
      "DB findLobbyById _id 6094d121d4db5750e8e130e8   --> {\n  _id: 6094d121d4db5750e8e130e8,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'itchy-tiger-97',\n  createdOn: 2021-05-07T05:33:22.528Z,\n  updatedOn: 2021-05-07T05:33:22.529Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d121d4db5750e8e130e8'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:33:23.074Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-07T05:33:23.090Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> { _id: 6094d121d4db5750e8e130e8, players: [ '76561198177128005' ] }",
    level: "debug",
    timestamp: "2021-05-07T05:33:23.184Z",
  },
  {
    message:
      "validateLobbyPlayers 6094d121d4db5750e8e130e8 end STATE_WAITING_FOR_BOT to STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-07T05:33:23.190Z",
  },
  {
    message: "STATE_WAITING_FOR_BOT 6094d121d4db5750e8e130e8 undefined",
    level: "debug",
    timestamp: "2021-05-07T05:33:23.192Z",
  },
  {
    message: "DB findUnassignedBot   --> null",
    level: "debug",
    timestamp: "2021-05-07T05:33:23.228Z",
  },
  {
    message:
      "DB findOrCreateBot steamId64 76561199139099147 accountName dynastyesports personaName my*****Name password St3@mAccountToBu!dlovelyAPI69 --> {\n  status: 'BOT_OFFLINE',\n  lobbyCount: 0,\n  _id: 6094d123d4db5750e8e130e9,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T05:33:23.238Z,\n  updated_at: 2021-05-07T05:33:23.238Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T05:33:23.291Z",
  },
  {
    message: "lobby run findUnassignedBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-07T05:33:23.295Z",
  },
  {
    message:
      "DB assignBotToLobby lobby [object Object] botId 6094d123d4db5750e8e130e9  --> {\n  _id: 6094d123d4db5750e8e130e9,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T05:33:23.238Z,\n  updated_at: 2021-05-07T05:33:23.356Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T05:33:23.436Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 6094d121d4db5750e8e130e8,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_BOT_ASSIGNED',\n  password: 'itchy-tiger-97',\n  createdOn: 2021-05-07T05:33:22.528Z,\n  updatedOn: 2021-05-07T05:33:22.529Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  botId: 6094d123d4db5750e8e130e9\n}",
    level: "debug",
    timestamp: "2021-05-07T05:33:23.491Z",
  },
  {
    message:
      "runLobby 6094d121d4db5750e8e130e8 STATE_WAITING_FOR_BOT to STATE_BOT_ASSIGNED",
    level: "debug",
    timestamp: "2021-05-07T05:33:23.497Z",
  },
  {
    message: "LobbyManager loadBotById 6094d123d4db5750e8e130e9",
    level: "debug",
    timestamp: "2021-05-07T05:33:23.500Z",
  },
  {
    message:
      "DB findBot  _id 6094d123d4db5750e8e130e9  --> {\n  _id: 6094d123d4db5750e8e130e9,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T05:33:23.238Z,\n  updated_at: 2021-05-07T05:33:23.356Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T05:33:23.554Z",
  },
  {
    message: "LobbyManager loadBot 6094d123d4db5750e8e130e9",
    level: "debug",
    timestamp: "2021-05-07T05:33:23.556Z",
  },
  {
    message: "LobbyManager getBot 6094d123d4db5750e8e130e9 ",
    level: "debug",
    timestamp: "2021-05-07T05:33:23.562Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_LOADING _id 6094d123d4db5750e8e130e9  --> {\n  _id: 6094d123d4db5750e8e130e9,\n  status: 'BOT_LOADING',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T05:33:23.238Z,\n  updated_at: 2021-05-07T05:33:23.567Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T05:33:23.609Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-07T05:33:23.620Z",
  },
  {
    message: "DotaBot connectDotaBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-07T05:33:23.622Z",
  },
  {
    message: "DotaBot connecting...",
    level: "debug",
    timestamp: "2021-05-07T05:33:23.624Z",
  },
  {
    message: "DotaBot logOnToSteam logging on steamUser...",
    level: "debug",
    timestamp: "2021-05-07T05:33:30.610Z",
  },
  {
    message: "DotaBot set steam persona state and name.",
    level: "debug",
    timestamp: "2021-05-07T05:33:33.844Z",
  },
  {
    message: "DotaBot Received servers.",
    level: "debug",
    timestamp: "2021-05-07T05:33:33.868Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 8678",
    level: "debug",
    timestamp: "2021-05-07T05:33:35.897Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-07T05:33:35.900Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-07T05:33:35.907Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-07T05:33:35.983Z",
  },
  {
    message: "Activating queue",
    level: "debug",
    timestamp: "2021-05-07T05:33:35.984Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-07T05:33:35.985Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-07T05:33:35.990Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_ONLINE steamId64 76561199139099147  --> {\n  _id: 6094d123d4db5750e8e130e9,\n  status: 'BOT_ONLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T05:33:23.238Z,\n  updated_at: 2021-05-07T05:33:35.992Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T05:33:36.070Z",
  },
  {
    message: "lobbyManager loadBot loaded",
    level: "debug",
    timestamp: "2021-05-07T05:33:36.075Z",
  },
  {
    message: "lobbyManager loadBot done",
    level: "debug",
    timestamp: "2021-05-07T05:33:36.077Z",
  },
  {
    message:
      "DotaBot createDotaBotLobby inhouse-lobby-6094d121d4db5750e8e130e8 itchy-tiger-97  DOTA_GAMEMODE_1V1MID 21  76561199139099147",
    level: "debug",
    timestamp: "2021-05-07T05:33:36.080Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-07T05:33:36.082Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-07T05:33:36.083Z",
  },
  {
    message:
      "DotaBot createPracticeLobby {\n  game_name: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  server_region: 5,\n  game_mode: 21,\n  series_type: 1,\n  game_version: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  allow_spectating: true,\n  pass_key: 'itchy-tiger-97',\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  visibility: 0,\n  cm_pick: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T05:33:36.089Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-07T05:33:36.101Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T05:33:36.656Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  null  lobby--> {\n  lobby_id: Long { low: 497210337, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'my*****Name',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'itchy-tiger-97',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [] ",
    level: "debug",
    timestamp: "2021-05-07T05:33:36.729Z",
  },
  {
    message:
      "DotaBot practiceLobbyResponse { eresult: 1, debug_message: null }",
    level: "debug",
    timestamp: "2021-05-07T05:33:36.735Z",
  },
  {
    message: "DotaBot createDotaBotLobby practice lobby created",
    level: "debug",
    timestamp: "2021-05-07T05:33:36.744Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965932471265   --> null",
    level: "debug",
    timestamp: "2021-05-07T05:33:36.774Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.dotaLobbyId 27184965932471265 not found. Bot 6094d123d4db5750e8e130e9 leaving lobby...",
    level: "debug",
    timestamp: "2021-05-07T05:33:36.780Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_IN_LOBBY steamId64 76561199139099147  --> {\n  _id: 6094d123d4db5750e8e130e9,\n  status: 'BOT_IN_LOBBY',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T05:33:23.238Z,\n  updated_at: 2021-05-07T05:33:36.749Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T05:33:36.809Z",
  },
  {
    message: "DotaBot createDotaBotLobby bot status updated",
    level: "debug",
    timestamp: "2021-05-07T05:33:36.813Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-07T05:33:36.814Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-07T05:33:36.815Z",
  },
  {
    message: "DotaBot practiceLobbyKickFromTeam 1178833419",
    level: "debug",
    timestamp: "2021-05-07T05:33:36.816Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-07T05:33:36.827Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.401Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 497210337, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'my*****Name',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'itchy-tiger-97',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 497210337, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'itchy-tiger-97',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [] ",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.495Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.512Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'my*****Name',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.549Z",
  },
  {
    message:
      "membersToPlayerState playerState {} members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.580Z",
  },
  {
    message: "dotaBot isDotaLobbyReady teamCache [] playerState {} ",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.592Z",
  },
  {
    message:
      "DotaBot practiceLobbyResponse { eresult: 1, debug_message: null }",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.611Z",
  },
  {
    message:
      "DotaBot practiceLobbyKickFromTeam response undefined .CMsgGenericResult",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.617Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.633Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.634Z",
  },
  {
    message: "DotaBot joinChat Lobby_27184965932471265",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.635Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.654Z",
  },
  {
    message: "enterLobbyP dotaLobbyId: 27184965932471265",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.657Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965932471265   --> null",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.718Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.dotaLobbyId 27184965932471265 not found. Bot 6094d123d4db5750e8e130e9 leaving lobby...",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.722Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 6094d121d4db5750e8e130e8,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_BOT_STARTED',\n  password: 'itchy-tiger-97',\n  createdOn: 2021-05-07T05:33:22.528Z,\n  updatedOn: 2021-05-07T05:33:22.529Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  botId: 6094d123d4db5750e8e130e9,\n  dotaLobbyId: '27184965932471265'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.733Z",
  },
  {
    message: "updateLobby done. 6094d121d4db5750e8e130e8 STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.736Z",
  },
  {
    message:
      "STATE_BOT_ASSIGNED to STATE_BOT_STARTED 6094d121d4db5750e8e130e8 STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.738Z",
  },
  {
    message:
      "runLobby 6094d121d4db5750e8e130e8 STATE_BOT_ASSIGNED to STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.740Z",
  },
  {
    message: "LobbyManager getBot 6094d123d4db5750e8e130e9 ",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.741Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> { _id: 6094d121d4db5750e8e130e8, players: [ '76561198177128005' ] }",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.779Z",
  },
  {
    message:
      "lobby run STATE_BOT_STARTED lobbyState {\n  _id: 6094d121d4db5750e8e130e8,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_BOT_STARTED',\n  password: 'itchy-tiger-97',\n  createdOn: 2021-05-07T05:33:22.528Z,\n  updatedOn: 2021-05-07T05:33:22.529Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  botId: '6094d123d4db5750e8e130e9',\n  dotaLobbyId: '27184965932471265'\n} players [ '76561198177128005' ] ",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.783Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.785Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.788Z",
  },
  {
    message: "DotaBot inviteToLobby 76561198177128005",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.790Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.806Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 6094d121d4db5750e8e130e8,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'itchy-tiger-97',\n  createdOn: 2021-05-07T05:33:22.528Z,\n  updatedOn: 2021-05-07T05:33:22.529Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  botId: 6094d123d4db5750e8e130e9,\n  dotaLobbyId: '27184965932471265'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.841Z",
  },
  {
    message:
      "runLobby 6094d121d4db5750e8e130e8 STATE_BOT_STARTED to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.842Z",
  },
  {
    message: "LobbyManager getBot 6094d123d4db5750e8e130e9 ",
    level: "debug",
    timestamp: "2021-05-07T05:33:37.843Z",
  },
  {
    message:
      "membersToPlayerState playerState {} members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T05:33:38.066Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-07T05:33:38.067Z",
  },
  {
    message:
      "runLobby 6094d121d4db5750e8e130e8 STATE_WAITING_FOR_PLAYERS to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:33:38.093Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T05:33:51.904Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 497210337, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'itchy-tiger-97',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 497210337, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'dEkU',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'itchy-tiger-97',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198177128005' ] ",
    level: "debug",
    timestamp: "2021-05-07T05:33:52.002Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-07T05:33:52.003Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'dEkU',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] members {\n  left: [],\n  joined: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'dEkU',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  changedSlot: []\n}",
    level: "debug",
    timestamp: "2021-05-07T05:33:52.046Z",
  },
  {
    message: "DotaBot processLobbyUpdate member joined 76561198177128005 ",
    level: "debug",
    timestamp: "2021-05-07T05:33:52.047Z",
  },
  {
    message:
      "membersToPlayerState playerState {} members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'dEkU',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T05:33:52.067Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-07T05:33:52.068Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965932471265   --> {\n  _id: 6094d121d4db5750e8e130e8,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'itchy-tiger-97',\n  createdOn: 2021-05-07T05:33:22.528Z,\n  updatedOn: 2021-05-07T05:33:22.529Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  botId: 6094d123d4db5750e8e130e9,\n  dotaLobbyId: '27184965932471265'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:33:52.106Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.155Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 497210337, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'dEkU',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'itchy-tiger-97',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 497210337, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'dEkU',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'itchy-tiger-97',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198177128005' ] ",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.331Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.333Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'dEkU',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.460Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198177128005': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.489Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005' ] playerState { '76561198177128005': 1 } ",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.491Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.492Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27184965932471265",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.494Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 0",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.495Z",
  },
  {
    message: "LobbyManager onLobbyReady 27184965932471265",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.497Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965932471265   --> {\n  _id: 6094d121d4db5750e8e130e8,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'itchy-tiger-97',\n  createdOn: 2021-05-07T05:33:22.528Z,\n  updatedOn: 2021-05-07T05:33:22.529Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  botId: 6094d123d4db5750e8e130e9,\n  dotaLobbyId: '27184965932471265'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.558Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 6094d121d4db5750e8e130e8 inhouse-lobby-6094d121d4db5750e8e130e8",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.560Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.561Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.563Z",
  },
  {
    message:
      "LobbyManager runLobby 6094d121d4db5750e8e130e8 STATE_WAITING_FOR_PLAYERS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.568Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965932471265   --> {\n  _id: 6094d121d4db5750e8e130e8,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'itchy-tiger-97',\n  createdOn: 2021-05-07T05:33:22.528Z,\n  updatedOn: 2021-05-07T05:33:22.529Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  botId: 6094d123d4db5750e8e130e9,\n  dotaLobbyId: '27184965932471265'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.577Z",
  },
  {
    message:
      "DB findLobbyById _id 6094d121d4db5750e8e130e8   --> {\n  _id: 6094d121d4db5750e8e130e8,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'itchy-tiger-97',\n  createdOn: 2021-05-07T05:33:22.528Z,\n  updatedOn: 2021-05-07T05:33:22.529Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  botId: 6094d123d4db5750e8e130e9,\n  dotaLobbyId: '27184965932471265'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.608Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.610Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> { _id: 6094d121d4db5750e8e130e8, players: [ '76561198177128005' ] }",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.647Z",
  },
  {
    message:
      "validateLobbyPlayers 6094d121d4db5750e8e130e8 end STATE_WAITING_FOR_PLAYERS to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.649Z",
  },
  {
    message: "LobbyManager getBot 6094d123d4db5750e8e130e9 ",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.651Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198177128005': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.677Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005' ] playerState { '76561198177128005': 1 } ",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.679Z",
  },
  {
    message: "lobby run isDotaLobbyReady true",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.680Z",
  },
  {
    message:
      "LobbyManager onStartDotaLobby 6094d121d4db5750e8e130e8 6094d123d4db5750e8e130e9 STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.681Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.683Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.684Z",
  },
  {
    message: "DotaBot launchPracticeLobby",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.685Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-07T05:34:00.693Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T05:34:01.363Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 497210337, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'dEkU',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'itchy-tiger-97',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 497210337, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'dEkU',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 20987,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 1,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1687546296, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'itchy-tiger-97',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 20987,\n      guild_primary_color: 3,\n      guild_secondary_color: 1,\n      guild_pattern: 5,\n      guild_logo: [Long],\n      guild_points: 61397,\n      guild_event: 19,\n      guild_flags: 0,\n      team_for_guild: 0,\n      guild_tag: 'ATMA',\n      guild_weekly_percentile: 85\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198177128005' ] ",
    level: "debug",
    timestamp: "2021-05-07T05:34:01.464Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-07T05:34:01.467Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 20987,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-07T05:34:01.563Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198177128005': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 20987,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T05:34:01.598Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005' ] playerState { '76561198177128005': 1 } ",
    level: "debug",
    timestamp: "2021-05-07T05:34:01.599Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-07T05:34:01.600Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27184965932471265",
    level: "debug",
    timestamp: "2021-05-07T05:34:01.604Z",
  },
  {
    message:
      "DotaBot practiceLobbyResponse { eresult: 1, debug_message: null }",
    level: "debug",
    timestamp: "2021-05-07T05:34:01.641Z",
  },
  {
    message: "DotaBot launchPracticeLobby response undefined",
    level: "debug",
    timestamp: "2021-05-07T05:34:01.642Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-07T05:34:01.648Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-07T05:34:01.650Z",
  },
  {
    message: "DotaBot leaveChat Lobby_27184965932471265",
    level: "debug",
    timestamp: "2021-05-07T05:34:01.651Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-07T05:34:01.689Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 3001",
    level: "debug",
    timestamp: "2021-05-07T05:34:01.715Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T05:34:01.775Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 497210337, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'dEkU',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 20987,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 1,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1687546296, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'itchy-tiger-97',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 20987,\n      guild_primary_color: 3,\n      guild_secondary_color: 1,\n      guild_pattern: 5,\n      guild_logo: [Long],\n      guild_points: 61397,\n      guild_event: 19,\n      guild_flags: 0,\n      team_for_guild: 0,\n      guild_tag: 'ATMA',\n      guild_weekly_percentile: 85\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 497210337, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'dEkU',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 20987,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 1959486474, high: 20988832, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 1,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1687546296, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'itchy-tiger-97',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: 1620365640,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 20987,\n      guild_primary_color: 3,\n      guild_secondary_color: 1,\n      guild_pattern: 5,\n      guild_logo: [Long],\n      guild_points: 61397,\n      guild_event: 19,\n      guild_flags: 0,\n      team_for_guild: 0,\n      guild_tag: 'ATMA',\n      guild_weekly_percentile: 85\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198177128005' ] ",
    level: "debug",
    timestamp: "2021-05-07T05:34:01.992Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-07T05:34:01.995Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 20987,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 20987,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.079Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198177128005': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 20987,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.141Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005' ] playerState { '76561198177128005': 1 } ",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.144Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.145Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27184965932471265",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.147Z",
  },
  {
    message: "dota bot startDotaLobby matchId 5982513592",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.178Z",
  },
  {
    message: "LobbyManager onStartDotaLobby matchId 5982513592 leagueid ",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.180Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965932471265   --> {\n  _id: 6094d121d4db5750e8e130e8,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'itchy-tiger-97',\n  createdOn: 2021-05-07T05:33:22.528Z,\n  updatedOn: 2021-05-07T05:33:22.529Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  botId: 6094d123d4db5750e8e130e9,\n  dotaLobbyId: '27184965932471265'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.193Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7581",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.201Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.213Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 497210337, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'dEkU',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 20987,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 1959486474, high: 20988832, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 1,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1687546296, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'itchy-tiger-97',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: 1620365640,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 20987,\n      guild_primary_color: 3,\n      guild_secondary_color: 1,\n      guild_pattern: 5,\n      guild_logo: [Long],\n      guild_points: 61397,\n      guild_event: 19,\n      guild_flags: 0,\n      team_for_guild: 0,\n      guild_tag: 'ATMA',\n      guild_weekly_percentile: 85\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 497210337, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'dEkU',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 20987,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 1959486474, high: 20988832, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 2,\n  connect: '=[A:1:1959486474:17312]',\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1687546296, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'itchy-tiger-97',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: 1620365640,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 20987,\n      guild_primary_color: 3,\n      guild_secondary_color: 1,\n      guild_pattern: 5,\n      guild_logo: [Long],\n      guild_points: 61397,\n      guild_event: 19,\n      guild_flags: 0,\n      team_for_guild: 0,\n      guild_tag: 'ATMA',\n      guild_weekly_percentile: 85\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198177128005' ] ",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.370Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.377Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 20987,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 20987,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.465Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198177128005': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 20987,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.492Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005' ] playerState { '76561198177128005': 1 } ",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.493Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.495Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27184965932471265",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.497Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 6094d121d4db5750e8e130e8,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'itchy-tiger-97',\n  createdOn: 2021-05-07T05:33:22.528Z,\n  updatedOn: 2021-05-07T05:33:22.529Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  botId: 6094d123d4db5750e8e130e9,\n  dotaLobbyId: '27184965932471265',\n  matchId: '5982513592',\n  startedAt: 2021-05-07T05:34:00.682Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.540Z",
  },
  {
    message: "matchTracker run false",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.542Z",
  },
  {
    message: "matchTracker setMatchDetails matchId 5982513592",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.543Z",
  },
  {
    message: "LobbyManager onStartDotaLobby true",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.545Z",
  },
  {
    message: "LobbyManager onStartDotaLobby false",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.546Z",
  },
  {
    message:
      "runLobby 6094d121d4db5750e8e130e8 STATE_WAITING_FOR_PLAYERS to STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.550Z",
  },
  {
    message:
      "runLobby 6094d121d4db5750e8e130e8 STATE_MATCH_IN_PROGRESS to STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.552Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 2",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.553Z",
  },
  {
    message: "LobbyManager onLobbyReady 27184965932471265",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.555Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965932471265   --> {\n  _id: 6094d121d4db5750e8e130e8,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'itchy-tiger-97',\n  createdOn: 2021-05-07T05:33:22.528Z,\n  updatedOn: 2021-05-07T05:33:22.529Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  botId: 6094d123d4db5750e8e130e9,\n  dotaLobbyId: '27184965932471265'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.574Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965932471265   --> {\n  _id: 6094d121d4db5750e8e130e8,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'itchy-tiger-97',\n  createdOn: 2021-05-07T05:33:22.528Z,\n  updatedOn: 2021-05-07T05:33:22.529Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  botId: 6094d123d4db5750e8e130e9,\n  dotaLobbyId: '27184965932471265',\n  matchId: '5982513592',\n  startedAt: 2021-05-07T05:34:00.682Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.587Z",
  },
  {
    message:
      "DB findLobbyById _id 6094d121d4db5750e8e130e8   --> {\n  _id: 6094d121d4db5750e8e130e8,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'itchy-tiger-97',\n  createdOn: 2021-05-07T05:33:22.528Z,\n  updatedOn: 2021-05-07T05:33:22.529Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  botId: 6094d123d4db5750e8e130e9,\n  dotaLobbyId: '27184965932471265',\n  matchId: '5982513592',\n  startedAt: 2021-05-07T05:34:00.682Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.610Z",
  },
  {
    message:
      "matchTracker setMatchDetails lobby.id 6094d121d4db5750e8e130e8 5982513592",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.612Z",
  },
  {
    message: "matchTracker getOpenDotaMatchDetails 5982513592",
    level: "debug",
    timestamp: "2021-05-07T05:34:02.613Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965932471265   --> {\n  _id: 6094d121d4db5750e8e130e8,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'itchy-tiger-97',\n  createdOn: 2021-05-07T05:33:22.528Z,\n  updatedOn: 2021-05-07T05:33:22.529Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  botId: 6094d123d4db5750e8e130e9,\n  dotaLobbyId: '27184965932471265',\n  matchId: '5982513592',\n  startedAt: 2021-05-07T05:34:00.682Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.152Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 6094d121d4db5750e8e130e8 inhouse-lobby-6094d121d4db5750e8e130e8",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.153Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.154Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 2",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.155Z",
  },
  {
    message: "LobbyManager onLobbyReady 27184965932471265",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.155Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965932471265   --> {\n  _id: 6094d121d4db5750e8e130e8,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'itchy-tiger-97',\n  createdOn: 2021-05-07T05:33:22.528Z,\n  updatedOn: 2021-05-07T05:33:22.529Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  botId: 6094d123d4db5750e8e130e9,\n  dotaLobbyId: '27184965932471265',\n  matchId: '5982513592',\n  startedAt: 2021-05-07T05:34:00.682Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.194Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 6094d121d4db5750e8e130e8 inhouse-lobby-6094d121d4db5750e8e130e8",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.195Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.195Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 2",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.196Z",
  },
  {
    message: "LobbyManager onLobbyReady 27184965932471265",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.196Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965932471265   --> {\n  _id: 6094d121d4db5750e8e130e8,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'itchy-tiger-97',\n  createdOn: 2021-05-07T05:33:22.528Z,\n  updatedOn: 2021-05-07T05:33:22.529Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  botId: 6094d123d4db5750e8e130e9,\n  dotaLobbyId: '27184965932471265',\n  matchId: '5982513592',\n  startedAt: 2021-05-07T05:34:00.682Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.226Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 6094d121d4db5750e8e130e8 inhouse-lobby-6094d121d4db5750e8e130e8",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.227Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.228Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 2",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.229Z",
  },
  {
    message:
      "LobbyManager runLobby 6094d121d4db5750e8e130e8 STATE_MATCH_IN_PROGRESS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.230Z",
  },
  {
    message:
      "DB findLobbyById _id 6094d121d4db5750e8e130e8   --> {\n  _id: 6094d121d4db5750e8e130e8,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'itchy-tiger-97',\n  createdOn: 2021-05-07T05:33:22.528Z,\n  updatedOn: 2021-05-07T05:33:22.529Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  botId: 6094d123d4db5750e8e130e9,\n  dotaLobbyId: '27184965932471265',\n  matchId: '5982513592',\n  startedAt: 2021-05-07T05:34:00.682Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.261Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.262Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 1",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.262Z",
  },
  {
    message:
      "LobbyManager runLobby 6094d121d4db5750e8e130e8 STATE_MATCH_IN_PROGRESS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.263Z",
  },
  {
    message:
      "DB findLobbyById _id 6094d121d4db5750e8e130e8   --> {\n  _id: 6094d121d4db5750e8e130e8,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'itchy-tiger-97',\n  createdOn: 2021-05-07T05:33:22.528Z,\n  updatedOn: 2021-05-07T05:33:22.529Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  botId: 6094d123d4db5750e8e130e9,\n  dotaLobbyId: '27184965932471265',\n  matchId: '5982513592',\n  startedAt: 2021-05-07T05:34:00.682Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.298Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.298Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.299Z",
  },
  {
    message:
      "LobbyManager runLobby 6094d121d4db5750e8e130e8 STATE_MATCH_IN_PROGRESS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.300Z",
  },
  {
    message:
      "DB findLobbyById _id 6094d121d4db5750e8e130e8   --> {\n  _id: 6094d121d4db5750e8e130e8,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'itchy-tiger-97',\n  createdOn: 2021-05-07T05:33:22.528Z,\n  updatedOn: 2021-05-07T05:33:22.529Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  botId: 6094d123d4db5750e8e130e9,\n  dotaLobbyId: '27184965932471265',\n  matchId: '5982513592',\n  startedAt: 2021-05-07T05:34:00.682Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.343Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.344Z",
  },
  {
    message: "matchTracker no data, queueing 6094d121d4db5750e8e130e8",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.890Z",
  },
  {
    message: "matchTracker looping",
    level: "debug",
    timestamp: "2021-05-07T05:34:07.891Z",
  },
  {
    message: "matchTracker run false",
    level: "debug",
    timestamp: "2021-05-07T05:34:08.903Z",
  },
  {
    message: "matchTracker setMatchDetails matchId 5982513592",
    level: "debug",
    timestamp: "2021-05-07T05:34:08.905Z",
  },
  {
    message:
      "DB findLobbyById _id 6094d121d4db5750e8e130e8   --> {\n  _id: 6094d121d4db5750e8e130e8,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'itchy-tiger-97',\n  createdOn: 2021-05-07T05:33:22.528Z,\n  updatedOn: 2021-05-07T05:33:22.529Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d121d4db5750e8e130e8',\n  botId: 6094d123d4db5750e8e130e9,\n  dotaLobbyId: '27184965932471265',\n  matchId: '5982513592',\n  startedAt: 2021-05-07T05:34:00.682Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:34:08.955Z",
  },
  {
    message:
      "matchTracker setMatchDetails lobby.id 6094d121d4db5750e8e130e8 5982513592",
    level: "debug",
    timestamp: "2021-05-07T05:34:08.957Z",
  },
  {
    message: "matchTracker getOpenDotaMatchDetails 5982513592",
    level: "debug",
    timestamp: "2021-05-07T05:34:08.960Z",
  },
  {
    message: "matchTracker no data, queueing 6094d121d4db5750e8e130e8",
    level: "debug",
    timestamp: "2021-05-07T05:34:09.499Z",
  },
  {
    message: "matchTracker looping",
    level: "debug",
    timestamp: "2021-05-07T05:34:09.501Z",
  },
  {
    message: "matchTracker run false",
    level: "debug",
    timestamp: "2021-05-07T05:34:10.517Z",
  },
  {
    message: "LobbyManager queueEvent disableMatchTracker ",
    level: "debug",
    timestamp: "2021-05-07T05:34:50.822Z",
  },
  {
    message: "LobbyManager processEventQueue disableMatchTracker 0",
    level: "debug",
    timestamp: "2021-05-07T05:34:50.823Z",
  },
  {
    message: "LobbyManager removeBot 6094d123d4db5750e8e130e9",
    level: "debug",
    timestamp: "2021-05-07T05:34:53.866Z",
  },
  {
    message: "LobbyManager getBot 6094d123d4db5750e8e130e9 ",
    level: "debug",
    timestamp: "2021-05-07T05:34:53.879Z",
  },
  {
    message: "DotaBot disconnectDotaBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-07T05:34:53.886Z",
  },
  {
    message: "DotaBot Logged off.",
    level: "debug",
    timestamp: "2021-05-07T05:34:53.902Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_OFFLINE steamId64 76561199139099147  --> {\n  _id: 6094d123d4db5750e8e130e9,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T05:33:23.238Z,\n  updated_at: 2021-05-07T05:34:53.904Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T05:34:53.945Z",
  },
  {
    message: "lobbyManager removeBot removed",
    level: "debug",
    timestamp: "2021-05-07T05:34:53.945Z",
  },
  {
    message: "LobbyManager queueEvent onBotAvailable ",
    level: "debug",
    timestamp: "2021-05-07T05:34:53.946Z",
  },
  {
    message: "LobbyManager processEventQueue onBotAvailable 0",
    level: "debug",
    timestamp: "2021-05-07T05:34:53.947Z",
  },
  {
    message: "DB findAllLobbiesInState state STATE_WAITING_FOR_BOT  --> []",
    level: "debug",
    timestamp: "2021-05-07T05:34:53.977Z",
  },
  {
    message: "LobbyManager onBotAvailable 0",
    level: "debug",
    timestamp: "2021-05-07T05:34:53.978Z",
  },
  {
    message: "DB findActiveLobbiesForUser userId 76561198177128005  --> []",
    level: "debug",
    timestamp: "2021-05-07T05:40:31.754Z",
  },
  {
    message: "DB findPendingLobby  --> null",
    level: "debug",
    timestamp: "2021-05-07T05:40:31.786Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 6094d2cfb603f65d0c78f86f,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'slimy-otter-3',\n  createdOn: 2021-05-07T05:40:31.792Z,\n  updatedOn: 2021-05-07T05:40:31.793Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d2cfb603f65d0c78f86f'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:40:31.878Z",
  },
  {
    message:
      "DB findActiveLobbiesForUser userId 76561198177128005  --> [\n  {\n    _id: 6094d2cfb603f65d0c78f86f,\n    gameMode: 'DOTA_GAMEMODE_1V1MID',\n    winner: 0,\n    players: [ '76561198177128005' ],\n    state: 'STATE_WAITING_FOR_QUEUE',\n    password: 'slimy-otter-3',\n    createdOn: 2021-05-07T05:40:31.792Z,\n    updatedOn: 2021-05-07T05:40:31.793Z,\n    __v: 0,\n    lobbyName: 'inhouse-lobby-6094d2cfb603f65d0c78f86f'\n  }\n]",
    level: "debug",
    timestamp: "2021-05-07T05:41:23.710Z",
  },
  {
    message:
      "DB findActiveLobbiesForUser userId 76561198177128005  --> [\n  {\n    _id: 6094d2cfb603f65d0c78f86f,\n    gameMode: 'DOTA_GAMEMODE_1V1MID',\n    winner: 0,\n    players: [ '76561198177128005' ],\n    state: 'STATE_WAITING_FOR_QUEUE',\n    password: 'slimy-otter-3',\n    createdOn: 2021-05-07T05:40:31.792Z,\n    updatedOn: 2021-05-07T05:40:31.793Z,\n    __v: 0,\n    lobbyName: 'inhouse-lobby-6094d2cfb603f65d0c78f86f'\n  }\n]",
    level: "debug",
    timestamp: "2021-05-07T05:43:07.367Z",
  },
  {
    message: "DB findActiveLobbiesForUser userId 76561198003810536  --> []",
    level: "debug",
    timestamp: "2021-05-07T05:44:11.378Z",
  },
  {
    message: "DB findPendingLobby  --> null",
    level: "debug",
    timestamp: "2021-05-07T05:44:11.408Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:44:11.477Z",
  },
  {
    message: "DB findActiveLobbiesForUser userId 76561198003549651  --> []",
    level: "debug",
    timestamp: "2021-05-07T05:44:25.820Z",
  },
  {
    message:
      "DB findPendingLobby  --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:44:25.862Z",
  },
  {
    message:
      "DB addPlayer  player 76561198003549651  --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:44:25.899Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:44:25.938Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-07T05:44:25.940Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-07T05:44:25.941Z",
  },
  {
    message:
      "LobbyManager runLobby 6094d3abb603f65d0c78f870 STATE_WAITING_FOR_BOT STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-07T05:44:25.942Z",
  },
  {
    message:
      "DB findLobbyById _id 6094d3abb603f65d0c78f870   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:44:25.973Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-07T05:44:25.974Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 6094d3abb603f65d0c78f870,\n  players: [ '76561198003810536', '76561198003549651' ]\n}",
    level: "debug",
    timestamp: "2021-05-07T05:44:26.006Z",
  },
  {
    message:
      "validateLobbyPlayers 6094d3abb603f65d0c78f870 end STATE_WAITING_FOR_BOT to STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-07T05:44:26.007Z",
  },
  {
    message: "STATE_WAITING_FOR_BOT 6094d3abb603f65d0c78f870 undefined",
    level: "debug",
    timestamp: "2021-05-07T05:44:26.009Z",
  },
  {
    message: "DB findUnassignedBot   --> null",
    level: "debug",
    timestamp: "2021-05-07T05:44:26.046Z",
  },
  {
    message:
      "DB findOrCreateBot steamId64 76561199139099147 accountName dynastyesports personaName my*****Name password St3@mAccountToBu!dlovelyAPI69 --> {\n  status: 'BOT_OFFLINE',\n  lobbyCount: 0,\n  _id: 6094d3bab603f65d0c78f871,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T05:44:26.050Z,\n  updated_at: 2021-05-07T05:44:26.050Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T05:44:26.095Z",
  },
  {
    message: "lobby run findUnassignedBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-07T05:44:26.096Z",
  },
  {
    message:
      "DB assignBotToLobby lobby [object Object] botId 6094d3bab603f65d0c78f871  --> {\n  _id: 6094d3bab603f65d0c78f871,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T05:44:26.050Z,\n  updated_at: 2021-05-07T05:44:26.135Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T05:44:26.179Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_BOT_ASSIGNED',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871\n}",
    level: "debug",
    timestamp: "2021-05-07T05:44:26.218Z",
  },
  {
    message:
      "runLobby 6094d3abb603f65d0c78f870 STATE_WAITING_FOR_BOT to STATE_BOT_ASSIGNED",
    level: "debug",
    timestamp: "2021-05-07T05:44:26.219Z",
  },
  {
    message: "LobbyManager loadBotById 6094d3bab603f65d0c78f871",
    level: "debug",
    timestamp: "2021-05-07T05:44:26.220Z",
  },
  {
    message:
      "DB findBot  _id 6094d3bab603f65d0c78f871  --> {\n  _id: 6094d3bab603f65d0c78f871,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T05:44:26.050Z,\n  updated_at: 2021-05-07T05:44:26.135Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T05:44:26.253Z",
  },
  {
    message: "LobbyManager loadBot 6094d3bab603f65d0c78f871",
    level: "debug",
    timestamp: "2021-05-07T05:44:26.254Z",
  },
  {
    message: "LobbyManager getBot 6094d3bab603f65d0c78f871 ",
    level: "debug",
    timestamp: "2021-05-07T05:44:26.254Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_LOADING _id 6094d3bab603f65d0c78f871  --> {\n  _id: 6094d3bab603f65d0c78f871,\n  status: 'BOT_LOADING',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T05:44:26.050Z,\n  updated_at: 2021-05-07T05:44:26.255Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T05:44:26.288Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-07T05:44:26.292Z",
  },
  {
    message: "DotaBot connectDotaBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-07T05:44:26.293Z",
  },
  {
    message: "DotaBot connecting...",
    level: "debug",
    timestamp: "2021-05-07T05:44:26.294Z",
  },
  {
    message: "DotaBot logOnToSteam logging on steamUser...",
    level: "debug",
    timestamp: "2021-05-07T05:44:26.805Z",
  },
  {
    message: "DotaBot Received servers.",
    level: "debug",
    timestamp: "2021-05-07T05:44:27.549Z",
  },
  {
    message: "DotaBot set steam persona state and name.",
    level: "debug",
    timestamp: "2021-05-07T05:44:27.557Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-07T05:44:34.253Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-07T05:44:34.255Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-07T05:44:34.406Z",
  },
  {
    message: "Activating queue",
    level: "debug",
    timestamp: "2021-05-07T05:44:34.407Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-07T05:44:34.408Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-07T05:44:34.409Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_ONLINE steamId64 76561199139099147  --> {\n  _id: 6094d3bab603f65d0c78f871,\n  status: 'BOT_ONLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T05:44:26.050Z,\n  updated_at: 2021-05-07T05:44:34.410Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T05:44:34.448Z",
  },
  {
    message: "lobbyManager loadBot loaded",
    level: "debug",
    timestamp: "2021-05-07T05:44:34.450Z",
  },
  {
    message: "lobbyManager loadBot done",
    level: "debug",
    timestamp: "2021-05-07T05:44:34.450Z",
  },
  {
    message:
      "DotaBot createDotaBotLobby inhouse-lobby-6094d3abb603f65d0c78f870 hard-bat-70  DOTA_GAMEMODE_1V1MID 21  76561199139099147",
    level: "debug",
    timestamp: "2021-05-07T05:44:34.453Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-07T05:44:34.455Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-07T05:44:34.455Z",
  },
  {
    message:
      "DotaBot createPracticeLobby {\n  game_name: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  server_region: 5,\n  game_mode: 21,\n  series_type: 1,\n  game_version: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  allow_spectating: true,\n  pass_key: 'hard-bat-70',\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  visibility: 0,\n  cm_pick: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T05:44:34.458Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-07T05:44:34.466Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.004Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  null  lobby--> {\n  lobby_id: Long { low: 500471020, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'my*****Name',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'hard-bat-70',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [] ",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.026Z",
  },
  {
    message:
      "DotaBot practiceLobbyResponse { eresult: 1, debug_message: null }",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.032Z",
  },
  {
    message: "DotaBot createDotaBotLobby practice lobby created",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.038Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965935731948   --> null",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.067Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.dotaLobbyId 27184965935731948 not found. Bot 6094d3bab603f65d0c78f871 leaving lobby...",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.069Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_IN_LOBBY steamId64 76561199139099147  --> {\n  _id: 6094d3bab603f65d0c78f871,\n  status: 'BOT_IN_LOBBY',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T05:44:26.050Z,\n  updated_at: 2021-05-07T05:44:35.038Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.105Z",
  },
  {
    message: "DotaBot createDotaBotLobby bot status updated",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.106Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.107Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.108Z",
  },
  {
    message: "DotaBot practiceLobbyKickFromTeam 1178833419",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.108Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.116Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.553Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 500471020, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'my*****Name',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'hard-bat-70',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 500471020, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'hard-bat-70',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [] ",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.603Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.605Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'my*****Name',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.656Z",
  },
  {
    message:
      "membersToPlayerState playerState {} members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.666Z",
  },
  {
    message: "dotaBot isDotaLobbyReady teamCache [] playerState {} ",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.672Z",
  },
  {
    message:
      "DotaBot practiceLobbyResponse { eresult: 1, debug_message: null }",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.680Z",
  },
  {
    message:
      "DotaBot practiceLobbyKickFromTeam response undefined .CMsgGenericResult",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.681Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.687Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.689Z",
  },
  {
    message: "DotaBot joinChat Lobby_27184965935731948",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.690Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.698Z",
  },
  {
    message: "enterLobbyP dotaLobbyId: 27184965935731948",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.701Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965935731948   --> null",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.718Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.dotaLobbyId 27184965935731948 not found. Bot 6094d3bab603f65d0c78f871 leaving lobby...",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.719Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_BOT_STARTED',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.775Z",
  },
  {
    message: "updateLobby done. 6094d3abb603f65d0c78f870 STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.776Z",
  },
  {
    message:
      "STATE_BOT_ASSIGNED to STATE_BOT_STARTED 6094d3abb603f65d0c78f870 STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.778Z",
  },
  {
    message:
      "runLobby 6094d3abb603f65d0c78f870 STATE_BOT_ASSIGNED to STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.778Z",
  },
  {
    message: "LobbyManager getBot 6094d3bab603f65d0c78f871 ",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.779Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 6094d3abb603f65d0c78f870,\n  players: [ '76561198003810536', '76561198003549651' ]\n}",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.812Z",
  },
  {
    message:
      "lobby run STATE_BOT_STARTED lobbyState {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_BOT_STARTED',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: '6094d3bab603f65d0c78f871',\n  dotaLobbyId: '27184965935731948'\n} players [ '76561198003810536', '76561198003549651' ] ",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.814Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.816Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.818Z",
  },
  {
    message: "DotaBot inviteToLobby 76561198003810536",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.820Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.823Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.824Z",
  },
  {
    message: "DotaBot inviteToLobby 76561198003549651",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.825Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.829Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.872Z",
  },
  {
    message:
      "runLobby 6094d3abb603f65d0c78f870 STATE_BOT_STARTED to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.873Z",
  },
  {
    message: "LobbyManager getBot 6094d3bab603f65d0c78f871 ",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.874Z",
  },
  {
    message:
      "membersToPlayerState playerState {} members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.881Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003810536', '76561198003549651' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.883Z",
  },
  {
    message:
      "runLobby 6094d3abb603f65d0c78f870 STATE_WAITING_FOR_PLAYERS to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.886Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 8678",
    level: "debug",
    timestamp: "2021-05-07T05:44:35.904Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T05:47:01.955Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 500471020, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'hard-bat-70',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 500471020, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'Jujughost',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [ Long { low: 43544808, high: 17825793, unsigned: true } ],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'hard-bat-70',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198003810536', '76561198003549651' ] ",
    level: "debug",
    timestamp: "2021-05-07T05:47:01.999Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-07T05:47:01.999Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites 76561198003810536 newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'Jujughost',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] members {\n  left: [],\n  joined: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'Jujughost',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  changedSlot: []\n}",
    level: "debug",
    timestamp: "2021-05-07T05:47:02.023Z",
  },
  {
    message: "DotaBot processLobbyUpdate member joined 76561198003549651 ",
    level: "debug",
    timestamp: "2021-05-07T05:47:02.024Z",
  },
  {
    message:
      "membersToPlayerState playerState {} members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'Jujughost',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T05:47:02.073Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003810536', '76561198003549651' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-07T05:47:02.082Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965935731948   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:47:02.117Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T05:47:04.903Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 500471020, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'Jujughost',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [ Long { low: 43544808, high: 17825793, unsigned: true } ],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'hard-bat-70',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 500471020, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [ Long { low: 43544808, high: 17825793, unsigned: true } ],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'hard-bat-70',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198003810536', '76561198003549651' ] ",
    level: "debug",
    timestamp: "2021-05-07T05:47:04.953Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-07T05:47:04.954Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'Jujughost',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites 76561198003810536 newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-07T05:47:04.976Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198003549651': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T05:47:04.988Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003810536', '76561198003549651' ] playerState { '76561198003549651': 1 } ",
    level: "debug",
    timestamp: "2021-05-07T05:47:04.990Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965935731948   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:47:05.026Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T05:48:06.108Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 500471020, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [ Long { low: 43544808, high: 17825793, unsigned: true } ],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'hard-bat-70',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 500471020, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'cawo_14',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'hard-bat-70',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198003810536', '76561198003549651' ] ",
    level: "debug",
    timestamp: "2021-05-07T05:48:06.188Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-07T05:48:06.190Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'cawo_14',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] members {\n  left: [],\n  joined: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'cawo_14',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  changedSlot: []\n}",
    level: "debug",
    timestamp: "2021-05-07T05:48:06.240Z",
  },
  {
    message: "DotaBot processLobbyUpdate member joined 76561198003810536 ",
    level: "debug",
    timestamp: "2021-05-07T05:48:06.241Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198003549651': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'cawo_14',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T05:48:06.259Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003810536', '76561198003549651' ] playerState { '76561198003549651': 1 } ",
    level: "debug",
    timestamp: "2021-05-07T05:48:06.260Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965935731948   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:48:06.305Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.610Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 500471020, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'cawo_14',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'hard-bat-70',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 500471020, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'hard-bat-70',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198003810536', '76561198003549651' ] ",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.668Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.669Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'cawo_14',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.702Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198003549651': 1, '76561198003810536': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.736Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003810536', '76561198003549651' ] playerState { '76561198003549651': 1, '76561198003810536': 1 } ",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.737Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.738Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27184965935731948",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.740Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 0",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.741Z",
  },
  {
    message: "LobbyManager onLobbyReady 27184965935731948",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.743Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965935731948   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.791Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 6094d3abb603f65d0c78f870 inhouse-lobby-6094d3abb603f65d0c78f870",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.792Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.792Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.793Z",
  },
  {
    message:
      "LobbyManager runLobby 6094d3abb603f65d0c78f870 STATE_WAITING_FOR_PLAYERS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.794Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965935731948   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.800Z",
  },
  {
    message:
      "DB findLobbyById _id 6094d3abb603f65d0c78f870   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.831Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.832Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 6094d3abb603f65d0c78f870,\n  players: [ '76561198003810536', '76561198003549651' ]\n}",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.862Z",
  },
  {
    message:
      "validateLobbyPlayers 6094d3abb603f65d0c78f870 end STATE_WAITING_FOR_PLAYERS to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.863Z",
  },
  {
    message: "LobbyManager getBot 6094d3bab603f65d0c78f871 ",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.863Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198003549651': 1, '76561198003810536': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.880Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003810536', '76561198003549651' ] playerState { '76561198003549651': 1, '76561198003810536': 1 } ",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.881Z",
  },
  {
    message: "lobby run isDotaLobbyReady true",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.881Z",
  },
  {
    message:
      "LobbyManager onStartDotaLobby 6094d3abb603f65d0c78f870 6094d3bab603f65d0c78f871 STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.882Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.883Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.884Z",
  },
  {
    message: "DotaBot launchPracticeLobby",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.884Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-07T05:48:08.895Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.569Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 500471020, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'hard-bat-70',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 500471020, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 1,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1687557227, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'hard-bat-70',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 47727,\n      guild_primary_color: 0,\n      guild_secondary_color: 0,\n      guild_pattern: 0,\n      guild_logo: [Long],\n      guild_points: 125687,\n      guild_event: 19,\n      guild_flags: 1,\n      team_for_guild: 0,\n      guild_tag: 'D.G.',\n      guild_weekly_percentile: 91\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198003810536', '76561198003549651' ] ",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.660Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.660Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.703Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198003549651': 1, '76561198003810536': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.720Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003810536', '76561198003549651' ] playerState { '76561198003549651': 1, '76561198003810536': 1 } ",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.721Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.722Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27184965935731948",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.723Z",
  },
  {
    message:
      "DotaBot practiceLobbyResponse { eresult: 1, debug_message: null }",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.728Z",
  },
  {
    message: "DotaBot launchPracticeLobby response undefined",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.729Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.737Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.739Z",
  },
  {
    message: "DotaBot leaveChat Lobby_27184965935731948",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.740Z",
  },
  {
    message: "dota bot startDotaLobby matchId 5982524523",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.749Z",
  },
  {
    message: "LobbyManager onStartDotaLobby matchId 5982524523 leagueid ",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.750Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.754Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965935731948   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948'\n}",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.762Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948',\n  matchId: '5982524523',\n  startedAt: 2021-05-07T05:48:08.882Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.788Z",
  },
  {
    message: "matchTracker run false",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.789Z",
  },
  {
    message: "matchTracker setMatchDetails matchId 5982524523",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.790Z",
  },
  {
    message: "LobbyManager onStartDotaLobby true",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.790Z",
  },
  {
    message: "LobbyManager onStartDotaLobby false",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.791Z",
  },
  {
    message:
      "runLobby 6094d3abb603f65d0c78f870 STATE_WAITING_FOR_PLAYERS to STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.792Z",
  },
  {
    message:
      "runLobby 6094d3abb603f65d0c78f870 STATE_MATCH_IN_PROGRESS to STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.792Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 0",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.794Z",
  },
  {
    message: "LobbyManager onLobbyReady 27184965935731948",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.795Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965935731948   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948',\n  matchId: '5982524523',\n  startedAt: 2021-05-07T05:48:08.882Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.830Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 6094d3abb603f65d0c78f870 inhouse-lobby-6094d3abb603f65d0c78f870",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.831Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.831Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.832Z",
  },
  {
    message:
      "LobbyManager runLobby 6094d3abb603f65d0c78f870 STATE_MATCH_IN_PROGRESS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.832Z",
  },
  {
    message:
      "DB findLobbyById _id 6094d3abb603f65d0c78f870   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948',\n  matchId: '5982524523',\n  startedAt: 2021-05-07T05:48:08.882Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.839Z",
  },
  {
    message:
      "matchTracker setMatchDetails lobby.id 6094d3abb603f65d0c78f870 5982524523",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.839Z",
  },
  {
    message: "matchTracker getOpenDotaMatchDetails 5982524523",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.840Z",
  },
  {
    message:
      "DB findLobbyById _id 6094d3abb603f65d0c78f870   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948',\n  matchId: '5982524523',\n  startedAt: 2021-05-07T05:48:08.882Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.869Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-07T05:48:09.869Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 3001",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.009Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.016Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 500471020, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 1,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1687557227, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'hard-bat-70',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 47727,\n      guild_primary_color: 0,\n      guild_secondary_color: 0,\n      guild_pattern: 0,\n      guild_logo: [Long],\n      guild_points: 125687,\n      guild_event: 19,\n      guild_flags: 1,\n      team_for_guild: 0,\n      guild_tag: 'D.G.',\n      guild_weekly_percentile: 91\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 500471020, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: -1303039992, high: 20988831, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 1,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1687557227, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'hard-bat-70',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: 1620366489,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 47727,\n      guild_primary_color: 0,\n      guild_secondary_color: 0,\n      guild_pattern: 0,\n      guild_logo: [Long],\n      guild_points: 125687,\n      guild_event: 19,\n      guild_flags: 1,\n      team_for_guild: 0,\n      guild_tag: 'D.G.',\n      guild_weekly_percentile: 91\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198003810536', '76561198003549651' ] ",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.117Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.119Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.151Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198003549651': 1, '76561198003810536': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.168Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003810536', '76561198003549651' ] playerState { '76561198003549651': 1, '76561198003810536': 1 } ",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.170Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.171Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27184965935731948",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.173Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 0",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.174Z",
  },
  {
    message: "LobbyManager onLobbyReady 27184965935731948",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.174Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965935731948   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948',\n  matchId: '5982524523',\n  startedAt: 2021-05-07T05:48:08.882Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.213Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 6094d3abb603f65d0c78f870 inhouse-lobby-6094d3abb603f65d0c78f870",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.214Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.214Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.215Z",
  },
  {
    message:
      "LobbyManager runLobby 6094d3abb603f65d0c78f870 STATE_MATCH_IN_PROGRESS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.216Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965935731948   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948',\n  matchId: '5982524523',\n  startedAt: 2021-05-07T05:48:08.882Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.222Z",
  },
  {
    message:
      "DB findLobbyById _id 6094d3abb603f65d0c78f870   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948',\n  matchId: '5982524523',\n  startedAt: 2021-05-07T05:48:08.882Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.261Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.262Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7581",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.416Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.419Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 500471020, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: -1303039992, high: 20988831, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 1,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1687557227, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'hard-bat-70',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: 1620366489,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 47727,\n      guild_primary_color: 0,\n      guild_secondary_color: 0,\n      guild_pattern: 0,\n      guild_logo: [Long],\n      guild_points: 125687,\n      guild_event: 19,\n      guild_flags: 1,\n      team_for_guild: 0,\n      guild_tag: 'D.G.',\n      guild_weekly_percentile: 91\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 500471020, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: -1303039992, high: 20988831, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 2,\n  connect: '=[A:1:2991927304:17311]',\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1687557227, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'hard-bat-70',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: 1620366489,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 47727,\n      guild_primary_color: 0,\n      guild_secondary_color: 0,\n      guild_pattern: 0,\n      guild_logo: [Long],\n      guild_points: 125687,\n      guild_event: 19,\n      guild_flags: 1,\n      team_for_guild: 0,\n      guild_tag: 'D.G.',\n      guild_weekly_percentile: 91\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198003810536', '76561198003549651' ] ",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.497Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.498Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.548Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198003549651': 1, '76561198003810536': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.587Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003810536', '76561198003549651' ] playerState { '76561198003549651': 1, '76561198003810536': 1 } ",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.588Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.589Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27184965935731948",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.589Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 0",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.591Z",
  },
  {
    message: "LobbyManager onLobbyReady 27184965935731948",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.593Z",
  },
  {
    message: "matchTracker no data, queueing 6094d3abb603f65d0c78f870",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.611Z",
  },
  {
    message: "matchTracker looping",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.612Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965935731948   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948',\n  matchId: '5982524523',\n  startedAt: 2021-05-07T05:48:08.882Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.636Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 6094d3abb603f65d0c78f870 inhouse-lobby-6094d3abb603f65d0c78f870",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.637Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.638Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.639Z",
  },
  {
    message:
      "LobbyManager runLobby 6094d3abb603f65d0c78f870 STATE_MATCH_IN_PROGRESS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.639Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965935731948   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948',\n  matchId: '5982524523',\n  startedAt: 2021-05-07T05:48:08.882Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.644Z",
  },
  {
    message:
      "DB findLobbyById _id 6094d3abb603f65d0c78f870   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948',\n  matchId: '5982524523',\n  startedAt: 2021-05-07T05:48:08.882Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.676Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-07T05:48:10.676Z",
  },
  {
    message: "matchTracker run false",
    level: "debug",
    timestamp: "2021-05-07T05:48:11.615Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T05:57:30.079Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 500471020, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: -1303039992, high: 20988831, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 2,\n  connect: '=[A:1:2991927304:17311]',\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1687557227, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'hard-bat-70',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: 1620366489,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 47727,\n      guild_primary_color: 0,\n      guild_secondary_color: 0,\n      guild_pattern: 0,\n      guild_logo: [Long],\n      guild_points: 125687,\n      guild_event: 19,\n      guild_flags: 1,\n      team_for_guild: 0,\n      guild_tag: 'D.G.',\n      guild_weekly_percentile: 91\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 500471020, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: 105,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 3,\n      leaver_actions: 0,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: 23,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 0,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 2 ],\n  left_member_indices: [ 1 ],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: -1303039992, high: 20988831, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 2,\n  connect: '=[A:1:2991927304:17311]',\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 5,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1687557227, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'hard-bat-70',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: true,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: 1620366489,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 47727,\n      guild_primary_color: 0,\n      guild_secondary_color: 0,\n      guild_pattern: 0,\n      guild_logo: [Long],\n      guild_points: 125687,\n      guild_event: 19,\n      guild_flags: 1,\n      team_for_guild: 0,\n      guild_tag: 'D.G.',\n      guild_weekly_percentile: 91\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198003810536', '76561198003549651' ] ",
    level: "debug",
    timestamp: "2021-05-07T05:57:30.146Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-07T05:57:30.146Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: 105,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 3,\n    leaver_actions: 0,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: 23,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 0,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-07T05:57:30.189Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198003549651': 1, '76561198003810536': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: 105,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 3,\n    leaver_actions: 0,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: 23,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 0,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T05:57:30.206Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003810536', '76561198003549651' ] playerState { '76561198003549651': 1, '76561198003810536': 1 } ",
    level: "debug",
    timestamp: "2021-05-07T05:57:30.207Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-07T05:57:30.208Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27184965935731948",
    level: "debug",
    timestamp: "2021-05-07T05:57:30.208Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 0",
    level: "debug",
    timestamp: "2021-05-07T05:57:30.210Z",
  },
  {
    message: "LobbyManager onLobbyReady 27184965935731948",
    level: "debug",
    timestamp: "2021-05-07T05:57:30.213Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965935731948   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948',\n  matchId: '5982524523',\n  startedAt: 2021-05-07T05:48:08.882Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:57:30.251Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965935731948   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948',\n  matchId: '5982524523',\n  startedAt: 2021-05-07T05:48:08.882Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:57:30.254Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 6094d3abb603f65d0c78f870 inhouse-lobby-6094d3abb603f65d0c78f870",
    level: "debug",
    timestamp: "2021-05-07T05:57:30.255Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:57:30.256Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-07T05:57:30.257Z",
  },
  {
    message:
      "LobbyManager runLobby 6094d3abb603f65d0c78f870 STATE_MATCH_IN_PROGRESS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:57:30.257Z",
  },
  {
    message:
      "DB findLobbyById _id 6094d3abb603f65d0c78f870   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948',\n  matchId: '5982524523',\n  startedAt: 2021-05-07T05:48:08.882Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:57:30.297Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-07T05:57:30.298Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.381Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 500471020, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: 105,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 3,\n      leaver_actions: 0,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: 23,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 0,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 2 ],\n  left_member_indices: [ 1 ],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: -1303039992, high: 20988831, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 2,\n  connect: '=[A:1:2991927304:17311]',\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 5,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1687557227, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'hard-bat-70',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: true,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: 1620366489,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 47727,\n      guild_primary_color: 0,\n      guild_secondary_color: 0,\n      guild_pattern: 0,\n      guild_logo: [Long],\n      guild_points: 125687,\n      guild_event: 19,\n      guild_flags: 1,\n      team_for_guild: 0,\n      guild_tag: 'D.G.',\n      guild_weekly_percentile: 91\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 500471020, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: 105,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 3,\n      leaver_actions: 0,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: 23,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: 406,\n      meta_xp: 673,\n      meta_xp_awarded: 0,\n      leaver_status: 0,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 2 ],\n  left_member_indices: [ 1 ],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: -1303039992, high: 20988831, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 3,\n  connect: '=[A:1:2991927304:17311]',\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 6,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1687557227, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'hard-bat-70',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: true,\n  match_outcome: 2,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: 1620366489,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: 382,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 47727,\n      guild_primary_color: 0,\n      guild_secondary_color: 0,\n      guild_pattern: 0,\n      guild_logo: [Long],\n      guild_points: 125687,\n      guild_event: 19,\n      guild_flags: 1,\n      team_for_guild: 0,\n      guild_tag: 'D.G.',\n      guild_weekly_percentile: 91\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198003810536', '76561198003549651' ] ",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.453Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.455Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: 105,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 3,\n    leaver_actions: 0,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: 23,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 0,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: 105,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 3,\n    leaver_actions: 0,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: 23,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: 406,\n    meta_xp: 673,\n    meta_xp_awarded: 0,\n    leaver_status: 0,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.485Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198003549651': 1, '76561198003810536': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: 105,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 3,\n    leaver_actions: 0,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: 23,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: 406,\n    meta_xp: 673,\n    meta_xp_awarded: 0,\n    leaver_status: 0,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.502Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003810536', '76561198003549651' ] playerState { '76561198003549651': 1, '76561198003810536': 1 } ",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.504Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.504Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27184965935731948",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.505Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 0",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.505Z",
  },
  {
    message: "LobbyManager onLobbyReady 27184965935731948",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.508Z",
  },
  {
    message:
      "LobbyManager queueEvent onMatchOutcome 27184965935731948,2,.CSODOTALobbyMember,.CSODOTALobbyMember,.CSODOTALobbyMember",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.513Z",
  },
  {
    message: "dotaBot practiceLobbyCleared emitted",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.518Z",
  },
  {
    message: "LobbyManager queueEvent onBotLobbyLeft 6094d3bab603f65d0c78f871",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.518Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 8081",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.521Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965935731948   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948',\n  matchId: '5982524523',\n  startedAt: 2021-05-07T05:48:08.882Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.566Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965935731948   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948',\n  matchId: '5982524523',\n  startedAt: 2021-05-07T05:48:08.882Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.570Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 6094d3abb603f65d0c78f870 inhouse-lobby-6094d3abb603f65d0c78f870",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.571Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.572Z",
  },
  {
    message: "LobbyManager processEventQueue onMatchOutcome 2",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.572Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965935731948   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948',\n  matchId: '5982524523',\n  startedAt: 2021-05-07T05:48:08.882Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.605Z",
  },
  {
    message:
      "LobbyManager onMatchOutcome 27184965935731948 2 6094d3abb603f65d0c78f870",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.606Z",
  },
  {
    message:
      "DB findLobbyById _id 6094d3abb603f65d0c78f870   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948',\n  matchId: '5982524523',\n  startedAt: 2021-05-07T05:48:08.882Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.637Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 6094d3abb603f65d0c78f870,\n  players: [ '76561198003810536', '76561198003549651' ]\n}",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.671Z",
  },
  {
    message:
      "DB updateLobbyState  state STATE_MATCH_STATS --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_MATCH_STATS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948',\n  matchId: '5982524523',\n  startedAt: 2021-05-07T05:48:08.882Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.818Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_MATCH_STATS",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.818Z",
  },
  {
    message: "LobbyManager processEventQueue onBotLobbyLeft 2",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.819Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_IDLE _id 6094d3bab603f65d0c78f871  --> {\n  _id: 6094d3bab603f65d0c78f871,\n  status: 'BOT_IDLE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T05:44:26.050Z,\n  updated_at: 2021-05-07T05:57:31.820Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.858Z",
  },
  {
    message: "DB findAllLobbiesInState state STATE_WAITING_FOR_BOT  --> []",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.887Z",
  },
  {
    message: "LobbyManager onBotAvailable 0",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.887Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 1",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.888Z",
  },
  {
    message:
      "LobbyManager runLobby 6094d3abb603f65d0c78f870 STATE_MATCH_IN_PROGRESS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.888Z",
  },
  {
    message:
      "DB findLobbyById _id 6094d3abb603f65d0c78f870   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_MATCH_STATS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948',\n  matchId: '5982524523',\n  startedAt: 2021-05-07T05:48:08.882Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.920Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_MATCH_STATS",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.920Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.921Z",
  },
  {
    message:
      "LobbyManager runLobby 6094d3abb603f65d0c78f870 STATE_MATCH_IN_PROGRESS STATE_MATCH_STATS",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.921Z",
  },
  {
    message:
      "DB findLobbyById _id 6094d3abb603f65d0c78f870   --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_MATCH_STATS',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: 6094d3bab603f65d0c78f871,\n  dotaLobbyId: '27184965935731948',\n  matchId: '5982524523',\n  startedAt: 2021-05-07T05:48:08.882Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.974Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_MATCH_STATS",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.974Z",
  },
  {
    message:
      "validateLobbyPlayers 6094d3abb603f65d0c78f870 default STATE_MATCH_STATS",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.975Z",
  },
  {
    message:
      "validateLobbyStateBot invalid lobby state for bot detected. Bot 6094d3bab603f65d0c78f871 leaving lobbyState 6094d3abb603f65d0c78f870 STATE_MATCH_STATS.",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.976Z",
  },
  {
    message:
      "LobbyManager botLeaveLobby 6094d3abb603f65d0c78f870 6094d3bab603f65d0c78f871",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.978Z",
  },
  {
    message: "LobbyManager loadBotById 6094d3bab603f65d0c78f871",
    level: "debug",
    timestamp: "2021-05-07T05:57:31.978Z",
  },
  {
    message:
      "DB findBot  _id 6094d3bab603f65d0c78f871  --> {\n  _id: 6094d3bab603f65d0c78f871,\n  status: 'BOT_IDLE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T05:44:26.050Z,\n  updated_at: 2021-05-07T05:57:31.820Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T05:57:32.008Z",
  },
  {
    message: "LobbyManager loadBot 6094d3bab603f65d0c78f871",
    level: "debug",
    timestamp: "2021-05-07T05:57:32.009Z",
  },
  {
    message: "LobbyManager getBot 6094d3bab603f65d0c78f871 ",
    level: "debug",
    timestamp: "2021-05-07T05:57:32.009Z",
  },
  {
    message: "lobbyManager loadBot done",
    level: "debug",
    timestamp: "2021-05-07T05:57:32.010Z",
  },
  {
    message:
      "DB unassignBotFromLobby lobby [object Object] botId 6094d3bab603f65d0c78f871  --> {\n  _id: 6094d3bab603f65d0c78f871,\n  status: 'BOT_IDLE',\n  lobbyCount: 0,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T05:44:26.050Z,\n  updated_at: 2021-05-07T05:57:32.042Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T05:57:32.077Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 6094d3abb603f65d0c78f870,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003810536', '76561198003549651' ],\n  state: 'STATE_COMPLETED',\n  password: 'hard-bat-70',\n  createdOn: 2021-05-07T05:44:11.409Z,\n  updatedOn: 2021-05-07T05:44:11.409Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094d3abb603f65d0c78f870',\n  botId: null,\n  dotaLobbyId: null,\n  matchId: '5982524523',\n  startedAt: 2021-05-07T05:48:08.882Z\n}",
    level: "debug",
    timestamp: "2021-05-07T05:57:32.116Z",
  },
  {
    message: "LobbyManager botLeaveLobby 6094d3abb603f65d0c78f870 null",
    level: "debug",
    timestamp: "2021-05-07T05:57:32.117Z",
  },
  {
    message:
      "runLobby 6094d3abb603f65d0c78f870 STATE_MATCH_STATS to STATE_COMPLETED",
    level: "debug",
    timestamp: "2021-05-07T05:57:32.118Z",
  },
  {
    message:
      "runLobby 6094d3abb603f65d0c78f870 STATE_COMPLETED to STATE_COMPLETED",
    level: "debug",
    timestamp: "2021-05-07T05:57:32.118Z",
  },
];
