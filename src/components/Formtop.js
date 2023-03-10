import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function Formtop({ name }) {
  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-12 w-auto" src={logo} alt="logo" />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Entrar na sua conta
        </h2>
        <p className="mt-2 text-center text-base leading-5 text-gray-600">
          Ou
          <Link
            to="/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150 pl-2 cursor-pointer"
          >
            {name}
          </Link>
        </p>
      </div>
    </>
  );
}

export default Formtop;
