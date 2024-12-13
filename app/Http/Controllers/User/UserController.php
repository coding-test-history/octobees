<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreRequest;
use App\Http\Requests\User\UpdateRequest;
use App\Repositories\User\UserRepositories;

class UserController extends Controller
{
    private $userRepositories;

    public function __construct(
        UserRepositories $userRepositories
    ) {
        $this->userRepositories = $userRepositories;
    }

    public function getList()
    {
        $response = $this->userRepositories->getList();
        $code = $response['code'];
        unset($response['code']);
        return response()->json($response, $code);
    }

    public function getUserById($id)
    {
        $response = $this->userRepositories->getUserById($id);
        $code = $response['code'];
        unset($response['code']);
        return response()->json($response, $code);
    }

    public function storeUser(
        StoreRequest $storeRequest
    ) {
        $storeRequest = $storeRequest->all();
        $response = $this->userRepositories->storeUser($storeRequest);
        $code = $response['code'];
        unset($response['code']);
        return response()->json($response, $code);
    }

    public function updateUser($id, UpdateRequest $updateRequest)
    {
        $updateRequest = $updateRequest->all();

        $response = $this->userRepositories->updateUser($id, $updateRequest);
        $code = $response['code'];
        unset($response['code']);
        return response()->json($response, $code);
    }

    public function deleteUser($id)
    {
        $response = $this->userRepositories->deleteUser($id);
        $code = $response['code'];
        unset($response['code']);
        return response()->json($response, $code);
    }
}
