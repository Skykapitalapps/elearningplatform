// Skykapital mark — a four-pointed concave star.
// Uses currentColor so it inherits text color; size via className (e.g. h-8 w-8).
export default function Logo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      role="img"
      aria-label="Skykapital"
    >
      <path d="M2 2 Q50 30 98 2 Q70 50 98 98 Q50 70 2 98 Q30 50 2 2 Z" />
    </svg>
  );
}
