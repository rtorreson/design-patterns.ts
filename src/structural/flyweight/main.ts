import { DeliveryFactory } from './delivery/delivery-factory';
import { deliveryContext } from './delivery/delivery-context';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Dezembro', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Tati', '20A', 'Av Portugal', 'SP');
deliveryContext(factory, 'Rafa', '502', 'Av Brasiliena', 'SP');
deliveryContext(factory, 'Gusta', '2', 'Rua A', 'BH');
deliveryContext(factory, 'João', '501', 'Rua B', 'RJ');

console.log();
console.log(factory.getLocations());
