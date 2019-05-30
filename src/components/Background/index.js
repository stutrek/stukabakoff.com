import React from 'react';

import Tree from './Tree';
import Hill from './Hill';
import Sky from './Sky';

import styles from './background.module.css';

export default () => {
    return (
        <div className={styles.container}>
            <Sky />
            <Hill className={styles.hill} />
            <Tree />
        </div>
    );
};
