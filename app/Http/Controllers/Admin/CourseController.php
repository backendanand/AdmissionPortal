<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Course;

class CourseController extends Controller
{
    public function index(){
        $courses = Course::all();
        return inertia('Admin/Course/Index', ['courses' => $courses]);
    }
}
