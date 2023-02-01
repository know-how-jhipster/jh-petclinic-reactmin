import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ISpecialties } from 'app/shared/model/specialties.model';
import { getEntities as getSpecialties } from 'app/entities/specialties/specialties.reducer';
import { IVets } from 'app/shared/model/vets.model';
import { getEntity, updateEntity, createEntity, reset } from './vets.reducer';

export const VetsUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const specialties = useAppSelector(state => state.specialties.entities);
  const vetsEntity = useAppSelector(state => state.vets.entity);
  const loading = useAppSelector(state => state.vets.loading);
  const updating = useAppSelector(state => state.vets.updating);
  const updateSuccess = useAppSelector(state => state.vets.updateSuccess);

  const handleClose = () => {
    navigate('/vets' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getSpecialties({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...vetsEntity,
      ...values,
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...vetsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="petclinicApp.vets.home.createOrEditLabel" data-cy="VetsCreateUpdateHeading">
            Create or edit a Vets
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="vets-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Firstname"
                id="vets-firstname"
                name="firstname"
                data-cy="firstname"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  maxLength: { value: 32, message: 'This field cannot be longer than 32 characters.' },
                }}
              />
              <ValidatedField
                label="Lastname"
                id="vets-lastname"
                name="lastname"
                data-cy="lastname"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  maxLength: { value: 32, message: 'This field cannot be longer than 32 characters.' },
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/vets" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Back</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Save
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default VetsUpdate;
