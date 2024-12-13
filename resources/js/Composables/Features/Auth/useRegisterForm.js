// vue component
import { useForm } from "@inertiajs/vue3";

export default function useRegisterForm() {
    // form handler
    const form = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: false,
    });

    // process register
    const submit = () => {
        form.post(route("register"), {
            onFinish: () => form.reset("password", "password_confirmation"),
        });
    };

    return { form, submit };
}
