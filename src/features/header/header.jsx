import style from "./header.module.css"

export default function Header() {

    return (
        <header className={style.wrapper}>
            <img className={style.logo} src="/player-svgrepo-com.svg" alt=" player_logo" />
            <h1 className={style.title}>My player</h1>
        </header>
    );
}