import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {
  height?: number;
  width?: number;
};

export default function Logo({
  height = 50,
  width = 50,
}: Props): React.ReactElement {
  return (
    <>
      <Link href="/" className="flex items-center">
        <Image
          alt="Imagen del logo de la app"
          src="/logo.png"
          height={height}
          width={width}
        ></Image>
        <h2 className="text-dark-gray text-3xl ">Taskify</h2>
      </Link>
    </>
  );
}
