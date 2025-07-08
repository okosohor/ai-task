import { Icons } from '@/types/Icons';
import { Button } from '@mui/material';
import Image from 'next/image';

interface Props {
  text: string
  iconName: Icons;
  handleClick: () => void;
}


export default function TextAreaButton ({ text, iconName, handleClick }: Props) {
  return (
    <Button
      onClick={handleClick}
      variant="outlined"
      style={{
        backgroundColor: '#FFF',
        border: '1px solid #DBDCDF',
        borderRadius: '11px',
        padding: '16px 0px',
        minWidth: '196px',
        maxWidth: '196px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: '#76777A',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '20px',
        textTransform: 'capitalize',
        flexDirection: 'column',
      }}
    >
      <Image
        src={`/images/${iconName}.svg`}
        height={20}
        width={20}
        alt={iconName}
      />
      <span>{text}</span>
    </Button>
  );
}