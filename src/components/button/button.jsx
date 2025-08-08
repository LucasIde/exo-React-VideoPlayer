import style from "./button.module.css"

export default function SearchButton({name}) {
    return (
        <button type="submit">{name}</button>
    );
}