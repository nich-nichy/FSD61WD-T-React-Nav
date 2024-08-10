import { useState } from 'react'
import { Link } from "react-router-dom";
import Card from './Card';
import courses from '../data';

function Home() {
    console.log({ courses: courses.home });
    return (
        <>
            <div className="row d-flex">
                {courses.home.map((course, n) => {
                    return <Card key={n} img={course.img} title={course.title} author={course.author} date={course.date} totalMinutes={course.totalMinutes} totalViews={course.totalViews} />
                })}
            </div>
        </>

    )
}

export default Home
