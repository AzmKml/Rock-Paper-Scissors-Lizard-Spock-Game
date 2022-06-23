//Order in which options are available
const arr = [
    {
      image: "lizard.png",
      name: "Lizard",
    },
    {
      image: "paper.png",
      name: "Paper",
    },
    {
      image: "rock.png",
      name: "Rock",
    },
    {
      image: "scissor.png",
      name: "Scissor",
    },
    {
      image: "spock.png",
      name: "Spock",
    },
  ];
  
  //Rule for who has win over whom
  const rule = {
    Lizard: ["Spock", "Paper"],
  
    Paper: ["Rock", "Spock"],
  
    Rock: ["Lizard", "Scissor"],
  
    Scissor: ["Paper", "Lizard"],
  
    Spock: ["Scissor", "Rock"],
  };