import React from 'react';
import  styles from './Header.module.css';
import Botao from '../Botao/Botao.jsx';
import Divisor from '../Divisor/Divisor';

function Header(props) {
  return (
      <header className={styles.header}>
        <h2>uma seleção de produtos</h2>
        <h1>especial para você</h1>
        <h3>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</h3>
        <section className={styles.container__buttons}>
        <Botao value="Conheça a Linx" />
        <Botao value="Seus produtos" />
        <Botao value="Ajude o algoritimo" />
        <Botao value="Compartilhe" />
        </section>


      </header>
  )
}

export default Header;