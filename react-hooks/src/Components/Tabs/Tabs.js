import React, { useState } from "react";
import styles from "./Tabs.module.css";

const Tabs = (props) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTab = props.children[activeTabIndex];

  return (
    <div>
      <div className={styles.tabs}>
        {props.children.map((tab, i) => (
          <button
            className={styles.tab_btn}
            onClick={() => {
              setActiveTabIndex(i);
            }}
            key={i}
          >
            {tab.props.title}
          </button>
        ))}
      </div>
      <div className={styles.tab_indicator_container}>
        <div
          className={styles.tab_indicator}
          style={{
            width: 100 / props.children.length + "%",
            transform: `translateX(${activeTabIndex * 100}%)`,
          }}
        />
      </div>
      <div className={styles.tab_content}>{activeTab.props.children}</div>
    </div>
  );
};

export default Tabs;
