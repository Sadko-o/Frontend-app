import axios from 'axios'
import React, {useState, useEffect} from 'react'
// import Deleted from './Deleted';
import Edit from './Edit';
import Tables from './Tables'
const Country = () => {
    const baseURL = "http://localhost:8000/country";
    const [row, setRow] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const getAllDiseaseType = async () => {
        const response = await axios.get(baseURL);
        setRow(response.data);
    }
    
    useEffect(() => {
        getAllDiseaseType();
    }, []);

    // const deleteDiseaseType = async (id) => {
    //     await axios.delete(`${baseURL}/${id}`).then{
    //         // <Deleted data ={true}/>
    //     };
    //     getAllDiseaseType();
    // }

    const handleEdit = (id) => {
        
    }
    const handleDelete = (id) => {
        // deleteDiseaseType(id);
    }

    if (!row) return null;

    return (
        <>
        <Tables/>
        <div className="overflow-x-auto my-0 py-0 ">
                <div className="min-w-screen min-h-screen  flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                    <div className="w-full lg:w-5/6">
                        <div className="bg-white shadow-md rounded my-6">
                        
                            <table className="min-w-max w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-3 text-left">Name</th>
                                        <th className="py-3 px-3 text-left">Population</th>
                                        <th className="py-3 px-3 text-left">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light">
                                    
                                        {row.map(row =>
                                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                <td className="py-3 px-3 text-left whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <span className="font-medium"
                                                        key={row.id}>{row.cname}</span>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-3 text-left">
                                                    <div className="flex items-center">
                                                        <span
                                                        key={row.id}>{row.population}</span>
                                                    </div>
                                                </td>

                                            <td className="py-3 px-3 text-center">
                                                <div className="flex item-center justify-center">
                                                
                                                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={()=> setShowModal(true)} data-hs-overlay="#hs-vertically-centered-modal" key={row.id}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                        </svg>
                                                    </div>
                                                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={handleDelete()} key={row.id}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


            {   showModal? (
                    <div x-show="modalOpen" x-transition class="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-[#e5e7eb] bg-opacity-90 px-4 py-5">
                        <div class="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
                            <h3 class="text-dark pb-2 text-xl font-bold sm:text-2xl">Fill</h3>
                            {/* <span class="bg-primary mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span> */}
                            <div class=" relative ">
                            <label for="required-email " class="text-gray-700  top-0 left-0 flex">
                                Country Name
                                <span class="text-red-500 required-dot">
                                    *
                                </span>
                            </label>
                                <input type="text" id="rounded-email" class="my-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Cname"/>
                            </div>
                            <div class=" relative ">
                            <label for="required-email" class="text-gray-700 left-0 top-0 flex">
                                Population
                                <span class="text-red-500 required-dot">
                                    *
                                </span>
                            </label>
                                <input type="text" id="rounded-email" class="my-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Population"/>
                            </div>


                            <div class="-mx-3 flex flex-wrap my-2">
                                    <div class="w-1/2 px-3">
                                        <button onClick={()=> setShowModal(false)} class="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white">
                                            Cancel
                                        </button>
                                    </div>
                                    <div class="w-1/2 px-3">
                                        <button onClick={()=> setShowModal(false)} class="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-green-600 hover:bg-green-600 hover:text-white">
                                           Update
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>): null}
            </>
    )
}

export default Country