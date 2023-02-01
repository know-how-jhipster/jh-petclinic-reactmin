import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './vets.reducer';

export const VetsDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const vetsEntity = useAppSelector(state => state.vets.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="vetsDetailsHeading">Vets</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{vetsEntity.id}</dd>
          <dt>
            <span id="firstname">Firstname</span>
          </dt>
          <dd>{vetsEntity.firstname}</dd>
          <dt>
            <span id="lastname">Lastname</span>
          </dt>
          <dd>{vetsEntity.lastname}</dd>
        </dl>
        <Button tag={Link} to="/vets" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/vets/${vetsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default VetsDetail;
