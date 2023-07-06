package com.ryanlisse.springbootchatgpt.dto;

import com.ryanlisse.springbootchatgpt.model.Message;

import java.util.List;

public record ChatResponseDTO(List<ChatResponseDTO.Choice> choices) {
    public static record Choice(int index, Message message) {}
}
