import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'./tests',fullyParallel:false,workers:1,use:{baseURL:'http://127.0.0.1:3100',launchOptions:{executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH,args:['--no-sandbox']}},webServer:{command:'node scripts/serve-preview.mjs',url:'http://127.0.0.1:3100',reuseExistingServer:!process.env.CI},reporter:'list'});
