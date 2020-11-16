import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Item } from "src/types";

interface GalleryItemProps {
  item: Item;
}
function GalleryItem({
  item: { img, link, name, description },
}: GalleryItemProps) {
  return (
    <Link href={link}>
      <a
        aria-label={name}
        className="flex flex-col overflow-hidden transition-transform duration-100 ease-in-out transform border rounded-md shadow border-dark-400 bg-beige-10 group hover:border-dark-300"
      >
        <div className="relative overflow-hidden bg-transparent border-b border-dark-400 pb-2/3">
          <Image
            src={img}
            layout="fill"
            className="absolute object-contain w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between flex-1 group-hover:bg-geist-50">
          <div className="p-4 pb-0">
            <div className="font-semibold text-dark-900 group-hover:text-dark-800">
              {name}
            </div>
            <div className="text-sm text-dark-700">{description}</div>
          </div>
          <div className="flex justify-between p-4">
            <div className="flex items-center" />
          </div>
        </div>
      </a>
    </Link>
  );
}

export default GalleryItem;
