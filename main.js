/* Finance Flow — main.js */

// Stock table filter
document.querySelectorAll('.filter-bar .fb').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-bar .fb').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    document.querySelectorAll('#stocks-table tbody tr').forEach(row => {
      row.style.display = (cat === 'all' || row.dataset.cat === cat) ? '' : 'none';
    });
  });
});

// Navbar scroll shadow
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 10
      ? '0 2px 16px rgba(59,70,70,0.08)'
      : 'none';
  });
}

// Hamburger menu (mobile)
const ham = document.getElementById('ham');
const navLinks = document.querySelector('.nav-links');
if (ham && navLinks) {
  ham.addEventListener('click', () => {
    // Toggle active class for both hamburger and nav links
    ham.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && 
        !navLinks.contains(e.target) && 
        !ham.contains(e.target)) {
      navLinks.classList.remove('active');
      ham.classList.remove('active');
    }
  });
  
  // Close menu on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
      navLinks.classList.remove('active');
      ham.classList.remove('active');
    }
  });
  
  // Close menu when clicking on a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      ham.classList.remove('active');
    });
  });
}
