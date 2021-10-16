import React from "react";

import { Tag } from "@tryghost/content-api";

function getTagStyle(tag: Tag & { accent_color: string }) {
  const { accent_color } = tag;

  const style: React.CSSProperties = {
    color: accent_color,
    backgroundColor: `${accent_color}0D`,
  };

  return style;
}

export { getTagStyle };
