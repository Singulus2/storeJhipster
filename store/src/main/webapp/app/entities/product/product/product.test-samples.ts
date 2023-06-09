import { Size } from 'app/entities/enumerations/size.model';

import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 77672,
  name: 'Customer-focused',
  price: 96307,
  itemSize: Size['XL'],
};

export const sampleWithPartialData: IProduct = {
  id: 7747,
  name: 'Programmable Networked deliver',
  price: 39641,
  itemSize: Size['XXL'],
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
};

export const sampleWithFullData: IProduct = {
  id: 43445,
  name: 'Health calculate neural',
  description: 'District',
  price: 72582,
  itemSize: Size['S'],
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
};

export const sampleWithNewData: NewProduct = {
  name: 'Flats',
  price: 90064,
  itemSize: Size['L'],
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
