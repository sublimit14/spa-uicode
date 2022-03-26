import styles from './Main.module.scss';
import MainSwiper from './../../components/MainSwiper/MainSwiper'

const MainPage = () => {

    return (
        <>
            <div className={ styles.main }>
                <div className="container">
                    <MainSwiper />
                </div>
            </div>

        </>
    );
};

export default MainPage;