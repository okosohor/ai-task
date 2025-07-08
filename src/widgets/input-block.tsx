'use client';
import { SAMPLE_TEXT } from '@/data/sample-text';
import { TextareaAutosize } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { paraphraseText } from '@/services/paraphrase';
import TextAreaButton from '@/components/textarea/textarea-button';
import TextAreaControls from '@/components/textarea/textarea-controls';
import ErrorString from '@/components/error-string';

export default function InputBlock() {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  function handleInputChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setInputValue(e.target.value);
  }

  async function handlePasteText() {
    const text = await navigator.clipboard.readText();
    setInputValue(text);
    setError('');
  }

  function handleClearInput() {
    setInputValue('');
    setError('');
  }

  function handleSampleText() {
    setInputValue(SAMPLE_TEXT);
    setError('');
  }

  const handleParaphrase = async () => {
    setError('');
    setLoading(true);
    setSuccess(false);

    try {
      const result = await paraphraseText(inputValue);
      setInputValue(result);
      setSuccess(true);
    } catch (err: any) {
      setError(err.response?.data?.error || err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="flex flex-col relative overflow-hidden border border-[#DBDCDF] rounded-[28px]">
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
        <TextAreaControls
          handleClearInput={handleClearInput}
          handleParaphrase={handleParaphrase}
          success={success}
          inputValue={inputValue}
          loading={loading}
        />
      </div>
      <ErrorString error={error}/>
    </>
  );
}
