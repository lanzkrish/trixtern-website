import React from 'react';

const Banner: React.FC = () => {
    return (
        <main>
            <section className="relative h-[400px] overflow-hidden text-white text-center">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/6774633-uhd_3840_2160_30fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="relative z-10 flex flex-col justify-center items-center h-full bg-black/50">
                    <h2 className="text-4xl font-bold mb-4">Our Vision & Mission</h2>
                    <p className="text-lg max-w-2xl">
                        We aim to revolutionize the world of AI and FinTech by
                        delivering cutting-edge solutions that empower businesses
                        and individuals alike.
                    </p>
                </div>
            </section>
        </main>
    );
};


export default Banner;