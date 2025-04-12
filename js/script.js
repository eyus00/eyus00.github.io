// Set initial theme based on system preference
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.setAttribute("data-theme", "dark");
} else {
  document.documentElement.setAttribute("data-theme", "light");
  document.getElementById("theme-toggle").checked = true;
}

const username = document.getElementById('username');
const emailText = document.getElementById('email-text');
const notification = document.getElementById('notification');
const themeToggle = document.getElementById('theme-toggle');
const spotifyToggle = document.getElementById('spotify-toggle');
const spotifyPlayer = document.querySelector('.spotify-player');

username.addEventListener('click', () => {
  navigator.clipboard.writeText(username.textContent)
    .then(() => {
      notification.textContent = 'Username copied to clipboard!';
      notification.classList.add('show');
      setTimeout(() => {
        notification.classList.remove('show');
      }, 2000);
    })
    .catch(err => {
      console.error('Clipboard copy failed for username:', err);
    });
});

emailText.addEventListener('click', () => {
  navigator.clipboard.writeText(emailText.textContent)
    .then(() => {
      notification.textContent = 'Email copied to clipboard!';
      notification.classList.add('show');
      setTimeout(() => {
        notification.classList.remove('show');
      }, 2000);
    })
    .catch(err => {
      console.error('Clipboard copy failed for email:', err);
    });
});

themeToggle.addEventListener('change', () => {
  document.documentElement.setAttribute('data-theme', themeToggle.checked ? 'light' : 'dark');
});

spotifyToggle.addEventListener('click', () => {
  spotifyPlayer.classList.toggle('hidden');
  spotifyToggle.textContent = spotifyPlayer.classList.contains('hidden') ? 'show' : 'hide';
});