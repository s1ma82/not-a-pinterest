import React from 'react';
import {InstagramIcon, TelegramIcon, VkIcon } from '../imgs';
import styles from './ShareLink.module.scss'

// types: ["sircle", "default"]

const Link = ({ props }) => {
    return (
        <a className={`
            ${styles.shareLink}
            ${styles["shareLink_" + props.name]}
            ${styles[props.type]}
        `}
            href={props.url}
        >
            <div className={styles.icon_container}>
                <props.icon />
            </div>
            <div className={styles.text_container}>
                {props.name}
            </div>
        </a>
    )
}

const ShareLink = ({ params }) => {
    const getProps = () => {
        let icon, url
        switch (params.name) {
            case "Telegram":
                icon = TelegramIcon
                url = `https://t.me/share/url?url=${params.url}&text=${params.text}`
                break
            // case "Instagram":
            //     icon = InstagramIcon
                // break
            // case "Facebook": icon = FacebookIcon
                // break
            case "Vk":
                icon = VkIcon
                url = `https://vk.com/share.php?url=${params.url}&text=${params.text}`
                break
            default: null
        }
        return {
            type: params.type,
            text: params.text,
            name: params.name,
            icon,
            url

        }
    }
    const props = getProps()
    return <Link props={props}/>                
}

export default ShareLink;
