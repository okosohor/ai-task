'use client';
import { SAMPLE_TEXT } from '@/data/sample-text';
import { ChangeEvent, useState } from 'react';
import { paraphraseText } from '@/services/paraphrase';
import TextAreaControls from '@/components/textarea/textarea-controls';
import TextAreaBlock from '@/components/textarea/textarea-block';
import ErrorString from '@/components/shared/error-string';

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
        <TextAreaBlock
          loading={loading}
          handleInputChange={handleInputChange}
          handlePasteText={handlePasteText}
          handleSampleText={handleSampleText}
          inputValue={inputValue}
        />
        <TextAreaControls
          handleClearInput={handleClearInput}
          handleParaphrase={handleParaphrase}
          success={success}
          inputValue={inputValue}
          loading={loading}
        />
      </div>
      <ErrorString error={error} />
    </>
  );
}
