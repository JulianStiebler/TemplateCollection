const fs = require('fs');
const path = require('path');

document.getElementById('home-link').addEventListener('click', function () {
  document.getElementById('content').innerHTML = '<h2>Home</h2><p>Welcome to the Home page!</p>';
});

document.getElementById('convert-prsv-link').addEventListener('click', function () {
  loadPage('prsvConvert.html');
});

document.getElementById('unlock-all-starter-link').addEventListener('click', function () {
  loadPage('unlockAllStarter.html');
});

document.getElementById('edit-starter-link').addEventListener('click', function () {
  loadPage('editStarter.html');
});

function loadPage(page) {
  const filePath = path.join(__dirname, 'pages', page);
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      document.getElementById('content').innerHTML = '<p>Error loading page.</p>';
      return;
    }
    document.getElementById('content').innerHTML = data;
  });
}
