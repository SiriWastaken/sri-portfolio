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
      file: "hero/board-and-laptop.jpg",
      subject: "Photo: the Wii Balance Board connected to your laptop, with the program running on screen.",
      aspect: "3/2",
    },
    {
      kind: "screenshot",
      file: "screenshots/raw-hid-reports.png",
      subject: "Terminal output: board found, connected, and raw HID reports streaming in hex.",
      caption: "v0.1 connects to the board and dumps raw HID reports.",
      aspect: "16/10",
    },
  ],
};

export default assets;
