import React from "react";
import styles from "./Dropdown.module.css";
interface DropdownProps {
  items: string[];
  onSelect: (item: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ items, onSelect }) => {
  return (
    <select className={styles.item} onChange={(e) => onSelect(e.target.value)}>
      {items &&
        items.map((item, index) => {
          if (index === 0) {
            return (
              <option key={index} value={""} selected>
                {"Type"}
              </option>
            );
          }
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
    </select>
  );
};

export default Dropdown;
