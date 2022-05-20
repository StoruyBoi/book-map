import { Link, Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from "react";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}




export default function Bookshare() {



  
  return (
    <>
      <div class="flex flex-row  justify-center py-12 ">
        <Link
          to="/Bookshare/BookshareItems/HigherSchol"
          className="text-base no-underline font-medium text-gray-500 hover:text-gray-900 p-2"
        >
          11-12 CLASS
        </Link>
        <Link
          to="/Bookshare/BookshareItems/College"
          className="text-base no-underline font-medium text-gray-500 hover:text-gray-900 p-2"
        >
          COLLEGE
        </Link>
        <Link
          to="/Bookshare/BookshareItems/UPSE"
          className="text-base no-underline font-medium text-gray-500 hover:text-gray-900 p-2"
        >
          UPSE
        </Link>
        <Link
          to="/Bookshare/BookshareItems/Compititve"
          className="text-base no-underline font-medium text-gray-500 hover:text-gray-900 p-2"
        >
          COMPITITVE
        </Link>
        <Link
          to="/Bookshare/BookshareItems/School"
          className="text-base no-underline font-medium text-gray-500 hover:text-gray-900 p-2"
        >
          1-10 CLASS
        </Link>
      </div>
      <div className="flex items-center justify-center"><hr className="w-6/12" /></div>

      <div>
        <br />
        <br />
        <br />
        <Outlet />
      </div>
    </>
  );
}
