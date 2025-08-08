import { useActionState } from "react";
import style from "./SearchBar.module.css"
import SearchButton from "../button/button";

export default function SearchBar({onSearch}) {
    
    function handleSearch(data) {
        const str = data.get("Search");
        onSearch(str);
    }

    return (
        <div>
            <form action={handleSearch}>
                <input type="text" name="Search" id="input_Search" />
                <SearchButton name={"Search"}/>
            </form>
        </div>
    );
}