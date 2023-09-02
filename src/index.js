import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NoteProvider } from './context/NoteProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<NoteProvider>
    <App />
</NoteProvider>
);


