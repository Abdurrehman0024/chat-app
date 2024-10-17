import React from 'react';
import Conversation from "./Conversation";
import useGetConversations from '../hooks/useGetConversations';

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  
  console.log("Conversations", conversations);
  const conversationArray = Array.isArray(conversations) ? conversations : [];

  return (
    <div className='py-2 flex flex-col overflow-auto'>
     {conversations.length > 0 ? (
				conversations.map((conversation, idx) => (
					<Conversation 
						key={conversation._id}
						conversation={conversation}
						lastIdx={idx === conversations.length - 1}
					/>
				))
			) : (
				<p>No conversations found</p>
			)}

      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  );
};

export default Conversations;
