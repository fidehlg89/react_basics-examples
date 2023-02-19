import { useState, useEffect, useMemo, useCallback } from "react";
import Game from "./components/BasicExamples/tic-tac-toe/Game";
import List from "./components/Memorize/List";
import Clock from "./components/BasicExamples/Clock";
import HelloMessage from "./components/BasicExamples/HelloMessage";
import MarkdownEditor from "./components/BasicExamples/MarkdownEditor";

const initialUsers = [
  { id: 1, name: "Luis" },
  { id: 2, name: "Maria" },
];

function App() {
  //Hooks de estados
  const [users, setUsers] = useState(initialUsers);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const handleAdd = () => {
    const newUser = { id: Date.now(), name: text };
    if (text === "") {
      return;
    }
    setUsers([...users, newUser]); //Operador sprech
  };

  const handleSearch = () => {
    console.log("search");
    setSearch(text);
  };

  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        //console.log("Filter Process");

        return user.name
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      }),
    [search, users]
  );

  const handleDelete = useCallback(
    (userId) => {
      setUsers(users.filter((user) => user.id !== userId));
    },
    [users]
  );

  useEffect(() => {
    console.log("App Render");
  });

  const styledContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    cursor: "pointer",
  };

  return (
    <div style={styledContainer}>
      <div>
        <HelloMessage name="Ernesto" />
      </div>

      <div>
        <h2>Tic Tac Toe - Game </h2>
        <Game />
      </div>

      <div>
        <h2>Clock</h2>
        <Clock />
      </div>

      <div>
        <MarkdownEditor />
      </div>

      <div>
        <h2>Filter Text</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleAdd}>Add</button>
        <List users={filteredUsers} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
