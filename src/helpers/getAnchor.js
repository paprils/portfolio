import slugify from "slugify";

const getAnchor = (anchor) => {
  if (!anchor) return "";
  return slugify(anchor, { lower: true });
};

export default getAnchor;
