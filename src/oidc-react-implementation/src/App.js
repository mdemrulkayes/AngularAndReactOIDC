import './App.css';
import { AuthProvider } from 'oidc-react';
import RootApp from './RootApp';

const oidcConfig = {
  authority: 'https://localhost:44310',
  clientId: 'reactjs',
  redirectUri: 'http://localhost:3000/signin-oidc',
  postLogoutRedirectUri: 'http://localhost:3000/signout-oidc',
  responseType: 'code',
  scope: 'openid profile email offline_access demo_api',
  autoSignIn: false,
  onSignIn: () => {
    // user => console.log(user)
  },
  // https://github.com/bjerkio/oidc-react/blob/ae0a08b3775245c1b6fc216d9641c7a9a0fcae0e/docs/interfaces/AuthProviderProps.md
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
