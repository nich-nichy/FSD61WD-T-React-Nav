import { useState, useEffect } from 'react';
import Card from './Card';
import courses from '../data';

function Home() {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const totalImages = courses.home.length;
    const [loadedCount, setLoadedCount] = useState(0);

    const handleImageLoad = () => {
        setLoadedCount(prevCount => prevCount + 1);
    };

    useEffect(() => {
        if (loadedCount === totalImages) {
            setImagesLoaded(true);
        }
    }, [loadedCount, totalImages]);

    return (
        <div>
            {!imagesLoaded && <p>Loading images...</p>}
            <div style={{ display: imagesLoaded ? 'block' : 'none' }} className="row d-flex">
                {courses?.home.map((course, index) => (
                    <Card
                        key={index}
                        img={course.img}
                        title={course.title}
                        author={course.author}
                        date={course.date}
                        totalMinutes={course.totalMinutes}
                        totalViews={course.totalViews}
                        onImageLoad={handleImageLoad}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
