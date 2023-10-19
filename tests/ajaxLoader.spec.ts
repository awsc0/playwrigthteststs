import { test, expect, type Locator, type Page } from '@playwright/test';
import { AjaxLoaderPage } from "../page-objects/ajaxloaderPage";

test('Ajax-Loader Test', async ({ page }) => {

    const ajaxLoaderPage = new AjaxLoaderPage(page);
    await ajaxLoaderPage.visit();
    await ajaxLoaderPage.clickMe();

// //do przerobienia
//     await page.goto('http://www.webdriveruniversity.com/Ajax-Loader/index.html');
 
//     await page.locator('[data-target="#myModalClick"]').click();
//     await expect(page.locator('div.modal-content')).toBeVisible();
    
    await ajaxLoaderPage.closePopupButon.click();



    
    








});