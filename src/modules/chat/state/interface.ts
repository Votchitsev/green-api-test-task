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
  error: string | null,
};

export interface ReqDataInterface {
  idInstance: string;
  apiTokenInstance: string;
  destNumber?: number;
  message?: string;
};
