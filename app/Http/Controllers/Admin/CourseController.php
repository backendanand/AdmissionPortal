<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Course;

class CourseController extends Controller
{
    public function index(){
        $courses = Course::paginate(5);
        return inertia('Admin/Course/Index', ['courses' => $courses]);
    }

    public function create(){
        return inertia('Admin/Course/Create');
    }

    public function store(Request $request){
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'duration' => 'required',
            'fees' => 'required',
            'eligibility' => 'required|string|max:255',
        ]);

        $course = Course::create($validated);

        return redirect('/admin/courses')->with('success', 'Course created successfully.');
    }
}
