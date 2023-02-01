import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './specialties.reducer';

export const SpecialtiesDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const specialtiesEntity = useAppSelector(state => state.specialties.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="specialtiesDetailsHeading">Specialties</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{specialtiesEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{specialtiesEntity.name}</dd>
          <dt>Vet</dt>
          <dd>
            {specialtiesEntity.vets
              ? specialtiesEntity.vets.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.id}</a>
                    {specialtiesEntity.vets && i === specialtiesEntity.vets.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/specialties" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/specialties/${specialtiesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default SpecialtiesDetail;
