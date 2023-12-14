import React from 'react';
import styles from '../../../scss/Footer.module.scss';

type FooterProps = {
      name: string;
      year: number;
}

const Footer: React.FC<FooterProps> = ({ name, year }) => {
  return (
    <footer className={styles.footer}>
      <div>
            <p>&copy {year} {name} </p>
      </div>
    </footer>
  );
};

export default Footer;