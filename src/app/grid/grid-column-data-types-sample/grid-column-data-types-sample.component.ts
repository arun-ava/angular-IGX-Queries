/*eslint-disable*/
import { Component, OnInit, ViewChild } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeBG from '@angular/common/locales/bg';
import localeDE from '@angular/common/locales/de';
import localeFR from '@angular/common/locales/fr';
import localeJA from '@angular/common/locales/ja';
import { IgxGridComponent } from 'igniteui-angular';

@Component({
  selector: 'grid-column-data-types-sample',
  styleUrls: ['./grid-column-data-types-sample.component.scss'],
  templateUrl: 'grid-column-data-types-sample.component.html',
})
export class GridColumnDataTypesSampleComponent implements OnInit {
  @ViewChild('grid1', { read: IgxGridComponent, static: true })
  public grid1: IgxGridComponent;

  public digitsInfoMessage: string =
    'Applicable to number, currency and percent type columns';

  // Number options
  public options = {
    digitsInfo: '1.4-4',
    currencyCode: '',
  };
  public formatOptions = this.options;

  // Different locales
  public locales = ['BG', 'EN', 'DE', 'FR', 'JA'];
  public locale = 'EN';

  // DateTime formats
  public dateTimeFormats = [
    { format: 'short', eq: "'M/d/yy, h:mm a'" },
    { format: 'long', eq: "'MMMM d, y, h:mm:ss a z'" },
    { format: 'full', eq: "'EEEE, MMMM d, y, h:mm:ss a zzzz'" },
  ];

  // Date formats
  public dateFormats = [
    { format: 'shortDate', eq: "'M/d/yy'" },
    { format: 'mediumDate', eq: "'MMMM d, y'" },
    { format: 'longDate', eq: "'MMMM d, y'" },
    { format: 'fullDate', eq: "'EEEE, MMMM d, y'" },
  ];

  // Time formats
  public timeFormats = [
    { format: 'shortTime', eq: "'h:mm a'" },
    { format: 'mediumTime', eq: "'h:mm:ss a'" },
    { format: 'longTime', eq: "'h:mm:ss a z'" },
    { format: 'fullTime', eq: "'h:mm:ss a zzzz'" },
  ];

  // Different timezones
  public timezoneFormats = [
    'GMT',
    'UTC+9:30/ +10:30',
    'UTC+0',
    'UTC-6',
    'UTC+1',
    'UTC+3',
  ];

  // DateTime options
  public dateTimeOptions = {
    format: 'long',
    timezone: 'UTC+0',
  };
  public formatDateTimeOptions = this.dateTimeOptions;

  // Date options
  public dateOptions = {
    format: 'mediumDate',
    timezone: 'UTC+0',
  };
  public formatDateOptions = this.dateOptions;

  // Time options
  public timeOptions = {
    format: 'shortTime',
    timezone: 'UTC+0',
  };
  public formatTimeOptions = this.timeOptions;

  // Currency format options
  public currencyCodes = ['USD', 'BGN', 'EUR', 'JPY'];

