/** Shape shared by Simple Icons and the few logos vendored in this folder. */
export type TechIconData = {
  title: string;
  hex: string;
  path: string;
  /** Simple Icons are drawn on a 24×24 grid; vendored icons may differ. */
  viewBox?: string;
};
