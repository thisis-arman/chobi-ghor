import { useState } from "react";

const images = [
    {
        id: 101,
        thumb: '/public/images/image-1.webp',
        alter: 'headphone',
    },
    {
        id: 102,
        thumb: '/public/images/image-2.webp',
        alter: 'headphone',
    },
    {
        id: 103,
        thumb: '/public/images/image-3.webp',
        alter: 'headphone',
    },
    {
        id: 104,
        thumb: '/public/images/image-4.webp',
        alter: 'headphone',
    },
    {
        id: 105,
        thumb: '/public/images/image-5.webp',
        alter: 'headphone',
    },
    {
        id: 106,
        thumb: '/public/images/image-6.webp',
        alter: 'headphone',
    },
    {
        id: 107,
        thumb: '/public/images/image-7.webp',
        alter: 'headphone',
    },
    {
        id: 108,
        thumb: '/public/images/image-8.webp',
        alter: 'headphone',
    },
    {
        id: 109,
        thumb: '/public/images/image-9.webp',
        alter: 'headphone',
    },
    {
        id: 110,
        thumb: '/public/images/image-10.jpeg',
        alter: 'headphone',
    },
];


const ChobiGhor = () => {

    const [galleryImages, setImages] = useState(images)
    const [selectedImage, setSelectedImage] = useState([])
    console.log(galleryImages)

    const handleSelectImage = (event) => {
        const { value, checked } = event.target
        console.log(value, checked)
        if (checked) {
            setSelectedImage((prev) => [...prev, value])
        } else {
            setSelectedImage((prev) => prev.filter((item) => item.id !== value))
        }
    }

    console.log({ selectedImage }, "selected")
    return (
        <main className="container h-[500px] mx-auto ">
            <div className="flex justify-between items-center border-b">
                <span className="text-2xl font-bold">{selectedImage.length | 0} Images Selected</span>
                <button className="text-xl font-semibold hover:shadow-md hover:border ">Delete Image</button>
            </div>

            <section className="grid md:grid-cols-5 gap-6">
                {galleryImages.map((image, i) => <div className='relative' key={i}>
                    <input
                        className="absolute z-10 top-4 left-6 w-5 h-5"
                        type="checkbox"
                        id={image.id}
                        value={image.id}
                        onChange={handleSelectImage}
                    />
                    <img className='' src={image?.thumb} alt="" />

                </div>)
                }
            </section>


        </main >
    );
};

export default ChobiGhor;