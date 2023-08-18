"use client";

import React,{useState} from "react";
import { SearchManufacturer } from "./SearchManufacturer";

export const SearchBar = (): JSX.Element => {
    const [manufacturer, setManuFacturer] = useState("");
    
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  );
};
