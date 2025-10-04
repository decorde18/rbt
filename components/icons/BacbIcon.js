import Image from "next/image";

export function BacbIcon({ size = 20 }) {
  return (
    <Image
      src='/bacb-logo.png'
      alt='BACB'
      width={size}
      height={size}
      style={{ objectFit: "contain" }}
    />
  );
}
