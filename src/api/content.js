import { contentData } from '@/api/index';

function postNewContent(newContent) {
  return contentData.post('', newContent);
}

export { postNewContent };
