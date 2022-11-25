// IMPORTINGS
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Tables from './Tables'

const PublicServant = () => {
// COMPONENT
const baseURL = "https://backend-app-production-2791.up.railway.app/publicServant";
    const [row, setRow] = useState(null);
    const [updateModel, setUpdateModel] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false); 
    const [createModal, setCreateModal] = useState(false);

    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');

    

    const [editEmail, setEditEmail] = useState('');
    const [editDepartment, setEditDepartment] = useState('');
    //CREATE
    const createUser =  () => {
        axios({
            method: 'post',
            url: baseURL,
            data: { 
                email_id: email,
                department: department,
            }
        }).then((response)=>{
            getAllUsers();
            console.log(response)
            alert(response.data)
            setEmail('');
            setDepartment('');
          }).catch((error)=>{
            console.log(error)
            });
    }

    const handleCreate = async () => {
        createUser();
    }

    //READ
    const getAllUsers = async () => {
        const response = await axios.get(baseURL);
        setRow(response.data);
    }
    useEffect(() => {
        getAllUsers();
    }, []);

    //DELETE
    const deleteUser =  (row) => {
        axios({
            method: 'delete',
            url: baseURL,
            data: {
                email_id: row.email,
            }
        }).then((response)=>{
            console.log(response)
            alert(response.data)
            getAllUsers();
            }).catch((error)=>{
            console.log(error)
            alert(error)
            });
    }

    const handleDelete = (row) => {
        setDeleteModal(true);
        deleteUser(row);
    }

    //UPDATE
    const handleEdit = () => {
        axios({
            method: 'put',
            url: baseURL,
            headers: {}, 
            data: {
                email_id: editEmail,
                department: editDepartment,
            }
        }).then((response)=>{
            console.log(response)
            alert(response.data)
            getAllUsers();
          }).catch((error)=>{
            console.log(error)
            alert("Not Updated")
            }
        );
    
        }
    return (
        <>
        <Tables/>
        <div >
            <div className="min-w-screen pt-10 min-h-screen shadow-2xl flex items-center justify-center bg-[#e3e3e3] font-sans overflow-hidden">
                <div className="w-full lg:w-5/6">
                    <div className="bg-white shadow-xl rounded-[12px] my-6">
                        <div className=' bg-white py-3 rounded-tl-lg rounded-tr-lg  px-3 text-left flex justify-between'>
                            <h2 className=" bg-white py-2 px-2 text-[#4885ed] pb-2 text-xl font-bold sm:text-2xl">PublicServant</h2>
                            <button type="button" className="py-2 px-4  w-28 bg-[#3cba54] hover:bg-[#db3236] focus:ring-pink-500 focus:ring-offset-pink-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"  onClick={()=>setCreateModal(true)}>
                                Create
                            </button>
                        </div>

                        <table className="min-w-max w-full table-auto">
                            <thead>
                                <tr className="bg-[#ca2125] mx-4 px-5 text-white uppercase text-sm leading-normal">
                                    <th className="py-3 px-10 text-left">Email</th>
                                    <th className="py-3 px-3 text-left">Department</th>
                                    <th className="py-3 px-3 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                { (row)? row.map(row =>
                                <tr className="border-b border-gray-300 hover:bg-gray-200">
                                    <td className="py-3 px-10 text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="font-medium">{row.email}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-10 text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="font-medium">{row.department}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-center">
                                        <div className="flex item-center justify-center">
                                            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={()=> setUpdateModel(true) }data-hs-overlay="#hs-vertically-centered-modal" key={row.id}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </div>

                                            {updateModel? 
                                                            (
                                                                <div  x-transition className="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center backdrop-blur-sm bg-opacity-90 px-4 py-5">
                                                                    <div className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
                                                                        <h2 className="text-dark pb-2 text-xl font-bold sm:text-2xl">Update</h2>
                                                                        <h3 className="text-dark pb-2 text-sm  sm:text-xl">
                                                                        </h3>
                                                                        <div className="relative">
                                                                            <label className="text-gray-700  top-0 left-0 flex">Email<span className="text-red-500 required-dot">*</span></label>
                                                                            <input 
                                                                                className="my-4 rounded-lg shadow-lg border-transparent border-[#f3f3f3] flex-1 appearance-none border  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400  text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                                                                name="diseasetypeid"
                                                                                
                                                                                onChange={(e)=>setEditEmail(e.target.value)}/>
                                                                        </div>

                                                                        <div className="relative">
                                                                            <label className="text-gray-700  top-0 left-0 flex">Department<span className="text-red-500 required-dot">*</span></label>
                                                                            <input 
                                                                                className="my-4 rounded-lg shadow-lg border-transparent border-[#f3f3f3] flex-1 appearance-none border  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400  text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                                                                
                                                                                onChange={(e)=>setEditDepartment(e.target.value)}/>
                                                                        </div>


                                                                        <div className="-mx-3 flex flex-wrap my-2">
                                                                                <div className="w-1/2 px-3">
                                                                                    <button onClick={()=> setUpdateModel(false)} className="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white">
                                                                                        Cancel
                                                                                    </button>
                                                                                </div>
                                                                                <div className="w-1/2 px-3">
                                                                                    <button onClick={()=> handleEdit()} className="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-green-600 hover:bg-green-600 hover:text-white">
                                                                                        Update
                                                                                    </button>
                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ): null}
                                            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={()=>handleDelete(row)} >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </div>

                                            {deleteModal? 
                                                            (
                                                                <div x-show="modalOpen" x-transition className="fixed top-0 left-0  backdrop-blur-sm  flex h-full min-h-screen w-full items-center justify-center bg-[#e5e7eb] bg-opacity-90 px-4 py-5">
                                                                    <div className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
                                                                        <svg width="40" height="40" className="mt-4 w-12 h-12 m-auto text-indigo-500" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"></path></svg>
                                                                        <p className="text-gray-800 text-xl font-bold mt-4">Wait deleting</p>
                                                                        <div className=" items-center  justify-center flex  my-4">
                                                                            <div className="w-1/2 px-3 items-center">
                                                                                <button onClick={()=> setDeleteModal(false)} 
                                                                                className="text-dark block w-full shadow-2xl rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white">
                                                                                    Close</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ): null}
                                            
                                        </div>
                                    </td>
                                </tr>
                                ):<tr className='min-w-max w-full uppercase text-sm table-auto'><td className='text-black-600 uppercase text-sm leading-normal'> Loading...</td></tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>




                    {createModal? 
                    (
                        <div x-show="modalOpen" x-transition className="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-[#e5e7eb] bg-opacity-90 px-4 py-5">
                            <div className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
                                <h3 className="text-dark pb-2 text-xl font-bold sm:text-2xl">Create </h3>
                                {/* eamail */}
                                <div className=" relative ">
                                    <label for="required-email " value="id" className="text-gray-700  top-0 left-0 flex">Email<span className="text-red-500 required-dot">*</span></label>
                                    <input type="text" 
                                    className="my-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                    placeholder="Cname"  
                                    onChange={(e)=>setEmail(e.target.value)}/>
                                </div>
                                {/*  Department */}
                                <div className=" relative ">
                                    <label for="required-email" value="desctiption" className="text-gray-700 left-0 top-0 flex">Department<span className="text-red-500 required-dot">*</span></label>
                                    <input type="text"  
                                    className="my-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                    placeholder="First Enc Date" 
                                    onChange={(e)=>setDepartment(e.target.value)}/>
                                </div>
                                
                                <div className="-mx-3 flex flex-wrap my-2">
                                        <div className="w-1/2 px-3">
                                            <button onClick={()=> setCreateModal(false)} className="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white">Cancel</button>
                                        </div>
                                        <div className="w-1/2 px-3">
                                            <button onClick={(e)=> {handleCreate()}} className="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-green-600 hover:bg-green-600 hover:text-white">Create</button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    ): null}
            </>
    )
}

export default PublicServant