import { Link } from 'next-view-transitions';

import face from '../../public/svg/self.svg';

import githubLogo from '../../public/svg/github.svg';
import instagramLogo from '../../public/svg/instagram.svg';
import linkedInLogo from '../../public/svg/linkedin.svg';
import resumeIcon from '../../public/resume-icon.png';

import Text from './text.mdx';

import styles from '../styles/Home.module.css';
export default function Home() {
    return (
        <div className="centered">
            <div className={styles.container}>
                <div className={styles.face}>
                    <img
                        src={face.src}
                        width={face.width}
                        height={face.height}
                        alt=""
                    />
                </div>
                <div className={styles.name}>
                    <h1>
                        <span>Stu Kabakoff</span>
                    </h1>
                    <p>Software engineer with 20 years experience.</p>
                </div>
                <div className={styles.icons}>
                    <a
                        className={styles.logo}
                        href="https://github.com/stutrek"
                    >
                        <img
                            src={githubLogo.src}
                            width={githubLogo.width}
                            height={githubLogo.height}
                            alt="GitHub"
                        />
                    </a>

                    <a
                        className={styles.logo}
                        href="https://instagram.com/stutrek"
                    >
                        <img
                            src={instagramLogo.src}
                            width={instagramLogo.width}
                            height={instagramLogo.height}
                            alt="Instagram"
                        />
                    </a>

                    <a
                        className={styles.logo}
                        href="https://www.linkedin.com/in/stu-kabakoff"
                    >
                        <img src={linkedInLogo.src} alt="LinkedIn" />
                    </a>
                </div>
                <div className={styles.mainContent}>
                    <h2>
                        <Link href="/resume">
                            <img
                                className={styles.cvIcon}
                                src={resumeIcon.src}
                                width={resumeIcon.width}
                                height={resumeIcon.height}
                                alt=""
                            />
                            Full Resume
                        </Link>
                    </h2>
                    <p>
                        <i>Open to new opportunities</i>
                    </p>
                    <Text />
                </div>
            </div>
        </div>
    );
}
