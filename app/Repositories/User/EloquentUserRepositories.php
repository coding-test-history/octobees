<?php

namespace App\Repositories\User;

/**
 * import component
 */

use App\Exceptions\CustomException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

/**
 * import traits
 */

use App\Traits\Response;
use App\Traits\Message;

/**
 * import models
 */

use App\Models\User;

/**
 * import helpers
 */

use App\Helpers\CheckerHelpers;

/**
 * import interface
 */

use App\Repositories\User\UserRepositories;

class EloquentUserRepositories implements UserRepositories
{
    use Message, Response;

    private $checkerHelpers;
    private $date;
    private $userModel;

    public function __construct(
        CheckerHelpers $checkerHelpers,
        User $userModel
    ) {
        /**
         * initialize helper
         */
        $this->checkerHelpers = $checkerHelpers;

        /**
         * initialize model
         */
        $this->userModel = $userModel;

        /**
         * static value
         */
        $this->date = Carbon::now()->toDateString();
    }

    /**
     * get user list
     */
    public function getList()
    {
        try {
            // process get user data
            $data = $this->userModel->paginate(10);
            $response = $this->sendResponse(null, 200, $data);

        } catch (CustomException $ex) {
            $ex = json_decode($ex->getMessage());
            $response = $this->sendResponse($ex[0], $ex[1]);
        } catch (\Exception $e) {
            $response = $this->sendResponse($e->getMessage(), 500);
        }
        return $response;
    }

    /**
     * get user by id
     */
    public function getUserById($id)
    {
        try {
            // process get user data
            $getUser = $this->checkerHelpers->userChecker(['id' => $id]);
            if (is_null($getUser)):
                throw new CustomException(json_encode([$this->outputMessage('not found', 'user'), 404]));
            endif;

            // response data
            $data = $getUser;
            $response = $this->sendResponse(null, 200, $data);
        } catch (CustomException $ex) {
            $ex = json_decode($ex->getMessage());
            $response = $this->sendResponse($ex[0], $ex[1]);
        } catch (\Exception $e) {
            $response = $this->sendResponse($e->getMessage(), 500);
        }
        return $response;
    }

    /**
     * store user
     */
    public function storeUser($request)
    {
        DB::beginTransaction();
        try {

            // save user
            $saveUser = $this->userModel->factory()->withPersonalTeam()->create($request);
            if (!$saveUser) :
                throw new \Exception($this->outputMessage('unsaved', 'user'));
            endif;

            // get created user
            $userParam = collect($request)->except(['password'])->toArray();
            $getCreatedUser = $this->checkerHelpers->userChecker($userParam);
            if (is_null($getCreatedUser)) :
                throw new \Exception($this->outputMessage('not found', 'user'));
            endif;

            DB::commit();
            $response = $this->sendResponse($this->outputMessage('saved', 'user', $getCreatedUser), 201, null);
        } catch (CustomException $ex) {
            $ex = json_decode($ex->getMessage());
            $response = $this->sendResponse($ex[0], $ex[1]);
        } catch (\Exception $e) {
            DB::rollback();
            $response = $this->sendResponse($e->getMessage(), 500);
        }
        return $response;
    }

    /**
     * update user
     */
    public function updateUser($id, $request)
    {
        DB::beginTransaction();
        try {

            // check user
            $checkUser = $this->checkerHelpers->userChecker(['id' => $id]);
            if (is_null($checkUser)):
                throw new CustomException(json_encode([$this->outputMessage('not found', 'user'), 404]));
            endif;

            // update user process
            $updateUser = $this->userModel->where('id', $id)->update($request);
            if (!$updateUser) :
                throw new \Exception($this->outputMessage('update fail', 'user'));
            endif;

            DB::commit();
            $response = $this->sendResponse($this->outputMessage('updated', 'user'), 201, null);
        } catch (CustomException $ex) {
            $ex = json_decode($ex->getMessage());
            $response = $this->sendResponse($ex[0], $ex[1]);
        } catch (\Exception $e) {
            DB::rollback();
            $response = $this->sendResponse($e->getMessage(), 500);
        }
        return $response;
    }


    /**
     * delete user
     */
    public function deleteUser($id)
    {
        DB::beginTransaction();
        try {

            // check user
            $checkUser = $this->checkerHelpers->userChecker(['id' => $id]);
            if (is_null($checkUser)):
                throw new CustomException(json_encode([$this->outputMessage('not found', 'user'), 404]));
            endif;

            // delete user process
            $deleteUser = $this->userModel->where('id', $id)->delete();
            if (!$deleteUser) :
                throw new \Exception($this->outputMessage('undeleted', 'user'));
            endif;

            DB::commit();
            $response = $this->sendResponse($this->outputMessage('deleted', 'user'), 200, null);
        } catch (CustomException $ex) {
            $ex = json_decode($ex->getMessage());
            $response = $this->sendResponse($ex[0], $ex[1]);
        } catch (\Exception $e) {
            DB::rollback();
            $response = $this->sendResponse($e->getMessage(), 500);
        }
        return $response;
    }
}
