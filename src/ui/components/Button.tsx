"use client";
import { log } from "console";
import Link from "next/link";
import React from "react";

type Props = {
  variant: "none" | "primary" | "secondary" | "outline" | "danger";
  href: string;
  children: React.ReactNode;
};

export default function Button({ variant, href, children }: Props) {
  return (
    <Link href={href} className={`${variant}  text-md `}>
      {children}
    </Link>
  );
}
