// src/app/configs/routesConfig.jsx
import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';
import settingsConfig from 'app/configs/settingsConfig';
import SignInConfig from '../main/sign-in/SignInConfig';
import SignUpConfig from '../main/sign-up/SignUpConfig';
import SignOutConfig from '../main/sign-out/SignOutConfig';
import Error404Page from '../main/404/Error404Page';
import ExampleConfig from '../main/example/ExampleConfig';
import Environment3D from '../main/3d-environment/Environment3D'; // Importação direta

const routeConfigs = [
  ExampleConfig,
  SignOutConfig,
  SignInConfig,
  SignUpConfig,
  {
    settings: {
      layout: {}
    },
    routes: [
      {
        path: 'environment-3d',
        element: <Environment3D />
      }
    ]
  }
];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
  {
    path: '/',
    element: <Navigate to="/example" />,
    auth: settingsConfig.defaultAuth
  },
  {
    path: 'loading',
    element: <FuseLoading />
  },
  {
    path: '404',
    element: <Error404Page />
  },
  {
    path: '*',
    element: <Navigate to="404" />
  }
];

export default routes;
