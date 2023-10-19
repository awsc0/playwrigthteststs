import { test, expect, type Locator, type Page } from '@playwright/test';
import { DropdownPage } from '../page-objects/dropdownPage';


test('Dropdown Menus', async ({ page }) => {
    const dropdownPage = new DropdownPage(page);
    await dropdownPage.visit()

    await dropdownPage.selectOption1('java')
    await dropdownPage.selectOption1('c#')
    await dropdownPage.selectOption1('python')
    await dropdownPage.selectOption1('sql')

    await dropdownPage.selectOption2('eclipse')
    await dropdownPage.selectOption2('maven')
    await dropdownPage.selectOption2('testng')
    await dropdownPage.selectOption2('junit')
   
    await dropdownPage.selectOption3('html')
    await dropdownPage.selectOption3('css')
    await dropdownPage.selectOption3('javascript')
    await dropdownPage.selectOption3('jquery')
})

test("Checkboxes", async ({ page }) => {
    const dropdownPage = new DropdownPage(page);
    await dropdownPage.visit()

    await dropdownPage.selectCheckbox(dropdownPage.checkboxOption1)
    await dropdownPage.selectCheckbox(dropdownPage.checkboxOption2)
    await dropdownPage.selectCheckbox(dropdownPage.checkboxOption3)
    await dropdownPage.selectCheckbox(dropdownPage.checkboxOption4)

    await dropdownPage.deselectCheckbox(dropdownPage.checkboxOption2)
    await dropdownPage.deselectCheckbox(dropdownPage.checkboxOption4)
    expect (await dropdownPage.checkboxOption1.isChecked()).toBe(true)
    expect (await dropdownPage.checkboxOption3.isChecked()).toBe(true)
})

test("Radio Buttons", async ({ page }) => {
    const dropdownPage = new DropdownPage(page);
    await dropdownPage.visit()

    await dropdownPage.selectRadioButton(dropdownPage.radioButtonGreen)
    await dropdownPage.selectRadioButton(dropdownPage.radioButtonBlue)
    await dropdownPage.selectRadioButton(dropdownPage.radioButtonYellow)
    await dropdownPage.selectRadioButton(dropdownPage.radioButtonOrange)
    await dropdownPage.selectRadioButton(dropdownPage.radioButtonPurple)
    expect(await dropdownPage.radioButtonPurple.isChecked()).toBe(true)
    expect(await dropdownPage.radioButtonOrange.isChecked()).toBe(false)
    expect(await dropdownPage.radioButtonYellow.isChecked()).toBe(false)
    expect(await dropdownPage.radioButtonBlue.isChecked()).toBe(false)
    expect(await dropdownPage.radioButtonGreen.isChecked()).toBe(false)
})

test("Selected and disabled", async ({ page }) => {
    const dropdownPage = new DropdownPage(page);
    await dropdownPage.visit()

    await dropdownPage.selectVegetable(dropdownPage.radioButtonLettuce)
    await dropdownPage.selectVegetable(dropdownPage.radioButtonPumpkin)
    
})