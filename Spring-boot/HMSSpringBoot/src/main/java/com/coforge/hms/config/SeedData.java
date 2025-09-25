package com.coforge.hms.config;

import com.coforge.hms.model.Role;
import com.coforge.hms.model.ERole;          // <-- enum with ROLE_USER, ROLE_ADMIN
import com.coforge.hms.model.User;
import com.coforge.hms.repository.RoleRepository;
import com.coforge.hms.repository.UserRepository;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.List;

@Component
public class SeedData implements ApplicationRunner {
  private static final Logger log = LoggerFactory.getLogger(SeedData.class);

  private final RoleRepository roleRepo;
  private final UserRepository userRepo;

  public SeedData(RoleRepository roleRepo, UserRepository userRepo) {
    this.roleRepo = roleRepo;
    this.userRepo = userRepo;
  }

  @Override
  @Transactional
  public void run(ApplicationArguments args) {
    log.info("Seeding role ROLE_USER 1");
    // Ensure roles (ERole-based)
    Role roleUser = roleRepo.findByName(ERole.ROLE_USER)
            .orElseGet(() -> roleRepo.save(new Role(ERole.ROLE_USER)));
    Role roleAdmin = roleRepo.findByName(ERole.ROLE_ADMIN)
            .orElseGet(() -> roleRepo.save(new Role(ERole.ROLE_ADMIN)));

    // Ensure admin user
    User admin = userRepo.findByUsername("admin").orElseGet(() -> {
      User u = new User();
      u.setUsername("admin");
        // bcrypt for "admin123"
      u.setPassword("$2a$10$nuyV4m3SpBYuqzdRvQK4iO1PI9O0SkLyHQP2YB8CFksVJirzGrDT2");
      u.setRoles(new HashSet<>());
      return userRepo.save(u);
    });

    // Ensure normal user
    User user = userRepo.findByUsername("user").orElseGet(() -> {
      User u = new User();
      u.setUsername("user");
      // bcrypt for "user123"
      u.setPassword("$2a$10$ef4yjYkFjmAjnQk/GPecK.VxaNmpe6yPfBoZh9dcW1.uzf1zFYemu");
      u.setRoles(new HashSet<>());
      return userRepo.save(u);
    });

    // Assign roles if missing
    if (admin.getRoles() == null) admin.setRoles(new HashSet<>());
    if (user.getRoles() == null) user.setRoles(new HashSet<>());
    admin.getRoles().add(roleAdmin);
    user.getRoles().add(roleUser);

    userRepo.saveAll(List.of(admin, user));
  }
}