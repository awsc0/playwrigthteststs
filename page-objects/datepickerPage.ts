import { expect, type Locator, type Page } from '@playwright/test';


export class DatepickerPage {
    readonly page: Page;
    readonly openCalendarButton: Locator;
    readonly datepicker: Locator;
        
    readonly datepickerPrewArrow: Locator;
    readonly datepickerNextArrow: Locator;



    constructor(page: Page) {
        this.page = page;
        this.openCalendarButton = page.locator('#datepicker span')
        
        this.datepickerPrewArrow = page.getByRole('cell', { name: '«' });
        this.datepickerNextArrow = page.getByRole('cell', { name: '»' });
        this.datepicker = page.locator('#datepicker input')
        
    }

    async visit() {
        await this.page.goto('http://www.webdriveruniversity.com/Datepicker/index.html');
    }

    async setDate(date: Date) {
        const dateText = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
        await this.page.evaluate((date) => {
          $('#datepicker').datepicker('update', new Date(date))
        }, dateText)
      }
    
      async getDate(): Promise<Date> {
        const dateText = await this.datepicker.inputValue()
        const [month, day, year] = dateText.split('-')
        return new Date(Date.UTC(+year, +month - 1, +day))
      }
}