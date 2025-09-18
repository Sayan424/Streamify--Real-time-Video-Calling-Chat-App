import React, { useState } from "react";
import useAuthUser from "../hooks/useAuthUser.js";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { completeOnboarding } from "../lib/api.js";
import {
  CameraIcon,
  Globe,
  LoaderIcon,
  MapPinIcon,
  ShuffleIcon,
} from "lucide-react";
import { LANGUAGES } from "../constants/index.js";

const OnboardingPage = () => {
  const { authUser } = useAuthUser();
  const queryClient = useQueryClient();

  const [formState, setFormState] = useState({
    fullName: authUser?.fullName || "",
    bio: authUser?.bio || "",
    nativeLanguage: authUser?.nativeLanguage || "",
    learningLanguage: authUser?.learningLanguage || "",
    location: authUser?.location || "",
    profilePic: authUser?.profilePic || "",
  });

  const { mutate: onboardingMutation, isPending } = useMutation({
    mutationFn: completeOnboarding,
    onSuccess: () => {
      toast.success("Profile onboarded successfully");
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onboardingMutation(formState);
  };

  const handleRandomAvatar = () => {
    const idx = Math.floor(Math.random() * 100) + 1; //generates random number from 1-100
    const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;
    setFormState({ ...formState, profilePic: randomAvatar });
    toast.success("Random Profile Picture Generated!");
  };

  return (
    <div
      className="min-h-screen bg-base-100 flex items-center justify-center p-4"
      data-theme="forest"
    >
      <div className="card bg-base-200 w-full max-w-3xl shadow-bgshadow">
        <div className="card-body p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Complete Your Profile
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile pic container */}
            <div className="flex flex-col items-center justify-center space-y-4">
              {/* image preview */}
              <div className="size-32 rounded-full bg-base-300 overflow-hidden">
                {formState.profilePic ? (
                  <img
                    src={formState.profilePic}
                    alt="Profile preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <CameraIcon className="size-12 text-baseColor opacity-40" />
                  </div>
                )}
              </div>
              {/* Generate Random Avatar Btn */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleRandomAvatar}
                  className="bg-avatarButton font-bold py-2 px-4 rounded-xl flex hover:bg-opacity-90  w-full text-[#000] hover:scale-110 transition-all duration-100 "
                >
                  <ShuffleIcon className=" size-5 mr-2 self-center" />
                  Generate Random Avatar
                </button>
              </div>
            </div>
            {/* full name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Full Name </span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formState.fullName}
                onChange={(e) =>
                  setFormState({ ...formState, fullName: e.target.value })
                }
                className="input input-bordered w-full"
                placeholder="Your Full Name"
              />
            </div>
            {/* /bio input ellement */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Bio</span>
              </label>
              <textarea
                name="bio"
                value={formState.bio}
                onChange={(e) =>
                  setFormState({ ...formState, bio: e.target.value })
                }
                className="textarea textarea-bordered h-32"
                placeholder="Tell others about yourself and your language learning goles...."
              />
            </div>

            {/* languages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* native language */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Native Language</span>
                </label>
                <select
                  name="nativeLanguage"
                  value={formState.nativeLanguage}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      nativeLanguage: e.target.value,
                    })
                  }
                  className="select select-bordered w-full"
                  required
                >
                  <option value="">Select your Native Language</option>
                  {LANGUAGES.map((lang) => (
                    <option key={`native-${lang}`} value={lang.toLowerCase()}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
              {/* learning language */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Learning Language</span>
                </label>
                <select
                  name="learningLanguage"
                  value={formState.learningLanguage}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      learningLanguage: e.target.value,
                    })
                  }
                  required
                  className="select select-bordered w-full"
                >
                  <option value="">Select your Learning Language</option>
                  {LANGUAGES.map((lang) => (
                    <option key={`learning-${lang}`} value={lang.toLowerCase()}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* location */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <div className="relative">
                <MapPinIcon className="absolute top-1/2 transform -translate-y-1/2 left-3 size-5 text-base-content opacity-70" />
                <input
                  type="text"
                  name="location"
                  value={formState.location}
                  onChange={(e) =>
                    setFormState({ ...formState, location: e.target.value })
                  }
                  className="input input-bordered w-full pl-10"
                  placeholder="City, Country"
                  required
                />
              </div>
            </div>
            {/* submit button */}

            <button
              className="bg-baseColor text-white font-bold py-2 px-4 rounded-xl hover:bg-opacity-90 hover:scale-105 transition-all duration-200 w-full flex justify-center"
              disabled={isPending}
              type="submit"
            >
              {!isPending ? (
                <>
                  <Globe className="size-5 mr-2 self-center" />
                  Complete Onboarding
                </>
              ) : (
                <>
                  <LoaderIcon className="animate-spin-slow size-5 mr-2 self-center" />
                  Onboarding....
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
