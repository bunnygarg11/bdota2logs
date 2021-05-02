let b = [
  {
    message: "DB findActiveLobbiesForUser userId 76561198177128005  --> []",
    level: "debug",
    timestamp: "2021-05-02T16:48:54.948Z",
  },
  {
    message:
      "DB findPendingLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: null,\n  dotaLobbyId: '27176300615272215'\n}",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.028Z",
  },
  {
    message:
      "DB addPlayer  player 76561198177128005  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: null,\n  dotaLobbyId: '27176300615272215'\n}",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.080Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: null,\n  dotaLobbyId: '27176300615272215'\n}",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.114Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.115Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.116Z",
  },
  {
    message:
      "LobbyManager runLobby 608e73ba5a881b421486eb12 STATE_WAITING_FOR_BOT STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.117Z",
  },
  {
    message:
      "DB findLobbyById _id 608e73ba5a881b421486eb12   --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: null,\n  dotaLobbyId: '27176300615272215'\n}",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.150Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.151Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 608e73ba5a881b421486eb12,\n  players: [ '76561199165399234', '76561198177128005' ]\n}",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.186Z",
  },
  {
    message:
      "validateLobbyPlayers 608e73ba5a881b421486eb12 end STATE_WAITING_FOR_BOT to STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.189Z",
  },
  {
    message: "STATE_WAITING_FOR_BOT 608e73ba5a881b421486eb12 null",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.191Z",
  },
  {
    message: "DB findUnassignedBot   --> null",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.221Z",
  },
  {
    message:
      "DB findOrCreateBot steamId64 76561199139099147 accountName dynastyesports personaName my*****Name password St3@mAccountToBu!dlovelyAPI69 --> {\n  status: 'BOT_OFFLINE',\n  lobbyCount: 0,\n  _id: 608ed7f79a3ff640bc0b7dcb,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T16:48:55.228Z,\n  updated_at: 2021-05-02T16:48:55.228Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.277Z",
  },
  {
    message: "lobby run findUnassignedBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.278Z",
  },
  {
    message:
      "DB assignBotToLobby lobby [object Object] botId 608ed7f79a3ff640bc0b7dcb  --> {\n  _id: 608ed7f79a3ff640bc0b7dcb,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T16:48:55.228Z,\n  updated_at: 2021-05-02T16:48:55.310Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.344Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_BOT_ASSIGNED',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: 608ed7f79a3ff640bc0b7dcb,\n  dotaLobbyId: '27176300615272215'\n}",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.380Z",
  },
  {
    message:
      "runLobby 608e73ba5a881b421486eb12 STATE_WAITING_FOR_BOT to STATE_BOT_ASSIGNED",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.381Z",
  },
  {
    message: "LobbyManager loadBotById 608ed7f79a3ff640bc0b7dcb",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.382Z",
  },
  {
    message:
      "DB findBot  _id 608ed7f79a3ff640bc0b7dcb  --> {\n  _id: 608ed7f79a3ff640bc0b7dcb,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T16:48:55.228Z,\n  updated_at: 2021-05-02T16:48:55.310Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.411Z",
  },
  {
    message: "LobbyManager loadBot 608ed7f79a3ff640bc0b7dcb",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.413Z",
  },
  {
    message: "LobbyManager getBot 608ed7f79a3ff640bc0b7dcb ",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.414Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_LOADING _id 608ed7f79a3ff640bc0b7dcb  --> {\n  _id: 608ed7f79a3ff640bc0b7dcb,\n  status: 'BOT_LOADING',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T16:48:55.228Z,\n  updated_at: 2021-05-02T16:48:55.415Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.446Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.477Z",
  },
  {
    message: "DotaBot connectDotaBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.478Z",
  },
  {
    message: "DotaBot connecting...",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.479Z",
  },
  {
    message: "DotaBot logOnToSteam logging on steamUser...",
    level: "debug",
    timestamp: "2021-05-02T16:48:55.933Z",
  },
  {
    message: "DotaBot Received servers.",
    level: "debug",
    timestamp: "2021-05-02T16:48:58.517Z",
  },
  {
    message: "DotaBot set steam persona state and name.",
    level: "debug",
    timestamp: "2021-05-02T16:48:58.529Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-02T16:49:00.435Z",
  },
  {
    message: "Activating queue",
    level: "debug",
    timestamp: "2021-05-02T16:49:00.436Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-02T16:49:00.437Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-02T16:49:00.438Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_ONLINE steamId64 76561199139099147  --> {\n  _id: 608ed7f79a3ff640bc0b7dcb,\n  status: 'BOT_ONLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T16:48:55.228Z,\n  updated_at: 2021-05-02T16:49:00.439Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T16:49:00.473Z",
  },
  {
    message: "ihlManager loadBot loaded",
    level: "debug",
    timestamp: "2021-05-02T16:49:00.477Z",
  },
  {
    message: "ihlManager loadBot done",
    level: "debug",
    timestamp: "2021-05-02T16:49:00.478Z",
  },
  {
    message:
      "DotaBot createDotaBotLobby inhouse-lobby-608e73ba5a881b421486eb12 young-robin-19  DOTA_GAMEMODE_1V1MID 21  76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T16:49:00.479Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-02T16:49:00.480Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-02T16:49:00.481Z",
  },
  {
    message:
      "DotaBot createPracticeLobby {\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  server_region: 5,\n  game_mode: 21,\n  series_type: 1,\n  game_version: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  allow_spectating: true,\n  pass_key: 'young-robin-19',\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  visibility: 0,\n  cm_pick: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T16:49:00.484Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-02T16:49:00.497Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-02T16:49:00.629Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-02T16:49:00.633Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-02T16:49:01.031Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  null  lobby {\n  lobby_id: Long { low: -1631788392, high: 6327475, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'my*****Name',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [] ",
    level: "debug",
    timestamp: "2021-05-02T16:49:01.131Z",
  },
  {
    message:
      "DotaBot practiceLobbyResponse { eresult: 1, debug_message: null }",
    level: "debug",
    timestamp: "2021-05-02T16:49:01.147Z",
  },
  {
    message: "DotaBot createDotaBotLobby practice lobby created",
    level: "debug",
    timestamp: "2021-05-02T16:49:01.152Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176300854436504   --> null",
    level: "debug",
    timestamp: "2021-05-02T16:49:01.193Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.dotaLobbyId 27176300854436504 not found. Bot 608ed7f79a3ff640bc0b7dcb leaving lobby...",
    level: "debug",
    timestamp: "2021-05-02T16:49:01.194Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_IN_LOBBY steamId64 76561199139099147  --> {\n  _id: 608ed7f79a3ff640bc0b7dcb,\n  status: 'BOT_IN_LOBBY',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T16:48:55.228Z,\n  updated_at: 2021-05-02T16:49:01.153Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T16:49:01.209Z",
  },
  {
    message: "DotaBot createDotaBotLobby bot status updated",
    level: "debug",
    timestamp: "2021-05-02T16:49:01.210Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-02T16:49:01.210Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-02T16:49:01.211Z",
  },
  {
    message: "DotaBot practiceLobbyKickFromTeam 1178833419",
    level: "debug",
    timestamp: "2021-05-02T16:49:01.212Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-02T16:49:01.215Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-02T16:49:01.785Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: -1631788392, high: 6327475, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'my*****Name',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby {\n  lobby_id: Long { low: -1631788392, high: 6327475, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [] ",
    level: "debug",
    timestamp: "2021-05-02T16:49:01.837Z",
  },
  {
    message:
      "dotabot processMembers oldMembers [] newMembers[] members { left: [], joined: [], changedSlot: [] } ",
    level: "debug",
    timestamp: "2021-05-02T16:49:01.860Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby {\n  lobby_id: Long { low: -1631788392, high: 6327475, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'my*****Name',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}pending_invites undefined newLobby {\n  lobby_id: Long { low: -1631788392, high: 6327475, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n} members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-02T16:49:01.947Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 8678",
    level: "debug",
    timestamp: "2021-05-02T16:49:02.379Z",
  },
  {
    level: "error",
    message:
      "TimeoutError: operation timed out - trace: at listOnTimeout (internal/timers.js:554:17)\n    at processTimers (internal/timers.js:497:7)\nFrom previous event:\n    at DotaBot.practiceLobbyKickFromTeam (D:\\mohit\\blocks\\bexpressserver\\btest\\server\\services\\dotaBot\\dotaBot.js:1012:8)\n    at D:\\mohit\\blocks\\bexpressserver\\btest\\server\\services\\dotaBot\\dotaBot.js:262:19\n    at processTicksAndRejections (internal/process/task_queues.js:93:5)\n    at async LobbyManager.STATE_BOT_ASSIGNED (D:\\mohit\\blocks\\bexpressserver\\btest\\server\\services\\dotaBot\\lobbyStateHandlers.js:286:29)\n    at async LobbyManager.runLobby (D:\\mohit\\blocks\\bexpressserver\\btest\\server\\services\\dotaBot\\lobbyManager.js:174:24)\n    at async LobbyManager.processEventQueue (D:\\mohit\\blocks\\bexpressserver\\btest\\server\\services\\dotaBot\\lobbyManager.js:493:23)",
    timestamp: "2021-05-02T16:49:06.225Z",
  },
  {
    message: "LobbyManager removeBot 608ed7f79a3ff640bc0b7dcb",
    level: "debug",
    timestamp: "2021-05-02T16:49:06.226Z",
  },
  {
    message: "LobbyManager getBot 608ed7f79a3ff640bc0b7dcb ",
    level: "debug",
    timestamp: "2021-05-02T16:49:06.226Z",
  },
  {
    message: "DotaBot disconnectDotaBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T16:49:06.227Z",
  },
  {
    message: "DotaBot Logged off.",
    level: "debug",
    timestamp: "2021-05-02T16:49:06.229Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_BOT_FAILED',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: 608ed7f79a3ff640bc0b7dcb,\n  dotaLobbyId: '27176300615272215'\n}",
    level: "debug",
    timestamp: "2021-05-02T16:49:06.271Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_OFFLINE steamId64 76561199139099147  --> {\n  _id: 608ed7f79a3ff640bc0b7dcb,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T16:48:55.228Z,\n  updated_at: 2021-05-02T16:49:06.233Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T16:49:06.277Z",
  },
  {
    message: "ihlManager removeBot removed",
    level: "debug",
    timestamp: "2021-05-02T16:49:06.278Z",
  },
  {
    message:
      "DB unassignBotFromLobby lobby [object Object] botId 608ed7f79a3ff640bc0b7dcb  --> {\n  _id: 608ed7f79a3ff640bc0b7dcb,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 0,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T16:48:55.228Z,\n  updated_at: 2021-05-02T16:49:06.302Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T16:49:06.371Z",
  },
  {
    message:
      "runLobby 608e73ba5a881b421486eb12 STATE_BOT_ASSIGNED to STATE_BOT_FAILED",
    level: "debug",
    timestamp: "2021-05-02T16:49:06.374Z",
  },
  {
    message:
      "runLobby 608e73ba5a881b421486eb12 STATE_BOT_FAILED to STATE_BOT_FAILED",
    level: "debug",
    timestamp: "2021-05-02T16:49:06.375Z",
  },
  {
    message: "DB findActiveLobbiesForUser userId 76561198177128005  --> []",
    level: "debug",
    timestamp: "2021-05-02T17:04:17.501Z",
  },
  {
    message:
      "DB findPendingLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: null,\n  dotaLobbyId: null\n}",
    level: "debug",
    timestamp: "2021-05-02T17:04:17.541Z",
  },
  {
    message:
      "DB addPlayer  player 76561198177128005  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: null,\n  dotaLobbyId: null\n}",
    level: "debug",
    timestamp: "2021-05-02T17:04:17.574Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: null,\n  dotaLobbyId: null\n}",
    level: "debug",
    timestamp: "2021-05-02T17:04:17.840Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T17:04:17.841Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-02T17:04:17.843Z",
  },
  {
    message:
      "LobbyManager runLobby 608e73ba5a881b421486eb12 STATE_WAITING_FOR_BOT STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T17:04:17.844Z",
  },
  {
    message:
      "DB findLobbyById _id 608e73ba5a881b421486eb12   --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: null,\n  dotaLobbyId: null\n}",
    level: "debug",
    timestamp: "2021-05-02T17:04:17.883Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T17:04:17.884Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 608e73ba5a881b421486eb12,\n  players: [ '76561199165399234', '76561198177128005' ]\n}",
    level: "debug",
    timestamp: "2021-05-02T17:04:17.920Z",
  },
  {
    message:
      "validateLobbyPlayers 608e73ba5a881b421486eb12 end STATE_WAITING_FOR_BOT to STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T17:04:17.922Z",
  },
  {
    message: "STATE_WAITING_FOR_BOT 608e73ba5a881b421486eb12 null",
    level: "debug",
    timestamp: "2021-05-02T17:04:17.924Z",
  },
  {
    message: "DB findUnassignedBot   --> null",
    level: "debug",
    timestamp: "2021-05-02T17:04:17.952Z",
  },
  {
    message:
      "DB findOrCreateBot steamId64 76561199139099147 accountName dynastyesports personaName my*****Name password St3@mAccountToBu!dlovelyAPI69 --> {\n  status: 'BOT_OFFLINE',\n  lobbyCount: 0,\n  _id: 608edb91372dae24ec9a32bd,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T17:04:17.958Z,\n  updated_at: 2021-05-02T17:04:17.958Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T17:04:18.001Z",
  },
  {
    message: "lobby run findUnassignedBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T17:04:18.002Z",
  },
  {
    message:
      "DB assignBotToLobby lobby [object Object] botId 608edb91372dae24ec9a32bd  --> {\n  _id: 608edb91372dae24ec9a32bd,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T17:04:17.958Z,\n  updated_at: 2021-05-02T17:04:18.035Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T17:04:18.072Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_BOT_ASSIGNED',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: 608edb91372dae24ec9a32bd,\n  dotaLobbyId: null\n}",
    level: "debug",
    timestamp: "2021-05-02T17:04:18.107Z",
  },
  {
    message:
      "runLobby 608e73ba5a881b421486eb12 STATE_WAITING_FOR_BOT to STATE_BOT_ASSIGNED",
    level: "debug",
    timestamp: "2021-05-02T17:04:18.107Z",
  },
  {
    message: "LobbyManager loadBotById 608edb91372dae24ec9a32bd",
    level: "debug",
    timestamp: "2021-05-02T17:04:18.109Z",
  },
  {
    message:
      "DB findBot  _id 608edb91372dae24ec9a32bd  --> {\n  _id: 608edb91372dae24ec9a32bd,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T17:04:17.958Z,\n  updated_at: 2021-05-02T17:04:18.035Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T17:04:18.373Z",
  },
  {
    message: "LobbyManager loadBot 608edb91372dae24ec9a32bd",
    level: "debug",
    timestamp: "2021-05-02T17:04:18.374Z",
  },
  {
    message: "LobbyManager getBot 608edb91372dae24ec9a32bd ",
    level: "debug",
    timestamp: "2021-05-02T17:04:18.375Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_LOADING _id 608edb91372dae24ec9a32bd  --> {\n  _id: 608edb91372dae24ec9a32bd,\n  status: 'BOT_LOADING',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T17:04:17.958Z,\n  updated_at: 2021-05-02T17:04:18.375Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T17:04:18.409Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-02T17:04:18.412Z",
  },
  {
    message: "DotaBot connectDotaBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T17:04:18.413Z",
  },
  {
    message: "DotaBot connecting...",
    level: "debug",
    timestamp: "2021-05-02T17:04:18.414Z",
  },
  {
    message: "DotaBot logOnToSteam logging on steamUser...",
    level: "debug",
    timestamp: "2021-05-02T17:04:19.003Z",
  },
  {
    message: "DotaBot Received servers.",
    level: "debug",
    timestamp: "2021-05-02T17:04:20.001Z",
  },
  {
    message: "DotaBot set steam persona state and name.",
    level: "debug",
    timestamp: "2021-05-02T17:04:20.005Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-02T17:04:21.735Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  null  lobby {\n  lobby_id: Long { low: -1631788392, high: 6327475, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [] ",
    level: "debug",
    timestamp: "2021-05-02T17:04:21.766Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-02T17:04:21.769Z",
  },
  {
    message: "Activating queue",
    level: "debug",
    timestamp: "2021-05-02T17:04:21.786Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-02T17:04:21.802Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-02T17:04:21.806Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176300854436504   --> null",
    level: "debug",
    timestamp: "2021-05-02T17:04:21.835Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.dotaLobbyId 27176300854436504 not found. Bot 608edb91372dae24ec9a32bd leaving lobby...",
    level: "debug",
    timestamp: "2021-05-02T17:04:21.836Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_ONLINE steamId64 76561199139099147  --> {\n  _id: 608edb91372dae24ec9a32bd,\n  status: 'BOT_ONLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T17:04:17.958Z,\n  updated_at: 2021-05-02T17:04:21.807Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T17:04:21.872Z",
  },
  {
    message: "ihlManager loadBot loaded",
    level: "debug",
    timestamp: "2021-05-02T17:04:21.873Z",
  },
  {
    message: "ihlManager loadBot done",
    level: "debug",
    timestamp: "2021-05-02T17:04:21.874Z",
  },
  {
    message:
      "dotaLobbyId mismatch. lobbyState.dotaLobbyId null dotaBot.dotaLobbyId 27176300854436504",
    level: "debug",
    timestamp: "2021-05-02T17:04:21.875Z",
  },
  {
    message:
      "DB unassignBotFromLobby lobby [object Object] botId 608edb91372dae24ec9a32bd  --> {\n  _id: 608edb91372dae24ec9a32bd,\n  status: 'BOT_ONLINE',\n  lobbyCount: 0,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T17:04:17.958Z,\n  updated_at: 2021-05-02T17:04:21.904Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T17:04:21.936Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_IN_LOBBY steamId64 76561199139099147  --> {\n  _id: 608edb91372dae24ec9a32bd,\n  status: 'BOT_IN_LOBBY',\n  lobbyCount: 0,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T17:04:17.958Z,\n  updated_at: 2021-05-02T17:04:21.937Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T17:04:21.976Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: null,\n  dotaLobbyId: null\n}",
    level: "debug",
    timestamp: "2021-05-02T17:04:22.010Z",
  },
  {
    message:
      "runLobby 608e73ba5a881b421486eb12 STATE_BOT_ASSIGNED to STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T17:04:22.011Z",
  },
  {
    message: "STATE_WAITING_FOR_BOT 608e73ba5a881b421486eb12 null",
    level: "debug",
    timestamp: "2021-05-02T17:04:22.015Z",
  },
  {
    message: "DB findUnassignedBot   --> null",
    level: "debug",
    timestamp: "2021-05-02T17:04:22.050Z",
  },
  {
    message:
      "DB findOrCreateBot steamId64 76561199139099147 accountName dynastyesports personaName my*****Name password St3@mAccountToBu!dlovelyAPI69 --> {\n  status: 'BOT_OFFLINE',\n  lobbyCount: 0,\n  _id: 608edb96372dae24ec9a32be,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T17:04:22.053Z,\n  updated_at: 2021-05-02T17:04:22.053Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T17:04:22.090Z",
  },
  {
    message: "lobby run findUnassignedBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T17:04:22.091Z",
  },
  {
    message:
      "DB assignBotToLobby lobby [object Object] botId 608edb96372dae24ec9a32be  --> {\n  _id: 608edb96372dae24ec9a32be,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T17:04:22.053Z,\n  updated_at: 2021-05-02T17:04:22.122Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T17:04:22.157Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_BOT_ASSIGNED',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: 608edb96372dae24ec9a32be,\n  dotaLobbyId: null\n}",
    level: "debug",
    timestamp: "2021-05-02T17:04:22.191Z",
  },
  {
    message:
      "runLobby 608e73ba5a881b421486eb12 STATE_WAITING_FOR_BOT to STATE_BOT_ASSIGNED",
    level: "debug",
    timestamp: "2021-05-02T17:04:22.192Z",
  },
  {
    message: "LobbyManager loadBotById 608edb96372dae24ec9a32be",
    level: "debug",
    timestamp: "2021-05-02T17:04:22.193Z",
  },
  {
    message:
      "DB findBot  _id 608edb96372dae24ec9a32be  --> {\n  _id: 608edb96372dae24ec9a32be,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T17:04:22.053Z,\n  updated_at: 2021-05-02T17:04:22.122Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T17:04:22.237Z",
  },
  {
    message: "LobbyManager loadBot 608edb96372dae24ec9a32be",
    level: "debug",
    timestamp: "2021-05-02T17:04:22.238Z",
  },
  {
    message: "LobbyManager getBot 608edb96372dae24ec9a32be ",
    level: "debug",
    timestamp: "2021-05-02T17:04:22.239Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_LOADING _id 608edb96372dae24ec9a32be  --> {\n  _id: 608edb96372dae24ec9a32be,\n  status: 'BOT_LOADING',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T17:04:22.053Z,\n  updated_at: 2021-05-02T17:04:22.239Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T17:04:22.273Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-02T17:04:22.275Z",
  },
  {
    message: "DotaBot connectDotaBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T17:04:22.276Z",
  },
  {
    message: "DotaBot connecting...",
    level: "debug",
    timestamp: "2021-05-02T17:04:22.276Z",
  },
  {
    message: "DotaBot logOnToSteam logging on steamUser...",
    level: "debug",
    timestamp: "2021-05-02T17:04:22.749Z",
  },
  {
    message: "DotaBot connection closed by server. Trying reconnect",
    level: "debug",
    timestamp: "2021-05-02T17:04:23.343Z",
  },
  {
    level: "error",
    message:
      "Error: Disconnected\n    at SteamClient._disconnected (D:\\mohit\\blocks\\bexpressserver\\btest\\node_modules\\steam\\lib\\steam_client.js:189:24)\n    at Connection.emit (events.js:315:20)\n    at TCP.<anonymous> (net.js:673:12)",
    timestamp: "2021-05-02T17:04:23.347Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-02T17:04:23.349Z",
  },
  {
    message: "DotaBot connecting...",
    level: "debug",
    timestamp: "2021-05-02T17:04:23.349Z",
  },
  {
    message: "DotaBot Received servers.",
    level: "debug",
    timestamp: "2021-05-02T17:04:23.367Z",
  },
  {
    message: "DotaBot set steam persona state and name.",
    level: "debug",
    timestamp: "2021-05-02T17:04:23.372Z",
  },
  {
    message: "DotaBot logOnToSteam logging on steamUser...",
    level: "debug",
    timestamp: "2021-05-02T17:04:23.830Z",
  },
  {
    message: "DotaBot Received servers.",
    level: "debug",
    timestamp: "2021-05-02T17:04:24.704Z",
  },
  {
    message: "DotaBot set steam persona state and name.",
    level: "debug",
    timestamp: "2021-05-02T17:04:24.707Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-02T17:04:33.393Z",
  },
  {
    message: "DotaBot failed to connect. Trying again... 1/3",
    level: "debug",
    timestamp: "2021-05-02T17:04:33.394Z",
  },
  {
    message: "DotaBot connecting...",
    level: "debug",
    timestamp: "2021-05-02T17:04:34.410Z",
  },
  {
    level: "error",
    message:
      "TypeError: Cannot read property 'send' of undefined - trace: at SteamClient._send (D:\\mohit\\blocks\\bexpressserver\\btest\\node_modules\\steam\\lib\\steam_client.js:117:20)\n    at SteamClient.send (D:\\mohit\\blocks\\bexpressserver\\btest\\node_modules\\steam\\lib\\steam_client.js:126:8)\n    at SteamUser.gamesPlayed (D:\\mohit\\blocks\\bexpressserver\\btest\\node_modules\\steam\\lib\\handlers\\user\\index.js:47:16)\n    at Dota2Client.Dota2.Dota2Client.launch (D:\\mohit\\blocks\\bexpressserver\\btest\\node_modules\\dota2\\index.js:242:16)\n    at D:\\mohit\\blocks\\bexpressserver\\btest\\server\\services\\dotaBot\\dotaBot.js:111:18\n    at Promise.cancellationExecute [as _execute] (D:\\mohit\\blocks\\bexpressserver\\btest\\node_modules\\bluebird\\js\\release\\debuggability.js:406:9)\n    at Promise._resolveFromExecutor (D:\\mohit\\blocks\\bexpressserver\\btest\\node_modules\\bluebird\\js\\release\\promise.js:518:18)\n    at new Promise (D:\\mohit\\blocks\\bexpressserver\\btest\\node_modules\\bluebird\\js\\release\\promise.js:103:10)\n    at connectToDota (D:\\mohit\\blocks\\bexpressserver\\btest\\server\\services\\dotaBot\\dotaBot.js:108:3)\n    at DotaBot._connectToDota (D:\\mohit\\blocks\\bexpressserver\\btest\\server\\services\\dotaBot\\dotaBot.js:802:15)\n    at DotaBot.connect (D:\\mohit\\blocks\\bexpressserver\\btest\\server\\services\\dotaBot\\dotaBot.js:725:20)\n    at async connectDotaBot (D:\\mohit\\blocks\\bexpressserver\\btest\\server\\services\\dotaBot\\dotaBot.js:227:3)",
    timestamp: "2021-05-02T17:04:34.417Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-02T17:04:34.419Z",
  },
  {
    message: "DotaBot failed to connect. Trying again... 2/3",
    level: "debug",
    timestamp: "2021-05-02T17:04:34.420Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-02T17:04:34.717Z",
  },
  {
    message: "DotaBot failed to connect. Trying again... 1/3",
    level: "debug",
    timestamp: "2021-05-02T17:04:34.718Z",
  },
  {
    message: "DB findActiveLobbiesForUser userId 76561198177128005  --> []",
    level: "debug",
    timestamp: "2021-05-02T17:06:16.648Z",
  },
  {
    message:
      "DB findPendingLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: null,\n  dotaLobbyId: null\n}",
    level: "debug",
    timestamp: "2021-05-02T17:06:16.683Z",
  },
  {
    message:
      "DB addPlayer  player 76561198177128005  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: null,\n  dotaLobbyId: null\n}",
    level: "debug",
    timestamp: "2021-05-02T17:06:16.729Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: null,\n  dotaLobbyId: null\n}",
    level: "debug",
    timestamp: "2021-05-02T17:06:16.766Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T17:06:16.768Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-02T17:06:16.769Z",
  },
  {
    message:
      "LobbyManager runLobby 608e73ba5a881b421486eb12 STATE_WAITING_FOR_BOT STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T17:06:16.770Z",
  },
  {
    message:
      "DB findLobbyById _id 608e73ba5a881b421486eb12   --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: null,\n  dotaLobbyId: null\n}",
    level: "debug",
    timestamp: "2021-05-02T17:06:16.831Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T17:06:16.832Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 608e73ba5a881b421486eb12,\n  players: [ '76561199165399234', '76561198177128005' ]\n}",
    level: "debug",
    timestamp: "2021-05-02T17:06:16.863Z",
  },
  {
    message:
      "validateLobbyPlayers 608e73ba5a881b421486eb12 end STATE_WAITING_FOR_BOT to STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T17:06:16.864Z",
  },
  {
    message: "STATE_WAITING_FOR_BOT 608e73ba5a881b421486eb12 null",
    level: "debug",
    timestamp: "2021-05-02T17:06:16.865Z",
  },
  {
    message: "DB findUnassignedBot   --> null",
    level: "debug",
    timestamp: "2021-05-02T17:06:17.128Z",
  },
  {
    message:
      "DB findOrCreateBot steamId64 76561199139099147 accountName dynastyesports personaName my*****Name password St3@mAccountToBu!dlovelyAPI69 --> {\n  status: 'BOT_OFFLINE',\n  lobbyCount: 0,\n  _id: 608edc094aac7757607685e9,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T17:06:17.133Z,\n  updated_at: 2021-05-02T17:06:17.133Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T17:06:17.171Z",
  },
  {
    message: "lobby run findUnassignedBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T17:06:17.174Z",
  },
  {
    message:
      "DB assignBotToLobby lobby [object Object] botId 608edc094aac7757607685e9  --> {\n  _id: 608edc094aac7757607685e9,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T17:06:17.133Z,\n  updated_at: 2021-05-02T17:06:17.209Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T17:06:17.245Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_BOT_ASSIGNED',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: 608edc094aac7757607685e9,\n  dotaLobbyId: null\n}",
    level: "debug",
    timestamp: "2021-05-02T17:06:17.278Z",
  },
  {
    message:
      "runLobby 608e73ba5a881b421486eb12 STATE_WAITING_FOR_BOT to STATE_BOT_ASSIGNED",
    level: "debug",
    timestamp: "2021-05-02T17:06:17.280Z",
  },
  {
    message: "LobbyManager loadBotById 608edc094aac7757607685e9",
    level: "debug",
    timestamp: "2021-05-02T17:06:17.281Z",
  },
  {
    message:
      "DB findBot  _id 608edc094aac7757607685e9  --> {\n  _id: 608edc094aac7757607685e9,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T17:06:17.133Z,\n  updated_at: 2021-05-02T17:06:17.209Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T17:06:17.312Z",
  },
  {
    message: "LobbyManager loadBot 608edc094aac7757607685e9",
    level: "debug",
    timestamp: "2021-05-02T17:06:17.313Z",
  },
  {
    message: "LobbyManager getBot 608edc094aac7757607685e9 ",
    level: "debug",
    timestamp: "2021-05-02T17:06:17.314Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_LOADING _id 608edc094aac7757607685e9  --> {\n  _id: 608edc094aac7757607685e9,\n  status: 'BOT_LOADING',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T17:06:17.133Z,\n  updated_at: 2021-05-02T17:06:17.315Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T17:06:17.345Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-02T17:06:17.348Z",
  },
  {
    message: "DotaBot connectDotaBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T17:06:17.349Z",
  },
  {
    message: "DotaBot connecting...",
    level: "debug",
    timestamp: "2021-05-02T17:06:17.349Z",
  },
  {
    message: "DotaBot logOnToSteam logging on steamUser...",
    level: "debug",
    timestamp: "2021-05-02T17:06:17.830Z",
  },
  {
    message: "DotaBot Received servers.",
    level: "debug",
    timestamp: "2021-05-02T17:06:18.529Z",
  },
  {
    message: "DotaBot set steam persona state and name.",
    level: "debug",
    timestamp: "2021-05-02T17:06:18.531Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-02T17:06:25.321Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  null  lobby {\n  lobby_id: Long { low: -1631788392, high: 6327475, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'young-robin-19',\n  leagueid: 0,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [] ",
    level: "debug",
    timestamp: "2021-05-02T17:06:25.348Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-02T17:06:25.351Z",
  },
  {
    message: "Activating queue",
    level: "debug",
    timestamp: "2021-05-02T17:06:25.354Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-02T17:06:25.358Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-02T17:06:25.373Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27176300854436504   --> null",
    level: "debug",
    timestamp: "2021-05-02T17:06:25.405Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.dotaLobbyId 27176300854436504 not found. Bot 608edc094aac7757607685e9 leaving lobby...",
    level: "debug",
    timestamp: "2021-05-02T17:06:25.406Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_ONLINE steamId64 76561199139099147  --> {\n  _id: 608edc094aac7757607685e9,\n  status: 'BOT_ONLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T17:06:17.133Z,\n  updated_at: 2021-05-02T17:06:25.374Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T17:06:25.726Z",
  },
  {
    message: "ihlManager loadBot loaded",
    level: "debug",
    timestamp: "2021-05-02T17:06:25.727Z",
  },
  {
    message: "ihlManager loadBot done",
    level: "debug",
    timestamp: "2021-05-02T17:06:25.728Z",
  },
  {
    message:
      "dotaLobbyId mismatch. lobbyState.dotaLobbyId null dotaBot.dotaLobbyId 27176300854436504",
    level: "debug",
    timestamp: "2021-05-02T17:06:25.728Z",
  },
  {
    message:
      "DB unassignBotFromLobby lobby [object Object] botId 608edc094aac7757607685e9  --> {\n  _id: 608edc094aac7757607685e9,\n  status: 'BOT_ONLINE',\n  lobbyCount: 0,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T17:06:17.133Z,\n  updated_at: 2021-05-02T17:06:25.794Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T17:06:25.862Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_IN_LOBBY steamId64 76561199139099147  --> {\n  _id: 608edc094aac7757607685e9,\n  status: 'BOT_IN_LOBBY',\n  lobbyCount: 0,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T17:06:17.133Z,\n  updated_at: 2021-05-02T17:06:25.863Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T17:06:25.928Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: null,\n  dotaLobbyId: null\n}",
    level: "debug",
    timestamp: "2021-05-02T17:06:26.013Z",
  },
  {
    message:
      "runLobby 608e73ba5a881b421486eb12 STATE_BOT_ASSIGNED to STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-02T17:06:26.014Z",
  },
  {
    message: "STATE_WAITING_FOR_BOT 608e73ba5a881b421486eb12 null",
    level: "debug",
    timestamp: "2021-05-02T17:06:26.015Z",
  },
  {
    message: "DB findUnassignedBot   --> null",
    level: "debug",
    timestamp: "2021-05-02T17:06:26.103Z",
  },
  {
    message:
      "DB findOrCreateBot steamId64 76561199139099147 accountName dynastyesports personaName my*****Name password St3@mAccountToBu!dlovelyAPI69 --> {\n  status: 'BOT_OFFLINE',\n  lobbyCount: 0,\n  _id: 608edc124aac7757607685ea,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T17:06:26.105Z,\n  updated_at: 2021-05-02T17:06:26.105Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T17:06:26.158Z",
  },
  {
    message: "lobby run findUnassignedBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T17:06:26.159Z",
  },
  {
    message:
      "DB assignBotToLobby lobby [object Object] botId 608edc124aac7757607685ea  --> {\n  _id: 608edc124aac7757607685ea,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T17:06:26.105Z,\n  updated_at: 2021-05-02T17:06:26.195Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T17:06:26.226Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 608e73ba5a881b421486eb12,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561199165399234', '76561198177128005' ],\n  state: 'STATE_BOT_ASSIGNED',\n  password: 'young-robin-19',\n  createdOn: 2021-05-02T09:41:14.585Z,\n  updatedOn: 2021-05-02T09:41:14.596Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-608e73ba5a881b421486eb12',\n  botId: 608edc124aac7757607685ea,\n  dotaLobbyId: null\n}",
    level: "debug",
    timestamp: "2021-05-02T17:06:26.262Z",
  },
  {
    message:
      "runLobby 608e73ba5a881b421486eb12 STATE_WAITING_FOR_BOT to STATE_BOT_ASSIGNED",
    level: "debug",
    timestamp: "2021-05-02T17:06:26.263Z",
  },
  {
    message: "LobbyManager loadBotById 608edc124aac7757607685ea",
    level: "debug",
    timestamp: "2021-05-02T17:06:26.263Z",
  },
  {
    message:
      "DB findBot  _id 608edc124aac7757607685ea  --> {\n  _id: 608edc124aac7757607685ea,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T17:06:26.105Z,\n  updated_at: 2021-05-02T17:06:26.195Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T17:06:26.295Z",
  },
  {
    message: "LobbyManager loadBot 608edc124aac7757607685ea",
    level: "debug",
    timestamp: "2021-05-02T17:06:26.296Z",
  },
  {
    message: "LobbyManager getBot 608edc124aac7757607685ea ",
    level: "debug",
    timestamp: "2021-05-02T17:06:26.297Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_LOADING _id 608edc124aac7757607685ea  --> {\n  _id: 608edc124aac7757607685ea,\n  status: 'BOT_LOADING',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-02T17:06:26.105Z,\n  updated_at: 2021-05-02T17:06:26.297Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-02T17:06:26.337Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-02T17:06:26.340Z",
  },
  {
    message: "DotaBot connectDotaBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-02T17:06:26.341Z",
  },
  {
    message: "DotaBot connecting...",
    level: "debug",
    timestamp: "2021-05-02T17:06:26.342Z",
  },
  {
    message: "DotaBot logOnToSteam logging on steamUser...",
    level: "debug",
    timestamp: "2021-05-02T17:06:26.802Z",
  },
  {
    message: "DotaBot connection closed by server. Trying reconnect",
    level: "debug",
    timestamp: "2021-05-02T17:06:27.387Z",
  },
  {
    level: "error",
    message:
      "Error: Disconnected\n    at SteamClient._disconnected (D:\\mohit\\blocks\\bexpressserver\\btest\\node_modules\\steam\\lib\\steam_client.js:189:24)\n    at Connection.emit (events.js:315:20)\n    at TCP.<anonymous> (net.js:673:12)",
    timestamp: "2021-05-02T17:06:27.389Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-02T17:06:27.390Z",
  },
  {
    message: "DotaBot connecting...",
    level: "debug",
    timestamp: "2021-05-02T17:06:27.390Z",
  },
  {
    message: "DotaBot Received servers.",
    level: "debug",
    timestamp: "2021-05-02T17:06:27.411Z",
  },
  {
    message: "DotaBot set steam persona state and name.",
    level: "debug",
    timestamp: "2021-05-02T17:06:27.416Z",
  },
  {
    message: "DotaBot logOnToSteam logging on steamUser...",
    level: "debug",
    timestamp: "2021-05-02T17:06:27.691Z",
  },
  {
    message: "DotaBot Received servers.",
    level: "debug",
    timestamp: "2021-05-02T17:06:28.908Z",
  },
  {
    message: "DotaBot set steam persona state and name.",
    level: "debug",
    timestamp: "2021-05-02T17:06:28.911Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-02T17:06:37.425Z",
  },
  {
    message: "DotaBot failed to connect. Trying again... 1/3",
    level: "debug",
    timestamp: "2021-05-02T17:06:37.425Z",
  },
  {
    message: "DotaBot connecting...",
    level: "debug",
    timestamp: "2021-05-02T17:06:38.431Z",
  },
  {
    level: "error",
    message:
      "TypeError: Cannot read property 'send' of undefined - trace: at SteamClient._send (D:\\mohit\\blocks\\bexpressserver\\btest\\node_modules\\steam\\lib\\steam_client.js:117:20)\n    at SteamClient.send (D:\\mohit\\blocks\\bexpressserver\\btest\\node_modules\\steam\\lib\\steam_client.js:126:8)\n    at SteamUser.gamesPlayed (D:\\mohit\\blocks\\bexpressserver\\btest\\node_modules\\steam\\lib\\handlers\\user\\index.js:47:16)\n    at Dota2Client.Dota2.Dota2Client.launch (D:\\mohit\\blocks\\bexpressserver\\btest\\node_modules\\dota2\\index.js:242:16)\n    at D:\\mohit\\blocks\\bexpressserver\\btest\\server\\services\\dotaBot\\dotaBot.js:111:18\n    at Promise.cancellationExecute [as _execute] (D:\\mohit\\blocks\\bexpressserver\\btest\\node_modules\\bluebird\\js\\release\\debuggability.js:406:9)\n    at Promise._resolveFromExecutor (D:\\mohit\\blocks\\bexpressserver\\btest\\node_modules\\bluebird\\js\\release\\promise.js:518:18)\n    at new Promise (D:\\mohit\\blocks\\bexpressserver\\btest\\node_modules\\bluebird\\js\\release\\promise.js:103:10)\n    at connectToDota (D:\\mohit\\blocks\\bexpressserver\\btest\\server\\services\\dotaBot\\dotaBot.js:108:3)\n    at DotaBot._connectToDota (D:\\mohit\\blocks\\bexpressserver\\btest\\server\\services\\dotaBot\\dotaBot.js:802:15)\n    at DotaBot.connect (D:\\mohit\\blocks\\bexpressserver\\btest\\server\\services\\dotaBot\\dotaBot.js:725:20)\n    at async connectDotaBot (D:\\mohit\\blocks\\bexpressserver\\btest\\server\\services\\dotaBot\\dotaBot.js:227:3)",
    timestamp: "2021-05-02T17:06:38.435Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-02T17:06:38.437Z",
  },
  {
    message: "DotaBot failed to connect. Trying again... 2/3",
    level: "debug",
    timestamp: "2021-05-02T17:06:38.437Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-02T17:06:38.913Z",
  },
  {
    message: "DotaBot failed to connect. Trying again... 1/3",
    level: "debug",
    timestamp: "2021-05-02T17:06:38.914Z",
  },
];
