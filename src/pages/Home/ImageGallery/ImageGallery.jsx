import React, { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import './ImageGallery.css';

const ImageGallery = () => {
    const [allImage, setAllImage] = useState([]);
    const [isHovered, setIsHovered] = useState(false);
    const [popupImage, setPopupImage] = useState(null);
    const [filteredImages, setFilteredImages] = useState(null);
  
    useEffect(() => {
      fetch('galleryData.json')
        .then(res => res.json())
        .then(data => {
          setAllImage(data);
          setFilteredImages(data);
        });
    }, []);
  
    const handleImageClick = (image) => {
      setPopupImage(image);
      setIsHovered(true);
      document.body.style.overflow = 'hidden';
    };
  
    const handlePopupClose = () => {
      setPopupImage(null);
      setIsHovered(false);
      document.body.style.overflow = 'auto';
    };
  
    const filterSelectItem = (categoryItem) => {
      if (categoryItem === 'all') {
        setFilteredImages(allImage); // Show all images when no category is selected
      } else {
        const updatedItem = allImage.filter((currentEle) => currentEle.category === categoryItem);
        setFilteredImages(updatedItem);
      }
    };
  
    return (
      <div className='p-4 my-14'>
        <div className='text-center mb-3'> 
          <button className='common-btn btn1' onClick={() => filterSelectItem('all')}>
            All
          </button>
          <button className='common-btn reverse btn2' onClick={() => filterSelectItem('beautiful room')}>
            House
          </button>
          <button className='common-btn btn1' onClick={() => filterSelectItem('buildings')}>
            Building
          </button>
          <button className='common-btn reverse btn2' onClick={() => filterSelectItem('buildings')}>
            Duplex
          </button>
          <button className='common-btn btn1' onClick={() => filterSelectItem('buildings')}>
            Room
          </button>
        </div>
        <ResponsiveMasonry>
          <Masonry gutter='10px'>
            {filteredImages && filteredImages.map((image, i) => (
              <img
                key={i}
                src={image.imageLink}
                style={{ width: '100%', display: 'block' }}
                alt=''
                className='image-g b-shape'
                onClick={() => handleImageClick(image)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
  
        <div className={`popup-container ${isHovered ? 'show' : ''}`}>
          <span className='close-button' onClick={handlePopupClose}>
            &times;
          </span>
          {popupImage && <img src={popupImage.imageLink} alt='' className='popup-image' />}
        </div>
      </div>
    );
  };
  
  export default ImageGallery;
  