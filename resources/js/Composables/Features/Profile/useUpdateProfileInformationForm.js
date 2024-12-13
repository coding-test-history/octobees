// vue components
import { ref } from "vue";
import { useForm, router } from "@inertiajs/vue3";

export default function UpdateProfileInformationForm(props) {
    // form handler
    const form = useForm({
        _method: "PUT",
        name: props.user.name,
        email: props.user.email,
        photo: null,
    });

    // default 
    const verificationLinkSent = ref(null);
    const photoPreview = ref(null);
    const photoInput = ref(null);

    // send email verification handler
    const sendEmailVerification = () => {
        verificationLinkSent.value = true;
    };

    // open modal for select new photo
    const selectNewPhoto = () => {
        photoInput.value.click();
    };

    // update photo preview that was selected
    const updatePhotoPreview = () => {
        const photo = photoInput.value.files[0];
        if (!photo) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            photoPreview.value = e.target.result;
        };
        reader.readAsDataURL(photo);
    };

    // prcessing update profile information
    const updateProfileInformation = () => {
        if (photoInput.value) {
            form.photo = photoInput.value.files[0];
        }

        form.post(route("user-profile-information.update"), {
            errorBag: "updateProfileInformation",
            preserveScroll: true,
            onSuccess: () => clearPhotoFileInput(),
        });
    };

    // process delete user photo
    const deletePhoto = () => {
        router.delete(route("current-user-photo.destroy"), {
            preserveScroll: true,
            onSuccess: () => {
                photoPreview.value = null;
                clearPhotoFileInput();
            },
        });
    };

    // clear photo before submit
    const clearPhotoFileInput = () => {
        if (photoInput.value?.value) {
            photoInput.value.value = null;
        }
    };

    return {
        updateProfileInformation,
        sendEmailVerification,
        updatePhotoPreview,
        selectNewPhoto,
        deletePhoto,
        form,
        verificationLinkSent,
        photoPreview,
        photoInput,
    };
}
