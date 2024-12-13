<template>
    <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-white-200">
            <thead class="bg-dark-50">
                <slot name="thead" />
            </thead>
            <tbody class="bg-dark divide-y divide-white-200 border-b border-gray-100 dark:border-gray-700">
                <slot name="tbody" />
            </tbody>
        </table>
    </div>
</template>
