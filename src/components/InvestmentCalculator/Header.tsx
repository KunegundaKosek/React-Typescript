import React from 'react'
import { HeaderProps } from './interface/interface-header';
import styles from '../../scss/Header.module.scss';

const Header: React.FC<HeaderProps> = ( { image, alt, text } ) => {
  return (
    <header className={styles.header}>
      <img src={image} alt={alt} />
      <h1>{text}</h1>
    </header>
  )
}

export default Header

// ""