import React from 'react';

import styles from './layout.module.css';

const Layout = props => {
    let classNames = [styles.layout];
    if (props.centered) {
        classNames.push(styles.centered);
    }
    if (props.className) {
        classNames.push(props.className);
    }
    return <div className={classNames.join(' ')}>{props.children}</div>;
};

export default Layout;
