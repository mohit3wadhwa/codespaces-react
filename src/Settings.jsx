import React from 'react';
import styled from 'styled-components';

const SettingsContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Input = styled.input`
  padding: 5px;
  width: 50px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Settings = ({ setColumns, setImageSize }) => {
  return (
    <SettingsContainer>
      <div>
        <Label>Columns: </Label>
        <Input
          type="number"
          min="1"
          max="5"
          defaultValue={3}
          onChange={(e) => setColumns(Number(e.target.value))}
        />
      </div>
      <div>
        <Label>Image Size (px): </Label>
        <Input
          type="number"
          min="100"
          max="500"
          defaultValue={200}
          onChange={(e) => setImageSize(Number(e.target.value))}
        />
      </div>
    </SettingsContainer>
  );
};

export default Settings;
