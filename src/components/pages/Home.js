import styles from './Home.module.css'
import savings from '../../img/savings.svg'

function Home () {
    return (
        <section className={ styles.homeContainer }>
            <h1>Welcome to <span>Costs</span></h1>
            <p>Learn project management right now!</p>
            <button><a href='/'>Start Project</a></button>
            <img src={ savings } alt='costs-pig' />
        </section>
    )
}

export default Home