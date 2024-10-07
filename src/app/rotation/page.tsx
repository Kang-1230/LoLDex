"use client";

import { ChampionRotation } from "@/types/ChampionRotation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [rotations, setRotations] =
    useState<ChampionRotation["filteredChampions"]>();
  useEffect(() => {
    const rotationChampions = async () => {
      try {
        const response = await fetch("/api/rotation");
        if (!response.ok) {
          throw new Error("Failed to fetch version");
        }
        const data: ChampionRotation = await response.json();
        setRotations(data.filteredChampions);
      } catch (error) {
        console.error("Error rotationChampions:", error);
      }
    };
    rotationChampions();
  }, []);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-6">Rotation</h1>
      <div className="px-60 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-4 p-4 ">
        {rotations?.map((rotation) => {
          return (
            <>
              <Link
                href={`/champions/${rotation.id}`}
                key={rotation.name}
                className="w-36 h-48 border border-gray-300 flex flex-col items-center justify-center rounded-lg p-2"
              >
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${rotation.image.full}`}
                  alt={rotation.name}
                  width={100}
                  height={100}
                />
                <li className="mt-2 text-center list-none">{rotation.name}</li>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}
