import { useState, useEffect, useRef, useCallback } from 'react';

export const useNavigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef({});

  const handleDropdownToggle = useCallback((dropdownId) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  }, [activeDropdown]);

  const handleClickOutside = useCallback((event) => {
    if (activeDropdown && !dropdownRefs.current[activeDropdown]?.contains(event.target)) {
      setActiveDropdown(null);
    }
  }, [activeDropdown]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  const registerDropdown = (dropdownId, ref) => {
    dropdownRefs.current[dropdownId] = ref;
  };

  return {
    activeDropdown,
    handleDropdownToggle,
    registerDropdown
  };
};
