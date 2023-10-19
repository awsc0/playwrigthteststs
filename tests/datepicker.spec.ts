import { test, expect, type Locator, type Page } from '@playwright/test';
import { DatepickerPage } from "../page-objects/datepickerPage";

test('Datepicker Select Date Week Ahead', async ({ page }) => {
    const datepickerPage = new DatepickerPage(page);
    await datepickerPage.visit();

  const plusOneWeekDate = new Date()
  plusOneWeekDate.setDate(plusOneWeekDate.getDate() + 7)

  await datepickerPage.setDate(plusOneWeekDate)
  expect((await datepickerPage.getDate()).getDate()).toEqual(plusOneWeekDate.getDate())
});
