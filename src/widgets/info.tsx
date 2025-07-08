import { CMSContent } from '@/types/CMSContent';

export default function Info({ title, subtitle }: CMSContent) {
  return (
    <div className="flex mb-10 flex-col gap-4 text-center w-full">
      <h1 className="text-[2.75rem] font-bold leading-[3.75rem]">{title}</h1>
      <h2 className="font-medium text-[1.375rem] leading-[1.75rem]">
        {subtitle}
      </h2>
    </div>
  );
}
