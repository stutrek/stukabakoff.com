'use client';
import Skills from './skills.md';
import TextFromHome from '../text.mdx';
import Resume from './resume.mdx';
import face from '../../../public/svg/self.svg';

import styles from './resume.module.css';
import { Link } from 'next-view-transitions';

export default function Page() {
    const handleClick = () => {
        const skills = document.getElementById('skills') as HTMLInputElement;
        if (skills.checked) {
            const marker = document.getElementById('skills-marker');
            if (marker) {
                marker.scrollIntoView();
            }
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.face}>
                    <Link href="/">
                        <img
                            src={face.src}
                            width={face.width}
                            height={face.height}
                            alt=""
                        />
                    </Link>
                </div>
                <h1>
                    <span>Stu Kabakoff</span>
                </h1>
                <div>
                    <p className={styles.subtext}>
                        Software engineer with 20 years experience.
                        <br />
                        stukabakoff@gmail.com
                    </p>
                </div>
            </div>
            <div>
                <div id="skills-marker" className={styles.skillsMarker} />
                <input
                    type="checkbox"
                    id="skills"
                    className={styles.skillsCheckbox}
                />
                <div className={styles.skills}>
                    <Skills />
                    <div className={styles.skillsLabel}>
                        <label htmlFor="skills" onClick={handleClick}>
                            Skills
                        </label>
                    </div>
                </div>
                <hr />
                <TextFromHome />
                <hr />
                <div className={styles.resume}>
                    <Resume />
                </div>
            </div>
        </div>
    );
}
