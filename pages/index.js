import Head from "next/head";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { FeatureBannier } from "../components/Bannier";
import { MesFormation } from "../components/MesFormations";

import { Footer } from "../components/Footer";

const navigation = [
  { name: "À propos", href: "#" },
  { name: "Mes travaux", href: "#" },
  { name: "Mes formations", href: "#" },
];

export default function Home() {
  return (
    <div className="font-poppins">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;600;700;800&display=swap" rel="stylesheet"/>
      </Head>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Popover>
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="#">
                        <span className="sr-only">Workflow</span>
                        <svg
                          width="48"
                          height="45"
                          viewBox="0 0 48 45"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M24 0C37.2555 0 48 10.073 48 22.5C48 34.927 37.2555 45 24 45C10.7445 45 0 34.927 0 22.5C0 10.073 10.7445 0 24 0ZM9 16.6078V29.7506H11.337V18.4373L20.4885 24.8948V29.7506H22.8255V24.4406C22.8253 24.2425 22.776 24.0472 22.6816 23.87C22.5871 23.6928 22.4499 23.5387 22.281 23.4197L11.1825 15.5883C10.9802 15.4458 10.7395 15.3589 10.4874 15.3373C10.2354 15.3157 9.98193 15.3603 9.7554 15.4662C9.52887 15.572 9.33823 15.7348 9.20482 15.9364C9.07141 16.1381 9.00049 16.3705 9 16.6078V16.6078ZM38.985 16.6078C38.9848 16.3704 38.9141 16.1378 38.7808 15.9359C38.6475 15.7341 38.4568 15.5711 38.2303 15.4651C38.0037 15.3591 37.7501 15.3143 37.4979 15.3358C37.2458 15.3574 37.0049 15.4443 36.8025 15.5869L25.7025 23.4183C25.5338 23.5374 25.397 23.6916 25.3028 23.8688C25.2085 24.046 25.1595 24.2412 25.1595 24.4392V29.7506H27.4965V24.8948L36.6465 18.4373V29.7506H38.985V16.6078Z"
                            fill="black"
                          />
                        </svg>
                      </a>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="font-medium text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                    <a
                      href="#"
                      className="font-medium text-gray-600 hover:text-gray-500"
                    >
                      Mes contacte
                    </a>
                  </div>
                </nav>
              </div>

              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <svg
                          width="48"
                          height="45"
                          viewBox="0 0 48 45"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M24 0C37.2555 0 48 10.073 48 22.5C48 34.927 37.2555 45 24 45C10.7445 45 0 34.927 0 22.5C0 10.073 10.7445 0 24 0ZM9 16.6078V29.7506H11.337V18.4373L20.4885 24.8948V29.7506H22.8255V24.4406C22.8253 24.2425 22.776 24.0472 22.6816 23.87C22.5871 23.6928 22.4499 23.5387 22.281 23.4197L11.1825 15.5883C10.9802 15.4458 10.7395 15.3589 10.4874 15.3373C10.2354 15.3157 9.98193 15.3603 9.7554 15.4662C9.52887 15.572 9.33823 15.7348 9.20482 15.9364C9.07141 16.1381 9.00049 16.3705 9 16.6078V16.6078ZM38.985 16.6078C38.9848 16.3704 38.9141 16.1378 38.7808 15.9359C38.6475 15.7341 38.4568 15.5711 38.2303 15.4651C38.0037 15.3591 37.7501 15.3143 37.4979 15.3358C37.2458 15.3574 37.0049 15.4443 36.8025 15.5869L25.7025 23.4183C25.5338 23.5374 25.397 23.6916 25.3028 23.8688C25.2085 24.046 25.1595 24.2412 25.1595 24.4392V29.7506H27.4965V24.8948L36.6465 18.4373V29.7506H38.985V16.6078Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close main menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                    >
                      Log in
                    </a>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Career path git</span>{" "}
                  <span className="block text-gray-600 xl:inline">
                    online business
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Je m'intéresse au monde de l’informatique depuis que je suis
                  petit. J’aime cet univers et je me vois travailler plus tard
                  dans ce domaine, car il est en continuelle évolution
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="/home/kevin/Bureau/Portofolio/assets/Mulinda Kevin C.V.png"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg md:px-10"
                    >
                      Mon C.V
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
          />
        </div>
      </div>
      <FeatureBannier />
      <MesFormation/>
      
      <Footer />
    </div>
  );
}
