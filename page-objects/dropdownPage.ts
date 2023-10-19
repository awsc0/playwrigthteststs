import { expect, type Locator, type Page } from '@playwright/test';

export class DropdownPage {
    readonly page: Page;
    readonly dropdownMenu1: Locator;
    readonly dropdownMenu2: Locator;
    readonly dropdownMenu3: Locator;
    readonly checkboxOption1: Locator;
    readonly checkboxOption2: Locator;
    readonly checkboxOption3: Locator;
    readonly checkboxOption4: Locator;
    readonly radioButtonGreen: Locator;
    readonly radioButtonBlue: Locator;
    readonly radioButtonYellow: Locator;
    readonly radioButtonOrange: Locator;
    readonly radioButtonPurple: Locator;
    readonly radioButtonLettuce: Locator;
    readonly radioButtonPumpkin: Locator;

    constructor(page: Page) {
        this.page = page;

        this.dropdownMenu1 = page.locator('#dropdowm-menu-1')
        this.dropdownMenu2 = page.locator('#dropdowm-menu-2')
        this.dropdownMenu3 = page.locator('#dropdowm-menu-3')

        this.checkboxOption1 = page.getByText('Option 1')
        this.checkboxOption2 = page.getByText('Option 2')
        this.checkboxOption3 = page.getByText('Option 3')
        this.checkboxOption4 = page.getByText('Option 4')

        this.radioButtonGreen = page.locator('input[name="color"]').first()
        this.radioButtonBlue = page.locator('input[name="color"]').nth(1)
        this.radioButtonYellow = page.locator('input[name="color"]').nth(2)
        this.radioButtonOrange = page.locator('input[name="color"]').nth(3)
        this.radioButtonPurple = page.locator('input[name="color"]').nth(4)

        this.radioButtonLettuce = page.locator('input[name="vegetable"]').first()
        this.radioButtonPumpkin = page.locator('input[name="vegetable"]').nth(2)
    }

    async visit() {
        await this.page.goto('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html') 
    }

    async selectOption1 (option1: string) {
        await this.dropdownMenu1.selectOption(option1)
        await expect (await this.dropdownMenu1.inputValue()).toBe(option1)
    }

    async selectOption2 (option2: string) {
        await this.dropdownMenu2.selectOption(option2)
        await expect (await this.dropdownMenu2.inputValue()).toBe(option2)
    } 

    async selectOption3 (option3: string) {
        await this.dropdownMenu3.selectOption(option3)
        await expect (await this.dropdownMenu3.inputValue()).toBe(option3)
    }

    async selectCheckbox (checkboxOption: Locator) {
        await checkboxOption.setChecked(true)
        await expect (await checkboxOption.isChecked()).toBe(true)
    }
    async deselectCheckbox (checkboxOption: Locator) {
        await checkboxOption.setChecked(false)
        await expect (await checkboxOption.isChecked()).toBe(false)
    }

    async selectRadioButton (radioButton: Locator) {
        await radioButton.click()
        await expect(await radioButton.isChecked()).toBe(true)

    }
    async selectVegetable (radioButtonVegetable: Locator) {
        await radioButtonVegetable.click()
        await expect(await radioButtonVegetable.isChecked()).toBe(true)

    }
}