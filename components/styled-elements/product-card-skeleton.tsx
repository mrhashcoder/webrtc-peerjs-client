import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function ProductCardSkeleton() {
  return (
    <Skeleton className="rounded-lg flex w-[320px] lg:w-[382px] flex-col shadow-2xl border-2 border-primary p-2 mt-8 mx-4 lg:mx-4">
      <div className="mx-auto">
        <Skeleton className="h-48 lg:w-[364px] w-[300px] rounded-md"></Skeleton>
      </div>
      <div className="text-start w-2xl mt-1">
        <div className="lg:p-4">
          <Skeleton className="w-full h-8 text-primary text-lg font-bold"></Skeleton>
          <Skeleton className="w-full h-20 text-primary text-lg font-bold mt-2"></Skeleton>
        </div>
        <div className="flex justify-center mt-2 text-sm">
          <Skeleton className="h-8 w-[120px] flex items-center mx-2"></Skeleton>
          <Skeleton className="h-8 w-[120px] flex items-center mx-2"></Skeleton>
        </div>

        <Skeleton className="h-16 flex flex-wrap p-2 justify-center mt-2"></Skeleton>
        <div className="stats flex flex-reverse lg:justify-between justify-center px-8">
          <Skeleton className="w-[7rem] h-12 text-center p-2 m-2"></Skeleton>
          <Skeleton className="w-[7rem] h-12 text-center p-2 m-2"></Skeleton>
        </div>
      </div>
    </Skeleton>
  );
}

export default ProductCardSkeleton;
