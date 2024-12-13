<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;

uses(RefreshDatabase::class);

it('can get all users', function () {
    // Seed some users in the database
    DB::table('users')->insert([
        ['name' => 'John Doe', 'email' => 'john.doe@example.com', 'password' => 'password', 'tanggal_lahir' => '2024-01-01', 'tempat_tinggal' => 'Bandung'],
        ['name' => 'Jane Smith', 'email' => 'jane.smith@example.com', 'password' => 'password', 'tanggal_lahir' => '2024-01-01', 'tempat_tinggal' => 'Bandung'],
    ]);

    // Test the GET /users endpoint
    $response = $this->getJson('/api/users');

    $response->assertStatus(200)
        ->assertJsonStructure([
            'status',
            'data' => [
                'current_page',
                'data' => [
                    '*' => [
                        'id',
                        'name',
                        'email',
                        'created_at',
                        'updated_at',
                    ],
                ],
                'first_page_url',
                'from',
                'last_page',
                'last_page_url',
                'links',
                'next_page_url',
                'path',
                'per_page',
                'prev_page_url',
                'to',
                'total',
            ],
        ])
        ->assertJson([
            'status' => 'OK',
        ]);

    // Pastikan jumlah data yang diharapkan ada dalam paginasi
    $this->assertCount(2, $response->json('data.data'));
});

it('can get a specific user by id', function () {
    // Create a user
    $user = DB::table('users')->insertGetId([
        'name' => 'John Doe',
        'email' => 'john.doe@example.com',
        'password' => 'password',
        'tanggal_lahir' => '2024-01-01',
        'tempat_tinggal' => 'Semaranga'
    ]);

    // Test the GET /users/{id} endpoint
    $response = $this->getJson("/api/users/{$user}");

    $response->assertStatus(200)
        ->assertJsonStructure([
            'data' => [
                'id',
                'name',
                'email',
                'tanggal_lahir',
                'tempat_tinggal'
            ]
        ])
        ->assertJson([
            'data' => [
                'id' => $user,
                'name' => 'John Doe',
                'email' => 'john.doe@example.com',
                'tanggal_lahir' => '2024-01-01',
                'tempat_tinggal' => 'Semaranga'
            ]
        ]);
});

it('can create a user', function () {
    $payload = [
        'name' => 'New User',
        'email' => 'new.user@example.com',
        'password' => 'password',
        'tanggal_lahir' => '1990-01-01',
        'tempat_tinggal' => 'Jakarta',
    ];

    $response = $this->postJson('/api/users/store', $payload);

    $response->assertStatus(201)
        ->assertJson([
            'message' => 'Data User Berhasil Disimpan',
        ]);

    $this->assertDatabaseHas('users', [
        'name' => 'New User',
        'email' => 'new.user@example.com',
    ]);
});

it('can update a user', function () {
    // Create a user
    $user = DB::table('users')->insertGetId([
        'name' => 'Old Name',
        'email' => 'old.email@example.com',
        'password' => 'password',
        'tanggal_lahir' => '1990-01-01',
        'tempat_tinggal' => 'Bandung',
    ]);

    $payload = [
        'name' => 'Updated Name',
        'email' => 'updated.email@example.com',
        'tanggal_lahir' => '1995-05-05',
        'tempat_tinggal' => 'Jakarta',
    ];

    $response = $this->putJson("/api/users/update/{$user}", $payload);

    $response->assertStatus(201)
        ->assertJson([
            'message' => 'Data User Berhasil Diubah',
        ]);

    $this->assertDatabaseHas('users', [
        'id' => $user,
        'name' => 'Updated Name',
        'email' => 'updated.email@example.com',
    ]);
});

it('can delete a user', function () {
    // Create a user
    $user = DB::table('users')->insertGetId([
        'name' => 'User to Delete',
        'email' => 'delete.me@example.com',
        'password' => 'password',
        'tanggal_lahir' => '1995-05-05',
        'tempat_tinggal' => 'Jakarta',
    ]);

    $response = $this->deleteJson("/api/users/delete/{$user}");

    $response->assertStatus(200)
        ->assertJson([
            'message' => 'Data User Berhasil Dihapus',
        ]);

    $this->assertDatabaseMissing('users', [
        'id' => $user,
    ]);
});
