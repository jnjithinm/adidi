import { CurrencySymbol } from '../../constants/types';

export const ConvertToPrefixedAmount = (
    value: number,
    currency: CurrencySymbol,
) => {
    let StringValue = String(value).replace(/,/g, '').replace(currency, '');

    if (!isNaN(Number(value))) {
        StringValue = Number(value).toLocaleString('en-IN');
    }

    const prefixedValue = `${currency}\b${StringValue}`;

    return prefixedValue;
};
