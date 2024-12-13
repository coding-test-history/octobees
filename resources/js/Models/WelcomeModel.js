// general props
export const generalProps = {
    canLogin: Boolean,
    canRegister: Boolean,
    title: {
        type: String,
        default: "Welcome",
    },
};

// on image error props
export const onImageErrorProps = {
    onImageError: {
        type: Function,
        required: true,
    },
};

// footer props
export const footerProps = {
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
};
