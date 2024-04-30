<?php

namespace App\Http\Controllers\Api\Admin;

use App\Models\Feedback;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\FeedbackResource;
use Illuminate\Support\Facades\Validator;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //get pages
        $feedback = Feedback::when(request()->search, function ($feedback) {
            $feedback = $feedback->where('title', 'like', '%' . request()->search . '%');
        })->latest()->paginate(5);

        //append query string to pagination links
        $feedback->appends(['search' => request()->search]);

        //return with Api Resource
        return new FeedbackResource(true, 'List Data Feedback', $feedback);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title'     => 'required',
            'content'   => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        //create page
        $feedback = Feedback::create([
            'title'     => $request->title,
            'slug'      => Str::slug($request->title),
            'content'   => $request->content,
            'user_id'   => auth()->guard('api')->user()->id
        ]);

        if ($feedback) {
            //return success with Api Resource
            return new FeedbackResource(true, 'Data Feedback Berhasil Disimpan!', $feedback);
        }

        //return failed with Api Resource
        return new FeedbackResource(false, 'Data Feedback Gagal Disimpan!', null);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $feedback = Feedback::whereId($id)->first();

        if ($feedback) {
            //return success with Api Resource
            return new FeedbackResource(true, 'Detail Data Feedback!', $feedback);
        }

        //return failed with Api Resource
        return new FeedbackResource(false, 'Detail Data Feedback Tidak DItemukan!', null);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Feedback $feedback)
    {
        $validator = Validator::make($request->all(), [
            'title'     => 'required',
            'content'   => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        //update page
        $feedback->update([
            'title'     => $request->title,
            'slug'      => Str::slug($request->title),
            'content'   => $request->content,
            'user_id'   => auth()->guard('api')->user()->id
        ]);

        if ($feedback) {
            //return success with Api Resource
            return new FeedbackResource(true, 'Data Feedback Berhasil Diupdate!', $feedback);
        }

        //return failed with Api Resource
        return new FeedbackResource(false, 'Data Feedback Gagal Diupdate!', null);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Feedback $feedback)
    {
        if ($feedback->delete()) {
            //return success with Api Resource
            return new FeedbackResource(true, 'Data Feedback Berhasil Dihapus!', null);
        }

        //return failed with Api Resource
        return new FeedbackResource(false, 'Data Feedback Gagal Dihapus!', null);
    }
}
