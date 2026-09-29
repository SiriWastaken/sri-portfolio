export type ProjectStatus = "in-development" | "completed" | "archived" | "planned";

/**
 * Presentation weight on the home page. Flagship projects get the largest
 * treatment, featured projects a full row, additional projects a compact list.
 */
export type ProjectTier = "flagship" | "featured" | "additional";

export type FlowStep = {
  label: string;
  detail: string;
};

/** A small, data-driven system diagram: the path data takes through a project. */
export type ProjectFlow = {
  caption: string;
  steps: FlowStep[];
  /** A supporting input that feeds the flow, e.g. an external API. */
  aside?: FlowStep;
};

export type Challenge = {
  title: string;
  body: string;
};

export type ProjectDetails = {
  overview: string[];
  problem?: string[];
  role: string[];
  architecture: string[];
  challenges: Challenge[];
  /** For projects where the line between done and not-done matters. */
  implemented?: string[];
  planned?: string[];
  /** Personal reflection. Left undefined until written by me, never generated. */
  learned?: string[];
};

export type Project = {
  slug: string;
  title: string;
  /** Shorter name used in tight spaces (nav between projects, lists). */
  shortTitle?: string;
  year: string;
  category: string;
  status: ProjectStatus;
  /** One-line context shown next to the status, e.g. "Used during the 2026 season". */
  statusNote?: string;
  tier: ProjectTier;
  summary: string;
  technologies: string[];
  role: string;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  /** Shown instead of a link when the source isn't public. */
  sourceNote?: string;
  flow?: ProjectFlow;
  details?: ProjectDetails;
};
