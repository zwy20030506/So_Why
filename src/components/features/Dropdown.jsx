import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ title, children, columns = 1 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button 
        className="dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title} <i className="fas fa-chevron-down" />
      </button>
      
      {isOpen && (
        <div className="dropdown-menu">
          <div className="container">
            <div className={`dropdown-columns columns-${columns}`}>
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
