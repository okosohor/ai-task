'use client';
import CustomButton from '@/components/custom-button';
import TextAreaButton from '@/components/textarea-button';
import { SAMPLE_TEXT } from '@/data/sample-text';
import { TextareaAutosize } from '@mui/material';
import { ChangeEvent, useState } from 'react';

export default function InputBlock() {
  const [ inputValue, setInputValue] = useState('');
  const [ loading, setLoading] = useState(false);
  const [ error, setError ] = useState('');
  const [ success, setSuccess] = useState(false);
  function handleInputChange (e: ChangeEvent<HTMLTextAreaElement>) {
    setInputValue(e.target.value);
  };

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

    try {
      const res = await fetch('/api/paraphrase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: inputValue }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setInputValue(data.result);

      setLoading(false);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message);

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
        >
        </TextareaAutosize>

        {
          !inputValue && <div className='absolute flex gap-2 mt-[102px] top-[10px] left-1/2 translate-x-[-50%]'>
            <TextAreaButton handleClick={handlePasteText} iconName='paste' text='Paste text'/>
            <TextAreaButton handleClick={handleSampleText} iconName='sample' text='Sample text'/>
          </div>
        }
        <div className={'p-2 bg-white transition-all duration-300 absolute bottom-0 flex justify-end w-full gap-2  border-t ' +  (inputValue ? 'border-[#DBDCDF] ' : 'border-transparent' ) + (success ? 'translate-y-[100%] ' :  '')}>
          {
            (inputValue && !loading )&& 
            <CustomButton 
              handleClick={handleClearInput} 
              iconName='cross' 
              type='secondary' 
              text='Clear input'
            />
          }
          <CustomButton 
            disabled={loading} 
            handleClick={handleParaphrase} 
            type='primary' 
            text={loading ? 'Paraphrasing' : 'Paraphrase'}
          />
        </div>
      </div>
      <div className='mt-2 min-h-4'>
        {error && <p className=' font-medium text-xs text-[#FF3B30]'>{error}</p>}
      </div>
    </>
  );
}
