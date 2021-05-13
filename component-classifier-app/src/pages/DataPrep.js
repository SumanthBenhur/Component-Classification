import React from 'react';
import PageHeading from '../components/PageHeading'; 
import { Container, Row } from 'react-bootstrap';
function DataPrep() {
  return (
    <div className='page'>
      <Container>
        <Row>
        <PageHeading PageHeading = "Data Preparation" />
        </Row>
      </Container>
    </div>
  );
}

export default DataPrep;
