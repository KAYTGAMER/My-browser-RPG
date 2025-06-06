function makeChoice(choice) {
  const storyText = document.getElementById('story-text');
  if (choice === 'Study') {
    storyText.textContent = "WOW Future CEO !!. Hope that extra points were worth missing pizza night.";
  } else if (choice === 'Go Out') {
    storyText.textContent = "Hehehee single piece of paper cant decide anyones future let's chill tonight.";
  }
}