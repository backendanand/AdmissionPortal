<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Rishab Kumar',
            'email' => 'rishab@gmail.com',
            'password' => Hash::make('admin@123'),
            'role_id' => Role::where('name', '=', 'admin')->first()->id,
        ]);

        User::create([
            'name' => 'Shubham Kumar',
            'email' => 'shubham@gmail.com',
            'password' => Hash::make('admin@123'),
            'role_id' => Role::where('name', '=', 'user')->first()->id,
        ]);
    }
}
