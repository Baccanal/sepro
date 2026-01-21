const riddles = [
  {
    id: 1,
    quest: "Why can’t Cinderella play volleyball?",
    ans: "Because she always runs away from the ball.",
  },
  {
    id: 2,
    quest: "Why don’t grasshoppers watch soccer?",
    ans: "They watch cricket instead.",
  },
  {
    id: 3,
    quest: "What kind of tea do soccer players drink?",
    ans: "Penal-tea.",
  },
  {
    id: 4,
    quest: "Where do volleyball players go to dance?",
    ans: "The volley BALL.",
  },
  {
    id: 5,
    quest: "What lights up a soccer stadium?",
    ans: "A soccer match.",
  },
  {
    id: 6,
    quest: "Why did the chicken get ejected from the soccer game?",
    ans: "Persistent fowl play. ",
  },
  {
    id: 7,
    quest: "Why didn’t the dog want to play volleyball?",
    ans: "He was a boxer.",
  },
  {
    id: 8,
    quest: "How do volleyball players stay cool during games?",
    ans: "They play near the fans.",
  },
  {
    id: 9,
    quest: "What’s a volleyball Spiker’s favorite animal?",
    ans: "A score-pion.",
  },
  {
    id: 10,
    quest: "What did the magician show the soccer players?",
    ans: "A hat trick. ",
  },
  {
    id: 11,
    quest: "Why did the volleyball get kicked out of the party? ",
    ans: "Because it got too inflated! ",
  },
  {
    id: 12,
    quest: "What do you call something you can serve but can't eat?",
    ans: "A volleyball.",
  },
  {
    id: 13,
    quest: "Why can't you trust volleyball players with your drinks",
    ans: "They might spike them.",
  },
  {
    id: 14,
    quest: "When is a volleyball player like a judge?",
    ans: "When she sits on the bench.",
  },
  {
    id: 15,
    quest: "Why couldn’t the players get a soda at the volleyball match?",
    ans: "Because the team lost the opener.",
  },
  {
    id: 16,
    quest: "Why did the excavator make the top volleyball team?",
    ans: "He could dig very well.",
  },
  {
    id: 17,
    quest:
      "If a basketball team was chasing a volleyball team, what time would it be?",
    ans: "Five after six.",
  },
  {
    id: 18,
    quest: "Why did the volleyball player go to her financial advisor?",
    ans: "She wanted to know her net worth.",
  },
  {
    id: 19,
    quest: "Why did the geese always beat the ducks in volleyball?",
    ans: "Too many goosebumps.",
  },
  {
    id: 20,
    quest: "How did the volleyball team welcome their new neighbors?",
    ans: "With a block party!",
  },
  {
    id: 21,
    quest:
      "What do you call a volleyball player who stands right in the middle of a volleyball court?",
    ans: "Annette.",
  },
  {
    id: 22,
    quest: "Why don’t fish play volleyball?",
    ans: "They’re too afraid of the net.",
  },
  {
    id: 23,
    quest: "Which volleyball player hurt her knee diving for the ball?",
    ans: "Courtney.",
  },
  {
    id: 24,
    quest: "What does a religious volleyball player do?",
    ans: "Serve God.",
  },
  {
    id: 25,
    quest: "Why can't volleyball players keep friends on Social Media?",
    ans: "They block them.",
  },
  {
    id: 26,
    quest: "Why did the volleyball team go a Dairy Queen?",
    ans: "To get soft serves.",
  },
  {
    id: 27,
    quest: "Why don’t volleyball players get lost? ",
    ans: "Because they always stay in rotation..",
  },
  {
    id: 28,
    quest: "Why are porcupines so good at volleyball? ",
    ans: "Because they have really sharp spikes! ",
  },

  {
    id: 29,
    quest: "How is a volleyball coach like a dentist? ",
    ans: "They both like drills. ",
  },

  {
    id: 30,
    quest: "Why shouldn’t you tell jokes while ice skating? ",
    ans: "Because the ice might crack up! ",
  },

  {
    id: 31,
    quest: "What detergent do surfers use to wash their wet suit? ",
    ans: "Tide! ",
  },

  {
    id: 32,
    quest: "How do people surfing say Hi to each other? ",
    ans: "They Wave! ",
  },

  {
    id: 33,
    quest: "What kind of running shoes are made from banana skins? ",
    ans: "Slippers. ",
  },

  {
    id: 34,
    quest: "Why should a bowling alley be quiet? ",
    ans: "So you can hear a pin drop! ",
  },

  {
    id: 35,
    quest: "Why did the golfer wear two pairs of pants? ",
    ans: "In case, he got a hole in one! ",
  },

  {
    id: 36,
    quest: "Why did the volleyball referee get fired? ",
    ans: "He was a whistleblower. ",
  },

  {
    id: 37,
    quest: "What is the most depressing thing about tennis?  ",
    ans: "You’ll never be as good as a wall. ",
  },

  {
    id: 38,
    quest: "What does a volleyball player do once she loses her sight? ",
    ans: "She becomes a referee. ",
  },

  {
    id: 39,
    quest: "What animal is best at hitting a cricket ball?  ",
    ans: "A bat. ",
  },
  {
    id: 40,
    quest: "What is the hardest thing about skateboarding?  ",
    ans: "Concrete. ",
  },
  {
    id: 41,
    quest: "Why was Casper the ghost asked to join the volleyball team? ",
    ans: "To give some team spirit. ",
  },
  {
    id: 42,
    quest: "Why did the banker stopped playing volleyball? ",
    ans: "She started to lose interest. ",
  },
  {
    id: 43,
    quest: "Why was the player afraid of the calendar? ",
    ans: "Its days are numbered. ",
  },
  {
    id: 44,
    quest: "What happened to the player who used to be addicted to soap? ",
    ans: "She is clean now. ",
  },
  {
    id: 45,
    quest: "Why was the volleyball club’s website down? ",
    ans: "They had problems with their servers. ",
  },
  {
    id: 46,
    quest: " Why did the player take the banana to the Doctor? ",
    ans: " It wasn't peeling well. ",
  },
  {
    id: 47,
    quest: "Why did the coach of the American Football Team go to the bank? ",
    ans: "To get his quarterback.",
  },
  {
    id: 48,
    quest: "Why did the player's picture go to prison? ",
    ans: "Because it was framed. ",
  },
  {
    id: 49,
    quest:
      " Why was the basketball player sitting on the sidelines drawing chickens?",
    ans: "Coach told her to learn how to draw fouls.",
  },
  {
    id: 50,
    quest: " What’s the difference between a bad volleyball player and time?",
    ans: " Time passes. ",
  },
  {
    id: 51,
    quest: " What do sprinters eat before a race? ",
    ans: " Nothing because dey fast. ",
  },
  {
    id: 52,
    quest: " Why are volleyball teams always happy at the start of the game? ",
    ans: " Because after the first point it is always one-love. ",
  },
  {
    id: 53,
    quest:
      " What did the cricket's wife say to him after she threw 6 cricket balls at him? ",
    ans: " It's over. ",
  },
  {
    id: 54,
    quest: " Why was every member of the other team single? ",
    ans: " They were all beaten at love. ",
  },
  {
    id: 55,
    quest: " Why couldn't the Boxer count sheep to fall asleep? ",
    ans: " When the count reached 9 he would stand up. ",
  },
  {
    id: 56,
    quest: " Why are pigs so bad at football? ",
    ans: " They hog the ball. ",
  },
  {
    id: 57,
    quest: " Why did the unmarried player keep a lighter? ",
    ans: " She couldn't find the perfect match. ",
  },
  {
    id: 58,
    quest: " Where do surfers go for an education? ",
    ans: " Boarding school. ",
  },
  {
    id: 59,
    quest: " How's the player who broke her left hand? ",
    ans: " She's all right now. ",
  },
  {
    id: 60,
    quest: " What type of music do Fishermen listen to? ",
    ans: " Something catchy. ",
  },
  {
    id: 61,
    quest: " Why did the hunter carry the deer to the dentist? ",
    ans: " It had Buck teeth. ",
  },
];

let showAnswer = document.querySelector("#answer");
let isShow = false;
let title = document.querySelector("#clickToShow");

function shuffleArray(array) {
  // Iterate over the array in reverse order
  for (let i = array.length - 1; i > 0; i--) {
    // Generate Random Index
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffleRiddles = shuffleArray(riddles);
let riddleCount = 0;

function newRiddle() {
  if (isShow) {
    showAnswer.style.display = "none";
    isShow = false;
  }
  //div.style.display = 'none';
  //show = true;
  //$("#answer").hide().slideUp("fast");

  let randomRiddle = shuffleRiddles[riddleCount];

  document.getElementById(
    "question"
  ).innerHTML = `${randomRiddle.id}) <i>${randomRiddle.quest} </i>`;

  document.getElementById("answer").innerHTML = randomRiddle.ans;

  riddleCount++;
  if (riddleCount >= shuffleRiddles.length) {
    riddleCount = 0;
  }
}

newRiddle();

/////////////////////////////////////////

title.addEventListener("click", () => {
  if (!isShow) {
    showAnswer.style.display = "block";
    isShow = true;
  } else if (isShow) {
    showAnswer.style.display = "none";
    isShow = false;
  }
});
