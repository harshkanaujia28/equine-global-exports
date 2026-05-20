import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackStartVite } from "@tanstack/react-start/plugin/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    TanStackStartVite(),
    tanstackRouter(),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
