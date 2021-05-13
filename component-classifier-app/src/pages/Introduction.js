import React from 'react';
import PageHeading from '../components/PageHeading';
import { Container, Row } from 'react-bootstrap';


function Introduction() {
  return (
    <div className='page' >
      
      <Container>
                <Row>
                <PageHeading PageHeading = "Introduction"/>
                </Row>
            </Container>
    </div>
  );
}

export default Introduction;
