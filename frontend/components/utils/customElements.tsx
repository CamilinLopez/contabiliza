import { CustomLinkProps } from "@/types/customElements";
import { FC } from "react";
import Link from "next/link";

export const CustomLink: FC<CustomLinkProps> = ({
  href,
  as,
  className,
  children,
  ...props
}) => (
  <Link
    className={`${className} bg-custom-naranja text-[14px] font-ember text-custom-negro font-[600] rounded-full h-[35px] w-[213px] flex items-center justify-center hover:bg-custom-naranja/85`}
    href={href}
    as={as}
    {...props}
    
  >
    {children}
  </Link>
);
