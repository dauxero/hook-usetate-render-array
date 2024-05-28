import React, { useState } from "react";
import Person from "./Person";

const Persons = ({ persons, setPersons }) => {
  const [editingId, seteditingId] = useState(null);
  const [editedPerson, seteditedPerson] = useState({
    name: "",
    role: "",
    img: "",
  });
  const [isEditing, setisEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    seteditedPerson((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEdit = (id) => {
    //? Establece el id de la persona que queremos editar
    seteditingId(id);

    //?activamos el estado de edicion
    setisEditing(true);

    //?comprobamos el id
    const personToEdit = persons.find((person) => person.id === id);

    //? asignamos un nuevo objeto
    seteditedPerson({ ...personToEdit });
  };

  const handleSave = (e) => {
    //? actualizar
    setPersons(
      persons.map((person) => (person.id === editingId ? editedPerson : person))
    );
    //? resetea el id a null, de la persona que se edito
    seteditingId(null);

    //? resetear los datos de la persona editada
    seteditedPerson({ name: "", role: "", img: "" });

    //? desactiva el estado del state
    seteditingId(false);
  };
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
              edit={() => handleEdit(person.id)}
            />
          </div>
        ))}
      </div>
      <div className="mt-10">
        <h2 className="text-center text-2xl font-bold">Modificar datos</h2>
        <div className="flex flex-col space-y-4 w-1/2 mx-auto my-6">
          <input
            type="text"
            name="name"
            value={editedPerson.name}
            onChange={handleChange}
            placeholder="Nombre"
            className="shadow-lg rounded-lg border-none py-2 placeholder:text-center placeholder:font-bold"
          />
          <input
            type="text"
            name="role"
            value={editedPerson.role}
            onChange={handleChange}
            placeholder="Tu rol"
            className="shadow-lg rounded-lg border-none py-2 placeholder:text-center placeholder:font-bold"
          />
          <input
            type="text"
            name="img"
            value={editedPerson.img}
            onChange={handleChange}
            placeholder="Url de la imagen"
            className="shadow-lg rounded-lg border-none py-2 placeholder:text-center placeholder:font-bold"
          />
          <button
            className="bg-green-400 w-1/4 rounded-lg py-2 mx-auto hover:bg-green-700 hover:font-bold"
            onClick={handleSave}
          >
            Guardar
          </button>
        </div>
      </div>
    </>
  );
};

export default Persons;
