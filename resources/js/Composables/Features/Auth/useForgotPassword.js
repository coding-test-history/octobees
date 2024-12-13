// vue components
import { useForm } from "@inertiajs/vue3";

export default function useForgotPassword() {
    // form handler
    const form = useForm({
        email: "",
    });

    // process send link forgot password to email
    const submit = () => {
        form.post(route("password.email"));
    };

    return { form, submit };
}
