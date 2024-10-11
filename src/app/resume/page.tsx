import Resume from './resume.mdx';
import face from '../../../public/svg/self.svg';

import styles from './resume.module.css';

export default function Page() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.face}>
                    <a href="/">
                        <img
                            src={face.src}
                            width={face.width}
                            height={face.height}
                            alt=""
                        />
                    </a>
                </div>
                <h1>Stu Kabakoff</h1>
                <div>
                    <p>Software engineer with 20 years experience.</p>
                </div>
            </div>
            <div className={styles.resume}>
                <Resume />
            </div>
        </div>
    );
}
