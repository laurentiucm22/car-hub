"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { CustomeButtom } from ".";
import { updateSearchParans } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParans("limit", `${newLimit}`);
    router.push(newPathName);
  };

  return (
    <div className="w-full flex justify-center gap-5 mt-10">
      {!isNext && (
        <CustomeButtom
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white hover:bg-blue-800 transition-color ease-in-out duration-300"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
