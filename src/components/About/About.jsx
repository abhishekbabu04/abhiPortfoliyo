import React from "react";
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import profileImg from '../../assets/profile2.jpeg';

export const About = () => {
    return (
        <section
            id="about"
            className="py-8 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-10 md:mt-12 lg:mt-16"
        >
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">

                {/* Left Side */}
                <div className="md:w-1/2 text-center md:text-left mt-5 md:mt-0">
                    {/* Greeting */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                        Hi, I am
                    </h1>
                    {/* Name */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Abhishek Babu
                    </h2>
                    {/* Skills Heading with Typing Effect */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
                        <span className="text-white">I am a </span>
                        <TypeAnimation
                            sequence={[
                                'Fullstack Developer', 2000,
                                'App Developer', 2000,
                                'UI/UX Designer', 2000,
                                'Coder', 2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-[#8245ec]"
                        />
                    </h3>
                    {/* About Me Paragraph */}
                    <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
                        I am a full-stack developer with over 2 years of experience in
                        building scalable web applications. Skilled in both front-end and
                        back-end development, I specialize in the MERN stack and other
                        modern technologies to create seamless user experiences and
                        efficient solutions.
                    </p>
                    {/* Resume Button */}
                    <a
                        href="https://drive.google.com/file/d/1TlZlYZZbZK9FWW8vSU64IgYhyV6Pc97R/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
                        style={{
                            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                        }}
                    >
                        DOWNLOAD RESUME
                    </a>


                </div>

                {/* right side */}
                <div className="md:w-1/2 flex justify-center md:justify-end ml-8">
                    <Tilt
                        className="w-52 h-52 sm:w-60 sm:h-60 md:w-[24rem] md:h-[24rem] lg:w-[26rem] lg:h-[26rem] border-4 border-purple-700 rounded-full"
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                        gyroscope={true}
                    >
                        <img src={profileImg} alt="abhishek babu"
                            className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                        />
                    </Tilt>
                </div>

            </div>

        </section>
    )
}