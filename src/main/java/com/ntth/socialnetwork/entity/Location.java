package com.ntth.socialnetwork.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "location")
public class Location {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "location_id", nullable = false)
	private Long id;
	
	@Column(name = "country", nullable = false)
	private String country;
	
	@Column(name = "province", nullable = false)
	private String province;
	
	@Column(name = "city", nullable = false)
	private String city;
	
	@Column(name = "address", nullable = false)
	private String address;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Location(Long id, String country, String province, String city, String address) {
		super();
		this.id = id;
		this.country = country;
		this.province = province;
		this.city = city;
		this.address = address;
	}

	public Location() {
		super();
	}
	
	
	
	
	
}
