import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams ,useParams} from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.filter((p) => p._id === id)[0];
  console.log("final paste")


  return (
    
     <div className='min-w-[100vw] flex flex-col justify-center place-self-center m-10'>
            <div className="flex flex-row gap-7 place-content-between px-[0px]  h-12 w-[80%] place-self-center px-2">
                <input className='pl-3.5 bg-[#efefef] text-[#000] backdrop-filter backdrop-blur-sm bg-opacity-10 border border-2 border-[#c5c5c5] rounded-[8px] h-12 w-[84%] '
                    type="text"
                    placeholder='Enter title here'
                    value={paste.title}
                    id="input1"
                    onChange={(e) => setTitle(e.target.value)}
                />
                

        {/* <button className='p-2.5 rounded-[20px] mt-2' onClick={createPaste}>
                    {
                        pasteId ? "Update My Paste" : " Create My Paste"
                    }
                </button> */}
      </div>

      <div className='mt-5  text-[#000] ] backdrop-filter backdrop-blur-sm bg-opacity-10 h-150 w-[80%]   rounded-[10px] flex  place-self-center flex-col'>
                <div className=' mx-[-2px]'>
                    <div className='bg-[#efefef] mx-[2px]  flex justify-center place-self-center h-12 w-[100%] border-t-2 border-r-2 border-l-2 border-[#c5c5c5] rounded-t-[10px] m-[-2px] text-black'>
                        
                        </div> 

                <textarea id="textarea" 
                className='bg-[#efefef] border-t-2 border-l-2 border-r-2 border-b-2 rounded-b-[10px] mb-[2px] border-[#c5c5c5] w-[100%] h-[100%] pl-2.5 pt-2.5'
                name="" value={paste.content} 
                placeholder='Write your Content here....' 
                onChange={(e) => setValue(e.target.value)} 
                rows={20} ></textarea>
                </div>
            </div>
    </div>
  )
}

export default ViewPaste