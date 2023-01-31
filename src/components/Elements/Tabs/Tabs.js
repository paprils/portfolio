import React from "react";
import css from "./Tabs.module.scss";
import Header from "@/components/Typography/Header";
import PropTypes from "prop-types";

const Tabs = (props) => {
  const { tabs, activeTab, setActiveTab } = props;

  return (
    <div className={css.tabs}>
      {tabs?.map((tab) => {
        return (
          <label
            className={css.tab}
            onClick={() => setActiveTab(tab)}
            key={tab}
            data-active={tab === activeTab}
            style={{ width: 100 / tabs.length + "%" }}
          >
            <input type="radio" name="radio" />
            <Header type={"h3"} style={"h3"} align={"center"}>
              {tab}
            </Header>
          </label>
        );
      })}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array,
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func,
};

export default Tabs;
