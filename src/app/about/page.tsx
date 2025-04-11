import React from "react";
import PageHeader from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const AboutPage = () => {
    return (
        <div className="about-page bg-white text-gray-900">
            {/* Page Header */}
            <PageHeader
                title="About Us"
                description="Welcome to Trixtern! Learn more about us here."
            />

            {/* Video Background Section */}
            <section className="video-section relative h-[400px] overflow-hidden text-white text-center">
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

            {/* Team Section */}
            <section className="team-section py-20 px-6 bg-gray-50">
                <h2 className="text-3xl font-bold text-center mb-14 text-gray-800">
                    Meet Our Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {[
                        { name: "Dhananjay Sahoo", role: "Co-Founder", img: "/1640615084625.jpg" },
                        { name: "Om Keshari Panda", role: "Co-Founder", img: "/IMG-20240802-WA0016.jpg" },
                        // { name: "Charlie Lee", role: "Lead AI Engineer", img: "/images/charlie.jpg" },
                    ].map((member, index) => (
                        <Card
                            key={index}
                            className="team-member-card rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative overflow-hidden rounded-t-xl">
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-68 object-cover"
                                    width={500}
                                    height={500}
                                />
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-lg font-medium">{member.role}</p>
                                </div>
                            </div>
                            <CardContent className="p-6 text-center">
                                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section py-20 px-6 bg-white">
                <h2 className="text-3xl font-bold text-center mb-14 text-gray-800">
                    What Our Clients Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {[
                        {
                            quote:
                                "The team at Trixtern transformed our business with their innovative AI solutions. Highly recommend!",
                            author: "Jane Doe, FinTech Client",
                        },
                        {
                            quote:
                                "Their expertise in AI and FinTech is unmatched. A pleasure to work with!",
                            author: "John Smith, Startup Founder",
                        },
                    ].map((testimonial, index) => (
                        <Card
                            key={index}
                            className="testimonial-card rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <CardContent className="p-6">
                                <blockquote className="text-gray-800 italic">
                                    <p className="mb-4">&quot;{testimonial.quote}&quot;</p>
                                    <cite className="block text-gray-600 font-medium">
                                        – {testimonial.author}
                                    </cite>
                                </blockquote>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutPage;