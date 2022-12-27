package com.ntth.socialnetwork.payload.request;

public class ConversationRequest {
	private String name;
	private Boolean type;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Boolean getType() {
		return type;
	}
	public void setType(Boolean type) {
		this.type = type;
	}
}
