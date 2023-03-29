import PropTypes from 'prop-types';
import ImageGalleryItem from './imageGalleryItem.js';

const ImageGallery = ({ images }) => {
    return (
        <ul className="ImageGallery">
            {images.map(image => (
                <ImageGalleryItem key={image.id} webformatURL={image.webformatURL} tags={image.tags}/>
            ))}
      
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};