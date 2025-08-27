"use client";
import {
    RoomProvider as RoomProviderWrapper,
    ClientSideSuspense,
  } from "@liveblocks/react/suspense";

function RoomProvider({roomId, children}: {roomId: string, children: React.ReactNode}) {
  return (
    <RoomProviderWrapper
        id={roomId}
        initialPresence={{ cursor: null }}
        initialStorage={{}}
    >
        <ClientSideSuspense fallback={<LoadingSpinner/>}>

        {children}
        </ClientSideSuspense>
    </RoomProviderWrapper>
  )
}
export default RoomProvider