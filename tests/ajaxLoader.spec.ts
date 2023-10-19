import { test, expect, type Locator, type Page } from '@playwright/test';
import { AjaxLoaderPage } from "../page-objects/ajaxloaderPage";

test('Ajax-Loader Test', async ({ page }) => {

    const ajaxLoaderPage = new AjaxLoaderPage(page);
    await ajaxLoaderPage.visit();
    await ajaxLoaderPage.clickMe();
    await ajaxLoaderPage.closePopupButon.click();
});