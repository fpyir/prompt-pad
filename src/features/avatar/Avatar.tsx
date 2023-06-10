import palettes from "nice-color-palettes/100.json";
import BoringAvatar from "boring-avatars";

const getRandomPaletteIndex = () => Math.floor(Math.random() * palettes.length);

const getRandomColorPalette = (): [string, string, string, string] =>
  palettes[getRandomPaletteIndex()] as [string, string, string, string];

type AvatarProps = {
  userId: string;
  size?: number;
};

const Avatar: React.FC<AvatarProps> = ({ userId, size }) => {
  return (
    <BoringAvatar name={userId} size={size} colors={getRandomColorPalette()} />
  );
};
