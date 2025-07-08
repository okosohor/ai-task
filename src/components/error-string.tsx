interface Props {
  error: string;
}

export default function ErrorString({ error }: Props) {
  return (
    <div className="mt-2 min-h-4">
      {error && <p className=" font-medium text-xs text-[#FF3B30]">{error}</p>}
    </div>
  );
}
