// src/app/withAppProviders.jsx
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StyledEngineProvider } from "@mui/material/styles";
import routes from "app/configs/routesConfig";
import { useMemo } from "react";
import { Provider } from "react-redux";
import ErrorBoundary from "@fuse/utils/ErrorBoundary";
import { enUS } from "date-fns/locale/en-US";
import AppContext from "./AppContext";
import store from "./store/store";

function withAppProviders(Component) {
  function WithAppProviders(props) {
    const val = useMemo(
      () => ({
        routes,
      }),
      [routes]
    );
    return (
      <ErrorBoundary>
        <AppContext.Provider value={val}>
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enUS}>
            <Provider store={store}>
              <StyledEngineProvider injectFirst>
                <Component {...props} />
              </StyledEngineProvider>
            </Provider>
          </LocalizationProvider>
        </AppContext.Provider>
      </ErrorBoundary>
    );
  }

  return WithAppProviders;
}

export default withAppProviders;
