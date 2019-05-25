import { useRef, useLayoutEffect } from 'react';

import AlgoTree from './algoTree';

import styles from '../background.module.css';

export default props => {
    const canvasRef = useRef(undefined);
    useLayoutEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = canvas.offsetWidth * window.devicePixelRatio;
        canvas.height = canvas.offsetHeight * window.devicePixelRatio;
        const ctx = canvasRef.current.getContext('2d');
        const tree = new AlgoTree({
            ctx,
            leafType: AlgoTree.BIG_LEAVES,
        });
        tree.draw();
    }, []);
    return <canvas ref={canvasRef} className={styles.treeCanvas} />;
};
