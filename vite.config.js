import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Charger les variables d'environnement à partir du fichier .env
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': { ...process.env }, // Ajouter les variables d'environnement
  },
  build: {
    chunkSizeWarningLimit: 1000, // Modifier la limite à 1000 kB (1 MB) ou une valeur appropriée
  },
});


