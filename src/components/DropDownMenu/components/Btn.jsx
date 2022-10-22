import {DropDownMenuIcon} from '../../imgs'

export const Btn = ({ data }) => {
    const {icon, styles, btnStyle, title, state, setState} = data
    const Icon = () => btnStyle === "sircle" && icon
        ? { icon }
        : <DropDownMenuIcon className={styles.icon} />
        
    
    const BtnDefault = () => (
        <button onClick={() => setState(!state)}
            className={`
                ${styles.menu__button}
                ${styles[btnStyle]}
            `}
        >
            {title}
            <div className={styles.icon_wrapper}>
                <Icon/>
            </div>
        </button>
    )

    const BtnSircle = () => (
        <button onClick={() => setState(!state)}
            className={`
                ${styles.menu__button}
                ${styles[btnStyle]}
            `}
        > 
            <Icon/>
        </button>
    )
    return btnStyle === 'sircle' ? <BtnSircle/> : <BtnDefault/>
}
