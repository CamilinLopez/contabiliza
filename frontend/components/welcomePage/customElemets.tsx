import { CustomButtonProps } from "@/types/customElements";
import { FC } from "react";

export const ArrowLeft: FC<CustomButtonProps> = ({
  onClick,
  className,
  name,
}) => (
  <button onClick={onClick} className={`${className}`} name={name}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className="w-6 h-6 text-custom-gris hover:text-custom-naranja"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  </button>
);

export const ArrowRight: FC<CustomButtonProps> = ({
  name,
  onClick,
  className,
}) => (
  <button className={`${className}`} onClick={onClick} name={name}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className="w-6 h-6 text-custom-gris hover:text-custom-naranja "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  </button>
);

export const MagnificButton: FC<CustomButtonProps> = ({
  name,
  onClick,
  className,
}) => (
  <button className={`${className}`} onClick={onClick} name={name}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className="w-5 h-5 text-custom-gris hover:text-custom-naranja"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  </button>
);

export const CloseButton: FC<CustomButtonProps> = ({
  name,
  onClick,
  className,
}) => (
  <button name={name} onClick={onClick} className={`${className}`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.0}
      stroke="currentColor"
      className="w-7 h-7 text-custom-gris hover:text-custom-naranja "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  </button>
);
