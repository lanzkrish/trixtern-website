import Paragraph from '@/components/ui/paragraph';
import React from 'react';
import ParagraphComponent from '../../components/paragraph';

const VisionPage = () => {
    return (
        <div>
            <ParagraphComponent
                    headers={[{ title: "Transforming Education & Finance for a Better Future", align: "left" }]}
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
                        "The traditional money transaction system is outdated it relies on paper currency that continuously loses value due to inflation and excessive money printing.",
                    ]}
                    lists={[[
                        "No physical money is needed",
                        "A new transaction system is built on cryptocurrency principles",
                        "Digital currency is backed by real assets, ensuring stability",
                        "Money cannot be created out of thin air only generated against crypto",
                    ]]}
                />
                <Paragraph>
                    This decentralized system will prevent inflation, create a transparent economy, and ensure financial security for everyone.
                </Paragraph>
        </div>
    );
};

export default VisionPage;