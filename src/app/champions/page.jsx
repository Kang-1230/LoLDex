"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const rotationChampions = async () => {
      try {
        const response = await fetch("/api/rotation");
        if (!response.ok) {
          throw new Error("Failed to fetch version");
        }
        const data = await response.json();
        console.log("Response status:", response.status);

        console.log(data);
      } catch (error) {
        console.error("Error rotationChampions:", error);
      }
    };
    rotationChampions();
  }, []);

  // useEffect(() => {
  //   const version = async () => {
  //     try {
  //       const response = await fetch("/api/champions");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch version");
  //       }
  //       const data = await response.json();
  //       console.log("version : ", data);
  //     } catch (error) {
  //       console.error("Error fetching version:", error);
  //     }
  //   };

  //   version();

  //   const championRotationFunction = async () => {
  //     try {
  //       const response = await fetch("/api/rotation");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch rotations");
  //       }
  //       const data = await response.json();
  //       console.log(data.freeChampionIds);
  //       return data;
  //     } catch (error) {
  //       console.error("Error fetching rotations:", error);
  //     }
  //   };
  //   const rotationIds = await championRotationFunction();
  //   const resultRotaionIds = await rotationIds.freeChampionIds
  //     ? Object.values(rotationIds.freeChampionIds)
  //     : [];
  //   console.log(resultRotaionIds);
  // }, []);

  return (
    <>
      <div className=""></div>
    </>
  );
}
