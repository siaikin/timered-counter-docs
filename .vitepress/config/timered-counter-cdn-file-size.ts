import {gzipSync, brotliCompressSync, deflateSync} from "node:zlib";
import {fileURLToPath} from "node:url";
import {basename} from "node:path";
import {glob} from "glob";
import {readFileSync,} from "node:fs";

export async function timeredCounterCdnFileSize() {
  const rootPath  = fileURLToPath(
    new URL('../../node_modules/timered-counter/dist', import.meta.url),
  );

  const umdFiles = await glob(`${rootPath}/**.global.js`);
  const esmFiles = await glob(`${rootPath}/**.esm-browser.js`);

  const umdCompressSize: Record<string, { raw: number, gzip: number, brotli: number, deflate: number }> = {};
  await Promise.all(umdFiles.map(async (file) => {
    const content = readFileSync(file);
    umdCompressSize[basename(file)] = {
      raw: content.byteLength,
      gzip: gzipSync(content).byteLength,
      brotli: brotliCompressSync(content).byteLength,
      deflate: deflateSync(content).byteLength,
    };
  }));

  const esmCompressSize: Record<string, { raw: number, gzip: number, brotli: number, deflate: number }> = {};
  await Promise.all(esmFiles.map(async (file) => {
    const content = readFileSync(file);
    esmCompressSize[basename(file)] = {
      raw: content.byteLength,
      gzip: gzipSync(content).byteLength,
      brotli: brotliCompressSync(content).byteLength,
      deflate: deflateSync(content).byteLength,
    };
  }));

  return {
    umd: umdCompressSize,
    esm: esmCompressSize,
  }
}

// // @ts-ignore
// import { customElementsManifestToMarkdown } from '@custom-elements-manifest/to-markdown';
//
// const rootPath  = fileURLToPath(
//   new URL('../../node_modules/timered-counter', import.meta.url),
// );
//
// const manifest = JSON.parse(readFileSync(`${rootPath}/custom-elements.json`, 'utf-8'));
// const markdown = customElementsManifestToMarkdown(manifest);
// writeFileSync('./custom-elements.md', markdown);
