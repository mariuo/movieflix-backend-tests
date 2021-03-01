package com.devsuperior.movieflix.dto;

import java.io.Serializable;

import com.devsuperior.movieflix.entities.Review;

public class ReviewDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String text;
	private Long movieId;
	private Long userId;
	
	public ReviewDTO() {
		
	}

	
	public ReviewDTO(Long id, String text, Long movieId, Long userId) {
		this.id = id;
		this.text = text;
		this.movieId = movieId;
		this.userId = userId;
	}


	public ReviewDTO(Review entity) {
		id = entity.getId();
		text = entity.getText();	
		movieId = entity.getMovie().getId();
		userId = entity.getUser().getId();
	}	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}


	public Long getMovieId() {
		return movieId;
	}


	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}


	public Long getUserId() {
		return userId;
	}


	public void setUserId(Long userId) {
		this.userId = userId;
	}
	
	

}
