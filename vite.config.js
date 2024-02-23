import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import TerserPlugin from 'terser-webpack-plugin';

// Charger les variables d'environnement à partir du fichier .env
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': { ...process.env }, // Ajouter les variables d'environnement
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  build: {
    chunkSizeWarningLimit: 1000, // Modifier la limite à 1000 kB
  },
});


