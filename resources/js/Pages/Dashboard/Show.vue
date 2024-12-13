<script setup>
// layout
import AppLayout from '@/Layouts/AppLayout.vue';

// card components
import Breadcrumb from '@/Components/Cards/Breadcrumb.vue';

// feature components
import Content from '@/Components/Features/Dashboard/Content.vue';

// models
import { props } from '@/Models/DashboardModel.js';

// props management
defineProps(props);
</script>

<template>
    <AppLayout :title="title">
        
        <!-- header -->
        <template #header>
            <Breadcrumb :title="title" />
        </template>
        <!-- end header -->

        <!-- content -->
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
                    <Content />
                </div>
            </div>
        </div>
        <!-- end content -->
    </AppLayout>
</template>