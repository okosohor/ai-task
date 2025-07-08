import CustomButton from '../shared/custom-button';

interface Props {
  inputValue: string;
  loading: boolean;
  handleClearInput: () => void;
  handleParaphrase: () => void;
  success: boolean;
}

export default function TextAreaControls({
  inputValue,
  loading,
  handleClearInput,
  handleParaphrase,
  success,
}: Props) {
  return (
    <div
      className={
        'p-2 bg-white transition-all duration-300 absolute bottom-0 flex justify-end w-full gap-2  border-t ' +
        (inputValue ? 'border-[#DBDCDF] ' : 'border-transparent') +
        (success ? 'translate-y-[100%] ' : '')
      }
    >
      {inputValue && !loading && (
        <CustomButton
          handleClick={handleClearInput}
          iconName="cross"
          type="secondary"
          text="Clear input"
        />
      )}
      <CustomButton
        disabled={loading}
        handleClick={handleParaphrase}
        type="primary"
        text={loading ? 'Paraphrasing' : 'Paraphrase'}
      />
    </div>
  );
}
