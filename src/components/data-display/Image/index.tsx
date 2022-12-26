import type { ImageProps } from "next/image";
import NextImage from "next/image";

export const Image = ({ ...rest }: ImageProps) => <NextImage {...rest} />;
