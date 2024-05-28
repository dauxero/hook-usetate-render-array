import React from "react";

const Person = ({ name, id, role, img, edit }) => {
  return (
    <>
      <div className="space-y-6">
        <img src={img} alt="" className="rounded-lg " />
        <h2 className="font-bold text-xl ">
          Nombre: <span className="text-red-400 font-medium">{name}</span>
        </h2>
        <p className="font-bold text-xl">
          Rol: <span className="text-purple-400 font-medium">{role}</span>
        </p>
      </div>
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          className="bg-green-400 px-4 py-2 rounded-lg hover:bg-green-700 hover:cursor-pointer hover:font-bold"
          onClick={edit}
        >
          Editar
        </button>
        <button className="bg-red-400 px-4 py-2 rounded-lg hover:bg-red-700 hover:cursor-pointer hover:font-bold">
          Eliminar
        </button>
      </div>
    </>
  );
};

export default Person;
