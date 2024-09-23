
export const validateCardholderName = (name) => {
    if (!name.trim()) {
        return "Can't be blank";
    }
    return null;
};

export const validateCardNumber = (number) => {
    if (!number.trim()) {
        return "Can't be blank";
    }
    if (!/^(\d{4}\s?){3}\d{4}$/.test(number.replace(/\s/g, ''))) {
        return 'Wrong format, numbers only';
    }
    return null;
};

export const validateExpMonth = (month) => {
    if (!month.trim()) {
        return "Can't be blank";
    }
    if (!/^\d{2}$/.test(month) || parseInt(month) < 1 || parseInt(month) > 12) {
        return 'Invalid month';
    }
    return null;
};

export const validateExpYear = (year) => {
    if (!year.trim()) {
        return "Can't be blank";
    }
    if (!/^\d{2}$/.test(year)) {
        return 'Invalid year';
    }
    return null;
};

export const validateCVC = (cvc) => {
    if (!cvc.trim()) {
        return "Can't be blank";
    }
    if (!/^\d{3,4}$/.test(cvc)) {
        return 'Invalid CVC';
    }
    return null;
};