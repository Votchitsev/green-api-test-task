import React from 'react';
import AuthTemplate from 'modules/authorization/components/AuthTemplate';
import Welcome from 'modules/authorization/components/Welcome';
import Form from 'modules/authorization/components/Form';

function AuthorizationPage () {
  return (
    <AuthTemplate>
      <Welcome />
      <Form />
    </AuthTemplate>
  );
}

export default AuthorizationPage;
