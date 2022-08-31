const messages = [
    "Hi! I'm Isis Zapata and I'm a software engineer.",
    "I'm full-stack developer.",
    "I'm From Honduras",
    "I love to code.",
    "I'm a beautiful person.",
    "Actually, I'm a programmer.",
    "I'm Happy to be a programmer.",
    "Weight 43kg",
    "Computer Science Engineer in University Catholic of Honduras",
    "My name is Isis Zapata and I'm a software engineer.",
    "Github: isinicolle",
    "LinkedIn: isis-zapata",
  ];
  
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    funnyCommit
  };