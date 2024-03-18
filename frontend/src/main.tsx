import ReactDOM from 'react-dom/client'

import '../src/assets/styles/index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router.tsx';





  ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider
  domain="dev-z1yk67sb8yvazryj.us.auth0.com"
  clientId={import.meta.env.VITE_AUTH0_CLIENT_ID_KEY}
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>


  <RouterProvider router={router} />


</Auth0Provider>,
)
