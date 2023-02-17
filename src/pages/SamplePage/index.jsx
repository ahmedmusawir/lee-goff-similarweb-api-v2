import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Page from '../../components/layouts/Page';
import Content from '../../components/layouts/Content';
import http from '../../services/httpService';

const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';

function SamplePage() {
  useEffect(() => {
    const getData = async () => {
      const { data: posts } = await http.get(apiEndpoint);
      console.log('Data From Fake JSON:', posts);
    };

    getData();
  }, []);
  return (
    <Page wide={true} pageTitle='Movie Form'>
      <Row className='justify-content-center'>
        <Col sm={12}>
          <Content width='w-100' cssClassNames='bg-light'>
            <h1 className='text-nihad-color'>
              <i class='bi bi-apple'></i>This is the Sample Page
            </h1>
            <h4 className='text-bibo-color'>COPY ME ...</h4>
            <p className='text-nimat-color'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              velit molestias odio, quod nulla deleniti. Commodi autem veniam at
              dolore laboriosam debitis placeat reiciendis sed, incidunt dicta
              cupiditate, cum expedita.
            </p>
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default SamplePage;
