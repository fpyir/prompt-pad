import palettes from "nice-color-palettes/100.json";
import BoringAvatar from "boring-avatars";
import { useStorage } from "@/utils/use_storage";
import { useEffect } from "react";

const getRandomPaletteIndex = () => Math.floor(Math.random() * palettes.length);

const getRandomColorPalette = (): [string, string, string, string] =>
  palettes[getRandomPaletteIndex()] as [string, string, string, string];

type AvatarProps = {
  userId: string;
  size?: number;
  className?: string;
};

export const Avatar: React.FC<AvatarProps> = ({ userId, size, className }) => {
  const {
    data: colors,
    setData,
    isFetched,
  } = useStorage<string[]>(`avatar-${userId}`);

  useEffect(() => {
    if (!colors && isFetched) {
      setData(getRandomColorPalette());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colors, isFetched]);

  return (
    <div className={className}>
      <BoringAvatar
        variant="beam"
        name={userId}
        size={size}
        colors={colors ?? []}
      />
    </div>
  );
};

export const RandomAvatar: React.FC<{ size?: number; className?: string }> = ({
  size,
  className,
}) => {
  return (
    <div className={className}>
      <BoringAvatar
        name={Math.random().toString(36).substring(2, 8)}
        size={size}
        colors={getRandomColorPalette()}
        variant="beam"
      />
    </div>
  );
};
