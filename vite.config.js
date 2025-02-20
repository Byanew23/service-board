import { defineConfig } from 'vite';
import { config } from 'dotenv'
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

config()

export default defineConfig({
    plugins: [react(), tailwindcss()],
    define: {
        "process.env": process.env
    },
    server: {
        cors: false,
        port: 3000,
    },
});