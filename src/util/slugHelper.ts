export const processSlug = (slug: string) => {
  if (slug && slug.startsWith("blog/")) {
    return slug.slice(5);
  } else {
    return slug;
  }
};
