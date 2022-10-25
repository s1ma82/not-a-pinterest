import React from 'react';
import pinGenerateQuery from '../../helpers/apiRequest/pinGenerateQuery';
import {Btn, DropDownMenu, ImgComp, ShareLink} from '../../components'
import styles from './pin.module.scss'
import { generateImgParams } from '../../helpers';
import { PathCopyIcon, ShareIcon, ThreeDot } from '../../components/imgs';
import { useRouter } from 'next/router';
const Pin = ({ data }) => {
    const router = useRouter()
    const copyUrl = () => {
        navigator.clipboard.writeText(process.env.SITE_URL + router.asPath)
    }
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
    return <div className={styles.page}>
        <div className={styles.pin} style={{height: data.params.height}}>
            <ImgComp data={data} type="pin" />
            <div className={styles.info}>
                <div className={styles.info__header}>
                    <div className={styles.share_container}>
                        <DropDownMenu btnStyle="sircle" title="Helps" Icon={ThreeDot}>
                            <a href = "/" >Какая-то ссылка</a>
                            <a href = "/" >Какая-то ссылка</a>
                            <a href = "/" >Какая-то ссылка</a>
                        </DropDownMenu>
                        <DropDownMenu btnStyle="sircle" menuType="share" title="Share to" Icon={ShareIcon} >
                            <ShareLink params = {shareLinksParams.tg}/>
                            <ShareLink params = {shareLinksParams.vk}/>
                        </DropDownMenu>
                        <Btn type="sircle"  onClick={copyUrl}><PathCopyIcon/></Btn>
                    </div>
                    <div className={styles.profile_container}>
                        <DropDownMenu btnStyle="default" title="Профиль" >
                            <p>Какая то ересь, даже не ссылка</p> 
                        </DropDownMenu>    
                        <Btn className={styles.profile_container__btn}>Сохранить</Btn>
                    </div>
                </div>
            </div>
        </div>    
    </div>
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
