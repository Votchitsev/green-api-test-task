import React, { useEffect, useState } from 'react';
import Layout from 'modules/common/components/Layout';
import Background from 'modules/common/components/Background';
import AuthorizationPage from 'modules/authorization/pages';
import { useAppSelector } from 'hooks';
import ChatPage from 'modules/chat/pages';
import PopUp from 'modules/common/components/PopUp/PopUp';

function App() {
  const credentials = useAppSelector(state => state.auth);
  const error = useAppSelector(state => state.chat.error);
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
        { error ? <PopUp message={error} /> : null }
      </Layout>
    </Background>
  );
}

export default App;
