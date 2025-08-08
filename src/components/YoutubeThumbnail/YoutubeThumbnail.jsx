import style from "./YoutubeThumbnail.module.css"

export default function YoutubeThumbnail({title, image, channel, class_name, index, onId = () => {}}) {
    console.log(title, image, channel, class_name);

    function handleVideo(id) {
        onId(id)
    }

    return (
        <div className={class_name} onClick={() => handleVideo(index)}>
            <img src={image} alt="thumbnail"/>
            <div>
                <h3>{title}</h3>
                <h4>{channel}</h4>
            </div>
        </div>
    );
}