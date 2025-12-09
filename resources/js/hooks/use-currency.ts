import { usePage } from '@inertiajs/react';

export function useCurrency() {
    const { appSettings } = usePage().props as any;
    
    const formatCurrency = (amount: number | string | null | undefined): string => {
        const symbol = appSettings?.currency_symbol || '$';
        const numAmount = Number(amount) || 0;
        return `${symbol}${numAmount.toFixed(2)}`;
    };

    const getCurrencySymbol = (): string => {
        return appSettings?.currency_symbol || '$';
    };

    const getCurrency = (): string => {
        return appSettings?.currency || 'USD';
    };

    return {
        formatCurrency,
        getCurrencySymbol,
        getCurrency,
    };
}