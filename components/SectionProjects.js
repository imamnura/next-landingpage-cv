import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import ProjectItem from "./ProjectItem";

export default function SectionProjects() {
  return (
    <section className="py-28">
      <div className="container mx-auto">
        <SectionTitle title="Projects" />
        <SectionParagraph>Beberapa proyek bikinan saya</SectionParagraph>
        <div className="flex -mx-4 mt-20 flex-wrap">
          <div className="w-6/12 px-4 p-8">
            <ProjectItem
              name="Hansen"
              description="Eksplorasi landaing page"
              image="/hasten.png"
            />
          </div>
          <div className="w-6/12 px-4 p-8">
            <ProjectItem
              name="Resource"
              description="Eksplorasi resource page"
              image="/resources.png"
            />
          </div>
          <div className="w-6/12 px-4 p-8">
            <ProjectItem
              name="Resource"
              description="Eksplorasi resource page"
              image="/resources.png"
            />
          </div>
          <div className="w-6/12 px-4 p-8">
            <ProjectItem
              name="Hansen"
              description="Eksplorasi landaing page"
              image="/hasten.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
