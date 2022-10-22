import React from "react"
export const Menu = ({ data }) => {
    const {children, styles, menuType, title, leftmost, setState} = data
    const ParsedChildren = () => React.Children.map(children, child =>
        <li>{React.cloneElement(child)}</li>
    )

    const Links = () => (
        <div className={`
                ${styles.links_wrapper}
                ${styles[menuType]}
                ${leftmost ? styles.leftmost : ''}
            `}>
            <ul	className={styles.links}
                onClick={e => 
                    e.target.closest('li').tagName !== 'LI' ||
                    setState(false)
            }>
                <ParsedChildren/>
            </ul>
        </div>
    )
    const ShareLinks = () => (
        <div className={`
            ${styles.links_wrapper}
            ${styles[menuType]}
            ${leftmost ? styles.leftmost : ''}

        `}>
            <h1 className={styles.title}>{title}</h1>
            <ul className={styles.links}
                onClick={e =>
                    e.target.closest('li').tagName !== 'LI' ||
                    setActivityState(false)
            }>
                    
                ParsedChildren
            </ul>
        </div>
    )

    return menuType === "share" ? <ShareLinks/> : <Links/>
}