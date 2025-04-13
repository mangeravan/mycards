document.getElementById('drawerToggleBtn').addEventListener('click', function() {
    document.getElementById('drawer').classList.toggle('open');
});

document.getElementById('closeDrawerBtn').addEventListener('click', function() {
    document.getElementById('drawer').classList.remove('open');
});
