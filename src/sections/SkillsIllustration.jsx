import { SkillTag } from "../ui/SkillTag";

export const SkillsIllustration = () => {
    return (
        <div className="relative w-full h-fit">
            {/* Labels */}
            <h3 className="absolute left-[50%] top-[27%] -translate-x-1/2">
                Frontend
            </h3>
            <h3 className="absolute left-[27%] top-[71%] -translate-y-1/2 -translate-x-1/2">
                Backend
            </h3>
            <h3 className="absolute left-[69%] top-[71%] -translate-y-1/2">
                Data
            </h3>

            {/* Backend */}
            <div className="absolute left-[54%] top-[65%] -translate-x-1/2">
                <SkillTag name="Python" />
            </div>
            <div className="absolute left-[5%] top-[60%] -translate-x-1/2">
                <SkillTag name="Express.js" />
            </div>
            <div className="absolute left-[15%] top-[50%] -translate-x-1/2">
                <SkillTag name="Flask" />
            </div>
            <div className="absolute left-[39%] top-[44%] -translate-x-1/2">
                <SkillTag name="Typescript" />
            </div>
            <div className="absolute left-[37%] top-[80%] -translate-x-1/2">
                <SkillTag name="SQLite" />
            </div>
            <div className="absolute left-[26%] top-[88%] -translate-x-1/2">
                <SkillTag name="PostgreSQL" />
            </div>

            {/* Frontend */}
            <div className="absolute left-[47%] top-[8%] -translate-x-1/2">
                <SkillTag name="React.js" />
            </div>
            <div className="absolute left-[62%] top-[15%] -translate-x-1/2">
                <SkillTag name="Tailwind" />
            </div>
            <div className="absolute left-[28%] top-[31%] -translate-x-1/2">
                <SkillTag name="Javascript" />
            </div>

            {/* Data */}
            <div className="absolute left-[85%] top-[82%] -translate-x-1/2">
                <SkillTag name="pandas" />
            </div>
            <div className="absolute left-[88%] top-[52%] -translate-x-1/2">
                <SkillTag name="matplotlib" />
            </div>
            <div className="absolute left-[70%] top-[86%] -translate-x-1/2">
                <SkillTag name="SQL" />
            </div>

            <div className="absolute left-[22%] top-[0%] -translate-x-1/2">
                <SkillTag name="Figma" type="inactive" />
            </div>
            <div className="absolute left-[10%] top-[10%] -translate-x-1/2">
                <SkillTag name="Playwright" type="inactive" />
            </div>
            <div className="absolute left-[90%] top-[24%] -translate-x-1/2">
                <SkillTag name="Postman" type="inactive" />
            </div>

            {/* Background */}
            <div className="w-full h-auto group">
                <svg
                    className="w-full h-auto"
                    viewBox="0 0 606 573"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="434.5"
                        cy="401.5"
                        r="170.75"
                        strokeWidth="1.8"
                        className="fill-transparent stroke-grey hover:fill-white/35 hover:stroke-highlight"
                    />
                    <circle
                        cx="303.5"
                        cy="171.5"
                        r="170.75"
                        strokeWidth="1.8"
                        className="fill-transparent stroke-grey hover:fill-white/35 hover:stroke-highlight"
                    />
                    <circle
                        cx="171.5"
                        cy="401.5"
                        r="170.75"
                        strokeWidth="1.8"
                        className="fill-transparent stroke-grey hover:fill-white/35 hover:stroke-highlight"
                    />
                </svg>
            </div>
        </div>
    );
};
