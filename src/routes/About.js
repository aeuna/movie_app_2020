import React from 'react';
import './About.css'

function About(props) {
    console.log(props)
    return (
        <div className="about__container">
            <span>
                "노마드 코더씨의 클론 코딩 영화 평점 웹서비스를 학습..
                react를 익히는 중이다.."
            </span>
            <span>- euna Lee, 2020.06.18</span>
        </div>
    )
}

export default About;