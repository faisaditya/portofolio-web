import Item from "./ProjectItem";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function Project() {
    return (
        <>
            <section className="py-28" id="project">
                <div className="container mx-auto px-10 2xl:px-0">
                    <SectionTitle>Project</SectionTitle>
                    <SectionParagraph>Project Saya</SectionParagraph>
                    <div className="flex -mx-4 mt-20 flex-wrap">
                        <div className="md:w-6/12 w-full px-4 pb-8 md:pb-0">
                            <Item
                                name="Cms Blog"
                                description="Homepage Cms Blog"
                                image="/cms-blog.png"
                                link="https://faisadityacms.vercel.app/"
                            />
                        </div>
                        <div className="md:w-6/12 w-full px-4 pb-8 md:pb-0">
                            <Item
                                name="Amazon Clone"
                                description="Landing Page Amazon"
                                image="/amazon-clone.png"
                                link="https://clone-d40e4.web.app/"
                            />
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}