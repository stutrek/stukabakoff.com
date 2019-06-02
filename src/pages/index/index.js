import React from 'react';

import Layout from '../../components/Layout/index.js';
import Helmet from 'react-helmet';

import Face from '../../assets/svg/self.svg';

import GithubLogo from '../../assets/svg/github.svg';
import InstagramLogo from '../../assets/svg/instagram.svg';
import LinkedInLogo from '../../assets/svg/linkedin.svg';

import styles from './index.module.css';

export default function Blog() {
    return (
        <Layout centered={true} className={styles.indexPage}>
            <Helmet>
                <title>Stu Kabakoff</title>
            </Helmet>
            <div className={styles.face}>
                <Face />
            </div>
            <h1 className={styles.name}>Stu Kabakoff</h1>
            <table>
                <tbody>
                    <tr>
                        <td>code</td>
                        <td>
                            <a className={styles.logo} href="https://github.com/stutrek">
                                <GithubLogo />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>hobbies</td>
                        <td>
                            <a className={styles.logo} href="https://instagram.com/stutrek">
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
        </Layout>
    );
}
