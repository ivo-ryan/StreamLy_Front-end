import Link from "next/link";
import styles from "./styles.module.scss";

export default function PresentationSection (){
    return(
        <>

            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <p className={styles.subTitle}>
                            ACESSO ILIMITADO
                        </p>
                        <p className={styles.title}>
                            Tenha acesso aos melhores <span>
                                tutoriais de Programação.
                            </span>
                        </p>

                        <p className={styles.description}>Estude de onde você estiver , a qualquer momento , e continue <span> Evoluindo como programador.
                            </span></p>

                        <Link href={"/register"} className={styles.btnCta}>ACESSE AGORA
                            <img src="/buttonPlay.svg" alt="buttonPlay" className={styles.btnImg}/>
                        </Link >
                    </div>
                    <div className={styles.col}>
                        <img src="/homeNoAuth/imgPresentation.png" alt="imgIndex" className={styles.imgPresentation}/>
                    </div>
                </div>

                <div >
                    <div className={styles.col}>
                        <img src="/homeNoAuth/iconArrowDown.svg" alt="ArrowDown" className={styles.arrowDown} />
                    </div>
                </div>
            </div>
        </>
    )
}