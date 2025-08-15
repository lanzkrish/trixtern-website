import React from 'react';

const Banner: React.FC = () => {
    return (
        <main>
            <section className="relative h-[400px] overflow-hidden text-white text-center">
                <video poster='https://eu0yhcfg0e.ufs.sh/f/rKAT0N5cfFSdkIpx3a4ZncBaZ8sKRIb4e6qAQSHfdOLVlDiz'
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="https://eu0yhcfg0e.ufs.sh/f/rKAT0N5cfFSdmIYOh5IR5uO2Jq0wWNBy8rQp7Vxl4C63b1aY" type="video/mp4" />
                    code 6774633-hd-1280_720_25fps Your browser does not support the video tag.
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