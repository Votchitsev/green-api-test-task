export interface MessageInterface {
  type: 'incoming' | 'outgoing';
  text: string;
};

export interface ChatItemInterface {
  phoneNumber: number;
  messages: MessageInterface[];
};

export interface ChatInterface {
  chatList: ChatItemInterface[] | [],
  activeChat?: number,
};
