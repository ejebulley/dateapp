
let name1 = "";
let name2 = "";

function startApp() {
  name1 = document.getElementById('name1').value;
  name2 = document.getElementById('name2').value;

  if (!name1 || !name2) {
    alert("Please enter both names");
    return;
  }

  document.getElementById('nameSection').classList.add('hidden');
  document.getElementById('appSection').classList.remove('hidden');

  document.getElementById('greeting').innerText = `Welcome ${name1} & ${name2}! Let's get to know each other 💕`;
}

async function nextQuestion() {
  const questionBox = document.getElementById('question');
  questionBox.innerText = "Loading question...";

  try {
    // Using a free public API
    const response = await fetch('https://api.truthordarebot.xyz/v1/truth');
    const data = await response.json();

    const question = data.question;
    questionBox.innerText = `${name1} & ${name2}, ${question}`;
  } catch (error) {
    questionBox.innerText = "Failed to load question. Please try again.";
    console.error(error);
  }
}