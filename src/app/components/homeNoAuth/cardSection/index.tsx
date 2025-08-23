import styles from "./styles.module.scss";

export default function CardSection(){
    return (
        <>
        <p className={styles.sectionTitle}>O QUE VOCÊ VAI ACESSAR </p>
        <div className={styles.container}>

            <div className={styles.card1}>
                <p className={styles.cardTitle}> FRONT END</p>
                <p className={styles.cardDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ducimus nihil dolor inventore in consequatur quas pariatur, soluta minima est temporibus dolore illo dolorum repellat mollitia? Doloremque ducimus repellendus autem?</p>
            </div>

            <div className={styles.card2}>
                <p className={styles.cardTitle}> BACK END</p>
                <p className={styles.cardDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ducimus nihil dolor inventore in consequatur quas pariatur, soluta minima est temporibus dolore illo dolorum repellat mollitia? Doloremque ducimus repellendus autem?</p>
            </div>

            <div className={styles.card3}>
                <p className={styles.cardTitle}> GIT HUB</p>
                <p className={styles.cardDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ducimus nihil dolor inventore in consequatur quas pariatur, soluta minima est temporibus dolore illo dolorum repellat mollitia? Doloremque ducimus repellendus autem?</p>
            </div>

            <div className={styles.card4}>
                <p className={styles.cardTitle}> PROJETOS</p>
                <p className={styles.cardDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ducimus nihil dolor inventore in consequatur quas pariatur, soluta minima est temporibus dolore illo dolorum repellat mollitia? Doloremque ducimus repellendus autem?</p>
            </div>
            <div className={styles.card5}>
                <p className={styles.cardTitle}> CARREIRA</p>
                <p className={styles.cardDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ducimus nihil dolor inventore in consequatur quas pariatur, soluta minima est temporibus dolore illo dolorum repellat mollitia? Doloremque ducimus repellendus autem?</p>
            </div>
            <div className={styles.card6}>
                <p className={styles.cardTitle}> MOBILE</p>
                <p className={styles.cardDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ducimus nihil dolor inventore in consequatur quas pariatur, soluta minima est temporibus dolore illo dolorum repellat mollitia? Doloremque ducimus repellendus autem?</p>
            </div>
        </div>
        </>
    )
}