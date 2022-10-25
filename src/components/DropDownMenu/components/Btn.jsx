import {DropDownMenuIcon} from '../../imgs'

export const Btn = ({ data }) => {
    const { Icon, styles, btnStyle, title, state, setState } = data
    const GenIcon = () => btnStyle === "sircle" && Icon
        ? <Icon/>
        : <DropDownMenuIcon className={styles.icon} />
        
    
    const BtnDefault = () => (
        <button onClick={() => setState(!state)} className={styles.menu__btn}>
            {title}
            <div className={styles.icon_wrapper}>
                <GenIcon/>
            </div>
        </button>
    )

    const BtnSircle = () => (
        <button onClick={() => setState(!state)} className={`${styles.menu__btn} ${styles[btnStyle]}`}> 
            <GenIcon/>
        </button>
    )
    return btnStyle === 'sircle' ? <BtnSircle/> : <BtnDefault/>
}
