import React from "react";

import Link from "next/link";

import { Item } from "@typed/DataTypes";
import { ItemContext } from "src/contexts/ItemContext";

interface GalleryItemProps {
  item: Item;
  children: React.ReactNode;
}

function GalleryItem({ item, children }: GalleryItemProps) {
  return (
    <ItemContext.Provider value={item}>
      <Link href={item.link}>
        <a
          aria-label={item.title}
          className="group flex flex-col overflow-hidden rounded-md border border-dark-400 bg-white ring-4 ring-transparent transition duration-100 ease-in-out hover:border-dark-300 focus:ring-beige-100"
        >
          {children}
        </a>
      </Link>
    </ItemContext.Provider>
  );
}

GalleryItem.Image = function GalleryItemImage({ children }) {
  return (
    <div className="relative h-36 overflow-hidden border-b border-dark-400 bg-transparent">
      {children}
    </div>
  );
};

GalleryItem.Description = function GalleryItemContent({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-1 flex-col justify-between group-hover:bg-geist-50">
      <div className="p-4">
        <div className="font-semibold text-dark-900 group-hover:text-dark-800">
          {title}
        </div>

        <div className="text-sm text-dark-700">{description}</div>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center" />
      </div>
    </div>
  );
};

export default GalleryItem;
