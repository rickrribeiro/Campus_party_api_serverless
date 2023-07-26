
import { useState, useEffect } from "react";
import "./App.css";
import DataService from "./services/data-service";
import TodoList from "./components/TodoList";


const App = () => {
  // if (!localStorage.getItem("auth")) return <LoginForm />;
  const dataService = new DataService();
  const [items, setItems] = useState([]);
 
  useEffect(() => {
    dataService.getTodoItems().then((response) => {
      setItems(response);
    });

  }, []);

  const props = {
    items: items,
  };
  // const location = ;
  return (
    <div>
      {/* <h1>{location}</h1> */}
      <TodoList props={props} />
    </div>
  );
};

export default App;
