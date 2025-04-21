import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


import konkani from "../assets/Image1.jpg";
import music from "../assets/Image2.jpeg";
import music1 from "../assets/Image3.jpeg";

const rawImages = [ konkani, music, music1];

const ImageCarousel = () => {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Preload images and filter horizontal ones
  useEffect(() => {
    const loadAndFilterImages = async () => {
      const filtered = await Promise.all(
        rawImages.map(
          (src) =>
            new Promise((resolve) => {
              const img = new Image();
              img.onload = () => {
                const isHorizontal = img.width >= img.height;
                resolve(isHorizontal ? src : null);
              };
              img.src = src;
            })
        )
      );
      const landscapeImages = filtered.filter((src) => src !== null);
      setImages(landscapeImages);
    };

    loadAndFilterImages();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(timer);
  }, [images, nextSlide]);

  if (images.length === 0) {
    return <div className="text-center py-10">No horizontal images available.</div>;
  }

  return (
    <div className="relative w-full h-[650px] overflow-hidden mt-4">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="flex items-center justify-center w-full h-full bg-[#f5f5dc]">
            <div className="border-[16px] border-[#d2b48c] rounded-3xl shadow-2xl bg-white w-[95%] h-[95%] overflow-hidden">
              <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow z-20"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow z-20"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
              current === index
                ? "bg-white border-white scale-110"
                : "bg-transparent border-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
