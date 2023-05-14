import React from 'react';
import Layout from 'modules/common/components/Layout';
import Background from 'modules/common/components/Background';
// import AuthorizationPage from 'modules/authorization/pages';
import ChatPage from 'modules/chat/pages';

function App() {
  return (
    <Background>
      <Layout>
        {/* <AuthorizationPage /> */}
        <ChatPage />
      </Layout>
    </Background>
  );
}

export default App;
