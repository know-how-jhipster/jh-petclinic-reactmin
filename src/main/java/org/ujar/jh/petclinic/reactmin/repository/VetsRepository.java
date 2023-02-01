package org.ujar.jh.petclinic.reactmin.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import org.ujar.jh.petclinic.reactmin.domain.Vets;

/**
 * Spring Data JPA repository for the Vets entity.
 */
@SuppressWarnings("unused")
@Repository
public interface VetsRepository extends JpaRepository<Vets, Long> {}
