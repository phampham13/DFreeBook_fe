

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import EnvironmentPlugin from "vite-plugin-environment";

// export default defineConfig(({ mode }) => {


//   return {
//     plugins: [
//       react(),
//       EnvironmentPlugin([
//         "REACT_API_URL_BACKEND",
//         "VITE_API_KEY",
//         "VITE_AUTH_DOMAIN",
//         "VITE_PROJECT_ID",
//         "VITE_STORAGE_BUCKET",
//         "VITE_MESSAGING_SENDER_ID",
//         "VITE_APP_ID",
//         "VITE_MEASUREMENT_ID",
//       ]),
//     ],
//     define: {
//       'process.env': process.env
//     }
//   };
// });

// ...
export default defineConfig({
  // ...
  plugins: [
    react(),
    EnvironmentPlugin([
      "VITE_API_BACKEND",
      "VITE_API_LOCAL",
      "VITE_API_KEY",
      "VITE_AUTH_DOMAIN",
      "VITE_PROJECT_ID",
      "VITE_STORAGE_BUCKET",
      "VITE_MESSAGING_SENDER_ID",
      "VITE_APP_ID",
      "VITE_MEASUREMENT_ID",
    ]),
  ],
  define: {
    'process.env': process.env
  }
})
