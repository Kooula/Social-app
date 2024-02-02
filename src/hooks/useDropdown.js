import { useState } from "react";

export default function useDropdown() {
  const [showDropdown, setShowDropdown] = useState(false);

  const openDropdown = () => {
    setShowDropdown(true);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return {
    openDropdown,
    showDropdown,
    closeDropdown,
    setShowDropdown,
  };
}
