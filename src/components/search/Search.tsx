import { SearchProps } from "../../types/types";
import { FC } from "react";
const Search: FC<SearchProps> = ({ onChangeFunc, placeHolder }) => {
  return (
    <input
      className="search__input"
      type="text"
      placeholder={placeHolder}
      onChange={onChangeFunc}
    ></input>
  );
};

export default Search;
