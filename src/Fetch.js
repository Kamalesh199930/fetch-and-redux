import React, { useEffect, useState } from "react";
const Fetch = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setPhotos(data);
            });
    });
    const firstTenFlag = photos.slice(0, 16);
    return (
        <div>
            {firstTenFlag.map((photo) => (
                <img
                    src={photo.url}
                    key={photo.id}
                    alt={photo.title}
                    width={100}
                />
            ))}
        </div>
    );
};
export default Fetch;
