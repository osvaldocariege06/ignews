
import { SignInButton } from './SignInButton'
import styles from './styles.module.scss'

export default function Header () {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <h4>IgNews</h4>
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Post</a>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}