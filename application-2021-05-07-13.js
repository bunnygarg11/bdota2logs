let b = [
  ,
  {
    message: "DB findActiveLobbiesForUser userId 76561198003549651  --> []",
    level: "debug",
    timestamp: "2021-05-07T07:31:05.915Z",
  },
  {
    message: "DB findPendingLobby  --> null",
    level: "debug",
    timestamp: "2021-05-07T07:31:05.952Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee'\n}",
    level: "debug",
    timestamp: "2021-05-07T07:31:06.065Z",
  },
  {
    message: "DB findActiveLobbiesForUser userId 76561198003810536  --> []",
    level: "debug",
    timestamp: "2021-05-07T07:31:26.708Z",
  },
  {
    message:
      "DB findPendingLobby  --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee'\n}",
    level: "debug",
    timestamp: "2021-05-07T07:31:26.738Z",
  },
  {
    message:
      "DB addPlayer  player 76561198003810536  --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_WAITING_FOR_QUEUE',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee'\n}",
    level: "debug",
    timestamp: "2021-05-07T07:31:26.779Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee'\n}",
    level: "debug",
    timestamp: "2021-05-07T07:31:26.821Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-07T07:31:26.822Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-07T07:31:26.824Z",
  },
  {
    message:
      "LobbyManager runLobby 6094ecb9c64df362b48b2cee STATE_WAITING_FOR_BOT STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-07T07:31:26.825Z",
  },
  {
    message:
      "DB findLobbyById _id 6094ecb9c64df362b48b2cee   --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_WAITING_FOR_BOT',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee'\n}",
    level: "debug",
    timestamp: "2021-05-07T07:31:26.899Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-07T07:31:26.900Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  players: [ '76561198003549651', '76561198003810536' ]\n}",
    level: "debug",
    timestamp: "2021-05-07T07:31:26.938Z",
  },
  {
    message:
      "validateLobbyPlayers 6094ecb9c64df362b48b2cee end STATE_WAITING_FOR_BOT to STATE_WAITING_FOR_BOT",
    level: "debug",
    timestamp: "2021-05-07T07:31:26.939Z",
  },
  {
    message: "STATE_WAITING_FOR_BOT 6094ecb9c64df362b48b2cee undefined",
    level: "debug",
    timestamp: "2021-05-07T07:31:26.940Z",
  },
  {
    message: "DB findUnassignedBot   --> null",
    level: "debug",
    timestamp: "2021-05-07T07:31:26.976Z",
  },
  {
    message:
      "DB findOrCreateBot steamId64 76561199139099147 accountName dynastyesports personaName my*****Name password St3@mAccountToBu!dlovelyAPI69 --> {\n  status: 'BOT_OFFLINE',\n  lobbyCount: 0,\n  _id: 6094eccec64df362b48b2cef,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T07:31:26.979Z,\n  updated_at: 2021-05-07T07:31:26.979Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T07:31:27.037Z",
  },
  {
    message: "lobby run findUnassignedBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-07T07:31:27.038Z",
  },
  {
    message:
      "DB assignBotToLobby lobby [object Object] botId 6094eccec64df362b48b2cef  --> {\n  _id: 6094eccec64df362b48b2cef,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T07:31:26.979Z,\n  updated_at: 2021-05-07T07:31:27.079Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T07:31:27.125Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_BOT_ASSIGNED',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef\n}",
    level: "debug",
    timestamp: "2021-05-07T07:31:27.174Z",
  },
  {
    message:
      "runLobby 6094ecb9c64df362b48b2cee STATE_WAITING_FOR_BOT to STATE_BOT_ASSIGNED",
    level: "debug",
    timestamp: "2021-05-07T07:31:27.175Z",
  },
  {
    message: "LobbyManager loadBotById 6094eccec64df362b48b2cef",
    level: "debug",
    timestamp: "2021-05-07T07:31:27.176Z",
  },
  {
    message:
      "DB findBot  _id 6094eccec64df362b48b2cef  --> {\n  _id: 6094eccec64df362b48b2cef,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T07:31:26.979Z,\n  updated_at: 2021-05-07T07:31:27.079Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T07:31:27.214Z",
  },
  {
    message: "LobbyManager loadBot 6094eccec64df362b48b2cef",
    level: "debug",
    timestamp: "2021-05-07T07:31:27.215Z",
  },
  {
    message: "LobbyManager getBot 6094eccec64df362b48b2cef ",
    level: "debug",
    timestamp: "2021-05-07T07:31:27.216Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_LOADING _id 6094eccec64df362b48b2cef  --> {\n  _id: 6094eccec64df362b48b2cef,\n  status: 'BOT_LOADING',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T07:31:26.979Z,\n  updated_at: 2021-05-07T07:31:27.216Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T07:31:27.253Z",
  },
  {
    message: "Blocking queue",
    level: "debug",
    timestamp: "2021-05-07T07:31:27.263Z",
  },
  {
    message: "DotaBot connectDotaBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-07T07:31:27.264Z",
  },
  {
    message: "DotaBot connecting...",
    level: "debug",
    timestamp: "2021-05-07T07:31:27.265Z",
  },
  {
    message: "DotaBot logOnToSteam logging on steamUser...",
    level: "debug",
    timestamp: "2021-05-07T07:31:27.897Z",
  },
  {
    message: "DotaBot Received servers.",
    level: "debug",
    timestamp: "2021-05-07T07:31:28.751Z",
  },
  {
    message: "DotaBot set steam persona state and name.",
    level: "debug",
    timestamp: "2021-05-07T07:31:28.758Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-07T07:31:30.616Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7388",
    level: "debug",
    timestamp: "2021-05-07T07:31:30.618Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-07T07:31:30.667Z",
  },
  {
    message: "Activating queue",
    level: "debug",
    timestamp: "2021-05-07T07:31:30.668Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-07T07:31:30.669Z",
  },
  {
    message: "DotaBot node-dota2 ready.",
    level: "debug",
    timestamp: "2021-05-07T07:31:30.672Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_ONLINE steamId64 76561199139099147  --> {\n  _id: 6094eccec64df362b48b2cef,\n  status: 'BOT_ONLINE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T07:31:26.979Z,\n  updated_at: 2021-05-07T07:31:30.674Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T07:31:30.712Z",
  },
  {
    message: "lobbyManager loadBot loaded",
    level: "debug",
    timestamp: "2021-05-07T07:31:30.713Z",
  },
  {
    message: "lobbyManager loadBot done",
    level: "debug",
    timestamp: "2021-05-07T07:31:30.713Z",
  },
  {
    message:
      "DotaBot createDotaBotLobby inhouse-lobby-6094ecb9c64df362b48b2cee massive-sloth-19  DOTA_GAMEMODE_1V1MID 21  76561199139099147",
    level: "debug",
    timestamp: "2021-05-07T07:31:30.714Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-07T07:31:30.715Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-07T07:31:30.715Z",
  },
  {
    message:
      "DotaBot createPracticeLobby {\n  game_name: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  server_region: 5,\n  game_mode: 21,\n  series_type: 1,\n  game_version: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  allow_spectating: true,\n  pass_key: 'massive-sloth-19',\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  allchat: true,\n  visibility: 0,\n  cm_pick: 0,\n  leagueid: 13130\n}",
    level: "debug",
    timestamp: "2021-05-07T07:31:30.718Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-07T07:31:30.729Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T07:31:31.429Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  null  lobby--> {\n  lobby_id: Long { low: 534310102, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'massive-sloth-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [] ",
    level: "debug",
    timestamp: "2021-05-07T07:31:31.463Z",
  },
  {
    message:
      "DotaBot practiceLobbyResponse { eresult: 1, debug_message: null }",
    level: "debug",
    timestamp: "2021-05-07T07:31:31.466Z",
  },
  {
    message: "DotaBot createDotaBotLobby practice lobby created",
    level: "debug",
    timestamp: "2021-05-07T07:31:31.468Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965969571030   --> null",
    level: "debug",
    timestamp: "2021-05-07T07:31:31.582Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate lobbyState.dotaLobbyId 27184965969571030 not found. Bot 6094eccec64df362b48b2cef leaving lobby...",
    level: "debug",
    timestamp: "2021-05-07T07:31:31.583Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_IN_LOBBY steamId64 76561199139099147  --> {\n  _id: 6094eccec64df362b48b2cef,\n  status: 'BOT_IN_LOBBY',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T07:31:26.979Z,\n  updated_at: 2021-05-07T07:31:31.468Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T07:31:31.620Z",
  },
  {
    message: "DotaBot createDotaBotLobby bot status updated",
    level: "debug",
    timestamp: "2021-05-07T07:31:31.623Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-07T07:31:31.624Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-07T07:31:31.625Z",
  },
  {
    message: "DotaBot practiceLobbyKickFromTeam 1178833419",
    level: "debug",
    timestamp: "2021-05-07T07:31:31.626Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-07T07:31:31.632Z",
  },
  {
    message:
      "DotaBot practiceLobbyResponse { eresult: 1, debug_message: null }",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.176Z",
  },
  {
    message:
      "DotaBot practiceLobbyKickFromTeam response undefined .CMsgGenericResult",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.177Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.178Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.178Z",
  },
  {
    message: "DotaBot joinChat Lobby_27184965969571030",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.179Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.181Z",
  },
  {
    message: "enterLobbyP dotaLobbyId: 27184965969571030",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.182Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_BOT_STARTED',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030'\n}",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.228Z",
  },
  {
    message: "updateLobby done. 6094ecb9c64df362b48b2cee STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.229Z",
  },
  {
    message:
      "STATE_BOT_ASSIGNED to STATE_BOT_STARTED 6094ecb9c64df362b48b2cee STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.229Z",
  },
  {
    message:
      "runLobby 6094ecb9c64df362b48b2cee STATE_BOT_ASSIGNED to STATE_BOT_STARTED",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.230Z",
  },
  {
    message: "LobbyManager getBot 6094eccec64df362b48b2cef ",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.230Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  players: [ '76561198003549651', '76561198003810536' ]\n}",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.261Z",
  },
  {
    message:
      "lobby run STATE_BOT_STARTED lobbyState {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_BOT_STARTED',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: '6094eccec64df362b48b2cef',\n  dotaLobbyId: '27184965969571030'\n} players [ '76561198003549651', '76561198003810536' ] ",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.263Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.264Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.265Z",
  },
  {
    message: "DotaBot inviteToLobby 76561198003549651",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.266Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.273Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.278Z",
  },
  {
    message: "DotaBot inviteToLobby 76561198003810536",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.279Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.282Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030'\n}",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.311Z",
  },
  {
    message:
      "runLobby 6094ecb9c64df362b48b2cee STATE_BOT_STARTED to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.312Z",
  },
  {
    message: "LobbyManager getBot 6094eccec64df362b48b2cef ",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.312Z",
  },
  {
    message:
      "membersToPlayerState playerState {} members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.322Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003549651', '76561198003810536' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.325Z",
  },
  {
    message:
      "runLobby 6094ecb9c64df362b48b2cee STATE_WAITING_FOR_PLAYERS to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.326Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 8678",
    level: "debug",
    timestamp: "2021-05-07T07:31:32.917Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T07:31:37.866Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 534310102, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'massive-sloth-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 534310102, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'Jujughost',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [ Long { low: 43544808, high: 17825793, unsigned: true } ],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'massive-sloth-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198003549651', '76561198003810536' ] ",
    level: "debug",
    timestamp: "2021-05-07T07:31:37.958Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-07T07:31:37.959Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites 76561198003810536 newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'Jujughost',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] members {\n  left: [],\n  joined: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'Jujughost',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  changedSlot: []\n}",
    level: "debug",
    timestamp: "2021-05-07T07:31:37.995Z",
  },
  {
    message: "DotaBot processLobbyUpdate member joined 76561198003549651 ",
    level: "debug",
    timestamp: "2021-05-07T07:31:37.997Z",
  },
  {
    message:
      "membersToPlayerState playerState {} members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'Jujughost',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T07:31:38.011Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003549651', '76561198003810536' ] playerState {} ",
    level: "debug",
    timestamp: "2021-05-07T07:31:38.012Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965969571030   --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030'\n}",
    level: "debug",
    timestamp: "2021-05-07T07:31:38.045Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T07:31:44.616Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 534310102, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'Jujughost',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [ Long { low: 43544808, high: 17825793, unsigned: true } ],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'massive-sloth-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 534310102, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [ Long { low: 43544808, high: 17825793, unsigned: true } ],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'massive-sloth-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198003549651', '76561198003810536' ] ",
    level: "debug",
    timestamp: "2021-05-07T07:31:44.711Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-07T07:31:44.712Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'Jujughost',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites 76561198003810536 newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-07T07:31:44.749Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198003549651': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T07:31:44.772Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003549651', '76561198003810536' ] playerState { '76561198003549651': 1 } ",
    level: "debug",
    timestamp: "2021-05-07T07:31:44.781Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965969571030   --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030'\n}",
    level: "debug",
    timestamp: "2021-05-07T07:31:44.818Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T07:32:08.918Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 534310102, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [ Long { low: 43544808, high: 17825793, unsigned: true } ],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'massive-sloth-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 534310102, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'cawo_14',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'massive-sloth-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198003549651', '76561198003810536' ] ",
    level: "debug",
    timestamp: "2021-05-07T07:32:09.004Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-07T07:32:09.005Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'cawo_14',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] members {\n  left: [],\n  joined: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'cawo_14',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  changedSlot: []\n}",
    level: "debug",
    timestamp: "2021-05-07T07:32:09.044Z",
  },
  {
    message: "DotaBot processLobbyUpdate member joined 76561198003810536 ",
    level: "debug",
    timestamp: "2021-05-07T07:32:09.045Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198003549651': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'cawo_14',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T07:32:09.064Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003549651', '76561198003810536' ] playerState { '76561198003549651': 1 } ",
    level: "debug",
    timestamp: "2021-05-07T07:32:09.065Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965969571030   --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030'\n}",
    level: "debug",
    timestamp: "2021-05-07T07:32:09.100Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T07:32:11.767Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 534310102, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'cawo_14',\n      slot: null,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'massive-sloth-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 534310102, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'massive-sloth-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198003549651', '76561198003810536' ] ",
    level: "debug",
    timestamp: "2021-05-07T07:32:11.832Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-07T07:32:11.833Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'cawo_14',\n    slot: null,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-07T07:32:11.873Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198003549651': 1, '76561198003810536': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T07:32:11.894Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003549651', '76561198003810536' ] playerState { '76561198003549651': 1, '76561198003810536': 1 } ",
    level: "debug",
    timestamp: "2021-05-07T07:32:11.895Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-07T07:32:11.896Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27184965969571030",
    level: "debug",
    timestamp: "2021-05-07T07:32:11.897Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 0",
    level: "debug",
    timestamp: "2021-05-07T07:32:11.898Z",
  },
  {
    message: "LobbyManager onLobbyReady 27184965969571030",
    level: "debug",
    timestamp: "2021-05-07T07:32:11.898Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965969571030   --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030'\n}",
    level: "debug",
    timestamp: "2021-05-07T07:32:11.942Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 6094ecb9c64df362b48b2cee inhouse-lobby-6094ecb9c64df362b48b2cee",
    level: "debug",
    timestamp: "2021-05-07T07:32:11.943Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T07:32:11.944Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-07T07:32:11.945Z",
  },
  {
    message:
      "LobbyManager runLobby 6094ecb9c64df362b48b2cee STATE_WAITING_FOR_PLAYERS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T07:32:11.946Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965969571030   --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030'\n}",
    level: "debug",
    timestamp: "2021-05-07T07:32:11.950Z",
  },
  {
    message:
      "DB findLobbyById _id 6094ecb9c64df362b48b2cee   --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030'\n}",
    level: "debug",
    timestamp: "2021-05-07T07:32:11.986Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T07:32:11.987Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  players: [ '76561198003549651', '76561198003810536' ]\n}",
    level: "debug",
    timestamp: "2021-05-07T07:32:12.027Z",
  },
  {
    message:
      "validateLobbyPlayers 6094ecb9c64df362b48b2cee end STATE_WAITING_FOR_PLAYERS to STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T07:32:12.028Z",
  },
  {
    message: "LobbyManager getBot 6094eccec64df362b48b2cef ",
    level: "debug",
    timestamp: "2021-05-07T07:32:12.028Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198003549651': 1, '76561198003810536': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T07:32:12.046Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003549651', '76561198003810536' ] playerState { '76561198003549651': 1, '76561198003810536': 1 } ",
    level: "debug",
    timestamp: "2021-05-07T07:32:12.047Z",
  },
  {
    message: "lobby run isDotaLobbyReady true",
    level: "debug",
    timestamp: "2021-05-07T07:32:12.047Z",
  },
  {
    message:
      "LobbyManager onStartDotaLobby 6094ecb9c64df362b48b2cee 6094eccec64df362b48b2cef STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T07:32:12.048Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-07T07:32:12.048Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-07T07:32:12.049Z",
  },
  {
    message: "DotaBot launchPracticeLobby",
    level: "debug",
    timestamp: "2021-05-07T07:32:12.050Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-07T07:32:12.054Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T07:32:12.826Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 534310102, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 0,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  team_details: [],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: null,\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'massive-sloth-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [],\n  lobby_event_points: [],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 534310102, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 1,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1687642652, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'massive-sloth-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [ { id: 7434, contents: [ByteBuffer] } ],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 47727,\n      guild_primary_color: 0,\n      guild_secondary_color: 0,\n      guild_pattern: 0,\n      guild_logo: [Long],\n      guild_points: 125687,\n      guild_event: 19,\n      guild_flags: 1,\n      team_for_guild: 0,\n      guild_tag: 'D.G.',\n      guild_weekly_percentile: 91\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198003549651', '76561198003810536' ] ",
    level: "debug",
    timestamp: "2021-05-07T07:32:12.900Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-07T07:32:12.902Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-07T07:32:12.990Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198003549651': 1, '76561198003810536': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.035Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003549651', '76561198003810536' ] playerState { '76561198003549651': 1, '76561198003810536': 1 } ",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.037Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.039Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27184965969571030",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.040Z",
  },
  {
    message:
      "DotaBot practiceLobbyResponse { eresult: 1, debug_message: null }",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.050Z",
  },
  {
    message: "DotaBot launchPracticeLobby response undefined",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.051Z",
  },
  {
    message: "Scheduling job",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.056Z",
  },
  {
    message: "Executing job",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.057Z",
  },
  {
    message: "DotaBot leaveChat Lobby_27184965969571030",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.058Z",
  },
  {
    message: "Queue is empty, going idle",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.073Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 3001",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.097Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.109Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 534310102, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 0, high: 0, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 1,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1687642652, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'massive-sloth-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [ { id: 7434, contents: [ByteBuffer] } ],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: null,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 47727,\n      guild_primary_color: 0,\n      guild_secondary_color: 0,\n      guild_pattern: 0,\n      guild_logo: [Long],\n      guild_points: 125687,\n      guild_event: 19,\n      guild_flags: 1,\n      team_for_guild: 0,\n      guild_tag: 'D.G.',\n      guild_weekly_percentile: 91\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 534310102, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 533653514, high: 20988833, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 1,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1687642652, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'massive-sloth-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [ { id: 7434, contents: [ByteBuffer] } ],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: 1620372732,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 47727,\n      guild_primary_color: 0,\n      guild_secondary_color: 0,\n      guild_pattern: 0,\n      guild_logo: [Long],\n      guild_points: 125687,\n      guild_event: 19,\n      guild_flags: 1,\n      team_for_guild: 0,\n      guild_tag: 'D.G.',\n      guild_weekly_percentile: 91\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198003549651', '76561198003810536' ] ",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.217Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.218Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.259Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198003549651': 1, '76561198003810536': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.315Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003549651', '76561198003810536' ] playerState { '76561198003549651': 1, '76561198003810536': 1 } ",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.316Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.317Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27184965969571030",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.317Z",
  },
  {
    message: "dota bot startDotaLobby matchId 5982609948",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.352Z",
  },
  {
    message: "LobbyManager onStartDotaLobby matchId 5982609948 leagueid ",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.353Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965969571030   --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030'\n}",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.362Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965969571030   --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_WAITING_FOR_PLAYERS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030'\n}",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.418Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030',\n  matchId: '5982609948',\n  startedAt: 2021-05-07T07:32:12.048Z\n}",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.422Z",
  },
  {
    message: "matchTracker run false",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.446Z",
  },
  {
    message: "matchTracker setMatchDetails matchId 5982609948",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.455Z",
  },
  {
    message: "LobbyManager onStartDotaLobby true",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.456Z",
  },
  {
    message: "LobbyManager onStartDotaLobby false",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.456Z",
  },
  {
    message:
      "runLobby 6094ecb9c64df362b48b2cee STATE_WAITING_FOR_PLAYERS to STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.457Z",
  },
  {
    message:
      "runLobby 6094ecb9c64df362b48b2cee STATE_MATCH_IN_PROGRESS to STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.457Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 1",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.457Z",
  },
  {
    message: "LobbyManager onLobbyReady 27184965969571030",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.458Z",
  },
  {
    message:
      "DB findLobbyById _id 6094ecb9c64df362b48b2cee   --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030',\n  matchId: '5982609948',\n  startedAt: 2021-05-07T07:32:12.048Z\n}",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.491Z",
  },
  {
    message:
      "matchTracker setMatchDetails lobby.id 6094ecb9c64df362b48b2cee 5982609948",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.492Z",
  },
  {
    message: "matchTracker getOpenDotaMatchDetails 5982609948",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.492Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965969571030   --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030',\n  matchId: '5982609948',\n  startedAt: 2021-05-07T07:32:12.048Z\n}",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.511Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 6094ecb9c64df362b48b2cee inhouse-lobby-6094ecb9c64df362b48b2cee",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.512Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.512Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 1",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.513Z",
  },
  {
    message: "LobbyManager onLobbyReady 27184965969571030",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.513Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965969571030   --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030',\n  matchId: '5982609948',\n  startedAt: 2021-05-07T07:32:12.048Z\n}",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.548Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 6094ecb9c64df362b48b2cee inhouse-lobby-6094ecb9c64df362b48b2cee",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.549Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.551Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 1",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.553Z",
  },
  {
    message:
      "LobbyManager runLobby 6094ecb9c64df362b48b2cee STATE_MATCH_IN_PROGRESS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.556Z",
  },
  {
    message:
      "DB findLobbyById _id 6094ecb9c64df362b48b2cee   --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030',\n  matchId: '5982609948',\n  startedAt: 2021-05-07T07:32:12.048Z\n}",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.599Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.601Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.604Z",
  },
  {
    message:
      "LobbyManager runLobby 6094ecb9c64df362b48b2cee STATE_MATCH_IN_PROGRESS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.606Z",
  },
  {
    message:
      "DB findLobbyById _id 6094ecb9c64df362b48b2cee   --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030',\n  matchId: '5982609948',\n  startedAt: 2021-05-07T07:32:12.048Z\n}",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.646Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.646Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 7581",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.721Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.725Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 534310102, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 533653514, high: 20988833, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 1,\n  connect: null,\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1687642652, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'massive-sloth-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [ { id: 7434, contents: [ByteBuffer] } ],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: 1620372732,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 47727,\n      guild_primary_color: 0,\n      guild_secondary_color: 0,\n      guild_pattern: 0,\n      guild_logo: [Long],\n      guild_points: 125687,\n      guild_event: 19,\n      guild_flags: 1,\n      team_for_guild: 0,\n      guild_tag: 'D.G.',\n      guild_weekly_percentile: 91\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 534310102, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 533653514, high: 20988833, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 2,\n  connect: '=[A:1:533653514:17313]',\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: true,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1687642652, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'massive-sloth-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [ { id: 7434, contents: [ByteBuffer] } ],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: 1620372732,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 47727,\n      guild_primary_color: 0,\n      guild_secondary_color: 0,\n      guild_pattern: 0,\n      guild_logo: [Long],\n      guild_points: 125687,\n      guild_event: 19,\n      guild_flags: 1,\n      team_for_guild: 0,\n      guild_tag: 'D.G.',\n      guild_weekly_percentile: 91\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198003549651', '76561198003810536' ] ",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.865Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.873Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.944Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198003549651': 1, '76561198003810536': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.966Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003549651', '76561198003810536' ] playerState { '76561198003549651': 1, '76561198003810536': 1 } ",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.967Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.970Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27184965969571030",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.973Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 0",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.974Z",
  },
  {
    message: "LobbyManager onLobbyReady 27184965969571030",
    level: "debug",
    timestamp: "2021-05-07T07:32:13.976Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965969571030   --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030',\n  matchId: '5982609948',\n  startedAt: 2021-05-07T07:32:12.048Z\n}",
    level: "debug",
    timestamp: "2021-05-07T07:32:14.026Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 6094ecb9c64df362b48b2cee inhouse-lobby-6094ecb9c64df362b48b2cee",
    level: "debug",
    timestamp: "2021-05-07T07:32:14.027Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T07:32:14.028Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-07T07:32:14.029Z",
  },
  {
    message:
      "LobbyManager runLobby 6094ecb9c64df362b48b2cee STATE_MATCH_IN_PROGRESS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T07:32:14.031Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965969571030   --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030',\n  matchId: '5982609948',\n  startedAt: 2021-05-07T07:32:12.048Z\n}",
    level: "debug",
    timestamp: "2021-05-07T07:32:14.041Z",
  },
  {
    message:
      "DB findLobbyById _id 6094ecb9c64df362b48b2cee   --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030',\n  matchId: '5982609948',\n  startedAt: 2021-05-07T07:32:12.048Z\n}",
    level: "debug",
    timestamp: "2021-05-07T07:32:14.088Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_MATCH_IN_PROGRESS",
    level: "debug",
    timestamp: "2021-05-07T07:32:14.089Z",
  },
  {
    message: "matchTracker no data, queueing 6094ecb9c64df362b48b2cee",
    level: "debug",
    timestamp: "2021-05-07T07:32:15.335Z",
  },
  {
    message: "matchTracker looping",
    level: "debug",
    timestamp: "2021-05-07T07:32:15.335Z",
  },
  {
    message: "matchTracker run false",
    level: "debug",
    timestamp: "2021-05-07T07:32:16.347Z",
  },
  {
    message: "DotaBot practiceLobbyUpdate",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.098Z",
  },
  {
    message:
      "DotaBot practiceLobbyUpdate this.lobby  {\n  lobby_id: Long { low: 534310102, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: null,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 533653514, high: 20988833, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 2,\n  connect: '=[A:1:533653514:17313]',\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: true,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 0,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1687642652, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'massive-sloth-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [ { id: 7434, contents: [ByteBuffer] } ],\n  save_game: null,\n  first_blood_happened: null,\n  match_outcome: 0,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: 1620372732,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: null,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 47727,\n      guild_primary_color: 0,\n      guild_secondary_color: 0,\n      guild_pattern: 0,\n      guild_logo: [Long],\n      guild_points: 125687,\n      guild_event: 19,\n      guild_flags: 1,\n      team_for_guild: 0,\n      guild_tag: 'D.G.',\n      guild_weekly_percentile: 91\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  lobby--> {\n  lobby_id: Long { low: 534310102, high: 6329493, unsigned: true },\n  v2_members: [],\n  v2_left_members: [],\n  all_members: [\n    {\n      id: [Long],\n      hero_id: null,\n      team: 4,\n      name: 'my*****Name',\n      slot: 0,\n      party_id: null,\n      meta_level: null,\n      meta_xp: null,\n      meta_xp_awarded: null,\n      leaver_status: 1,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: null,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: 74,\n      team: 1,\n      name: 'Jujughost',\n      slot: 1,\n      party_id: null,\n      meta_level: 424,\n      meta_xp: 533,\n      meta_xp_awarded: 0,\n      leaver_status: 0,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: true,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    },\n    {\n      id: [Long],\n      hero_id: 17,\n      team: 0,\n      name: 'cawo_14',\n      slot: 1,\n      party_id: null,\n      meta_level: 406,\n      meta_xp: 673,\n      meta_xp_awarded: 0,\n      leaver_status: 0,\n      leaver_actions: null,\n      channel: 6,\n      disabled_hero_id: [],\n      partner_account_type: 0,\n      enabled_hero_id: [],\n      coach_team: 5,\n      coach_rating: null,\n      pwrd_cyber_cafe_id: null,\n      pwrd_cyber_cafe_name: null,\n      disabled_random_hero_bits: [],\n      rank_change: null,\n      cameraman: null,\n      custom_game_product_ids: [],\n      search_match_type: 0,\n      favorite_team_packed: [Long],\n      is_plus_subscriber: false,\n      rank_tier_updated: null,\n      lane_selection_flags: null,\n      can_earn_rewards: null,\n      live_spectator_team: 5,\n      was_mvp_last_game: false,\n      pending_awards: [],\n      pending_awards_on_victory: [],\n      rank_mmr_boost_type: 0,\n      queue_point_adjustment: null,\n      rank_tier: null,\n      title: null,\n      guild_id: 47727,\n      reports_available: null\n    }\n  ],\n  member_indices: [ 0, 1, 2 ],\n  left_member_indices: [],\n  free_member_indices: [],\n  leader_id: Long { low: 1178833419, high: 17825793, unsigned: true },\n  server_id: Long { low: 533653514, high: 20988833, unsigned: true },\n  game_mode: 21,\n  pending_invites: [],\n  state: 3,\n  connect: '=[A:1:533653514:17313]',\n  lobby_type: 1,\n  allow_cheats: false,\n  fill_with_bots: false,\n  intro_mode: false,\n  game_name: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  team_details: [\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: true,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    },\n    {\n      team_name: null,\n      team_tag: null,\n      team_id: null,\n      team_logo: null,\n      team_base_logo: null,\n      team_banner_logo: null,\n      team_complete: false,\n      rank: null,\n      rank_change: null,\n      is_home_team: null,\n      is_challenge_match: null,\n      challenge_match_token_account: null,\n      team_logo_url: null\n    }\n  ],\n  tutorial_lesson: null,\n  tournament_id: null,\n  tournament_game_id: null,\n  server_region: 5,\n  game_state: 6,\n  num_spectators: null,\n  matchgroup: null,\n  cm_pick: 0,\n  match_id: Long { low: 1687642652, high: 1, unsigned: true },\n  allow_spectating: true,\n  bot_difficulty_radiant: 0,\n  game_version: 1,\n  timed_reward_details: [],\n  pass_key: 'massive-sloth-19',\n  leagueid: 13130,\n  penalty_level_radiant: 0,\n  penalty_level_dire: 0,\n  load_game_id: null,\n  series_type: 1,\n  radiant_series_wins: 0,\n  dire_series_wins: 0,\n  loot_generated: null,\n  loot_awarded: null,\n  allchat: true,\n  dota_tv_delay: 1,\n  custom_game_mode: null,\n  custom_map_name: null,\n  custom_difficulty: null,\n  lan: false,\n  broadcast_channel_info: [],\n  first_leaver_accountid: null,\n  series_id: null,\n  low_priority: null,\n  extra_messages: [ { id: 7434, contents: [ByteBuffer] } ],\n  save_game: null,\n  first_blood_happened: true,\n  match_outcome: 3,\n  mass_disconnect: null,\n  custom_game_id: null,\n  custom_min_players: null,\n  custom_max_players: null,\n  partner_type: 0,\n  visibility: 0,\n  custom_game_crc: null,\n  custom_game_auto_created_lobby: null,\n  custom_game_timestamp: null,\n  previous_series_matches: [],\n  previous_match_override: Long { low: 0, high: 0, unsigned: true },\n  custom_game_uses_account_records: null,\n  game_start_time: 1620372732,\n  pause_setting: 0,\n  lobby_mvp_account_id: null,\n  weekend_tourney_division_id: null,\n  weekend_tourney_skill_level: null,\n  weekend_tourney_bracket_round: null,\n  bot_difficulty_dire: 0,\n  bot_radiant: Long { low: 0, high: 0, unsigned: true },\n  bot_dire: Long { low: 0, high: 0, unsigned: true },\n  event_progression_enabled: [],\n  selection_priority_rules: 0,\n  series_previous_selection_priority_team_id: null,\n  series_current_selection_priority_team_id: null,\n  series_current_priority_team_choice: 0,\n  series_current_non_priority_team_choice: 0,\n  series_current_selection_priority_used_coin_toss: null,\n  current_primary_event: 0,\n  emergency_disabled_hero_ids: [],\n  custom_game_private_key: null,\n  custom_game_penalties: null,\n  lan_host_ping_location: null,\n  league_node_id: 0,\n  match_duration: 407,\n  custom_game_browseable: null,\n  league_phase: 0,\n  record_detailed_stats: null,\n  experimental_gameplay_enabled: null,\n  guild_challenges: [],\n  guild_details: [\n    {\n      guild_id: 47727,\n      guild_primary_color: 0,\n      guild_secondary_color: 0,\n      guild_pattern: 0,\n      guild_logo: [Long],\n      guild_points: 125687,\n      guild_event: 19,\n      guild_flags: 1,\n      team_for_guild: 0,\n      guild_tag: 'D.G.',\n      guild_weekly_percentile: 91\n    }\n  ],\n  lobby_event_points: [\n    { event_id: 19, account_points: [Array] },\n    { event_id: 26, account_points: [Array] }\n  ],\n  requested_hero_ids: []\n}  this.teamCache [ '76561198003549651', '76561198003810536' ] ",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.190Z",
  },
  {
    message: "dotabot processMembers  ",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.191Z",
  },
  {
    message:
      "processLobbyUpdate oldLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n]pending_invites undefined newLobby.all_members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: 74,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: 424,\n    meta_xp: 533,\n    meta_xp_awarded: 0,\n    leaver_status: 0,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: 17,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: 406,\n    meta_xp: 673,\n    meta_xp_awarded: 0,\n    leaver_status: 0,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] members { left: [], joined: [], changedSlot: [] }",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.252Z",
  },
  {
    message:
      "membersToPlayerState playerState { '76561198003549651': 1, '76561198003810536': 1 } members [\n  {\n    id: Long { low: 1178833419, high: 17825793, unsigned: true },\n    hero_id: null,\n    team: 4,\n    name: 'my*****Name',\n    slot: 0,\n    party_id: null,\n    meta_level: null,\n    meta_xp: null,\n    meta_xp_awarded: null,\n    leaver_status: 1,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: null,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43283923, high: 17825793, unsigned: true },\n    hero_id: 74,\n    team: 1,\n    name: 'Jujughost',\n    slot: 1,\n    party_id: null,\n    meta_level: 424,\n    meta_xp: 533,\n    meta_xp_awarded: 0,\n    leaver_status: 0,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: true,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  },\n  {\n    id: Long { low: 43544808, high: 17825793, unsigned: true },\n    hero_id: 17,\n    team: 0,\n    name: 'cawo_14',\n    slot: 1,\n    party_id: null,\n    meta_level: 406,\n    meta_xp: 673,\n    meta_xp_awarded: 0,\n    leaver_status: 0,\n    leaver_actions: null,\n    channel: 6,\n    disabled_hero_id: [],\n    partner_account_type: 0,\n    enabled_hero_id: [],\n    coach_team: 5,\n    coach_rating: null,\n    pwrd_cyber_cafe_id: null,\n    pwrd_cyber_cafe_name: null,\n    disabled_random_hero_bits: [],\n    rank_change: null,\n    cameraman: null,\n    custom_game_product_ids: [],\n    search_match_type: 0,\n    favorite_team_packed: Long { low: 0, high: 0, unsigned: true },\n    is_plus_subscriber: false,\n    rank_tier_updated: null,\n    lane_selection_flags: null,\n    can_earn_rewards: null,\n    live_spectator_team: 5,\n    was_mvp_last_game: false,\n    pending_awards: [],\n    pending_awards_on_victory: [],\n    rank_mmr_boost_type: 0,\n    queue_point_adjustment: null,\n    rank_tier: null,\n    title: null,\n    guild_id: 47727,\n    reports_available: null\n  }\n] ",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.273Z",
  },
  {
    message:
      "dotaBot isDotaLobbyReady teamCache [ '76561198003549651', '76561198003810536' ] playerState { '76561198003549651': 1, '76561198003810536': 1 } ",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.274Z",
  },
  {
    message: "DotaBot processLobbyUpdate lobby ready",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.275Z",
  },
  {
    message: "LobbyManager queueEvent onLobbyReady 27184965969571030",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.276Z",
  },
  {
    message: "LobbyManager processEventQueue onLobbyReady 0",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.276Z",
  },
  {
    message: "LobbyManager onLobbyReady 27184965969571030",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.277Z",
  },
  {
    message: "dotaBot EVENT_MATCH_OUTCOME  ",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.278Z",
  },
  {
    message:
      "LobbyManager queueEvent onMatchOutcome 27184965969571030,3,.CSODOTALobbyMember,.CSODOTALobbyMember,.CSODOTALobbyMember",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.279Z",
  },
  {
    message: "dotaBot practiceLobbyCleared emitted",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.284Z",
  },
  {
    message: "LobbyManager queueEvent onBotLobbyLeft 6094eccec64df362b48b2cef",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.284Z",
  },
  {
    message: "DotaBot UNHANDLED MESSAGE 8081",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.289Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965969571030   --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030',\n  matchId: '5982609948',\n  startedAt: 2021-05-07T07:32:12.048Z\n}",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.326Z",
  },
  {
    message:
      "LobbyManager onLobbyReady 6094ecb9c64df362b48b2cee inhouse-lobby-6094ecb9c64df362b48b2cee",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.327Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.328Z",
  },
  {
    message: "LobbyManager processEventQueue onMatchOutcome 2",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.328Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965969571030   --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030',\n  matchId: '5982609948',\n  startedAt: 2021-05-07T07:32:12.048Z\n}",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.334Z",
  },
  {
    message:
      "DB findLobbyByDotaLobbyId dotaLobbyId 27184965969571030   --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030',\n  matchId: '5982609948',\n  startedAt: 2021-05-07T07:32:12.048Z\n}",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.364Z",
  },
  {
    message:
      "LobbyManager onMatchOutcome 27184965969571030 3 6094ecb9c64df362b48b2cee",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.365Z",
  },
  {
    message:
      "DB findLobbyById _id 6094ecb9c64df362b48b2cee   --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_IN_PROGRESS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030',\n  matchId: '5982609948',\n  startedAt: 2021-05-07T07:32:12.048Z\n}",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.398Z",
  },
  {
    message:
      "DB getLobbyPlayers    --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  players: [ '76561198003549651', '76561198003810536' ]\n}",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.427Z",
  },
  {
    message:
      "DB updateLobbyState  state STATE_MATCH_STATS --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_STATS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030',\n  matchId: '5982609948',\n  startedAt: 2021-05-07T07:32:12.048Z\n}",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.544Z",
  },
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_MATCH_STATS",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.545Z",
  },
  {
    message: "LobbyManager processEventQueue onBotLobbyLeft 2",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.546Z",
  },
  {
    message:
      "DB updateBotStatus status BOT_IDLE _id 6094eccec64df362b48b2cef  --> {\n  _id: 6094eccec64df362b48b2cef,\n  status: 'BOT_IDLE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T07:31:26.979Z,\n  updated_at: 2021-05-07T07:41:42.546Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.585Z",
  },
  {
    message: "DB findAllLobbiesInState state STATE_WAITING_FOR_BOT  --> []",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.632Z",
  },
  {
    message: "LobbyManager onBotAvailable 0",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.633Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 1",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.634Z",
  },
  {
    message:
      "LobbyManager runLobby 6094ecb9c64df362b48b2cee STATE_MATCH_IN_PROGRESS STATE_WAITING_FOR_PLAYERS",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.635Z",
  },
  {
    message:
      "DB findLobbyById _id 6094ecb9c64df362b48b2cee   --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_STATS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030',\n  matchId: '5982609948',\n  startedAt: 2021-05-07T07:32:12.048Z\n}",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.665Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_MATCH_STATS",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.666Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.667Z",
  },
  {
    message:
      "LobbyManager runLobby 6094ecb9c64df362b48b2cee STATE_MATCH_IN_PROGRESS STATE_MATCH_STATS",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.668Z",
  },
  {
    message:
      "DB findLobbyById _id 6094ecb9c64df362b48b2cee   --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_STATS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: 6094eccec64df362b48b2cef,\n  dotaLobbyId: '27184965969571030',\n  matchId: '5982609948',\n  startedAt: 2021-05-07T07:32:12.048Z\n}",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.707Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_MATCH_STATS",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.708Z",
  },
  {
    message:
      "validateLobbyPlayers 6094ecb9c64df362b48b2cee default STATE_MATCH_STATS",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.709Z",
  },
  {
    message:
      "validateLobbyStateBot invalid lobby state for bot detected. Bot 6094eccec64df362b48b2cef leaving lobbyState 6094ecb9c64df362b48b2cee STATE_MATCH_STATS.",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.709Z",
  },
  {
    message:
      "LobbyManager botLeaveLobby 6094ecb9c64df362b48b2cee 6094eccec64df362b48b2cef",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.710Z",
  },
  {
    message: "LobbyManager loadBotById 6094eccec64df362b48b2cef",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.710Z",
  },
  {
    message:
      "DB findBot  _id 6094eccec64df362b48b2cef  --> {\n  _id: 6094eccec64df362b48b2cef,\n  status: 'BOT_IDLE',\n  lobbyCount: 1,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T07:31:26.979Z,\n  updated_at: 2021-05-07T07:41:42.546Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.741Z",
  },
  {
    message: "LobbyManager loadBot 6094eccec64df362b48b2cef",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.741Z",
  },
  {
    message: "LobbyManager getBot 6094eccec64df362b48b2cef ",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.742Z",
  },
  {
    message: "lobbyManager loadBot done",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.743Z",
  },
  {
    message:
      "DB unassignBotFromLobby lobby [object Object] botId 6094eccec64df362b48b2cef  --> {\n  _id: 6094eccec64df362b48b2cef,\n  status: 'BOT_IDLE',\n  lobbyCount: 0,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T07:31:26.979Z,\n  updated_at: 2021-05-07T07:41:42.773Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.808Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_COMPLETED',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: null,\n  dotaLobbyId: null,\n  matchId: '5982609948',\n  startedAt: 2021-05-07T07:32:12.048Z\n}",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.844Z",
  },
  {
    message: "LobbyManager botLeaveLobby 6094ecb9c64df362b48b2cee null",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.845Z",
  },
  {
    message:
      "runLobby 6094ecb9c64df362b48b2cee STATE_MATCH_STATS to STATE_COMPLETED",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.845Z",
  },
  {
    message:
      "runLobby 6094ecb9c64df362b48b2cee STATE_COMPLETED to STATE_COMPLETED",
    level: "debug",
    timestamp: "2021-05-07T07:41:42.846Z",
  },
  {
    message: "LobbyManager queueEvent disableMatchTracker ",
    level: "debug",
    timestamp: "2021-05-07T08:25:30.655Z",
  },
  {
    message: "LobbyManager processEventQueue disableMatchTracker 0",
    level: "debug",
    timestamp: "2021-05-07T08:25:30.658Z",
  },
  {
    message: "LobbyManager removeBot 6094eccec64df362b48b2cef",
    level: "debug",
    timestamp: "2021-05-07T08:25:34.010Z",
  },
  {
    message: "LobbyManager getBot 6094eccec64df362b48b2cef ",
    level: "debug",
    timestamp: "2021-05-07T08:25:34.014Z",
  },
  {
    message: "DotaBot disconnectDotaBot 76561199139099147",
    level: "debug",
    timestamp: "2021-05-07T08:25:34.023Z",
  },
  {
    message: "DotaBot Logged off.",
    level: "debug",
    timestamp: "2021-05-07T08:25:34.036Z",
  },
  {
    message:
      "DB updateBotStatusBySteamId status BOT_OFFLINE steamId64 76561199139099147  --> {\n  _id: 6094eccec64df362b48b2cef,\n  status: 'BOT_OFFLINE',\n  lobbyCount: 0,\n  steamId64: '76561199139099147',\n  accountName: 'dynastyesports',\n  personaName: 'my*****Name',\n  password: 'St3@mAccountToBu!dlovelyAPI69',\n  created_at: 2021-05-07T07:31:26.979Z,\n  updated_at: 2021-05-07T08:25:34.042Z,\n  __v: 0\n}",
    level: "debug",
    timestamp: "2021-05-07T08:25:34.100Z",
  },
  {
    message: "lobbyManager removeBot removed",
    level: "debug",
    timestamp: "2021-05-07T08:25:34.102Z",
  },
  {
    message: "LobbyManager queueEvent onBotAvailable ",
    level: "debug",
    timestamp: "2021-05-07T08:25:34.104Z",
  },
  {
    message: "LobbyManager processEventQueue onBotAvailable 0",
    level: "debug",
    timestamp: "2021-05-07T08:25:34.105Z",
  },
  {
    message: "DB findAllLobbiesInState state STATE_WAITING_FOR_BOT  --> []",
    level: "debug",
    timestamp: "2021-05-07T08:25:34.141Z",
  },
  {
    message: "LobbyManager onBotAvailable 0",
    level: "debug",
    timestamp: "2021-05-07T08:25:34.142Z",
  },
];
