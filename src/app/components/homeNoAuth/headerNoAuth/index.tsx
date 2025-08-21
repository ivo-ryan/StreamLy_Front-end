import Link from "next/link";
import style from "./styles.module.scss";

export default function HeaderNoAuth (){
    return (
        <>
             <div className={style.ctaSection}>
                <img src="/homeNoAuth/logoCta.png" alt="Logo Cta" className={style.imgCta} />
                <p>Se cadastre para ter acesso aos cursos</p>

                <img src="/homeNoAuth/logoCta.png" alt="Logo Cta" className={style.imgCta} />
             </div>

             <div className={style.container}>
                <img src="/logoOnebitflix.svg" alt="logoOnebitflix" className={style.imgLogoNav}/>
                <div>
                    <Link href={"/login"} className={style.navBtn}>
                        Entrar
                    </Link>
                    <Link href={"/register"} className={style.navBtn}>
                        Quero fazer parte
                    </Link>
                </div>
             </div>
             
        </>
    )
}