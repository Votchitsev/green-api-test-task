import React from 'react';
import Layout from 'modules/common/components/Layout';
import Background from 'modules/common/components/Background';
import AuthorizationPage from 'modules/authorization/pages';
import 'App.scss';

function App() {
  return (
    <Background>
      <Layout>
        <AuthorizationPage />
      </Layout>
    </Background>
  );
}

export default App;
