import Head from 'next/head';

import Face from '../public/svg/self.svg';

import GithubLogo from '../public/svg/github.svg';
import InstagramLogo from '../public/svg/instagram.svg';
import LinkedInLogo from '../public/svg/linkedin.svg';

import styles from '../styles/Home.module.css';

export const config = {
    unstable_runtimeJS: false,
};

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Stu Kabakoff</title>
                <meta
                    name="description"
                    content="Code, art, and other hobbies by Stu Kabakoff"
                />
                <link rel="icon" href="/self.png" />
            </Head>
            <div className={styles.face}>
                <Face />
            </div>
            <h1 className={styles.name}>Stu Kabakoff</h1>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <td>code</td>
                        <td>
                            <a
                                className={styles.logo}
                                href="https://github.com/stutrek"
                            >
                                <GithubLogo />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>hobbies</td>
                        <td>
                            <a
                                className={styles.logo}
                                href="https://instagram.com/stutrek"
                            >
                                <InstagramLogo />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>work</td>
                        <td>
                            <a
                                className={styles.logo}
                                href="https://www.linkedin.com/in/stu-kabakoff"
                            >
                                <LinkedInLogo />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
