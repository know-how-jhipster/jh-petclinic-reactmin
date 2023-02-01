package org.ujar.jh.petclinic.reactmin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.ujar.jh.petclinic.reactmin.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
