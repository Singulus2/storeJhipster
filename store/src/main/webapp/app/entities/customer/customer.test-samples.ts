import { Gender } from 'app/entities/enumerations/gender.model';

import { ICustomer, NewCustomer } from './customer.model';

export const sampleWithRequiredData: ICustomer = {
  id: 24379,
  firstName: 'Mats',
  lastName: 'Wassiluk',
  gender: Gender['FEMALE'],
  email: 'Cz@tK):.gTR[u',
  phone: '+49-853-0069931',
  addressLine1: 'THX Gabun',
  city: 'Schellenbeckscheid',
  country: 'Oman',
};

export const sampleWithPartialData: ICustomer = {
  id: 58371,
  firstName: 'Alexandra',
  lastName: 'Beutelspacher',
  gender: Gender['FEMALE'],
  email: 'WkZ@Sc.%V',
  phone: '+49-335-3342987',
  addressLine1: 'Cross-platform revolutionary Games',
  city: 'Los Angeles',
  country: 'Kaimaninseln',
};

export const sampleWithFullData: ICustomer = {
  id: 76239,
  firstName: 'Fabienne',
  lastName: 'Scheurer',
  gender: Gender['OTHER'],
  email: 'n@~Zw]/."=y',
  phone: '+49-1150-17963245',
  addressLine1: 'Centralized',
  addressLine2: 'Lodge Wooden',
  city: 'Montagburg',
  country: 'Bouvetinsel',
};

export const sampleWithNewData: NewCustomer = {
  firstName: 'Matthis',
  lastName: 'Hügel',
  gender: Gender['FEMALE'],
  email: "4(a@h(i'.e)}Pk",
  phone: '(0967) 554115888',
  addressLine1: 'Avon',
  city: 'Nord Jona',
  country: 'St. Helena',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
