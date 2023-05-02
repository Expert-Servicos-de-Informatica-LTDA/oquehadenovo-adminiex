import { createRoot } from 'react-dom/client';
import React from 'react';
import Rotas from './rotas';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Rotas />);