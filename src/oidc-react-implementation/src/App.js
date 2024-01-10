import './App.css';
import { AuthProvider } from 'oidc-react';
import RootApp from './RootApp';

const oidcConfig = {
  authority: 'https://localhost:44310',
  clientId: 'reactjs',
  redirectUri: 'http://localhost:3000/signin-oidc',
  postLogoutRedirectUri: 'http://localhost:3000/signout-oidc',
  responseType: 'code',
  scope: 'openid profile email offline_access',
  autoSignIn: false,
  onSignIn: () => {
    // user => console.log(user)
  },
};

function App() {
  return (
    <AuthProvider {...oidcConfig}>
      <div className="App">
        <h2>Demo React OIDC implementation</h2>
        <RootApp />
      </div>
    </AuthProvider>
  );
}

export default App;
