
const localStorage = {};

Object.defineProperty(window, 'localStorage', {
  value: localStorage,
});

localStorage.getItem = jest.fn();
localStorage.setItem = jest.fn();
