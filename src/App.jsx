import { useState } from 'react';
import { useRef } from 'react';

function App() {
  const images = [
    {
      id: 101,
      image: '/public/images/image-1.webp',
      alter: 'headphone',
    },
    {
      id: 102,
      image: '/public/images/image-2.webp',
      alter: 'headphone',
    },
    {
      id: 103,
      image: '/public/images/image-3.webp',
      alter: 'headphone',
    },
    {
      id: 104,
      image: '/public/images/image-4.webp',
      alter: 'headphone',
    },
    {
      id: 105,
      image: '/public/images/image-5.webp',
      alter: 'headphone',
    },
    {
      id: 106,
      image: '/public/images/image-6.webp',
      alter: 'headphone',
    },
    {
      id: 107,
      image: '/public/images/image-7.webp',
      alter: 'headphone',
    },
    {
      id: 108,
      image: '/public/images/image-8.webp',
      alter: 'headphone',
    },
    {
      id: 109,
      image: '/public/images/image-9.webp',
      alter: 'headphone',
    },
    {
      id: 110,
      image: '/public/images/image-10.jpeg',
      alter: 'headphone',
    },
  ];

  const [isSelected, setIsSelected] = useState([]);
  const [gallery, setGallery] = useState(images);
  const dragImage = useRef(0);
  const draggedOverImage = useRef(0);

  // Checking and Selecting which items are selected
  function handleChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      setIsSelected((prev) => [...prev, value]);
    } else {
      setIsSelected((prev) => prev.filter((item) => item !== value));
    }
  }

  function addImage() {
    console.log("Image Added");
  }

  // Deleting Selected Items and updating the gallery
  function handleDelete() {
    const updatedGalley = gallery.filter((item) => {
      if (!isSelected.includes(item.id)) return item;
    });

    setGallery(updatedGalley);
  }

  // Pushing the images while dragging to create space for the dragged one
  function handleOnDragEnter(i) {
    if (dragImage.current === i) return;

    const updatedGallery = [...gallery];
    const draggedItem = updatedGallery[dragImage.current];

    updatedGallery.splice(dragImage.current, 1);
    updatedGallery.splice(i, 0, draggedItem);

    setGallery(updatedGallery);
    dragImage.current = i;
  }

  return (
    <section className="container">
      <div className="header">
        <h1>
          {isSelected.length > 0
            ? `${isSelected.length} Imgaes Selected`
            : "Gallery"}
        </h1>

        {isSelected.length > 0 ? (
          <button onClick={handleDelete}>Delete Images</button>
        ) : (
          ""
        )}
      </div>

      <ul className="gallery">
        {gallery.map((item, i) => {
          return (
            <li
              key={item.id}
              className={`gallery-item gallery-item-${i + 1} ${dragImage.current === i ? "dragging" : ""} 
              ${draggedOverImage.current === i ? "drag-over" : ""}`}
              draggable
              onDragStart={() => (dragImage.current = i)}
              onDragEnter={() => handleOnDragEnter(i)}
              onDragOver={(e) => e.preventDefault()}
            >

              <input
                type="checkbox"
                name="galleryImages"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <img src={item.image} alt={item.id} />
            </li>
          );
        })}
        <li className="gallery-item add" onClick={addImage}>
          <input type="file" name="galleryImages" />
          <img className='w-8' src="/public/assets/image.svg" alt="placeholder image" />
          <p>Add Image</p>
        </li>
      </ul>
    </section>
  );
}

export default App;
