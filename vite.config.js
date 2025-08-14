import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 59018,
    },
    css: {
        url: false // Evita que vite procese URLs en CSS (como background-image)
    }
});
