import React, { useState } from "react";
import Person from "./Person";

const Persons = ({ persons, setPersons }) => {
  //nota hook de usestate
  const [editingId, seteditingId] = useState(null);
  const [editedPerson, seteditedPerson] = useState({
    name: "",
    role: "",
    img: "",
  });
  const [isEditing, setisEditing] = useState(false);
  const [personToDelete, setPersonToDelete] = useState(null);
  const [showModal, setShowModal] = useState(false);

  //nota funciones
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

  //? Metodo para eliminar a una persona del array
  const handleDelete = (id) => {
    setPersonToDelete(id);
    setShowModal(true);
  };

  //? modal confirmar eliminar
  const confirmDelete = (e) => {
    setPersons(persons.filter((person) => person.id !== personToDelete));
    setPersonToDelete(null);
    setShowModal(false);
  };

  //? modal cancelar
  const cancelDelete = (e) => {
    setPersonToDelete(null);
    setShowModal(false);
  };

  //? crear un nuevo perfil
  const handleCreate = (e) => {
    setPersons([...persons, { id: persons.length + 1, ...editedPerson }]);
    seteditedPerson({ name: "", role: "", img: "" });
  };
  return (
    <>
      <h1 className="text-3xl text-center font-bold my-6">Personas</h1>
      <div className="flex gap-4 justify-center flex-col md:flex-row items-center">
        {persons.map((person) => (
          <div key={person.id}>
            <Person
              id={person.id}
              name={person.name}
              role={person.role}
              img={person.img}
              edit={() => handleEdit(person.id)}
              eliminar={handleDelete}
              modal={setShowModal}
            />
          </div>
        ))}
      </div>
      <div className="mt-10">
        <h2 className="text-center text-2xl font-bold">
          {isEditing ? "Modificar datos" : "Datos de la Nueva Persona"}
        </h2>
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
            onClick={isEditing ? handleSave : handleCreate}
          >
            {isEditing ? "Guardar" : "Crear"}
          </button>
        </div>
      </div>

      {showModal ? (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">Modal de eliminacion</h3>
              </div>
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                  Desea eliminar a{" "}
                  {persons.find((person) => person.id === personToDelete)?.name}
                </p>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={confirmDelete}
                >
                  Eliminar
                </button>
                <button
                  className="text-black-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={cancelDelete}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Persons;
