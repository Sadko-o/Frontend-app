import React from 'react'
// import ProjectTable from './ProjectTable'
// import Navbar from './Navbar'
// import Disease from './Disease'
// import DiseaseType from './DiseaseType'
// import Country from './Country'
// import Discover from './Discover'
// import PublicServant from './PublicServant'
// import Doctor from './Doctors'
// import Specialize from './Specialize'
// import Record from './Record'
// import Users from './Users'
import logo from './assets/logo.svg'


const Tables = () => {
//   const [part, setParts] = React.useState(0);
//   const [active, setActive] = React.useState(0);
//   const textDark = {color:'text-red-500'};
//   const handleClick = () => {
//     setActive(!active);
//     }
  return (
      <div className='fixed max w-screen'>
          <nav class="bg-white dark:bg-gray-800  shadow ">
              <div class="max-w-7xl mx-auto px-8">
                  <div class="flex items-center justify-between h-16">
                      <div class="w-full justify-between flex items-center">
                          <a class="flex-shrink-0" href="/">
                              <img  src={logo} alt="logo" href="/"/>
                          </a>
                          <div class="hidden md:block">
                              <div class="ml-10 flex items-baseline space-x-4">
                                  <a  class=" text-gray-800  hover:text-[#4885ed] dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/diseaseType" >
                                      DiseaseType
                                  </a>{/* text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium */}
                                  <a class="text-gray-800  hover:text-[#4885ed] dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium " href="/country">
                                      Country
                                  </a>
                                  <a class="text-gray-800  hover:text-[#4885ed] dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/disease">
                                      Disease
                                  </a>
                                  <a class="text-gray-800  hover:text-[#4885ed] dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/discover">
                                      Discover
                                  </a>
                                  <a class="text-gray-800  hover:text-[#4885ed] dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/users">
                                      Users
                                  </a>
                                  <a class="text-gray-800  hover:text-[#4885ed] dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/publicServant">
                                      PublicServant
                                  </a>
                                  <a class="text-gray-800  hover:text-[#4885ed] dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/doctors">
                                      Doctor
                                  </a>
                                  <a class="text-gray-800  hover:text-[#4885ed] dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/specialize">
                                      Specialize
                                  </a>
                                  <a class="text-gray-800  hover:text-[#4885ed] dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/record">
                                      Record
                                  </a>
                                  <a class="text-gray-800  hover:text-[#4885ed] dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                      Queries
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div class="block">
                          <div class="ml-4 flex items-center md:ml-6">
                          </div>
                      </div>
                      <div class="-mr-2 flex md:hidden">
                          <button class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                              <svg width="20" height="20" fill="currentColor" class="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                  </path>
                              </svg>
                          </button>
                      </div>
                  </div>
              </div>
              <div class="md:hidden">
                  <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                      <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/diseaseType">
                          DiseaseType
                      </a>
                      <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/country">
                          Country
                      </a>
                      <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/disease">
                          Disease
                      </a>
                      <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/discover">
                          Discover
                      </a>
                      <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/users">
                          Users
                      </a>
                      <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/publicServant">
                          PublicServant
                      </a>
                      <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/doctors">
                          Doctor
                      </a>
                      <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/specialize">
                          Specialize
                      </a>
                      <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/record">
                          Record
                      </a>
                  </div>
              </div>
          </nav>
      </div>
    )

    // {part===0 && <DiseaseType/>} 
    // {part===1 && <Country/>}
    // {part===2 && <Disease/>}
    // {part===3 && <Discover/>}
    // {part===4 && <Users/>}
    // {part===5 && <PublicServant/>}
    // {part===6 && <Doctor/>}
    // {part===7 && <Specialize/>}
    // {part===8 && <Record/>}
    
  } 


export default Tables