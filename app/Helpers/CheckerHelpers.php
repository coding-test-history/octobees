<?php

namespace App\Helpers;

/**
 * import models
 */

use App\Models\Menu;
use App\Models\Role;
use App\Models\User;

class CheckerHelpers
{
    // menu checker
    public function menuChecker($data)
    {
        $checkMenu = Menu::where($data)->first();
        return $checkMenu;
    }

    // role checker
    public function roleChecker($data){
        $roleChecker = Role::where($data)->first();
        return $roleChecker;
    }

    // user checker
    public function userChecker($data){
        $userChecker = User::where($data)->first();
        return $userChecker;
    }
}
