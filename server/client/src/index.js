import React from ('react');
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TextEditor from './App';
import { v4 as uuidV4 } from 'uuid';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to={`/documents/${uuidV4()}`} />} />
      <Route path="/documents/:id" element={<TextEditor />} />
    </Routes>
  </BrowserRouter>
);
