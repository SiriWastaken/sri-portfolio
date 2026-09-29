import {
  siClaude,
  siGit,
  siGithub,
  siNextdotjs,
  siOpenjdk,
  siReact,
  siSwift,
  siTypescript,
  siVercel,
} from "simple-icons";
import { csharp } from "@/assets/icons/csharp";
import type { TechIconData } from "@/assets/icons/types";

export type Technology = {
  name: string;
  icon: TechIconData;
  /** Where I've actually used it. Keeps the section from being a logo wall. */
  usedIn: string;
  /** Still learning it: shown with a "Learning" tag. */
  learning?: boolean;
};

export type TechnologyGroup = {
  label: string;
  items: Technology[];
};

// Simple Icons doesn't ship a Java logo (trademark), so Java uses the OpenJDK
// mark, which is the JDK these projects actually run on.
export const stack: TechnologyGroup[] = [
  {
    label: "Languages",
    items: [
      {
        name: "Java",
        icon: siOpenjdk,
        usedIn: "The Millionaire game (Swing, Java2D) and the Wii Balance Board scale (hid4java).",
      },
      {
        name: "TypeScript",
        icon: siTypescript,
        usedIn: "Both scouting projects, the match sim, and this site.",
      },
      {
        name: "Swift / SwiftUI",
        icon: siSwift,
        usedIn: "Picking it up through small iOS projects.",
        learning: true,
      },
      {
        name: "C#",
        icon: csharp,
        usedIn: "Early days. Nothing on this page uses it yet.",
        learning: true,
      },
    ],
  },
  {
    label: "Frontend",
    items: [
      {
        name: "React",
        icon: siReact,
        usedIn: "The UI layer of both scouting projects.",
      },
      {
        name: "Next.js",
        icon: siNextdotjs,
        usedIn: "Scouting Web 2027, 610 Match Sim, and this site.",
      },
      {
        name: "React Native",
        icon: siReact,
        usedIn: "The 2026 scouting app, built with Expo for Android tablets.",
      },
    ],
  },
  {
    label: "Tools & platform",
    items: [
      {
        name: "Vercel",
        icon: siVercel,
        usedIn: "Hosts the 2026 app's web build; the 2027 dashboard is configured for it.",
      },
      {
        name: "Git",
        icon: siGit,
        usedIn: "Version control for every project on this page.",
      },
      {
        name: "GitHub",
        icon: siGithub,
        usedIn: "Repos, pull requests, and Actions CI for the 2027 dashboard.",
      },
      {
        name: "Claude Code",
        icon: siClaude,
        usedIn: "Coding assistant in my day-to-day workflow.",
      },
    ],
  },
];

/** Used in projects on this site, but not part of my core stack. */
export const alsoUsed = ["Expo", "Tailwind CSS", "Couchbase", "Playwright"];
