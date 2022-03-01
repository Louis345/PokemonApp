import React from "react";
import styles from "./Tabs.module.css";
import classnames from "classnames";

interface TabsProps {
  onTab: (onSelect: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ onTab }) => {
  const [activeTab, setActiveTab] = React.useState(1);
  return (
    <div className={styles.container}>
      <div
        className={classnames(styles.tab, {
          [styles.active]: activeTab === 1,
        })}
        onClick={() => {
          setActiveTab(1);
          onTab(1);
        }}
      >
        <div className={styles.tabTitle}>
          <span>All</span>
        </div>
      </div>
      <div
        className={classnames(styles.tab, {
          [styles.active]: activeTab === 2,
        })}
        onClick={() => {
          setActiveTab(2);
          onTab(2);
        }}
      >
        <div className={styles.tabTitle}>
          <span>Favorites</span>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
