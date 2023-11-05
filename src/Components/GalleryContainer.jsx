import { useState } from 'react';
import Gallery from './Gallery';

const images = [
    {
        id: 101,
        image: '/public/images/image-1.webp',
        alter: 'headphone'
    },
    {
        id: 102,
        image: '/public/images/image-2.webp',
        alter: 'headphone'
    },
    {
        id: 103,
        image: '/public/images/image-3.webp',
        alter: 'headphone'
    },
    {
        id: 104,
        image: '/public/images/image-4.webp',
        alter: 'headphone'
    },
    {
        id: 105,
        image: '/public/images/image-5.webp',
        alter: 'headphone'
    },
    {
        id: 106,
        image: '/public/images/image-6.webp',
        alter: 'headphone'
    },
    {
        id: 107,
        image: '/public/images/image-7.webp',
        alter: 'headphone'
    },
]

function GalleryContainer() {
    const [selectThumbnails, setSelectThumbnails] = useState([]);
    const [thumbnails, setThumbnails] = useState(images);
    const [dragging, setDragging] = useState(false);
    const [draggedImage, setDraggedImage] = useState(null);


    // Implement the delete functionality here.
    const handleDeleteClick = () => {
        const updatedImages = thumbnails.filter(
            (image) => !selectThumbnails.some((selected) => selected.id === image.id)
        );

        setThumbnails(updatedImages);
        setSelectThumbnails([]);
    };

    // Implement drag start logic.
    const handleDragStart = (image) => {
        setDragging(true);
        setDraggedImage(image);
    };

    // Implement drop logic.
    const handleDrop = (targetIndex) => {
        setDragging(false);

        if (draggedImage) {
            const updatedImages = thumbnails.filter(
                (image) => image.id !== draggedImage.id
            );
            updatedImages.splice(targetIndex, 0, draggedImage);

            setThumbnails(updatedImages);
            setDraggedImage(null);
        }
    };

    // Implement drag over logic.
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    // Implement file upload logic.
    const handleFileChange = (e) => {
        const selectedFiles = e.target.files;

        const newImages = Array.from(selectedFiles).map((file, index) => {
            const id = thumbnails.length + index + 1;
            const thumbnail = URL.createObjectURL(file);

            return { id, thumbnail };
        });

        setThumbnails([...thumbnails, ...newImages]);
    };

    return (
        <Gallery
            thumbnails={thumbnails}
            selectThumbnails={selectThumbnails}
            dragging={dragging}
            onFileChange={handleFileChange}
            onDeleteClick={handleDeleteClick}
            onDragStart={handleDragStart}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        />
    );
}

export default GalleryContainer;
