const funFactAboutMe = [
  "I like pie.",
  "Crashed a motercycle once in a river.",
  "Played Overwatch like an addict and reached top 30 world wide.",
  "I will outdrink you in caffeine",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function updateQuote() {
  const elem = document.getElementById("fact-target");
  const randomIndex = getRandomInt(funFactAboutMe.length);
  elem.innerText = funFactAboutMe[randomIndex];
}

updateQuote();
