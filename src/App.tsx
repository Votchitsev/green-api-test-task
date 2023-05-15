import React, { useEffect, useState } from 'react';
import Layout from 'modules/common/components/Layout';
import Background from 'modules/common/components/Background';
import AuthorizationPage from 'modules/authorization/pages';
import { useAppSelector } from 'hooks';
import ChatPage from 'modules/chat/pages';

function App() {
  const credentials = useAppSelector(state => state.auth);

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (credentials.idInstance && credentials.ApiTokenInstance) {
      setIsAuth(true);
      return;
    }

    setIsAuth(false);
  }, [credentials]);

  return (
    <Background>
      <Layout>
        { isAuth
        ? <ChatPage />
        : <AuthorizationPage /> }
      </Layout>
    </Background>
  );
}

export default App;
