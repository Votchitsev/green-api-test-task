import React from 'react';
import ChatTemplate from 'modules/chat/components/ChatTemplate'
import ChatList from 'modules/chat/components/ChatList';
import Chat from 'modules/chat/components/Chat';

function ChatPage() {
  return (
    <ChatTemplate>
      <ChatList />
      <Chat />
    </ChatTemplate>
  )
}

export default ChatPage;
