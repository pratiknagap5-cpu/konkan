package com.mmt.konkan.model;

import jakarta.persistence.*;

@Entity
public class Package {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  
  private String title;
  private String subtitle;
  private Double price;
  private String duration;
  private Double rating;
  private Long reviews;
  private String image;
  
  // getters/setters
  public Long getId() { return id; }
  public void setId(Long id) { this.id = id; }
  public String getTitle() { return title; }
  public void setTitle(String title) { this.title = title; }
  // ... add others
}

