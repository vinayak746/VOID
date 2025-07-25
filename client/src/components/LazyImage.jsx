import React, { useEffect, useRef, useState } from 'react';

const LazyImage = ({ src, alt, className, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '100px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div ref={imgRef} className={className}>
      {isLoaded ? (
        <img 
          src={src} 
          alt={alt} 
          className={className} 
          onClick={onClick} 
          loading="lazy" 
        />
      ) : (
        <div className="animate-pulse bg-gray-700" style={{ width: '100%', height: '100%' }}></div>
      )}
    </div>
  );
};

export default LazyImage;