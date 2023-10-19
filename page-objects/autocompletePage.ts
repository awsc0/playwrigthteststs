import { expect, type Locator, type Page } from '@playwright/test';

export class AutocompletePage {
    readonly page: Page;
    readonly foodItemField: Locator;
    readonly submitButton: Locator;
   
    constructor(page: Page) {
        this.page = page;
        this.foodItemField = page.getByPlaceholder('Food Item');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
    }

    async visit() {
        await this.page.goto('http://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html');
    }

    async fillInForm(itemFirstLetters: string) {
        await this.foodItemField.fill(itemFirstLetters);
        await this.foodItemField.press('ArrowDown');
        await this.foodItemField.press('ArrowDown');
        await this.foodItemField.press('Enter');
    }

    async submitForm() {
        await this.submitButton.click()
    }

    async expectFoodItemInField(foodItem: string) {
        const foodItemText = await this.foodItemField.inputValue();
        await expect (this.foodItemField).toHaveValue(foodItem);
    }
}









