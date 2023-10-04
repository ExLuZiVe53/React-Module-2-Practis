import imgDevice from 'assets/images/devicePhoto.jpg';

import DeviceList from './DeviceList/DeviceList';
import { Component } from 'react';

const devices = [
  {
    id: 1,
    title: 'Smartfone',
    brand: 'Apple',
    price: '999.99',
    type: 'Mobile',
    coverImage: imgDevice,
  },
  {
    id: 2,
    title: 'leptop',
    brand: 'Dell',
    price: '1299.99',
    type: 'Computer',
    coverImage: imgDevice,
  },
  {
    id: 3,
    title: 'Smartwatch',
    brand: 'Samsung',
    price: '249.99',
    type: 'Wearable',
    coverImage: imgDevice,
  },
  {
    id: 4,
    title: 'Tablet',
    brand: 'Amazon',
    price: '199.99',
    type: 'Mobile',
    coverImage: imgDevice,
  },
  {
    id: 5,
    title: 'TV',
    brand: 'Sony',
    price: '799.99',
    type: 'Elektronics',
    coverImage: imgDevice,
  },
  {
    id: 6,
    title: 'Gaming console',
    brand: 'Microsoft',
    price: '399.99',
    type: 'Gaming',
    coverImage: imgDevice,
  },
  {
    id: 7,
    title: 'Camera',
    brand: 'Canon',
    price: '599.99',
    type: 'Photography',
    coverImage: imgDevice,
  },
  {
    id: 8,
    title: 'Beadphones',
    brand: 'Sony',
    price: '149.99',
    type: 'Audio',
    coverImage: imgDevice,
  },
  {
    id: 9,
    title: 'Router',
    brand: 'Linksys',
    price: '79.99',
    type: 'Beatworking',
    coverImage: imgDevice,
  },
  {
    id: 10,
    title: 'Fitnes Traker',
    brand: 'Fitbit',
    price: '79.99',
    type: 'Wearable',
    coverImage: imgDevice,
  },
];

// export const App = () => {
//   return (
//     <div>
//       <h1>Device store</h1>
//       {/* за допомогою {} у js пишемо jsx-файли */}
//       {/* Після імпорту передаємо пропси */}
//       <DeviceList devices={devices} />
//     </div>
//   );
// };

export class App extends Component {
  // створюємо стейт стану
  state = {
    devices: devices,
  };

  onDeleteDevice = id => {
    this.setState({
      devices: this.state.devices.filter(device => device.id !== id),
    });
  };
  render() {
    return (
      <div>
        <h1>Device store</h1>
        {/* за допомогою {} у js пишемо jsx-файли*/}
        {/*Після імпорту передаємо пропси */}
        <DeviceList
          devices={this.state.devices}
          onDeleteDevice={this.onDeleteDevice}
        />
      </div>
    );
  }
}
