import React from 'react';
import   styles from './Botao.module.css';


function Botao(props) {
  return (
      <button className={styles.botao}>{props.value}</button>
  )
}

export default Botao;