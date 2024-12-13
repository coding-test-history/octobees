// general props
export const generalProps = {
    confirmsTwoFactorAuthentication: Boolean,
    sessions: Array,
    title: {
        type: String,
        default: "User Profile",
    },
    sessions: Array,
    user: Object,
    form: Object,
};

// two factor authentiction props
export const twoFactorProps = {
    twoFactorEnabled: Boolean,
    enableTwoFactorAuthentication: Function,
    confirmTwoFactorAuthentication: Function,
    regenerateRecoveryCodes: Function,
    showRecoveryCodes: Function,
    disableTwoFactorAuthentication: Function,
    confirming: Boolean,
    recoveryCodes: Array,
    disabling: Boolean,
    enabling: Boolean,
    confirmationForm: Object,
    qrCode: String,
    setupKey: String,
};