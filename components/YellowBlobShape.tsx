interface YellowBlobShapeProps {
  className?: string;
  color?: string;
}

export default function YellowBlobShape({ className = '', color = '#FECB0F' }: YellowBlobShapeProps) {
  return (
    <svg
      viewBox="0 0 260 290"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M62 4
           C 40 2, 18 14, 10 38
           C 2 62, 4 90, 6 116
           C 8 148, 2 178, 4 210
           C 6 240, 14 266, 40 276
           C 68 287, 100 282, 130 284
           C 158 286, 188 290, 212 278
           C 236 266, 244 240, 240 214
           C 236 190, 218 172, 202 154
           C 190 140, 182 126, 190 110
           C 200 92, 222 80, 232 60
           C 242 40, 236 16, 214 8
           C 190 -2, 160 6, 134 6
           C 108 6, 84 6, 62 4 Z"
        fill={color}
      />
    </svg>
  );
}
