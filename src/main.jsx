import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Tus estilos personalizados

const testMode = true; // Cambia a false en producción
console.log(`La aplicación está en modo ${testMode ? 'test' : 'producción'}`);

if (testMode) {
    console.warn('Fase local.');
} else {
    console.log('Fase despliegue.');
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
