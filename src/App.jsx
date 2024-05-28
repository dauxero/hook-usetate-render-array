import { useState } from "react";
import Persons from "./components/Persons";
import "./index.css";
function App() {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: "carlos gonzalez",
      role: "Frontend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
    {
      id: 2,
      name: "laura rojas",
      role: "Backend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar3.png",
    },
    {
      id: 3,
      name: "camilo lozano",
      role: "Figma",
      img: "https://bootdey.com/img/Content/avatar/avatar4.png",
    },
  ]);
  return (
    <>
      <Persons persons={persons} setPersons={setPersons} />
    </>
  );
}

export default App;
