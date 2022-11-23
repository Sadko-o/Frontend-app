import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Tables from './Tables'

const Country = () => {
    const baseURL = "https://backend-app-production-2791.up.railway.app/country";
    const [row, setRow] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [open, setOpen] = useState(false);
    const [showCreate, setShowCreate] = useState(false);

    //CREATE
    const [diseaseTypeId, setDiseaseTypeId] = useState('');
    const [diseaseTypeDescription, setDiseaseTypeDescription] = useState('');
    const createDiseaseType = async () => {
        console.log(diseaseTypeId);
        console.log(diseaseTypeDescription);
        await axios.post(`${baseURL}`,  {diseaseTypeId: diseaseTypeId, diseaseTypeDescription:diseaseTypeDescription}).then((response) => {console.log(response)});
        getAllDiseaseType();
    }

    const handleCreate = () => {
        createDiseaseType();
    }
    //READ
    const getAllDiseaseType = async () => {
        const response = await axios.get(baseURL);
        setRow(response.data);
    }
    useEffect(() => {
        getAllDiseaseType();
    }, []);

    //DELETE
    const deleteDiseaseType = async (diseaseTypeId) => {
        await axios.delete(`${baseURL}`, {data: {diseaseTypeId: diseaseTypeId}});
        getAllDiseaseType();
    }
    const handleDelete = (e, id) => {
        e.preventDefault();
        setOpen(true);
        deleteDiseaseType(id);
    }

    //UPDATE
    const handleEdit = async (e, id, diseaseTypeDescription) => {
            console.log(diseaseTypeId);
            console.log(diseaseTypeDescription);
            await axios.put(`${baseURL}`,  {diseaseTypeId: id, diseaseTypeDescription:diseaseTypeDescription}).then((response) => {console.log(response)});
            getAllDiseaseType();
        
    }

    return (
        <>
        <Tables/>
        <div className="overflow-x-auto">
                <div className="min-w-screen min-h-screen  flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                    <div className="w-full lg:w-5/6">
                        <div className="bg-white shadow-md rounded my-6">
                        <h2 class=" bg-gray-100 py-2 text-dark pb-2 text-xl font-bold sm:text-2xl">Country Table</h2>
                            <table className="min-w-max w-full table-auto">
                                
                                <thead>
                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-3 text-left">Name</th>
                                        <th className="py-3 px-3 text-left">Population</th>
                                        <th className="py-3 px-3 text-left">Actions</th>

                                        <button type="button" class="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"  onClick={()=>setShowCreate(true)}>
                                            Create
                                        </button>

                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light">

                                         {  (!row) || row.map(row =>
                                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                <td className="py-3 px-3 text-left whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <span className="font-medium"
                                                        key={row.id}>{row.diseaseTypeId}</span>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-3 text-left">
                                                    <div className="flex items-center">
                                                        <span
                                                        key={row.id}>{row.diseaseTypeDescription}</span>
                                                    </div>
                                                </td>

                                            <td className="py-3 px-3 text-center">
                                                <div className="flex item-center justify-center">
                                                
                                                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={()=> setShowModal(true)} data-hs-overlay="#hs-vertically-centered-modal" key={row.id}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                        </svg>
                                                    </div>
                                                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={(event) =>handleDelete(event, row.diseaseTypeId)} >
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
                                Cname
                                <span class="text-red-500 required-dot">
                                    *
                                </span>
                            </label>
                                <input type="text" id="rounded-email" class="my-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Disease Type ID" defaultValue={row.diseaseTypeId} onChange={(e)=>console.log(e)}/>
                            </div>
                            <div class=" relative ">
                            <label for="required-email" class="text-gray-700 left-0 top-0 flex">
                                Population
                                <span class="text-red-500 required-dot">
                                    *
                                </span>
                            </label>
                                <input type="text" id="rounded-email" class="my-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="DiseaseType Description"/>
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

            {   open? (
                    <div x-show="modalOpen" x-transition class="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-[#e5e7eb] bg-opacity-90 px-4 py-5">
                    <div class="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
                        
                        {/* <span class="bg-primary mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span> */}
                        <svg width="40" height="40" class="mt-4 w-12 h-12 m-auto text-indigo-500" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z">
                </path>
            </svg>
            <p class="text-gray-800 dark:text-gray-200 text-xl font-bold mt-4">
                Deleted Successfully
            </p>
                        <div class=" items-center justify-center flex  my-4">
                                <div class="w-1/2 px-3 items-center">
                                    <button onClick={()=> setOpen(false)} class="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white">
                                        Close
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>): null}
                {   showCreate? (
                    <div x-show="modalOpen" x-transition class="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-[#e5e7eb] bg-opacity-90 px-4 py-5">
                        <div class="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
                            <h3 class="text-dark pb-2 text-xl font-bold sm:text-2xl">Fill</h3>
                            {/* <span class="bg-primary mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span> */}
                            <div class=" relative ">
                            <label for="required-email " value="id" class="text-gray-700  top-0 left-0 flex">
                                ID
                                <span class="text-red-500 required-dot">
                                    *
                                </span>
                            </label>
                                <input type="text" class="my-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Disease Type ID" value={diseaseTypeId} onChange={(e)=>setDiseaseTypeId(e.target.value)}/>
                            </div>
                            <div class=" relative ">
                            <label for="required-email" value="desctiption" class="text-gray-700 left-0 top-0 flex">
                                Description
                                <span class="text-red-500 required-dot">
                                    *
                                </span>
                            </label>
                                <input type="text"  class="my-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="DiseaseType Description" value={diseaseTypeDescription} onChange={(e)=>setDiseaseTypeDescription(e.target.value)}/>
                            </div>


                            <div class="-mx-3 flex flex-wrap my-2">
                                    <div class="w-1/2 px-3">
                                        <button onClick={()=> setShowCreate(false)} class="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white">
                                            Cancel
                                        </button>
                                    </div>
                                    <div class="w-1/2 px-3">
                                        <button onClick={(e)=> {handleCreate()}} class="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-green-600 hover:bg-green-600 hover:text-white">
                                           Create
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>): null}
            </>
    )
}

export default Country