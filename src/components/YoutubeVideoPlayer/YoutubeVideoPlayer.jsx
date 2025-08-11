import style from "./YoutubeVideoPlayer.module.css"
import YouTube from 'react-youtube';

export default function YoutubeVideoPlayer({data}) {
    console.log(data);
    
    const opts = {
        height: '400',
        width: '100%',
    };

    return (
        <div>
            <div className={style.wrapper}>
                <YouTube videoId={data.id.videoId} opts={opts}/>
                <div className={style.text}>
                    <h3>{data.snippet.title}</h3>
                    <h4>{data.snippet.channelTitle}</h4>
                    <p>{data.snippet.description}</p>
                    <span>{data.snippet.publishedAt}</span>
                </div>
            </div>
        </div>
    );
}