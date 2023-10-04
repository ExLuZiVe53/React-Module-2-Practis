import React from 'react';
import DeviceCard from 'components/DeviceCard/DeviceCard';

const DeviceList = ({ devices, onDeleteDevice }) => {
  {
    /* {devices.map(device => (
        <DeviceCard
          Передаємо пропсами дані з компоненту DeviceCard
          id={device.id}
          title={device.title}
          brand={device.brand}
          price={device.price}
          type={device.type}
          coverImage={device.coverImage}
        />
      ))} */
  }
  return (
    <div>
      {devices.map(({ id, title, brand, price, type, coverImage }) => (
        // або деструктуризуємо поля які потрібно з device
        <DeviceCard
          // Передаємо пропсами дані з компоненту DeviceCard
          // додаємо ключ для методу map, React не зрозуміє що потрібно map-нути
          key={id}
          id={id}
          title={title}
          brand={brand}
          price={price}
          type={type}
          coverImage={coverImage}
          // Передаємо пропсом цей метод
          onDeleteDevice={onDeleteDevice}
        />
      ))}
    </div>
  );
};

export default DeviceList;
