import { test, expect, type Locator, type Page } from '@playwright/test';
import { ContactUsPage } from "../page-objects/contactUsPage";

test('Filling Contact Us Form', async ({ page }) => {
    const contactUsPage = new ContactUsPage(page);
    await contactUsPage.visit();

    await contactUsPage.fillInForm('Imię', 'Nazwisko', 'a@b.com', 'komentarz');
    await contactUsPage.resetForm();

    await contactUsPage.fillInForm('Imię', '', 'a@b.com', 'komentarz');
    await contactUsPage.submitForm();
    const errorMessage = await page.getByText('Error: all fields are required');
    await expect(errorMessage).toBeVisible();
    await page.goBack();
    await contactUsPage.resetForm();

    await contactUsPage.fillInForm('Imię', 'Nazwisko', 'bardzonieprawidłowyemail', 'komentarz');
    await contactUsPage.submitForm();
    const emailErrorMessage = await page.getByText('Error: Invalid email address')
    await expect(emailErrorMessage).toBeVisible();
    await page.goBack();
    await contactUsPage.resetForm();

    await contactUsPage.fillInForm('Imię', 'Nazwisko', 'a@b.com', 'komentarz');
    await contactUsPage.submitForm();
    const successMessage = await page.getByRole('heading', { name: 'Thank You for your Message!' });
    await expect(successMessage).toBeVisible();
});
