// general props
export const generalProps = {
    status: String,
    form: Object,
};

// login props
export const loginProps = {
    canResetPassword: Boolean,
};

// reset password props
export const resetPasswordProps = {
    email: String,
    token: String,
};

// two factor authentication props
export const twoFactorAuthenticationProps = {
    recovery: {
        type: [Boolean, Number],
        default: false,
    },
    toggleRecovery: Function,
    codeInput: String,
    recoveryCodeInput: String,
};
