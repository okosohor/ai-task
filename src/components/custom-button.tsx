import { Icons } from '@/types/Icons';
import { Button } from '@mui/material';
import Image from 'next/image';

interface Props {
  text: string;
  disabled?: boolean;
  type: 'primary' | 'secondary'
  iconName?: Icons;
  handleClick: () => void
}

export default function CustomButton({ text, disabled = false, type, iconName, handleClick }: Props) {
  return (
    <Button 
      onClick={handleClick}
      disabled={disabled}
      variant="contained"
      style={{
        backgroundColor: disabled ? '#AEAFB1' : (type === 'primary' ? '#3B5AAE' : '#EEF0F5'),
        color: type === 'primary' ? '#FFF' : '#254699',
        fontWeight: 600,
        padding: '14px 16px',
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        borderRadius: '51px',
        boxShadow: 'none',
        lineHeight: '20px',
        fontSize: '14px',
        maxHeight: '48px',
      }}
    >
      {
        iconName &&
        <Image 
          src={`/images/${iconName}.svg`}
          width={24}
          height={24}
          alt={iconName}
        />
      }

      {text}
    </Button>
  );
}
