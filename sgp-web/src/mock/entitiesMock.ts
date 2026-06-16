import type { Customer, Supplier } from '@/types/bakery';

export const counterCustomerName = 'Balcão da padaria';

export const suppliersMock: Supplier[] = [
  {
    id: 1,
    name: 'Moinho Boa Safra',
    document: '12.345.678/0001-10',
    phone: '(11) 4002-1000',
    contactName: 'Marcos Almeida',
  },
  {
    id: 2,
    name: 'Laticínios Serra',
    document: '21.456.789/0001-22',
    phone: '(31) 3555-2200',
    contactName: 'Helena Duarte',
  },
  {
    id: 3,
    name: 'Queijos Mantiqueira',
    document: '33.987.654/0001-44',
    phone: '(35) 3221-4500',
    contactName: 'Rafael Costa',
  },
  {
    id: 4,
    name: 'Distribuidora Alfa',
    document: '45.876.321/0001-55',
    phone: '(11) 3003-9090',
    contactName: 'Camila Prado',
  },
  {
    id: 5,
    name: 'Empório Temperos',
    document: '56.111.222/0001-66',
    phone: '(41) 3344-7000',
    contactName: 'Sofia Lima',
  },
  {
    id: 6,
    name: 'Grãos do Vale',
    document: '67.222.333/0001-77',
    phone: '(43) 3311-8100',
    contactName: 'Daniel Ribeiro',
  },
  {
    id: 7,
    name: 'Hortifruti Bela Vista',
    document: '78.333.444/0001-88',
    phone: '(11) 3444-6100',
    contactName: 'Laura Mendes',
  },
  {
    id: 8,
    name: 'Charcutaria Roma',
    document: '89.444.555/0001-99',
    phone: '(11) 3222-4600',
    contactName: 'Paulo Neri',
  },
];

export const customersMock: Customer[] = [
  {
    id: 1,
    name: counterCustomerName,
    document: '-',
    phone: '-',
  },
  {
    id: 2,
    name: 'Padaria Central',
    document: '10.222.333/0001-40',
    phone: '(11) 3777-1200',
  },
  {
    id: 3,
    name: 'Mercado Aurora',
    document: '20.333.444/0001-50',
    phone: '(11) 3888-2100',
  },
  {
    id: 4,
    name: 'Café Jardim',
    document: '30.444.555/0001-60',
    phone: '(11) 3999-3200',
  },
  {
    id: 5,
    name: 'Hotel Primavera',
    document: '40.555.666/0001-70',
    phone: '(11) 3666-4300',
  },
  {
    id: 6,
    name: 'Mercearia União',
    document: '50.666.777/0001-80',
    phone: '(11) 3555-5400',
  },
  {
    id: 7,
    name: 'Empório São Bento',
    document: '60.777.888/0001-90',
    phone: '(11) 3444-6500',
  },
  {
    id: 8,
    name: 'Restaurante Villa',
    document: '70.888.999/0001-00',
    phone: '(11) 3333-7600',
  },
];

const storageKeys = {
  suppliers: 'sgp.suppliers.v2',
  customers: 'sgp.customers.v2',
};

const readStoredItems = <T>(key: string, fallback: T[]) => {
  if (typeof window === 'undefined') return [...fallback];

  try {
    const stored = window.localStorage.getItem(key);

    return stored ? (JSON.parse(stored) as T[]) : [...fallback];
  } catch {
    return [...fallback];
  }
};

const persistItems = <T>(key: string, items: T[]) => {
  if (typeof window === 'undefined') return;

  window.localStorage.setItem(key, JSON.stringify(items));
};

export const getSuppliers = () => readStoredItems<Supplier>(storageKeys.suppliers, suppliersMock);

export const saveSuppliers = (suppliers: Supplier[]) => {
  suppliersMock.splice(0, suppliersMock.length, ...suppliers);
  persistItems(storageKeys.suppliers, suppliers);
};

export const getCustomers = () => readStoredItems<Customer>(storageKeys.customers, customersMock);

export const saveCustomers = (customers: Customer[]) => {
  customersMock.splice(0, customersMock.length, ...customers);
  persistItems(storageKeys.customers, customers);
};
