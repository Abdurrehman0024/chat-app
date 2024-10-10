import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img
            alt='Tailwind chat bubble'
            src={''}
          />
        </div>
      </div>
        <div className={'chat-bubble text-white bg-blue-500'}>Hi! sup man?</div>
        <div className='chat-footer text-xs opacity-50 flex items-center gap-1'>12:42</div>
    </div>
  )
};

export default Message
