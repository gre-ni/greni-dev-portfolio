import { SkillsDesc } from "./SkillsDesc";
import { AIDesc } from "./AIDesc";
import { SkillsIllustration } from "./SkillsIllustration";

export const Skills = () => {
    return (
        <div id="skills" className="grid grid-cols-3 gap-6 pt-32">
            <div className="col-span-1 flex flex-col gap-12">
                <SkillsDesc />
                <AIDesc />
            </div>
            <div className="ml-12 mt-4 col-span-2">
                <SkillsIllustration />
            </div>
        </div>
    );
};
