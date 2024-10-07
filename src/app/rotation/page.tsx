"use client";

import { Champions } from "@/types/Champion";
import { useEffect, useState } from "react";

export default function Page() {
  const [rotations, setRotations] = useState<Champions[]>([]);

  useEffect(() => {
    const rotationChampions = async () => {
      try {
        const response = await fetch("/api/rotation");
        if (!response.ok) {
          throw new Error("Failed to fetch version");
        }
        const data = await response.json();
        setRotations(data);

        console.log("Response status:", response.status);

        console.log(data);
      } catch (error) {
        console.error("Error rotationChampions:", error);
      }
    };
    rotationChampions();
  }, []);

  return (
    <div className="">
      {rotations.map((rotation) => {
        return <div key={rotation.id}>{rotation.name}</div>;
      })}
    </div>
  );
}
