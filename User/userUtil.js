class UserUtil{
    isUserSubscribed(userInfo){
        /*
            Depending on requirement will implement later
        */
        // can make db calls
        return true;
    }
    isAuthenticUser(userinfo){
        /*
            Depending on requirement will implement later
         */
        return true;
    }
}

const userUtil = new UserUtil();

module.exports = userUtil;
