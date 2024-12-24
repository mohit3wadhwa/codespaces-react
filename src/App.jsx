import React, { useState } from 'react';
import styled from 'styled-components';
import Gallery from './Gallery';
import Settings from './Settings';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

function App() {
  const [columns, setColumns] = useState(3); // Default columns = 3
  const [imageSize, setImageSize] = useState(200); // Default image size = 200px

  return (
    <AppContainer>
      <h1>Customizable Product Gallery</h1>
      <Settings setColumns={setColumns} setImageSize={setImageSize} />
      <Gallery columns={columns} imageSize={imageSize} />
    </AppContainer>
  );
}

export default App;
