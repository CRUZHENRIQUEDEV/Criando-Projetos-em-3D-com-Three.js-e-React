// src/app/main/3d-environment/Environment3DConfig.js
import i18next from 'i18next';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';
import Environment3D from './Environment3D'; // Importação direta

i18next.addResourceBundle('en', 'environment3DPage', en);
i18next.addResourceBundle('tr', 'environment3DPage', tr);
i18next.addResourceBundle('ar', 'environment3DPage', ar);

/**
 * The Environment3D page config.
 */
const Environment3DConfig = {
  settings: {
    layout: {}
  },
  routes: [
    {
      path: 'environment-3d',
      element: <Environment3D /> // Uso direto do componente
    }
  ]
};

export default Environment3DConfig;
