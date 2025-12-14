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

