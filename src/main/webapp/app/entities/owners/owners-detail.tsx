import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './owners.reducer';

export const OwnersDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const ownersEntity = useAppSelector(state => state.owners.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="ownersDetailsHeading">Owners</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{ownersEntity.id}</dd>
          <dt>
            <span id="firstname">Firstname</span>
          </dt>
          <dd>{ownersEntity.firstname}</dd>
          <dt>
            <span id="lastname">Lastname</span>
          </dt>
          <dd>{ownersEntity.lastname}</dd>
          <dt>
            <span id="address">Address</span>
          </dt>
          <dd>{ownersEntity.address}</dd>
          <dt>
            <span id="city">City</span>
          </dt>
          <dd>{ownersEntity.city}</dd>
          <dt>
            <span id="telephone">Telephone</span>
          </dt>
          <dd>{ownersEntity.telephone}</dd>
        </dl>
        <Button tag={Link} to="/owners" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/owners/${ownersEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default OwnersDetail;
