package com.ntth.socialnetwork.entity;

import java.sql.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "location")
public class Location {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "location_id", nullable = false)
	private Long id;

	@NotBlank
	@Size(max = 20)
	@Column(name = "country", nullable = false)
	private String country;

  	@NotBlank
  	@Size(max = 50)
  	@Column(name = "province", nullable = false)
  	private String province;
  	
	@NotBlank
  	@Size(max = 50)
  	@Column(name = "city", nullable = false)
  	private String city;
  
	@NotBlank
  	@Size(max = 50)
  	@Column(name = "address", nullable = false)
  	private String address;

	public Location(Long id, @NotBlank @Size(max = 20) String country, @NotBlank @Size(max = 50) String province,
			@NotBlank @Size(max = 50) String city, @NotBlank @Size(max = 50) String address) {
		super();
		this.id = id;
		this.country = country;
		this.province = province;
		this.city = city;
		this.address = address;
	}

	public Location() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public String getCountry() {
		return country;
	}

	public String getProvince() {
		return province;
	}

	public String getCity() {
		return city;
	}

	public String getAddress() {
		return address;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	
	
  	
  	
}
