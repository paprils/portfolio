import { useState } from "react";

const useNavigation = () => {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => {
    setClick(false);
  };

  const menu = [
    {
      title: "Work",
      link: "/#work",
    },
    {
      title: "Illustrations & hobby",
      link: "/#illustrations",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
  ];

  return { click, setClick, closeMobileMenu, menu };
};

export default useNavigation;
