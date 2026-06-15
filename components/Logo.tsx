import Image from "next/image";

type Props = {
  className?: string;
  height?: number;
};

export function Logo({ className, height = 44 }: Props) {
  const width = Math.round(height * (586 / 503));

  return (
    <Image
      src="/logo-medness.svg"
      alt="MEDness Co."
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
