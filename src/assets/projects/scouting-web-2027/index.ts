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
      file: "hero/teams-dashboard.png",
      subject: "Teams page in a desktop browser with the \"Live updates on\" bar visible.",
      aspect: "16/10",
    },
    {
      kind: "screenshot",
      file: "screenshots/team-detail.png",
      subject: "One team's page: match log and card reports.",
      caption: "A team's match log, updated live as scouts submit.",
      aspect: "16/10",
    },
    {
      kind: "screenshot",
      file: "screenshots/box-plot-board.png",
      subject: "Averages / Box Plot board with real event data.",
      caption: "The metric board: averages and distributions per team.",
      aspect: "16/10",
    },
    {
      kind: "screenshot",
      file: "screenshots/admin-overview.png",
      subject: "Admin overview: health checks, sync status, and API metrics all green.",
      caption: "The operations panel: health checks, sync status, and API metrics.",
      aspect: "16/10",
    },
    {
      kind: "screenshot",
      file: "screenshots/realtime-self-test.png",
      subject: "Admin Realtime tab after running the WebSocket self-test.",
      caption: "Realtime monitoring and the WebSocket self-test.",
      aspect: "16/10",
    },
    {
      kind: "screenshot",
      file: "screenshots/users-and-roles.png",
      subject: "Users page showing roles and approval states (blur names and emails).",
      caption: "Accounts, roles, and approvals, enforced on the server.",
      aspect: "16/10",
    },
    {
      kind: "screenshot",
      file: "screenshots/ci-all-green.png",
      subject: "GitHub Actions run for a pull request with every check passing.",
      caption: "Every pull request runs the full test bench in CI.",
      aspect: "16/10",
    },
  ],
};

export default assets;
