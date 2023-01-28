import { useContext, useEffect } from "react";
import getAnchor from "@/helpers/getAnchor";
import { AnchorContext } from "@/contexts/anchor";

const usePageSection = (sectionRef, props) => {
  const { anchor } = props;
  const { activeAnchor, setActiveAnchor } = useContext(AnchorContext);

  const handleScroll = () => {
    if (sectionRef) {
      const element = sectionRef?.current?.getBoundingClientRect();

      if (sectionRef?.current?.offsetTop <= 200 && setActiveAnchor) {
        setActiveAnchor(getAnchor(anchor));
      }

      if (
        element?.y - 180 <= 0 &&
        element?.y - 180 > element?.height * -1 &&
        setActiveAnchor
      ) {
        if (activeAnchor !== getAnchor(anchor)) {
          setActiveAnchor(getAnchor(anchor));
        }
      }
    }
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
};

export default usePageSection;
