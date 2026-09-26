// Renders cv/cv-en.html to public/cv/Muhammet_Emin_Ayhan_CV.pdf with headless Edge/Chrome.
// Usage: npm run cv   (set BROWSER=path/to/chrome.exe to use another Chromium browser)
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const candidates = [
  process.env.BROWSER,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
const browser = candidates.find((p) => existsSync(p));
if (!browser) throw new Error('No Chromium-based browser found; set BROWSER=/path/to/chrome');

const input = pathToFileURL(resolve('cv/cv-en.html')).href;
const output = resolve('public/cv/Muhammet_Emin_Ayhan_CV.pdf');
execFileSync(browser, ['--headless=new', '--disable-gpu', '--no-pdf-header-footer', `--print-to-pdf=${output}`, input], {
  stdio: 'ignore',
});
console.log(`CV written to ${output}`);