  public data: any[] = [
    {
      ProductID: 1,
      ProductName: 'Chai',
      SupplierID: 1,
      CategoryID: 1,
      QuantityPerUnit: '10 boxes x 20 bags',
      UnitPrice: 18.0,
      UnitsInStock: 39,
      UnitsOnOrder: 0.03,
      ReorderLevel: 10,
      Discontinued: false,
      OrderDate: '',
      OrderDateDelay: new Date(new Date('2012-02-12').setHours(3, 20)),
      OrderFullDate: new Date(new Date('2012-02-12').setHours(3, 20)),
    },
    {
      ProductID: 2,
      ProductName: 'Chang',
      SupplierID: 1,
      CategoryID: 1,
      QuantityPerUnit: '24 - 12 oz bottles',
      UnitPrice: 19.0,
      UnitsInStock: 17,
      UnitsOnOrder: 0.04,
      ReorderLevel: 25,
      Discontinued: true,
      OrderDate: new Date('2003-03-17'),
      OrderDateDelay: new Date(new Date('2003-03-17').setHours(5, 40)),
      OrderFullDate: new Date(new Date('2003-03-17').setHours(5, 40)),
    },
    {
      ProductID: 3,
      ProductName: 'Aniseed Syrup',
      SupplierID: 1,
      CategoryID: 2,
      QuantityPerUnit: '12 - 550 ml bottles',
      UnitPrice: 10.0,
      UnitsInStock: 13,
      UnitsOnOrder: 0.07,
      ReorderLevel: 25,
      Discontinued: false,
      OrderDate: new Date('2006-03-17'),
      OrderDateDelay: new Date(new Date('2006-03-17').setHours(1, 55)),
      OrderFullDate: new Date(new Date('2006-03-17').setHours(1, 55)),
    },
    {
      ProductID: 4,
      ProductName: 'Chef Antons Cajun Seasoning',
      SupplierID: 2,
      CategoryID: 2,
      QuantityPerUnit: '48 - 6 oz jars',
      UnitPrice: 22.0,
      UnitsInStock: 53,
      UnitsOnOrder: 0.03,
      ReorderLevel: 0,
      Discontinued: false,
      OrderDate: new Date('2016-03-17'),
      OrderDateDelay: new Date(new Date('2016-03-17').setHours(11, 11)),
      OrderFullDate: new Date(new Date('2016-03-17').setHours(11, 11)),
    },
    {
      ProductID: 5,
      ProductName: 'Chef Antons Gumbo Mix',
      SupplierID: 2,
      CategoryID: 2,
      QuantityPerUnit: '36 boxes',
      UnitPrice: 21.35,
      UnitsInStock: 0,
      UnitsOnOrder: 0.03,
      ReorderLevel: 0,
      Discontinued: true,
      OrderDate: new Date('2011-11-11'),
      OrderDateDelay: null,
      OrderFullDate: null,
    },
    {
      ProductID: 6,
      ProductName: 'Grandmas Boysenberry Spread',
      SupplierID: 3,
      CategoryID: 2,
      QuantityPerUnit: '12 - 8 oz jars',
      UnitPrice: 25.0,
      UnitsInStock: 0,
      UnitsOnOrder: 0.03,
      ReorderLevel: 25,
      Discontinued: false,
      OrderDate: new Date('2017-12-17'),
      OrderDateDelay: new Date(new Date('2017-12-17').setHours(2, 15)),
      OrderFullDate: new Date(new Date('2017-12-17').setHours(2, 15)),
    },
    {
      ProductID: 7,
      ProductName: 'Uncle Bobs Organic Dried Pears',
      SupplierID: 3,
      CategoryID: 7,
      QuantityPerUnit: '12 - 1 lb pkgs.',
      UnitPrice: 30.0,
      UnitsInStock: 150,
      UnitsOnOrder: 0.03,
      ReorderLevel: 10,
      Discontinued: false,
      OrderDate: new Date('2016-07-17'),
      OrderDateDelay: undefined,
      OrderFullDate: new Date(new Date('2016-07-17').setHours(1, 55)),
    },
    {
      ProductID: 8,
      ProductName: 'Northwoods Cranberry Sauce',
      SupplierID: 3,
      CategoryID: 2,
      QuantityPerUnit: '12 - 12 oz jars',
      UnitPrice: 40.0,
      UnitsInStock: 6,
      UnitsOnOrder: 0.03,
      ReorderLevel: 0,
      Discontinued: false,
      OrderDate: new Date('2018-01-17'),
      OrderDateDelay: null,
      OrderFullDate: new Date(new Date('2018-01-17').setHours(1, 55)),
    },
    {
      ProductID: 9,
      ProductName: 'Mishi Kobe Niku',
      SupplierID: 4,
      CategoryID: 6,
      QuantityPerUnit: '18 - 500 g pkgs.',
      UnitPrice: 97.0,
      UnitsInStock: 29,
      UnitsOnOrder: 0.03,
      ReorderLevel: 0,
      Discontinued: true,
      OrderDate: new Date('2010-02-17'),
      OrderDateDelay: new Date(new Date('2010-02-17').setHours(8, 10)),
      OrderFullDate: new Date(new Date('2010-02-17').setHours(8, 10)),
    },
  ];

  private regEx = new RegExp('^[0-9]+.[0-9]+-[0-9]$');

  constructor() {}
  public ngOnInit(): void {
    registerLocaleData(localeBG);
    registerLocaleData(localeDE);
    registerLocaleData(localeFR);
    registerLocaleData(localeJA);
  }

  public reset() {
    this.options.digitsInfo = '1.4-4';
    this.formatOptions = Object.assign({}, this.formatOptions, this.options);
  }
  public clearCode(event) {
    event.preventDefault();
    this.options.currencyCode = '';
    this.formatOptions = Object.assign({}, this.formatOptions, this.options);
  }
  public modelChange() {
    if (this.options.digitsInfo.match(this.regEx)) {
      if (
        Number(this.options.digitsInfo.substr(2, 1)) >
        Number(this.options.digitsInfo.substr(4, 1))
      ) {
        this.digitsInfoMessage =
          'The minimum number of digits after fraction (x) is higher than the maximum (x).';
      } else {
        this.digitsInfoMessage =
          'Applicable to number, currency and percent type columns';
        this.formatOptions = Object.assign(
          {},
          this.formatOptions,
          this.options
        );
      }
    }
  }

  public selectionChanging(event) {
    this.dateTimeOptions.format = event.newSelection.value;
    this.formatDateTimeOptions = Object.assign(
      {},
      this.formatDateTimeOptions,
      this.dateTimeOptions
    );
  }

  public selectionDateChanging(event) {
    this.dateOptions.format = event.newSelection.value;
    this.formatDateOptions = Object.assign(
      {},
      this.formatDateOptions,
      this.dateOptions
    );
  }

  public selectionTimeChanging(event) {
    this.timeOptions.format = event.newSelection.value;
    this.formatTimeOptions = Object.assign(
      {},
      this.formatTimeOptions,
      this.timeOptions
    );
  }

  public timezoneSelectionChanging(event) {
    this.dateTimeOptions.timezone = event.newSelection.value;
    this.formatDateTimeOptions = Object.assign(
      {},
      this.formatDateTimeOptions,
      this.dateTimeOptions
    );
  }

  public currencySelectionChanging(event) {
    this.options.currencyCode = event.newSelection.value;
    this.formatOptions = Object.assign({}, this.formatOptions, this.options);
  }

  public warningClass() {
    if (!this.digitsInfoMessage.startsWith('Applicable')) return 'warning';
  }
}
