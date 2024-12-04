import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Lightbox from "./LIghtBox"; // Ensure this is the correct casing for the import
import "./Gallery.css";

// Constants
const API_KEY = "jhhLgbjFvaxA1H6I3HL8aY3tDDKI416vkf6LeLERt7tcFHHln6dvK7UI";
const PER_PAGE = 15;

const Gallery = () => {
  // State management
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch images when the component mounts or when the current page or search term changes
  useEffect(() => {
    fetchImages();
  }, [currentPage, searchTerm]);

  // Function to fetch images from the API
  const fetchImages = async () => {
    setLoading(true);
    const apiUrl = searchTerm
      ? `https://api.pexels.com/v1/search?query=${searchTerm}&page=${currentPage}&per_page=${PER_PAGE}`
      : `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${PER_PAGE}`;

    try {
      const response = await axios.get(apiUrl, {
        headers: { Authorization: API_KEY },
      });
      setImages((prevImages) => [...prevImages, ...response.data.photos]);
    } catch (error) {
      alert("Failed to load images!");
    } finally {
      setLoading(false);
    }
  };

  // Function to handle search input
  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
    setImages([]); // Reset images for new search
  };

  // Function to load more images
  const loadMoreImages = () => {
    setCurrentPage((prev) => prev + 1);
  };

  // Functions to handle lightbox
  const openLightbox = (img) => {
    setLightboxImage(img);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  // JSX return statement
  return (
    <div className="gallery">
      <SearchBar onSearch={handleSearch} />
      <div className="images">
        {images.map((img) => (
          <div key={img.id} className="card">
            <img
              src={img.src.large2x}
              alt={img.photographer}
              onClick={() => openLightbox(img)}
            />
            <div className="image-name">
              <span>{img.photographer}</span>
            </div>
            <button onClick={() => window.open(img.src.large2x)}>
              Download
            </button>
          </div>
        ))}
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <button className="load-more" onClick={loadMoreImages}>
          Load More
        </button>
      )}
      {lightboxImage && (
        <Lightbox image={lightboxImage} onClose={closeLightbox} />
      )}
    </div>
  );
};

export default Gallery;
