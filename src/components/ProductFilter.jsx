import { useEffect, useState, useRef } from "react";
import { fetchAllCategories } from "../api";

function ProductFilter({
  selectedCategory,
  onSetSelectedCategory,
  getProductsByCategory,
}) {
  const [categories, setCategories] = useState([]);
  const [isCatagoryFocus, setIsCategoryFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const getCategories = async () => {
      const result = await fetchAllCategories();
      //   console.log(result);
      setCategories(result);
    };
    getCategories();
  }, []);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Close the dropdown if clicked outside of it
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCategoryFocus(false);
        setInputValue("");
      }
    };

    // Add event listener to handle clicks outside of the dropdown
    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  const renderCategories = (query) => {
    setInputValue(query);
    const results = categories.filter((item) => item.includes(query));
    const uniqValues = [...new Set(results)];
    setList(uniqValues);
    onSetSelectedCategory();
  };

  // console.log(list);
  const handleSelectCategory = (item) => {
    console.log(item);
    setInputValue(item);
    console.log(inputValue);
    getProductsByCategory(item);
    setIsCategoryFocus(false);
  };
  const handleInputFocus = () => {
    setIsCategoryFocus(true);
    setList(categories);
  };

  return (
    <div className=" w-[500px] relative">
      <input
        placeholder="Filter By Category"
        name="categoryfilter"
        className="bg-transparent text-lg
        text-white p-3 shadow-lg
        border-gray-500 border-2
        italic 
        w-full outline-none"
        onFocus={handleInputFocus}
        value={inputValue}
        onChange={(e) => renderCategories(e.target.value)}
      />
      {isCatagoryFocus && (
        <ul
          ref={dropdownRef}
          className={`absolute overflow-y-scroll bg-slate-600 min-h-[200px] h-5 z-10 w-full `}
        >
          {list.length > 0 ? (
            list.map((item, index) => (
              <li
                key={index}
                className="capitalize border-b-2 bg-slate-600 border-gray-400 text-white p-3 italic"
                onClick={() => handleSelectCategory(item)}
              >
                {item}
              </li>
            ))
          ) : (
            <li className="text-center bg-slate-600 text-gray-400">
              No Categories Found!
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export default ProductFilter;
