"use client";

import { FormEvent, useEffect, useState, useTransition } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";

function Document({ id }: { id: string }) {
    const [data, loading, error] = useDocumentData(doc(db, "rooms", id));
    const [input, setInput] = useState("");
    const [isUpdating, startTransition] = useTransition();

    useEffect(() => {
        if (data) {
            setInput(data.title);
        }
    })

    const updateTitle = (e: FormEvent) => {
        e.preventDefault();

        if (input.trim()) {
            startTransition(async () => {
                await updateDoc(doc(db, "rooms", id), {
                    title: input,
                });
            });
        }
    };
    return (
        <div>
            <div>
                <form onSubmit={updateTitle}>
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
