import palettes from "nice-color-palettes/100.json";
import BoringAvatar from "boring-avatars";

const getRandomPaletteIndex = () => Math.floor(Math.random() * palettes.length);

const getRandomColorPalette = (): [string, string, string, string] =>
  palettes[getRandomPaletteIndex()] as [string, string, string, string];

type AvatarProps = {
  userId: string;
  size?: number;
  className?: string;
};

export const Avatar: React.FC<AvatarProps> = ({ userId, size, className }) => {
  return (
    <div className={className}>
      <BoringAvatar
        name={userId}
        size={size}
        colors={getRandomColorPalette()}
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
