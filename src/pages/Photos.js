import React, { useContext } from 'react';
import Image from '../components/Image';
import { getClass } from '../utils';
import { context } from '../Context';

function Photos() {
  const { photos } = useContext(context);
  const imageElements = photos.map((photo, index) => {
    return (
      <div key={index}>
        <Image
          key={photo.id}
          img={photo}
          className={getClass(index)}
        />
      </div>
    );
  });
  return <main className="photos">{imageElements}</main>;
}

export default Photos;
