import style from "./YoutubeList.module.css"
import YoutubeThumbnail from "../YoutubeThumbnail/YoutubeThumbnail";

export default function YoutubeList({data, onId = () => {}}) {
    console.log(data)

    return (
        <div className={style.wrapper}>
            <div>
                {data.map((element, index) => 
                <YoutubeThumbnail key={index}
                    title={element.snippet.title}
                    image={element.snippet.thumbnails.medium.url}
                    channel={element.snippet.channelTitle}
                    class_name={style.smallVideo}
                    index={index}
                    onId={onId}
                />)}
            </div>
        </div>
    );
}


// export default function YoutubeList({data}) {
//     console.log(data)

//     return (
//         <div className={style.wrapper}>
//             <div>
//                 <YoutubeThumbnail 
//                     title={data[0].snippet.title}
//                     image={data[0].snippet.thumbnails.high.url}
//                     channel={data[0].snippet.channelTitle}
//                     class_name={style.bigVideo}
//                 />
//             </div>
//             <div>
//                 {data.slice(1).map((element, index) => 
//                 <YoutubeThumbnail 
//                     title={element.snippet.title}
//                     image={element.snippet.thumbnails.medium.url}
//                     channel={element.snippet.channelTitle}
//                     class_name={style.smallVideo}
//                 />)}
//             </div>
//         </div>
//     );
// }