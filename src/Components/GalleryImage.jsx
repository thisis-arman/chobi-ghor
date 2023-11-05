/* 

const GalleryImage = ({ image, index, selectThumbnails, onDragStart, onDrop, dragging }) => {
    return (
        <div><div
            className={`group border rounded-lg relative before:content-[''] before:absolute before:h-full before:w-full hover:before:bg-black/50 before:rounded-lg before:transition-colors before:cursor-move ${index === 0 ? 'md:col-span-2 md:row-span-2' : 'col-span-1'
                }`}
            draggable={true}
            onDragStart={() => onDragStart(image)}
            onDrop={() => onDrop(index)}
        >
            <img
                src={image.image}
                alt={`image${index}`}
                height={index === 0 ? 390 : 184}
                width={index === 0 ? 390 : 184}
                className="h-full w-full max-w-full rounded-lg object-contain"
            />
            <input
                type="checkbox"
                name={image.id}
                id={image.id}
                className={
                    "absolute top-4 left-4 h-5 w-5 accent-blue-500 group-hover:opacity-100 transition-opacity delay-100 duration-100 ease-linear cursor-pointer" +
                    " " +
                    (selectThumbnails.find((photo) => photo.id === image.id)
                        ? "opacity-100"
                        : "opacity-0")
                }
                checked={
                    selectThumbnails.find((photo) => photo.id === image.id)
                        ? true
                        : false
                }
                onChange={() => {
                    if (
                        selectThumbnails.find((photo) => photo.id === image.id)
                    )
                        setSelectThumbnails(
                            selectThumbnails.filter(
                                (photo) => photo.id !== image.id
                            )
                        );
                    else setSelectThumbnails([...selectThumbnails, image]);
                }}
            />{dragging && (
                <div className="hidden">Drop Here</div>
                // <div className="hidden absolute top-0 left-0 h-full w-full flex justify-center items-center bg-white border-2 border-dashed">
                //   Drop Here
                // </div>
            )}

        </div>

        </div>
    );
};

export default GalleryImage; */