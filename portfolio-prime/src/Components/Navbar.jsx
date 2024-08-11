import React from 'react';

const Navbar = ({ setPage }) => {
  return (
    <nav style={styles.navbar}>
        <div style={styles.logoContainer}>
            <img src={logoSrc} alt={logoAlt} style={styles.logo} />
        </div>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <button style={styles.navLink} onClick={() => setPage('about')}>About</button>
        </li>
        <li style={styles.navItem}>
          <button style={styles.navLink} onClick={() => setPage('work')}>Work</button>
        </li>
        <li style={styles.navItem}>
          <button style={styles.navLink} onClick={() => setPage('contact')}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;