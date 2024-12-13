<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\UserController;

Route::middleware([
    // 'auth:sanctum',
])->group(function () {
    // user management
    Route::name('users.')->prefix('users')->group(function () {
        Route::get('/', [UserController::class, 'getList'])->name('list');
        Route::get('/{id}', [UserController::class, 'getUserById'])->name('get');
        Route::post('/store', [UserController::class, 'storeUser'])->name('store');
        Route::put('/update/{id}', [UserController::class, 'updateUser'])->name('update');
        Route::delete('/delete/{id}', [UserController::class, 'deleteUser'])->name('delete');
    });
});
