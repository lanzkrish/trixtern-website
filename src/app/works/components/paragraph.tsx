import React from "react";

import SectionHeader from "@/components/ui/section-header"; // Reusable Section Header
import Paragraph from "@/components/ui/paragraph"; // Reusable Paragraph Component
import List from "@/components/ui/list"; // Reusable List Component

interface ParagraphComponentProps {
  headers?: { title: string; align?: "left" | "center" | "right" }[]; // Optional array of headers
  paragraphs?: string[]; // Optional array of paragraphs
  lists?: string[][]; // Optional array of lists (each list is an array of strings)
}

const ParagraphComponent: React.FC<ParagraphComponentProps> = ({ headers, paragraphs, lists }) => {
  return (
    <div className="paragraph-component  ">
      {headers &&
        headers.map((header, index) => (
          <SectionHeader key={index} title={header.title} alignment={header.align || "left"} />
        ))}
      {paragraphs &&
        paragraphs.map((paragraph, index) => <Paragraph key={index}>{paragraph}</Paragraph>)}
      {lists &&
        lists.map((list, index) => list.length > 0 && <List key={index} items={list} />)}
    </div>
  );
};

export default ParagraphComponent;

