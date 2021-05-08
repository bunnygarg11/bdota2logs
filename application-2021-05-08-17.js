let b = [
  ,
  {
    message: "DB findActiveLobbiesForUser userId 76561198003549651  --> []",
    level: "debug",
    timestamp: "2021-05-08T11:54:00.988Z",
  },
  {
    message: "DB findPendingLobby  --> null",
    level: "debug",
    timestamp: "2021-05-08T11:54:01.027Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457'\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:01.117Z",
  },
  {
    message: "DB findActiveLobbiesForUser userId 76561198003810536  --> []",
    level: "debug",
    timestamp: "2021-05-08T11:54:20.824Z",
  },
  {
    message:
      "DB findPendingLobby  --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457'\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:20.857Z",
  },
  {
    message:
      "DB addPlayer  player 76561198003810536  --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457'\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:20.900Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457'\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:20.939Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-08T11:54:20.940Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-08T11:54:20.941Z",
  },
  {
    message:
      "LobbyManager runLobby 60967bd9ee23f558f88bb457 STATE_WAITING_FOR_BOT STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-08T11:54:20.942Z",
  },
  {
    message:
      "DB findLobbyById _id 60967bd9ee23f558f88bb457   --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457'\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:20.975Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-08T11:54:20.976Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 60967bd9ee23f558f88bb457,\n  players: [ '76561198003549651', '76561198003810536' ]\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:21.011Z",
  },
  {
    message:
      "validateLobbyPlayers 60967bd9ee23f558f88bb457 end STATE_WAITING_FOR_BOT to STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-08T11:54:21.012Z",
  },
  {
    message: "STATE_WAITING_FOR_BOT 60967bd9ee23f558f88bb457 undefined",
    level: "debug",
    timestamp: "2021-05-08T11:54:21.016Z",
  },
  {
    message: "DB findUnassignedBot   --> null",
    level: "debug",
    timestamp: "2021-05-08T11:54:21.047Z",
  },
  {
    message:
      "DB findOrCreateBot steamId64 76561199139099147 accountName dynastyesports personaName my*****Name password St3@mAccountToBu!dlovelyAPI69 --> {\n  status: 'BOT_OFFLINE',\n  lobbyCount: 0,\n  _id: 60967bedee23f558f88bb458,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-08T11:54:21.051Z,\n  updated_at: 2021-05-08T11:54:21.051Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:21.092Z",
  },
  {
    message: "lobby run findUnassignedBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-08T11:54:21.093Z",
  },
  {
    message:
      "DB assignBotToLobby lobby [object Object] botId 60967bedee23f558f88bb458  --> {\n  _id: 60967bedee23f558f88bb458,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-08T11:54:21.051Z,\n  updated_at: 2021-05-08T11:54:21.129Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:21.169Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_BOT_ASSIGNED',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:21.210Z",
  },
  {
    message:
      "runLobby 60967bd9ee23f558f88bb457 STATE_WAITING_FOR_BOT to STATE_BOT_ASSIGNED",
    level: "debug",
    timestamp: "2021-05-08T11:54:21.211Z",
  },
  {
    message: "LobbyManager loadBotById 60967bedee23f558f88bb458",
    level: "debug",
    timestamp: "2021-05-08T11:54:21.211Z",
  },
  {
    message:
      "DB findBot  _id 60967bedee23f558f88bb458  --> {\n  _id: 60967bedee23f558f88bb458,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-08T11:54:21.051Z,\n  updated_at: 2021-05-08T11:54:21.129Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:21.254Z",
  },
  {
    message: "LobbyManager loadBot 60967bedee23f558f88bb458",
    level: "debug",
    timestamp: "2021-05-08T11:54:21.255Z",
  },
  {
    message: "LobbyManager getBot 60967bedee23f558f88bb458 ",
    level: "debug",
    timestamp: "2021-05-08T11:54:21.255Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_LOADING _id 60967bedee23f558f88bb458  --> {\n  _id: 60967bedee23f558f88bb458,\n  status: 'BOT_LOADING',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-08T11:54:21.051Z,\n  updated_at: 2021-05-08T11:54:21.256Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:21.575Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-08T11:54:21.577Z",
  },
  {
    message: "DotaBot connectDotaBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-08T11:54:21.578Z",
  },
  {
    message: "DotaBot connecting...",
    level: "debug",
    timestamp: "2021-05-08T11:54:21.579Z",
  },
  {
    message: "DotaBot logOnToSteam logging on steamUser...",
    level: "debug",
    timestamp: "2021-05-08T11:54:21.962Z",
  },
  {
    message: "DotaBot set steam persona state and name.",
    level: "debug",
    timestamp: "2021-05-08T11:54:22.926Z",
  },
  {
    message: "DotaBot Received servers.",
    level: "debug",
    timestamp: "2021-05-08T11:54:22.938Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.008Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.010Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.068Z",
  },
  {
    message: "Activating queue",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.072Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.075Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.077Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_ONLINE steamId64 76561199139099147  --> {\n  _id: 60967bedee23f558f88bb458,\n  status: 'BOT_ONLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-08T11:54:21.051Z,\n  updated_at: 2021-05-08T11:54:25.078Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.150Z",
  },
  {
    message: "lobbyManager loadBot loaded",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.151Z",
  },
  {
    message: "lobbyManager loadBot done",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.152Z",
  },
  {
    message:
      "DotaBot createDotaBotLobby inhouse-lobby-60967bd9ee23f558f88bb457 rotten-seahorse-19  DOTA_GAMEMODE_1V1MID 21  76561199139099147",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.153Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.155Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.157Z",
  },
  {
    message:
      "DotaBot createPracticeLobby {\n  game_name: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  server_region: 5,\n  game_mode: 21,\n  series_type: 1,\n  game_version: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  allow_spectating: true,\n  pass_key: 'rotten-seahorse-19',\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  visibility: 0,\n  cm_pick: 0,\n  leagueid: 13130\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.160Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.169Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 8678",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.459Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.809Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  null  lobby--> {\n  lobby_id: Long { low: 304511956, high: 6329726, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'rotten-seahorse-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [] ",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.838Z",
  },
  {
    message:
      "DotaBot practiceLobbyResponse { eresult: 1, debug_message: null }",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.843Z",
  },
  {
    message: "DotaBot createDotaBotLobby practice lobby created",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.851Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27185966467152852   --> null",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.885Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.dotaLobbyId 27185966467152852 not found. Bot 60967bedee23f558f88bb458 leaving lobby...",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.887Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_IN_LOBBY steamId64 76561199139099147  --> {\n  _id: 60967bedee23f558f88bb458,\n  status: 'BOT_IN_LOBBY',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-08T11:54:21.051Z,\n  updated_at: 2021-05-08T11:54:25.852Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.922Z",
  },
  {
    message: "DotaBot createDotaBotLobby bot status updated",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.923Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.924Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.924Z",
  },
  {
    message: "DotaBot practiceLobbyKickFromTeam 1178833419",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.924Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-08T11:54:25.934Z",
  },
  {
    message:
      "DotaBot practiceLobbyResponse { eresult: 1, debug_message: null }",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.609Z",
  },
  {
    message:
      "DotaBot practiceLobbyKickFromTeam response undefined .CMsgGenericResult",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.610Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.611Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.612Z",
  },
  {
    message: "DotaBot joinChat Lobby_27185966467152852",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.614Z",
  },
  {
    message: "enterLobbyP dotaLobbyId: 27185966467152852",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.618Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.620Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_BOT_STARTED',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458,\n  dotaLobbyId: '27185966467152852'\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.656Z",
  },
  {
    message: "updateLobby done. 60967bd9ee23f558f88bb457 STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.657Z",
  },
  {
    message:
      "STATE_BOT_ASSIGNED to STATE_BOT_STARTED 60967bd9ee23f558f88bb457 STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.657Z",
  },
  {
    message:
      "runLobby 60967bd9ee23f558f88bb457 STATE_BOT_ASSIGNED to STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.658Z",
  },
  {
    message: "LobbyManager getBot 60967bedee23f558f88bb458 ",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.658Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 60967bd9ee23f558f88bb457,\n  players: [ '76561198003549651', '76561198003810536' ]\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.690Z",
  },
  {
    message:
      "lobby run STATE_BOT_STARTED lobbyState {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_BOT_STARTED',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: '60967bedee23f558f88bb458',\n  dotaLobbyId: '27185966467152852'\n} players [ '76561198003549651', '76561198003810536' ] ",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.692Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.693Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.693Z",
  },
  {
    message: "DotaBot inviteToLobby 76561198003549651",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.694Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.701Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.704Z",
  },
  {
    message: "DotaBot inviteToLobby 76561198003810536",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.704Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.710Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458,\n  dotaLobbyId: '27185966467152852'\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.738Z",
  },
  {
    message:
      "runLobby 60967bd9ee23f558f88bb457 STATE_BOT_STARTED to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.739Z",
  },
  {
    message: "LobbyManager getBot 60967bedee23f558f88bb458 ",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.739Z",
  },
  {
    message:
      "membersToPlayerState playerState {} members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.748Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003549651', '76561198003810536' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.751Z",
  },
  {
    message:
      "runLobby 60967bd9ee23f558f88bb457 STATE_WAITING_FOR_PLAYERS to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-08T11:54:26.752Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-08T11:54:33.310Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 304511956, high: 6329726, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'rotten-seahorse-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 304511956, high: 6329726, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'cawo_14',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [ Long { low: 43283923, high: 17825793, unsigned: true } ],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'rotten-seahorse-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198003549651', '76561198003810536' ] ",
    level: "debug",
    timestamp: "2021-05-08T11:54:33.436Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-08T11:54:33.438Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites 76561198003549651 newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'cawo_14',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] members {\n  left: [],\n  joined: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'cawo_14',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  changedSlot: []\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:33.460Z",
  },
  {
    message: "DotaBot processLobbyUpdate member joined 76561198003810536 ",
    level: "debug",
    timestamp: "2021-05-08T11:54:33.461Z",
  },
  {
    message:
      "membersToPlayerState playerState {} members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'cawo_14',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-08T11:54:33.471Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003549651', '76561198003810536' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-08T11:54:33.472Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27185966467152852   --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458,\n  dotaLobbyId: '27185966467152852'\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:33.512Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-08T11:54:38.408Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 304511956, high: 6329726, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'cawo_14',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [ Long { low: 43283923, high: 17825793, unsigned: true } ],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'rotten-seahorse-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 304511956, high: 6329726, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [ Long { low: 43283923, high: 17825793, unsigned: true } ],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'rotten-seahorse-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198003549651', '76561198003810536' ] ",
    level: "debug",
    timestamp: "2021-05-08T11:54:38.462Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-08T11:54:38.463Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'cawo_14',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites 76561198003549651 newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-08T11:54:38.512Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198003810536': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-08T11:54:38.524Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003549651', '76561198003810536' ] playerState { '76561198003810536': 1 } ",
    level: "debug",
    timestamp: "2021-05-08T11:54:38.525Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27185966467152852   --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458,\n  dotaLobbyId: '27185966467152852'\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:38.586Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-08T11:54:41.409Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 304511956, high: 6329726, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [ Long { low: 43283923, high: 17825793, unsigned: true } ],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'rotten-seahorse-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 304511956, high: 6329726, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'Jujughost',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'rotten-seahorse-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198003549651', '76561198003810536' ] ",
    level: "debug",
    timestamp: "2021-05-08T11:54:41.484Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-08T11:54:41.485Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'Jujughost',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] members {\n  left: [],\n  joined: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'Jujughost',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  changedSlot: []\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:41.542Z",
  },
  {
    message: "DotaBot processLobbyUpdate member joined 76561198003549651 ",
    level: "debug",
    timestamp: "2021-05-08T11:54:41.543Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198003810536': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'Jujughost',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-08T11:54:41.558Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003549651', '76561198003810536' ] playerState { '76561198003810536': 1 } ",
    level: "debug",
    timestamp: "2021-05-08T11:54:41.559Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27185966467152852   --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458,\n  dotaLobbyId: '27185966467152852'\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:41.593Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-08T11:54:43.859Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 304511956, high: 6329726, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'Jujughost',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'rotten-seahorse-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 304511956, high: 6329726, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'rotten-seahorse-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198003549651', '76561198003810536' ] ",
    level: "debug",
    timestamp: "2021-05-08T11:54:43.921Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-08T11:54:43.922Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'Jujughost',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-08T11:54:43.994Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198003810536': 1, '76561198003549651': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.014Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003549651', '76561198003810536' ] playerState { '76561198003810536': 1, '76561198003549651': 1 } ",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.015Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.016Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27185966467152852",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.017Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 0",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.018Z",
  },
  {
    message: "LobbyManager onLobbyReady 27185966467152852",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.019Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27185966467152852   --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458,\n  dotaLobbyId: '27185966467152852'\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.057Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 60967bd9ee23f558f88bb457 inhouse-lobby-60967bd9ee23f558f88bb457",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.058Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.059Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.060Z",
  },
  {
    message:
      "LobbyManager runLobby 60967bd9ee23f558f88bb457 STATE_WAITING_FOR_PLAYERS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.060Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27185966467152852   --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458,\n  dotaLobbyId: '27185966467152852'\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.066Z",
  },
  {
    message:
      "DB findLobbyById _id 60967bd9ee23f558f88bb457   --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458,\n  dotaLobbyId: '27185966467152852'\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.103Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.105Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 60967bd9ee23f558f88bb457,\n  players: [ '76561198003549651', '76561198003810536' ]\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.139Z",
  },
  {
    message:
      "validateLobbyPlayers 60967bd9ee23f558f88bb457 end STATE_WAITING_FOR_PLAYERS to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.140Z",
  },
  {
    message: "LobbyManager getBot 60967bedee23f558f88bb458 ",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.141Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198003810536': 1, '76561198003549651': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.159Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003549651', '76561198003810536' ] playerState { '76561198003810536': 1, '76561198003549651': 1 } ",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.160Z",
  },
  {
    message: "lobby run isDotaLobbyReady true",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.160Z",
  },
  {
    message:
      "LobbyManager onStartDotaLobby 60967bd9ee23f558f88bb457 60967bedee23f558f88bb458 STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.161Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.162Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.163Z",
  },
  {
    message: "DotaBot launchPracticeLobby",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.163Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.165Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.920Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 304511956, high: 6329726, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'rotten-seahorse-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 304511956, high: 6329726, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 1,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1689486512, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'rotten-seahorse-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [ { id: 7434, contents: [ByteBuffer] } ],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 47727,\n      guild_primary_color: 0,\n      guild_secondary_color: 0,\n      guild_pattern: 0,\n      guild_logo: [Long],\n      guild_points: 136107,\n      guild_event: 19,\n      guild_flags: 1,\n      team_for_guild: 0,\n      guild_tag: 'D.G.',\n      guild_weekly_percentile: 91\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198003549651', '76561198003810536' ] ",
    level: "debug",
    timestamp: "2021-05-08T11:54:44.990Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.022Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.057Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198003810536': 1, '76561198003549651': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.083Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003549651', '76561198003810536' ] playerState { '76561198003810536': 1, '76561198003549651': 1 } ",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.084Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.084Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27185966467152852",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.085Z",
  },
  {
    message:
      "DotaBot practiceLobbyResponse { eresult: 1, debug_message: null }",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.099Z",
  },
  {
    message: "DotaBot launchPracticeLobby response undefined",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.101Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.106Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.107Z",
  },
  {
    message: "DotaBot leaveChat Lobby_27185966467152852",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.108Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 3001",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.122Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.129Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 304511956, high: 6329726, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 1,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1689486512, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'rotten-seahorse-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [ { id: 7434, contents: [ByteBuffer] } ],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 47727,\n      guild_primary_color: 0,\n      guild_secondary_color: 0,\n      guild_pattern: 0,\n      guild_logo: [Long],\n      guild_points: 136107,\n      guild_event: 19,\n      guild_flags: 1,\n      team_for_guild: 0,\n      guild_tag: 'D.G.',\n      guild_weekly_percentile: 91\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 304511956, high: 6329726, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: -1089113078, high: 20988843, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 1,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1689486512, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'rotten-seahorse-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [ { id: 7434, contents: [ByteBuffer] } ],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: 1620474884,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 47727,\n      guild_primary_color: 0,\n      guild_secondary_color: 0,\n      guild_pattern: 0,\n      guild_logo: [Long],\n      guild_points: 136107,\n      guild_event: 19,\n      guild_flags: 1,\n      team_for_guild: 0,\n      guild_tag: 'D.G.',\n      guild_weekly_percentile: 91\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198003549651', '76561198003810536' ] ",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.197Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.197Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.250Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198003810536': 1, '76561198003549651': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.265Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003549651', '76561198003810536' ] playerState { '76561198003810536': 1, '76561198003549651': 1 } ",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.266Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.266Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27185966467152852",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.267Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.270Z",
  },
  {
    message: "dota bot startDotaLobby matchId 5984453808",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.271Z",
  },
  {
    message: "LobbyManager onStartDotaLobby matchId 5984453808 leagueid ",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.272Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27185966467152852   --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458,\n  dotaLobbyId: '27185966467152852'\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.277Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458,\n  dotaLobbyId: '27185966467152852',\n  matchId: '5984453808',\n  startedAt: 2021-05-08T11:54:44.161Z\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.320Z",
  },
  {
    message: "LobbyManager onStartDotaLobby true",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.320Z",
  },
  {
    message: "LobbyManager onStartDotaLobby false",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.321Z",
  },
  {
    message:
      "runLobby 60967bd9ee23f558f88bb457 STATE_WAITING_FOR_PLAYERS to STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.321Z",
  },
  {
    message:
      "runLobby 60967bd9ee23f558f88bb457 STATE_MATCH_IN_PROGRESS to STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.321Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 1",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.322Z",
  },
  {
    message: "LobbyManager onLobbyReady 27185966467152852",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.322Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27185966467152852   --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458,\n  dotaLobbyId: '27185966467152852',\n  matchId: '5984453808',\n  startedAt: 2021-05-08T11:54:44.161Z\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.360Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 60967bd9ee23f558f88bb457 inhouse-lobby-60967bd9ee23f558f88bb457",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.361Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.361Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 1",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.362Z",
  },
  {
    message: "LobbyManager onLobbyReady 27185966467152852",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.362Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27185966467152852   --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458,\n  dotaLobbyId: '27185966467152852',\n  matchId: '5984453808',\n  startedAt: 2021-05-08T11:54:44.161Z\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.398Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 60967bd9ee23f558f88bb457 inhouse-lobby-60967bd9ee23f558f88bb457",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.398Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.399Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 1",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.400Z",
  },
  {
    message:
      "LobbyManager runLobby 60967bd9ee23f558f88bb457 STATE_MATCH_IN_PROGRESS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.400Z",
  },
  {
    message:
      "DB findLobbyById _id 60967bd9ee23f558f88bb457   --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458,\n  dotaLobbyId: '27185966467152852',\n  matchId: '5984453808',\n  startedAt: 2021-05-08T11:54:44.161Z\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.444Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.445Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.446Z",
  },
  {
    message:
      "LobbyManager runLobby 60967bd9ee23f558f88bb457 STATE_MATCH_IN_PROGRESS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.446Z",
  },
  {
    message:
      "DB findLobbyById _id 60967bd9ee23f558f88bb457   --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458,\n  dotaLobbyId: '27185966467152852',\n  matchId: '5984453808',\n  startedAt: 2021-05-08T11:54:44.161Z\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.482Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.482Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27185966467152852   --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458,\n  dotaLobbyId: '27185966467152852',\n  matchId: '5984453808',\n  startedAt: 2021-05-08T11:54:44.161Z\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.573Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7581",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.611Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.614Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 304511956, high: 6329726, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: -1089113078, high: 20988843, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 1,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1689486512, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'rotten-seahorse-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [ { id: 7434, contents: [ByteBuffer] } ],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: 1620474884,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 47727,\n      guild_primary_color: 0,\n      guild_secondary_color: 0,\n      guild_pattern: 0,\n      guild_logo: [Long],\n      guild_points: 136107,\n      guild_event: 19,\n      guild_flags: 1,\n      team_for_guild: 0,\n      guild_tag: 'D.G.',\n      guild_weekly_percentile: 91\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 304511956, high: 6329726, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: -1089113078, high: 20988843, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 2,\n  connect: '=[A:1:3205854218:17323]',\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: true,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1689486512, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'rotten-seahorse-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [ { id: 7434, contents: [ByteBuffer] } ],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: 1620474884,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 47727,\n      guild_primary_color: 0,\n      guild_secondary_color: 0,\n      guild_pattern: 0,\n      guild_logo: [Long],\n      guild_points: 136107,\n      guild_event: 19,\n      guild_flags: 1,\n      team_for_guild: 0,\n      guild_tag: 'D.G.',\n      guild_weekly_percentile: 91\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198003549651', '76561198003810536' ] ",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.686Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.706Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.735Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198003810536': 1, '76561198003549651': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.804Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003549651', '76561198003810536' ] playerState { '76561198003810536': 1, '76561198003549651': 1 } ",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.805Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.805Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27185966467152852",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.806Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 0",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.806Z",
  },
  {
    message: "LobbyManager onLobbyReady 27185966467152852",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.806Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27185966467152852   --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458,\n  dotaLobbyId: '27185966467152852',\n  matchId: '5984453808',\n  startedAt: 2021-05-08T11:54:44.161Z\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.842Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 60967bd9ee23f558f88bb457 inhouse-lobby-60967bd9ee23f558f88bb457",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.843Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.843Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.844Z",
  },
  {
    message:
      "LobbyManager runLobby 60967bd9ee23f558f88bb457 STATE_MATCH_IN_PROGRESS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.844Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27185966467152852   --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458,\n  dotaLobbyId: '27185966467152852',\n  matchId: '5984453808',\n  startedAt: 2021-05-08T11:54:44.161Z\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.850Z",
  },
  {
    message:
      "DB findLobbyById _id 60967bd9ee23f558f88bb457   --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458,\n  dotaLobbyId: '27185966467152852',\n  matchId: '5984453808',\n  startedAt: 2021-05-08T11:54:44.161Z\n}",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.890Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-08T11:54:45.890Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-08T12:09:22.583Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 304511956, high: 6329726, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: -1089113078, high: 20988843, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 2,\n  connect: '=[A:1:3205854218:17323]',\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: true,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1689486512, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'rotten-seahorse-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [ { id: 7434, contents: [ByteBuffer] } ],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: 1620474884,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 47727,\n      guild_primary_color: 0,\n      guild_secondary_color: 0,\n      guild_pattern: 0,\n      guild_logo: [Long],\n      guild_points: 136107,\n      guild_event: 19,\n      guild_flags: 1,\n      team_for_guild: 0,\n      guild_tag: 'D.G.',\n      guild_weekly_percentile: 91\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 304511956, high: 6329726, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: 28,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: 406,\n      meta_xp: 952,\n      meta_xp_awarded: 0,\n      leaver_status: 0,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: 28,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: 424,\n      meta_xp: 757,\n      meta_xp_awarded: 0,\n      leaver_status: 0,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: -1089113078, high: 20988843, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 3,\n  connect: '=[A:1:3205854218:17323]',\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: true,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 6,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1689486512, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'rotten-seahorse-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [ { id: 7434, contents: [ByteBuffer] } ],\n  save_game: null,\n  first_blood_happened: true,\n  match_outcome: 3,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: 1620474884,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: 715,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 47727,\n      guild_primary_color: 0,\n      guild_secondary_color: 0,\n      guild_pattern: 0,\n      guild_logo: [Long],\n      guild_points: 136107,\n      guild_event: 19,\n      guild_flags: 1,\n      team_for_guild: 0,\n      guild_tag: 'D.G.',\n      guild_weekly_percentile: 91\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198003549651', '76561198003810536' ] ",
    level: "debug",
    timestamp: "2021-05-08T12:09:22.649Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-08T12:09:22.650Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: 28,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: 406,\n    meta_xp: 952,\n    meta_xp_awarded: 0,\n    leaver_status: 0,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: 28,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: 424,\n    meta_xp: 757,\n    meta_xp_awarded: 0,\n    leaver_status: 0,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-08T12:09:22.680Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198003810536': 1, '76561198003549651': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: 28,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: 406,\n    meta_xp: 952,\n    meta_xp_awarded: 0,\n    leaver_status: 0,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: 28,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: 424,\n    meta_xp: 757,\n    meta_xp_awarded: 0,\n    leaver_status: 0,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-08T12:09:22.699Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003549651', '76561198003810536' ] playerState { '76561198003810536': 1, '76561198003549651': 1 } ",
    level: "debug",
    timestamp: "2021-05-08T12:09:22.701Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-08T12:09:22.701Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27185966467152852",
    level: "debug",
    timestamp: "2021-05-08T12:09:22.701Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 0",
    level: "debug",
    timestamp: "2021-05-08T12:09:22.702Z",
  },
  {
    message: "LobbyManager onLobbyReady 27185966467152852",
    level: "debug",
    timestamp: "2021-05-08T12:09:22.703Z",
  },
  {
    message: "dotaBot EVENT_MATCH_OUTCOME  ",
    level: "debug",
    timestamp: "2021-05-08T12:09:22.704Z",
  },
  {
    message:
      "LobbyManager queueEvent onMatchOutcome 27185966467152852,3,.CSODOTALobbyMember,.CSODOTALobbyMember,.CSODOTALobbyMember",
    level: "debug",
    timestamp: "2021-05-08T12:09:22.704Z",
  },
  {
    message: "dotaBot practiceLobbyCleared emitted",
    level: "debug",
    timestamp: "2021-05-08T12:09:22.707Z",
  },
  {
    message: "LobbyManager queueEvent onBotLobbyLeft 60967bedee23f558f88bb458",
    level: "debug",
    timestamp: "2021-05-08T12:09:22.708Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 8081",
    level: "debug",
    timestamp: "2021-05-08T12:09:22.710Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27185966467152852   --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458,\n  dotaLobbyId: '27185966467152852',\n  matchId: '5984453808',\n  startedAt: 2021-05-08T11:54:44.161Z\n}",
    level: "debug",
    timestamp: "2021-05-08T12:09:22.745Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27185966467152852   --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458,\n  dotaLobbyId: '27185966467152852',\n  matchId: '5984453808',\n  startedAt: 2021-05-08T11:54:44.161Z\n}",
    level: "debug",
    timestamp: "2021-05-08T12:09:22.749Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 60967bd9ee23f558f88bb457 inhouse-lobby-60967bd9ee23f558f88bb457",
    level: "debug",
    timestamp: "2021-05-08T12:09:22.750Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-08T12:09:22.751Z",
  },
  {
    message: "LobbyManager processEventQueue onMatchOutcome 2",
    level: "debug",
    timestamp: "2021-05-08T12:09:22.751Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27185966467152852   --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458,\n  dotaLobbyId: '27185966467152852',\n  matchId: '5984453808',\n  startedAt: 2021-05-08T11:54:44.161Z\n}",
    level: "debug",
    timestamp: "2021-05-08T12:09:22.785Z",
  },
  {
    message:
      "LobbyManager onMatchOutcome 27185966467152852 3 60967bd9ee23f558f88bb457",
    level: "debug",
    timestamp: "2021-05-08T12:09:22.786Z",
  },
  {
    message:
      "DB findLobbyById _id 60967bd9ee23f558f88bb457   --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458,\n  dotaLobbyId: '27185966467152852',\n  matchId: '5984453808',\n  startedAt: 2021-05-08T11:54:44.161Z\n}",
    level: "debug",
    timestamp: "2021-05-08T12:09:22.824Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 60967bd9ee23f558f88bb457,\n  players: [ '76561198003549651', '76561198003810536' ]\n}",
    level: "debug",
    timestamp: "2021-05-08T12:09:22.876Z",
  },
  {
    message:
      "DB updateLobbyState  state STATE_MATCH_STATS --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_STATS',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458,\n  dotaLobbyId: '27185966467152852',\n  matchId: '5984453808',\n  startedAt: 2021-05-08T11:54:44.161Z\n}",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.006Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_MATCH_STATS",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.006Z",
  },
  {
    message: "LobbyManager processEventQueue onBotLobbyLeft 2",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.007Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_IDLE _id 60967bedee23f558f88bb458  --> {\n  _id: 60967bedee23f558f88bb458,\n  status: 'BOT_IDLE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-08T11:54:21.051Z,\n  updated_at: 2021-05-08T12:09:23.008Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.047Z",
  },
  {
    message: "DB findAllLobbiesInState state STATE_WAITING_FOR_BOT  --> []",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.077Z",
  },
  {
    message: "LobbyManager onBotAvailable 0",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.077Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 1",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.078Z",
  },
  {
    message:
      "LobbyManager runLobby 60967bd9ee23f558f88bb457 STATE_MATCH_IN_PROGRESS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.078Z",
  },
  {
    message:
      "DB findLobbyById _id 60967bd9ee23f558f88bb457   --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_STATS',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458,\n  dotaLobbyId: '27185966467152852',\n  matchId: '5984453808',\n  startedAt: 2021-05-08T11:54:44.161Z\n}",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.142Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_MATCH_STATS",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.143Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.143Z",
  },
  {
    message:
      "LobbyManager runLobby 60967bd9ee23f558f88bb457 STATE_MATCH_IN_PROGRESS STATE_MATCH_STATS",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.144Z",
  },
  {
    message:
      "DB findLobbyById _id 60967bd9ee23f558f88bb457   --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_STATS',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: 60967bedee23f558f88bb458,\n  dotaLobbyId: '27185966467152852',\n  matchId: '5984453808',\n  startedAt: 2021-05-08T11:54:44.161Z\n}",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.176Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_MATCH_STATS",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.176Z",
  },
  {
    message:
      "validateLobbyPlayers 60967bd9ee23f558f88bb457 default STATE_MATCH_STATS",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.177Z",
  },
  {
    message:
      "validateLobbyStateBot invalid lobby state for bot detected. Bot 60967bedee23f558f88bb458 leaving lobbyState 60967bd9ee23f558f88bb457 STATE_MATCH_STATS.",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.178Z",
  },
  {
    message:
      "LobbyManager botLeaveLobby 60967bd9ee23f558f88bb457 60967bedee23f558f88bb458",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.178Z",
  },
  {
    message: "LobbyManager loadBotById 60967bedee23f558f88bb458",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.179Z",
  },
  {
    message:
      "DB findBot  _id 60967bedee23f558f88bb458  --> {\n  _id: 60967bedee23f558f88bb458,\n  status: 'BOT_IDLE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-08T11:54:21.051Z,\n  updated_at: 2021-05-08T12:09:23.008Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.213Z",
  },
  {
    message: "LobbyManager loadBot 60967bedee23f558f88bb458",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.214Z",
  },
  {
    message: "LobbyManager getBot 60967bedee23f558f88bb458 ",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.214Z",
  },
  {
    message: "lobbyManager loadBot done",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.215Z",
  },
  {
    message:
      "DB unassignBotFromLobby lobby [object Object] botId 60967bedee23f558f88bb458  --> {\n  _id: 60967bedee23f558f88bb458,\n  status: 'BOT_IDLE',\n  lobbyCount: 0,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-08T11:54:21.051Z,\n  updated_at: 2021-05-08T12:09:23.259Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.298Z",
  },
  {
    message: "matchTracker addLobby  lobby [object Object]",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.299Z",
  },
  {
    message: "matchTracker run false",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.300Z",
  },
  {
    message: "matchTracker run lastCheck null ",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.300Z",
  },
  {
    message: "matchTracker setMatchDetails matchId 5984453808",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.301Z",
  },
  {
    message:
      "DB findLobbyById _id 60967bd9ee23f558f88bb457   --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_STATS',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: null,\n  dotaLobbyId: null,\n  matchId: '5984453808',\n  startedAt: 2021-05-08T11:54:44.161Z\n}",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.336Z",
  },
  {
    message:
      "matchTracker setMatchDetails lobby.id 60967bd9ee23f558f88bb457 5984453808",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.336Z",
  },
  {
    message: "matchTracker getOpenDotaMatchDetails 5984453808",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.337Z",
  },
  {
    message: "matchTracker no data, queueing 60967bd9ee23f558f88bb457",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.885Z",
  },
  {
    message: "matchTracker push 13520276 ",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.885Z",
  },
  {
    message: "matchTracker looping",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.886Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 60967bd9ee23f558f88bb457,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_COMPLETED',\n  password: 'rotten-seahorse-19',\n  createdOn: 2021-05-08T11:54:01.032Z,\n  updatedOn: 2021-05-08T11:54:01.032Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-60967bd9ee23f558f88bb457',\n  botId: null,\n  dotaLobbyId: null,\n  matchId: '5984453808',\n  startedAt: 2021-05-08T11:54:44.161Z\n}",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.930Z",
  },
  {
    message: "LobbyManager botLeaveLobby 60967bd9ee23f558f88bb457 null",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.931Z",
  },
  {
    message:
      "runLobby 60967bd9ee23f558f88bb457 STATE_MATCH_STATS to STATE_COMPLETED",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.931Z",
  },
  {
    message:
      "runLobby 60967bd9ee23f558f88bb457 STATE_COMPLETED to STATE_COMPLETED",
    level: "debug",
    timestamp: "2021-05-08T12:09:23.932Z",
  },
  {
    message: "matchTracker run false",
    level: "debug",
    timestamp: "2021-05-08T12:09:24.889Z",
  },
];
