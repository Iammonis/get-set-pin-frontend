export type ConnectionStatus = "connected" | "disconnected" | "";

export interface Filters {
  search: string;
  status: ConnectionStatus;
}

export interface PinterestAccount {
  id: string;
  username: string;
  avatarUrl?: string;
  connectedAt: Date; // Returned from API as ISO string
  isDefault: boolean;
}

export interface PinterestAuthResponse {
  authUrl: string;
}
