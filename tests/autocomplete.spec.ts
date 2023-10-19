import { test, expect, type Locator, type Page } from '@playwright/test';
import { AutocompletePage} from "../page-objects/autocompletePage";

test('Autocomplete Test', async ({ page }) => {
    const autocompletePage = new AutocompletePage(page);
    await autocompletePage.visit();
    await autocompletePage.fillInForm('chi');
    
    await autocompletePage.expectFoodItemInField('Chips');
    await autocompletePage.submitForm();


});
