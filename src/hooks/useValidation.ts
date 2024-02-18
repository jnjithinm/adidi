interface ValidationProps {
    fieldName: string;
    value: string;
}

const useValidation = () => {
    const validateField = ({ fieldName, value }: ValidationProps) => {
        const onlyDigits = /^\d+$/;
        const mobileNumberRegex = /^[6-9]\d{9}$/;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let errorMessage = '';
        switch (fieldName) {
            case 'Mobile Number':
                let length = value.length;
                if (value === '') {
                    errorMessage = `Mobile Number is required`;
                } else if (!mobileNumberRegex.test(value)) {
                    if (!onlyDigits.test(value)) {
                        errorMessage =
                            'Only digit values are allowed for a Mobile Number.';
                    } else if (
                        !value.startsWith('6') &&
                        !value.startsWith('7') &&
                        !value.startsWith('8') &&
                        !value.startsWith('9')
                    ) {
                        errorMessage = `A Mobile Number(+91) should starts with a digit between 6 and 9.`;
                    } else if (length !== 10) {
                        errorMessage =
                            'A Mobile Number(+91) should contain 10 digits.';
                    } else {
                        errorMessage = 'Invalid Mobile Number';
                    }
                }
                break;
            case 'Email ID':
                if (value === '') {
                    errorMessage = `${fieldName} is required`;
                } else if (!emailRegex.test(value)) {
                    if (!value.includes('@')) {
                        errorMessage = `Email ID should contain the @ symbol`;
                    } else if (value.startsWith('@')) {
                        errorMessage = `Email ID should not start with the @ symbol`;
                    } else if (value.endsWith('@')) {
                        errorMessage = `Email ID should not end with the @ symbol`;
                    } else if (value.indexOf('@') !== value.lastIndexOf('@')) {
                        errorMessage = `Email ID should contain only one @ symbol`;
                    } else if (value.includes(' ')) {
                        errorMessage = `Email ID should not contain spaces`;
                    } else {
                        errorMessage = `Please enter a valid email ID`;
                    }
                }
                break;

            default:
                break;
        }
        return errorMessage;
    };

    return { validateField };
};

export default useValidation;
