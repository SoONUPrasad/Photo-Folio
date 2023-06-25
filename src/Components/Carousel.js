import React, { useState, useEffect } from 'react';

function Carousel({ images, selectedImageId, onClose}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const selectedIndex = images.findIndex((image) => image.id === selectedImageId);
    setCurrentImageIndex(selectedIndex !== -1 ? selectedIndex : 0);
  }, [selectedImageId, images]);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleClose = () => {
    // Handle closing the Carousel
    setCurrentImageIndex(0);
    setIsOpen(false);
    onClose();
  };

  const currentImage = images[currentImageIndex];

  if (!currentImage || !isOpen) {
    return null; // Return null or loading indicator if the current image is not found
  }

  return (
    // <div className='w-full h-full'>
    //   <div>
    //     <button onClick={handlePrevious}>Previous</button>
    //     <img className='h-400 w-200' src={currentImage.url} alt={currentImage.title} />
    //     <button onClick={handleNext}>Next</button>
    //   </div>
    //   <button onClick={handleClose}>Close</button>
    // </div>

    <div className="fixed top-40 left-0 w-full h-96 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative">
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl font-bold z-10 bg-black bg-opacity-50 px-4 py-2 rounded-full focus:outline-none"
          onClick={handlePrevious}
        >
          &lt;
        </button>
        <img className="max-w-80 max-h-full h-96" src={currentImage.url} alt={currentImage.title} />
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl font-bold z-10 bg-black bg-opacity-50 px-4 py-2 rounded-full focus:outline-none"
          onClick={handleNext}
        >
          &gt;
        </button>
        <button
          className="absolute top-2 right-2 text-white text-xl font-bold bg-red-500 px-4 py-2 rounded-lg focus:outline-none"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>

  );
}

export default Carousel;
