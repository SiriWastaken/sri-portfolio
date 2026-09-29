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
      file: "hero/ipad-workspace.png",
      subject: "iPad in landscape: code on the left, the rocket on its grid on the right.",
      aspect: "4/3",
    },
    {
      kind: "screenshot",
      file: "screenshots/missions.png",
      subject: "The mission-selection screen.",
      caption: "Mission select.",
      aspect: "4/3",
    },
    {
      kind: "screenshot",
      file: "screenshots/accessibility-options.png",
      subject: "Options screen with the accessibility toggles.",
      caption: "Accessibility settings, stored with @AppStorage.",
      aspect: "4/3",
    },
  ],
};

export default assets;
