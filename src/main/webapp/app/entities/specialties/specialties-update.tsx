import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IVets } from 'app/shared/model/vets.model';
import { getEntities as getVets } from 'app/entities/vets/vets.reducer';
import { ISpecialties } from 'app/shared/model/specialties.model';
import { getEntity, updateEntity, createEntity, reset } from './specialties.reducer';

export const SpecialtiesUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const vets = useAppSelector(state => state.vets.entities);
  const specialtiesEntity = useAppSelector(state => state.specialties.entity);
  const loading = useAppSelector(state => state.specialties.loading);
  const updating = useAppSelector(state => state.specialties.updating);
  const updateSuccess = useAppSelector(state => state.specialties.updateSuccess);

  const handleClose = () => {
    navigate('/specialties');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getVets({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...specialtiesEntity,
      ...values,
      vets: mapIdList(values.vets),
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
          ...specialtiesEntity,
          vets: specialtiesEntity?.vets?.map(e => e.id.toString()),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="petclinicApp.specialties.home.createOrEditLabel" data-cy="SpecialtiesCreateUpdateHeading">
            Create or edit a Specialties
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="specialties-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Name"
                id="specialties-name"
                name="name"
                data-cy="name"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  maxLength: { value: 32, message: 'This field cannot be longer than 32 characters.' },
                }}
              />
              <ValidatedField label="Vet" id="specialties-vet" data-cy="vet" type="select" multiple name="vets">
                <option value="" key="0" />
                {vets
                  ? vets.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/specialties" replace color="info">
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

export default SpecialtiesUpdate;
