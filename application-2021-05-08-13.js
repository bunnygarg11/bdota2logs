let b = [
  ,
  {
    message:
      "LobbyManager queueEvent runLobby [object Object],STATE_MATCH_STATS",
    level: "debug",
    timestamp: "2021-05-08T08:18:43.879Z",
  },
  {
    message: "LobbyManager processEventQueue runLobby 0",
    level: "debug",
    timestamp: "2021-05-08T08:18:43.882Z",
  },
  {
    message:
      "LobbyManager runLobby 6094ecb9c64df362b48b2cee STATE_MATCH_STATS STATE_MATCH_STATS",
    level: "debug",
    timestamp: "2021-05-08T08:18:43.884Z",
  },
  {
    message:
      "DB findLobbyById _id 6094ecb9c64df362b48b2cee   --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_STATS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: null,\n  dotaLobbyId: null,\n  matchId: '5982609948',\n  startedAt: 2021-05-08T07:32:12.048Z\n}",
    level: "debug",
    timestamp: "2021-05-08T08:18:43.974Z",
  },
  {
    message: "LobbyManager runLobby lobby.state STATE_MATCH_STATS",
    level: "debug",
    timestamp: "2021-05-08T08:18:43.975Z",
  },
  {
    message:
      "validateLobbyPlayers 6094ecb9c64df362b48b2cee default STATE_MATCH_STATS",
    level: "debug",
    timestamp: "2021-05-08T08:18:43.980Z",
  },
  {
    message: "matchTracker addLobby  lobby [object Object]",
    level: "debug",
    timestamp: "2021-05-08T08:18:43.983Z",
  },
  {
    message: "matchTracker run false",
    level: "debug",
    timestamp: "2021-05-08T08:18:43.984Z",
  },
  {
    message: "matchTracker run lastCheck null ",
    level: "debug",
    timestamp: "2021-05-08T08:18:43.985Z",
  },
  {
    message: "matchTracker setMatchDetails matchId 5982609948",
    level: "debug",
    timestamp: "2021-05-08T08:18:43.986Z",
  },
  {
    message:
      "DB findLobbyById _id 6094ecb9c64df362b48b2cee   --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_STATS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: null,\n  dotaLobbyId: null,\n  matchId: '5982609948',\n  startedAt: 2021-05-08T07:32:12.048Z\n}",
    level: "debug",
    timestamp: "2021-05-08T08:18:44.075Z",
  },
  {
    message:
      "matchTracker setMatchDetails lobby.id 6094ecb9c64df362b48b2cee 5982609948",
    level: "debug",
    timestamp: "2021-05-08T08:18:44.091Z",
  },
  {
    message: "matchTracker getOpenDotaMatchDetails 5982609948",
    level: "debug",
    timestamp: "2021-05-08T08:18:44.092Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_MATCH_STATS',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: null,\n  dotaLobbyId: null,\n  matchId: '5982609948',\n  startedAt: 2021-05-08T07:32:12.048Z,\n  finishedAt: 1970-01-19T18:12:59.732Z,\n  odotaData: {\n    match_id: 5982609948,\n    barracks_status_dire: 63,\n    barracks_status_radiant: 63,\n    chat: null,\n    cluster: 153,\n    cosmetics: null,\n    dire_score: 2,\n    dire_team_id: null,\n    draft_timings: null,\n    duration: 407,\n    engine: 1,\n    first_blood_time: 362,\n    game_mode: 21,\n    human_players: 2,\n    leagueid: 13130,\n    lobby_type: 1,\n    match_seq_num: 5012276818,\n    negative_votes: 0,\n    objectives: null,\n    picks_bans: null,\n    positive_votes: 0,\n    radiant_gold_adv: null,\n    radiant_score: 1,\n    radiant_team_id: null,\n    radiant_win: false,\n    radiant_xp_adv: null,\n    skill: null,\n    start_time: 1620372732,\n    teamfights: null,\n    tower_status_dire: 2047,\n    tower_status_radiant: 2047,\n    version: null,\n    replay_salt: 1565934180,\n    series_id: 0,\n    series_type: 0,\n    players: [ [Object], [Object], [Object] ],\n    patch: 48,\n    region: 5,\n    replay_url: 'http://replay153.valve.net/570/5982609948_1565934180.dem.bz2'\n  }\n}",
    level: "debug",
    timestamp: "2021-05-08T08:18:46.225Z",
  },
  {
    message: "matchTracker no data, queueing 6094ecb9c64df362b48b2cee",
    level: "debug",
    timestamp: "2021-05-08T08:18:46.228Z",
  },
  {
    message: "matchTracker push 11605819 ",
    level: "debug",
    timestamp: "2021-05-08T08:18:46.230Z",
  },
  {
    message: "matchTracker looping",
    level: "debug",
    timestamp: "2021-05-08T08:18:46.231Z",
  },
  {
    message:
      "DB updateLobby  --> {\n  _id: 6094ecb9c64df362b48b2cee,\n  gameMode: 'DOTA_GAMEMODE_1V1MID',\n  winner: 0,\n  players: [ '76561198003549651', '76561198003810536' ],\n  state: 'STATE_COMPLETED',\n  password: 'massive-sloth-19',\n  createdOn: 2021-05-07T07:31:05.958Z,\n  updatedOn: 2021-05-07T07:31:05.958Z,\n  __v: 0,\n  lobbyName: 'inhouse-lobby-6094ecb9c64df362b48b2cee',\n  botId: null,\n  dotaLobbyId: null,\n  matchId: '5982609948',\n  startedAt: 2021-05-08T07:32:12.048Z,\n  finishedAt: 1970-01-19T18:12:59.732Z,\n  odotaData: {\n    match_id: 5982609948,\n    barracks_status_dire: 63,\n    barracks_status_radiant: 63,\n    chat: null,\n    cluster: 153,\n    cosmetics: null,\n    dire_score: 2,\n    dire_team_id: null,\n    draft_timings: null,\n    duration: 407,\n    engine: 1,\n    first_blood_time: 362,\n    game_mode: 21,\n    human_players: 2,\n    leagueid: 13130,\n    lobby_type: 1,\n    match_seq_num: 5012276818,\n    negative_votes: 0,\n    objectives: null,\n    picks_bans: null,\n    positive_votes: 0,\n    radiant_gold_adv: null,\n    radiant_score: 1,\n    radiant_team_id: null,\n    radiant_win: false,\n    radiant_xp_adv: null,\n    skill: null,\n    start_time: 1620372732,\n    teamfights: null,\n    tower_status_dire: 2047,\n    tower_status_radiant: 2047,\n    version: null,\n    replay_salt: 1565934180,\n    series_id: 0,\n    series_type: 0,\n    players: [ [Object], [Object], [Object] ],\n    patch: 48,\n    region: 5,\n    replay_url: 'http://replay153.valve.net/570/5982609948_1565934180.dem.bz2'\n  }\n}",
    level: "debug",
    timestamp: "2021-05-08T08:18:46.354Z",
  },
  {
    message:
      "runLobby 6094ecb9c64df362b48b2cee STATE_MATCH_STATS to STATE_COMPLETED",
    level: "debug",
    timestamp: "2021-05-08T08:18:46.370Z",
  },
  {
    message:
      "runLobby 6094ecb9c64df362b48b2cee STATE_COMPLETED to STATE_COMPLETED",
    level: "debug",
    timestamp: "2021-05-08T08:18:46.374Z",
  },
  {
    message: "matchTracker run false",
    level: "debug",
    timestamp: "2021-05-08T08:18:47.247Z",
  },
];
