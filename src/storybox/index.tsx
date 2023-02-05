import React from 'react';
import { createRoot } from 'react-dom/client';
import { StoryBox } from 'storybox-react';
import 'storybox-react/dist/styles.css';
import '../global.css';
import { stories } from './stories';

export const App = () => <StoryBox stories={stories} />;

createRoot(document.getElementById('root') as HTMLElement).render(<App />);
