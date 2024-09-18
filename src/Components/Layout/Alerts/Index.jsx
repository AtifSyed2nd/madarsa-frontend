/** @format */

import React, { createContext, useContext, useState, useCallback } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";

const AlertContext = createContext();

export const useAlert = () => {
  return useContext(AlertContext);
};

export const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  const addAlert = useCallback(
    (
      message,
      variant = "success",
      position = { vertical: "top", horizontal: "center" },
      duration = 4000
    ) => {
      setAlerts((prevAlerts) => [
        ...prevAlerts,
        { message, variant, position, duration, id: new Date().getTime() },
      ]);
    },
    []
  );

  const removeAlert = useCallback((id) => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
  }, []);

  return (
    <AlertContext.Provider value={addAlert}>
      {children}
      <Stack spacing={2} sx={{ width: "100%" }}>
        {alerts.map((alert) => (
          <Snackbar
            key={alert.id}
            open
            autoHideDuration={alert.duration}
            onClose={() => removeAlert(alert.id)}
            anchorOrigin={{
              vertical: alert.position.vertical,
              horizontal: alert.position.horizontal,
            }}
          >
            <Alert
              onClose={() => removeAlert(alert.id)}
              severity={alert.variant}
              sx={{ width: "100%" }}
            >
              {alert.message}
            </Alert>
          </Snackbar>
        ))}
      </Stack>
    </AlertContext.Provider>
  );
};
