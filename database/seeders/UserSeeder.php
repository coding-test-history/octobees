<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->withPersonalTeam()->create([
            'name' => 'User 1',
            'email' =>  'user1@mail.com',
            'password' => 'password',
            'tanggal_lahir' => '2024-05-25',
            'tempat_tinggal' => 'Medan'
        ]);
    }
}
