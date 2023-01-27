const useIllustrations = () => {
  let gallery = [];
  const numberOfImages = 9;

  for (let i = 1; i < numberOfImages; i++) {
    gallery.push({
      original: `/illustrations/${i}.jpg`,
      thumbnail: `/illustrations/${i + "a"}.jpg`,
    });
  }

  return { gallery };
};

export default useIllustrations;
