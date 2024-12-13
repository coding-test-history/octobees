// vue components
import { useForm } from "@inertiajs/vue3";

export default function useCreateTeamForm() {
    // Form management
    const form = useForm({
        name: "",
    });

    // process create tema
    const createTeam = () => {
        form.post(route("teams.store"), {
            errorBag: "createTeam",
            preserveScroll: true,
        });
    };

    return {
        form,
        createTeam,
    };
}
