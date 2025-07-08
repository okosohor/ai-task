import { TextareaAutosize } from '@mui/material';
import TextAreaButton from './textarea-button';
import { ChangeEvent } from 'react';

interface Props {
  loading: boolean;
  inputValue: string;
  handleInputChange: (_e: ChangeEvent<HTMLTextAreaElement>) => void;
  handlePasteText: () => void;
  handleSampleText: () => void;
}

export default function TextAreaBlock({
  loading,
  inputValue,
  handleInputChange,
  handlePasteText,
  handleSampleText,
}: Props) {
  return (
    <>
      <TextareaAutosize
        disabled={loading}
        aria-label="minimum height"
        minRows={3}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text here or upload file to humanize it."
        style={{
          width: '100%',
          padding: '16px 16px 66px 16px',
          backgroundColor: inputValue ? '#FFF' : '#EEF0F5',
          minHeight: '400px',
          maxHeight: '400px',
          transition: 'all 0.3s ease',
        }}
      />
      {!inputValue && (
        <div className="absolute flex gap-2 mt-[102px] top-[10px] left-1/2 translate-x-[-50%]">
          <TextAreaButton
            handleClick={handlePasteText}
            iconName="paste"
            text="Paste text"
          />
          <TextAreaButton
            handleClick={handleSampleText}
            iconName="sample"
            text="Sample text"
          />
        </div>
      )}
    </>
  );
}
