import React from 'react';
import PageHeading from '../components/PageHeading';
import { Container, Row } from 'react-bootstrap';
import SubHeading  from '../components/SubHeading';
import PageContent from '../components/PageContent'

function Introduction() {
  return (
    <div className='page' >
      
      <Container>
                <Row>
                <PageHeading PageHeading = "Introduction"/>
                </Row>
                <SubHeading SubHeading = "Dataset name" />
                <PageContent PageContent = "The dataset in this use case consist of data of brake pads for disc brakes of a car. The brake pads either belong to front or rear axle (vorderachse or hinterachse).The data contains dimensional attributes like length, width and thickness(in millimetres) of brake pads."/>
                <PageContent PageContent = "The entire dataset comprise of 4001 entries and 5 columns, some of which are null (NaN). On removal of NaN values from the target feature(classOfPart) we have a dataset consisting of 1440 entries and 5 columns." />
            </Container>
    </div>
  );
}

export default Introduction;
