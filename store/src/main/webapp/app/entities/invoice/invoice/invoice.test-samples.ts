import dayjs from 'dayjs/esm';

import { InvoiceStatus } from 'app/entities/enumerations/invoice-status.model';
import { PaymentMethod } from 'app/entities/enumerations/payment-method.model';

import { IInvoice, NewInvoice } from './invoice.model';

export const sampleWithRequiredData: IInvoice = {
  id: 91509,
  code: 'Avon Mandatory',
  date: dayjs('2023-04-14T10:48'),
  status: InvoiceStatus['ISSUED'],
  paymentMethod: PaymentMethod['CASH_ON_DELIVERY'],
  paymentDate: dayjs('2023-04-14T04:27'),
  paymentAmount: 13016,
};

export const sampleWithPartialData: IInvoice = {
  id: 32294,
  code: 'Tugrik Customer schemas',
  date: dayjs('2023-04-14T06:55'),
  details: 'Regional Optimization',
  status: InvoiceStatus['PAID'],
  paymentMethod: PaymentMethod['CASH_ON_DELIVERY'],
  paymentDate: dayjs('2023-04-14T11:14'),
  paymentAmount: 69991,
};

export const sampleWithFullData: IInvoice = {
  id: 13401,
  code: 'Account',
  date: dayjs('2023-04-14T06:43'),
  details: 'Creative Intelligent Berkshire',
  status: InvoiceStatus['PAID'],
  paymentMethod: PaymentMethod['CREDIT_CARD'],
  paymentDate: dayjs('2023-04-14T12:36'),
  paymentAmount: 79094,
};

export const sampleWithNewData: NewInvoice = {
  code: 'Bedfordshire online application',
  date: dayjs('2023-04-14T00:02'),
  status: InvoiceStatus['CANCELLED'],
  paymentMethod: PaymentMethod['CREDIT_CARD'],
  paymentDate: dayjs('2023-04-13T15:39'),
  paymentAmount: 58958,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
