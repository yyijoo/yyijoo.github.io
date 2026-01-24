import fs from 'fs';
import path from 'path';

const contentDir = './content';
const referencedImages = new Set();

// 1단계: publish: true인 md 파일 찾고, 참조된 이미지 수집
function collectPublishedFiles(dir) {
  const files = fs.readdirSync(dir);
  const publishedMdFiles = [];

  files.forEach(file => {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);

    if (stat.isDirectory() && !file.startsWith('.')) {
      publishedMdFiles.push(...collectPublishedFiles(filepath));
    } else if (file.endsWith('.md')) {
      const content = fs.readFileSync(filepath, 'utf8');
      const hasPublish = /^---[\s\S]*?publish:\s*true[\s\S]*?---/.test(content);

      if (hasPublish) {
        publishedMdFiles.push(filepath);
        // 이미지 참조 수집: ![[image.png]] 또는 ![](image.png) 형식
        const wikiLinks = content.match(/!\[\[([^\]]+)\]\]/g) || [];
        const mdLinks = content.match(/!\[[^\]]*\]\(([^)]+)\)/g) || [];

        wikiLinks.forEach(link => {
          const img = link.match(/!\[\[([^\]|]+)/)?.[1];
          if (img) referencedImages.add(img);
        });

        mdLinks.forEach(link => {
          const img = link.match(/!\[[^\]]*\]\(([^)]+)\)/)?.[1];
          if (img) referencedImages.add(decodeURIComponent(img));
        });
      }
    }
  });

  return publishedMdFiles;
}

// 2단계: publish: false인 md와 참조되지 않은 파일 삭제
function removeUnpublished(dir, publishedMdFiles) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);

    if (stat.isDirectory() && !file.startsWith('.')) {
      removeUnpublished(filepath, publishedMdFiles);
      // 빈 디렉토리 삭제
      if (fs.readdirSync(filepath).length === 0) {
        fs.rmdirSync(filepath);
      }
    } else if (file.endsWith('.md')) {
      if (!publishedMdFiles.includes(filepath)) {
        console.log(`Removing (no publish): ${filepath}`);
        fs.unlinkSync(filepath);
      }
    } else if (!file.startsWith('.')) {
      // md가 아닌 파일: 참조된 이미지만 유지
      const isReferenced = referencedImages.has(file) ||
                          [...referencedImages].some(img => img.includes(file));
      if (!isReferenced) {
        console.log(`Removing (not referenced): ${filepath}`);
        fs.unlinkSync(filepath);
      }
    }
  });
}

const publishedMdFiles = collectPublishedFiles(contentDir);
console.log(`\nPublished files: ${publishedMdFiles.length}`);
console.log(`Referenced images: ${referencedImages.size}`);
referencedImages.forEach(img => console.log(`  - ${img}`));
console.log('');

removeUnpublished(contentDir, publishedMdFiles);
