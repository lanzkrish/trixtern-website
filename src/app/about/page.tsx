import React from "react";
import PageHeader from "@/components/ui/page-header";
import ParagraphComponent from "./components/paragraph";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import SectionHeader from "@/components/ui/section-header";
import Paragraph from "@/components/ui/paragraph";

const AboutPage = () => {
    return (
        <div className="about-page bg-gray-0 text-gray-900">
            {/* Page Header */}
            <PageHeader
                title="About Us"
                description="Welcome to Trixtern! Learn more about us here."
            />

            {/* Our Journey Section */}
            <section className="pb-16  bg-white">
            <section className="py-16 px-26 bg-gray-100 max-w-4xl mx-auto rounded-3xl">
                <ParagraphComponent
                    headers={[{ title: "Our Journey: From College Dream to Global Innovation", align: "left" }]}
                    paragraphs={["Trixtern Technologies was founded by two ambitious individuals in their final year of college who shared a vision to build something extraordinary. Initially, we started as a freelance software development company, offering cutting-edge solutions to businesses. However, the challenges of the COVID-19 pandemic and economic recession made it difficult to sustain our services.",
                        "But we didn’t stop there. Instead of giving up, we decided to innovate and create something revolutionary. Today, we are working on pioneering projects in Artificial Intelligence (AI) and FinTech, aimed at reshaping education and financial systems globally. Stay tuned—exciting developments are on the way!"]}
                    />
                <ParagraphComponent
                    headers={[{ title: "Our Foundation: Established in 2024", align: "left" }]}
                    paragraphs={["After years of dedication and refinement, Trixtern Technologies was officially incorporated as an LLP in 2024. This milestone marks the beginning of our commitment to creating disruptive solutions that challenge traditional norms and empower people worldwide."]}
                />
                <ParagraphComponent
                    headers={[{ title: "Our Vision: Transforming Education & Finance for a Better Future", align: "left" }]}
                    paragraphs={["At Trixtern Technologies, we are driven by one core mission: to revolutionize the education and financial sectors through technological advancements that benefit people from all walks of life."]}   
                />
                
                <ParagraphComponent
                    headers={[{ title: "Redefining Education with AI-Powered Learning", align: "left" }]}
                    paragraphs={["We believe education should be personalized because every student learns at their own pace. While online video courses exist, they fail to cater to individual needs."]}
                    lists={[[
                        "Adapt to individual students' learning speeds",
                        "Provide tailored teaching approaches for every learner",
                        "Ensure high-quality education reaches every corner of the world",
                    ]]}
                />
                <Paragraph>
                    We envision a future where every student, regardless of their background, has access to a system that understands and nurtures their unique learning style.
                </Paragraph>

                <ParagraphComponent
                    headers={[{ title: "Building the Future of Money with a Decentralized Financial System", align: "left" }]}
                    paragraphs={[
                        "The traditional money transaction system is outdated—it relies on paper currency that continuously loses value due to inflation and excessive money printing.",
                    ]}
                    lists={[[
                        "No physical money is needed",
                        "A new transaction system is built on cryptocurrency principles",
                        "Digital currency is backed by real assets, ensuring stability",
                        "Money cannot be created out of thin air—only generated against crypto",
                    ]]}
                />

                <Paragraph>
                    This decentralized system will prevent inflation, create a transparent economy, and ensure financial security for everyone.
                </Paragraph>

                <ParagraphComponent
                    headers={[{ title: "Our Ambition: A Bold Vision, Unstoppable Determination", align: "left" }]}
                    paragraphs={[
                        "We acknowledge that our mission is complex and ambitious. Creating a personalized education system and a completely new financial model is no small task.",
                        "But we firmly believe that anything is possible with the right mindset, relentless dedication, and technological innovation. At Trixtern Technologies, we are not just dreamers—we are doers.",
                        "Join us on our journey as we reshape the world, one innovation at a time.",
                    ]}
                />
            </section>
            </section>

            {/* Video Background Section */}
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

            {/* Team Section */}
            <section className="py-16 px-6 bg-gray-100">
                <SectionHeader title="Meet Our Team" alignment="center" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {[
                        { name: "Dhananjay Sahoo", role: "Co-Founder", img: "/1640615084625.jpg" },
                        { name: "Om Keshari Panda", role: "Co-Founder", img: "/IMG-20240802-WA0016.jpg" },
                    ].map((member, index) => (
                        <Card
                            key={index}
                            className="rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
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
            <section className="py-16 px-6 bg-white">
                <SectionHeader title="What Our Clients Say" alignment="center" />
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
                            className="rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
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