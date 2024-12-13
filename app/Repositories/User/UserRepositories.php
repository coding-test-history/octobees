<?php

namespace App\Repositories\User;

interface UserRepositories
{
    public function getList();
    public function getUserById(int $id);
    public function storeUser(array $request);
    public function updateUser(int $id, array $request);
    public function deleteUser(int $id);
}
