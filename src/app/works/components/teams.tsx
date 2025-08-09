import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/ui/section-header";
import Image from "next/image";

export default function TeamsPage() {
    return(
        <main>
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
        </main>
    )
}