
import { expect, type Locator, type Page } from '@playwright/test';

export class AjaxLoaderPage {
    readonly page: Page;
    readonly clickMeButton: Locator;
    readonly buttonField: Locator;
    readonly field1: Locator;
    readonly closePopupButon: Locator;
  
    constructor(page: Page) {
        this.page = page;
        this.clickMeButton = page.getByText('CLICK ME!');
        this.buttonField = page.locator('#button1')
        this.field1 = page.locator('#myDiv')
        this.closePopupButon = page.getByRole('button', { name: 'Close' })
    }

    async visit() {
        await this.page.goto('http://www.webdriveruniversity.com/Ajax-Loader/index.html');
        expect (await this.page.url()).toBe('http://www.webdriveruniversity.com/Ajax-Loader/index.html');
        await this.page.waitForLoadState();
    }

    async clickMe() {
        await this.page.goto('http://www.webdriveruniversity.com/Ajax-Loader/index.html');
 
        await this.page.locator('[data-target="#myModalClick"]').click();
        await expect(this.page.locator('div.modal-content')).toBeVisible();
        
    }



        



    
}