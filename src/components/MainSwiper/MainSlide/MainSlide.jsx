import { SwiperSlide } from 'swiper/react';
import 'swiper/css';

import styles from './MainSlide.module.scss';

const MainSlide = (props) => {
    return (
        <>
            <div className={styles.mainSlide}>
                <div className={styles.left}>

                    <div className={styles.leftUpper}>
                        <span>{props.subtitle}</span>
                        <h3>{props.title}</h3>
                        <p>{props.desc}</p>
                    </div>
                    <div className={styles.leftBottom}>
                        <div className={props.link}>Подробнее →</div>
                    </div>

                </div>
                <div className={styles.right}>
                    <img src="" alt="case image"/>
                </div>
            </div>

        </>
    );
};

export default MainSlide;