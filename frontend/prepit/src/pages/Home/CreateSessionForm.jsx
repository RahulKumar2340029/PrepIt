import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import Spinner from '../../components/Loader/SpinnerLoader';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';

const CreateSessionForm = () => {
    const [formData, setFormData] = useState({
        role: "",
        experience: "",
        topicsToFocus: "",
        description: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (key, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };

    const handleCreateSession = async (e) => {
        e.preventDefault();
        const { role, experience, topicsToFocus } = formData;
        if (!role || !experience || !topicsToFocus) {
            setError("Please fill all the required details");
            return;
        }
        setError("");
        setIsLoading(true);

        try{
            const aiResponse = await axiosInstance.post(API_PATHS.AI.GENERATE_QUESTIONS,{
                role,
                experience,
                topicsToFocus,
                numberOfQuestions: 10,
            })

            const generatedQuestions = aiResponse.data;
            const response = await axiosInstance.post(API_PATHS.SESSION.CREATE, {
                ...formData,
                questions: generatedQuestions,
            })

            if (response.data?.session?._id) {
                navigate(`/interview-prep/${response.data?.session?._id}`);
            }

        }catch(error){
            if(error.response && error.response.data.message) {
                setError(error.response.data.message);
            }else{
                setError("Something went wrong. Please try again.")
            }
        }finally {
            setIsLoading(false)
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Start a New Interview Journey
            </h3>
            <p className="text-sm text-gray-500 mb-6">
                Fill out a few quick details and unlock your personalised set of interview questions:
            </p>

            <form onSubmit={handleCreateSession} className="space-y-4">
                <Input
                    value={formData.role}
                    onChange={({ target }) => handleChange("role", target.value)}
                    label="Target Role"
                    placeholder="e.g., FrontEnd Developer, UI/UX Designer"
                    type="text"
                />
                <Input
                    value={formData.experience}
                    onChange={({ target }) => handleChange("experience", target.value)}
                    label="Years of Experience"
                    placeholder="e.g., 1 Year, 3 Year, 5+ Years"
                    type="number"
                />
                <Input
                    value={formData.topicsToFocus}
                    onChange={({ target }) => handleChange("topicsToFocus", target.value)}
                    label="Topics to Focus on"
                    placeholder="e.g., React, NodeJS, MongoDB"
                    type="text"
                />
                <Input
                    value={formData.description}
                    onChange={({ target }) => handleChange("description", target.value)}
                    label="Description"
                    placeholder="Any specific goals or notes for this session"
                    type="text"
                />

                {error && (
                    <p className="text-red-500 text-sm font-medium">{error}</p>
                )}

                <button
                    type="submit"
                    className={`w-full py-2 px-4 rounded-lg text-white transition ${
                        isLoading
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-black hover:bg-gray-900'
                    }`}
                    disabled={isLoading}
                >
                    {isLoading ? <Spinner /> : "Create Session"}
                </button>
            </form>
        </div>
    );
};

export default CreateSessionForm;
