import Image from 'next/image';
import face from '../../public/svg/self.svg';

import githubLogo from '../../public/svg/github.svg';
import instagramLogo from '../../public/svg/instagram.svg';
import linkedInLogo from '../../public/svg/linkedin.svg';

import Writing from './writing.md';

import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className="centered">
            <div className={styles.container}>
                <div className={styles.face}>
                    <Image src={face} alt="" />
                </div>
                <div className={styles.name}>
                    <h1>Stu Kabakoff</h1>
                    <p>
                        Software engineer with 20 years experience, technical
                        writer.
                    </p>
                </div>
                <div className={styles.icons}>
                    <a
                        className={styles.logo}
                        href="https://github.com/stutrek"
                    >
                        <Image src={githubLogo} alt="GitHub" />
                    </a>

                    <a
                        className={styles.logo}
                        href="https://instagram.com/stutrek"
                    >
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
                    <Writing />
                </div>
            </div>
        </div>
    );
}
