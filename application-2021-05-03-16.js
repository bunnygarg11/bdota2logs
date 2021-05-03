let b = [
  ,
  {
    message: "DB findActiveLobbiesForUser userId 76561198177128005  --> []",
    level: "debug",
    timestamp: "2021-05-03T10:53:56.411Z",
  },
  {
    message: "DB findPendingLobby  --> null",
    level: "debug",
    timestamp: "2021-05-03T10:53:56.461Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608fd644f47f5c29e005ff5a,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'stale-lion-9',\n  createdOn: 2021-05-03T10:53:56.470Z,\n  updatedOn: 2021-05-03T10:53:56.470Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fd644f47f5c29e005ff5a'\n}",
    level: "debug",
    timestamp: "2021-05-03T10:53:56.555Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608fd644f47f5c29e005ff5a,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'stale-lion-9',\n  createdOn: 2021-05-03T10:53:56.470Z,\n  updatedOn: 2021-05-03T10:53:56.470Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fd644f47f5c29e005ff5a'\n}",
    level: "debug",
    timestamp: "2021-05-03T10:53:56.589Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-03T10:53:56.590Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-03T10:53:56.591Z",
  },
  {
    message:
      "LobbyManager runLobby 608fd644f47f5c29e005ff5a STATE_WAITING_FOR_BOT STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-03T10:53:56.592Z",
  },
  {
    message:
      "DB findLobbyById _id 608fd644f47f5c29e005ff5a   --> {\n  _id: 608fd644f47f5c29e005ff5a,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'stale-lion-9',\n  createdOn: 2021-05-03T10:53:56.470Z,\n  updatedOn: 2021-05-03T10:53:56.470Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fd644f47f5c29e005ff5a'\n}",
    level: "debug",
    timestamp: "2021-05-03T10:53:56.623Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-03T10:53:56.625Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> { _id: 608fd644f47f5c29e005ff5a, players: [ '76561198177128005' ] }",
    level: "debug",
    timestamp: "2021-05-03T10:53:56.653Z",
  },
  {
    message:
      "validateLobbyPlayers 608fd644f47f5c29e005ff5a end STATE_WAITING_FOR_BOT to STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-03T10:53:56.655Z",
  },
  {
    message: "STATE_WAITING_FOR_BOT 608fd644f47f5c29e005ff5a undefined",
    level: "debug",
    timestamp: "2021-05-03T10:53:56.656Z",
  },
  {
    message:
      "DB findUnassignedBot   --> {\n  _id: 608fbcc99494403b24fe8ec5,\n  status: 'BOT_IDLE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-03T09:05:13.761Z,\n  updated_at: 2021-05-03T09:10:13.143Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-03T10:53:56.688Z",
  },
  {
    message: "lobby run findUnassignedBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-03T10:53:56.689Z",
  },
  {
    message:
      "DB assignBotToLobby lobby [object Object] botId 608fbcc99494403b24fe8ec5  --> {\n  _id: 608fbcc99494403b24fe8ec5,\n  status: 'BOT_IDLE',\n  lobbyCount: 2,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-03T09:05:13.761Z,\n  updated_at: 2021-05-03T10:53:56.734Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-03T10:53:56.770Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608fd644f47f5c29e005ff5a,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_BOT_ASSIGNED',\n  password: 'stale-lion-9',\n  createdOn: 2021-05-03T10:53:56.470Z,\n  updatedOn: 2021-05-03T10:53:56.470Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  botId: 608fbcc99494403b24fe8ec5\n}",
    level: "debug",
    timestamp: "2021-05-03T10:53:56.821Z",
  },
  {
    message:
      "runLobby 608fd644f47f5c29e005ff5a STATE_WAITING_FOR_BOT to STATE_BOT_ASSIGNED",
    level: "debug",
    timestamp: "2021-05-03T10:53:56.823Z",
  },
  {
    message: "LobbyManager loadBotById 608fbcc99494403b24fe8ec5",
    level: "debug",
    timestamp: "2021-05-03T10:53:56.824Z",
  },
  {
    message:
      "DB findBot  _id 608fbcc99494403b24fe8ec5  --> {\n  _id: 608fbcc99494403b24fe8ec5,\n  status: 'BOT_IDLE',\n  lobbyCount: 2,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-03T09:05:13.761Z,\n  updated_at: 2021-05-03T10:53:56.734Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-03T10:53:56.857Z",
  },
  {
    message: "LobbyManager loadBot 608fbcc99494403b24fe8ec5",
    level: "debug",
    timestamp: "2021-05-03T10:53:56.858Z",
  },
  {
    message: "LobbyManager getBot 608fbcc99494403b24fe8ec5 ",
    level: "debug",
    timestamp: "2021-05-03T10:53:56.858Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_LOADING _id 608fbcc99494403b24fe8ec5  --> {\n  _id: 608fbcc99494403b24fe8ec5,\n  status: 'BOT_LOADING',\n  lobbyCount: 2,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-03T09:05:13.761Z,\n  updated_at: 2021-05-03T10:53:56.859Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-03T10:53:56.892Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-03T10:53:56.896Z",
  },
  {
    message: "DotaBot connectDotaBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-03T10:53:56.897Z",
  },
  {
    message: "DotaBot connecting...",
    level: "debug",
    timestamp: "2021-05-03T10:53:56.900Z",
  },
  {
    message: "DotaBot logOnToSteam logging on steamUser...",
    level: "debug",
    timestamp: "2021-05-03T10:53:57.467Z",
  },
  {
    message: "DotaBot set steam persona state and name.",
    level: "debug",
    timestamp: "2021-05-03T10:53:58.465Z",
  },
  {
    message: "DotaBot Received servers.",
    level: "debug",
    timestamp: "2021-05-03T10:53:58.495Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-03T10:54:00.321Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-03T10:54:00.325Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-03T10:54:00.433Z",
  },
  {
    message: "Activating queue",
    level: "debug",
    timestamp: "2021-05-03T10:54:00.434Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T10:54:00.434Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-03T10:54:00.436Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_ONLINE steamId64 76561199139099147  --> {\n  _id: 608fbcc99494403b24fe8ec5,\n  status: 'BOT_ONLINE',\n  lobbyCount: 2,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-03T09:05:13.761Z,\n  updated_at: 2021-05-03T10:54:00.437Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-03T10:54:00.469Z",
  },
  {
    message: "ihlManager loadBot loaded",
    level: "debug",
    timestamp: "2021-05-03T10:54:00.473Z",
  },
  {
    message: "ihlManager loadBot done",
    level: "debug",
    timestamp: "2021-05-03T10:54:00.474Z",
  },
  {
    message:
      "DotaBot createDotaBotLobby inhouse-lobby-608fd644f47f5c29e005ff5a stale-lion-9  DOTA_GAMEMODE_1V1MID 21  76561199139099147",
    level: "debug",
    timestamp: "2021-05-03T10:54:00.475Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-03T10:54:00.476Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-03T10:54:00.476Z",
  },
  {
    message:
      "DotaBot createPracticeLobby {\n  game_name: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  server_region: 5,\n  game_mode: 21,\n  series_type: 1,\n  game_version: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  allow_spectating: true,\n  pass_key: 'stale-lion-9',\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  visibility: 0,\n  cm_pick: 0\n}",
    level: "debug",
    timestamp: "2021-05-03T10:54:00.480Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T10:54:00.486Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.025Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  null  lobby {\n  lobby_id: Long { low: -1201070342, high: 6327475, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'my*****Name',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'stale-lion-9',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [] ",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.098Z",
  },
  {
    message:
      "DotaBot practiceLobbyResponse { eresult: 1, debug_message: null }",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.121Z",
  },
  {
    message: "DotaBot createDotaBotLobby practice lobby created",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.130Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176301285154554   --> null",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.150Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.dotaLobbyId 27176301285154554 not found. Bot 608fbcc99494403b24fe8ec5 leaving lobby...",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.152Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_IN_LOBBY steamId64 76561199139099147  --> {\n  _id: 608fbcc99494403b24fe8ec5,\n  status: 'BOT_IN_LOBBY',\n  lobbyCount: 2,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-03T09:05:13.761Z,\n  updated_at: 2021-05-03T10:54:01.132Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.182Z",
  },
  {
    message: "DotaBot createDotaBotLobby bot status updated",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.183Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.184Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.185Z",
  },
  {
    message: "DotaBot practiceLobbyKickFromTeam 1178833419",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.186Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.189Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.723Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: -1201070342, high: 6327475, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'my*****Name',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'stale-lion-9',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby {\n  lobby_id: Long { low: -1201070342, high: 6327475, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'stale-lion-9',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [] ",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.803Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.807Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'my*****Name',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.856Z",
  },
  {
    message:
      "membersToPlayerState playerState {} members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.866Z",
  },
  {
    message: "dotaBot isDotaLobbyReady teamCache [] playerState {} ",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.867Z",
  },
  {
    message:
      "DotaBot practiceLobbyResponse { eresult: 1, debug_message: null }",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.869Z",
  },
  {
    message:
      "DotaBot practiceLobbyKickFromTeam response undefined .CMsgGenericResult",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.870Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.873Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.873Z",
  },
  {
    message: "DotaBot joinChat Lobby_27176301285154554",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.874Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.889Z",
  },
  {
    message: "enterLobbyP dotaLobbyId: 27176301285154554",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.892Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176301285154554   --> null",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.904Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.dotaLobbyId 27176301285154554 not found. Bot 608fbcc99494403b24fe8ec5 leaving lobby...",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.904Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608fd644f47f5c29e005ff5a,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_BOT_STARTED',\n  password: 'stale-lion-9',\n  createdOn: 2021-05-03T10:53:56.470Z,\n  updatedOn: 2021-05-03T10:53:56.470Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301285154554'\n}",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.938Z",
  },
  {
    message: "updateLobby done. 608fd644f47f5c29e005ff5a STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.940Z",
  },
  {
    message:
      "STATE_BOT_ASSIGNED to STATE_BOT_STARTED 608fd644f47f5c29e005ff5a STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.941Z",
  },
  {
    message:
      "runLobby 608fd644f47f5c29e005ff5a STATE_BOT_ASSIGNED to STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.941Z",
  },
  {
    message: "LobbyManager getBot 608fbcc99494403b24fe8ec5 ",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.942Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> { _id: 608fd644f47f5c29e005ff5a, players: [ '76561198177128005' ] }",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.970Z",
  },
  {
    message:
      "lobby run STATE_BOT_STARTED lobbyState {\n  _id: 608fd644f47f5c29e005ff5a,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_BOT_STARTED',\n  password: 'stale-lion-9',\n  createdOn: 2021-05-03T10:53:56.470Z,\n  updatedOn: 2021-05-03T10:53:56.470Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  botId: '608fbcc99494403b24fe8ec5',\n  dotaLobbyId: '27176301285154554'\n} players [ '76561198177128005' ] ",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.973Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.974Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.975Z",
  },
  {
    message: "DotaBot inviteToLobby 76561198177128005",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.976Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T10:54:01.986Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608fd644f47f5c29e005ff5a,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'stale-lion-9',\n  createdOn: 2021-05-03T10:53:56.470Z,\n  updatedOn: 2021-05-03T10:53:56.470Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301285154554'\n}",
    level: "debug",
    timestamp: "2021-05-03T10:54:02.057Z",
  },
  {
    message:
      "runLobby 608fd644f47f5c29e005ff5a STATE_BOT_STARTED to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T10:54:02.058Z",
  },
  {
    message: "LobbyManager getBot 608fbcc99494403b24fe8ec5 ",
    level: "debug",
    timestamp: "2021-05-03T10:54:02.059Z",
  },
  {
    message:
      "membersToPlayerState playerState {} members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-03T10:54:02.069Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-03T10:54:02.070Z",
  },
  {
    message:
      "runLobby 608fd644f47f5c29e005ff5a STATE_WAITING_FOR_PLAYERS to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T10:54:02.070Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 8678",
    level: "debug",
    timestamp: "2021-05-03T10:54:03.021Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-03T10:57:30.030Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: -1201070342, high: 6327475, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'stale-lion-9',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby {\n  lobby_id: Long { low: -1201070342, high: 6327475, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'dEkU',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'stale-lion-9',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198177128005' ] ",
    level: "debug",
    timestamp: "2021-05-03T10:57:30.125Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-03T10:57:30.126Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'dEkU',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] members {\n  left: [],\n  joined: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'dEkU',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  changedSlot: []\n}",
    level: "debug",
    timestamp: "2021-05-03T10:57:30.153Z",
  },
  {
    message: "DotaBot processLobbyUpdate member joined 76561198177128005 ",
    level: "debug",
    timestamp: "2021-05-03T10:57:30.154Z",
  },
  {
    message:
      "membersToPlayerState playerState {} members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'dEkU',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-03T10:57:30.213Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-03T10:57:30.223Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176301285154554   --> {\n  _id: 608fd644f47f5c29e005ff5a,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'stale-lion-9',\n  createdOn: 2021-05-03T10:53:56.470Z,\n  updatedOn: 2021-05-03T10:53:56.470Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301285154554'\n}",
    level: "debug",
    timestamp: "2021-05-03T10:57:30.263Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.041Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: -1201070342, high: 6327475, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'dEkU',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'stale-lion-9',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby {\n  lobby_id: Long { low: -1201070342, high: 6327475, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'dEkU',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'stale-lion-9',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198177128005' ] ",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.162Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.163Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'dEkU',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.269Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198177128005': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.286Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005' ] playerState { '76561198177128005': 1 } ",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.288Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.290Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27176301285154554",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.292Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 0",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.293Z",
  },
  {
    message: "LobbyManager onLobbyReady 27176301285154554",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.294Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176301285154554   --> {\n  _id: 608fd644f47f5c29e005ff5a,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'stale-lion-9',\n  createdOn: 2021-05-03T10:53:56.470Z,\n  updatedOn: 2021-05-03T10:53:56.470Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301285154554'\n}",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.333Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176301285154554   --> {\n  _id: 608fd644f47f5c29e005ff5a,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'stale-lion-9',\n  createdOn: 2021-05-03T10:53:56.470Z,\n  updatedOn: 2021-05-03T10:53:56.470Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301285154554'\n}",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.339Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 608fd644f47f5c29e005ff5a inhouse-lobby-608fd644f47f5c29e005ff5a",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.340Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.341Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.342Z",
  },
  {
    message:
      "LobbyManager runLobby 608fd644f47f5c29e005ff5a STATE_WAITING_FOR_PLAYERS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.342Z",
  },
  {
    message:
      "DB findLobbyById _id 608fd644f47f5c29e005ff5a   --> {\n  _id: 608fd644f47f5c29e005ff5a,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'stale-lion-9',\n  createdOn: 2021-05-03T10:53:56.470Z,\n  updatedOn: 2021-05-03T10:53:56.470Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301285154554'\n}",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.440Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.481Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> { _id: 608fd644f47f5c29e005ff5a, players: [ '76561198177128005' ] }",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.513Z",
  },
  {
    message:
      "validateLobbyPlayers 608fd644f47f5c29e005ff5a end STATE_WAITING_FOR_PLAYERS to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.514Z",
  },
  {
    message: "LobbyManager getBot 608fbcc99494403b24fe8ec5 ",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.515Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198177128005': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.531Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005' ] playerState { '76561198177128005': 1 } ",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.532Z",
  },
  {
    message: "lobby run isDotaLobbyReady true",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.533Z",
  },
  {
    message:
      "LobbyManager onStartDotaLobby 608fd644f47f5c29e005ff5a 608fbcc99494403b24fe8ec5 STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.534Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.536Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.537Z",
  },
  {
    message: "DotaBot launchPracticeLobby",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.538Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T10:57:42.547Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.243Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: -1201070342, high: 6327475, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'dEkU',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'stale-lion-9',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby {\n  lobby_id: Long { low: -1201070342, high: 6327475, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'dEkU',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 20987,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 1,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1681607585, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'stale-lion-9',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 20987,\n      guild_primary_color: 3,\n      guild_secondary_color: 1,\n      guild_pattern: 5,\n      guild_logo: [Long],\n      guild_points: 77579,\n      guild_event: 19,\n      guild_flags: 0,\n      team_for_guild: 0,\n      guild_tag: 'ATMA',\n      guild_weekly_percentile: 89\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198177128005' ] ",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.455Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.472Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 20987,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.509Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198177128005': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 20987,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.589Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005' ] playerState { '76561198177128005': 1 } ",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.597Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.598Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27176301285154554",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.602Z",
  },
  {
    message:
      "DotaBot practiceLobbyResponse { eresult: 1, debug_message: null }",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.616Z",
  },
  {
    message: "DotaBot launchPracticeLobby response undefined",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.618Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.623Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.623Z",
  },
  {
    message: "DotaBot leaveChat Lobby_27176301285154554",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.624Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.629Z",
  },
  {
    message: "dota bot startDotaLobby matchId 5976574881",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.630Z",
  },
  {
    message: "LobbyManager onStartDotaLobby matchId 5976574881 leagueid ",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.632Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176301285154554   --> {\n  _id: 608fd644f47f5c29e005ff5a,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'stale-lion-9',\n  createdOn: 2021-05-03T10:53:56.470Z,\n  updatedOn: 2021-05-03T10:53:56.470Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301285154554'\n}",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.648Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 3001",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.689Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.693Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: -1201070342, high: 6327475, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'dEkU',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 20987,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 1,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1681607585, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'stale-lion-9',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 20987,\n      guild_primary_color: 3,\n      guild_secondary_color: 1,\n      guild_pattern: 5,\n      guild_logo: [Long],\n      guild_points: 77579,\n      guild_event: 19,\n      guild_flags: 0,\n      team_for_guild: 0,\n      guild_tag: 'ATMA',\n      guild_weekly_percentile: 89\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  lobby {\n  lobby_id: Long { low: -1201070342, high: 6327475, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'dEkU',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 20987,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 601110528, high: 20988796, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 1,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1681607585, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'stale-lion-9',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: 1620039462,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 20987,\n      guild_primary_color: 3,\n      guild_secondary_color: 1,\n      guild_pattern: 5,\n      guild_logo: [Long],\n      guild_points: 77579,\n      guild_event: 19,\n      guild_flags: 0,\n      team_for_guild: 0,\n      guild_tag: 'ATMA',\n      guild_weekly_percentile: 89\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198177128005' ] ",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.863Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.864Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 20987,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 20987,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.924Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198177128005': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 20987,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.940Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005' ] playerState { '76561198177128005': 1 } ",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.959Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.960Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27176301285154554",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.961Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608fd644f47f5c29e005ff5a,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'stale-lion-9',\n  createdOn: 2021-05-03T10:53:56.470Z,\n  updatedOn: 2021-05-03T10:53:56.470Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301285154554',\n  matchId: '5976574881',\n  startedAt: 2021-05-03T10:57:42.534Z\n}",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.966Z",
  },
  {
    message: "matchTracker run false",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.968Z",
  },
  {
    message: "matchTracker setMatchDetails matchId undefined",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.969Z",
  },
  {
    message: "ihlManager onStartDotaLobby true",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.970Z",
  },
  {
    message: "ihlManager onStartDotaLobby false",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.971Z",
  },
  {
    message:
      "runLobby 608fd644f47f5c29e005ff5a STATE_WAITING_FOR_PLAYERS to STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.972Z",
  },
  {
    message:
      "runLobby 608fd644f47f5c29e005ff5a STATE_MATCH_IN_PROGRESS to STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.972Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 1",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.973Z",
  },
  {
    message: "LobbyManager onLobbyReady 27176301285154554",
    level: "debug",
    timestamp: "2021-05-03T10:57:43.973Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176301285154554   --> {\n  _id: 608fd644f47f5c29e005ff5a,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'stale-lion-9',\n  createdOn: 2021-05-03T10:53:56.470Z,\n  updatedOn: 2021-05-03T10:53:56.470Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301285154554',\n  matchId: '5976574881',\n  startedAt: 2021-05-03T10:57:42.534Z\n}",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.000Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.state STATE_MATCH_IN_PROGRESS invalid. Bot 608fbcc99494403b24fe8ec5 leaving lobby...",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.001Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.003Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.005Z",
  },
  {
    message: "DotaBot leavePracticeLobby",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.006Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.009Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176301285154554   --> {\n  _id: 608fd644f47f5c29e005ff5a,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'stale-lion-9',\n  createdOn: 2021-05-03T10:53:56.470Z,\n  updatedOn: 2021-05-03T10:53:56.470Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301285154554',\n  matchId: '5976574881',\n  startedAt: 2021-05-03T10:57:42.534Z\n}",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.027Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 608fd644f47f5c29e005ff5a inhouse-lobby-608fd644f47f5c29e005ff5a",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.027Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.028Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 1",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.028Z",
  },
  {
    message: "LobbyManager onLobbyReady 27176301285154554",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.029Z",
  },
  {
    message: "DB findLobbyById _id undefined   --> null",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.030Z",
  },
  {
    level: "error",
    message:
      "TypeError: Cannot read property 'id' of null - trace: at setMatchDetails (D:\\mohit\\blocks\\bexpressserver\\btest\\server\\services\\dotaBot\\matchTracker.js:94:52)\n    at processTicksAndRejections (internal/process/task_queues.js:93:5)\n    at async MatchTracker.run (D:\\mohit\\blocks\\bexpressserver\\btest\\server\\services\\dotaBot\\matchTracker.js:301:23)",
    timestamp: "2021-05-03T10:57:44.034Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176301285154554   --> {\n  _id: 608fd644f47f5c29e005ff5a,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'stale-lion-9',\n  createdOn: 2021-05-03T10:53:56.470Z,\n  updatedOn: 2021-05-03T10:53:56.470Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301285154554',\n  matchId: '5976574881',\n  startedAt: 2021-05-03T10:57:42.534Z\n}",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.075Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 608fd644f47f5c29e005ff5a inhouse-lobby-608fd644f47f5c29e005ff5a",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.076Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.077Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 1",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.078Z",
  },
  {
    message:
      "LobbyManager runLobby 608fd644f47f5c29e005ff5a STATE_MATCH_IN_PROGRESS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.079Z",
  },
  {
    message:
      "DB findLobbyById _id 608fd644f47f5c29e005ff5a   --> {\n  _id: 608fd644f47f5c29e005ff5a,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'stale-lion-9',\n  createdOn: 2021-05-03T10:53:56.470Z,\n  updatedOn: 2021-05-03T10:53:56.470Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301285154554',\n  matchId: '5976574881',\n  startedAt: 2021-05-03T10:57:42.534Z\n}",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.109Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.109Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.110Z",
  },
  {
    message:
      "LobbyManager runLobby 608fd644f47f5c29e005ff5a STATE_MATCH_IN_PROGRESS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.111Z",
  },
  {
    message:
      "DB findLobbyById _id 608fd644f47f5c29e005ff5a   --> {\n  _id: 608fd644f47f5c29e005ff5a,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'stale-lion-9',\n  createdOn: 2021-05-03T10:53:56.470Z,\n  updatedOn: 2021-05-03T10:53:56.470Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301285154554',\n  matchId: '5976574881',\n  startedAt: 2021-05-03T10:57:42.534Z\n}",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.139Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.140Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7581",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.233Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.236Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: -1201070342, high: 6327475, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'dEkU',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 20987,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 601110528, high: 20988796, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 1,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1681607585, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'stale-lion-9',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: 1620039462,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 20987,\n      guild_primary_color: 3,\n      guild_secondary_color: 1,\n      guild_pattern: 5,\n      guild_logo: [Long],\n      guild_points: 77579,\n      guild_event: 19,\n      guild_flags: 0,\n      team_for_guild: 0,\n      guild_tag: 'ATMA',\n      guild_weekly_percentile: 89\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  lobby {\n  lobby_id: Long { low: -1201070342, high: 6327475, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'dEkU',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 20987,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 601110528, high: 20988796, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 2,\n  connect: '=[A:1:601110528:17276]',\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1681607585, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'stale-lion-9',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: 1620039462,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 20987,\n      guild_primary_color: 3,\n      guild_secondary_color: 1,\n      guild_pattern: 5,\n      guild_logo: [Long],\n      guild_points: 77579,\n      guild_event: 19,\n      guild_flags: 0,\n      team_for_guild: 0,\n      guild_tag: 'ATMA',\n      guild_weekly_percentile: 89\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198177128005' ] ",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.348Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.349Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 20987,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 20987,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.374Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198177128005': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 20987,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.411Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005' ] playerState { '76561198177128005': 1 } ",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.412Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.413Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27176301285154554",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.414Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 0",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.415Z",
  },
  {
    message: "LobbyManager onLobbyReady 27176301285154554",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.415Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176301285154554   --> {\n  _id: 608fd644f47f5c29e005ff5a,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'stale-lion-9',\n  createdOn: 2021-05-03T10:53:56.470Z,\n  updatedOn: 2021-05-03T10:53:56.470Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301285154554',\n  matchId: '5976574881',\n  startedAt: 2021-05-03T10:57:42.534Z\n}",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.450Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 608fd644f47f5c29e005ff5a inhouse-lobby-608fd644f47f5c29e005ff5a",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.450Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.451Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.452Z",
  },
  {
    message:
      "LobbyManager runLobby 608fd644f47f5c29e005ff5a STATE_MATCH_IN_PROGRESS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.453Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176301285154554   --> {\n  _id: 608fd644f47f5c29e005ff5a,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'stale-lion-9',\n  createdOn: 2021-05-03T10:53:56.470Z,\n  updatedOn: 2021-05-03T10:53:56.470Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301285154554',\n  matchId: '5976574881',\n  startedAt: 2021-05-03T10:57:42.534Z\n}",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.464Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.state STATE_MATCH_IN_PROGRESS invalid. Bot 608fbcc99494403b24fe8ec5 leaving lobby...",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.465Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.465Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.466Z",
  },
  {
    message: "DotaBot leavePracticeLobby",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.466Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.470Z",
  },
  {
    message:
      "DB findLobbyById _id 608fd644f47f5c29e005ff5a   --> {\n  _id: 608fd644f47f5c29e005ff5a,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'stale-lion-9',\n  createdOn: 2021-05-03T10:53:56.470Z,\n  updatedOn: 2021-05-03T10:53:56.470Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301285154554',\n  matchId: '5976574881',\n  startedAt: 2021-05-03T10:57:42.534Z\n}",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.499Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.499Z",
  },
  {
    message:
      "DotaBot practiceLobbyResponse { eresult: 2, debug_message: null }",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.537Z",
  },
  {
    message: "DotaBot leavePracticeLobby response undefined .CMsgGenericResult",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.538Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.538Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.539Z",
  },
  {
    message: "DotaBot leaveChat Lobby_27176301285154554",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.539Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.541Z",
  },
  {
    message:
      "DotaBot practiceLobbyResponse { eresult: 2, debug_message: null }",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.980Z",
  },
  {
    message: "DotaBot leavePracticeLobby response undefined .CMsgGenericResult",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.981Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.982Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.982Z",
  },
  {
    message: "DotaBot leaveChat Lobby_27176301285154554",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.983Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T10:57:44.985Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-03T10:58:14.832Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: -1201070342, high: 6327475, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'dEkU',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 20987,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 601110528, high: 20988796, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 2,\n  connect: '=[A:1:601110528:17276]',\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1681607585, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'stale-lion-9',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: 1620039462,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 20987,\n      guild_primary_color: 3,\n      guild_secondary_color: 1,\n      guild_pattern: 5,\n      guild_logo: [Long],\n      guild_points: 77579,\n      guild_event: 19,\n      guild_flags: 0,\n      team_for_guild: 0,\n      guild_tag: 'ATMA',\n      guild_weekly_percentile: 89\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  lobby {\n  lobby_id: Long { low: -1201070342, high: 6327475, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'dEkU',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 20987,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'stale-lion-9',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: 1620039462,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 20987,\n      guild_primary_color: 3,\n      guild_secondary_color: 1,\n      guild_pattern: 5,\n      guild_logo: [Long],\n      guild_points: 77579,\n      guild_event: 19,\n      guild_flags: 0,\n      team_for_guild: 0,\n      guild_tag: 'ATMA',\n      guild_weekly_percentile: 89\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198177128005' ] ",
    level: "debug",
    timestamp: "2021-05-03T10:58:14.950Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-03T10:58:14.951Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 20987,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 20987,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.057Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198177128005': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 216862277, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'dEkU',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 20987,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.080Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198177128005' ] playerState { '76561198177128005': 1 } ",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.084Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.085Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27176301285154554",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.090Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 0",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.091Z",
  },
  {
    message: "LobbyManager onLobbyReady 27176301285154554",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.093Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176301285154554   --> {\n  _id: 608fd644f47f5c29e005ff5a,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'stale-lion-9',\n  createdOn: 2021-05-03T10:53:56.470Z,\n  updatedOn: 2021-05-03T10:53:56.470Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301285154554',\n  matchId: '5976574881',\n  startedAt: 2021-05-03T10:57:42.534Z\n}",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.124Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.state STATE_MATCH_IN_PROGRESS invalid. Bot 608fbcc99494403b24fe8ec5 leaving lobby...",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.125Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.126Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.126Z",
  },
  {
    message: "DotaBot leavePracticeLobby",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.127Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176301285154554   --> {\n  _id: 608fd644f47f5c29e005ff5a,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'stale-lion-9',\n  createdOn: 2021-05-03T10:53:56.470Z,\n  updatedOn: 2021-05-03T10:53:56.470Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301285154554',\n  matchId: '5976574881',\n  startedAt: 2021-05-03T10:57:42.534Z\n}",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.136Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 608fd644f47f5c29e005ff5a inhouse-lobby-608fd644f47f5c29e005ff5a",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.138Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.138Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.139Z",
  },
  {
    message:
      "LobbyManager runLobby 608fd644f47f5c29e005ff5a STATE_MATCH_IN_PROGRESS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.140Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.142Z",
  },
  {
    message:
      "DB findLobbyById _id 608fd644f47f5c29e005ff5a   --> {\n  _id: 608fd644f47f5c29e005ff5a,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198177128005' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'stale-lion-9',\n  createdOn: 2021-05-03T10:53:56.470Z,\n  updatedOn: 2021-05-03T10:53:56.470Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608fd644f47f5c29e005ff5a',\n  botId: 608fbcc99494403b24fe8ec5,\n  dotaLobbyId: '27176301285154554',\n  matchId: '5976574881',\n  startedAt: 2021-05-03T10:57:42.534Z\n}",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.172Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.173Z",
  },
  {
    message: "dotaBot practiceLobbyCleared emitted",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.635Z",
  },
  {
    message: "LobbyManager queueEvent onBotLobbyLeft 608fbcc99494403b24fe8ec5",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.637Z",
  },
  {
    message: "LobbyManager processEventQueue onBotLobbyLeft 0",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.638Z",
  },
  {
    message:
      "DotaBot practiceLobbyResponse { eresult: 1, debug_message: null }",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.660Z",
  },
  {
    message: "DotaBot leavePracticeLobby response undefined .CMsgGenericResult",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.661Z",
  },
  {
    level: "error",
    message: "DotaBot leaveLobbyChat missing lobby",
    timestamp: "2021-05-03T10:58:15.676Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_IDLE _id 608fbcc99494403b24fe8ec5  --> {\n  _id: 608fbcc99494403b24fe8ec5,\n  status: 'BOT_IDLE',\n  lobbyCount: 2,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-03T09:05:13.761Z,\n  updated_at: 2021-05-03T10:58:15.661Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.707Z",
  },
  {
    message: "DB findAllLobbiesInState state STATE_WAITING_FOR_BOT  --> []",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.735Z",
  },
  {
    message: "LobbyManager onBotAvailable 0",
    level: "debug",
    timestamp: "2021-05-03T10:58:15.736Z",
  },
];
