import { Label } from "./Label";

export const SkillTag = ({ name, type }) => {
    return (
        <div className="flex flex-col gap-2 items-center w-fit">
            <Label name={name} type={type || "highlight"} />
            <svg
                viewBox="0 0 100 100"
                width="6"
                height="6"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="50" cy="50" r="50" className="fill-dark" />
            </svg>
        </div>
    );
};
