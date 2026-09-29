import type { ProjectAssets } from "../types";

// To add an image: save it at the path in `file`, import it, add it to
// hero/screenshots/diagrams with real alt text, and delete its slot below.
//
//   import averages from "./screenshots/averages-day2.png";
//   screenshots: [{ src: averages, alt: "What the screenshot shows" }],

const assets: ProjectAssets = {
  planned: [
    {
      kind: "hero",
      file: "hero/tablet-in-the-stands.jpg",
      subject: "Photo: the app running on a scouting tablet in the stands during a real match, field visible behind it.",
      aspect: "3/2",
    },
    {
      kind: "screenshot",
      file: "screenshots/auto-path-drawing.png",
      subject: "Auto page with a robot's autonomous path drawn on the field image.",
      caption: "Scouts trace each robot's autonomous path by hand on the field.",
      aspect: "16/10",
    },
    {
      kind: "screenshot",
      file: "screenshots/teleop-scoring.png",
      subject: "Teleop page mid-match, with scoring controls filled in.",
      caption: "The teleop screen, built to be used while watching a live match.",
      aspect: "16/10",
    },
    {
      kind: "screenshot",
      file: "screenshots/averages-day1-vs-day2.png",
      subject: "Averages tab with Day 2 mode on, showing risers and fallers.",
      caption: "Averages with a Day 1 / Day 2 split.",
      aspect: "16/10",
    },
    {
      kind: "screenshot",
      file: "screenshots/picklist-board.png",
      subject: "Picklist board mid-drag, with a team's radar chart open.",
      caption: "The drag-and-drop picklist used for alliance selection.",
      aspect: "16/10",
    },
    {
      kind: "screenshot",
      file: "screenshots/match-plan.png",
      subject: "Strategy tools: a match plan with climb estimates and role suggestions.",
      caption: "Match planning from synced scouting data.",
      aspect: "16/10",
    },
    {
      kind: "screenshot",
      file: "screenshots/team-stats-auto-replay.png",
      subject: "Stats tab for one team: charts plus the auto path replay.",
      caption: "Per-team stats with auto path replay.",
      aspect: "16/10",
    },
  ],
};

export default assets;
