import { InjectionKey } from 'vue';
import { Store, createStore } from 'vuex'
import { 
  ModuleStateType as CreateAccountPageModuleStateType, 
  module as createAccountPage 
} from '@/pages/CreateAccountPage';
import { 
  ModuleStateType as SignInPageModuleStateType, 
  module as signInPage 
} from '@/pages/SignInPage';
import { 
  ModuleStateType as ForgotPasswordPageModuleStateType, 
  module as forgotPasswordPage 
} from '@/pages/ForgotPasswordPage';
 
export interface RootStateType {
  createAccountPage: CreateAccountPageModuleStateType
  signInPage: SignInPageModuleStateType,
  forgotPasswordPage: ForgotPasswordPageModuleStateType
}

export const key: InjectionKey<Store<RootStateType>> = Symbol();

export default createStore<RootStateType>({
  modules: {
    createAccountPage,
    signInPage,
    forgotPasswordPage
  }
})
