import { SkillsDesc } from "./SkillsDesc";
import { AIDesc } from "./AIDesc";
import { SkillsIllustration } from "./SkillsIllustration";

export const Skills = () => {
    return (
        <div
            id="skills"
            className="flex flex-col lg:grid lg:grid-cols-3 gap-6 pt-32"
        >
            <div className="lg:col-span-1 flex flex-col gap-12">
                <SkillsDesc />
                <AIDesc />
            </div>
            <div className="md:ml-12 mt-4 lg:col-span-2">
                <SkillsIllustration />
            </div>
        </div>
    );
};
