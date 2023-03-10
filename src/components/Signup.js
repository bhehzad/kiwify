import React from "react";
import { useState } from "react";
import Formtop from "./Formtop";
import Button from "./Button";

function Signup() {
  const [email, setEmail] = useState("");

  const [confirmation, setConfirmation] = useState("");
  const [password, setPassword] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);

  const [validEmail, setValidEmail] = useState("ture");
  const [confirmEmail, setConfirmEmail] = useState("ture");
  const [passwordValidity, setPasswordValidity] = useState("ture");
  const [checkboxvalid, setCheckboxValid] = useState("ture");

  function emailField(event) {
    setEmail(event.target.value);
  }

  function handleValidity() {
    setValidEmail(email.includes("@") && email.includes("."));
  }

  function handleConfirmValidity() {
    setConfirmEmail(email === confirmation);
  }

  function passwordValidation() {
    setPasswordValidity(password.length >= 9);
  }

  function handleCheckboxValidty(event) {
    setCheckboxValid(event.target.checked);
  }

  function confirmMail(event) {
    setConfirmation(event.target.value);
  }

  function passwordField(event) {
    setPassword(event.target.value);
  }

  function handleCheckboxChange(event) {
    setCheckboxValue(event.target.checked);
  }

  function handleSubmit(event) {
    console.log("handle submit");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div>
        <Formtop name={"entrar na sua conta existente"}></Formtop>

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
                <div className="text-xs text-red-500 pt-1">
                  Esse campo é obrigatório
                </div>
              )}
            </div>

            <div className="mt-6">
              <label
                className="block text-sm font-medium leading-5 mb-1 text-gray-700"
                htmlFor="email"
              >
                Repetir e-mail
              </label>
              <div>
                <input
                  type="eamil"
                  value={confirmation}
                  onChange={confirmMail}
                  onBlur={handleConfirmValidity}
                  className={
                    !confirmEmail
                      ? "form-input block py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:shadow-oline-blue focus:border-blue-300 border-red-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                      : "form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-oline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                  }
                />
              </div>

              {!confirmEmail && (
                <div className="text-xs text-red-500 pt-1">
                  Os dois e-mails devem ser iguais.
                  <br />
                  Esse campo é obrigatório
                </div>
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
                <div className="text-xs text-red-500 pt-1">
                  Esse campo é obrigatório
                </div>
              )}
            </div>

            <div className="mt-6">
              <label className="relative flex items-start mt-2">
                <div
                  className={
                    !checkboxvalid
                      ? "error checkbox flex items-center h-5"
                      : "checkbox flex items-center h-5"
                  }
                >
                  <input
                    type="checkbox"
                    checked={checkboxValue}
                    onChange={handleCheckboxChange}
                    onBlur={handleCheckboxValidty}
                    className="form-checkbox border-grey-300 h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer checked:bg-indigo-600"
                  />
                  <label></label>
                </div>

                <div className="ml-2 text-sm leading-5">
                  <span font-medium text-gray-700>
                    Eu li e aceito os
                    <a href="/" className="underline">
                      {" "}
                      termos de uso
                    </a>
                    ,
                    <a href="/" className="underline">
                      {" "}
                      termos de licença de uso de software
                    </a>
                    , política de conteúdo da Kiwify
                  </span>
                  {!checkboxvalid && (
                    <div className="text-xs text-red-500 pt-1">
                      Esse campo é obrigatório
                    </div>
                  )}
                </div>
              </label>
            </div>

            <div className="mt-6">
              <Button>Criar conta</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
