import React from 'react';
import ParagraphComponent from '../../components/paragraph';

const FoundationPage = () => {
    return (
        <div>
            <ParagraphComponent
                    headers={[{ title: "Established in 2024...", align: "left" }]}
                    paragraphs={["After a year of dedication and refinement, Trixtern Technologies was officially incorporated as an LLP in 2024. This milestone marks the beginning of our commitment to creating disruptive solutions that challenge traditional norms and empower people worldwide."]}
                />
        </div>
    );
};

export default FoundationPage;