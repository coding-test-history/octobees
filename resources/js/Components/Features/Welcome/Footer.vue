<script setup>
// models
import { footerProps } from "@/Models/WelcomeModel.js";

// props maangement
defineProps(footerProps);
</script>

<template>
    <footer class="py-16 text-center text-sm text-black dark:text-white/70">
        Laravel v{{ laravelVersion }} (PHP v{{ phpVersion }})
    </footer>
</template>