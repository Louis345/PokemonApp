import React, { useState, useEffect } from "react";
import Tabs from "../../../components/Tabs/Tabs";
import Search from "../../../components/Search/Search";
import Dropdown from "../../../components/Dropdowns/Dropdowns";
import { useQuery } from "@apollo/client";
import { GET_ALL_POKEMON_TYPES } from "../../../GraphQL/Queries";
import styles from "./Header.module.scss";
import { MdOutlineSubject } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";

interface HeaderProps {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onTab: (onSelect: number) => void;
  handleViewType: (isListView: boolean) => void;
  onSelect: (item: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  onSearch,
  onTab,
  handleViewType,
  onSelect,
}) => {
  const { data } = useQuery(GET_ALL_POKEMON_TYPES);
  const [isListView, setIsListView] = useState(false);

  useEffect(() => {
    handleViewType(isListView);
  }, [isListView]);

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <Tabs onTab={onTab} />
        <div className={styles.bottomContainer}>
          <Search onSearch={onSearch} />
          <Dropdown items={data?.pokemonTypes} onSelect={(e) => onSelect(e)} />
          <MdOutlineSubject
            className={styles.icon}
            size={30}
            onClick={() => {
              setIsListView(false);
            }}
          />
          <AiFillAppstore
            className={styles.icon}
            size={30}
            onClick={() => {
              setIsListView(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
