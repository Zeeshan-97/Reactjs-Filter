import { useState } from "react";
import "./App.css";
// import SearchBar from "./components/SearchBar";
// import SearchResultList from "./components/SearchResultList";

// function App() {
//   const [results , setResults] = useState([]);
//   return (
//     <div className="App">
//       <div className="container">
//         <SearchBar result={setResults} resultlist={results}/>
//         <SearchResultList resultlist={results}/>
//       </div>
//     </div>
//   );
// }

// export default App;
import { useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
      });
  }, []);

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(filterText.toLowerCase());
    // return user && user.name.toLowerCase().includes(user);
  });

  const handleClick = (user) => {
    setSelectedUser(user);
    setFilterText(user.name.toLowerCase());
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <input
            type="text"
            placeholder="Enter filter text..."
            onChange={(e) => setFilterText(e.target.value)}
            value={filterText}
          />
          <ul>
            {filteredUsers.map((user) => (
              <li
                key={user.id}
                onClick={() => handleClick(user)}
                selected={user === selectedUser}
              >
                {user.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default App;
