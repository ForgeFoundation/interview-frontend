import axios from 'axios';

// const BACKEND_URL = 'http://127.0.0.1:8000';
const BACKEND_URL = 'https://3nuqhxnbzm.us-east-1.awsapprunner.com';
export const AskFeedback = async ({
    answer,
    user_fid,
    prompt_message,
    is_public
}) => {
    const url = `${BACKEND_URL}/crud/generate_feedback/`;
    const data = {
        answer,
        user_fid,
        prompt_message,
        is_public
    };

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(response);
        const message = response.data.response;
        
        const feedback = {
            type: 'success',
            message: message
        }

        console.log('feedback object to create',
            feedback)

        return feedback;


    } catch (error) {
        console.error(error);
        return '';
    }
}

export const getRandomPrompt = async () => {
    const url = `${BACKEND_URL}/crud/prompt_random/`;

    try {
        const response = await axios.get(url);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
        return '';
    }
}

/**
 * 
class CreateAnswer(BaseModel):
    """
    Just for creating asnwer with no grading yet.
    """
    answer: str
    user_fid: str

    prompt_message: str
    is_public: bool
    class Config:
        orm_mode = True
 */
export const saveAnswer = async ({
    answer,
    user_fid,
    prompt_message,
    is_public
}) => {
    const url = `${BACKEND_URL}/crud/answer/`;
    const data = {
        answer,
        user_fid,
        prompt_message,
        is_public
    };

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
        return '';
    }
}

/**
 * 
 * 
class CreateUser(BaseModel):
    firebaseid: str
    username: str
    email: str
    class Config:
        orm_mode = True


        /crud/sign_user
 */
export const signInUser = async (username, user_fid, email) => {

    const url = `${BACKEND_URL}/crud/sign_user`;
    const data = {
        firebaseid: user_fid,
        username: username,
        email: email
    }

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
        return '';
    }
}

export const postGetAnswers  = async (user_fid, prompt_message) => {
    const url = `${BACKEND_URL}/crud/prev_answers`;
    const data ={
        user_fid,
        prompt_message
    }
    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
        return '';
    }
}

export const getRandomPromp = async (collection_id) => {
    const url = `${BACKEND_URL}/crud/prompt_random/`;

    try {
        // Add collection_id as get param
        const response = await axios.get(url, {
            params: {
                collection_id
            }
        });
        // console.log(response);



        return response.data;
    } catch (error) {
        console.error(error);
        return '';
    }
}

export const getHeatmapData = async (user_fid) => {
    const url = `${BACKEND_URL}/crud/heatmap_activity/`;

    try {
        // Add collection_id as get param
        const response = await axios.get(url, {
            params: {
                user_fid
            }
        });
        // console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
        return '';
    }
}

export const getRecentAnswers = async (user_fid) => {
    const url = `${BACKEND_URL}/crud/recent_answers/`;

    try {
        // Add collection_id as get param
        const response = await axios.get(url, {
            params: {
                user_fid
            }
        });
        // console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
        return '';
    }
}

export const getCategoricalPrompts = async (collection_id) => {
    const url = `${BACKEND_URL}/crud/prompts/`;

    try {
        // Add collection_id as get param
        const response = await axios.get(url, {
            params: {
                collection_id
            }
        });
        // console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
        return '';
    }
}


export const bookmarkPrompt = async (user_fid, prompt_message) => {
    const url = `${BACKEND_URL}/crud/bookmark/`;
    const data = {
        user_fid,
        prompt_message
    };

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
        return '';
    }
}


export const getUserBookmarks = async (user_fid) => {  
    const url = `${BACKEND_URL}/crud/bookmarks/`;

    try {
        const response = await axios.get(url, {
            params: {
                user_fid
            }
        });

        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
        return '';
    }
}

