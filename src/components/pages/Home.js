import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layouts/LinkButton'

function Home () {
    return (
        <section className={ styles.homeContainer }>
            <h1>Welcome to <span>Costs</span></h1>
            <p>Learn project management right now!</p>
            <LinkButton to="/newproject" text="Start Project" />
            <img src={ savings } alt='costs-pig' />
        </section>
    )
}

export default Home