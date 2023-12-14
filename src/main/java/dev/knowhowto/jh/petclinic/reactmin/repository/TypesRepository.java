package dev.knowhowto.jh.petclinic.reactmin.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import dev.knowhowto.jh.petclinic.reactmin.domain.Types;

/**
 * Spring Data JPA repository for the Types entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TypesRepository extends JpaRepository<Types, Long> {}
