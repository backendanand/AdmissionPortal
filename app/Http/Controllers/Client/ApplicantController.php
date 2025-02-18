<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

use App\Models\User;
use App\Models\Role;
use App\Models\Applicant;

class ApplicantController extends Controller
{
    public function dashboard(){
        return inertia('Client/Applicant/Dashboard');
    }

    public function index()
    {
        return inertia('Client/Applicant/Apply');
    }

    public function store(Request $request)
    {
        $basicValidated = $request->validate([
            'first_name' => 'required|string|max:50',
            'middle_name' => 'nullable|string|max:50',
            'last_name' => 'required|string|max:50',
            'date_of_birth' => 'required|date|before:today',
            'gender' => 'required|in:Male,Female,Other',
            'city' => 'required|integer',
            'state' => 'required|integer',
            'country' => 'required|integer',
            'pincode' => 'required|string|min:6|max:6|regex:/^[0-9]{6}$/',
            'address' => 'required|string|max:500',
            // 'photo' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'phone' => 'required|string|min:10|max:15|regex:/^[0-9]{10,15}$/|unique:applicants,phone',
        ]);

        $accountValidated = $request->validate([
            'email' => 'required|email|max:100|unique:applicants,email',
            'password' => 'required|string|min:8|max:20|confirmed',
            'password_confirmation' => 'required|string|min:8|max:20'
        ]);
        try {
            $password_hash = Hash::make($accountValidated['password']);
            $fullName = $basicValidated['first_name'] . ' ' . $basicValidated['middle_name'] . ' ' . $basicValidated['last_name'];

            DB::transaction(function () use ($fullName, $password_hash, $basicValidated, $accountValidated) {
                $accountValidated['role_id'] = Role::where('name', '=', 'applicant')->first()->id;
                $accountValidated['name'] = $fullName;
                $accountValidated['phone'] = $basicValidated['phone'];
                $user = User::create($accountValidated);

                // dd($user);

                $basicValidated['user_id'] = $user->id;
                $basicValidated['email'] = $user->email;
                $applicant = Applicant::create($basicValidated);
            });

            return redirect('/')->with('success', 'Account created successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong! Please try again later.' . $e->getMessage());
        }
    }
}
