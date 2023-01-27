import ImageGallery from "react-image-gallery";
import PropTypes from "prop-types";

const Gallery = (props) => {
  const { gallery } = props;

  if (!gallery || gallery.length === 0) return null;

  return (
    <ImageGallery
      items={gallery}
      showFullscreenButton={false}
      showPlayButton={false}
      autoPlay={true}
    />
  );
};

Gallery.propTypes = {
  gallery: PropTypes.array,
};

export default Gallery;
