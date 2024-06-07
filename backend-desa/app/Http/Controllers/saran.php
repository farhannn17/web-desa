<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\Saranresource;

class saran extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $saran=DB::table("sarans")->get();
        return new Saranresource(true, 'List Data Saran', $saran);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $nama=$request->nama;
        $saran=$request->saran;
        $save=DB::table("sarans")->insert([
            "nama"=>$nama,
            "saran"=>$saran
        ]);

        if ($save) {
            //return success with Api Resource
            return new Saranresource(true, 'Data Saran Berhasil Disimpan!', $save);
        }

        //return failed with Api Resource
        return new Saranresource(false, 'Data Saran Gagal Disimpan!', null);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
