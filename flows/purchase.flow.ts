import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

export async function completePurchase(page: Page, user, checkoutInfo) {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const checkout = new CheckoutPage(page);

  await login.loginToAppWith(user.username, user.password);
  await inventory.addProductBackpack();
  await inventory.openCart();
  await checkout.completeCheckout(
    checkoutInfo.firstName,
    checkoutInfo.lastName,
    checkoutInfo.postalCode
  );
}