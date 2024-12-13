// vue components
import { router } from "@inertiajs/vue3";

export default function useNavbar() {
    // switch team handler
    const switchToTeam = (team) => {
        router.put(
            route("current-team.update"),
            {
                team_id: team.id,
            },
            {
                preserveState: false,
            }
        );
    };

    // logout handler
    const logout = () => {
        router.post(route("logout"));
    };

    return { switchToTeam, logout };
}
