import React from 'react'
import styles from './Btn.module.scss'

const Btn = ({children}) => {
	return <button className={styles.button}>{children}</button>
}

export default Btn
