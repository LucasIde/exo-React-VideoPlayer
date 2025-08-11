import { useState } from "react";
import style from "./mainPart.module.css"
import SearchBar from "../../components/SearchBar/SearchBar";
import dataJson from "./search-result.json"
import YoutubeList from "../../components/YoutubeList/YoutubeList";
import YoutubeVideoPlayer from "../../components/YoutubeVideoPlayer/YoutubeVideoPlayer";
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
            <div className={style.player}>
                {
                    (id != -1) ?
                    <YoutubeVideoPlayer data={dataJson.items[id]}/> :
                    <div className={style.nothing_displayed}> No Video Displayed</div>
                }
                <YoutubeList data={dataJson.items} onId={getId} played={id}/>
                {/* point 4 video player envoi jason item d'id */}
            </div>
        </main>
    );
}