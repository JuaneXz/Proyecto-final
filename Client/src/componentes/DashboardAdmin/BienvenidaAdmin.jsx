import React, { useState } from "react";
import styles from './Bienvenida.module.css';

function BienvenidaAdmin() {

  return (
    <div className={styles.ContenedorPadre}>
        <div className={styles.bienvenida}>
            <h1>HOLA ADMIN! TE DAMOS LA BIENVENIDA 🛸</h1>
        </div>
    </div>
    
  );
}

export default BienvenidaAdmin;