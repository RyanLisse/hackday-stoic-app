import React from 'react';

export type PhilosopherType = "Zeno" | "Marcus Aurelius" | "Johan Cruijff" | "Yoda" | "Groot";

interface DropDownProps {
    philosopher: PhilosopherType;
    setPhilosopher: (philosopher: PhilosopherType) => void;
}

const DropDown: React.FC<DropDownProps> = ({philosopher, setPhilosopher}) => {
    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPhilosopher(event.target.value as PhilosopherType);
    };

    return (
        <select value={philosopher} onChange={handleSelect}
                className={"inline-flex w-1/3 my-4 justify-between items-center rounded-md border border-gray-300" +
                    " bg-white px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"}>
            <option value="Zeno">Zeno</option>
            <option value="Marcus Aurelius">Marcus Aurelius</option>
            <option value="Johan Cruijff">Johan Cruijff</option>
            <option value="Yoda">Yoda</option>
            <option value="Groot">Groot</option>
        </select>
    );
};

export default DropDown;
