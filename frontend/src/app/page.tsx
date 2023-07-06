"use client"
import type {NextPage} from "next";
import {useRef, useState} from "react";
import DropDown, {PhilosopherType} from "@/app/components/DropDown";
import Header from "@/app/components/Header";
import LoadingDots from "@/app/components/LoadingDots";

const Home: NextPage = () => {
    const [loading, setLoading] = useState(false);
    const [question, setQuestion] = useState("");
    const [philosopher, setPhilosopher] = useState<PhilosopherType>("Zeno");
    const [generatedAnswer, setGeneratedAnswer] = useState<String>("");

    const questionRef = useRef<null | HTMLDivElement>(null);

    const generateAnswer = async (e: any) => {
        e.preventDefault();
        setGeneratedAnswer("");
        setLoading(true);

        const response = await fetch("http://localhost:8080/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                philosopher,
                prompt: question,
            }),
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.text();
        setGeneratedAnswer(data);
        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center justify-center py-2 min-h-screen">
            <Header/>
            <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4  sm:mt-20">
                <h1 className="sm:text-6xl text-4xl max-w-[708px] font-bold text-slate-900">
                    Ask a Stoic
                </h1>
                <p className="text-slate-500 mt-5">Ask any question, and receive an answer inspired by the selected
                    philosopher.</p>
                <div className="max-w-xl w-full">
                    <textarea
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        rows={4}
                        className="w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-black focus:ring-black my-5"
                        placeholder=" e.g. What is the meaning of life?"
                    />
                    <DropDown philosopher={philosopher}
                              setPhilosopher={(newPhilosopher) => setPhilosopher(newPhilosopher)}/>
                    {generatedAnswer && (
                        <div ref={questionRef}>
                            <h2 className="sm:text-4xl text-3xl font-bold mt-4 text-slate-900 mx-auto">
                                The answer
                            </h2>
                            <p className="text-slate-500 mt-5">{generatedAnswer}</p>
                        </div>
                    )}

                    {!loading && (
                        <button
                            className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
                            onClick={(e) => generateAnswer(e)}
                        >
                            Ask a Stoic
                        </button>
                    )}
                    {loading && (
                        <button
                            className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
                            disabled
                        >
                            <LoadingDots color="white" size="large"/>
                        </button>
                    )}

                </div>
            </main>
        </div>
    );
};

export default Home;
