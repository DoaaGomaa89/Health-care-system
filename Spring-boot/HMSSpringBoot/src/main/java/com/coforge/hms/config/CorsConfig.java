package com.coforge.hms.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import java.util.Arrays;

@Configuration
public class CorsConfig {

	@Bean
	public CorsFilter corsFilter() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();

		config.setAllowCredentials(true);
		config.setAllowedOrigins(Arrays.asList(
				"http://localhost:4200",
				"http://localhost",
				"http://localhost:80",
				"http://127.0.0.1",
				"http://127.0.0.1:80",
				"http://localhost:8080",
				"http://127.0.0.1:8080"
		));
		config.addAllowedHeader("*");
		config.addAllowedMethod("OPTIONS");
		config.addAllowedMethod("POST");
		config.addAllowedMethod("PUT");
		config.addAllowedMethod("GET");
		config.addAllowedMethod("DELETE");

		source.registerCorsConfiguration("/**", config);

		return new CorsFilter(source);
	}
}
