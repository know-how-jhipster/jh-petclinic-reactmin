import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './visits.reducer';

export const VisitsDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const visitsEntity = useAppSelector(state => state.visits.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="visitsDetailsHeading">Visits</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{visitsEntity.id}</dd>
          <dt>
            <span id="visitdate">Visitdate</span>
          </dt>
          <dd>{visitsEntity.visitdate ? <TextFormat value={visitsEntity.visitdate} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="description">Description</span>
          </dt>
          <dd>{visitsEntity.description}</dd>
          <dt>Pet</dt>
          <dd>{visitsEntity.pet ? visitsEntity.pet.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/visits" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/visits/${visitsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default VisitsDetail;
