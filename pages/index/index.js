import Layout from '../../components/Layout/index.js';
import Link from 'next/link';
import Head from 'next/head';

import GithubLogo from '../../assets/svg/github.svg';
import InstagramLogo from '../../assets/svg/instagram.svg';
import LinkedInLogo from '../../assets/svg/linkedin.svg';

import Background from '../../components/Background';

import styles from './index.module.css';

export default function Blog() {
    return (
        <Layout centered={true} className={styles.indexPage}>
            <Head>
                <title>Stu Kabakoff</title>
            </Head>
            <h1 className={styles.name}>Stu Kabakoff</h1>
            <div className={styles.blurb}>
                Front end engineer with a drive for simplicity and performance. Currently writing
                software for 911 dispatchers and first responders at Mark43.
            </div>
            <div className={styles.treeSpace} />
            <div className={styles.logos}>
                <div className={styles.logo}>
                    <Link href="https://github.com/stutrek">
                        <a>
                            <GithubLogo />
                            <span className={styles.logoText}>@stutrek</span>
                        </a>
                    </Link>
                </div>
                <div className={styles.logo}>
                    <Link href="https://instagram.com/stutrek">
                        <a>
                            <InstagramLogo />
                            <span className={styles.logoText}>@stutrek</span>
                        </a>
                    </Link>
                </div>
                <div className={styles.logo}>
                    <Link href="https://www.linkedin.com/in/stu-kabakoff">
                        <a>
                            <LinkedInLogo />
                        </a>
                    </Link>
                    <Link href="/assets/Stuart Kabakoff 2018.pdf">
                        <a>
                            <span className={styles.logoText}>resume</span>
                        </a>
                    </Link>
                </div>
            </div>
            <Background />
        </Layout>
    );
}
