import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from "../redux/pasteSlice";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";



const Paste = () => {

    const pastes = useSelector((state) => state.paste.pastes);

    const [searchTerm, setSearchTerm] = useState('');

    const dispatch = useDispatch();

    const filteredData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleDelete = (id) => {
        dispatch(removeFromPastes(id));
    }

    return (
        <div className='w-[100vw] h-[100vh] flex flex-col justify-center place-self-center mt-[-2.5rem]'>
            <input
                className=' font-mono text-[#000] w-[80%] h-12 text-[1.4rem] place-self-center backdrop-filter backdrop-blur-sm bg-opacity-10 border-1 border-[#cfcfcf] min-w-40 pl-2.5 rounded-[10px] '
                type='search'
                placeholder='Search Notes here.....'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className='mt-[20px] w-[80%] h-[70%] rounded-[10px] place-self-center border border-[#cfcfcf] '>
                <div className='text-black border-1 border-[#cfcfcf] h-20 text-[3.3rem]  w-[100%] flex place-content-start pl-4.5'>
                    All Notes
                </div>


                <div className='h-[97%] py-5'>


                    <div className='flex flex-col gap-3  w-[100%] h-[88%]  overflow-y-auto '>
                        {
                            filteredData.length > 0 && filteredData.map((paste) => {
                                return (

                                    <div className='bg-[#efefef] text-[#000] f backdrop-filter backdrop-blur-sm bg-opacity-10 border border-l-0 border-t-0 border-r-0 border-b-0 border-[#cfcfcf] w-[97%]  rounded-[10px] place-self-center flex flex-row' key={paste._id}>

                                        <div className='border w-[100%] m-[0px] h-[10rem] border-t-1 border-l-1  border-r-0 border-[#cfcfcf] rounded-l-[10px] place-self-center'>
                                            <div className='h-[50%] mt-7 font-mono place-self-start pl-2.5 flex justify-center text-[3.2rem] text-[#787575]' > {paste.title}</div>
                                            <div className='h-[10%]  place-self-start pl-2.5 flex justify-center'> {paste.content}</div>
                                        </div>


                                        <div className='border-t-1 border-b-1 border-r-1 rounded-r-[10px] border-[#cfcfcf] flex flex-col justify-center ' >

                                            <div className='flex flex-row gap-3 place-content-center  my-1 mr-2.5'>

                                                <button className=' px-4 py-1 w-8 h-8 flex place-content-center'><a href={`/?pasteId=${paste._id}`}> <svg width="20" height="20" fill="none" stroke="black" viewBox="0 0 48 48">
                                                    <path d="M6 34.5V42h7.5l22.13-22.13-7.5-7.5L6 34.5zm35.71-20.04a2.003 2.003 0 0 0 0-2.83l-4.34-4.34a2.003 2.003 0 0 0-2.83 0l-3.54 3.54 7.5 7.5 3.54-3.54z" strokeWidth="1.5" />
                                                </svg></a></button>
                                                <button className=' px-4 py-1 w-8 flex place-content-center h-8'><a href={`/pastes/${paste._id}`}>
                                                    <svg width="20" height="20" fill="none" stroke="black" viewBox="0 0 24 24">
                                                        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" strokeWidth="1.2" />
                                                        <circle cx="12" cy="12" r="3" strokeWidth="1.2" />
                                                    </svg></a></button>
                                                <button onClick={() => handleDelete(paste._id)} className='bg-zinc-900  py-1 w-10 h-8 flex place-content-center' >  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 48 48">
                                                    <path d="M12 42c-1.1 0-2-.9-2-2V12H6V8h12V6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v2h12v4h-4v28c0 1.1-.9 2-2 2H12zm24-30H12v28h24V12zm-6 6v16m-8-16v16" strokeWidth="1.1" />
                                                </svg></button>

                                                <button className=' py-1 h-8 w-8 flex place-content-center ' onClick={() => {
                                                    navigator.clipboard.writeText(paste?.content)
                                                    toast.success("copied to clipboard")
                                                }}>
                                                    <svg fill="#000000" version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                        width="20px" height="20px" viewBox="0 0 32 32" xml:space="preserve">


                                                        <path d="M27.4,14.7l-6.1-6.1C21,8.2,20.5,8,20,8h-8c-1.1,0-2,0.9-2,2v18c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V16.1
	C28,15.6,27.8,15.1,27.4,14.7z M20,10l5.9,6H20V10z M12,28V10h6v6c0,1.1,0.9,2,2,2h6l0,10H12z"/>
                                                        <path d="M6,18H4V4c0-1.1,0.9-2,2-2h14v2H6V18z" />
                                                        <rect id="_Transparent_Rectangle_" width="1" height="1" />
                                                    </svg>

                                                </button>

                                                <button className=' py-1 h-8 w-8 flex place-content-center justify-center' onClick={() => {
                                                    navigator.clipboard.writeText(window.location.href);
                                                    toast.success("Link Copied")
                                                }}> <svg width="20px" height="20px" viewBox="-0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.47 4.13998C12.74 4.35998 12.28 5.96 12.09 7.91C6.77997 7.91 2 13.4802 2 20.0802C4.19 14.0802 8.99995 12.45 12.14 12.45C12.34 14.21 12.79 15.6202 13.47 15.8202C15.57 16.4302 22 12.4401 22 9.98006C22 7.52006 15.57 3.52998 13.47 4.13998Z" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg></button>

                                            </div>
                                            <div className='flex flex-row place-content-center gap-2.5 pr-2.5 my-2'><svg  width="20px" height="20px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"><g>
                                                <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="46" y1="10" x2="18" y2="10" />
                                                <polyline fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="12,10 1,10 1,58 63,58 63,10 52,10 	" />
                                                <rect x="12" y="6" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" width="6" height="8" />
                                                <rect x="46" y="6" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" width="6" height="8" />
                                                <rect x="10" y="24" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" width="10" height="10" />
                                                <rect x="10" y="42" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" width="10" height="10" />
                                                <rect x="44" y="24" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" width="10" height="10" />
                                                <rect x="44" y="42" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" width="10" height="10" />
                                                <rect x="27" y="24" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" width="10" height="10" />
                                                <rect x="27" y="42" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" width="10" height="10" />
                                            </g>
                                                <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="1" y1="18" x2="63" y2="18" /></svg>   {new Date(paste.createdAt).toLocaleDateString('en-US', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric'
                                                })}</div>
                                        </div>
                                    </div>

                                )
                            })}

                    </div>
                </div>
            </div>


        </div >
    )
}

export default Paste