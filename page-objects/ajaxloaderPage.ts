
import { expect, type Locator, type Page } from '@playwright/test';

export class AjaxLoaderPage {
    readonly page: Page;
    readonly clickMeButton: Locator;
    readonly buttonField: Locator;
    readonly field1: Locator;
    readonly closePopupButon: Locator;
  
    constructor(page: Page) {
        this.page = page;
        this.clickMeButton = page.locator('[data-target="#myModalClick"]');
        this.buttonField = page.locator('div.modal-content');
        this.field1 = page.locator('#myDiv');
        this.closePopupButon = page.getByRole('button', { name: 'Close' });
    }

    async visit() {
        await this.page.goto('http://www.webdriveruniversity.com/Ajax-Loader/index.html');
        expect (await this.page.url()).toBe('http://www.webdriveruniversity.com/Ajax-Loader/index.html');
        await this.page.waitForLoadState();
    }

    async clickMe() {
        await this.clickMeButton.click();
        await expect(this.buttonField).toBeVisible();
    }
}