// title props
export const titleProps = {
    title: {
        type: String,
        default: "API Tokens",
    },
};

// general props
export const generalProps = {
    availablePermissions: Array,
    defaultPermissions: Array,
    tokens: Array,
    show: Boolean,
    tokenValue: String,
    selectedPermissions: Array,
    processing: Boolean,
    tokenName: String,
};

// API token permission props
export const APITokenPermissionsProps = {
    managingPermissionsFor: Boolean,
    updateApiToken: Function,
};

// delete confirmation prosps
export const deleteConfirmationProps = {
    apiTokenBeingDeleted: Boolean,
    deleteApiToken: Function,
    confirmApiTokenDeletion: Function,
};

// manage api token props
export const manageApiTokenProps = {
    manageApiTokenPermissions: Function,
};

// token value props
export const tokenValueProps = {
    displayingToken: {
        type: Boolean,
        default: false,
    },
};