import { CMSContent } from '@/types/CMSContent';

export default async function fetchContentFromCMS(): Promise<CMSContent> {
  return {
    title: 'AI Text Paraphraser by JustDone',
    subtitle:
      'Transform your writing from good to great with our Paraphraser tool.',
  };
}
