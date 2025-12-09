import { usePage } from '@inertiajs/react';

export function useCurrency() {
    const { appSettings } = usePage().props as any;
    
    const formatCurrency = (amount: number): string => {
        const symbol = appSettings?.currency_symbol || '$';
        return `${symbol}${amount.toFixed(2)}`;
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