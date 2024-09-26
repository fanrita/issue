import { test } from '../fixtures/testFixture';
import {expect} from "@playwright/test";


test.describe('Args to fixtures', () => {
  const adminUsers= [{username: 'admin1', role: 'admin'}, {username: 'admin2', role: 'moderator'}];

  test.use({adminUsers});
  test('T-1: should pass list of objects', async ({ page, createUsersWithRole }) => {
    expect (createUsersWithRole).toBe(adminUsers);
  });

});


