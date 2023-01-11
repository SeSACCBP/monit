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
            height: '3.125rem',
            width: '3.125rem',
            fontSize: '3.125rem',
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
