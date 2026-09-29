export type WorkState = "active" | "planned" | "completed";

export type NowItem = {
  title: string;
  state: WorkState;
  note: string;
  /** Slug of a project on this site, if there is one. */
  projectSlug?: string;
};

export const now: NowItem[] = [
  {
    title: "610 Scouting Web — 2027",
    state: "active",
    note: "Building out the dashboard and its test bench ahead of the 2027 season.",
    projectSlug: "scouting-web-2027",
  },
  {
    title: "Coding in Orbit",
    state: "active",
    note: "Next up: wiring the parser to the Run button so the rocket actually flies.",
    projectSlug: "coding-in-orbit",
  },
  {
    title: "Wii Fit Scale",
    state: "active",
    note: "Decoding the Balance Board's raw HID reports into load-cell readings.",
    projectSlug: "wii-fit-scale",
  },
  {
    title: "Open source: The Blue Alliance",
    state: "planned",
    note: "I want to start contributing to The Blue Alliance and other FRC open-source projects. Nothing to show yet.",
  },
  {
    title: "Standalone Wii Fit scale hardware",
    state: "planned",
    note: "Moving the scale onto a small computer with its own display.",
    projectSlug: "wii-fit-scale",
  },
  {
    title: "610 Scouting App — 2026",
    state: "completed",
    note: "Finished with the 2026 season.",
    projectSlug: "scouting-app-2026",
  },
  {
    title: "Who Wants to Be a Millionaire — ICS3U Final",
    state: "completed",
    note: "My Grade 11 Computer Science final project.",
    projectSlug: "millionaire",
  },
];

export const workStateLabel: Record<WorkState, string> = {
  active: "Active",
  planned: "Planned",
  completed: "Completed",
};
