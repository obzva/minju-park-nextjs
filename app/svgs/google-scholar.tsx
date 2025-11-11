type Props = {
  width?: number;
  colors?: string[];
};

export default function GoogleScholar({
  width = 20,
  colors = ["#666666", "#3D3D3D", "#d9d9d9", "#898989"],
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width}
      height={width}
    >
      <path fill={colors[0]} d="M256 411.12L0 202.667 256 0z" />
      <path fill={colors[1]} d="M256 411.12l256-208.453L256 0z" />
      <circle fill={colors[2]} cx="256" cy="362.667" r="149.333" />
      <path
        fill={colors[3]}
        d="M121.037 298.667c23.968-50.453 75.392-85.334 134.963-85.334s110.995 34.881 134.963 85.334H121.037z"
      />
    </svg>
  );
}
