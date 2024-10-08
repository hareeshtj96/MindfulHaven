import { userRepository, adminRepository, therapistRepository } from "../repository";
import { userRegistration, userRegistrationGoogle, userLoginGoogle, userLogin, forgotPassword, resetPassword } from "../../application/UseCases";

import { adminLogin } from "../../application/adminUseCases";

import { therapistRegistration } from "../../application/therapistUseCases";

const useCase: any={
    userRegistration: userRegistration,
    userRegistrationGoogle:userRegistrationGoogle,
    userLoginGoogle:userLoginGoogle,
    userLogin: userLogin,
    forgotPassword: forgotPassword,
    resetPassword: resetPassword,

    

    adminLogin: adminLogin,


    therapistRegistration: therapistRegistration
}

const repository:any={
    userRepository,
    adminRepository,
    therapistRepository
}


export default{
    useCase,
    repository
}
