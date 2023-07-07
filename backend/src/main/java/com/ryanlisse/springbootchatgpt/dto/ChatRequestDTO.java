package com.ryanlisse.springbootchatgpt.dto;

import com.ryanlisse.springbootchatgpt.model.Message;

import java.util.ArrayList;
import java.util.List;

public record ChatRequestDTO(String model, List<Message> messages, int n, double temperature) {
    public ChatRequestDTO(String model, String philosopher, String content) {
        this(
                model,
                new ArrayList<>(List.of(
                        new Message("system",
                                "I want you to act as a philosopher that speaks like " + philosopher),
                        new Message("user", content)
                )),
                1,
                0.5
        );
    }
}
