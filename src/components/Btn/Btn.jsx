import React from 'react'
import styles from './Btn.module.scss'

const Btn = ({children, onClick, type, className}) => {
	return <button onClick={onClick} className={`
		${styles.button} 
		${className}
		${styles["button_" + type] || ''}
	`}>{children}</button>
}

export default Btn
