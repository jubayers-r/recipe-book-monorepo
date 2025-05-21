import { RouterProvider } from "react-router";
import { router } from "./router/Router";
import AuthProvider from "./context/authcontext/AuthProvider";
import * as Tooltip from "@radix-ui/react-tooltip";
function App() {
  return (
    <Tooltip.Provider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Tooltip.Provider>
  );
}

export default App;
