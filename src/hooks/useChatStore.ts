import * as webllm from "@mlc-ai/web-llm";
import { create } from "zustand";
import { Model } from "../models";

interface State {
  // Model
  selectedModel: Model;
  setSelectedModel: (model: Model) => void;

  // User input
  userInput: string;
  setUserInput: (input: string) => void;

  // Inference state
  isGenerating: boolean;
  setIsGenerating: (isGenerating: boolean) => void;

  // Chat history
  chatHistory: webllm.ChatCompletionMessageParam[];
  setChatHistory: (
    fn: (
      chatHistory: webllm.ChatCompletionMessageParam[]
    ) => webllm.ChatCompletionMessageParam[]
  ) => void;
}

const useChatStore = create<State>((set) => ({
  // Model
  selectedModel: Model.LLAMA_3_8B_INSTRUCT_Q4F16_1,
  setSelectedModel: (model: Model) => set({ selectedModel: model }),

  // User input
  userInput: "",
  setUserInput: (input: string) => set({ userInput: input }),

  // Inference state
  isGenerating: false,
  setIsGenerating: (isGenerating: boolean) => set({ isGenerating }),

  // Chat history
  chatHistory: [],
  setChatHistory: (fn) =>
    set((state) => ({
      chatHistory: fn(state.chatHistory),
    })),
}));

export default useChatStore;
