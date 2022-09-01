const rootDiv = document.querySelector('#root');

const url = 'http://localhost/auth/profile';

(async () => {
  const response = await fetch(url, { credentials: 'same-origin' });
})();
