import fetchContentFromCMS from '@/services/cms';
import Info from '@/widgets/info';
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
