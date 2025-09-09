import { GameEngine } from './engine.js';

// Bootstrap game when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  const engine = new GameEngine();
  engine.init();
});
