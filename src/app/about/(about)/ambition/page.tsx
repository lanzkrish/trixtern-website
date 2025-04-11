import React from 'react';
import ParagraphComponent from '@/app/about/components/paragraph';

const AmbitionPage = () => {
    return (
        <div>
            <ParagraphComponent
                                headers={[{ title: "A Bold Vision, Unstoppable Determination", align: "left" }]}
                                paragraphs={[
                                    "We acknowledge that our mission is complex and ambitious. Creating a personalized education system and a completely new financial model is no small task.",
                                    "But we firmly believe that anything is possible with the right mindset, relentless dedication, and technological innovation. At Trixtern Technologies, we are not just dreamers we are doers.",
                                    "Join us on our journey as we reshape the world, one innovation at a time.",
                                ]}
                            />
        </div>
    );
};

export default AmbitionPage;