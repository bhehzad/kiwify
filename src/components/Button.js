import React from "react";

function Button({ children }) {
  return (
    <>
      <span className="block w-full rounded-md shadow-sm">
        <button
          className="button w-full flex justify-center py-2 px-4 border border-transparent text-sm font-normal rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          type="submit"
        >
          {children}
        </button>
      </span>
    </>
  );
}

export default Button;
