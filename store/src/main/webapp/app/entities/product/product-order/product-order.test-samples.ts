import dayjs from 'dayjs/esm';

import { OrderStatus } from 'app/entities/enumerations/order-status.model';

import { IProductOrder, NewProductOrder } from './product-order.model';

export const sampleWithRequiredData: IProductOrder = {
  id: 84064,
  placedDate: dayjs('2023-04-13T17:02'),
  status: OrderStatus['CANCELLED'],
  code: 'sticky',
  customer: 'explicit homogeneous Paradigm',
};

export const sampleWithPartialData: IProductOrder = {
  id: 46274,
  placedDate: dayjs('2023-04-14T09:39'),
  status: OrderStatus['CANCELLED'],
  code: 'pixel silver',
  customer: 'Investor',
};

export const sampleWithFullData: IProductOrder = {
  id: 59444,
  placedDate: dayjs('2023-04-13T16:49'),
  status: OrderStatus['COMPLETED'],
  code: 'Thüringen',
  invoiceId: 88266,
  customer: 'Path vertical',
};

export const sampleWithNewData: NewProductOrder = {
  placedDate: dayjs('2023-04-13T18:41'),
  status: OrderStatus['PENDING'],
  code: 'invoice',
  customer: 'Rubber workforce compress',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
