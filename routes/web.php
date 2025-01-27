<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});

// Auth Routes
Route::prefix('auth')->group(function(){
    Route::get('/register', [App\Http\Controllers\Auth\RegisterController::class, 'index'])->name('register');
    Route::post('/register', [App\Http\Controllers\Auth\RegisterController::class, 'registers'])->name('register');
    
    Route::get('/login', [App\Http\Controllers\Auth\LoginController::class, 'index'])->name('login');
    Route::post('/login', [App\Http\Controllers\Auth\LoginController::class, 'authenticate'])->name('login');

    Route::get('/logout', [App\Http\Controllers\Auth\LogoutController::class, 'logout'])->name('logout');

});




// ADMIN ROUTES
Route::prefix('admin')->middleware(['auth', 'role:admin'])->group(function(){
    Route::get('/dashboard', [App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('admin.dashboard');

    Route::resource('courses', App\Http\Controllers\Admin\CourseController::class);
});