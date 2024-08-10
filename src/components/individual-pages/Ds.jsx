import Card from '../Card';
import courses from '../../data';

function DS() {
    return (
        <>
            <div className="row d-flex">
                {courses.ds.map((course, n) => {
                    return <Card key={n} img={course.img} title={course.title} author={course.author} date={course.date} totalMinutes={course.totalMinutes} totalViews={course.totalViews} />
                })}
            </div>
        </>

    )
}

export default DS
