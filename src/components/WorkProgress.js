// @flow weak

import React              from 'react';
import WorkProgressPanel  from './workProgressPanel/WorkProgressPanel';

import { CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

const headers = ['#', 'Project', 'Manager', 'Deadline', 'Status', 'Progress'];
const content = [
  ['1', 'Facebook', 'Mark', '10/10/2014', <span className="label label-danger">in progress</span>, <span className="badge badge-info">50%</span>],
  ['2', 'Twitter', 'Evan', '10/8/2014', <span className="label label-success">completed</span>, <span className="badge badge-success">100%</span>],
  ['3', 'Google', 'Larry', '10/12/2014', <span className="label label-warning">in progress</span>, <span className="badge badge-warning">75%</span>],
  ['4', 'LinkedIn', 'Allen', '10/01/2015', <span className="label label-info">in progress</span>, <span className="badge badge-info">65%</span>],
  ['5', 'Tumblr', 'David', '01/11/2014', <span className="label label-warning">in progress</span>, <span className="badge badge-danger">95%</span>],
  ['6', 'Tesla', 'Musk', '01/11/2014', <span className="label label-info">in progress</span>, <span className="badge badge-success">95%</span>],
  ['7', 'Ghost', 'XXX', '01/11/2014', <span className="label label-info">in progress</span>, <span className="badge badge-success">95%</span>]
];

const Work = () => (
  <WorkProgressPanel>
    <Table>
      <CardHeader>
        {
          headers.map(
            (header, headerIdx) => {
              return (
                <Col key={headerIdx}>
                  {header}
                </Col>
              );
            }
          )
        }
      </CardHeader>
      <CardBody>
        {
          content.map(
            (contentRow, contentRowIdx) => {
              return (
                <Row key={contentRowIdx}>
                  {
                    contentRow.map(
                      (contentColumn, contentColumnIdx) => {
                        return (
                          <Col key={contentColumnIdx}>
                            {contentColumn}
                          </Col>
                        );
                      }
                    )
                  }
                </Row>
              );
            }
          )
        }
      </CardBody>
    </Table>
  </WorkProgressPanel>
);

export default Work;
