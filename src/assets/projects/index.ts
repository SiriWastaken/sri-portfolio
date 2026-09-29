import type { ProjectAssets } from "./types";
import codingInOrbit from "./coding-in-orbit";
import matchSim from "./match-sim";
import millionaire from "./millionaire";
import scoutingApp2026 from "./scouting-app-2026";
import scoutingWeb2027 from "./scouting-web-2027";
import wiiFitScale from "./wii-fit-scale";

export type { ProjectAssets, ProjectImage } from "./types";

/**
 * Images for each project, keyed by the project's slug in src/data/projects.ts.
 * A new project folder needs one import and one line here.
 */
const registry: Record<string, ProjectAssets> = {
  "scouting-app-2026": scoutingApp2026,
  "scouting-web-2027": scoutingWeb2027,
  "coding-in-orbit": codingInOrbit,
  "wii-fit-scale": wiiFitScale,
  millionaire,
  "match-sim": matchSim,
};

export function getProjectAssets(slug: string): Required<Pick<ProjectAssets, "screenshots" | "diagrams">> & ProjectAssets {
  const assets = registry[slug] ?? {};
  return { ...assets, screenshots: assets.screenshots ?? [], diagrams: assets.diagrams ?? [] };
}
