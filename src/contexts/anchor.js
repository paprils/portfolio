import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

export const AnchorContext = React.createContext();

export const useAnchorContext = () => useContext(AnchorContext);

export const AnchorProvider = (props) => {
  const { children } = props;
  const [activeAnchor, setActiveAnchor] = useState("hero");
  const value = { activeAnchor, setActiveAnchor };

  return (
    <AnchorContext.Provider value={value}>{children}</AnchorContext.Provider>
  );
};

AnchorProvider.propTypes = {
  children: PropTypes.node,
};
