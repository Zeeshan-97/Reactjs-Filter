import React, { useState } from "react";

const SearchBar = ({result , resultlist}) => {
    // console.log(resultlist);
  const [inputValue, setInputValue] = useState("");
  
  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value && user && user.name && user.name.toLowerCase().includes(value)
          );
        });
        result(results);
      });
  };
  const Handlevalue = (value) => {
    setInputValue(value)
    // const selectValue = [...resultlist,value];
    // setInputValue((values)=>{
    //     inputValue == values ? value : selectValue;
    // });
    fetchData(value);
  };
  return (
    <div className="input-container">
      <i className="fa fa-search"></i>
      <input
        type="search"
        placeholder="Type your search....."
        onChange={(e)=>Handlevalue(e.target.value)}
        value={inputValue}
      ></input>
    </div>
  );
};

export default SearchBar;
