package com.mmt.konkan.controller;

import com.mmt.konkan.model.Package;
import com.mmt.konkan.repository.PackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class PackageController {
  @Autowired
  private PackageRepository packageRepository;

  @GetMapping("/packages")
  public List<Package> getPackages() {
    return packageRepository.findAll();
  }
}

