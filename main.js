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
    const open = navLinks.style.display === 'flex';
    const navbarHeight = window.innerWidth <= 600 ? '56px' : '60px';
    
    navLinks.style.cssText = open ? '' : `
      display: flex;
      flex-direction: column;
      position: fixed;
      top: ${navbarHeight}; left: 0; right: 0;
      background: #FAFAF7;
      padding: 20px 24px;
      gap: 8px;
      border-bottom: 1.5px solid #ddd8d0;
      z-index: 99;
      box-shadow: 0 4px 12px rgba(59,70,70,0.1);
    `;
    
    // Animate hamburger
    ham.classList.toggle('active');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navLinks.style.display === 'flex' && 
        !navLinks.contains(e.target) && 
        !ham.contains(e.target)) {
      navLinks.style.cssText = '';
      ham.classList.remove('active');
    }
  });
  
  // Close menu on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
      navLinks.style.cssText = '';
      ham.classList.remove('active');
    }
  });
}
