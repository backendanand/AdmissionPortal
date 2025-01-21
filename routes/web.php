<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});

Route::get('/auth/register', [App\Http\Controllers\Auth\RegisterController::class, 'index'])->name('register');
