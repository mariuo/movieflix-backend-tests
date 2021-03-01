package com.devsuperior.movieflix.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.devsuperior.movieflix.entities.Genre;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Long>{
	
	@Query("SELECT obj FROM Genre obj ORDER BY obj.name ASC")
	List<Genre> findOrderByNameAsc();

}
