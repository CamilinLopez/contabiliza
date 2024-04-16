import React, { FC, MouseEvent, AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

export interface CustomButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  // children: React.ReactNode;
  className?: string;
  name: string;
}

export interface CustomLinkProps {
  href: string;
  as?: string;
  className?: string;
  children: ReactNode;
}
