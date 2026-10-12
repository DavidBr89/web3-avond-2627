import React from "react";

interface AvatarProps {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

const Avatar = ({ url, alt, width, height }: AvatarProps) => {
  return (
    <img
      style={{ width: `${width}px`, height: `${height}px` }}
      src={url}
      alt={alt}
    />
  );
};

export default Avatar;
