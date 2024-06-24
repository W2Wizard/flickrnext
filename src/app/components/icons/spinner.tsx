//=============================================================================
// Copyright (c) 2024 - W2Wizard
// See README in the root of this project for more information.
//=============================================================================

interface SpinnerProps {
  size?: number;
}

//=============================================================================s

export default function Spinner({ size = 24 }: SpinnerProps) {
  return (
    <svg
			className="spinner"
      width={size}
      height={size}
      stroke="var(--wui-primary)"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3"></circle>
    </svg>
  );
}
