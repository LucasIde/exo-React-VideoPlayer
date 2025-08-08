import { useState } from "react";
import style from "./mainPart.module.css"
import SearchBar from "../../components/SearchBar/SearchBar";
import dataJson from "./search-result.json"
import YoutubeList from "../../components/YoutubeList/YoutubeList";

// console.log(dataJson);
// console.log(dataJson.items);

export default function Main() {
    const [Search, setSearch] = useState("");
    const [id, setId] = useState(-1);

    function getSearch(searchStr) {
        setSearch(searchStr);
        console.log(searchStr);
    }

    function getId(videoId) {
        setId(videoId);
        console.log(videoId);
    }

    return (
        <main className={style.wrapper}>
            <SearchBar onSearch={getSearch}/>
            <p>{Search}</p>
            <div>
                <YoutubeList data={dataJson.items} onId={getId}/>
                {/* point 4 video player envoi jason item d'id */}
            </div>
        </main>
    );
}