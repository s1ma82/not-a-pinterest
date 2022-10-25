import React from 'react';
import pinGenerateQuery from '../../helpers/apiRequest/pinGenerateQuery';
import {DropDownMenu, ImgComp, ShareLink} from '../../components'
import styles from './pin.module.scss'
import { generateImgParams } from '../../helpers';
import { ShareIcon, ThreeDot } from '../../components/imgs';
const Pin = ({ data }) => {
    const shareLinksParams = {
        tg: {
            name: "Telegram",
            type: "sircle",
            url: "google.com",
            text: "gooloogooloo"
        },
        vk: {
            name: "Vk",
            type: "sircle",
            url: 'vk.com',
            text: "vk"
        }
    }
    return (
        <div className={styles.page}>
            <div className={styles.pin} style={{height: data.params.height}}>
                <ImgComp data={data} type="pin" />
                <div className={styles.info}>
                    <DropDownMenu btnStyle="sircle" title="Helps" Icon={ThreeDot}>
                        <a href = "/" >Какая-то ссылка</a>
                        <a href = "/" >Какая-то ссылка</a>
                        <a href = "/" >Какая-то ссылка</a>
                    </DropDownMenu>
                    <DropDownMenu btnStyle="sircle" menuType="share" title="Share to" Icon={ShareIcon} >
                        <ShareLink params = {shareLinksParams.tg}/>
                        <ShareLink params = {shareLinksParams.vk}/>
                        <ShareLink params = {shareLinksParams.tg}/>
                        <ShareLink params = {shareLinksParams.vk}/>
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
