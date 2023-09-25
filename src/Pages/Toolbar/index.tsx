import styles from './Toolbar.module.scss';
import topo from "../../assets/topo.png"

export default function Toolbar () {
    return(
      <main> 
          
        <img className={styles.topo} src={ topo } alt="Imagem de topo"/>
        <h3 className={styles.titulo}>Cardápio</h3>
        
      </main>
        
    
      );
    }