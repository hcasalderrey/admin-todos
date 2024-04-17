"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function ProfilePage() {

    const {data:session} = useSession()
    useEffect(() => {
       console.log("Client Side")
    }, [])
    
  return (
    <div>
      <h1>Page Profile</h1>
      <hr />
      <div className="flex flex-col gap-2">
        <span>{session?.user?.name ?? 'No Name'}</span>
        <span>{session?.user?.email ?? 'No mail'}</span>
        <span>{session?.user?.image ?? 'No image'}</span>
        <span>{session?.user?.id ?? 'No UUID'}</span>
        <span className="capitalize">{session?.user?.roles?.join(', ') ?? ['No roles']}</span>


      </div>
    </div>
  );
}