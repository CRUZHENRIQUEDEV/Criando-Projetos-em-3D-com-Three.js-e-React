// src/app/App.jsx
import FuseLayout from "@fuse/core/FuseLayout";
import FuseTheme from "@fuse/core/FuseTheme";
import { SnackbarProvider } from "notistack";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { selectCurrentLanguageDirection } from "app/store/i18nSlice";
import themeLayouts from "app/theme-layouts/themeLayouts";
import { selectMainTheme } from "@fuse/core/FuseSettings/fuseSettingsSlice";
import MockAdapterProvider from "@mock-api/MockAdapterProvider";
import { useAppSelector } from "app/store/hooks";
import { useSelector } from "react-redux";
import withAppProviders from "./withAppProviders";
import AuthenticationProvider from "./auth/AuthenticationProvider";

const emotionCacheOptions = {
  rtl: {
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
    insertionPoint: document.getElementById("emotion-insertion-point"),
  },
  ltr: {
    key: "muiltr",
    stylisPlugins: [],
    insertionPoint: document.getElementById("emotion-insertion-point"),
  },
};

function App() {
  const langDirection = useAppSelector(selectCurrentLanguageDirection);
  const mainTheme = useSelector(selectMainTheme);

  return (
    <MockAdapterProvider>
      <CacheProvider value={createCache(emotionCacheOptions[langDirection])}>
        <FuseTheme theme={mainTheme} root>
          <AuthenticationProvider>
            <SnackbarProvider
              maxSnack={5}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              classes={{
                containerRoot: "bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99",
              }}
            >
              <FuseLayout layouts={themeLayouts} />
            </SnackbarProvider>
          </AuthenticationProvider>
        </FuseTheme>
      </CacheProvider>
    </MockAdapterProvider>
  );
}

export default withAppProviders(App);
