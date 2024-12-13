<?php

namespace App\Traits;

/**
 * import helper
 */

use App\Helpers\CheckerHelpers;

trait Message
{
    public function outputMessage(string $type, string $value = null, object $datas = null)
    {
        $key  = "type";
        $data = [
            [
                // data ada atau kosong
                'type'    => 'data',
                'message' => ($value > 0) ? "data found" : "data empty"
            ],
            [
                // data tidak ditemukan
                'type'    => 'not found',
                'message' => 'data ' . $value . ' tidak ditemukan'
            ],
            [
                // data berhasil di simpan
                'type'    => 'saved',
                'message' => 'data ' . $value . ' berhasil disimpan',
                'data'    => $datas
            ],
            [
                // data berhasil di simpan
                'type'    => 'required',
                'message' => 'data ' . $value . ' tidak boleh kosong'
            ],
            [
                // data gagal disimpan
                'type'    => 'unsaved',
                'message' => 'data ' . $value . ' gagal disimpan'
            ],
            [
                // data berhasil di ubah
                'type'    => 'updated',
                'message' => 'data ' . $value . ' berhasil diubah'
            ],
            [
                // data gagal diubah
                'type'    => 'update fail',
                'message' => 'data ' . $value . ' gagal diubah'
            ],
            [
                // data suda ada
                'type'    => 'exist',
                'message' => 'data ' . $value . ' sudah ada / terdaftar'
            ],
            [
                // data berhasil di hapus
                'type'    => 'deleted',
                'message' => 'data ' . $value . ' berhasil dihapus'
            ],
            [
                // data gagal di hapus
                'type'    => 'undeleted',
                'message' => 'data ' . $value . ' gagal dihapus'
            ],
            [
                // data berhasil di hapus permanen
                'type'    => 'deleted permanent',
                'message' => 'data ' . $value . ' berhasil dihapus permanen'
            ],
            [
                // data gagal di hapus permanen
                'type'    => 'undeleted permanent',
                'message' => 'data ' . $value . ' gagal dihapus permanen'
            ],
            [
                // format file tidak didukung
                'type'    => 'unsupported',
                'message' => 'format file yang di upload tidak didukung'
            ],
            [
                // directori tidak ditemukan
                'type'    => 'directory',
                'message' => 'directori tidak ditemukan'
            ],
            [
                // logout
                'type'    => 'logout',
                'message' => 'Successfully logged out'
            ],
            [
                // restore
                'type'    => 'restore',
                'message' => 'Successfully restore data'
            ],
            [
                // restore fail
                'type'    => 'restore fail',
                'message' => 'unsuccessfully restore data'
            ],
            [
                // pembatasan akses
                'type'    => 'forbidden',
                'message' => 'anda tidak memiliki akses untuk data ini'
            ],
            [
                // invalid data
                'type'    => 'invalid',
                'message' => 'invalid ' . $value
            ],
        ];

        $filteredArray = array_filter($data, function ($item) use ($key, $type) {
            return $item[$key] === $type;
        });

        $result = array_values($filteredArray)[0]['message'];

        if ($type === 'saved') {
            return [
                'message' => ucwords($result),
                'data'    => $datas ?? []
            ];
        }

        return ucwords($result);
    }
}
