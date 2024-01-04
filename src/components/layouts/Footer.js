import { FaLinkedin, FaInstagram, FaYoutube, FaGithub} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={ styles.footer }>
            <ul className={ styles.socialList }>
                <li><FaGithub /></li>
                <li><FaLinkedin /></li>
                <li><FaInstagram /></li>
                <li><FaYoutube /></li>
            </ul>
            <p>Developed by <span>Nilo Venturin</span>. Based on <span>Matheus Battisti's React course</span></p>
        </footer>
    )
}

export default Footer