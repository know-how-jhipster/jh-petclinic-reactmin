import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IOwners } from 'app/shared/model/owners.model';
import { getEntity, updateEntity, createEntity, reset } from './owners.reducer';

export const OwnersUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const ownersEntity = useAppSelector(state => state.owners.entity);
  const loading = useAppSelector(state => state.owners.loading);
  const updating = useAppSelector(state => state.owners.updating);
  const updateSuccess = useAppSelector(state => state.owners.updateSuccess);

  const handleClose = () => {
    navigate('/owners');
  };

  useEffect(() => {
    if (!isNew) {
      dispatch(getEntity(id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...ownersEntity,
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
          ...ownersEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="petclinicApp.owners.home.createOrEditLabel" data-cy="OwnersCreateUpdateHeading">
            Create or edit a Owners
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="owners-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Firstname"
                id="owners-firstname"
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
                id="owners-lastname"
                name="lastname"
                data-cy="lastname"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  maxLength: { value: 32, message: 'This field cannot be longer than 32 characters.' },
                }}
              />
              <ValidatedField
                label="Address"
                id="owners-address"
                name="address"
                data-cy="address"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  maxLength: { value: 255, message: 'This field cannot be longer than 255 characters.' },
                }}
              />
              <ValidatedField
                label="City"
                id="owners-city"
                name="city"
                data-cy="city"
                type="text"
                validate={{
                  maxLength: { value: 32, message: 'This field cannot be longer than 32 characters.' },
                }}
              />
              <ValidatedField
                label="Telephone"
                id="owners-telephone"
                name="telephone"
                data-cy="telephone"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  maxLength: { value: 20, message: 'This field cannot be longer than 20 characters.' },
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/owners" replace color="info">
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

export default OwnersUpdate;
