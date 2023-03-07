import Image from "next/image";
import { LargeImage } from "./../../context/LargeImage";
import { useContext } from "react";

export default function PlaceImage({ place }) {
  const isLarge = useContext(LargeImage).isLarge;
  const imageSize = isLarge ? 150 : 100;

  return (
    <Image
      src={`/assets/img/${place.imageId}.jpg`}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
