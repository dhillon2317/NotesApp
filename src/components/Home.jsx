import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';


const Home = () => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes);

    useEffect(() => {
        console.log("Inside use Effect")
        if (pasteId) {
            const paste = allPastes.find((p) => p._id === pasteId);
            console.log("page Found")
            setTitle(paste.title);
            setValue(paste.content);
        }
    }, [pasteId])


    function createPaste() {
        const paste = {
            title: title,
            content: value,
            _id: pasteId ||
                Date.now().toString(36),
            createdAt: new Date().toISOString()
        }
        if (pasteId) {
            //update
            dispatch(updateToPastes(paste));
        }
        else {
            //create
            dispatch(addToPastes(paste));
        }
        //after creating or updating
        setTitle('');
        setValue('');
        setSearchParams({});
    }


    return (
        <div className='min-w-[100vw] flex flex-col justify-center place-self-center m-5 sm:m-10'>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 place-content-between w-[95%] sm:w-[80%] place-self-center">
                <input
                    className='pl-3.5 bg-[#efefef] text-[#000] backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-[#c5c5c5] rounded-[8px] h-12 w-full sm:w-[84%]'
                    type="text"
                    placeholder='Enter title here'
                    value={title}
                    id="input1"
                    onChange={(e) => setTitle(e.target.value)}
                />

                <button
                    className='p-2.5 rounded-[20px] sm:w-[13%] w-[120px] h-[48px] '
                    onClick={createPaste}
                >
                    {pasteId ? "Update Paste" : "Create Paste"}
                </button>
            </div>

            <div className='mt-5 text-[#000] backdrop-filter backdrop-blur-sm bg-opacity-10 w-[95%] sm:w-[80%] rounded-[10px] flex place-self-center flex-col'>
                <div className='mx-[-2px]'>
                    <div className='bg-[#efefef] mx-[2px] flex justify-center place-self-center h-12 w-full border-t-2 border-r-2 border-l-2 border-[#c5c5c5] rounded-t-[10px] m-[-2px] text-black'>
                        {/* Optional title or heading can go here */}
                    </div>

                    <textarea
                        id="textarea"
                        className='bg-[#efefef] border-2 rounded-b-[10px] mb-[2px] border-[#c5c5c5] w-full pl-2.5 pt-2.5'
                        value={value}
                        placeholder='Write your Content here....'
                        onChange={(e) => setValue(e.target.value)}
                        rows={20}
                    ></textarea>
                </div>
            </div>
        </div>
    );
}

export default Home;