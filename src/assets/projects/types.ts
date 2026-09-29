import type { StaticImageData } from "next/image";

export type ProjectImage = {
  src: StaticImageData;
  /** Describe what the image shows, not what it is ("Averages table sorted by…", not "Screenshot"). */
  alt: string;
  caption?: string;
};

export type ImageAspect = "16/10" | "4/3" | "3/2" | "9/19.5";

/**
 * An image I still need to take. Rendered as a labelled placeholder frame
 * (in development only, by default) in the spot the real image will go.
 * Once the file exists, import it and move the entry to hero/screenshots.
 */
export type ImageSlot = {
  kind: "hero" | "screenshot" | "diagram";
  /** Where to save it, relative to this project's asset folder. */
  file: string;
  /** What to capture. */
  subject: string;
  /** Caption to use once the real image is in. */
  caption?: string;
  aspect: ImageAspect;
};

export type ProjectAssets = {
  /** Main image: shown on the home page and at the top of the project page. */
  hero?: ProjectImage;
  /** Shown in the Screenshots section of the project page. */
  screenshots?: ProjectImage[];
  /** Architecture or data-flow diagrams, shown in the Architecture section. */
  diagrams?: ProjectImage[];
  /** Images still to be taken. */
  planned?: ImageSlot[];
};
