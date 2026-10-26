import {test,expect} from '@playwright/test';
for(const width of [375,768,1440]){
 for(const route of ['/','/preview/editorial/','/preview/architectural/','/preview/california/']){
  test(`${route} renders without horizontal overflow at ${width}px`,async({page})=>{
   await page.setViewportSize({width,height:900});const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(route);await expect(page.locator('h1')).toBeVisible();await page.evaluate(()=>document.fonts.ready);
   expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBe(true);expect(errors).toEqual([]);
   for(const id of ['about','contact'])await expect(page.locator('#'+id)).toHaveCount(1);
   await expect(page.getByRole('navigation',{name:'Homepage concepts'})).toBeVisible();
  });
 }
}
test('homepage commercial autoplays muted and loops, then supports sound and pause',async({page})=>{
 await page.goto('/');const video=page.locator('video');await expect.poll(()=>video.evaluate(v=>!(v as HTMLVideoElement).paused&&(v as HTMLVideoElement).currentTime>0)).toBe(true);expect(await video.evaluate(v=>(v as HTMLVideoElement).muted&&(v as HTMLVideoElement).loop&&(v as HTMLVideoElement).playsInline)).toBe(true);
 await page.getByRole('button',{name:'Watch video with sound'}).click();await expect.poll(()=>video.evaluate(v=>!(v as HTMLVideoElement).muted&&!(v as HTMLVideoElement).paused)).toBe(true);await page.getByRole('button',{name:'Pause video'}).click();expect(await video.evaluate(v=>(v as HTMLVideoElement).paused)).toBe(true);
});
test('reduced motion preserves click-to-play without autoplay',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');await expect(page.getByRole('button',{name:'Play video with sound'})).toBeVisible();expect(await page.locator('video').evaluate(v=>(v as HTMLVideoElement).paused)).toBe(true);
});
test('mobile navigation and inquiry preview work without sending details',async({page})=>{
 await page.setViewportSize({width:375,height:812});await page.goto('/preview/california/');await page.getByRole('button',{name:'Open navigation'}).click();await page.getByRole('navigation',{name:'Mobile navigation'}).getByRole('link',{name:'Let’s talk'}).click();await expect(page.getByRole('navigation',{name:'Mobile navigation'})).toHaveCount(0);await page.locator('details#contact > summary').click();await page.getByLabel('Your name').fill('Preview Visitor');await page.getByLabel('Email address').fill('preview@example.com');await page.getByRole('button',{name:'Preview my inquiry'}).click();await expect(page.getByRole('status')).toContainText('has not sent your details');
});
test('full navigation dropdowns and Selling SoCal banner work',async({page})=>{
 await page.setViewportSize({width:1440,height:900});await page.goto('/preview/architectural/');const nav=page.getByRole('navigation',{name:'Main navigation'});await nav.getByRole('button',{name:'Real Estate'}).click();await expect(nav.getByRole('link',{name:'Buying a home'})).toBeVisible();await page.keyboard.press('Escape');await expect(nav.getByRole('link',{name:'Buying a home'})).toHaveCount(0);await nav.getByRole('button',{name:'Media',exact:true}).click();await nav.getByRole('link',{name:'Selling SoCal'}).click();await expect(page.locator('#selling-socal')).toContainText('Brad Roth on Selling SoCal');await expect(page.locator('#selling-socal a')).toHaveAttribute('href','#contact');await expect(page.locator('#brokerage')).toHaveCount(1);await page.getByRole('button',{name:'Dismiss Selling SoCal announcement'}).click();await expect(page.getByRole('complementary',{name:'Selling SoCal announcement'})).toHaveCount(0);
});
