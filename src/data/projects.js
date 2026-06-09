export const projects = [
    {
        id: 4,
        date: "06-2026",
        title: "Design Portfolio",
        description:
            "A portfolio website showcasing and dynamically filtering all of my visual design projects.",
        tags: ["Typescript", "React", "SQLite", "Flask"],
        image: "portfolio",
        links: {
            github: "https://github.com/gre-ni/design-portfolio",
            live: "https://design.greni.dev/",
        },
        featured: true,
        status: "done",
    },
    {
        id: 1,
        date: "04-2026",
        title: "Discord Tarot Bot",
        description:
            "A discord bot responding to !tarot command by drawing a random card. A\u00A0little fun divination trick for me and my friends.",
        tags: ["Python", "discord.py", "requests"],
        image: "tarot-bot",
        links: {
            github: "https://github.com/gre-ni/Tarot-Bot",
            live: "https://discord.com/oauth2/authorize?client_id=1488647188430065835&permissions=274877975552&integration_type=0&scope=bot",
        },
        featured: true,
        status: "done",
    },
    {
        id: 2,
        date: "03-2026",
        title: "Minesweeper",
        description:
            "A clone of the classic nostalgia game as you know it. Try to guess where mines are by counting and clicking carefully.",
        tags: ["Python", "tkinter"],
        image: "minesweeper",
        links: {
            github: "https://github.com/gre-ni/Minesweeper",
            live: null,
        },
        featured: true,
        status: "done",
    },
    {
        id: 3,
        date: "02-2026",
        title: "Python Learning",
        description:
            "Documentation of my learning journey - from basic loops to file handling, unit testing, and other key programming concepts.",
        tags: ["Python", "SQLite", "regex"],
        image: "python-learning",
        links: {
            github: "https://github.com/gre-ni/Python-Learning",
            live: null,
        },
        featured: true,
        status: "done",
    },
    {
        id: 6,
        date: null,
        title: "[wip] Book Stats",
        description:
            "An ongoing data project including scraping, cleaning and exploring reading-related statistics.",
        tags: ["pandas", "matplotlib", "SQL"],
        image: "book-club",
        links: {
            github: "https://github.com/gre-ni/sistersinbooks",
            live: null,
        },
        featured: true,
        status: "wip",
    },
    {
        id: 5,
        date: null,
        title: "[wip] Sisters in Books",
        description:
            "A Flask + React app keeping track of what we read in my book club + offers stats and members reviews.",
        tags: ["Typescript", "React", "Flask", "SQLite"],
        image: "sisters",
        links: {
            github: "https://github.com/gre-ni/bookstats",
            live: null,
        },
        featured: true,
        status: "wip",
    },
];
