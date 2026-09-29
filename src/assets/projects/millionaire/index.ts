import type { ProjectAssets } from "../types";
import logo from "./hero/final-answer-logo.png";

// To add a screenshot: save it at the path in `file`, import it, add it to
// `screenshots` with real alt text, and delete its slot below.

const assets: ProjectAssets = {
  hero: { src: logo, alt: "The FINAL ANSWER? logo: the letters FA and a question mark inside a blue and gold ring" },
  planned: [
    {
      kind: "screenshot",
      file: "screenshots/question-and-ladder.png",
      subject: "A mid-game question with the money ladder on the side and the timer running.",
      caption: "A question, the timer, and the money ladder.",
      aspect: "16/10",
    },
    {
      kind: "screenshot",
      file: "screenshots/audience-poll.png",
      subject: "The Audience Poll lifeline showing its percentages.",
      caption: "The Audience Poll lifeline.",
      aspect: "16/10",
    },
    {
      kind: "screenshot",
      file: "screenshots/play-or-walk.png",
      subject: "The play-or-walk decision after £32,000.",
      caption: "Play or walk away.",
      aspect: "16/10",
    },
    {
      kind: "screenshot",
      file: "screenshots/win-screen.png",
      subject: "The £1,000,000 win screen with confetti.",
      caption: "The win screen's particle system.",
      aspect: "16/10",
    },
  ],
};

export default assets;
