import Card from '../components/Card';
import courses from '../data';

function Career() {
    return (
        <>
            <div className="row d-flex">
                {courses.career.map((course, n) => {
                    return <Card key={n} img={course.img} title={course.title} author={course.author} date={course.date} totalMinutes={course.totalMinutes} totalViews={course.totalViews} />
                })}
            </div>
        </>

    )
}

export default Career
