import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import SkillCard from "./SkillCard";

export default function SectionSkills() {
  return (
    <section className="py-28 bg-skill">
      <div className="container mx-auto">
        <SectionTitle title="Skills" />
        <SectionParagraph>Beberapa Kemampuan Saya</SectionParagraph>
        <div className="flex -mx-4 mt-20 flex-wrap">
          <div className="w-4/12 px-4 pb-8">
            <SkillCard
              name="Javascript"
              image="/javascript.svg"
              level="Lanjutan"
              imageClassName="rounded-full h-16"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard
              name="React"
              image="/react.svg"
              level="Menengah"
              imageClassName="h-16"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard
              name="NodeJs"
              image="/nodejs.svg"
              level="Menengah"
              imageClassName="h-16"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard
              name="Javascript"
              image="/javascript.svg"
              level="Lanjutan"
              imageClassName="rounded-full h-16"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard
              name="React"
              image="/react.svg"
              level="Menengah"
              imageClassName="h-16"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard
              name="NodeJs"
              image="/nodejs.svg"
              level="Menengah"
              imageClassName="h-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
