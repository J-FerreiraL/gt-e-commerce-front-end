import { useState } from "react";
import { useProductsContext } from "../../contexts/ProductContext";
import { LuSearch } from "react-icons/lu";

const Searchbar = () => {
  const { setSearch } = useProductsContext();
  const [localQuery, setLocalQuery] = useState('');

  const handleSearchChange = (e) => {
    setLocalQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(localQuery);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit(e);
    }
  };

  return(
    <form onSubmit={handleSearchSubmit} className="relative w-full md:flex-1">
      <input
        type="text"
        placeholder="Pesquisar produto..."
        value={localQuery}
        onChange={handleSearchChange}
        onKeyDown={handleKeyPress}
        className="font-normal text-[1rem] p-2 pl-5 w-full h-[60px] outline-none rounded-[8px] text-darkGray2 bg-lightGray3 md:flex-1"
      />
      <button
        type="submit"
        className="absolute right-1 top-1/2 -translate-y-1/2 p-2"
      >
        <LuSearch size={20} className="text-darkGray3"/>
      </button>
    </form>
  );
}

export default Searchbar;