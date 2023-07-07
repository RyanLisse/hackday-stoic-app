import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-2 sm:px-4 px-2">
            <Link href="/" className="flex space-x-3">
                <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
                    Ask a Stoic
                </h1>
            </Link>

        </header>
    );
}
