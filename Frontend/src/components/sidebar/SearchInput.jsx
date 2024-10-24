import { FaSearch } from "react-icons/fa";
import React, { useState } from 'react'
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {

  const [search , setSearch ] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!search) return;
    if(search.length < 3 ){
      toast.error("Search item must be 3 characters long")
    }

      const conversation = conversations.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()));
      if(conversation){
        setSelectedConversation(conversation);
        setSearch('')
        }
        
        else toast.error("No Such User Found");
      
  }

  return (
    <form className='flex items-center gap-2'onSubmit={handleSubmit}>
      <input type='text' placeholder='   Search...' className='input input-bordered rounded-full'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
        <button type='submit' className='btn btn-circle text-white'>
        <FaSearch className="w-6 h-6 outline-none"/>
        </button>
    </form>
  );
};

export default SearchInput
