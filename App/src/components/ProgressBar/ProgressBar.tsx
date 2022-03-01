import React from "react";
import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  progress: number;
  color: string;
  borderRadius: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ color, progress }) => {
  const Parentdiv = {
    height: 10,
    width: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: 5,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: color,
    borderRadius: 40,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv} />
    </div>
  );
};

export default ProgressBar;
