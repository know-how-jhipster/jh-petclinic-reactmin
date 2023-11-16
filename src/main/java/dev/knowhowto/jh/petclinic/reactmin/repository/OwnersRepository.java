package dev.knowhowto.jh.petclinic.reactmin.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import dev.knowhowto.jh.petclinic.reactmin.domain.Owners;

/**
 * Spring Data JPA repository for the Owners entity.
 */
@SuppressWarnings("unused")
@Repository
public interface OwnersRepository extends JpaRepository<Owners, Long> {}
