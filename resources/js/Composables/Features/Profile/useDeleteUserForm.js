// vue components
import { ref } from "vue";
import { useForm } from "@inertiajs/vue3";

export default function useDeleteUserForm() {
    // Form management
    const form = useForm({
        password: "",
    });

    // default
    const passwordInput = ref(null);
    const confirmingUserDeletion = ref(false);

    // comfirm user deletion handler
    const confirmUserDeletion = () => {
        confirmingUserDeletion.value = true;
        setTimeout(() => passwordInput.value.focus(), 250);
    };

    // process delete user
    const deleteUser = () => {
        form.delete(route("current-user.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.value.focus(),
            onFinish: () => form.reset(),
        });
    };

    // close modal handler
    const closeModal = () => {
        confirmingUserDeletion.value = false;
        form.reset();
    };

    return {
        confirmingUserDeletion,
        confirmUserDeletion,
        deleteUser,
        closeModal,
        form,
        passwordInput,
    };
}
