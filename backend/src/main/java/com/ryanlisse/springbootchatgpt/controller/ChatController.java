package com.ryanlisse.springbootchatgpt.controller;

import com.ryanlisse.springbootchatgpt.dto.ChatRequestDTO;
import com.ryanlisse.springbootchatgpt.dto.ChatResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.client.RestTemplate;

@RestController
public class ChatController {

    @Qualifier("openaiRestTemplate")
    @Autowired
    private RestTemplate restTemplate;

    @Value("${openai.model}")
    private String model;

    @Value("${openai.api.url}")
    private String apiUrl;

    public static class AskRequest {
        public String prompt;
        public String philosopher;
    }
    @GetMapping("/")
    public String sayHello(){
        return "Hello";
    }



    @PostMapping("/ask")
    public String chat(@RequestBody AskRequest askRequest) {
        ChatRequestDTO request = new ChatRequestDTO(model, askRequest.philosopher, askRequest.prompt);
        ChatResponseDTO response = restTemplate.postForObject(apiUrl, request, ChatResponseDTO.class);

        if (response == null || response.choices().isEmpty()) {
            return "No response";
        }
        return response.choices().get(0).message().content();
    }
}
