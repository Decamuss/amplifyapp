import { CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_DI6DismtB",
    ClientId: "4eu8dvcikup0k5eb4fsoljcsmi"
}

export default new CognitoUserPool(poolData);