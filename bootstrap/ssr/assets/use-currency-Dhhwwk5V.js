import { usePage } from "@inertiajs/react";
function useCurrency() {
  const { appSettings } = usePage().props;
  const formatCurrency = (amount) => {
    const symbol = appSettings?.currency_symbol || "$";
    const numAmount = Number(amount) || 0;
    return `${symbol}${numAmount.toFixed(2)}`;
  };
  const getCurrencySymbol = () => {
    return appSettings?.currency_symbol || "$";
  };
  const getCurrency = () => {
    return appSettings?.currency || "USD";
  };
  return {
    formatCurrency,
    getCurrencySymbol,
    getCurrency
  };
}
export {
  useCurrency as u
};
