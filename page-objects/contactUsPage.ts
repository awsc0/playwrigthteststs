import { expect, type Locator, type Page } from '@playwright/test';

export class ContactUsPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailAdressInput: Locator;
    readonly commentsInput: Locator;
    readonly resetButton: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.emailAdressInput = page.getByPlaceholder('Email Address');
        this.commentsInput = page.getByPlaceholder('Comments');
        this.resetButton = page.getByRole('button', { name: 'RESET' });
        this.submitButton = page.getByRole('button', { name: 'SUBMIT' });
    }

    async visit() {
        await this.page.goto('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
    }

    async fillInForm(firstName: string, lastName: string, emailAdress: string, comments: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailAdressInput.fill(emailAdress);
        await this.commentsInput.fill(comments);
    }

    async submitForm() {
        await this.submitButton.click();
    }

    async resetForm() {
        await this.resetButton.click();
        await expect(await this.firstNameInput).toBeEmpty();
        await expect(await this.lastNameInput).toBeEmpty();
        await expect(await this.emailAdressInput).toBeEmpty();
        await expect(await this.commentsInput).toBeEmpty();
    }
}