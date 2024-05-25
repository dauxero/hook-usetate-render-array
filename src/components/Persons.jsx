import React, { useState } from "react";
import Person from "./Person";

const Persons = () => {
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
      <h1 className="text-3xl text-center font-bold my-6">Personas</h1>
      <div className="flex gap-4 justify-center flex-col md:flex-row items-center">
        {persons.map((person) => (
          <div key={person.id}>
            <Person
              key={person.id}
              name={person.name}
              role={person.role}
              img={person.img}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Persons;
