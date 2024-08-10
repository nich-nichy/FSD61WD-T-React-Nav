import { useState } from 'react'
import Card from '../components/Card';
import courses from '../data';

function CBS() {
    console.log(courses.cbs);
    return (
        <>
            <div className="row d-flex">
                {courses.cbs.map((course, n) => {
                    return <Card key={n} img={course.img} title={course.title} author={course.author} date={course.date} totalMinutes={course.totalMinutes} totalViews={course.totalViews} />
                })}
            </div>
        </>

    )
}

export default CBS
