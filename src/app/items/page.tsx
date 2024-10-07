import { Datum } from "@/types/Item";
import { getItemList } from "@/utils/serverApi";
import Image from "next/image";

export default async function Page() {
  const ItemList = await getItemList();
  console.log("아이템 리스트 다툼 :", ItemList.itemData);
  return (
    <>
      <div className="">
        {ItemList.itemData.map((item: Datum) => {
          return (
            <div key={item.image.full}>
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
                alt={item.name}
                width={100}
                height={100}
                priority
              />
              <li>{item.name}</li>
            </div>
          );
        })}
      </div>
    </>
  );
}

// export default async function Page() {
//   const championList: Champions[] = await getChampionList();
//   // console.log("리스트 : ", championList);
//   return (
//     <>
//       <div className="">
//         {championList.map((champion: Champions) => {
//           return (
//             <div key={champion.id}>
//               <Image
//                 src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.image.full}`}
//                 alt={champion.name}
//                 width={100}
//                 height={100}
//               />
//               <li>{champion.name}</li>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }
