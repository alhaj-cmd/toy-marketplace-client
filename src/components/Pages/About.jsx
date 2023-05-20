// import React from 'react';
import { Link } from 'react-router-dom';
import about from '../../assets/about.avif';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-6 mb-6">
            <div className="hero-content flex-col lg:flex-row">
                <img src={about} className=" rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold"> Educational and Learning Toys</h1>
                    <p className="py-6">An educational toy is any toy which helps our child learn, whether that is learning about themselves, the world, or more traditional academic concepts.Children is educational toys should be sturdy and safe, as well as enjoyable and engaging. The best toys teach basic concepts while promoting free play and social interaction. They should also challenge coordination and fine motor skills and introduce new skills gradually.</p>
                    <p>Learning Objects are digital materials (videos, websites, interactive tutorials) with defined instructional value that can be used in a variety of ways to improve teaching and learning.</p>
                    <Link to='/blogs'> <button className="btn btn-primary mt-4">Read More..</button></Link>
                </div>
            </div>
        </div>
    );
};

export default About;