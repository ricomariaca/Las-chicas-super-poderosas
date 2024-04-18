import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export const ImgGallery = () => {
    //pobner en el redme cometario del commit
    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1016/1000/600/",
            thumbnail: "https://picsum.photos/id/1016/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },

    ];


    return (
        <div className="max-w-screen-md mx p-4">
            <ImageGallery items={images}
                thumbnailPosition='left'
                showNav={false}
                showPlayButton={false}
                showFullscreenButton={false} />

        </div>
    )
}


