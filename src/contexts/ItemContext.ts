import React from "react";

import { Item } from "@typed/DataTypes";

export const defaultItem: Item = {
  title: "Blog Post",
  link: "/",
  img: "/",
  description: "My Blog Post",
  id: "1",
  tags: [{ title: "Startups", link: "", className: "" }],
  createdAt: "2020-12-29T23:00:00.000Z",
};

export const ItemContext = React.createContext<Item>(defaultItem);

export function useItemContext() {
  return React.useContext(ItemContext);
}
