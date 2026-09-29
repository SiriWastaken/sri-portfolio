/**
 * Placeholder frames are a working aid, not content: they show in `next dev`
 * and stay off the live site unless NEXT_PUBLIC_SHOW_IMAGE_PLACEHOLDERS=true.
 */
export const showImagePlaceholders =
  process.env.NODE_ENV === "development" || process.env.NEXT_PUBLIC_SHOW_IMAGE_PLACEHOLDERS === "true";
