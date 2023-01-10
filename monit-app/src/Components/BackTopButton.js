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
            bottom: '50px',
            right: '50px',
            height: '50px',
            width: '50px',
            fontSize: '50px',
            borderRadius: '10px',
            zIndex: '2',
            cursor: 'pointer',
          }}
          onClick={scrollUp}
        >
          ^
        </button>
      )}
    </div>
  );
}

export default BackTopButton;
