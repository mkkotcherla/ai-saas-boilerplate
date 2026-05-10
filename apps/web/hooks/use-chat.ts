"use client";

import { useChat as useAIChat } from "@ai-sdk/react";
import { useCallback } from "react";
import type { ChatMessage } from "@ai-saas/shared";

export function useChat(conversationId?: string) {
  const {
    messages,
    input,
    setInput,
    handleSubmit,
    isLoading,
    stop,
    error,
    setMessages,
  } = useAIChat({
    api: "/api/chat",
    body: { conversationId },
    id: conversationId,
  });

  const send = useCallback(
    (message: string) => {
      setInput(message);
      handleSubmit(new Event("submit") as any, {
        data: { message, conversationId },
      });
    },
    [setInput, handleSubmit, conversationId]
  );

  const clear = useCallback(() => {
    setMessages([]);
  }, [setMessages]);

  // Map AI SDK messages to our shared ChatMessage type
  const chatMessages: ChatMessage[] = messages.map((m) => ({
    id: m.id,
    role: m.role as ChatMessage["role"],
    content: m.content,
    createdAt: m.createdAt?.toISOString(),
  }));

  return {
    messages: chatMessages,
    isLoading,
    error,
    send,
    clear,
    stop,
  };
}
