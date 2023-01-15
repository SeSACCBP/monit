import React from 'react';
import { useEffect, useState } from 'react';

function BackTopButton() {
  const [TopButton, setTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setTopButton(true);
      } else {
        setTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      {TopButton && (
        <button
          style={{
            position: 'fixed',
            bottom: '3.125rem',
            right: '3.125rem',
            zIndex: '2',
            cursor: 'pointer',
            border: 'none',
            background: 'transparent',
          }}
          onClick={scrollUp}
        >
          <img
            src="peng.png"
            style={{
              height: '4.375rem',
              weight: '4.375rem',
              objectFit: 'cover',
            }}
          ></img>
        </button>
      )}
    </div>
  );
}

export default BackTopButton;
