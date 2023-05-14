import React from 'react';
import ChatTemplate from 'modules/chat/components/ChatTemplate'
import ChatList from 'modules/chat/components/ChatList';
import Chat from 'modules/chat/components/Chat';
import { useAppSelector } from 'hooks';

function ChatPage() {
  const activeChat = useAppSelector(state => state.chat.activeChat);

  return (
    <ChatTemplate>
      <ChatList />
      { activeChat ? <Chat /> : null }
    </ChatTemplate>
  )
}

export default ChatPage;
