// vuex.d.ts
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // declare own store states
  interface State  {
    createAccountPage: {
      username: string,
      password: string,
      companyName: string,
      companyPassword: string,
    },
    signInPage: {
      username: string,
      password: string,
    },
    forgotPasswordPage: {
      username: string,
      newPassword: string,
      confirmPassword: string,
    }
  }
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
