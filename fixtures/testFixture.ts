import { test as base } from '@playwright/test';

export interface AdminUser {
  username: string;
  role: string;
}

type APITestOptions = {
  adminUsers: AdminUser[] | [];
  createUsersWithRole: AdminUser[];
};

export const test = base.extend<APITestOptions>({
  adminUsers: [],

  createUsersWithRole: async ({ adminUsers }, use) => {
    const createdUsers1 = [];

    await use(adminUsers);
  },
});
