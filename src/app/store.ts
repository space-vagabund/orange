import { InjectionKey } from 'vue';
import { Store, createStore } from 'vuex'
import { 
  ModuleStateType as CreateAccountPageModuleStateType, 
  module as createAccountPage 
} from '@/pages/CreateAccountPage';
 
export interface RootStateType {
  createAccountPage: CreateAccountPageModuleStateType
}

export const key: InjectionKey<Store<RootStateType>> = Symbol();


export default createStore<RootStateType>({
  modules: {
    createAccountPage
  }
})
