//Objects
//Dot notation
let netflix = {
  id: 1,
  name: "The Office",
  season1: {
    seasonInfo: {
      episodeInfo: [
        {
          episode: 1,
          episodeName: "Pilot",
        },
        {
          episode: 2,
          episodeName: "Diversity Day",
        },
        {
          episode: 3,
          episodeName: "Health Care",
        },
        {
          episode: 4,
          episodeName: "The Alliance",
        },
        {
          episode: 5,
          episodeName: "Basketball",
        },
        {
          episode: 6,
          episodeName: "Hot Girl",
        },
      ],
    },
  },
  season2: {},
  season3: {},
};

// console.log(netflix);
// console.log(netflix.season1.seasonInfo);//step by step dot notation.
// console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName);//step by step dot notation.
// console.log(
//   netflix.season1.seasonInfo.episodeInfo[5].episode,
//   netflix.season1.seasonInfo.episodeInfo[5].episodeName
// );//step by step dot notation.

let spaceJam = {
  toonSquad: {
    human: "Michael Jordan",
    rabbit1: "Bugs Bunny",
    rabbit2: "Lola Bunny",
    duck: "Daffy Duck",
    tDevil: "Tasmanian Devil",
    bird: "Tweety",
    cat: "Sylvester",
    pig: "Porky Pig",
  },
  monstars: {
    0: "Bupkus",
    1: "Bang",
    2: "Nawt",
    3: "Pound",
    4: "Blanko",
  },
  nbaPlayers: {
    phoenixSuns: "Charles Barkley",
    newJerseyNets: "Shawn Bradley",
    newYorkNicks: "Patrick Ewing",
    charlotteHornets1: "Larry Johnson",
    charlotteHornets2: "Muggsy Bogues",
  },
};

//JSON

console.log(Object.keys(spaceJam.toonSquad))

console.log(Object.values(spaceJam.toonSquad))

let testObj = {
    'Spaces Here': true,//if object API has spaces when it shouldn't have.
    nospaces: true
};
console.log(testObj["Spaces Here"])
