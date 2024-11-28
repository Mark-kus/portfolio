import SVGPersonalLogo from "./svgs/SVGPersonalLogo";

export default function Navigation() {
    return (
        <nav className="flex justify-between md:justify-end items-center p-3 bg-slate-800">
            <a className="md:ml-20 md:absolute md:left-0" href="/">
                <SVGPersonalLogo />
            </a>
            <div className="md:hidden">
                <button aria-label="Menu">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"></path>
                    </svg>
                </button>
            </div>
            <div className="hidden md:block">
                <ul className="flex list-none gap-3 items-center">
                    <li className="py-2 px-4 rounded-3xl">
                        <a data-section="#landing" href="/#">Home</a>
                    </li>
                    <li className="py-2 px-4 rounded-3xl">
                        <a data-section="#projects" href="/#">Projects</a>
                    </li>
                    <li className="py-2 px-4 rounded-3xl">
                        <a data-section="#contact" href="/#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="hidden md:block mr-20 ml-10">
                <ul className="flex list-none gap-3 items-center">
                    <li className="py-2 px-4 rounded-3xl">
                        <select className="bg-slate-800 text-white border border-gray-600 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="en">
                            <option value="en">English</option>
                            <option value="es">Español</option>
                        </select>
                    </li>
                    <button className="p-2 rounded-full transition-all hover:ring-2 hover:ring-gray-300 bg-crema">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                        </svg>
                    </button>
                </ul>
            </div>
        </nav>
    )
}