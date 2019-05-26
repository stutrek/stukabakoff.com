import { useRef, useLayoutEffect } from 'react';

import styles from './sky.module.css';

export default () => {
    return (
        <div>
            <div className={styles.sky} />
            <div className={styles.sun} />
        </div>
    );
};
