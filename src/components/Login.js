import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Formtop from "./Formtop";
import Button from "./Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState('ture');
  const [passwordValidity, setPasswordValidity] = useState('ture');

  function emailField(event) {
    setEmail(event.target.value);
  }

  function passwordField(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
  }

  function handleValidity(){
    setValidEmail(email.includes("@") && email.includes("."))
  }

  function passwordValidation(){
    setPasswordValidity(password.length >= 9);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div>
        <Formtop name={"fazer cadastro"}></Formtop>

        {/* form  */}
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
          >
            <div>
              <label
                className="block text-sm font-medium leading-5 mb-1 text-gray-700"
                htmlFor="email"
              >
                E-mail
              </label>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={emailField}
                  onBlur={handleValidity}
                  className={
                    !validEmail
                      ? "form-input block py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:shadow-oline-blue focus:border-blue-300 border-red-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                      : "form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-oline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                  }
                />
              </div>

              {!validEmail && (
                <div className="text-xs text-red-500 pt-1">Esse campo é obrigatório</div>
              )}
            </div>

            {/* password field  */}
            <div className="mt-6">
              <label
                className="block text-sm font-medium leading-5 mb-1 text-gray-700"
                htmlFor="password"
              >
                Senha
              </label>
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={passwordField}
                  onBlur={passwordValidation}
                  className={
                    !passwordValidity
                      ? "form-input block py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:shadow-oline-blue focus:border-blue-300 border-red-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                      : "form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-oline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                  }
                />
              </div>

              {!passwordValidity && (
                <div className="text-xs text-red-500 pt-1">Esse campo é obrigatório</div>
              )}
            </div>

            <div className="mt-2 flex items-center justify-end">
              <div className="text-sm leading-5">
                <Link
                  to="/"
                  className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  Esqueceu a senha?
                </Link>
              </div>
            </div>

            <div className="mt-6">
              <Button>Entrar</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
