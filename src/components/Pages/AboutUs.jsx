import { Link } from 'react-router-dom';
import aboutUs from '../../assets/slide-2.avif';

const AboutUs = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 mt-6 mb-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={aboutUs} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold"> Engineering is the creative application of science</h1>
                        <p className="py-6">Engineering is the designing, testing and building of machines, structures and processes using maths and science. Studying it can lead to a rewarding career. Engineering is a discipline dedicated to problem solving.</p>
                        <p>Engineering is all about using scientific principles to create structures and machines. Examples include bridges, pharmaceuticals, vehicles, airplanes, factory machines, buildings, roads, robots, and tunnels. It is the application of mathematics and science to solve problems.</p>
                        <Link to='/blogs'> <button className="btn btn-primary mt-4">Read More..</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;