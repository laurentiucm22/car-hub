"use client";

import { FC, useState } from "react";
import { SearchManufacturer } from ".";

const SearchBar: FC = () => {
  const [manufacturer, setManufacturer] = useState<string>("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
