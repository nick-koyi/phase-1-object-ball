function gameObject() {
  let gameObj = {
    home: {
      teamName: 'Brooklyn Nets',
      colors: ['Black', 'White'],
      players: {
        'Alan Anderson': {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        'Reggie Evans': {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        'Brook Lopez': {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        'Mason Plumlee': {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        'Jason Terry': {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: 'Charlotte Hornets',
      colors: ['Turquoise', 'Purple'],
      players: {
        'Jeff Adrien': {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        'Bismak Biyombo': {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        'DeSagna Diop': {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        'Ben Gordon': {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        'Brendan Haywood': {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
  return gameObj;
}

// function homeTeamName() {
//   let object = gameObject();
//   return object["home"]["teamName"];
// }
let object = gameObject();
function numPointsScored(name) {
  // use hasOwnProperty method to test for the name
  if (object['home']['players'].hasOwnProperty(name)) {
    return object['home']['players'][name]['points'];
  } else if (object['away']['players'].hasOwnProperty(name)) {
    return object['away']['players'][name]['points'];
  }
  return 'Player not found';
}

function shoeSize(name) {
  if (object['home']['players'].hasOwnProperty(name)) {
    return object['home']['players'][name]['shoe'];
  } else if (object['away']['players'].hasOwnProperty(name)) {
    return object['away']['players'][name]['shoe'];
  }
  return 'Player not found';
}

//team colors
function teamColors(teamname) {
  if (teamname === object['home']['teamName']) {
    return object['home']['colors'];
  } else if (object['away']['teamName']) {
    return object['away']['colors'];
  }
  return 'Team not found';
}

function teamNames() {
  let arr = [];
  arr.push(object['home']['teamName'], object['away']['teamName']);
  return arr;
}

// Returns an array of jersey numbers
function playerNumbers(teamname) {
  let team;
  if (object.home.teamName === teamname) {
    team = object.home;
  } else {
    team = object.away;
  }

  return Object.values(team.players).map((player) => player.number);
}

function playerStats(playerName) {
  let playerStatsObj;

  Object.values(object.home.players).forEach((player) => {
    if (
      playerName ===
      Object.keys(object.home.players).find(
        (name) => object.home.players[name] === player
      )
    ) {
      playerStatsObj = player;
    }
  });

  Object.values(object.away.players).forEach((player) => {
    if (
      playerName ===
      Object.keys(object.away.players).find(
        (name) => object.away.players[name] === player
      )
    ) {
      playerStatsObj = player;
    }
  });

  return playerStatsObj;
}

//Largest shoe sizes
function bigShoeRebounds() {
  let largestShoeSize = 0;
  let playerWithLargestShoeSize;

  // Find player with largest shoe size
  Object.values(object.home.players).forEach((player) => {
    if (player.shoe > largestShoeSize) {
      largestShoeSize = player.shoe;
      playerWithLargestShoeSize = player;
    }
  });

  Object.values(object.away.players).forEach((player) => {
    if (player.shoe > largestShoeSize) {
      largestShoeSize = player.shoe;
      playerWithLargestShoeSize = player;
    }
  });

  // Return the number of rebounds for the player with the largest shoe size
  return playerWithLargestShoeSize.rebounds;
}

// most points scored

function mostPointsScored() {
  let mostPoints = 0;
  let playerWithMostPoints;

  Object.keys(object.home.players).forEach((playerName) => {
    if (object.home.players[playerName].points > mostPoints) {
      mostPoints = object.home.players[playerName].points;
      playerWithMostPoints = playerName;
    }
  });

  Object.keys(object.away.players).forEach((playerName) => {
    if (object.away.players[playerName].points > mostPoints) {
      mostPoints = object.away.players[playerName].points;
      playerWithMostPoints = playerName;
    }
  });

  return playerWithMostPoints;
}

// winning team
function winningTeam() {
  let homePoints = Object.values(object.home.players).reduce(
    (acc, player) => acc + player.points,
    0
  );
  let awayPoints = Object.values(object.away.players).reduce(
    (acc, player) => acc + player.points,
    0
  );

  return homePoints > awayPoints ? object.home.teamName : object.away.teamName;
}

//player with longest name
function playerWithLongestName() {
  let longestNameLength = 0;
  let playerWithLongestName;

  Object.keys(object.home.players).forEach((playerName) => {
    if (playerName.length > longestNameLength) {
      longestNameLength = playerName.length;
      playerWithLongestName = playerName;
    }
  });

  Object.keys(object.away.players).forEach((playerName) => {
    if (playerName.length > longestNameLength) {
      longestNameLength = playerName.length;
      playerWithLongestName = playerName;
    }
  });

  return playerWithLongestName;
}

function doesLongNameStealATon() {
  let longestName = playerWithLongestName();
  let mostSteals = 0;
  let playerWithMostSteals;

  Object.keys(object.home.players).forEach((playerName) => {
    if (object.home.players[playerName].steals > mostSteals) {
      mostSteals = object.home.players[playerName].steals;
      playerWithMostSteals = playerName;
    }
  });

  Object.keys(object.away.players).forEach((playerName) => {
    if (object.away.players[playerName].steals > mostSteals) {
      mostSteals = object.away.players[playerName].steals;
      playerWithMostSteals = playerName;
    }
  });

  return playerWithMostSteals === longestName;
}

console.log(doesLongNameStealATon());
