export type ApiResponse = {
  status: number;
  ok: boolean;
  error?: string;
  requestedAt?: ISOString;
  data: any;
};

export type ISOString = string;

export type NavItem = {
  title: string;
  href?: string;
  icon?: string;
};

export type SideBarNavItem = NavItem & {
  items?: SideBarNavItem[];
};

export type Status = "idle" | "loading" | "succeeded" | "failed";

export type SubmitHandler<T = any> = (data: T) => void;

export type TextElement = HTMLHeadingElement | HTMLParagraphElement;

export type User = {
  id: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  username?: string;
  imageUrl: string;
  emailAddress: string;
  lastSignInAt: string;
  createdAt: string;
  updatedAt: string;
  update: (params: {}) => void;
  email_verified: Date;
  active: Boolean;
};
