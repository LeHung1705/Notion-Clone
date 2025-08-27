"use client";

import React from "react";
import Document from "@/components/Document"; // nhớ import component Document

export default function DocumentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params); // unwrap Promise params

  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <Document id={id} />
    </div>
  );
}
