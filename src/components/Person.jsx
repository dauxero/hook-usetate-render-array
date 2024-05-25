import React from "react";

const Person = ({ name, id, role, img }) => {
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
    </>
  );
};

export default Person;
