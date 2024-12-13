// vue components
import { ref } from "vue";
import { useForm } from "@inertiajs/vue3";

export default function useDeleteTeamForm(team) {
    // Form management
    const form = useForm({});

    // Default state
    const confirmingTeamDeletion = ref(false);

    // Confirm team deletion handler
    const confirmTeamDeletion = () => {
        confirmingTeamDeletion.value = true;
    };

    // Process delete team
    const deleteTeam = () => {
        if (!team || !team.id) {
            console.error("Team data is missing or invalid.");
            return;
        }

        form.delete(route("teams.destroy", team), {
            errorBag: "deleteTeam",
        });
    };

    return {
        form,
        confirmingTeamDeletion,
        confirmTeamDeletion,
        deleteTeam,
    };
}
