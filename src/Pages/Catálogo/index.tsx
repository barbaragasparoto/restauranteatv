import styles from './Catalogo.module.scss';
import Buscador from '../Buscador';
import { useState } from 'react';
import Filtros from '../Filtros';

export default function Catalogo () {

  const [busca, setBusca] = useState("");



return(

<main>

<Buscador busca={busca} setBusca={setBusca}/>
<div className={styles.catalogo__filtros}>
<Filtros/>
</div>  
</main>
);

}