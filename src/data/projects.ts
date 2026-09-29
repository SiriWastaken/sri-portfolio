import type { Project, ProjectTier } from "./types";

/*
 * Every claim below was checked against the project's source code, commit
 * history, or README. If something isn't in the repo, it isn't here.
 *
 * To add a project: append an entry, then (optionally) create
 * src/assets/projects/<slug>/ and register it in src/assets/projects/index.ts.
 */
export const projects: Project[] = [
  {
    slug: "scouting-app-2026",
    title: "610 Scouting App — 2026",
    shortTitle: "Scouting App 2026",
    year: "2026 season",
    category: "Mobile app · FRC",
    status: "completed",
    statusNote: "Built for Team 610's 2026 season",
    tier: "flagship",
    summary:
      "An offline-first Android scouting app that lets six scouts record every robot in a match and keeps their data in sync across the team's tablets.",
    technologies: [
      "TypeScript",
      "React Native",
      "Expo",
      "Couchbase Lite",
      "Sync Gateway",
      "NativeWind",
      "The Blue Alliance API",
    ],
    role: "One of the main developers on a shared team codebase",
    highlights: [
      "Submissions are written to a local Couchbase Lite database first, then replicated continuously in both directions through Sync Gateway, so scouting keeps working when the venue network doesn't.",
      "A five-step match flow (start, auto, teleop, review, human player), with autonomous paths drawn by hand on an image of the field.",
      "Strategy tools built on the synced data: multi-team comparison, a third-robot selector, match plans with climb estimates and role suggestions, and a drag-and-drop picklist.",
      "Team lists, match schedules, and rankings pulled from The Blue Alliance API.",
    ],
    sourceNote: "Private team repository",
    flow: {
      caption: "How a match gets from a scout's tablet to the strategy team",
      steps: [
        { label: "Scout tablets", detail: "Six Android tablets, one robot each" },
        { label: "Couchbase Lite", detail: "Local write, works offline" },
        { label: "Sync Gateway", detail: "Continuous push and pull replication" },
        { label: "Analysis tabs", detail: "Stats, averages, box plots, picklist" },
      ],
      aside: { label: "The Blue Alliance API", detail: "Teams, schedules, rankings" },
    },
    details: {
      overview: [
        "The match scouting app FRC Team 610 used for the 2026 season. Scouts run it on Android tablets during qualification matches; each one follows a single robot and records its autonomous routine, teleop scoring, and endgame.",
        "Every tablet writes to its own local database and syncs with the others through Couchbase Sync Gateway. The same app then turns that data into the views the strategy side uses during an event: per-team stats, sortable averages with a Day 1 / Day 2 split, box plots, match planning tools, scout coverage, and a picklist board for alliance selection.",
      ],
      problem: [
        "Every qualification match has six robots on the field, and by alliance selection the team needs trustworthy data on all of them. That data has to be entered quickly by scouts watching a live match, it has to survive unreliable venue networks, and it has to be usable during the event rather than after it.",
      ],
      role: [
        "Strategy tools: the third-robot selector, multi-team comparison and match review, and the match planning view.",
        "Robot betting, a match-prediction game for scouts stored as its own document type in Couchbase.",
        "Expert (pit) scouting with robot photos stored in the database and rendered on the stats pages.",
        "Correcting submitted data: picking a match that already has a record loads it for editing and re-submission, plus a way to clear a bad record.",
        "Workflow changes from scout feedback: highlighting a scout's assigned matches and teams, a reworked match selector, a flipped-field option for autos, and an emergency scout button.",
        "The web build's layout (a vertical navigation rail, typography, and spacing), its Vercel deployment, and a rewrite of the project documentation for future developers.",
      ],
      architecture: [
        "Expo and React Native with file-based routing through Expo Router. Screens are grouped into tabs; the match flow is its own set of routes that share a single scouting-data object instead of passing props through five screens.",
        "A service layer sits between the UI and the database: couchbase.ts handles initialization, replication, and document reads and writes; aggregateData.ts recomputes a team's rollups whenever a match for that team is submitted; matchPlanningUtils.ts holds the climb estimates and role generation used by match planning.",
        "Couchbase Lite is a native module, so the Android app runs as an Expo development build rather than in Expo Go. For the web build, a couchbase.web.ts file, which Metro picks over couchbase.ts on web, talks to Sync Gateway's REST API with stale-while-revalidate caching.",
        "The navigation adapts to the platform: a bottom tab bar on Android tablets, a resizable sidebar on wide web screens.",
      ],
      challenges: [
        {
          title: "Data entry that can't depend on the network",
          body: "Competition Wi-Fi is not something to rely on. Writing locally first and letting the replicator push and pull in the background means a scout can always submit, and other devices catch up once they can reach Sync Gateway.",
        },
        {
          title: "Fixing data after it's submitted",
          body: "Scouts make mistakes mid-match. Rather than letting a second submission create a duplicate record, selecting an already-scouted match loads the existing document so it can be corrected and saved again.",
        },
        {
          title: "Photos across devices",
          body: "Robot photos from pit scouting are stored with the scouting documents so they replicate like any other data. Getting them to show up reliably on other devices, not just the one that took them, took several rounds of fixes, including a database authentication bug.",
        },
        {
          title: "One codebase, two platforms",
          body: "The same code ships as a native Android app and a web build. Platform-specific files keep the database layer separate while the screens stay shared.",
        },
      ],
    },
  },
  {
    slug: "scouting-web-2027",
    title: "610 Scouting Web — 2027",
    shortTitle: "Scouting Web 2027",
    year: "2027 season",
    category: "Full-stack web · FRC",
    status: "in-development",
    tier: "flagship",
    summary:
      "A Next.js dashboard for Team 610's scouting data, with its own sign-in, server-enforced roles, live updates over WebSockets, and an operations panel for mentors.",
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "WebSockets",
      "Couchbase Sync Gateway",
      "OpenID Connect",
      "Playwright",
      "GitHub Actions",
      "Vercel",
    ],
    role: "Sole developer",
    highlights: [
      "Google and Apple sign-in written directly against OpenID Connect (state, nonce, PKCE, and ID-token signature checks) without an auth library.",
      "Five roles (Owner, Mentor, Scout lead, Scout, Member) decided in one permissions module and enforced on the server, with an admin panel for health checks, realtime and sync monitoring, user management, and an audit log.",
      "Pages update live: the server long-polls Sync Gateway's changes feed and relays an allow-listed set of fields over a session-checked WebSocket.",
      "A test bench with unit, property-based, integration, security, contract, stress, and Playwright end-to-end suites, run in GitHub Actions.",
    ],
    githubUrl: "https://github.com/SiriWastaken/610-scouting-web-2027",
    flow: {
      caption: "How a change in the scouting database reaches an open dashboard",
      steps: [
        { label: "Sync Gateway", detail: "Scouting, pit, and aggregate documents" },
        { label: "Changes feed", detail: "Server long-polls from a sequence" },
        { label: "WebSocket relay", detail: "Session-checked, allow-listed fields" },
        { label: "Dashboard", detail: "Merges by revision, resumes on reconnect" },
      ],
      aside: { label: "Google / Apple sign-in", detail: "Accounts, sessions, five roles" },
    },
    details: {
      overview: [
        "A web platform for analysing Team 610's scouting data. It reads the documents the scouting app produces from Couchbase Sync Gateway and presents them as Teams, Averages, Box Plot, Strategy, and Coverage views.",
        "Everyone signs in with Google or Apple first. New accounts wait for approval, and what each person can see and do depends on their role. Mentors and the Owner get an operations panel covering system health, the realtime feed, sync status, API metrics, users, sessions, and an audit log.",
      ],
      problem: [
        "In 2026, data entry and analysis lived in the same tablet app. This project moves the analysis side to the web: it reads the same Couchbase data, works on any device with a browser, and requires an approved, signed-in account to see anything.",
      ],
      role: [
        "Everything in the repository: the Next.js app, the authentication system, the realtime server, the admin panel, the test bench, and the documentation.",
      ],
      architecture: [
        "Next.js App Router. Everything behind sign-in sits in one route group with a shared sidebar shell. A proxy redirects signed-out visitors to the welcome page, and every page and API route re-checks the session on the server.",
        "A server-only repository reads aggregate and pit documents from Sync Gateway's REST API, with a 20-second snapshot cache. Accounts, sessions, and the audit log live in a separate Sync Gateway database, or in a local file during development.",
        "Roles and permissions are defined in a single module, and API routes go through one guard that answers \"who is asking?\" for every request.",
        "Live updates run on WebSockets. Locally, a small Node server handles the upgrade and hands everything else to Next.js; on Vercel, the same route uses Vercel's WebSocket support with Fluid Compute.",
      ],
      challenges: [
        {
          title: "Keeping every open tab consistent",
          body: "Each page renders from a snapshot plus that snapshot's sequence number, then subscribes from that sequence. The browser keeps the newest revision it has seen for each document, ignores stale or out-of-order events, and merges REST results against the same store. After a disconnect it reconnects with backoff and resumes from the last sequence it applied; if Sync Gateway rejects that sequence, the page reloads its data in place.",
        },
        {
          title: "Privacy on a live feed",
          body: "The relay only forwards known document types and explicitly selected fields; scout names, photos, and free-text notes never leave the server. Each socket's session is re-checked every minute, and the connection closes as soon as a session is revoked.",
        },
        {
          title: "WebSockets across two runtimes",
          body: "A plain Next.js dev server can't hold a WebSocket open on an app route, so local development runs through a small custom server while production uses Vercel's WebSocket support. Both share the same protocol and bridge code.",
        },
        {
          title: "Tests that can't quietly pass",
          body: "The test runner keeps a manifest of required test files and minimum test counts, and fails if any suite is skipped or shrinks. Contract tests run against a real Couchbase and Sync Gateway in Docker, and the fake Sync Gateway used elsewhere models the real server's reserved-property rules.",
        },
      ],
    },
  },
  {
    slug: "coding-in-orbit",
    title: "Coding in Orbit",
    year: "2026–27",
    category: "iOS & iPadOS app · Swift Student Challenge",
    status: "in-development",
    statusNote: "Swift Student Challenge project",
    tier: "featured",
    summary:
      "A SwiftUI app that teaches programming by having you write the commands that steer a rocket through space.",
    technologies: ["Swift", "SwiftUI", "Swift Playgrounds"],
    role: "Sole developer",
    highlights: [
      "A split-screen workspace that resizes for each device: a code editor with line numbers on one side, the rocket's grid on the other.",
      "A small parser turns typed lines into commands like launch() and move(up), tracking indentation depth for blocks such as repeat and if.",
      "An accessibility options screen (dyslexia-friendly font, high contrast, colour-blind mode, reduced motion, speech, haptics, text size) stored with @AppStorage.",
    ],
    sourceNote: "Source not public yet",
    details: {
      overview: [
        "An app playground for iPad and iPhone built for the Swift Student Challenge. The first mission is a tutorial: you type commands into a workspace and they move a rocket around a grid in space.",
      ],
      role: [
        "Solo project: design, code, and (eventually) the artwork. The placeholder rocket is marked to be replaced with one I draw myself.",
      ],
      architecture: [
        "The code is split into three areas: a GameEngine (the block parser and block definitions), the UI views, and an AccessibilityEngine (a settings manager, view modifiers, and colour helpers that adapt to high-contrast and colour-blind modes).",
        "Available blocks live in their own data file, separate from the renderer, so adding a new block or lesson doesn't mean touching the views.",
        "The workspace re-parses the editor text into code lines as you type. The rocket is a value type with a position on a 20 × 20 grid, and the parser's execute step maps each command onto it and returns a log.",
      ],
      challenges: [
        {
          title: "Indentation or brackets",
          body: "Blocks like repeat and if need a way to express nesting. I'm leaning toward indentation, which reads more naturally for beginners but is harder to parse than brackets. The parser already records each line's indentation depth with that in mind.",
        },
        {
          title: "Accessibility from the start",
          body: "Instead of adding accessibility at the end, every setting lives in one manager that views read from, and it also listens for VoiceOver turning on or off.",
        },
      ],
    },
  },
  {
    slug: "wii-fit-scale",
    title: "Wii Fit Scale",
    year: "2026",
    category: "Hardware / software · Java",
    status: "in-development",
    statusNote: "v0.1: connecting and reading raw reports",
    tier: "featured",
    summary:
      "Talking to a Nintendo Wii Balance Board over HID from Java, the first step toward a standalone digital scale.",
    technologies: ["Java", "OpenJDK 17", "hid4java", "JNA", "HID"],
    role: "Sole developer",
    highlights: [
      "Finds the Balance Board by Nintendo's vendor ID and the board's product ID, then opens it through hid4java, which uses JNA for native HID access.",
      "Reads raw input reports and prints them as hex, so the format can be checked against the real hardware before any decoder is written.",
      "The next step is decoding the board's four load-cell readings into a weight.",
    ],
    githubUrl: "https://github.com/SiriWastaken/Wii-Fit-Board",
    details: {
      overview: [
        "A Java program that connects to a Wii Balance Board over HID. The long-term goal is a standalone digital scale: the board, a small computer, and a display, with no game console involved.",
      ],
      role: ["Solo project."],
      architecture: [
        "A WiiBoard class wraps the hardware: connect() looks up the device by vendor ID 0x057E and product ID 0x0306 and opens it; readReport() waits up to a second for an input report and returns only the bytes actually received; disconnect() closes the device and shuts down hid4java's services.",
        "Main runs a read loop that prints every report in hex and always releases the device in a finally block, so the board isn't left open if the program exits.",
      ],
      challenges: [
        {
          title: "Reading before decoding",
          body: "The board sends several kinds of reports. Instead of writing a decoder from documentation alone, v0.1 dumps raw reports so the decoder can be built against what the hardware actually sends.",
        },
      ],
    },
  },
  {
    slug: "millionaire",
    title: "Who Wants to Be a Millionaire — ICS3U Final",
    shortTitle: "Millionaire (ICS3U)",
    year: "2026",
    category: "Desktop game · Java",
    status: "completed",
    statusNote: "Grade 11 Computer Science final project",
    tier: "additional",
    summary:
      "My Grade 11 Computer Science final: a Who Wants to Be a Millionaire–style quiz game in Java Swing, with every screen drawn by hand in Java2D.",
    technologies: ["Java", "Swing", "Java2D"],
    role: "Sole developer",
    highlights: [
      "A 16-question money ladder with safe points, a play-or-walk decision, and timed or untimed modes.",
      "Four lifelines (Swap, Audience Poll, 25/75, Phone a Friend) and a question bank loaded from a CSV file.",
      "Custom-drawn UI and animations driven by Swing timers, with game state kept apart from rendering and input.",
    ],
    githubUrl: "https://github.com/SiriWastaken/Who-Wants-To-Be-a-Millionaire",
    details: {
      overview: [
        "\"FINAL ANSWER?\" is a quiz game modelled on Who Wants to Be a Millionaire, built as my final project for ICS3U. You climb a 16-step money ladder, use lifelines, and decide whether to keep playing or walk away with what you have.",
        "It's a single-player desktop game in plain Java with no external libraries, 17 classes in all.",
      ],
      role: ["Solo project, including the logo."],
      architecture: [
        "GameSession holds the game state: the current question, winnings, safe points, the timer, and which lifelines are used. GameScreenRenderer draws everything, and GameScreenPanel handles input and coordinates the two.",
        "QuestionBank builds a deck of 16 questions of increasing difficulty and finds same-difficulty replacements for the Swap lifeline. QuestionParser reads the question CSV, including quoted values.",
        "Every screen (main menu, mode selector, intro, money ladder, play-or-walk, game over, win screen) is a custom-painted Swing panel. Animations run on javax.swing.Timer.",
      ],
      challenges: [
        {
          title: "Input during animations",
          body: "Once an answer is locked in, the game plays a reveal animation before showing the result. Lifelines could still be triggered during that window; the fix was to block them as soon as the reveal starts.",
        },
        {
          title: "Keeping drawing code manageable",
          body: "With no layout managers doing the work, the renderer was split out from the game logic so the drawing code and the rules could change independently.",
        },
      ],
    },
  },
  {
    slug: "match-sim",
    title: "610 Match Sim",
    year: "2026",
    category: "Simulation · Web",
    status: "in-development",
    statusNote: "Early version",
    tier: "additional",
    summary:
      "An early FRC match simulator: the browser renders the field while a TypeScript WebSocket server owns robot movement, game pieces, and match state.",
    technologies: ["TypeScript", "Next.js", "WebSockets"],
    role: "Sole developer",
    highlights: [
      "Authoritative server running a fixed 60 Hz tick and broadcasting state snapshots.",
      "Clients only send validated input; disconnecting releases a robot without stopping the match.",
    ],
    githubUrl: "https://github.com/SiriWastaken/610-Match-Sim",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByTier(tier: ProjectTier): Project[] {
  return projects.filter((project) => project.tier === tier);
}

export function getProjectsWithDetails(): Project[] {
  return projects.filter((project) => project.details);
}
