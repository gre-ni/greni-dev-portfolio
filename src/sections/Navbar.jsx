import { NavLink } from "../ui/NavLink.jsx";

export const Navbar = () => {
    const links = ["Projects", "Skills", "Socials"];

    return (
        <div className="pt-10 pb-4 flex justify-end content-center">
            {/* <img src="/vectors/greni-logo-dark.svg" className="w-14 h-auto" /> */}
            <div className="flex items-end justify-end gap-8">
                {links.map((link) => (
                    <NavLink key={link} name={link} />
                ))}
                <div className="flex gap-3">
                    <img src="/icons/arrow_icon.svg" />
                    <a
                        href="https://design.greni.dev/"
                        className="no-underline text-base hover:text-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Design Portfolio
                    </a>
                </div>
            </div>
        </div>
    );
};
