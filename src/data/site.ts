export const site = {
  name: "Sri Ganty",
  shortName: "Sri",
  title: "Sri Ganty — Student Developer",
  description:
    "Student developer building full-stack software, robotics tools, and systems that solve real problems. Software for FRC Team 610, iOS, and hardware experiments.",
  githubUrl: "https://github.com/SiriWastaken",
  dmojUrl: "https://dmoj.ca/user/SiriWastaken",
  // TODO: add your LinkedIn profile URL. The LinkedIn button stays hidden until this is set.
  linkedinUrl: undefined as string | undefined,
} as const;

/**
 * Canonical site URL. Set NEXT_PUBLIC_SITE_URL once the site has a domain;
 * on Vercel the production URL is picked up automatically.
 */
export function getSiteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return new URL(explicit);

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return new URL(`https://${vercel}`);

  return new URL("http://localhost:3000");
}
