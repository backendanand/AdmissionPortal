<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});

Route::get('/auth/register', [App\Http\Controllers\Auth\RegisterController::class, 'index'])->name('register');
Route::post('/auth/register', [App\Http\Controllers\Auth\RegisterController::class, 'registers'])->name('register');

Route::get('/auth/login', [App\Http\Controllers\Auth\LoginController::class, 'index'])->name('login');
Route::post('/auth/login', [App\Http\Controllers\Auth\LoginController::class, 'authenticate'])->name('login');
