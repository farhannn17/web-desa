<?php

namespace App\Http\Controllers\Api\Public;

use App\Models\Feedback;
use App\Http\Controllers\Controller;
use App\Http\Resources\FeedbackResource;

class FeedbackController extends Controller
{
    /**
     * index
     *
     * @return void
     */
    public function index()
    {
        $feedback = Feedback::oldest()->get();

        //return with Api Resource
        return new FeedbackResource(true, 'List Data Feedback', $feedback);
    }

    /**
     * show
     *
     * @param  mixed $slug
     * @return void
     */
    public function show($slug)
    {
        $feedback = Feedback::where('slug', $slug)->first();

        if ($feedback) {
            //return with Api Resource
            return new FeedbackResource(true, 'Detail Data Feedback', $feedback);
        }

        //return with Api Resource
        return new FeedbackResource(false, 'Detail Data Feedback Tidak Ditemukan!', null);
    }
}
