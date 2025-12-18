export const ArrowRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="60"
      viewBox="0 0 12 24"
    >
      <defs>
        <path
          id="weuiArrowOutlined0"
          fill="#F9624E"
          d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"
        />
      </defs>
      <use
        fill-rule="evenodd"
        href="#weuiArrowOutlined0"
        transform="rotate(-180 5.02 9.505)"
      />
    </svg>
  );
};

export const ArrowLeft = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="60"
      className={className}
      viewBox="0 0 12 24"
    >
      <defs>
        <path
          id="weuiArrowOutlined0"
          fill="#F9624E"
          d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"
        />
      </defs>
      <use fillRule="evenodd" href="#weuiArrowOutlined0" />
    </svg>
  );
};

export const Portfolio = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-[70px] w-[70px]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#F9624E"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 4v1m0 10v5m8-5h-5m-4 0H4m0-4h16a2 2 0 002-2V8a2 2 0 00-2-2H4a2 2 0 00-2 2v2a2 2 0 002 2z"
      />
    </svg>
  );
};

export const Shopping = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#F9624E"
      className="w-[70px] h-[70px] text-gray-700"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6h11.4M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
      />
    </svg>
  );
};

export const Instagram = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="text-[#F9624E] group-hover:text-white transition-colors"
    >
      <path fill="none" d="m12.593 23.258l-.011.002l-.071.035..." />
      <path
        fill="currentColor"
        d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm-4 5a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4a2 2 0 0 1 0-4m4.5-3.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
      />
    </svg>
  );
};

export const Facebook = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="transition-colors"
    >
      <path
        fill="currentColor"
        d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
      />
    </svg>
  );
};

export const Linkedin = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="transition-colors"
    >
      <path
        fill="currentColor"
        d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
      />
    </svg>
  );
};

export const GitHub = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="transition-colors"
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path
          stroke-dasharray="32"
          stroke-dashoffset="32"
          d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.7s"
            values="32;0"
          />
        </path>

        <path
          stroke-dasharray="10"
          stroke-dashoffset="10"
          d="M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.63 -1.09 -1.66 -2.31 -2.31"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.8s"
            dur="0.2s"
            values="10;0"
          />
        </path>
      </g>
    </svg>
  );
};
