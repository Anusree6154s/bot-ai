import React from 'react';
import { Drawer } from '@mui/material';

const ChatSidebar = ({ isMobile, isDrawerOpen, toggleDrawer, startNewChat, handlePastConvo }) => {
  return (
    <>
      {isMobile ? (
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)} className='drawer'>
          <SidebarContent startNewChat={startNewChat} handlePastConvo={handlePastConvo} />
        </Drawer>
      ) : (
        <div className='drawer'>
          <SidebarContent startNewChat={startNewChat} handlePastConvo={handlePastConvo} />
        </div>
      )}
    </>
  );
};

const SidebarContent = ({ startNewChat, handlePastConvo }) => (
  <div>
    <div className='drawer-header'>
      <img src="/images/logo2.svg" alt="logo2" className='logo-img' />
      <span>New Chat</span>
      <img src='/images/new-chat.svg' className='new-chat-button' onClick={startNewChat} alt='new-chat' />
    </div>
    <button className='past-convo-button' onClick={handlePastConvo}>
      Past Conversations
    </button>
  </div>
);

export default ChatSidebar;
