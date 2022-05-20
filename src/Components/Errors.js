import React from "react";
import { Link } from "react-router-dom";
export default function Errors(props) {
  return (
    <>
      <div className="Base">
        <div className="contianer flex justify-center items-center flex-col my-64">
          <h1 className="text-8xl font-semibold"> 404</h1>

          <div className="contianer1   my-10">
            <p className="font-normal text-3xl text-center  text-purple-500">
              Sorry , the page you are looking for <br /> could not be found.
            </p>
          </div>

          <Link to="/">
            {" "}
            <button
              type="submit"
              className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              GO HOME{" "}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
