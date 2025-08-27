"use client";

import { FormEvent, useEffect, useState, useTransition } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";

function Document({ id }: { id: string }) {
    const [data, loading, error] = useDocumentData(doc(db, "documents", id));
    const [input, setInput] = useState("");
    const [isUpdating, startTransition] = useTransition();
    const isOwner = useOwner(); // Custom hook to check if the user is the owner

    useEffect(() => {
        if (data) {
            setInput(data.title);
        }
    }, [data]);

    const updateTitle = (e: FormEvent) => {
        e.preventDefault();

        if (input.trim()) {
            startTransition(async () => {
                await updateDoc(doc(db, "documents", id), {
                    title: input,
                });
            });
        }
    };
    return (
        <div>
            <div className="flex max-w-6xl mx-auto pb-5">
                <form className="flex flex-1 space-x-2" onSubmit={updateTitle}>
                    {/* update title */}
                    <Input value={input} onChange={(e) => setInput(e.target.value)} />

                    <Button disabled={isUpdating} type="submit">
                        {isUpdating ? "Updating..." : "Update"}
                    </Button>
                    {/* IF */}
                    {/* isOwner && InviteUser, deleteDocument */}
                </form>
            </div>

            <div>
                {/* ManageUsers */}

                {/* Avatars */}
            </div>

            {/* Collaborative */}
        </div>
    );
}
export default Document;
