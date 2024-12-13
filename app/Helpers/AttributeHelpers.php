<?php

/**
 * import component
 */

use Illuminate\Support\Facades\Auth;

/**
 * global atribute
 */
function globalAttribute()
{
    return [
        'uriSegment1' => request()->segment(1),
        'uriSegment2' => request()->segment(2),
        'uriSegment3' => request()->segment(3),
        'uriSegment4' => request()->segment(4),
        'uriSegment5' => request()->segment(5),
    ];
}

/**
 * auth attribute
 */
function authAttribute()
{
    return [
        'id' => Auth::user()->uuid_user,
        'role' => Auth::user()->level,
    ];
}

/**
 * breadctrumb attribute
 */
function breadcrumbAttribute()
{
    return [];
}

/**
 * images path
 */
function path($type)
{
    $key  = "type";
    $data = [
        [
            'type' => 'user',
            'path' => 'assets/images/avatars'
        ],        
    ];

    $filteredArray = array_filter($data, function ($item) use ($key, $type) {
        return $item[$key] === $type;
    });

    return array_values($filteredArray)[0]['path'];
}

/**
 * days
 */
function daysAttribute()
{
    return ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];
}