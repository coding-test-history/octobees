// vue components
import { useForm } from "@inertiajs/vue3";

export default function useUpdateTeamNameForm(team) {
    // checking team
    if (!team || !team.name) {
        console.error("Invalid team data provided to composable.");
    }

    // Form management
    const form = useForm({
        name: team.name,
    });

    // Process update team name
    const updateTeamName = () => {
        form.put(route("teams.update", team), {
            errorBag: "updateTeamName",
            preserveScroll: true,
        });
    };

    return {
        form,
        updateTeamName,
    };
}
