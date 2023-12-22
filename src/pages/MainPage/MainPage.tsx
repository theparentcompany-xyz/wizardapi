import Collections from '../../components/Collections/Collections'
import Sidebar from '../../components/Sidebar/Sidebar'
import styles from './MainPage.module.css'
import ResponseView from './components/ResponseView/ResponseView'
import TopBar from './components/TopBar/TopBar'
import URLContainer from './components/URLContainer/URLContainer'


const MainPage = () => {
    return (
        <div className={styles.mainContainer}>
            <Sidebar />

            <Collections />

            <div className={styles.mainAppContainer}>
                <TopBar />
                <URLContainer />
                <ResponseView />
            </div>
        </div>
    )
}

export default MainPage