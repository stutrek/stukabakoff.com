import Tree from './Tree';
import Hill from './Hill';

import styles from './background.module.css';

export default () => {
    return (
        <div className={styles.container}>
            <Hill className={styles.hill} />
            <Tree />
        </div>
    );
};
