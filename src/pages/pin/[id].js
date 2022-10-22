import React from 'react';
import pinGenerateQuery from '../../helpers/apiRequest/pinGenerateQuery';
import {DropDownMenu, ImgComp} from '../../components'
import styles from './pin.module.scss'
import { generateImgParams } from '../../helpers';
const Pin = ({ data }) => {

    return (
        <div className={styles.page}>
            <div className={styles.pin} style={{height: data.params.height}}>
                <ImgComp data={data} type="pin" />
                <div className={styles.info}>
                    <DropDownMenu type="default" title="текст" >
                        <a href="/">ссылка</a>
                    </DropDownMenu>
                </div>
            </div>    
        </div>
    );
}
export const getServerSideProps = async (context) => {
    const id = context.query.id
    const data = (await pinGenerateQuery({ id })).data
    data.params = generateImgParams(data.height, data.width, 510)
    return {
        props: {
            data
        }
    }
}

export default Pin
