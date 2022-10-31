import React, { useEffect } from 'react';
import { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import styles from './Modal.module.scss'
const Modal = () => {
    const [active, setActive] = useState(false)
    const modal = useSelector(state => state.modal)

    useEffect(() => {
        if(modal.text === null || active) return
        setActive(true)
        setTimeout(() => setActive(false), 1000)
    }, [modal])

    return (
        <div className={`${styles.modal} ${active ? styles.modal_active : ''}`}>
            {modal.text} 
        </div>
    );
}

export default connect()(Modal);
