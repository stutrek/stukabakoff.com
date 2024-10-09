import Image from 'next/image';
import face from '../../public/svg/self.svg';

import githubLogo from '../../public/svg/github.svg';
import instagramLogo from '../../public/svg/instagram.svg';
import linkedInLogo from '../../public/svg/linkedin.svg';

import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.face}>
                <Image src={face} alt="" />
            </div>
            <h1 className={styles.name}>Stu Kabakoff</h1>
            <div className={styles.icons}>
                <a className={styles.logo} href="https://github.com/stutrek">
                    <Image src={githubLogo} alt="GitHub" />
                </a>

                <a className={styles.logo} href="https://instagram.com/stutrek">
                    <Image src={instagramLogo} alt="Instagram" />
                </a>

                <a
                    className={styles.logo}
                    href="https://www.linkedin.com/in/stu-kabakoff"
                >
                    <Image src={linkedInLogo} alt="LinkedIn" />
                </a>
            </div>
            <div className={styles.writing}>
                <h2>Writing</h2>
                <h3>Managing Multi Page Forms</h3>
                <p>asdfasdfasf asdf asdf asdf asdf </p>
                <h3>Load Balancers vs. API Gateways</h3>
                <p>asdfasdfasf asdf asdf asdf asdf </p>
                <h3>Hosting Options</h3>
                <p>asdfasdfasf asdf asdf asdf asdf </p>
            </div>
        </div>
    );
}
