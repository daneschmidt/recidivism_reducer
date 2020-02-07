import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const InfoPage = () => (
  <div>
    <h1>The Info Page</h1>
    
    <p>
      Tyto project is getting kicked off.
    </p>

    <img src="https://live.staticflickr.com/8055/8116623060_4227d86ac2_b.jpg" alt="Barn Owl" />
  </div>
);

export default InfoPage;
