import Link from 'next/link';
import React from 'react';
import {ImgComp, ProfileLink} from "../";
import styles from "./Pin.module.scss";

const Pin = ({ data }) => {
    const imgData = {
        params: data.params,
        urls: data.urls,
        blur_hash: data.blur_hash,
        alt_description: data.alt_description
    }
    const { user, id } = data
    
    return (
        <div className={styles.pin}>
            <Link href={`/pin/${id}`}>
                <a>
                    <ImgComp data={imgData} />
                </a>
            </Link>
            <div className={styles.pin__info}>
                <ProfileLink name={user.name}  image={user.profile_image.small} type="mini"/>   
            </div>
        </div>
    );
}

export default Pin;
