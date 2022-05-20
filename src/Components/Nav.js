/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { NavDropdown, Navbar } from "react-bootstrap";
import { auth } from "../Firebase/fire";
import { signOut } from "firebase/auth";
import Avatar from "@mui/material/Avatar";
import { useAuthState } from "react-firebase-hooks/auth";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import React from "react";
import Banner from "../Components/Banner";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../Components/userContext";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Article", href: "/ArticlesHome", current: false },
  { name: "Events", href: "/Events", current: false },
  { name: "Community", href: "/Events", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Nav = () => {
  const [user] = useAuthState(auth);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://firebasestorage.googleapis.com/v0/b/books-f8d66.appspot.com/o/Content%2FUntitled-2FDFD.png?alt=media&token=c8129f36-9a0d-44a3-8977-c21547942dce"
                    alt="bOOKS"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://firebasestorage.googleapis.com/v0/b/books-f8d66.appspot.com/o/Content%2FUntitled-2FDFD.png?alt=media&token=c8129f36-9a0d-44a3-8977-c21547942dce"
                    alt="bOOKS"
                  />
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm text-decoration-none font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {!user ? (
                  <div className=" md:flex items-center justify-end md:flex-1 lg:w-0">
                    <Link
                      to="/Login"
                      className="whitespace-nowrap no-underline text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      Sign in
                    </Link>
                    <Link
                      to="/Register"
                      className="ml-8 no-underline whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Sign up
                    </Link>
                  </div>
                ) : (
                  <div className=" flex">
        <Link to="/">
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
              
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://firebasestorage.googleapis.com/v0/b/books-f8d66.appspot.com/o/Content%2Favatar_circle_grey_512dp.png?alt=media&token=2fb175a0-b26f-400a-9ed2-d38c35c9b323"
                    alt=""
                  />
                </button>
                </Link>
                    <NavDropdown className="text-white" title="Profile ">
                      <NavDropdown.Item>
                        {" "}
                        <Link
                          className="text-indigo-500 text-decoration-none "
                          to="#"
                        >
                          <span> {user.displayName || user.email}</span>
                        </Link>
                      </NavDropdown.Item>

                      <NavDropdown.Divider />
                      <p className="text-success px-3">Online</p>
                      <NavDropdown.Divider />
                      <NavDropdown.Item>
                        <Link
                          className="text-decoration-none  text-danger "
                          onClick={() => {
                            signOut(auth);
                          }}
                          to="#"
                        >
                          Sign Out
                        </Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                )}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 text-decoration-none hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Nav;
