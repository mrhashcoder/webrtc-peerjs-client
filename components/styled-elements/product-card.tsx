"use client";
import React from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { AccessibilityIcon, CheckCircledIcon } from "@radix-ui/react-icons";
import { Product } from "@/types";
import { LEVEL } from "@/config/enums";

function ProductCard(props: any) {
  let productData: Product = props.productData;

  return (
    <div className="rounded-lg flex flex-col max-w-xs md:max-w-sm shadow-2xl border-2 border-primary p-2 mt-8 mx-4 lg:mx-4">
      <div className="w-2xl flex justify-center items-center">
        <img
          src={productData.titleImage}
          className="max-h-48 rounded-md object-cover"
        />
      </div>
      <div className="text-start w-2xl">
        <div className="lg:p-4">
          <div className="text-primary text-lg font-bold">
            {productData.title}
          </div>
          <div>{productData.descriptionSmall}</div>
        </div>
        <div className="flex justify-center mt-2 text-sm">
          <div className="flex items-center mx-2">
            <AccessibilityIcon className="mx-2 size-6 stroke-primary" />
            <div>{productData.level}</div>
          </div>
          <div className="flex items-center mx-2">
            {productData.isReportAvailable ? (
              <>
                <CheckCircledIcon className="mx-2 size-6 stroke-primary" />
                <div>Report Included</div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="flex flex-wrap p-2 justify-center">
          {productData.tags && productData.tags.length > 0 ? (
            <>
              {productData.tags.map((tag) => (
                <Badge variant="outline" className="mx-1 mt-1">
                  {tag}
                </Badge>
              ))}
            </>
          ) : (
            <></>
          )}
          <Badge variant="outline" className="mx-1 mt-1">
            React
          </Badge>
        </div>
        <div className="stats flex flex-reverse lg:justify-between justify-center px-8">
          <div className="text-center p-2 m-2">
            <button
              className={`w-[7rem] ${cn(buttonVariants({ size: "lg" }))}`}
            >
              Know More
            </button>
          </div>
          <div className="text-center p-2 m-2">
            <button
              className={`w-[7rem] ${cn(buttonVariants({ size: "lg" }))}`}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
