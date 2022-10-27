import React from 'react';
import { useRouter } from 'next/router';
import pinGenerateQuery from '../../helpers/apiRequest/pinGenerateQuery';
import {Btn, DropDownMenu, ImgComp, ProfileLink, ShareLink} from '../../components'
import { generateImgParams } from '../../helpers';
import { PathCopyIcon, ShareIcon, ThreeDot } from '../../components/imgs';
import styles from './pin.module.scss'

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


const Pin = ({ data }) => {
    const router = useRouter()
    const { user } = data
    const profileParams = {
        name: user.username,
        image: user.profile_image.small,
        type: 'mini',
        href: user.portfolio_url
    }
    const copyUrl = () => {
        navigator.clipboard.writeText(process.env.SITE_URL + router.asPath)
        // navigator.clipboard.writeText(JSON.stringify(user))
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
                    <div className={styles.accountSave_container}>
                        <DropDownMenu btnStyle="default" title="Профиль" >
                            <p>Какая то ересь, даже не ссылка</p> 
                        </DropDownMenu>    
                        <Btn className={styles.accountSave_btn}>Сохранить</Btn>
                    </div>
                </div>
                <div className={styles.profile_container}>
                    <div className={styles.byDownload}>
                        <span className={styles.title}>Загружено:</span>
                        <ProfileLink params={{
                            name: profileParams.name,
                            href: profileParams.href,
                            type: "text"
                        }} />
                    </div>
                    <ProfileLink className={styles.profile} params={profileParams} />
                </div>
            </div>
        </div>    
    </div>
}

export const getServerSideProps = async (context) => {
    const id = context.query.id
    const data = (await pinGenerateQuery({ id })).data
    data.related_collections = null
    data.params = generateImgParams(data.height, data.width, 510)
    return {
        props: {
            data
        }
    }
}

export default Pin



