import { icons, LucideIcon as LucideIconType } from 'lucide-react';

type IconProps = {
  name: keyof typeof icons;
  color?: string;
  size?: string | number;
};

const Icon: React.FC<IconProps> = ({ name, color, size }) => {
  const LucideIcon: LucideIconType = icons[name];
  
  if (!LucideIcon) {
    console.error(`Icon ${name} not found in lucide-react`);
    return null;
  }
  
  return <LucideIcon color={color} size={size} />;
};

export default Icon;