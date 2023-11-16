package dev.knowhowto.jh.petclinic.reactmin.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import dev.knowhowto.jh.petclinic.reactmin.domain.Visits;

/**
 * Spring Data JPA repository for the Visits entity.
 */
@SuppressWarnings("unused")
@Repository
public interface VisitsRepository extends JpaRepository<Visits, Long> {}
