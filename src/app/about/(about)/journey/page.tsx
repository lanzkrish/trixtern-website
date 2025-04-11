import ParagraphComponent from "@/app/about/components/paragraph";

export default function JourneyPage() {
    return(
        <main>

            <ParagraphComponent
                headers={[{ title: "From College Dream to Global Innovation", align: "left" }]}
                paragraphs={["Trixtern Technologies was founded by two ambitious individuals in their final year of college who shared a vision to build something extraordinary. Initially, we started as a freelance software development company, offering cutting-edge solutions to businesses. However, the challenges of the COVID-19 pandemic and economic recession made it difficult to sustain our services.",
                    "But we didn’t stop there. Instead of giving up, we decided to innovate and create something revolutionary. Today, we are working on pioneering projects in Artificial Intelligence (AI) and FinTech, aimed at reshaping education and financial systems globally. Stay tuned exciting developments are on the way!"]}
            />
        </main>
    )
}