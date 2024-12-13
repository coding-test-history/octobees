<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoriesServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->userRepositories();
    }

    private function userRepositories(){
        $this->app->bind(
            'App\Repositories\User\UserRepositories',
            'App\Repositories\User\EloquentUserRepositories'
        );
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
