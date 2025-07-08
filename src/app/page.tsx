import Info from '@/components/shared/info';
import fetchContentFromCMS from '@/services/cms';
import InputBlock from '@/widgets/input-block';

export default async function Home() {
  const content = await fetchContentFromCMS();

  return (
    <div className="flex flex-col w-full">
      <Info {...content} />
      <InputBlock />
    </div>
  );
}
