import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../src/assets/styles/index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider
  domain="dev-ffk0m4efcd8zhhb3.uk.auth0.com"
  clientId={import.meta.env.VITE_AUTH0_CLIENT_ID_KEY}
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App />
</Auth0Provider>,
)
