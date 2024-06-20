// src/components/Main.js
import React from 'react';
import { getGreeting } from '../utils/greeting';

function Main() {
  const greetingMessage = getGreeting('User');

  return (
    <main>
      <p>{greetingMessage}</p>
    </main>
  );
}

export default Main;
