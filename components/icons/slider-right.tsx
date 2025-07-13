interface ArrowRightProps {
  className?: string;
  color?: string;
}

export default function SliderArrowRight({
  className = "",
  color,
}: ArrowRightProps) {
  return (
    <svg
      width="53"
      height="15"
      viewBox="0 0 53 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M45 14L52 7.47296M52 7.47296L45 1M52 7.47296L1 7.47296"
        stroke={color || "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
