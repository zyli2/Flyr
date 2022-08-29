import jwt from 'jsonwebtoken';
/*
    Explanation of what middleware is

    it is a process that happens before an action is reached to the controller.
    
    Example:
    Liking a post

    click the like button => auth middleware (NEXT) => like controller...

    btw this is used in routes!
*/

// next can be simply understood as do something and go next
const auth = async (req, res, next) => {
    try {
        // check if the user is actually who the person claims to be, via jsonwebtoken
        // check the user's token by receiving the token from the frontend
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;
        
        let decodedData;

        // our method of checking the user, if it's an id we generated
        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, 'test');

            req.userId = decodedData?.id;
        } else {
        // if it's a google auth generated id
            decodedData = jwt.decode(token);

            // sub is a google method of differentiating every google user
            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        console.log(error);
    }
};

export default auth;