
import styles from './styles.module.scss'

export default function Header () {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <h4>IgNews</h4>
                <nav>
                    <a>Home</a>
                    <a>Post</a>
                </nav>
            </div>
        </header>
    )
}